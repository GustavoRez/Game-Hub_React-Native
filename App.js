import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { stylesL } from './src/css/css';
import LoginScreen from './src/Login/LoginScreen';
import Adivinha from './src/Adivinha/adivinha'
import JogoDaVelha from './src/Jogo-da-Velha/jogo-da-velha';
import JogoDaForca from './src/Jogo-da-Forca/jogo-da-forca';
import SimuladorD10 from './src/Simulador-Dados/simulador-d10';
import SimuladorD20 from './src/Simulador-Dados/simulador-d20';
import SelecaoJogos from './src/Selecao-Jogos/selecao-jogos';

export default function App() {
  const [navigationStack, setNavigationStack] = useState([
    { screen: 'Login', params: {} },
  ]);

  function navigateTo(screen, params = {}) {
    setNavigationStack([...navigationStack, { screen, params }]);
  }

  function goBack() {
    if (navigationStack.length > 1) {
      setNavigationStack(navigationStack.slice(0, -1));
    }
  }

  function renderScreen() {
    const currentScreen = navigationStack[navigationStack.length - 1];
    const { screen, params } = currentScreen;

    switch (screen) {
      case 'Login':
        return <LoginScreen navigateTo={navigateTo} />;
      case 'SelecaoJogos':
        return <SelecaoJogos navigateTo={navigateTo} />;
      case 'Adivinha':
        return <Adivinha navigateTo={navigateTo} />;
      case 'JogoDaVelha':
        return <JogoDaVelha navigateTo={navigateTo} />;
      case 'JogoDaForca':
        return <JogoDaForca navigateTo={navigateTo} />;
      case 'SimuladorD10':
        return <SimuladorD10 navigateTo={navigateTo} />;
      case 'SimuladorD20':
        return <SimuladorD20 navigateTo={navigateTo} />;
      default:
        return <LoginScreen navigateTo={navigateTo} />;
    }
  }
  return <View style={stylesL.container}>{renderScreen()}</View>;
}
