import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 },
        { latitude: 60.448394, longitude: 22.249329 },
        { latitude: 60.44904, longitude: 22.26847 },
        { latitude: 60.450215, longitude: 22.271342 }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 60.444095, lng: 22.231576 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}
const mapStyles = {
  position: "static",
  width: "60%",
  height: "60%",
  right: "20px",
  left: "80px"
};
export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
