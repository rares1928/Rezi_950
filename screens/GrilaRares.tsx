import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {StatusBar, FlatList,SafeAreaView,TouchableOpacity,ScrollView, StyleSheet, Text, View } from 'react-native';

const stil=StyleSheet.create(
 {
   enunt:{
     marginHorizontal:16,
     marginVertical:8,
     borderRadius: 10,
     alignItems:'center',
     fontSize:15,
   },
   varianta:{
     marginHorizontal:16,
     marginVertical:8,
     flexDirection:'row',
     fontSize:14,
     borderRadius: 10,
     padding:10,
     alignItems:'center',
   },
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight || 0,
   },
   patratel:{
     height:10,
     width:10,
     borderRadius: 3,
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
     <Text style={stil.enunt}>{route.params.enunt}</Text>
     <TouchableOpacity style={[stil.varianta, {backgroundColor: !isV1Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV1(!isV1Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV1Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10}}>{route.params.variante[0]}</Text>
       <Text>{isV1Checked==route.params.raspunsuri[0] ? null:null}</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[stil.varianta, {backgroundColor: !isV2Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV2(!isV2Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV2Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10}}>{route.params.variante[1]}</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[stil.varianta, {backgroundColor: !isV3Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV3(!isV3Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV3Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10}}>{route.params.variante[2]}</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[stil.varianta, {backgroundColor: !isV4Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV4(!isV4Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV4Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10}}>{route.params.variante[3]}</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[stil.varianta, {backgroundColor: !isV5Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV5(!isV5Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV5Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10}}>{route.params.variante[4]}</Text>
     </TouchableOpacity>
     <View style={stil.varianta}>
      <View style={{flex:1}}>
       <Button title='Verifica' color='#8ef595'/>
      </View>
      <View style={{flex:1}}>
       <Button title='Continua' color='#86d1f7'/>
      </View>
     </View>
   </ScrollView>
 </SafeAreaView>
 );
};
