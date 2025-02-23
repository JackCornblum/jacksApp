import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
            <Text style={{borderWidth: 1, borderColor: 'red'}}>Hello World</Text>
        </SafeAreaView>
    )
}