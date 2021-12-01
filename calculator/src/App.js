import { useReducer } from 'react'

import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import {ACTIONS, evaluate} from './computationHelpers'

import './App.scss'

const init = () => ({
    currentOperand: null,
    previousOperand: null,
    operation: null,
})

const reducer = (state, {type, payload}) => {
        
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

            return {
                ...state,
                currentOperand: `${state.currentOperand || '' }${payload.digit}`,
            }

        case ACTIONS.OPERATOR:

            let prev = null

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
            return init()

    }
}


function App () {
    const [state, dispatch] = useReducer(reducer, init)
    return (
        <div className="App">
            <div className="calculator">
                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} {state.operation} </div>                    
                    <div className="current-operand"> {state.currentOperand} </div>
                </div>

                <button className="ac" onClick={() => dispatch({type: 'clear'})}> AC </button>
                <button className="del" onClick={() => dispatch({type: 'delete'})}> DEL </button>
                <OperationButton operator={"÷"} dispatch={dispatch} /> 

                <DigitButton digit={1} dispatch={dispatch} /> 
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} />
                <OperationButton operator={"*"} dispatch={dispatch} /> 

                <DigitButton digit={4} dispatch={dispatch} /> 
                <DigitButton digit={5} dispatch={dispatch} /> 
                <DigitButton digit={6} dispatch={dispatch} />
                <OperationButton operator={"+"} dispatch={dispatch} />

                <DigitButton digit={7} dispatch={dispatch} /> 
                <DigitButton digit={8} dispatch={dispatch} /> 
                <DigitButton digit={9} dispatch={dispatch} />
                <OperationButton operator={"-"} dispatch={dispatch} />

                <DigitButton digit={'.'} dispatch={dispatch} /> 
                <DigitButton digit={0} dispatch={dispatch} /> 
                <button className="equals" onClick={() => dispatch({type: 'evaluate'})} > = </button>

            </div>
        </div>
    )
}

export default App