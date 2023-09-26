import { View, Text, TouchableOpacity } from "react-native";
import MySearchBar from "../mySearchBar/MySearchBar";
import MySearchBarBackIconStyle from "./MySearchBarBackIconStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const MySearchBarBackIcon = () => {
  const navigation = useNavigation();
  return (
    <View style = {MySearchBarBackIconStyle.container}>
        <TouchableOpacity style = {MySearchBarBackIconStyle.backIconContainer} onPress={()=>navigation.goBack()}>
          <Icon name="arrow-back" style = {MySearchBarBackIconStyle.backIcon} />
        </TouchableOpacity>  
        <View style={MySearchBarBackIconStyle.searchbar}>      
            <MySearchBar/>
        </View>
    </View>
  );
}

export default MySearchBarBackIcon;