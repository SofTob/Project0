import { View, Text } from "react-native";
import ScreenStyle from "./ScreenStyle";
import MySearchBarBackIcon from "../components/mySearchbBarBackIcon/MySearchBarBackIcon";


const ExperienceListScreen = () => {
    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBarBackIcon></MySearchBarBackIcon>
            </View>
        </View>
    );
}

export default ExperienceListScreen;