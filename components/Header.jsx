import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {logo, avatar} from '../assets/img';
import colors from '../colors.json'

export const Header = ({showAvatar}) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo} 
        style={styles.logo}
        resizeMode='contain'
      />
      {showAvatar && 
        <Image 
          source={avatar} 
          style={styles.avatar}
          resizeMode='contain'
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.santorini,
    flexDirection: 'row',
    width: '100%',
    padding: 25,
    paddingTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
  },
  avatar: {
    position: 'absolute',
    right: 25,
    top: 45,
    width: 40,
    height: 40,
    zIndex: 5
  }
})