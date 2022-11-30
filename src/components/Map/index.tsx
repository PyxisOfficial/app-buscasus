
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, PermissionsAndroid, Dimensions, Modal } from 'react-native';



import * as geolib from 'geolib';

import { LatitudeKeys } from 'geolib/es/types';

    
interface props{
    height: number,
    width: number
}

export function Map({height, width} : props) {

    const [region, setRegion] = useState<any>();
    const [lat, setLat] = useState<any>();
    const [lon, setLon] = useState<any>();
    const [userlat, setUserLat] = useState<number>();
    const [userlon, setUserLon] = useState<number>();
    

    const [distance, setDistance] =useState<number>()

        useEffect(() => {
                       
            (async () => {
                
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    alert('Permission to access region was denied');
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setRegion(location);
                
                setUserLat(location.coords.latitude)
                setUserLon(location.coords.longitude)
            })()
        })

        

        useEffect(() => {
                axios.get('https://api.geoapify.com/v1/geocode/search', {
                    params: {
                        text: "Av. Miguel Achiole da Fonseca ",
                        housenumber: 135,
                        format: "json",
                        apiKey: "b661fa462e3448b79b6db1fd9d947d01"
                    }
                }).then(response => { setLat(parseFloat(response.data.results[0].lat))})

                      axios.get('https://api.geoapify.com/v1/geocode/search', {
                    params: {
                        text: "Av. Miguel Achiole da Fonseca",
                        housenumber: 135,
                        format: "json",
                        apiKey: "b661fa462e3448b79b6db1fd9d947d01"
                    }
                }).then(response  => { setLon(parseFloat(response.data.results[0].lon))})

                
            }, []);
       
      
    return (
        <View>


            <MapView

                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                        )
                        : '',
                        console.log(userlon)
                }}
                style={{ width: width, height: height }}
                
                region={region}
                zoomEnabled={true}
                minZoomLevel={17}
                loadingEnabled={true}
                showsUserLocation={true}
                

            />


        </View>
    );
}