import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { CountrySelectionCardStyle } from "./CountrySelectionCardStyle";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { mockDB } from "../../assets/MockDB";
import supabase from "../../config/Supabase";
import{ Database } from "../../../database.types"
import { useEffect, useState } from "react";
import { CountrySelectionCardProps, RootStackParamList } from "../../../types";


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
    const [cityData, setCityData] =useState<Database['public']['Tables']['Cities']['Row'][] | null>(null);

    const getCityInfo = async (country_id: number) => {
        const { data, error } = await supabase
            .from('Cities')
            .select('*')
            .eq('country_id', country_id);

        if (error) {
            console.error('Error fetching cities:', error);
            return;
        }

        setCityData(data);
    }

    
    const handleClick = (country_id: number) => {
        getCityInfo(country_id)
        onToggle()
    }
    
    return(
        <View style = {CountrySelectionCardStyle.countryCardContainer}>
            <View style = {CountrySelectionCardStyle.namecontainer}>
                <Text style={CountrySelectionCardStyle.countryName}>
                    {countryName}
                </Text>
                <TouchableOpacity
                    style={CountrySelectionCardStyle.button}
                    onPress={()=>handleClick(countryId)}
                >{isOpen ? 
                <Icon name="close" style={CountrySelectionCardStyle.buttonText}/> : 
                <Icon name="chevron-down" style={CountrySelectionCardStyle.buttonText}/>}        
                </TouchableOpacity>
            </View>

            {isOpen && (
                <View style={CountrySelectionCardStyle.dropDownContainer}>
                    <FlatList
                        contentContainerStyle={{ padding: 0, margin: 0 }}
                        data={cityData}
                        keyExtractor={(item) => item.city_id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ExperienceListScreen', {
                                cityId: item.city_id,
                                cityName: item.city_name
                            })}>
                                <Text style={CountrySelectionCardStyle.dropDownName}>{item.city_name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    )
};

export default CountrySelectionCard;