import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const nombre = 'Sebastian Sota Garcia'
const correo = 'sebastiansota@utez.edu.mx'
const ubicacion = 'Emiliano Zapata, Mor. Mex.'

App = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrjkxvkQwH9K6i0npWMaW0tUH803g8Bl5BOg&usqp=CAU' }}
        style={styles.circulito} />
      <Text style={{
        color: 'black',
        fontSize: 20, marginTop: 20
      }}>
        {nombre}
      </Text>
      <Text style={styles.cuerpo}>
        Correo: {correo}
      </Text>
      <Text style={styles.cuerpo}>
        Ubicación: {ubicacion}
      </Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulito: {
    borderRadius: 100,
    backgroundColor: 'black',
    width: 150,
    height: 150
  },
  cuerpo: {
    color: 'gray',
    fontSize: 15,
    marginTop: 10
  }
});
