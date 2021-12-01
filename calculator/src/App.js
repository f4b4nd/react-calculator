import { useReducer } from 'react'

import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import {ACTIONS, evaluate} from './computationHelpers'

import './App.scss'

const init = (initialOperand) => ({
    currentOperand: initialOperand,
    previousOperand: initialOperand,
    operation: null,
})

const reducer = (state, {type, payload}) => {
    
    let curr, prev = null
    
    switch (type) {

        case ACTIONS.ADD_DIGIT:          
            curr = state.currentOperand != null ? state.currentOperand.toString() + payload.digit.toString() : payload.digit.toString()
            return {
                ...state,
                currentOperand: curr,
            }

        case ACTIONS.OPERATOR:
            if (state.currentOperand != null && state.previousOperand != null) {
                prev = evaluate(state.previousOperand, state.currentOperand, state.operation)
            }
            else if (state.currentOperand != null && state.previousOperand == null) {
                prev = state.currentOperand.toString()
            }
            else if (state.previousOperand != null && state.currentOperand == null) {
                prev = state.previousOperand
            }
            
            return {
                ...state,
                previousOperand: prev,
                currentOperand: null,
                operation: payload.operator,
            }

            
        case ACTIONS.REMOVE_DIGIT:
            console.log('c', state.currentOperand)
            if (state.currentOperand != null) {
                if (state.currentOperand.length > 1) {
                    const end = state.currentOperand.length - 1 
                    curr = state.currentOperand.substring(0, end)
                }
            }

            return {
                ...state, 
                currentOperand: curr
            }

        case ACTIONS.EVALUATE:
            const res = evaluate(state.previousOperand, state.currentOperand, state.operation)
            return {
                ...state,
                previousOperand: res,
                currentOperand: null,
                operation: null,
            }

        case 'reset':
            return init(null)

    }
}


function App () {
    const [state, dispatch] = useReducer(reducer, null, init)
    return (
        <div className="App">
            <div className="calculator">
                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} {state.operation} </div>                    
                    <div className="current-operand"> {state.currentOperand} </div>
                </div>

                <button className="ac" onClick={() => dispatch({type: 'reset'})}> AC </button>
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