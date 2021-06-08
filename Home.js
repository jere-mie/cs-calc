import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';


export default function Home(props){
    return (
        <View style={{alignContent:'center', alignItems:'center',}} >
            <Image source = {{ uri:'https://i.imgur.com/Y0nThjd.png' }}  style={{ width:250, height:250 }} />
            <Text style={{fontSize:40}} >Jeremie Develops</Text>
            <Button title={"Go to Calculator"}  />
        </View>
    );
}
