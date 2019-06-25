import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native';
export default class Home extends Component {

  ButtonClickCheckFunction = () =>{
 
    Alert.alert("Anda Sudah Mengabsen")
 
  }
    render() {
        return (
            <View
                behavior="padding"
                style={styles.Wrapper}>
                <TextInput
                    placeholder='nama'
                    underlineColorAndroid='black'
                    placeholderTextColor='black'
                    keyboardType='name'
                    style={styles.inputField} />
                <TextInput
                    placeholder='Nomor Pegawai'
                    underlineColorAndroid='black'
                    placeholderTextColor='black'
                    style={styles.inputField} />
                <TextInput
                    placeholder='Jabatan'
                    underlineColorAndroid='black'
                    placeholderTextColor='black'
                    style={styles.inputField} />
                <TextInput
                    placeholder='Jam Masuk'
                    underlineColorAndroid='black'
                    placeholderTextColor='black'
                    style={styles.inputField} />
                    <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }
       >
 
            <Text style={styles.TextStyle}> Absen </Text>
            
      </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputField: {
        width: 280,
        color: 'white',
        borderColor: 'white',
        marginTop: 5
    },
    Wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
  SubmitButtonStyle: {
 
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:100,
    paddingRight:100,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  }
});