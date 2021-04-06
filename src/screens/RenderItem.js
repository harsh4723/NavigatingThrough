import React from 'react';
import {Text} from 'react-native';

const RenderItem =React.memo((props)=>{
    return(
        <>
        {console.log("Harsh render 2")}
        <Text>{props.keya}</Text>
        </>
    );
});

export default RenderItem;
