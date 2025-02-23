import { Text, View } from "react-native";
import { registerRootComponent } from 'expo';
import HomeScreen from "./App";

function Index() {
  return <HomeScreen />
}

registerRootComponent(Index);
