import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState } from 'react';
import { CountrySelectionCardStyle } from "./CountrySelectionCardStyle";

const mockData = require('./MockDB.json');

interface CountrySelectionCardProps {
    countryName: string;
    isOpen: boolean;
    onToggle: () => void;
}

const CountrySelectionCard: React.FC<CountrySelectionCardProps> = ({ countryName, isOpen, onToggle }) => {
    
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);     

    return(
        <View style = {CountrySelectionCardStyle.countryCardContainer}>
            <View style = {CountrySelectionCardStyle.namecontainer}>
                <Text style={CountrySelectionCardStyle.countryName}>
                    {countryName}
                </Text>
                <TouchableOpacity
                    style={CountrySelectionCardStyle.button}
                    onPress={() => setIsDropDownOpen(!isDropDownOpen)}
                >
                    <Text style={CountrySelectionCardStyle.buttonText}>
                        {isDropDownOpen ? 'X' : 'V'}
                    </Text>
                </TouchableOpacity>
            </View>

            {isDropDownOpen && (
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