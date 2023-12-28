import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryCard from "../components/CategoryCard"


function CategoriesScreen() {
    return <SafeAreaView style={styles.container}>
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={(item) => <CategoryCard {...item.item} />}
            numColumns={2}
        />
    </SafeAreaView>
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#584444",
        flex: 1,
    }
})