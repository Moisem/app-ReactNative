import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions, Text
} from 'react-native';
 
var { height } = Dimensions.get('window');
 
var box_count = 4;
var box_height = height / box_count;
 
export default class VerticalStackLayout extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}><Text style={{flex: 1, fontWeight: '300', fontSize: 40, marginTop: 5}}>Categorias</Text></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
            <View style={[styles.box, styles.box4]}></View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  box2: {
      flex: 3,
      backgroundColor:'#8BE27E'
  },
  box3: {
      flex: 3,
      backgroundColor: '#3DD6AF'
  },
  box4: {
    flex: 3,
    backgroundColor: '#10BCE3'
  }
});