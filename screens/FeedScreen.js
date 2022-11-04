import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Search from "../components/Search";
import PopularUserCard from "../components/PopularUserCard";

const FeedScreen = () => {
	return (
		<View style={styles.container}>
			<Search text="search users" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.CardLoop}>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
					<PopularUserCard
						name="john fucker"
						num_posts="22"
						num_comments="123"
					/>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: "#5cb0df",
	},
	CardLoop: {
		alignItems: "center",
	},
});
export default FeedScreen;
