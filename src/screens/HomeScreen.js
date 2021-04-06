import React from 'react';
import {Text, View,StyleSheet, Button,TouchableOpacity} from 'react-native';

const HomeScreen = (props) =>{
    
    return (
        <View>
            <Text style ={{fontSize:30}}>
                Click On Button
            </Text>
            <Button title ="Go to List"
            onPress ={()=>props.navigation.navigate('ListS')}
            />
            <TouchableOpacity style ={style.opacity} 
                onPress ={()=>props.navigation.navigate('ImageS')}>
                <Text>Go to Imgaes</Text>
            </TouchableOpacity>
            <Button title="Go to SquareColors "
            onPress={()=>props.navigation.navigate('SquareS')}/>
        </View>
    );
}
const style = StyleSheet.create({
opacity :{
    borderWidth:2,
    marginTop:10,
}
})

export default HomeScreen;