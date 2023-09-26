import { View } from "react-native";
import CountryList from "./src/screens/CountryList";
import ExperienceListScreen from "./src/screens/ExexperienceListScreen";
import ExperiencePost from "./src/screens/ExperiencePost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="CountryList" component={CountryList} />
        <Stack.Screen name="ExperienceListScreen" component={ExperienceListScreen} />
        {/* <Stack.Screen name="ExperiencePost" component={ExperiencePost} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
