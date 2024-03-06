import { useNavigation } from "@react-navigation/native";
import { Button, Card, Image } from "@rneui/themed";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { BackendConfig } from "../config/backendconfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

Login = () => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    const { url, setUrl } = BackendConfig();

    const navigation = useNavigation();

    let [tries, setTries] = useState(0);

    const validateUser = async () => {
        console.log(tries);
        if (tries <= 3) {
            try {
                const payload = { username: userName, password: password };
                const response = await fetch(url + "/login", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    AsyncStorage.setItem("usuario", JSON.stringify(data));
                    AsyncStorage.removeItem("usuario");
                    const datoAsync = await JSON.parse(AsyncStorage.getItem("usuario"));
                    navigation.replace('TabNav');
                } else {
                    Alert.alert(
                        'Contraseña o Usuario incorrectos',
                        `Te quedan ${3 - tries} intentos`,
                        [
                            {
                                text: 'Intentar de nuevo',
                                onPress: () => { tries++ }
                            }
                        ]
                    )
                }
            } catch (error) {
            }
        } else {
            Alert.alert(
                'Demasiados intentos',
                'El usuario ha sido bloqueado, intente más tarde',
                [
                    { text: 'Ok', }
                ]
            );
        }
    }

    return (
        <View
            style={styles.container}>
            <Card
                containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 250,
                }}>
                <Card.Title>Inicio de sesión</Card.Title>
                <Card.Divider />
                <Image
                    style={{ height: 200, width: 200 }}
                    source={
                        require('../assets/userImage.png')
                    } />
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        style={{ marginBottom: 10 }}
                        placeholder="Usuario: "
                        value={userName}
                        onChangeText={setUserName} />

                    <TextInput placeholder="Contraseña: "
                        value={password}
                        onChangeText={setPassword} />
                </View>
                <Button
                    title={'Iniciar sesión'}
                    color='black'
                    onPress={validateUser} />
            </Card>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})