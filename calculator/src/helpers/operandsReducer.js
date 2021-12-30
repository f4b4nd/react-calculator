import { evaluate } from './evaluate'

export const initialOperands = () => ({
    currentOperand: null,
    previousOperand: null,
    operator: null,
})

export const operandsReducer = (state, {type, payload}) => {
        
    switch (type) {

        case 'ADD_DIGIT':

            if (payload.digit === '0') {

                const currentOperandIsDecimal = state.currentOperand?.match(/\d+\./g)
                const currentOperandIsEmpty = state.currentOperand == null
                const currentOperandHasNoLeadingZero = !state.currentOperand?.startsWith('0')

                if (!(currentOperandIsDecimal || currentOperandIsEmpty || currentOperandHasNoLeadingZero)) {                    
                    return state
                }
            }

            if (state.operator == null && state.previousOperand != null) {
                return {
                    ...state,
                    previousOperand: null,
                    currentOperand: `${payload.digit}`,
                }
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand?.match(/^0\.|^[1-9]/g) ? state.currentOperand : ''}${payload.digit}`,
            }

        
        case 'ADD_DECIMAL':

            if (state.currentOperand == null || state.currentOperand.includes('.') || state.currentOperand.length < 1) {
                return state
            }
            
            return {
                ...state,
                currentOperand: `${state.currentOperand}.`
            }

        case 'OPERATOR':

            let prev = null

            if (state.previousOperand == null && state.currentOperand == null)  return state
            
            if (state.currentOperand == null) {
                prev = state.previousOperand
            } 
            else if (state.previousOperand == null) {
                prev = state.currentOperand
            } 
            else if (state.previousOperand != null && state.currentOperand != null) {
                prev = evaluate(state.previousOperand, state.currentOperand, state.operator)
            }
            
            return {
                ...state,
                previousOperand: prev,
                currentOperand: null,
                operator: payload.operator,
            }

            
        case 'DELETE_DIGIT':
            
            if (state.currentOperand == null || state.currentOperand.length < 1)   return state

            const lastIndex = state.currentOperand.length
            const curr = state.currentOperand.substring(0, lastIndex - 1)
            
            return {
                ...state, 
                currentOperand: curr
            }

        case 'EVALUATE':

            if (state.previousOperand == null || state.currentOperand == null || state.operator == null)  return state

            const res = evaluate(state.previousOperand, state.currentOperand, state.operator)

            return {
                ...state,
                previousOperand: res,
                currentOperand: null,
                operator: null,
            }

        case 'ALL_CLEAR':
            return initialOperands()

    }
}
