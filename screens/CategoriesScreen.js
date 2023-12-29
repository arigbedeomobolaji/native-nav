import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";

function CategoriesScreen({ navigation }) {
  function onPress(id) {
    navigation.navigate("Meals", {
      categoryId: id,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <CategoryCard {...item.item} onPress={onPress} />}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#584444",
  },
});
