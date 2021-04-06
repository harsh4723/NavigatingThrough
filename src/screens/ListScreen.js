import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import MapView from "react-native-maps";
import styles from "./styles";
import Geolocation from '@react-native-community/geolocation';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      isMapReady: false,
      marginTop: 1,
      userLocation: "",
      regionChangeProgress: false
    };
  }

  componentWillMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        };
        this.setState({
          region: region,
          loading: false,
          error: null,
        });
      },
      (error) => {
        alert(error);
        this.setState({
          error: error.message,
          loading: false
        })
      },
      { enableHighAccuracy: true, timeout: 200000, maximumAge: 5000 },
    );
  }

  onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });
  }

  // Fetch location details as a JOSN from google map API
  fetchAddress = () => {
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.region.latitude + "," + this.state.region.longitude + "&key=" + "AIzaSyC0TKvXosmBh0hwlAi50iY95h7g7lEc8mY")
      .then((response) => response.json())
      .then((responseJson) => {
        const userLocation = responseJson.results[0].formatted_address;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false
        });
      });
  }

  // Update state on region change
  onRegionChange = region => {
    this.setState({
      region,
      regionChangeProgress: true
    }, () => this.fetchAddress());
  }

  // Action to be taken after select location button click
  onLocationSelect = () => alert(this.state.userLocation);

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 2 }}>
            {!!this.state.region.latitude && !!this.state.region.longitude &&
              <MapView
                style={{ ...styles.map, marginTop: this.state.marginTop }}
                initialRegion={this.state.region}
                showsUserLocation={true}
                onMapReady={this.onMapReady}
                onRegionChangeComplete={this.onRegionChange}
              >
                <MapView.Marker
                  coordinate={{ "latitude": this.state.region.latitude, "longitude": this.state.region.longitude }}
                  title={"Your Location"}
                  draggable
                />
              </MapView>
            }

            <View style={styles.mapMarkerContainer}>
              <Text style={{ fontFamily: 'fontawesome', fontSize: 42, color: "#ad1f1f" }}>&#xf041;</Text>
            </View>
          </View>
          <View style={styles.deatilSection}>
            <Text style={{ fontSize: 16, fontWeight: "bold", fontFamily: "roboto", marginBottom: 20 }}>Move map for location</Text>
            <Text style={{ fontSize: 10, color: "#999" }}>LOCATION</Text>
            <Text numberOfLines={2} style={{ fontSize: 14, paddingVertical: 10, borderBottomColor: "silver", borderBottomWidth: 0.5 }}>
              {!this.state.regionChangeProgress ? this.state.userLocation : `lat ${this.state.region.latitude}  long ${this.state.region.longitude} `}</Text>
            <View style={styles.btnContainer}>
              <Button
                title="PICK THIS LOCATION"
                disabled={this.state.regionChangeProgress}
                onPress={this.onLocationSelect}
              >
              </Button>
            </View>
          </View>
        </View>
      );
    }
  }
}



// import React, {useEffect, useState, Component} from 'react';
// import {Text,FlatList, TouchableOpacity, StyleSheet,View} from 'react-native'
// import RenderItem from './RenderItem';
// import MapView , { Marker, PROVIDER_GOOGLE }  from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// const latitudeDelta= 0.0025
// const longitudeDelta= 0.0025
// export default class ListScreen extends Component{
//     state ={
//         region:{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta,
//             longitudeDelta
//         }
//     }
//     componentDidMount(){
//         this.handleUserLocation();
//     }
    
//     handleUserLocation = ()=>{
//         Geolocation.getCurrentPosition(
//             position => {
//               console.log("Harsh "+ position.coords.latitude);
//               this.setState({region:{
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude,
//                 latitudeDelta,
//                 longitudeDelta
//               }});
//             },
//             error => {
//               console.log(error.message.toString());
//             },
//             {
//               showLocationDialog: true,
//               enableHighAccuracy: true,
//               timeout: 20000,
//               maximumAge: 0
//             }
//           );
//     }
    
//     onChangeValue = region =>{
//         this.setState({region}) 
//     }
//     render(){
//         return(
         
//           <View style={{ flex: 1 }}>
//              {console.log("Harsh lat "+this.state.region.latitude)}
//               <MapView
//               showsUserLocation={true}
//               style={{ flex: 1 }}
//               initialRegion={this.state.region}
//               region={this.state.region}
//               onRegionChangeComplete = {this.onChangeValue}
//               ref = {ref => this.map = ref}
//               >
//                 <Marker coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude}} />
//               </MapView>
//           </View>
//         );
//     }
// }

// const ListScreen = (props)=>{

    
//       return (
//         <View style={{ flex: 1 }}>
//         <MapView
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421
//           }}></MapView>
//       </View>
//       );
//     };
    

// const styles = StyleSheet.create({
//     container: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//     },
//     map: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//     },
//   });

// export default ListScreen;