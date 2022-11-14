import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Colors from "../libraries/Colors";

function SearchScreen(props) {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<Search text={"Search for people"} />
			</View>
			<NavBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: Colors.white,
	},
	content: {
		flex: 1,
	},
});

export default SearchScreen;
