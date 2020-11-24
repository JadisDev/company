import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import consts from '../const'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

export class MapContainer extends Component {

    mapStyles = {
        width: '98%',
        height: this.props.heigth
    };

    constructor(props) {
        super(props)

        this.state = {
            coordenates: [],
            triangleCoords: [],
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false
        }
    }

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };



    componentDidMount() {
        this.getCompanies();
    }

    getCompanies() {
        axios.get(`${consts.API_URL}/company`)
            .then(resp => {
                this.setState({ coordenates: resp.data.data })
                var coordenates = []
                resp.data.data.map((cordenateMap, i) => {
                    coordenates.push({ 'lat': cordenateMap.lat, 'lng': cordenateMap.lng })
                })
                this.setState({ triangleCoords: coordenates })
            })
            .catch(e => {
                toastr.error('Nova empresa', e.message)
            })
    }

    render() {

        if (!this.props.loaded) return <div>Loading...</div>;

        return (

            <Map
                google={this.props.google}
                zoom={1}
                style={this.mapStyles}
                center={{
                    lat: this.props.lat,
                    lng: this.props.lng
                }}
                yesIWantToUseGoogleMapApiInternals
                onClick={() => { }}
            >

                {this.props.list === false &&
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{ lat: this.props.lat, lng: this.props.lng }} />

                }

                {this.props.list && this.state.coordenates.map((company, i) => {
                    return (<Marker key={i} title="Location" name={company.name} onClick={this.onMarkerClick} position={{ lat: company.lat, lng: company.lng }}></Marker>)
                })}

                {this.props.list === false &&
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position={{ lat: this.props.lat, lng: this.props.lng }} />

                }

                {this.props.list && this.state.coordenates.map((company, i) => {
                    return (
                        <Polyline
                            path={this.state.triangleCoords}
                            strokeColor="#0000FF"
                            strokeOpacity={0.8}
                            strokeWeight={2} />
                    )
                })}

                <InfoWindow
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}
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
    apiKey: 'AIzaSyAKS1NPktBvX4_MRUfZeUawdLXWAFASLKE',
})(MapContainer);