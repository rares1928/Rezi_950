import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {StatusBar, FlatList,SafeAreaView,TouchableOpacity,ScrollView, StyleSheet, Text, View } from 'react-native';

const stil=StyleSheet.create(
 {
   enunt:{
     marginHorizontal:16,
     marginVertical:15,
     alignItems:'center',
     fontSize:15,
     fontWeight:'bold',
   },
   varianta:{
     marginHorizontal:16,
     marginVertical:8,
     flexDirection:'row',
     fontSize:12,
     borderRadius: 10,
     padding:10,
     alignItems:'center',
   },
   container: {
     flex: 1,
     backgroundColor:'#FFFFFF'
   },
   patratel:{
     height:12,
     width:12,
     borderRadius:4,
     borderColor:'black',
     borderWidth:2,
   },
   raspuns:{
     fontSize:13,
     fontWeight:'bold',
     marginHorizontal:4,
   }
 }
)

export default function GrilaRaresScreen({ navigation, route }) {
 const [isV1Checked, setV1] = useState(false);
 const [isV2Checked, setV2] = useState(false);
 const [isV3Checked, setV3] = useState(false);
 const [isV4Checked, setV4] = useState(false);
 const [isV5Checked, setV5] = useState(false);
 const [apasatVerifica,setApasat]=useState(false);

 return(
 <SafeAreaView style={stil.container}>
   <ScrollView>
     <Text style={stil.enunt}>{route.params.enunt}</Text>
     <TouchableOpacity disabled={apasatVerifica} style={[stil.varianta, {backgroundColor: !isV1Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV1(!isV1Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV1Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10,flex:1}}>{route.params.variante[0]}</Text>
       <Text style={[stil.raspuns,{color: isV1Checked==route.params.raspunsuri[0] ? 'green':'red'}]}>{!apasatVerifica ? null: isV1Checked==route.params.raspunsuri[0] ? 'Corect':'Gresit'}</Text>
     </TouchableOpacity>
     <TouchableOpacity disabled={apasatVerifica} style={[stil.varianta, {backgroundColor: !isV2Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV2(!isV2Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV2Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10,flex:1}}>{route.params.variante[1]}</Text>
       <Text style={[stil.raspuns,{color: isV2Checked==route.params.raspunsuri[1] ? 'green':'red'}]}>{!apasatVerifica ? null: isV2Checked==route.params.raspunsuri[1] ? 'Corect':'Gresit'}</Text>
     </TouchableOpacity>
     <TouchableOpacity disabled={apasatVerifica} style={[stil.varianta, {backgroundColor: !isV3Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV3(!isV3Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV3Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10,flex:1}}>{route.params.variante[2]}</Text>
       <Text style={[stil.raspuns,{color: isV3Checked==route.params.raspunsuri[2] ? 'green':'red'}]}>{!apasatVerifica ? null: isV3Checked==route.params.raspunsuri[2] ? 'Corect':'Gresit'}</Text>
     </TouchableOpacity>
     <TouchableOpacity disabled={apasatVerifica} style={[stil.varianta, {backgroundColor: !isV4Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV4(!isV4Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV4Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10,flex:1}}>{route.params.variante[3]}</Text>
       <Text style={[stil.raspuns,{color: isV4Checked==route.params.raspunsuri[3] ? 'green':'red'}]}>{!apasatVerifica ? null: isV4Checked==route.params.raspunsuri[3] ? 'Corect':'Gresit'}</Text>
     </TouchableOpacity>
     <TouchableOpacity disabled={apasatVerifica} style={[stil.varianta, {backgroundColor: !isV5Checked ? "#e6f0fc":"#a4d5ed"}]} onPress={() => setV5(!isV5Checked)}>
       <View style={[stil.patratel,{backgroundColor: !isV5Checked ? "#e6f0fc":'black'}]}></View>
       <Text style={{marginHorizontal:10,flex:1}}>{route.params.variante[4]}</Text>
       <Text style={[stil.raspuns,{color: isV5Checked==route.params.raspunsuri[4] ? 'green':'red'}]}>{!apasatVerifica ? null: isV5Checked==route.params.raspunsuri[4] ? 'Corect':'Gresit'}</Text>
     </TouchableOpacity>
     <View style={stil.varianta}>
      <View style={{flex:1}}>
       <Button disabled={apasatVerifica} title='Verifica' color='magenta' onPress={()=>setApasat(!apasatVerifica)}/>
      </View>
      <View style={{flex:1}}>
       <Button title='Continua' color='#86d1f7' onPress={()=>setApasat(!apasatVerifica)}/>
      </View>
     </View>
   </ScrollView>
 </SafeAreaView>
 );
};
