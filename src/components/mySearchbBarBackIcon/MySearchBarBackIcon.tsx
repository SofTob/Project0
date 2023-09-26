import { View, Text, TouchableOpacity } from "react-native";
import MySearchBar from "../mySearchBar/MySearchBar";
import MySearchBarBackIconStyle from "./MySearchBarBackIconStyle";
import Icon from 'react-native-vector-icons/Ionicons';


const MySearchBarBackIcon = () => {

  return (
    <View style = {MySearchBarBackIconStyle.container}>
        <TouchableOpacity style = {MySearchBarBackIconStyle.backIconContainer}>
          <Icon name="arrow-back" style = {MySearchBarBackIconStyle.backIcon} />
        </TouchableOpacity>  
        <View style={MySearchBarBackIconStyle.searchbar}>      
            <MySearchBar/>
        </View>
    </View>
  );
}

export default MySearchBarBackIcon;