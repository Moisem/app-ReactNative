import * as React from 'react';

import {Text, StyleSheet, View} from 'react-native';

export default function HomeScreen (){
        return(
            <View style={styles.container}>
                <View style={styles.box1}><Text>Post Image</Text></View>
                <View style={styles.box2}>
                    <View style={styles.box21}><Text>Descripcion</Text></View>
                </View>
                <View style={styles.box2}>
                    <View style={styles.box21}><Text>Feacha de creacion</Text></View>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, fontWeight: '300', fontSize: 40,
    },
    box1: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#8BE27E',
      maxHeight:300,
      marginBottom: 30
    },
    box2: {
        flex:.5,
        flexDirection:'row',
        margin: 25,
        justifyContent:'center'
    },
    box21: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#10BCE3',
        maxHeight:300,
        marginBottom: 30
    },
});


