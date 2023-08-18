import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { ScreenWrapper } from './_ScreenWrapper';
import { Typography } from '../components/Typography';
import colors from '../colors.json'
import fonts from '../util/fonts.json'

const { olive, lemon, santorini, sandyBeach } = colors

export const Onboarding = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const validEmail = () => {
    if (email.length < 10) return false;
    return true
  }
  
  const isBtnDisabled = !validEmail()

  return (
    <ScreenWrapper>
      <ScrollView style={styles.wrapper} contentContainerStyle={{alignItems: 'center'}}>
        <Typography type="h2" color={olive}>Let us get to know you!</Typography>
        <View style={styles.form}>

          <Typography type="h3" color={olive} textAlign={'center'}>First Name</Typography>
          <TextInput 
            value={firstName} 
            style={styles.input} 
            onChangeText={setFirstName}
          />

          <Typography type="h3" color={olive} textAlign={'center'}>Email</Typography>
          <TextInput 
            value={email} 
            style={styles.input} 
            onChangeText={setEmail}
          />

        </View>
        <View style={styles.btnWrapper}>
          <Pressable 
            style={[styles.btn, isBtnDisabled && styles.disabled]} 
            onPress={()=>console.log('PRESSED')} 
            disabled={!validEmail()}
          >
            <Typography color={isBtnDisabled ? "#999" : sandyBeach} type="h3" textAlign='center'>
              Next
            </Typography>
          </Pressable>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    width: '100%',
    backgroundColor: lemon
  },
  form: {
    width: '100%',
    marginTop: 100,
  },
  input: {
    width: '100%',
    padding: 18,
    marginTop: 12,
    marginBottom: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: olive,
    backgroundColor: santorini,
    color: olive,
    fontFamily: fonts.Karla[400],
    fontSize: 16
  },
  btnWrapper: {
    backgroundColor: lemon,
    paddingTop: 20,
    paddingBottom: 50,
    width: '100%',
    alignItems: 'flex-end'
  },
  btn: {
    padding: 18,
    minWidth: 200,
    borderRadius: 8,
    backgroundColor: olive,
  },
  disabled: {
    backgroundColor: '#ccc',
  }
})