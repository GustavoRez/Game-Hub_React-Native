import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles20 } from './css';

function SimuladorD20({ navigateTo }) {
  const [resultado, setResultado] = useState(0);

  function rolarDado() {
    setResultado(Math.floor(Math.random() * 21));
  }

  function sair() {
    navigateTo('SelecaoJogos');
  }

  return (
    <View style={styles20.container}>
      <Text style={styles20.title}>Simulador de D20</Text>
      <Text style={styles20.resultText}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles20.rollButton} onPress={rolarDado}>
        <Text style={styles20.rollButtonText}>rolar dado!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles20.logoutButton} onPress={sair}>
        <Text style={styles20.logoutButtonText}>sair</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SimuladorD20;
