import React, { Component } from 'react';
import {View, Text, Pressable, StyleSheet } from 'react-native';

class CoinsScreen extends Component{
    handlesPress = () => {
        console.log("di clic en el boton ir a pantalla de detalle");
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnText}>Mi Primer Pantalla</Text>
                <Pressable  style = {styles.btn} onPress={this.handlesPress}><Text style={styles.btnText}>Detalles </Text></Pressable>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "orange"
     },
    btn:{
        padding : 8 ,
        backgroundColor : "yellow",
        borderRadius : 8,
        margin : 22   
    },
    btnText:{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
    }

})

export default CoinsScreen;