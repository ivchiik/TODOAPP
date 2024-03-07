import {View, TextInput} from 'react-native';
import {styles} from './Styles';

import SearchIcon from '../../assets/images/SearchIcon.svg';

export const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search for notes" style={styles.input} />
      <SearchIcon style={{marginRight: 12}} />
    </View>
  );
};
