import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textMenu}>
          Analisador de Imagens Modificadas
        </Text>
      </View>

      <View style={styles.button}>
        <Button onPress={() => { }} title="Selecionar"></Button>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  textMenu: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 24
  },
  button: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
