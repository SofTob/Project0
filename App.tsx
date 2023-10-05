import { View } from "react-native";
import React, { useState, useEffect } from 'react';
import CountryList from "./src/screens/CountryList";
import ExperienceListScreen from "./src/screens/ExexperienceListScreen";
import ExperiencePost from "./src/screens/ExperiencePost";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "react-native-elements";
import supabase from "./src/config/Supabase";
import { Database } from "./database.types";

const Stack = createNativeStackNavigator();

export default function App() {

  const [data, setData] = useState<Database['public']['Tables']['Countries']>();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const response = await supabase
      .from('Countries')
      .select('*');

    setData(response.data);
    console.log(data);
  };

  const onPress = () => {
    fetchData();
  }
  // console.log(process.env);


  return (    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Press Me" onPress={() => {onPress()}} />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator 
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="CountryList" component={CountryList} />
    //     <Stack.Screen name="ExperienceListScreen" component={ExperienceListScreen} />
    //     <Stack.Screen name="ExperiencePost" 
    //     component={ExperiencePost} 
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
