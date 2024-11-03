import "./gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "@/Screens/List";
import { BooksNavigation } from "@/types/navigation";
import { BookProvider } from "@/Context/BookContext";
import Stored from "@/Screens/Stored";
import Details from "@/Screens/Details";

const Stack = createStackNavigator<BooksNavigation>();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Stored" component={Stored} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;
