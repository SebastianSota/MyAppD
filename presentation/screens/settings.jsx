import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native"


Settings = () => {

    const route = useRoute();
    const { user } = route.params;

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green'
        }}>
            <Text>{user.password}</Text>
        </View>
    )
}

export default Settings;