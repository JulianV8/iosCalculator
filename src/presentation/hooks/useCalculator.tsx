import { useRef, useState } from 'react'

enum Operator {
    sum = '+',
    substract = '-',
    multiply = '*',
    divide = '÷',
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [previusNumber, setPreviusNumber] = useState('0');

    const lastOperation = useRef<Operator>();

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

    const clean = () => {
        setNumber('0');
        setPreviusNumber('0');
    }

    const deleteOperation = () => {
        if (number.length === 1) {
            return setNumber('0');
        } else if (number.length === 2 && number.includes('-')) {
            return setNumber('0');
        }
        return setNumber(number.slice(0, -1));
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''));
        }
        return setNumber('-' + number);
    };

    const setLastNumber = () => {
        if (number.endsWith('.' || number.endsWith('-'))) {
            setPreviusNumber(number.slice(0, -1));
        } else {
            setPreviusNumber(number);
        }
        setNumber('0');
    };

    const sumOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.sum;
    };
    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    };
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    };
    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    };

    const calculateResult = () => {

        const num1 = Number(number);
        const num2 = Number(previusNumber);

        switch ( lastOperation.current ) {
            case Operator.sum:
                setNumber(`${num1 + num2}`);
                break;
            case Operator.substract:
                setNumber(`${num2 - num1}`);
                break;
            case Operator.multiply:
                setNumber(`${num1 * num2}`);
                break;
            case Operator.divide:
                setNumber(`${num2 / num1}`);
                break;
            default:
                throw new Error('Operación no soportada');
        }
        setPreviusNumber('0');
    };

    return {
    // Properties
        number,
        previusNumber,
    // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        sumOperation,
        substractOperation,
        multiplyOperation,
        divideOperation,
        calculateResult,
  }
}
