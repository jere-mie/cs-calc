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

const changeRadix = (inp)=>{
    if(inp==''){
        return '';
    }
    return isNaN(parseInt(inp))? 10:parseInt(inp);
}

export default function Calculator(props){
    const [text, setText] = useState('');
    const [radix, setRadix] = useState(10);
    return (
        <View style={styles.calc} >
            <View style={styles.calcWrapper}>
                <TextInput 
                value={text}
                onChangeText={setText}
                style={styles.input}
                onSubmitEditing={()=> {setText(evalCalc(text))}}
                />
                <View style={{flexDirection:'row', alignItems:'center'}} >
                    <Text style={{color:'white', fontSize:22}} >Radix/Base: </Text>
                    <TextInput  
                    style={styles.radixInput} 
                    value={String(radix)}
                    onChangeText={(rad)=>{setRadix(changeRadix(rad))}}
                    />
                </View>
            </View>

            <View style={styles.calcWrapper}>
                {/* <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'^')}}><Text style={[styles.btnText, styles.opText]} >^</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'(')}}><Text style={[styles.btnText, styles.opText]} >(</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+')')}}><Text style={[styles.btnText, styles.opText]} >)</Text></TouchableOpacity>
                </View> */}
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'D')}}><Text style={[styles.btnText, styles.alphText]} >D</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'E')}}><Text style={[styles.btnText, styles.alphText]} >E</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'F')}}><Text style={[styles.btnText, styles.alphText]} >F</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text.substr(0, text.length-1))}}><Text style={[styles.btnText, styles.opText]} >←</Text></TouchableOpacity>
                </View>
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'A')}}><Text style={[styles.btnText, styles.alphText]} >A</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'B')}}><Text style={[styles.btnText, styles.alphText]} >B</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'C')}}><Text style={[styles.btnText, styles.alphText]} >C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'/')}}><Text style={[styles.btnText, styles.opText]} >÷</Text></TouchableOpacity>
                </View>
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'7')}}><Text style={styles.btnText} >7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'8')}}><Text style={styles.btnText} >8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'9')}}><Text style={styles.btnText} >9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'*')}}><Text style={[styles.btnText, styles.opText]} >×</Text></TouchableOpacity>
                </View>
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'4')}}><Text style={styles.btnText} >4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'5')}}><Text style={styles.btnText} >5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'6')}}><Text style={styles.btnText} >6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'-')}}><Text style={[styles.btnText, styles.opText]} >-</Text></TouchableOpacity>
                </View>
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'1')}}><Text style={styles.btnText} >1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'2')}}><Text style={styles.btnText} >2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'3')}}><Text style={styles.btnText} >3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'+')}}><Text style={[styles.btnText, styles.opText]} >+</Text></TouchableOpacity>
                </View>
                <View style={styles.calcrow}>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText('')}}><Text style={[styles.btnText, {color: '#ff8080'}]} >CE</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'0')}}><Text style={styles.btnText} >0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.calcbtn} onPress={()=>{setText(text+'.')}}><Text style={styles.btnText} >.</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.calcbtn, styles.eqbtn]} onPress={()=> {setText(evalCalc(text))}}><Text style={styles.btnText} >=</Text></TouchableOpacity>
                </View>
                <View style={{marginBottom:10}}></View>
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
        width: '90%',
        fontFamily: 'sans-serif',
        justifyContent: 'space-between'
    },
    input: {
        width: '100%',
        height: 60,
        margin: 12,
        padding: 2,
        paddingHorizontal: 20,
        // borderWidth: 1,
        fontSize: 33,
        textAlign: 'right',
        color: 'white',
        // backgroundColor: '#222222',
    },
    radixInput:{
        width: 50,
        margin: 12,
        padding: 2,
        paddingHorizontal: 10,
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
        height: 65,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin:2,
        backgroundColor: '#333333',
        borderRadius: 99,
    },
    eqbtn:{
        backgroundColor: '#7ee600',
    },
    btnText: {
        color: 'white',
        fontSize: 35,
    },
    opText: {
        color: '#98ff1a',
    },
    alphText: {
        color: '#b3e6ff'
    },
    calcWrapper: {
        alignContent:'center', 
        alignItems:'center', 
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginVertical: 30,
    },
});