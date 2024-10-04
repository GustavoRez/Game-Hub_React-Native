import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './css';

const JogoDaVelha = ({ navigateTo }) => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [proximoX, setProximoX] = useState(true);

  function jogada(index) {
    const newTabuleiro = [...tabuleiro];
    if (!newTabuleiro[index]) {
      newTabuleiro[index] = proximoX ? 'X' : 'O';
      setProximoX(!proximoX);
      setTabuleiro(newTabuleiro);
    }
  }

  const casa = (index) => (
    <TouchableOpacity style={styles.casa} onPress={() => jogada(index)}>
      <Text style={styles.cellText}>{tabuleiro[index]}</Text>
    </TouchableOpacity>
  );

  function reset() {
    setTabuleiro(Array(9).fill(null));
  }

  function sair() {
    navigateTo('SelecaoJogos');
  }

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Jogo da Velha</Text>
      <View style={styles.row}>
        <Text>{casa(0)} {casa(1)} {casa(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text>{casa(3)} {casa(4)} {casa(5)}</Text>
      </View>
      <View style={styles.row}>
        <Text>{casa(6)} {casa(7)} {casa(8)}</Text>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={reset}>
        <Text style={styles.buttonText}> Resetar </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={sair}>
        <Text style={styles.buttonText}> Sair </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JogoDaVelha;
