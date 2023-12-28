import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
function CategoryCard({ title, color, pressed }) {
  return (
    <View style={[styles.container]}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={true}
      >
        <View
          style={[
            styles.innerContainer,
            ,
            {
              backgroundColor: color,
            },
          ]}
        >
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" && 16,
    flex: 1,
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    margin: 8,
    padding: 8,
    height: 150,
    borderRadius: 16,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },

  pressed: {
    opacity: 0.3,
  },

  text: {
    fontWeight: "bold",
  },
});
