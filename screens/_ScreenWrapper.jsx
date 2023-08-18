import React from 'react';  
import { View, StyleSheet } from 'react-native';
import { Header } from '../components/Header';

export const ScreenWrapper = ({ children, omitPadding = false }) => {
  // TODO: const [showAvatar, setShowAvatar] = based on some hook

  return (
    <>
      <Header showAvatar={false}/>
      <View style={[styles.wrap, { paddingTop: omitPadding ? 0 : 18}]}>
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center'
  }
})