import { useNavigation } from "@react-navigation/native"
import { useEffect, useRef } from "react";
import { StatusBar, StyleSheet, View } from "react-native"
import LottieView from "lottie-react-native"
import { Text } from "@rneui/themed";

Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigation])


  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#083565"} />
      <LottieView
        ref={animation}
        style={{ width: 400, height: 400 }}
        source={require("../assets/animations/Shoppingcartutez.json")}
        autoPlay
        loop={true}
      />
      <Text h4 h4Style={styles.mainText}>
        Territorio de calidad
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  mainText: {
    color: "#083565",
    fontWeight: 'bold'
  },
  statusBar: {
    color: "#083565"
  }
})

export default Splash;