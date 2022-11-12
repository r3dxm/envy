import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Colors from "../libraries/Colors";

import Header from "../components/Header";
import PopularUserCard from "../components/PopularUserCard";
import NavBar from "../components/NavBar";

const FeedScreen = () => {
	return (
		<View style={styles.container}>
			<Header />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.CardLoop}>
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
					<PopularUserCard name="test mctest" top_comment="top comment here" />
				</View>
			</ScrollView>
			<NavBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: Colors.white,
	},
	CardLoop: {
		alignItems: "center",
	},
});
export default FeedScreen;
