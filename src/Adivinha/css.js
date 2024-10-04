import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00FF7F',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
  },
  instruction: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'Comic Sans MS',
  },
  input: {
    height: 40,
    borderColor: '#00FF7F',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    width: '100%',
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
    fontFamily: 'Comic Sans MS',
  },
  chancesText: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#FF6347', /* Tomate */
  marginVertical: 10,
  textAlign: 'center',
},
  adivinharButton: {
    backgroundColor: '#1a6bba',
    borderRadius: 180,
    padding: 10,
    marginVertical: 5,
    width: '60%',
  },
  reiniciarButton: {
    backgroundColor: '#bfa413',
    borderRadius: 180,
    padding: 10,
    marginVertical: 5,
    width: '60%',
  },
  sairButton: {
    backgroundColor: '#c24719',
    borderRadius: 180,
    padding: 10,
    marginVertical: 5,
    width: '60%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Comic Sans MS',
  },
});
