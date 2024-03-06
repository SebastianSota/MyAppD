
import { Button, Card, Image } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Alert, TextInput, SectionList } from 'react-native';

Pokedex = () => {
  let [imagen, setImagen] = useState('https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png');
  let [modal, setModalVisible] = useState(false);
  let [name, setName] = useState('ditto');
  let [pokemons, setPokemons] = useState([]);
  let [pokemonSelec, setPokemon] = useState({});

  const url2 = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`


  const getPokemon = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setImagen(data.sprites.front_shiny);
        setName(data.name);
        setPokemons(prevPokemon => [...prevPokemon, data]);
      } else {
        Alert.alert(
          'No se encontraron coincidencias',
          `No existe un Pokémon con el nombre: ${name}`,
          [
            {
              text: 'Ok', onPress: () => {
                setNombre("");
                setImagen("https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png");
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

  const openModal = (pokemon) => {
    setPokemon(pokemon);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Card
        wrapperStyle={{ backgroundColor: 'pink' }}>
        <Card.Title>
          {name.charAt(0).toUpperCase()
            + name.slice(1).toLowerCase()}
        </Card.Title>
        <Card.Divider />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image style={styles.imagen} source={{ uri: imagen }} />
        </View>
        <Card.Divider />
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder='Escribe el nombre de un Pokémon'
          style={{
            fontSize: 15,
            width: 250, marginBottom: 20, marginTop: 20
          }} />
        <Button
          style={{ borderRadius: 20 }}
          color={'secondary'}
          title={'Buscar Pokémon'}
          onPress={() => getPokemon()} />
      </Card>
      {/* <ScrollView>
        {
          pokemons.map((item, index) => {
            return (
              <Card key={item.name + index}>
                <Card.Title>
                  {item.name.charAt(0).toUpperCase()
                    + item.name.slice(1).toLowerCase()}
                </Card.Title>
                <Card.Divider />
                <View style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image style={styles.imagen}
                    source={{ uri: item.sprites.front_default }} />
                </View>
              </Card>
            )
          })
        }
      </ScrollView> */}
      <SectionList
        sections={[{ title: 'Pokemons', data: pokemons }]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <Card key={item.name + index}>
            <Card.Title>
              {item.name.charAt(0).toUpperCase()
                + item.name.slice(1).toLowerCase()}
            </Card.Title>
            <Card.Divider />
            <View style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image style={styles.imagen}
                onPressOut={closeModal}
                onLongPress={() => openModal(item)}
                source={{ uri: item.sprites.front_default }} />
            </View>
          </Card>
        )}
      />
      <Modal
        animationType='slide'
        visible={modal}>
        <View style={styles.ModalView}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {pokemonSelec?.name?.charAt(0).toUpperCase()
              + pokemonSelec?.name?.slice(1).toLowerCase()}
          </Text>
          <Image style={styles.imagen} source={{
            uri: pokemonSelec?.sprites?.other?.home.front_default
          }} />
        </View>
      </Modal>
    </View>
  );
}

export default Pokedex;

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
    justifyContent: 'center',
    alignItems: 'center',
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
    borderRadius: 5,
    width: 100,
    height: 100,
  },

  contenedorCard: {

  }
});
