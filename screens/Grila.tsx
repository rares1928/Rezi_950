import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {StatusBar, FlatList,SafeAreaView,TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const stil=StyleSheet.create(
  {
    stil_text_grila:
    {
      fontSize: 20,
    },
    stil_var_init:
    {
      flexDirection:'row',
      flex:1,
      alignItems: "center",
    },
    stil_var_corecta:
    {
      flexDirection:'row',
      backgroundColor:'green'
    },
    stil_var_gresita:
    {
      flexDirection:'row',
      backgroundColor:'red'
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    }
  }
)

const Varianta = ({ item, apasa, style }) => (
  <TouchableOpacity onPress={apasa} style={[stil.item, style]}>
    <Text style={stil.title}>{item.title}</Text>
  </TouchableOpacity>
);


export default function GrilaScreen({ navigation, route }) {
  const [isV1Checked, setV1] = useState(true);
  const [isV2Checked, setV2] = useState(true);
  const [isV3Checked, setV3] = useState(false);
  const [isV4Checked, setV4] = useState(false);
  const [isV5Checked, setV5] = useState(false);

  const DATA = [
    {
      id: "0",
      title: route.params.variante[0],

    },
    {
      id: "1",
      title: route.params.variante[1]
    },
    {
      id: "2",
      title: route.params.variante[2]
    },
    {
      id: "3",
      title: route.params.variante[3]
    },
    {
      id: "4",
      title: route.params.variante[4]
    }
  ];

  const map = ({index}) => {
    if(index===0)
    {
      return(setV1(!isV1Checked))
    }
    else if(index=="1")
    {
      return(setV2(!isV2Checked))
    }
    else if(index=="2")
    {
      return(setV3(!isV3Checked))
    }
    else if(index=="3")
    {
      return(setV4(!isV4Checked))
    }
    else if(index=="4")
    {
      return(setV5(!isV5Checked))
    }
  }

  const culoare = ({index}) => {
    if(index===1)
    {
      return(isV1Checked)
    }
    else if(index=="1")
    {
      return(isV2Checked)
    }
    else if(index=="2")
    {
      return(isV3Checked)
    }
    else if(index=="3")
    {
      return(isV4Checked)
    }
    else if(index=="4")
    {
      return(isV5Checked)
    }
  }

  const afiseazaItem = ({ item, index}) => {
    const backgroundColor= culoare(index) ? 'blue':'green'
    return (
      <Varianta
        item={item}
        onPress={map(index)}
        style={{backgroundColor}}
      />
    );
  };
  return (
    <SafeAreaView style={stil.container}>
      <FlatList
        data={DATA}
        renderItem={afiseazaItem}
        keyExtractor={(item) => item.id}
        extraData={isV1Checked}
      />
    </SafeAreaView>
  );

};
