import React, {useState, useCallback, useRef, useEffect} from 'react'
import { set, unset } from 'sanity'
import { Autocomplete, Box, TextInput, Flex, Label, Stack, Card, Text } from '@sanity/ui'
import {AiOutlineSearch} from 'react-icons/ai'

const GM_KEY = process.env.SANITY_STUDIO_GMAP_KEY

function useIsMounted() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return useCallback(() => isMounted.current, []);
}

const Geometry = (props) => {
  const { value, onChange } = props
  const [predictions, setPredictions] = useState([])

  const autocompleteService = useRef()
  const placesService = useRef()
  const isMounted = useIsMounted()

  useEffect(() => {
    if (!autocompleteService.current || !placesService.current) {
      loadGoogleMapsApi();
    }
  }, []);

  const loadGoogleMapsApi = () => {
    if (window.google && window.google.maps) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
      placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
      return;
    }

    if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) return;

    window.initMap = function() {
      if (isMounted.current) {
        autocompleteService.current = new window.google.maps.places.AutocompleteService()
        placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'))
      }
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GM_KEY}&libraries=places&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script)
  }

  useEffect(() => {
    return () => {
      const script = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
      if (script) {
        script.remove();
      }
    };
  }, [])

  const handleSelect = useCallback((e) => {
    fetchCoordinates(e)
  })

  const handleChange = useCallback((newValue) => {

    if (newValue) {
      let viewportValues = Object.values(newValue.geometry.viewport);
      let lats = viewportValues[0]
      let lngs = viewportValues[1]
      // setting the bounding box, in LngLat since that is what Mapbox uses
      const ne = [lngs.hi, lats.hi]
      const sw = [lngs.lo, lats.lo]

      onChange(set({
        'geoName': newValue.name, 
        'latitude': newValue.geometry.location.lat(), 
        'longitude': newValue.geometry.location.lng(),
        'mapBounds': {
          'northeast': ne,
          'southwest': sw,
        }
      }));
    } else {
      onChange(unset());
    }
  }, [onChange])

  const handleSearch = async (query) => {
    if (autocompleteService.current) {
      autocompleteService.current.getPlacePredictions({ input: query }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const formattedResults = predictions.map(prediction => ({ 
            value: prediction.place_id, 
            name: prediction.structured_formatting.main_text ,
            description: prediction.description
          }))
          setPredictions(formattedResults)
        }
      })
    }
  }

  const fetchCoordinates = async (placeId) => {
    if (placesService.current) {
      placesService.current.getDetails({ placeId: placeId, fields: ['name', 'geometry'] }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          handleChange(place)
        }
      })
    }
  }

  return (
    <Box padding={3}>
      <Stack space={4}>
        <Box>
          <Autocomplete
            icon={AiOutlineSearch}
            id="geoName"
            radius={0}
            options={predictions}
            filterOption={() => true}
            onQueryChange={handleSearch}
            value={value?.geoName}
            onSelect={handleSelect}
            renderOption={(option) => (
              <Card as="button" padding={3}>
                <Stack space={3}>
                  <Text>{option.name}</Text>
                  <Text size={1}>{option.description} | ID:{option.value}</Text>
                </Stack>
              </Card>
            )}
            placeholder="Search for city ..."
          />
        </Box>
        <Flex justify={'space-between'}>
          <Box>
            <Stack space={2}>
              <Label size={1}>Latitude</Label>
              <TextInput
                id="latitude"
                type="number" 
                value={value ? value.latitude : ''}
                readOnly 
              />
            </Stack>
          </Box>
          <Box>
            <Stack space={2}>
              <Label size={1}>Longitude</Label>
              <TextInput 
                id="longitude"
                type="number" 
                value={value ? value.longitude : ''}
                readOnly 
              />
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Geometry