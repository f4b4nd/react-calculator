import { useReducer } from 'react'

import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'

import './App.scss'

function init (initialOperand) {
    return {
        currentOperand: initialOperand,
        previousOperand: initialOperand,
        operation: null,
    }
}

function reducer (state, {type, payload}) {
    
    let curr, prev = null
    
    switch (type) {

        case 'digit':
            curr = state.currentOperand !== null ? state.currentOperand.toString() + payload.toString() : payload.toString()
            console.log(curr, prev)

            return {
                ...state,
                currentOperand: curr,
            }

        case 'operator':
            prev = state.currentOperand.toString()
            console.log('p', payload)
            return {
                ...state,
                previousOperand: state.currentOperand,
                currentOperand: null,
                operation: payload,
            }
        
        case 'equals':
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

function evaluate (prev, curr, operation) {
    let res
    const a = parseFloat(prev)
    const b = parseFloat(curr)

    if (operation === "+") {
        res = a + b
    }
    else if (operation === "-") {
        res = a - b
    }
    else if (operation === "*") {
        res = a * b
    }
    else if (operation === "÷") {
        res = a / b
    }
    return res
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
                <button className="del"> DEL </button>
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
                <button className="equals" onClick={() => dispatch({type: 'equals'})} > = </button>

            </div>
        </div>
    )
}

export default App
