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

        state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
        };
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        console.log(this.props.lat)
        console.log(this.props.lng)

        return (
            <Map
                google={this.props.google}
                zoom={1}
                style={mapStyles}
                initialCenter={
                    {
                        lat: this.props.lat,
                        lng: this.props.lng
                    }
                }
                yesIWantToUseGoogleMapApiInternals
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Kenyatta International Convention Centre'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKS1NPktBvX4_MRUfZeUawdLXWAFASLKE'
})(MapContainer);