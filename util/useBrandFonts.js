import { useFonts } from 'expo-font';
import { 
  MarkaziText_400Regular, 
  MarkaziText_500Medium, 
  MarkaziText_600SemiBold, 
  MarkaziText_700Bold
} from '@expo-google-fonts/markazi-text'
import { 
  Karla_400Regular, 
  Karla_500Medium, 
  Karla_700Bold, 
  Karla_800ExtraBold 
} from '@expo-google-fonts/karla'

export const useBrandFonts = () => {
  const [fontsLoaded, fontsError] = useFonts({
    MarkaziText_400Regular, 
    MarkaziText_500Medium, 
    MarkaziText_600SemiBold, 
    MarkaziText_700Bold,
    Karla_400Regular, 
    Karla_500Medium, 
    Karla_700Bold, 
    Karla_800ExtraBold 
  })

  return {
    fontsLoaded, 
    fontsError, 
  }
}