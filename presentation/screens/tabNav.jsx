import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import App from "./miperfil";
import Pokedex from "./pokedex";
import Settings from "./settings";

const Tab = createBottomTabNavigator();

TabNav = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Pokedex" component={Pokedex} options={{
                headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray', tabBarIcon: ({ color, size }) =>
                    (<MaterialIcons name="catching-pokemon" size={20} color={color} />)
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray', tabBarIcon: ({ color, size }) =>
                    (<MaterialIcons name="settings" size={20} color={color} />)
            }} />
            <Tab.Screen name="Profile" component={App} options={{
                headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'gray', tabBarIcon: ({ color, size }) =>
                    (<MaterialIcons name="verified-user" size={20} color={color} />)
            }} />
        </Tab.Navigator>
    );

}

export default TabNav;