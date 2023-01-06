// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./app/store";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <RootSiblingParent>
            <Provider store={store}>
                <NavigationContainer>
                    <TailwindProvider>
                        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> */}
                        {/* <StatusBar style="dark"/> */}
                        <Navigation />
                    </TailwindProvider>
                </NavigationContainer>
            </Provider>
        </RootSiblingParent>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
