import { View, TextInput } from "react-native";

import { styles } from "./Styles";

import SearchIcon from "images/SearchIcon.svg";

interface SearchBoxProps {
  setSearchQuery: (str: string) => void;
}

export const SearchBox = (props: SearchBoxProps) => {
  const { setSearchQuery } = props;

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for notes"
        style={styles.input}
        onChangeText={handleSearch}
      />
      <SearchIcon style={styles.icon} />
    </View>
  );
};
