import { FlatList } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import Search from '../../../Search';
import RestaurantInfo from '../components/restaurent-info.component';
import { SafeArea } from '../../../utility/safe-area.component';

const SearchView = styled.View`
    background-color: ${(props) => props.theme.colors.bg.secondary}
    padding: ${(props) => props.theme.space[3]}
    justify-content: center`;
const ListView = styled.View`
    background-color: ${(props) => props.theme.colors.bg.primary}
    flex: 1
    padding: ${(props) => props.theme.space[3]}`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Search />
      </SearchView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};

export default RestaurantScreen;
