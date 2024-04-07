import React from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        number,
        previusNumber,
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        // calculate,
        sumOperation,
        substractOperation,
        multiplyOperation,
        divideOperation,
        calculateResult,
    } = useCalculator();

    return (
    <View style={ styles.calculatorContainer }>

        <View style={{ paddingHorizontal:30, paddingBottom:20 }}>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={ styles.mainResult }>{ number }
            </Text>
            <Text style={ styles.subResult }>
                { (previusNumber === '0') ? '' : previusNumber }
            </Text>
        </View>

        <View style={ styles.row }>
            <ButtonCalculator onPress={ clean } textBlack label="C" color={ colors.ligthGray}/>
            <ButtonCalculator onPress={ () => toggleSign()} textBlack label="+/-" color={ colors.ligthGray}/>
            <ButtonCalculator onPress={ () => deleteOperation()} textBlack label="del" color={ colors.ligthGray}/>
            <ButtonCalculator onPress={ divideOperation } label="÷" color={ colors.orange }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalculator onPress={ () => buildNumber('8')} label="8" />
            <ButtonCalculator onPress={ () => buildNumber('9')} label="9" />
            <ButtonCalculator onPress={ () => buildNumber('7')} label="7" />
            <ButtonCalculator onPress={ multiplyOperation } label="X" color={colors.orange} />
        </View>
        <View style={ styles.row }>
            <ButtonCalculator onPress={ () => buildNumber('6')} label="6" />
            <ButtonCalculator onPress={ () => buildNumber('5')} label="5" />
            <ButtonCalculator onPress={ () => buildNumber('4')} label="4" />
            <ButtonCalculator onPress={ substractOperation } label="-" color={ colors.orange }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalculator onPress={ () => buildNumber('3')} label="3" />
            <ButtonCalculator onPress={ () => buildNumber('2')} label="2" />
            <ButtonCalculator onPress={ () => buildNumber('1')} label="1" />
            <ButtonCalculator onPress={ sumOperation } label="+" color={ colors.orange }/>
        </View>
        <View style={ styles.row }>
            <ButtonCalculator onPress={ () => buildNumber('0')} label="0" doubleWidth/>
            <ButtonCalculator onPress={ () => buildNumber('.')} label="." />
            <ButtonCalculator onPress={ calculateResult } label="=" color={ colors.orange }/>
        </View>

    </View>
  )
}