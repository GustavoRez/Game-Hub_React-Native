import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import { styles } from './css';

function JogoDaForca({ navigateTo }) {
  const [palavra] = useState('PERIGOSO');
  const [forca, setForca] = useState(Array(palavra.length).fill('_'));
  const [letra, setLetra] = useState('');

  function tentativa() {
    const newForca = [...forca];
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i].toUpperCase() === letra.toUpperCase()) {
        newForca[i] = letra.toUpperCase();
      }
    }
    setForca(newForca);
    setLetra('');
  }

  function sair() {
    navigateTo('SelecaoJogos');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <Text style={styles.wordDisplay}>{forca.join(' ')}</Text>
      <TextInput
        style={styles.input}
        value={letra}
        onChangeText={setLetra}
        maxLength={1}
        placeholder="Tente uma letra"
      />
      <TouchableOpacity style={styles.button} onPress={tentativa}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={sair}>
        <Text style={styles.logoutButtonText}> Sair </Text>
      </TouchableOpacity>
    </View>
  );
}

export default JogoDaForca;
