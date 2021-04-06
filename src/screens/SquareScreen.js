import React, { useState, useReducer } from 'react';
import {View} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer =(state,action) => {
    // satte === {red: n, green:n,blue:n}
    //action === {colorToChange: 'red' || 'blue' || 'green', amount: 15 || -15}
    switch(action.colorToChange){
        case 'red': return{...state, red: state.red + action.amount};
        case 'green': return{...state, green: state.green + action.amount};
        case 'blue' :return{...state, blue: state.blue + action.amount}; 
        default: return state;
    }
};
const SquareScreen = () => {
    // const [red,setRed] = useState(0);
    // const [blue,setBlue] = useState(0);
    // const [green,setGreen] = useState(0);

    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    // return(
    //     <View>
    //         <ColorCounter color="Red" onIncrease ={()=>setRed(red+10)} onDecrease ={() => setRed(red-10)}/>
    //         <ColorCounter color="Blue" onIncrease ={()=>setBlue(blue+10)} onDecrease ={() => setBlue(blue-10)}/>
    //         <ColorCounter color="Green" onIncrease ={()=>setGreen(green+10)} onDecrease ={() => setGreen(blue-10)}/>
    //         <View style = {{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}}/>
    //     </View>
    // );
    return(
        <View>
            <ColorCounter color="Red" onIncrease ={()=> dispatch({colorToChange:'red',amount:15})} 
            onDecrease ={()=>dispatch({colorToChange:'red',amount:-15})}/>
            <ColorCounter color="Blue" onIncrease ={() => dispatch({colorToChange:'blue',amount:15})} 
            onDecrease ={() => dispatch({colorToChange:'blue',amount:-15})}/>
            <ColorCounter color="Green" onIncrease ={()=>dispatch({colorToChange:'green',amount:15})} 
            onDecrease ={() => dispatch({colorToChange:'green',amount:-15})}/>
            <View style = {{height:150, width:150, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
        </View>
    );
}

export default SquareScreen;