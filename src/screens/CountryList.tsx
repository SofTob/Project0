import {useState} from 'react';
import { View, FlatList} from 'react-native';
import MySearchBar from '../components/mySearchBar/MySearchBar';
import ScreenStyle from './ScreenStyle';
import CountrySelectionCard from '../components/countrySelectionCard/CountrySelectionCard';
import { mockDB } from '../assets/MockDB';

/**
 * Displays a list of countries with a dropdown feature to view more details.
 * Ensures that only one dropdown is open at any given time.
 * 
 * @returns The CountryList screen
 */

const CountryList = () => {

    //This is the state that will be used to keep track of which dropdown is open
    const [openDropdownId, setOpenDropdownId] = useState<null | number>(null);

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBar></MySearchBar>
            </View>
            <FlatList
                data={mockDB.countries}
                keyExtractor={(country) => country.countryId.toString()}
                renderItem={({ item: country }) => (
                    <View style={ScreenStyle.countrySelectionCard}>
                        <CountrySelectionCard 
                        countryId={country.countryId}
                        countryName={country.countryName}
                        isOpen={country.countryId === openDropdownId}
                        onToggle={() => setOpenDropdownId(prev => prev === country.countryId ? null : country.countryId)}/>
                    </View>
                )}
            />
        </View>
    );
}

export default CountryList;
