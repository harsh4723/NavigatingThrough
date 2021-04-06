import React from 'react';
import {Text,FlatList, View} from 'react-native'
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    return(
        <View>
        <ImageDetail title ="mountain" imageSrc = {require('../../assets/mountain.jpg')}/>
        <ImageDetail title ="forest" imageSrc = {require('../../assets/forest.jpg')}/>
        <ImageDetail title ="beach" imageSrc = {require('../../assets/beach.jpg')}/>
        </View>
    );
}

export default ImageScreen;
