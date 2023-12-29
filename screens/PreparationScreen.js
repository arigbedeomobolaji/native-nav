import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { MEALS } from "../data/dummy-data";
import MealTextDetail from "../components/MealTextDetails";
import Step from "../components/Step";
import { useLayoutEffect, useState } from "react";

function PreparationScreen({ route, navigation }) {
  const [favorite, setFavorite] = useState(false);
  const mealsId = route.params.mealsId;
  const meal = MEALS.find((meal) => meal.id === mealsId);

  function handleAddToFavorite() {
    setFavorite(!favorite);
    // Do other things in part two
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Pressable onPress={handleAddToFavorite}>
            <Ionicons
              name="star"
              color={favorite ? "#d39e4f" : "#dfdede"}
              size={25}
            />
          </Pressable>
        </View>
      ),
    });
  }, [navigation, favorite]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Image */}
        <Image
          source={{ uri: meal.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        {/* Title */}
        <Text style={styles.title}>{meal.title}</Text>
        <MealTextDetail
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          style={{
            color: "#dfdede",
          }}
        />
        {/* Ingredients */}
        <Step title="ingredient" items={meal.ingredients} />
        {/* Steps */}
        <Step title="steps" items={meal.steps} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default PreparationScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 32,
    flex: 1,
    backgroundColor: "#584444",
  },
  innerContainer: {
    // flex: 1,
    // alignItems: "center",
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    padding: 16,
    color: "white",
  },
});
