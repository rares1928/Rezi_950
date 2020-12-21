import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {StatusBar, FlatList,SafeAreaView,TouchableOpacity,ScrollView, StyleSheet, Text, View } from 'react-native';

const stil=StyleSheet.create(
  {
    varianta:{
      backgroundColor:"#e6f0fc",
      marginHorizontal:16,
      marginVertical:8,
      flexDirection:'row',
      fontSize:14,
      borderRadius: 10,
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }
  }
)


export default function GrilaRaresScreen({ navigation, route }) {
  const [isV1Checked, setV1] = useState(false);
  const [isV2Checked, setV2] = useState(false);
  const [isV3Checked, setV3] = useState(false);
  const [isV4Checked, setV4] = useState(false);
  const [isV5Checked, setV5] = useState(false);
  return(
  <SafeAreaView style={stil.container}>
    <ScrollView>
      <TouchableOpacity style={stil.varianta} onPress={() => setV1(!isV1Checked)}>
        <Text>{route.params.variante[0]}</Text>
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
};
