// https://www.youtube.com/watch?v=EouTckK3Cl8

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '98%',
    height: '226px'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        console.log(this.props.lat)
        console.log(this.props.lng)

        return (
            <Map
                google={this.props.google}
                zoom={1}
                style={mapStyles}
                center={{
                    lat: this.props.lat,
                    lng: this.props.lng
                }}
                yesIWantToUseGoogleMapApiInternals
                onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} 
                    position={{lat: this.props.lat, lng: this.props.lng}} />
                    

                <InfoWindow onClose={this.onInfoWindowClose}>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKS1NPktBvX4_MRUfZeUawdLXWAFASLKE'
})(MapContainer);