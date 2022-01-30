import { evaluate } from './evaluate'
import { OperandState, initialOperands } from '../App'

/* Expectionnal use of "any" because no solution was found to allow multiple possibilities for "payload" with Union */
export interface Action {
    type: ActionTypes,
    payload?: any
}

export enum ActionTypes {
    DIGIT = 'ADD_DIGIT',
    DECIMAL = 'ADD_DECIMAL',
    OPERATOR = 'SET_OPERATOR',
    DELETE = 'DELETE_DIGIT',
    EVALUATE = 'EVALUATE',
    CLEAR = 'ALL_CLEAR'
}

interface Props {
    (state: OperandState, action: Action): OperandState
}

export const operandsReducer: Props = (state, {type, payload}) => {
    
    switch (type) {

        case ActionTypes.DIGIT:

            const currentOperandIsValid = state.currentOperand?.match(/^0\.|^[1-9]+/g)
            const hasPreviousCalculation = state.operator === null && state.previousOperand !== null

            if (hasPreviousCalculation) {
                return {
                    operator: null,
                    previousOperand: null,
                    currentOperand: payload.digit,
                }
            }

            return {
                ...state,
                currentOperand: `${currentOperandIsValid ?? ''}${payload.digit}`,
            }
        
        case ActionTypes.DECIMAL:

            const currentOperandMatchesInteger = state.currentOperand?.match(/^\d+$/g)
            
            if (!currentOperandMatchesInteger)    return state
                        
            return {
                ...state,
                currentOperand: state.currentOperand + '.'
            }

        case ActionTypes.OPERATOR:

            let prev

            if (state.previousOperand === null && state.currentOperand === null)  return state
            
            if (state.previousOperand === null) {
                prev = state.currentOperand
            }
            else if (state.currentOperand === null) {
                prev = state.previousOperand
            }
            else if (state.previousOperand !== null && state.currentOperand !== null && state.operator !== null) {
                prev = evaluate(state.previousOperand, state.currentOperand, state.operator)
            }
            
            return {
                currentOperand: null,
                previousOperand: prev || null,
                operator: payload.operator,
            }
            
        case ActionTypes.DELETE:
            
            if (state.currentOperand === null)   return state

            const lastIndex = state.currentOperand.length
            const curr = state.currentOperand.substring(0, lastIndex - 1)
            
            return {
                ...state, 
                currentOperand: curr
            }

        case ActionTypes.EVALUATE:

            if (state.previousOperand === null || state.currentOperand === null || state.operator === null)  return state

            const res = evaluate(state.previousOperand, state.currentOperand, state.operator)

            return {                
                operator: null,
                currentOperand: null,
                previousOperand: res,
            }

        case ActionTypes.CLEAR:
            return initialOperands
        
        default:
            return state

    }
}