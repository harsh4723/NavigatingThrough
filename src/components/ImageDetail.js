import React from 'react';
import {Text,Image, View} from 'react-native';

const ImageDetail = (props) =>{
    return(
        <View>
        <Text>This is a {props.title}</Text>
        <Image source={props.imageSrc} />
        </View>
        
    );
}

export default ImageDetail;