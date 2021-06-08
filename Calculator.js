import React, {useState} from 'react';
import {View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {evaluate} from 'mathjs';

const evalCalc = (inp)=>{
    try {
        return String(evaluate(inp)) == 'undefined' ? "" : String(evaluate(inp));        
    } catch (error) {
       return String(inp);
    }
}

export default function Calculator(props){
    const [text, setText] = useState('');
    return (
        <View style={styles.calc} >
            <TextInput 
            value={text}
            onChangeText={setText}
            style={styles.input}
            />
            <View style={{marginTop:80}}></View>

            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'D')}}><Text style={styles.btnText} >D</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'E')}}><Text style={styles.btnText} >E</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'F')}}><Text style={styles.btnText} >F</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text.substr(0, text.length-1))}}><Text style={styles.btnText} >←</Text></TouchableOpacity>
            </View>
            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'A')}}><Text style={styles.btnText} >A</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'B')}}><Text style={styles.btnText} >B</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'C')}}><Text style={styles.btnText} >C</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'/')}}><Text style={styles.btnText} >/</Text></TouchableOpacity>
            </View>
            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'7')}}><Text style={styles.btnText} >7</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'8')}}><Text style={styles.btnText} >8</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'9')}}><Text style={styles.btnText} >9</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'*')}}><Text style={styles.btnText} >X</Text></TouchableOpacity>
            </View>
            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'4')}}><Text style={styles.btnText} >4</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'5')}}><Text style={styles.btnText} >5</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'6')}}><Text style={styles.btnText} >6</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'-')}}><Text style={styles.btnText} >-</Text></TouchableOpacity>
            </View>
            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'1')}}><Text style={styles.btnText} >1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'2')}}><Text style={styles.btnText} >2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'3')}}><Text style={styles.btnText} >3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'+')}}><Text style={styles.btnText} >+</Text></TouchableOpacity>
            </View>
            <View style={styles.calcrow}>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText('')}}><Text style={styles.btnText} >CE</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'0')}}><Text style={styles.btnText} >0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'.')}}><Text style={styles.btnText} >.</Text></TouchableOpacity>
                <TouchableOpacity style={styles.calcbtn} onPress={()=> {setText(evalCalc(text))}}><Text style={styles.btnText} >=</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    calc: {
        alignContent:'center', 
        alignItems:'center', 
        flex:1, 
        flexDirection: 'column', 
        width: '80%',
        fontFamily: 'sans-serif',
    },
    input: {
        width: '100%',
        height: 60,
        margin: 12,
        padding: 2,
        borderWidth: 1,
        fontSize: 22,
        textAlign: 'right',
        color: 'white',
        backgroundColor: '#222222',
    },
    calcrow: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%'
    },
    calcbtn: {

        flex:1,
        height: 70,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin:0,
        backgroundColor: '#333333',
    },
    btnText: {
        color: 'white',
        fontSize: 30,
    }
});