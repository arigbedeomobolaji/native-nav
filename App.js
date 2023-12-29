import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";
import MealsCategories from "./screens/MealsCategories";
import PreparationScreen from "./screens/PreparationScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HeaderLeft() {
  return (
    <View>
      <Text style={styles.text}>LeftIcon</Text>
    </View>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#b4aba0",
          width: "70%",
        },

        headerStyle: {
          backgroundColor: "#5c3c18",
        },
        headerTintColor: "#b9ad9f",
        drawerActiveTintColor: "#5c3c18",
        drawerInactiveTintColor: "#44290a",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        drawerItem
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5c3c18",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={DrawerNav}
          options={{
            headerLeft: () => (
              <View>
                <Text style={styles.text}>LeftIcon</Text>
              </View>
            ),
            headerShown: false,
          }}
        />
        <Stack.Screen name="Meals" component={MealsCategories} />
        <Stack.Screen
          name="Preparation"
          component={PreparationScreen}
          options={{
            title: "About the Meal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
