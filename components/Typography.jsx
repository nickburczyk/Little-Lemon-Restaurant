import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { Markazi, Karla } from '../util/fonts.json'
import colors from '../colors.json'

export const Typography = ({ 
  type, 
  color = colors.black, 
  textAlign = 'auto', 
  children
}) => {
  const fontStyle = useMemo(() => {
    switch (type) {
      case 'h1': return { fontFamily: Markazi[500], fontSize: 64 }
      case 'h2': return { fontFamily: Markazi[500], fontSize: 40 };
      case 'h3': return { fontFamily: Karla[800], fontSize: 20, textTransform: 'uppercase' };
      case 'h4': return { fontFamily: Karla[800], fontSize: 16 };
      case 'p': return { fontFamily: Karla[400], fontSize: 16, };
      case 'card': return { fontFamily: Karla[700], fontSize: 18 };
      case 'highlight': return { fontFamily: Karla[500], fontSize: 16 };
      default: return { fontFamily: 'sans-serif', fontSize: 14, };
    }
  }, [type])

  return (
    <Text style={{ ...fontStyle, textAlign, color }}>{children}</Text>
  )
};
