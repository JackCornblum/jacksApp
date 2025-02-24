import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';

export default function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{flex: 1}}>
            <View style={styles.topView}>
                <Text style={{textAlign: 'center'}}>Jack's App Login</Text>
            </View>
            <View style={{flex: 3, borderWidth: 1, borderColor: 'blue', alignItems: 'center'}}> 
                <View style={{flex: 1, width: '80%'}}>
                    <TextInput
                        label="Customerssss"
                        value={username}
                        mode="flat"
                        outlineColor={'#00355C'}
                        activeOutlineColor={'#1D9FFF'}
                        onChangeText={(value) => console.log('hello')}
                        style={{ 
                            height: 48, 
                            backgroundColor: '#ffffff',
                            borderRadius: 0,
                            marginBottom: 5
                        }}
                        theme={{ colors: { text: '#00355C', placeholder: '#00355C' } }}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        mode="flat"
                        outlineColor={'#00355C'}
                        activeOutlineColor={'#1D9FFF'}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                        style={{ 
                            height: 48, 
                            backgroundColor: '#ffffff',
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0
                        }}
                        theme={{ colors: { text: '#00355C', placeholder: '#00355C' } }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
        backgroundColor: '#ffc299',
        justifyContent: 'center',
    }
})