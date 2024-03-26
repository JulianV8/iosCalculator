import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string
    color?: string
    doubleWidth?: Boolean
    textBlack?: Boolean
    onPress: () => void
    }

export const ButtonCalculator = ({
    label,
    color = colors.darkGray,
    doubleWidth = false,
    textBlack = false,
    onPress = () => {},
}:Props) => {
  return (
    <Pressable 
        onPress ={ () => onPress() }
        style={ ({pressed}) => ({
        ...styles.button,
        backgroundColor : color,
        opacity: pressed ? 0.5 : 1,
        width: doubleWidth ? 180 : 80,
    }) }>
      <Text style={{
        ...styles.textButton,
        color: textBlack ? 'black' : 'white',
      }}>{ label }</Text>
    </Pressable>
  )
}
