import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "../screens/Splash/Splash";
import Login from "../screens/Login/Login";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={'Splash'}>
                <Stack.Screen
                    name={'Splash'}
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'Login'}
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
