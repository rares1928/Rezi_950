import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function Grila({ lista_comp_grila }: { lista_comp_grila: string[] }) {
  return (
    <View>
      <Text>{lista_comp_grila[0]}</Text>
      <Text>{lista_comp_grila[1]}</Text>
      <Text>{lista_comp_grila[2]}</Text>
    </View>
  );
}
