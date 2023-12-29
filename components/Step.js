import { View, Text, StyleSheet } from "react-native";

function StepHeader({ title }) {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

function StepItem({ item }) {
  return (
    <View style={styles.stepItemContainer}>
      <Text style={styles.stepItemText}>{item}</Text>
    </View>
  );
}

function Step({ title, items }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {<StepHeader title={title} />}
        {items.map((item) => (
          <StepItem item={item} />
        ))}
      </View>
    </View>
  );
}

export default Step;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    width: "70%",
    padding: 8,
    paddingVertical: 20,
  },
  headerStyle: {
    borderBottomColor: "#d39e4f",
    borderBottomWidth: 2,
    marginBottom: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    color: "#d39e4f",
    paddingBottom: 8,
  },
  stepItemContainer: {
    borderRadius: 5,
    backgroundColor: "#d39e4f",
    marginVertical: 3,
    padding: 6,
  },
  stepItemText: {
    color: "#533311",
    textAlign: "center",
    fontWeight: "600",
  },
});
