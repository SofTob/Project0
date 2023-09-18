import React from 'react';
import { SearchBar } from '@rneui/themed';
import MySearchBarStyle from './MySearchBarStyle';

type SearchBarComponentProps = {};

const MySearchBar:React.FunctionComponent<SearchBarComponentProps> = () => {

    const [search, setSearch] = React.useState('');

    const updateSearch = (search:string) => {
        setSearch(search);
    };

    return (
        <SearchBar 
        placeholder='Search for a country ...'
        onChangeText={updateSearch}
        value={search}

        containerStyle={MySearchBarStyle.containerStyle}
        inputContainerStyle={MySearchBarStyle.inputContainerStyle}
        inputStyle={MySearchBarStyle.inputStyle}
        searchIcon={MySearchBarStyle.searchIcon}
        clearIcon={MySearchBarStyle.clearIcon}
        placeholderTextColor={'#FAF1E4'}
        selectionColor={'#CEDEBD'}
        />
    )
};

export default MySearchBar;
