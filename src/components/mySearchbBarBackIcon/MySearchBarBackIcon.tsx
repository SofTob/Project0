import { View, Text, TouchableOpacity } from "react-native";
import MySearchBar from "../mySearchBar/MySearchBar";
import MySearchBarBackIconStyle from "./MySearchBarBackIconStyle";


const MySearchBarBackIcon = () => {

  return (
    <View style = {MySearchBarBackIconStyle.container}>
        <TouchableOpacity style = {MySearchBarBackIconStyle.backIconContainer}>
            <Text style={MySearchBarBackIconStyle.backIcon}>B</Text>
        </TouchableOpacity>  
        <View style={MySearchBarBackIconStyle.searchbar}>      
            <MySearchBar/>
        </View>
    </View>
  );
}

export default MySearchBarBackIcon;