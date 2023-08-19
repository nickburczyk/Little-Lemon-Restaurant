import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { ScreenWrapper } from './_ScreenWrapper';
import { Typography } from '../components/Typography';
import colors from '../colors.json'
import fonts from '../util/fonts.json'
import { validateEmail } from '../util';

const { olive, lemon, santorini, sandyBeach } = colors

export const Onboarding = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handlePress = () => {
    console.log('PRESSED', { firstName, email });
  }
  const isFormInvalid = !firstName 
    || !firstName.length 
    || validateEmail(email) === null

  //TODO: Scroll behavior either blocks button or pushes button above form. 
  // See commented contentContainerStyle line
  return (
    <ScreenWrapper>
      <ScrollView 
        style={styles.wrapper} 
        // contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}
        keyboardDismissMode='on-drag' 
      >
        <Typography type="h2" color={olive} textAlign='center'>
          Let us get to know you!
        </Typography>

        <View style={styles.form}>
          <Typography type="h3" color={olive} textAlign={'center'}>First Name</Typography>
          <TextInput autoComplete='given-name' value={firstName} style={styles.input} onChangeText={setFirstName}/>

          <Typography type="h3" color={olive} textAlign={'center'}>Email</Typography>
          <TextInput value={email} style={styles.input} onChangeText={setEmail} autoComplete='email' inputMode='email'/>
        </View>
        <Pressable 
          style={[styles.btn, isFormInvalid && styles.disabled]} 
          onPress={handlePress} 
          disabled={isFormInvalid}
        >
          <Typography color={isFormInvalid ? "#999" : sandyBeach} type="h3" textAlign='center'>
            Next
          </Typography>
        </Pressable>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    width: '100%',
    backgroundColor: lemon,
  },
  form: {
    flex: 1,
    width: '100%',
    marginTop: 75

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
  btn: {
    padding: 18,
    minWidth: 200,
    borderRadius: 8,
    backgroundColor: olive,
    marginTop: 50
  },
  disabled: {
    backgroundColor: '#ccc',
  }
})