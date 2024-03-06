
import { ButtonGroup, Button } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, Alert, TextInput } from 'react-native';

App = () => {
  let [urlImg, setUrl] = useState('https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png');
  let [name, setName] = useState('¿Quién es ese pokémon?');
  let [modal, setModalVisible] = useState(false);
  let [nombrePokemon, setNombre] = useState('ditto');

  const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`

  const showAlert = () => {
    Alert.alert('¿Te gusta pokémon?',
      'Dependiendo tu respuesta será el resultado',
      [
        { text: 'Sí', onPress: () => { getPokemon(); } },
        { text: 'No', onPress: () => { setModalVisible(false) } }
      ]);
  }

  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setUrl(data.sprites.front_shiny);
        setName(data.name);
      } else {
        Alert.alert(
          'No se encontraron coincidencias',
          `No existe un Pokémon con el nombre: ${nombrePokemon}`,
          [
            {
              text: 'Ok', onPress: () => {
                setModalVisible(false);
                setNombre("");
              }
            }
          ]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20, width: 200 }}>
        El nombre del Pokémon a buscar es: {nombrePokemon}
      </Text>
      <TextInput
        style={{ fontSize: 15, marginBottom: 20 }}
        placeholder='Introduce el nombre de un Pokémon'
        value={nombrePokemon}
        onChangeText={setNombre} />

      <Button onPress={() => setModalVisible(!modal)}
        title='Bienvenido!' />
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}>
        <View style={styles.ModalView}>
          <View style={styles.cerrar}>
            <Button color={'black'} title='X' onPress={closeModal} />
          </View>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image style={styles.imagen}
              source={{ uri: urlImg }} />
            <Text style={{
              fontSize: 20,
              marginBottom: 20
            }}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
            <Button
              title='Descubrir pokémon'
              color={'secondary'} onPress={showAlert} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f200',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalView: {
    margin: 20,
    backgroundColor: '#f3e89f',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cerrar: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  imagen: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    width: 200,
    height: 200
  }
});
