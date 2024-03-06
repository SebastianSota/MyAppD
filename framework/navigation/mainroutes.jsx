import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../presentation/screens/splash";
import Login from "../../presentation/screens/login";
import TabNav from "../../presentation/screens/tabNav";
import Profile from "../../presentation/screens/miperfil";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash"
                component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login"
                component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="TabNav"
                component={TabNav} options={{ headerShown: false }} />
                <Stack.Screen name="Profile"
                component={Profile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainRoutes;