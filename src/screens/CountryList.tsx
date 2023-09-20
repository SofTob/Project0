import React from 'react';
import { View } from 'react-native';
import MySearchBar from '../components/mySearchBar/MySearchBar';
import ScreenStyle from './ScreenStyle';
import CountrySelectionCard from '../components/countrySelectionCard/CountrySelectionCard';

const CountryList = () => {

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBar></MySearchBar>
            </View>
            <View style={ScreenStyle.countrySelectionCard}>
                <CountrySelectionCard></CountrySelectionCard>
            </View>
        </View>
    );
}

export default CountryList;
