import React, {useState, useCallback} from 'react'
import { useFormValue, set, unset } from 'sanity'
import { Autocomplete, Box, TextInput, Flex, Label, Stack, Card, Text } from '@sanity/ui'
import {AiOutlineSearch} from 'react-icons/ai'

const Geometry = (props) => {
  const docType = useFormValue(['_type'])
  const { value, onChange } = props
  const [predictions, setPredictions] = useState([])

  const handleAutoChange = useCallback((e) => {
    const nextValue = e
    fetchCoordinates(nextValue)
  })

  const handleChange = useCallback((newValue) => {
    onChange(newValue ? set(
      {
        'geoName': newValue.name, 
        'latitude': newValue.geometry.location.lat, 
        'longitude': newValue.geometry.location.lng,
        'mapBounds': {'northeast': [newValue.geometry.viewport.northeast.lng, newValue.geometry.viewport.northeast.lat], 'southwest': [newValue.geometry.viewport.southwest.lng, newValue.geometry.viewport.southwest.lat]}
      }
    ) : unset())
  }, [onChange])

  const handleSearch = async (query) => {
    const fetchQuery = docType === 'city' ? `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&radius=50000&types=(cities)&key=AIzaSyBXkg5BIZ8UWhUbz7_TDn46o6KDJX10l6I` : `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&radius=50000&key=AIzaSyBXkg5BIZ8UWhUbz7_TDn46o6KDJX10l6I`
    
    try {
      const response = await fetch(fetchQuery)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const formattedResults = data.predictions.map(prediction => ({ value: prediction.description, ...prediction }))

      setPredictions(formattedResults)
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }

  const fetchCoordinates = async (location) => {
    if (location !== undefined) {
      await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${location}&inputtype=textquery&fields=name,geometry,type&key=AIzaSyBXkg5BIZ8UWhUbz7_TDn46o6KDJX10l6I`)
      .then(response => response.json())
      .then(data => {
        const coors = data.candidates[0]

        handleChange(coors)
      })
      .catch(error => console.error('fetchCoordinates:', error))
    }
  }

  return (
    <Box padding={3}>
      <Stack space={4}>
        <Box>
          <Autocomplete
            // {...elementProps}
            icon={AiOutlineSearch}
            id="geoName"
            options={predictions}
            onQueryChange={handleSearch}
            value={value ? value.geoName : ''}
            onChange={handleAutoChange}
            renderOption={(option) => (
              <Card as="button" padding={3}>
                <Stack space={3}>
                  <Text>{option.structured_formatting.main_text}</Text>
                  <Text size={1}>{option.description}</Text>
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