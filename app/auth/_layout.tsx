import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginComponent from '../screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStackParamList } from '../types/navigation'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthLayout() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Group>
                    <Stack.Screen name="Login" component={LoginComponent}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}