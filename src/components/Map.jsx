// https://www.youtube.com/watch?v=EouTckK3Cl8

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '94%',
    height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
                yesIWantToUseGoogleMapApiInternals
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'This is test name'}
                />


            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKS1NPktBvX4_MRUfZeUawdLXWAFASLKE'
})(MapContainer);