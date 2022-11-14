import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	createNavigationContainer,
} from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import FeedScreen from "./screens/FeedScreen";
import UserScreen from "./screens/UserScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ animation: "none" }}>
				<Stack.Screen
					options={{ headerShown: false }}
					name="LoginScreen"
					component={LoginScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="FeedScreen"
					component={FeedScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="UserScreen"
					component={UserScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="SearchScreen"
					component={SearchScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name="SettingsScreen"
					component={SettingsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
