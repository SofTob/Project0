import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { CountrySelectionCardStyle } from "./CountrySelectionCardStyle";

const mockData = require('./MockDB.json');

//Props for the CountrySelectionCard component
interface CountrySelectionCardProps {
    //Name of the country to be displayed
    countryName: string;
    //Whether or not the dropdown is open
    isOpen: boolean;
    //Function to toggle the dropdown
    onToggle: () => void;
}

/**
 * Displays a card with the country name and a dropdown feature to view more details.
 * 
 * @param countryName Name of the country to be displayed
 * @param isOpen Whether or not the dropdown is open
 * @param onToggle Function to toggle the dropdown
 * @returns The CountrySelectionCard component
 */

const CountrySelectionCard: React.FC<CountrySelectionCardProps> = ({ countryName, isOpen, onToggle }) => {
    
    return(
        <View style = {CountrySelectionCardStyle.countryCardContainer}>
            <View style = {CountrySelectionCardStyle.namecontainer}>
                <Text style={CountrySelectionCardStyle.countryName}>
                    {countryName}
                </Text>
                <TouchableOpacity
                    style={CountrySelectionCardStyle.button}
                    onPress={onToggle}
                >
                    <Text style={CountrySelectionCardStyle.buttonText}>
                        {isOpen ? 'X' : 'V'}
                    </Text>
                </TouchableOpacity>
            </View>

            {isOpen && (
                <View style={CountrySelectionCardStyle.dropDownContainer}>
                    <FlatList
                        contentContainerStyle={{ padding: 0, margin: 0 }}
                        data={mockData.cities}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Text style={CountrySelectionCardStyle.dropDownName}>{item.name}</Text>
                        )}
                    />
                </View>
            )}
        </View>
    )
};

export default CountrySelectionCard;