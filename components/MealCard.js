import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import MealTextDetail from "./MealTextDetails";

function MealCard({
  id,
  imageUrl,
  title,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => onPress(id)}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{ uri: `${imageUrl}` }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <MealTextDetail
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
  innerContainer: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  pressed: {
    opacity: 0.4,
  },
  image: {
    width: "auto",
    height: 200,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  detailsContainer: {
    textAlign: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
