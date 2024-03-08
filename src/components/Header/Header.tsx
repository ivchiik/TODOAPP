import React from "react";
import { View } from "react-native";

import { AppText, SearchBox } from "components";
import { styles } from "./Styles";

import ProfileIcon from "images/ProfileIcon.svg";
import SettingsIcon from "images/SettingsIcon.svg";

interface HeaderProps {
  setSearchQuery: (str: string) => void;
}

export const Header = (props: HeaderProps) => {
  const { setSearchQuery } = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerNameWrapper}>
        <View style={styles.nameWrapper}>
          <ProfileIcon />
          <AppText style={styles.name}>James Ronald</AppText>
        </View>
        <SettingsIcon />
      </View>
      <SearchBox setSearchQuery={setSearchQuery} />
    </View>
  );
};
