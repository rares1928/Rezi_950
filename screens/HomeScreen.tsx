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
    const backgroundColor = item.id === selectedId ? "#1eb092" : "#e4c77a";
    const navigheaza=()=>{
      if(item.id==3){
        return(navigation.navigate('Selecteaza Grile'));
      } else if(item.id==4) {
        return(navigation.navigate('Bancul zilei'))
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
