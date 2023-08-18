import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Onboarding } from './screens/Onboarding';
import { useBrandFonts } from './util/useBrandFonts';

export default function App() {
  const { fontsLoaded, fontsError } = useBrandFonts();

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Onboarding/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
