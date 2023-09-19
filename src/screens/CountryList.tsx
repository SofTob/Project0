import React from 'react';
import { View } from 'react-native';
import MySearchBar from '../components/mySearchBar/MySearchBar';
import ScreenStyle from './ScreenStyle';

const CountryList = () => {

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBar></MySearchBar>
            </View>
        </View>
    );
}

export default CountryList;
