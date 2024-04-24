import { Text, View } from "react-native";
import Auth from "../components/auth";


export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {/* <Auth /> */}
        </View>
    );
}