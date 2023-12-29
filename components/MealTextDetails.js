import { Text, View, StyleSheet } from "react-native";

function MealTextDetail({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.mealsDetails}>
      <Text style={[styles.detailsText, style]}>{duration}m</Text>
      <Text style={[styles.detailsText, style]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsText, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealTextDetail;

const styles = StyleSheet.create({
  mealsDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  detailsText: {
    color: "#1b1b1b",
    fontWeight: "bold",
    fontSize: 12,
  },
});
