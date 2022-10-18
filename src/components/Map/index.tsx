import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import { Platform, PermissionsAndroid, Dimensions, Modal } from 'react-native';

const { width, height } = Dimensions.get('screen');
export function Map() {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access region was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

    }, []);

    return (
        <View>


            <MapView

                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                        )
                        : ''
                }}
                style={{ width: width, height: height }}
                region={location}
                zoomEnabled={true}
                minZoomLevel={17}
                loadingEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                 
            />


        </View>
    );
}