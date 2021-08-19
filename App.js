
import React, { useState } from 'react';

import database from '@react-native-firebase/database';

import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  ListView
} from 'react-native';

const App = () => {
  const [nome, setTexto] = useState('');
  const [idade, setIdade] = useState('');

  function save() {
    const reference = database().ref('/users').push();
    reference
      .set({
        nome: nome,
        idade: idade,
      })
      .then(() => alert('Dados salvos'));
  }

  return (<View>
    <Text style={styles.container}>Preencha os campos e toque em salvar</Text>
    <TextInput
      style={{ height: 40 }}
      placeholder="Insira um nome"
      onChangeText={texto => setTexto(texto)}
      defaultValue={nome}
    /><TextInput
      keyboardType="numeric"
      style={{ height: 40 }}
      placeholder="Insira uma idade"
      onChangeText={idade => setIdade(idade)}
      defaultValue={idade}
    />
    <Button
      onPress={save}
      title="Salvar"
      color="#158963"
      accessibilityLabel="Salvar" />
  </View>);

}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 20
  }
});
