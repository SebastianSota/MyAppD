import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import Settings from "../screens/settings";
import Splash from "../screens/splash";


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