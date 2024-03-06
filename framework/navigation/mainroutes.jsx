import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../presentation/screens/splash";
import Login from "../../presentation/screens/login";
import Settings from "../../presentation/screens/settings";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash"
                component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login"
                component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Settings"
                component={Settings} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainRoutes;