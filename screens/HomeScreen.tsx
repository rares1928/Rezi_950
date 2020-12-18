import * as React from 'react';
import {Button} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Grila', { enunt: 'Cate celule rosii sunt in corpul uman', variante: ['0', '1', '>1', 'multe', '2147687583'], raspuns: 'E' })
      }
    />
  );
};
