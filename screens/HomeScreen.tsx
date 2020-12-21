import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Rezolva Grile', { enunt: 'Necroza miocardică poate fi demonstrată prin (pag. 135):', variante: ['detectarea creșterii în sânge a markerilor de necroză miocardică', 'demonstrarea pierderii de miocard viabil folosind diverse metode imagistice', 'detectarea prezenței undelor Q patologice noi pe electrocardiogramă', 'examen morfopatologic', 'pe baza tabloului clinic'], raspunsuri: [true, false, true, false, false] })
      }
    />
  );
};
