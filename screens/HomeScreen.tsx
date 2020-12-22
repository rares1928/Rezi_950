import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Parcurge materia",
  },
  {
    id: "2",
    title: "Reguli mnemonice",
  },
  {
    id: "3",
    title: "Rezolva grile",
  },
  {
    id: "4",
    title: "Gluma zilei",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);


export default function HomeScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const navigheaza=()=>{
      if(item.id==3){
        return(navigation.navigate('Rezolva Grile', { enunt: 'Necroza miocardică poate fi demonstrată prin (pag. 135):', variante: ['detectarea creșterii în sânge a markerilor de necroză miocardică', 'demonstrarea pierderii de miocard viabil folosind diverse metode imagistice', 'detectarea prezenței undelor Q patologice noi pe electrocardiogramă', 'examen morfopatologic', 'pe baza tabloului clinic'], raspunsuri: [true, false, true, false, false] }));
      }
    };
    return (
      <Item
        item={item}
        onPress={() => navigheaza()}
        style={{ backgroundColor }}
        />
      );
    };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:10,
    },
    title: {
      fontSize: 16,
    },
  });
