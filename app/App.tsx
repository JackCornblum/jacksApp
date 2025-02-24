import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AuthLayout from "./auth/_layout";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
            <AuthLayout />
        </SafeAreaView>
    )
}