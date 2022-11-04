import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../libraries/Colors";
const Search = ({ text }) => {
	return <TextInput style={styles.searchField} placeholder={text} />;
};

const styles = StyleSheet.create({
	searchField: {
		// width: "80%",
		width: "90%",
		backgroundColor: Colors.white,
		borderRadius: 10,
		marginRight: "auto",
		marginLeft: "auto",
		marginTop: "5%",
		height: 50,
		paddingLeft: 20,
		marginBottom: 15,
	},
});
export default Search;
