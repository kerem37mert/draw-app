import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Draw from "./pages/Draw";

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage" component={Home} />
            <Stack.Screen name="DrawPage" component={Draw} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;