import evaluate from './computationHelpers'


const ACTIONS = {
    ADD_DIGIT : 'digit',    
    REMOVE_DIGIT : 'delete',
    EVALUATE : 'evaluate',
    OPERATOR : 'operator',
    CLEAR : 'clear',
}

const initOperands = () => ({
    currentOperand: null,
    previousOperand: null,
    operation: null,
})

const operandsReducer = (state, {type, payload}) => {
        
    switch (type) {

        case ACTIONS.ADD_DIGIT:

            if (payload.digit === '.') {
                if (state.currentOperand == null || state.currentOperand.includes('.') || state.currentOperand.length < 1) {
                    return state
                }
            }
            
            else if (payload.digit === '0') {
                if (state.currentOperand != null && state.currentOperand.startsWith(0)) {
                    return state
                }
            }

            if (state.operation == null && state.previousOperand != null) {
                return {
                    ...state,
                    previousOperand: null,
                    currentOperand: payload.digit
                }
            }

            return {
                ...state,
                currentOperand: `${state.currentOperand || '' }${payload.digit}`,
            }

        case ACTIONS.OPERATOR:

            let prev = null
            console.log(state)
            if (state.previousOperand == null && state.currentOperand == null)  return state
            
            if (state.previousOperand == null) {
                prev = state.currentOperand
            }
            else if (state.currentOperand == null) {
                prev = state.previousOperand
            }
            else if (state.previousOperand != null && state.currentOperand != null) {
                prev = evaluate(state.previousOperand, state.currentOperand, state.operation)
            }
            
            return {
                ...state,
                previousOperand: prev,
                currentOperand: null,
                operation: payload.operator,
            }

            
        case ACTIONS.REMOVE_DIGIT:
            
            if (state.currentOperand == null || state.currentOperand.length < 1)   return state

            const end = state.currentOperand.length - 1
            const curr = state.currentOperand.substring(0, end)
            
            return {
                ...state, 
                currentOperand: curr
            }

        case ACTIONS.EVALUATE:

            if (state.previousOperand == null || state.currentOperand == null)  return state

            const res = evaluate(state.previousOperand, state.currentOperand, state.operation)

            return {
                ...state,
                previousOperand: res,
                currentOperand: null,
                operation: null,
            }

        case ACTIONS.CLEAR:
            return initOperands()

    }
}

export {initOperands, operandsReducer}