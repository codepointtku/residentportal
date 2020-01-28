import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 60.451255, longitude: 22.267021 },
        { latitude: 60.456768, longitude: 22.268075 },
        { latitude: 60.453748, longitude: 22.253798 },
        { latitude: 60.435109, longitude: 22.230118 },
        { latitude: 60.45212, longitude: 22.277926 },
        { latitude: 60.448394, longitude: 22.249329 },
        { latitude: 60.44904, longitude: 22.26847 },
        { latitude: 60.450215, longitude: 22.271342 },
        { latitude: 60.448605, longitude: 22.25902 },
        { latitude: 60.456877, longitude: 22.257752 },
        { latitude: 60.441162, longitude: 22.247948 }
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
        initialCenter={{ lat: 60.451798, lng: 22.266833 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}
const mapStyles = {
  position: "static",
  width: "40%",
  height: "41%",
  top: "-169px",
  right: "20px",
  left: "60px"
};
export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
