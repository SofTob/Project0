import {useState} from 'react';
import { View, FlatList} from 'react-native';
import MySearchBar from '../components/mySearchBar/MySearchBar';
import ScreenStyle from './ScreenStyle';
import CountrySelectionCard from '../components/countrySelectionCard/CountrySelectionCard';

const mockData = require('../components/countrySelectionCard/MockDB.json');

/**
 * Displays a list of countries with a dropdown feature to view more details.
 * Ensures that only one dropdown is open at any given time.
 * 
 * @returns The CountryList screen
 */

const CountryList = () => {

    //This is the state that will be used to keep track of which dropdown is open
    const [openDropdownId, setOpenDropdownId] = useState<null | string>(null);

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBar></MySearchBar>
            </View>
            <FlatList
                data={mockData.countries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={ScreenStyle.countrySelectionCard}>
                        <CountrySelectionCard 
                        countryName={item.name}
                        isOpen={item.id === openDropdownId}
                        onToggle={() => setOpenDropdownId(prev => prev === item.id ? null : item.id)}                        />
                    </View>
                )}
            />
        </View>
    );
}

export default CountryList;
