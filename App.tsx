import { View } from "react-native";
import CountryList from "./src/screens/CountryList";
import ExperienceListScreen from "./src/screens/ExexperienceListScreen";
import ExperiencePost from "./src/screens/ExperiencePost";
import CreateExperiencePost from "./src/screens/CreateExperiencePost";

export default function App() {
  return (
    <View>
      {/* <ExperienceListScreen></ExperienceListScreen> */}
      {/* <ExperiencePost id={1}/> */}
      <CreateExperiencePost></CreateExperiencePost>
    </View>
  );
}
