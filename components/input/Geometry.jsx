import React, {useState, useCallback} from 'react'
import { set, unset } from 'sanity'
import { Autocomplete, Box, TextInput, Flex, Label, Stack, Card, Text } from '@sanity/ui'
import {AiOutlineSearch} from 'react-icons/ai'

const GM_KEY = process.env.SANITY_STUDIO_GMAP_KEY

const Geometry = (props) => {
  const { value, onChange } = props
  const [predictions, setPredictions] = useState([])

  const handleSelect = useCallback((placeId) => {
    fetchCoordinates(placeId)
  }, [])

  const handleChange = useCallback((place) => {
    if (place) {
      const sw = [place.viewport.low.longitude, place.viewport.low.latitude]
      const ne = [place.viewport.high.longitude, place.viewport.high.latitude]

      onChange(set({
        _type: 'geopoint',
        geoName: place.displayName.text, 
        latitude: place.location.latitude, 
        longitude: place.location.longitude,
        mapBounds: {
          _type: 'mapBounds',
          southwest: sw,
          northeast: ne,
        }
      }));
    } else {
      onChange(unset());
    }
  }, [onChange])

  const handleSearch = async (query) => {
    if (!query) {
      setPredictions([])
      return
    }

    try {
      const response = await fetch('https://places.googleapis.com/v1/places:autocomplete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': GM_KEY,
        },
        body: JSON.stringify({
          input: query,
        }),
      })

      if (!response.ok) throw new Error('Failed to fetch predictions');

      const data = await response.json()
      
      const formattedResults = data.suggestions?.map(suggestion => ({ 
        value: suggestion.placePrediction.placeId,
        name: suggestion.placePrediction.text.text,
        description: suggestion.placePrediction.structuredFormat?.secondaryText?.text || ''
      })) || []

      setPredictions(formattedResults)
    } catch (error) {
      console.error("Error fetching place predictions:", error)
      setPredictions([])
    }
  }

  const fetchCoordinates = async (placeId) => {
    if (!placeId) return;

    try {
      const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: {
          'X-Goog-Api-Key': GM_KEY,
          'X-Goog-FieldMask': 'displayName,location,viewport'
        }
      })

      if (!response.ok) throw new Error('Failed to fetch place details');
      
      const placeDetails = await response.json();

      if (placeDetails && placeDetails.location) {
        handleChange(placeDetails);
      } else {
        console.error("No place details found.");
      }

    } catch (error) {
      console.error("Error fetching place details:", error)
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
                  <Text weight="semibold">{option.name}</Text>
                  <Text size={1} muted>{option.description}</Text>
                </Stack>
              </Card>
            )}
            placeholder="Search for a city, address, or place..."
          />
        </Box>
        <Flex justify={'space-between'} gap={3}>
          <Box flex={1}>
            <Stack space={2}>
              <Label size={1}>Latitude</Label>
              <TextInput
                id="latitude"
                type="number" 
                value={value?.latitude || ''}
                readOnly 
              />
            </Stack>
          </Box>
          <Box flex={1}>
            <Stack space={2}>
              <Label size={1}>Longitude</Label>
              <TextInput 
                id="longitude"
                type="number" 
                value={value?.longitude || ''}
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