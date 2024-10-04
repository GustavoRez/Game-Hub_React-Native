import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles10 } from './css';

function SimuladorD10({ navigateTo }) {
  const [resultado, setResultado] = useState(0);

  function rolarDado() {
    setResultado(Math.floor(Math.random() * 11));
  }

  function sair() {
    navigateTo('SelecaoJogos');
  }

  return (
    <View style={styles10.container}>
      <Text style={styles10.title}>Simulador de D10</Text>
      <Text style={styles10.resultText}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles10.rollButton} onPress={rolarDado}>
        <Text style={styles10.rollButtonText}>rolar dado!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles10.logoutButton} onPress={sair}>
        <Text style={styles10.logoutButtonText}>sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SimuladorD10;
