import { View, Text, FlatList, Animated} from "react-native";
import ScreenStyle from "./ScreenStyle";
import MySearchBarBackIcon from "../components/mySearchbBarBackIcon/MySearchBarBackIcon";
import ExperienceCard from "../components/exeprienceCard/ExeperienceCard";
import { mockDB } from "../assets/MockDB";

const ExperienceListScreen = () => {
    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBarBackIcon></MySearchBarBackIcon>
            </View>
            <View style={ScreenStyle.countrySelectionCard}>
                <Text style={ScreenStyle.locationHeader}>Skien</Text>
            </View>
            <FlatList
                data = {mockDB.experiences}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style = {ScreenStyle.experienceList}>
                        <ExperienceCard id={item.id} ></ExperienceCard>
                    </View>
                )}
            ></FlatList>
        </View>
    );
}

export default ExperienceListScreen;