import { evaluate } from './evaluate'
import { OperandState, initialOperands, ActionKind } from '../App'


export type Action =
    | { type: string, payload : { digit: string, operator : string} }
    //| { type: string, payload: { digit: string } }
    //| { type: string, payload: { operator: string } }



export const operandsReducer = (state: OperandState, { type, payload } : Action): OperandState => {
    
    //const { type, payload } = action

    switch (type) {

        case ActionKind.DIGIT:

            const currentOperandMatches = state.currentOperand?.match(/^0\.|^[1-9]+/g)

            if (payload.digit === '0') {

                if (!(state.currentOperand == null || currentOperandMatches)) {
                    return state
                }
            }

            if (state.operator == null && state.previousOperand != null) {
                return {
                    ...state,
                    previousOperand: null,
                    currentOperand: payload.digit,
                }
            }

            return {
                ...state,
                currentOperand: `${currentOperandMatches ? state.currentOperand : ''}${payload.digit}`,
            }

        
        case ActionKind.DECIMAL:

            if (state.currentOperand == null || state.currentOperand.length < 1 || state.currentOperand.includes('.')) {
                return state
            }
            
            return {
                ...state,
                currentOperand: state.currentOperand + '.'
            }

        case ActionKind.OPERATOR:

            let prev
            
            if ( (state.previousOperand == null && state.currentOperand == null))  return state
            
            if (state.previousOperand == null) {
                prev = state.currentOperand
            }
            else if (state.currentOperand == null) {
                prev = state.previousOperand
            }
            else if (state.previousOperand != null && state.currentOperand != null) {
                prev = evaluate(state.previousOperand, state.currentOperand, state.operator)
            }
            
            return {
                ...state,
                previousOperand: prev || null,
                currentOperand: null,
                operator: payload.operator,
            }
            
        case ActionKind.DELETE:
            
            if (state.currentOperand == null)   return state

            const lastIndex = state.currentOperand.length
            const curr = state.currentOperand.substring(0, lastIndex - 1)
            
            return {
                ...state, 
                currentOperand: curr
            }

        case ActionKind.EVALUATE:

            if (state.previousOperand == null || state.currentOperand == null || state.operator == null)  return state

            const res = evaluate(state.previousOperand, state.currentOperand, state.operator)

            return {
                ...state,
                previousOperand: res,
                currentOperand: null,
                operator: null,
            }

        case ActionKind.CLEAR:
            return initialOperands
        
        default:
            return state

    }
}
