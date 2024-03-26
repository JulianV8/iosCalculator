import { useState } from 'react'

export const useCalculator = () => {

    const [number, setNumber] = useState('0');

    const buildNumber = (stringNumber: string) => {

    // * Condiciones para construir el número

    // Evitar que se concatene el punto más de una vez
    if (number.includes('.') && stringNumber === '.') return;

    // Evitar que se concatene el cero al inicio
    if (number === '0' && stringNumber !== '.'){
        return setNumber(stringNumber);
    }

        return setNumber(number + stringNumber);
    }

    return{
    // Properties
        number,
    // Methods
        buildNumber,
  }
}
