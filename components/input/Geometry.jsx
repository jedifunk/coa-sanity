import React, {useState, useCallback, useRef, useEffect} from 'react'
import { useFormValue, set, unset } from 'sanity'
import { Autocomplete, Box, TextInput, Flex, Label, Stack, Card, Text } from '@sanity/ui'
import {AiOutlineSearch} from 'react-icons/ai'

const GM_KEY = process.env.SANITY_STUDIO_GMAP_KEY

const Geometry = (props) => {
  const docType = useFormValue(['_type'])
  const { value, onChange } = props
  const [predictions, setPredictions] = useState([])

  const autocompleteService = useRef()
  const placesService = useRef()

  useEffect(() => {
    loadGoogleMapsApi()
  }, [])

  const loadGoogleMapsApi = () => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GM_KEY}&libraries=places`
    script.async = true
    script.defer = true
    script.onload = () => {
      autocompleteService.current = new window.google.maps.places.AutocompleteService()
      placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'))
    }
    document.body.appendChild(script)
  }

  const handleSelect = useCallback((e) => {
    fetchCoordinates(e)
  })

  const handleChange = useCallback((newValue) => {

    if (newValue) {
      let viewportValues = Object.values(newValue.geometry.viewport);
      let northeast, southwest;

      if (viewportValues[0].hi > viewportValues[0].lo) {
        northeast = viewportValues[0];
        southwest = viewportValues[1];
      } else {
        northeast = viewportValues[1];
        southwest = viewportValues[0];
      }

      onChange(set({
        'geoName': newValue.name, 
        'latitude': newValue.geometry.location.lat(), 
        'longitude': newValue.geometry.location.lng(),
        'mapBounds': {
          'northeast': [northeast.hi, northeast.lo], 
          'southwest': [southwest.hi, southwest.lo]
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