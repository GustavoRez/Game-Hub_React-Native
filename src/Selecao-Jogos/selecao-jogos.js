import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './css';

export default function SelecaoJogos({ navigateTo }) {
  function jogoDaForca() {
    navigateTo('JogoDaForca');
  }
  function adivinha() {
    navigateTo('Adivinha');
  }
  function jogoDaVelha() {
    navigateTo('JogoDaVelha');
  }
  function simuladorD10() {
    navigateTo('SimuladorD10');
  }
  function simuladorD20() {
    navigateTo('SimuladorD20');
  }
  function sair() {
    navigateTo('Login');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione seu Jogo</Text>

      <TouchableOpacity style={styles.button} onPress={adivinha}>
        <Text style={styles.buttonText}>Adivinha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={jogoDaForca}>
        <Text style={styles.buttonText}>Jogo Da Forca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={jogoDaVelha}>
        <Text style={styles.buttonText}>Jogo Da Velha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={simuladorD10}>
        <Text style={styles.buttonText}>Simulador De D10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={simuladorD20}>
        <Text style={styles.buttonText}>Simulador De D20</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={sair}>
        <Text style={styles.exitButtonText}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
}
