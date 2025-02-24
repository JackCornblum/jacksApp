import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';

export default function LoginComponent() {
    const [username, setUsername] = useState("");

    return (
        <View style={{flex: 1}}>
            <View style={styles.topView}>
                <Text style={{textAlign: 'center'}}>Jack's App Login</Text>
            </View>
            <View style={{flex: 3, borderWidth: 1, borderColor: 'blue'}}>
                <TextInput
                    label="Customer"
                    value={username}
                    mode="outlined"
                    selectionColor={'#00355C'}
                    outlineColor={'#00355C'}
                    activeOutlineColor={'#1D9FFF'}
                    onChangeText={(value) => console.log('hello')}
                    style={{ height: 48, marginBottom: 15, marginTop: 15, backgroundColor: '#ffffff' }}
                    theme={{ colors: { text: '#00355C', placeholder: '#00355C' } }}
                    testID='customerInput'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
    }
})