import {useEffect, useState} from 'react';
import { View, FlatList} from 'react-native';
import MySearchBar from '../components/mySearchBar/MySearchBar';
import ScreenStyle from './ScreenStyle';
import CountrySelectionCard from '../components/countrySelectionCard/CountrySelectionCard';
import { mockDB } from '../assets/MockDB';
import supabase from '../config/Supabase'
import { Database } from "../../database.types";


/**
 * Displays a list of countries with a dropdown feature to view more details.
 * Ensures that only one dropdown is open at any given time.
 * 
 * @returns The CountryList screen
 */

const CountryList = () => {

    //The country data from the api call will be stored here
    const [countryData, setCountryData] = useState<Database['public']['Tables']['Countries']['Row'][] | null>(null);
    const [error, setError] = useState(null);

    //This is the state that will be used to keep track of which dropdown is open
    const [openDropdownId, setOpenDropdownId] = useState<null | number>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await supabase.from('Countries').select('*');
            setCountryData(response.data as Database['public']['Tables']['Countries']['Row'][]);
        };
        fetchCountries();
    }, []); 

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBar></MySearchBar>
            </View>
            <FlatList
                data={countryData}
                keyExtractor={(country) => country.country_id.toString()}
                renderItem={({ item: country }) => (
                    <View style={ScreenStyle.countrySelectionCard}>
                        <CountrySelectionCard 
                        countryId={country.country_id}
                        countryName={country.country_name}
                        isOpen={country.country_id === openDropdownId}
                        onToggle={() => setOpenDropdownId(prev => prev === country.country_id ? null : country.country_id)}/>
                    </View>
                )}
            />
        </View>
    );
}

export default CountryList;
