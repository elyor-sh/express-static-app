"use strict"

const calculator = document.querySelector('.calculator')
const inputCalc = document.querySelector('#calc-input')

let value = inputCalc.value
let value2 = ''
let isCalc = false
let sign = ''

const calcResult = () => {
    switch (sign) {
        case '+':
            if(Number.isInteger(+value) && Number.isInteger(+value2)){
               return Number(value) + Number(value2)
            }
            return (Number(value) + Number(value2)).toFixed(5)
        case '-':
            if(Number.isInteger(+value) && Number.isInteger(+value2)){
                return Number(value) - Number(value2)
             }
            return (Number(value) - Number(value2)).toFixed(5)
        case '*':
            if(Number.isInteger(+value) && Number.isInteger(+value2)){
                return Number(value) * Number(value2)
             }
            return (Number(value) * Number(value2)).toFixed(5)
        case '/':
            return Number(value) / Number(value2)
        default:
            return 0
    }
}

const calculate = (e) => {

    const dataTarget = e.target.dataset.target

    const isNumber = dataTarget === '1' ||
        dataTarget === '2' ||
        dataTarget === '3' ||
        dataTarget === '4' ||
        dataTarget === '5' ||
        dataTarget === '6' ||
        dataTarget === '7' ||
        dataTarget === '8' ||
        dataTarget === '9' ||
        dataTarget === '0'

    if (isNumber) {
        if (isCalc) {
            value2 = `${value2}${dataTarget}`
        } else {
            if(value === '0'){
                value = `${dataTarget}`
            }else{
                value = `${value}${dataTarget}`
            }
        }
    }

    const addDot = () => {
        if(isCalc && value2 !== ''){
            value2 = `${value2}.`
        }
        if(!isCalc && value !== ''){
            value = `${value}.`
        }
    }

    switch (dataTarget) {
        case '+':
            if (isCalc) {
                return
            }
            isCalc = true
            sign = '+'
            break;
        case '-':
            if (isCalc) {
                return
            }
            isCalc = true
            sign = '-'
            break;
        case '*':
            if (isCalc) {
                return
            }
            sign = '*'
            isCalc = true
            break;
        case '/':
            if (isCalc) {
                return
            }
            sign = '/'
            isCalc = true
            break;
        case '=':
            if (!isCalc) {
                alert('No second argument')
                return
            }

            value = calcResult()
            value2 = ''
            isCalc = false
            sign = ''

            break;
        case '%':
            if(sign === ''){
                value = Number(value) / 100
            }
            break;
        case '.': 
            addDot()
            break;
        case 'c':
            value = ''
            value2 = ''
            isCalc = false
            sign = ''
        default:
            break;
    }

    inputCalc.value = `${value} ${sign} ${value2}`
}

if (calculator && inputCalc) {
    calculator.addEventListener('click', e => {
        calculate(e)
    })
}