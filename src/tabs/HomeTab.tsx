import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screen";

const Stack = createNativeStackNavigator();

export const HomeTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}