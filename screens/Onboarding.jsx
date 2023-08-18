import React from 'react';
import { StyleSheet } from 'react-native';
import { ScreenWrapper } from './_ScreenWrapper';
import { Typography } from '../components/Typography';
import colors from '../colors.json'


export const Onboarding = () => {

  return (
    <ScreenWrapper>
      <Typography type="highlight" color={colors.lemon}>Hello World</Typography>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
})