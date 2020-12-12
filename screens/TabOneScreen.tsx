import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Grila from '../components/grila.tsx';
import { Text, View } from '../components/Themed';
import Grile_rezi from '../assets/colectie_grile/Grile_rezi';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gigi</Text>
      <Grila lista_comp_grila={Grile_rezi.Intrebare1} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
