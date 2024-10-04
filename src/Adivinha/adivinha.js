import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './css';

function Adivinha({ navigateTo }) {
  const [chute, setChute] = useState('');
  const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 101)
  );
  const [tentativas, setTentativas] = useState(0);

  const chutes = () => {
    const chuteTentativa = parseInt(chute);
    setTentativas(tentativas + 1);
    if (chuteTentativa === numeroAleatorio) {
      window.alert(
        `Parabéns! Você adivinhou o número ${numeroAleatorio} em ${
          tentativas + 1
        } tentativas!`
      );
      resetJogo();
    } else if (chances == 1) {
      window.alert(`Que pena! Você perdeu! o número era ${numeroAleatorio}`);
      resetJogo();
    } else if (chuteTentativa < numeroAleatorio) {
      window.alert('Tente um número maior!');
    } else {
      window.alert('Tente um número menor!');
    }

    setChute('');
  };

  const resetJogo = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 101));
    setTentativas(0);
  };

  function sair() {
    navigateTo('SelecaoJogos');
  }

  var chances = 7 - tentativas;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número!</Text>
      <Text style={styles.instruction}>Digite um número entre 1 e 100:</Text>
      <Text style={styles.chancesText}>Chances restantes: {chances}</Text>
      <TextInput
        style={styles.input}
        value={chute}
        onChangeText={setChute}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.adivinharButton} onPress={chutes}>
        <Text style={styles.buttonText}>Adivinhar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.reiniciarButton} onPress={resetJogo}>
        <Text style={styles.buttonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sairButton} onPress={sair}>
        <Text style={styles.buttonText}>Sair do Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Adivinha;
