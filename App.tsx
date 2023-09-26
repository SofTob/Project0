import { View } from "react-native";
import CountryList from "./src/screens/CountryList";
import ExperienceListScreen from "./src/screens/ExexperienceListScreen";
import ExperiencePost from "./src/screens/ExperiencePost";

export default function App() {
  return (
    <View>
      <ExperienceListScreen></ExperienceListScreen>
      {/* <ExperiencePost id={1}/> */}
    </View>
  );
}
