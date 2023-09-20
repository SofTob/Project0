import { View } from "react-native";
import CountryList from "./src/screens/CountryList";
import ExperienceListScreen from "./src/screens/ExexperienceListScreen";

export default function App() {
  return (
    <View>
      <ExperienceListScreen></ExperienceListScreen>
      {/* <CountryList></CountryList> */}
    </View>
  );
}
