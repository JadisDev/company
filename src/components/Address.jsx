import { GoogleComponent } from 'react-google-location'
import MapContainer from './Map'
import React from 'react';
import {connect} from 'react-redux'
import {coordenate} from '../coordenate/CoodenateAction'

const API_KEY = "AIzaSyD-Pid2nVCHl5cQxM1E6OJFKl17daEv0fs"  // how to get key - step are below

const Address = (props) => {

    const {lat, lng} = props

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
                    onChange={(e) => { props.dispatchCoodenate(e) }} />
            </div>

            <MapContainer
                lat={lat}
                lng={lng}
            >

            </MapContainer>
        </div>
    )
}

function mapStateToProp(state) {
    return {
        lat: state.coordenate.lat,
        lng: state.coordenate.lng
    }
}
function mapsDipatchToProp (dispatch) {
    return {
        dispatchCoodenate(object) {
            const actionCoordenate = coordenate(object)
            dispatch(actionCoordenate)
        }
    }
}

export default connect(mapStateToProp, mapsDipatchToProp)(Address)