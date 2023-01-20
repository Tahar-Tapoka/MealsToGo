import React, { useContext, useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../../services/location/location.context';

const SearchView = styled.View`
    background-color: ${(props) => props.theme.colors.bg.secondary}
    padding: ${(props) => props.theme.space[3]}
    justify-content: center`;

const Search = ({ onFavouritesToggled, favouritesToggled }) => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(locationContext.keyword);

  useEffect(() => {
    setSearchQuery(locationContext.keyword);
  }, [locationContext.keyword]);

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SearchView>
      <Searchbar
        icon={favouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggled}
        placeholder="Search location"
        onChangeText={onChangeSearch}
        onSubmitEditing={() => locationContext.search(searchQuery)}
        value={searchQuery}
      />
    </SearchView>
  );
};

export default Search;
