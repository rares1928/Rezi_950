import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

const stil=StyleSheet.create(
  {
    stil_text_grila:
    {
      fontSize: 20,
    },
    container:
    {
      flexDirection:'row',
      flex:1,
      backgroundColor:'rgba(250,250,250,0)'
    },
    separator:
    {
      marginVertical: 10,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  }
)

export default function GrilaScreen({ navigation, route }) {
  const [isV1Checked, setV1] = useState(false);
  const [isV2Checked, setV2] = useState(false);
  const [isV3Checked, setV3] = useState(false);
  const [isV4Checked, setV4] = useState(false);
  const [isV5Checked, setV5] = useState(false);

  const Separator = () => (
  <View style={stil.separator} />
  );


  return (
    <View>
      <Text style={stil.stil_text_grila}>{route.params.enunt}</Text>
      <Separator />
      <CheckBox
        title={route.params.variante[0]}
        checked={isV1Checked}
        onPress={() => setV1(!isV1Checked)}
      />
      <CheckBox
        title={route.params.variante[1]}
        checked={isV2Checked}
        onPress={() => setV2(!isV2Checked)}
      />
      <CheckBox
        title={route.params.variante[2]}
        checked={isV3Checked}
        onPress={() => setV3(!isV3Checked)}
      />
      <CheckBox
        title={route.params.variante[3]}
        checked={isV4Checked}
        onPress={() => setV4(!isV4Checked)}
      />
      <CheckBox
        title={route.params.variante[4]}
        checked={isV5Checked}
        onPress={() => setV5(!isV5Checked)}
      />


          <Button
            title="Verifica"
            color='green'
            onPress = {()=>
            {
              if(isV1Checked==route.params.raspunsuri[0])
              {
                return(Alert.alert('Corect'))
              }
            }
          }
          />


          <Button
            title="Continua"
            color='blue'
            />


    </View>
  );

};
