import React, { useState, useEffect } from 'react';
import {Button, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import { Text, View } from 'react-native';

export default function GrilaScreen({ navigation, route }) {
  const [isVarianta1Checked, setVarianta1] = useState(false);
  const [isVarianta2Checked, setVarianta2] = useState(false);

  return (
    <View>
      <Text>{route.params.enunt}</Text>
      <CheckBox
        title={route.params.variante[0]}
        checked={isVarianta1Checked}
        onPress={() => setVarianta1(!isVarianta1Checked)}
      />
      <CheckBox
        title={route.params.variante[1]}
        checked={isVarianta2Checked}
        onPress={() => setVarianta2(!isVarianta2Checked)}
      />
      <Button
        title="Continua"
        onPress={() => isVarianta2Checked == true ? Alert.alert("Esti deștept") : Alert.alert("Esti prost")}
      />
    </View>
  );
};
