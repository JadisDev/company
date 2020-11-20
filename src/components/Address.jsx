import { GoogleComponent } from 'react-google-location'
import MapContainer from './Map'
import React, { useState } from 'react';

const API_KEY = "AIzaSyD-Pid2nVCHl5cQxM1E6OJFKl17daEv0fs"  // how to get key - step are below

const Address = () => {

    const [lat, setLat] = useState(40.854885)
    const [lng, setLng] = useState(-88.081807)

    const setLatLng = (object) => {
        console.log(object.coordinates)

        if (object.coordinates !== "") {
            setLat(object.coordinates.lat)
            setLng(object.coordinates.lng)
        }
    }

    return (
        <div>
            <div >
                <GoogleComponent

                    apiKey={API_KEY}
                    language={'en'}
                    country={'country:in|country:us'}
                    coordinates={true}
                    //   locationBoxStyle={'custom-style'}
                    //   locationListStyle={'custom-style-list'}
                    onChange={(e) => { setLatLng(e) }} />
            </div>

            <MapContainer
                lat={lat}
                lng={lng}
            >

            </MapContainer>
        </div>
    )
}

export default Address