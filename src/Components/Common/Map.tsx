import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import React, { useMemo } from 'react'
import '..//..//assets/css/Map.scss'


type Props = {}

type MapOptions = google.maps.MapOptions

const Map = (props: Props) => {

  const center = useMemo(() => ({ lat: 49.949111, lng: 36.293367 }), [])
  const options = useMemo<MapOptions>(() => ({
    mapId: "f7696897e7abc08a",
    disableDefaultIU: true,
    streetViewControl: false,
    clickableIcons: false,
  }), [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!
  })

  if (!isLoaded) return <div>...Loading</div>

  return (
    <div>
      <GoogleMap
        zoom={15}
        center={center}
        options={options}
        mapContainerClassName="map-container">
          <MarkerF position={center}/>
      </GoogleMap>
    </div>
  )
}

export default Map