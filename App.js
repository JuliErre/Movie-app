// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./app/store";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
    return (
        <RootSiblingParent>
            <Provider store={store}>
                <NavigationContainer>
                    <TailwindProvider>
                        <Navigation />
                    </TailwindProvider>
                </NavigationContainer>
            </Provider>
        </RootSiblingParent>
    );
}
