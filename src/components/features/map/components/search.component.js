import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import { LocationContext } from '../../../../services/location/location.context';

const SearchView = styled.View`
    padding: ${(props) => props.theme.space[3]}
    position: absolute;
    z-index: 999;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    width: 100%`;

const Search = () => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(locationContext.keyword);

  useEffect(() => {
    setSearchQuery(locationContext.keyword);
  }, [locationContext.keyword]);

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SearchView>
      <Searchbar
        placeholder="Search location"
        icon={'map'}
        onChangeText={onChangeSearch}
        onSubmitEditing={() => locationContext.search(searchQuery)}
        value={searchQuery}
      />
    </SearchView>
  );
};

export default Search;
