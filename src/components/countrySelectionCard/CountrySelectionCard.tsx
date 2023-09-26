import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { CountrySelectionCardStyle } from "./CountrySelectionCardStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { mockDB } from "../../assets/MockDB";


//Props for the CountrySelectionCard component
interface CountrySelectionCardProps {
    //Name of the country to be displayed
    countryName: string;
    //Country id
    countryId: number;
    //Whether or not the dropdown is open
    isOpen: boolean;
    //Function to toggle the dropdown
    onToggle: () => void;
}

type RootStackParamList = {
    CountryList: undefined;
    ExperienceListScreen: undefined;
    // ExperiencePost: undefined;  // Uncomment this if you plan on using it later
  };

/**
 * Displays a card with the country name and a dropdown feature to view more details.
 * 
 * @param countryName Name of the country to be displayed
 * @param isOpen Whether or not the dropdown is open
 * @param onToggle Function to toggle the dropdown
 * @returns The CountrySelectionCard component
 */

const CountrySelectionCard: React.FC<CountrySelectionCardProps> = ({ countryName, isOpen, onToggle, countryId }) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'CountryList'>>();
    
    return(
        <View style = {CountrySelectionCardStyle.countryCardContainer}>
            <View style = {CountrySelectionCardStyle.namecontainer}>
                <Text style={CountrySelectionCardStyle.countryName}>
                    {countryName}
                </Text>
                <TouchableOpacity
                    style={CountrySelectionCardStyle.button}
                    onPress={onToggle}
                >{isOpen ? 
                <Icon name="close" style={CountrySelectionCardStyle.buttonText}/> : 
                <Icon name="chevron-down" style={CountrySelectionCardStyle.buttonText}/>}        
                </TouchableOpacity>
            </View>

            {isOpen && (
                <View style={CountrySelectionCardStyle.dropDownContainer}>
                    <FlatList
                        contentContainerStyle={{ padding: 0, margin: 0 }}
                        data={mockDB.cities}
                        keyExtractor={(item) => item.cityId.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ExperienceListScreen')}>
                                <Text style={CountrySelectionCardStyle.dropDownName}>{item.cityName}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    )
};

export default CountrySelectionCard;