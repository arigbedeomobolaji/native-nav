import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import { useLayoutEffect } from "react";

function MealsCategories({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const category = CATEGORIES.find((category) => category.id === categoryId);
  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) > -1
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [navigation, category]);

  function onPress(id) {
    navigation.navigate("Preparation", {
      mealsId: id,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <MealCard {...item.item} onPress={onPress} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default MealsCategories;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 32,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#584444",
  },
  innerContainer: {
    // flex: 1,
    // alignItems: "center",
    backgroundColor: "green",
  },
});
