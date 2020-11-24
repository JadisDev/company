import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import consts from '../const'
import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const mapStyles = {
    width: '98%',
    height: '226px'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            coordenates: []
        }

        console.log(props)
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies() {
        axios.get(`${consts.API_URL}/company`)
            .then(resp => {
                this.setState({ coordenates: resp.data.data })
            })
            .catch(e => {
                toastr.error('Nova empresa', e.message)
            })
    }

    render() {

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
                onClick={() => { }}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
                    position={{ lat: this.props.lat, lng: this.props.lng }} />

                {this.props.list && this.state.coordenates.map((coordenate, i) => {
                    console.log(coordenate)
                    return (<Marker key={i} position={{ lat: coordenate.lat, lng: coordenate.lng }} />)
                })}

            </Map>
        );
    }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyAKS1NPktBvX4_MRUfZeUawdLXWAFASLKE'
})(MapContainer);