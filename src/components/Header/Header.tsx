import React from 'react';
import {View} from 'react-native';
import {styles} from './Styles';
import {AppText, SearchBox} from '../../components';

import ProfileIcon from '../../assets/images/ProfileIcon.svg';
import SettingsIcon from '../../assets/images/SettingsIcon.svg';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerNameWrapper}>
        <View style={styles.nameWrapper}>
          <ProfileIcon />
          <AppText style={styles.name}>James Ronald</AppText>
        </View>
        <SettingsIcon />
      </View>
      <SearchBox />
    </View>
  );
};
