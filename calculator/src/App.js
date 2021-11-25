import { useReducer } from 'react'

import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'

import './App.scss'

function init (initialOperand) {
    return {
        currentOperand: initialOperand,
        previousOperand: initialOperand,
    }
}

function reducer (state, {type, payload}) {
    switch (type) {
        case 'digit':
            return {
                ...state, 
                currentOperand: state.currentOperand !== null ? state.currentOperand.toString() + payload.toString() : payload.toString()
            }
    }
}

function App () {
    const [state, dispatch] = useReducer(reducer, null, init)
    return (
        <div className="App">
            <div className="calculator">
                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} </div>                    
                    <div className="current-operand"> {state.currentOperand}</div>

                </div>
                <button className="ac"> AC </button>
                <button className="del"> DEL </button>
                <OperationButton operator={"÷"} /> 
                <DigitButton digit={1} dispatch={dispatch} /> 
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} /> 
                <OperationButton operator={"*"} /> 
                <DigitButton digit={4} dispatch={dispatch} /> 
                <DigitButton digit={5} dispatch={dispatch} /> 
                <DigitButton digit={6} dispatch={dispatch} />
                <OperationButton operator={"+"} />
                <DigitButton digit={7} dispatch={dispatch} /> 
                <DigitButton digit={8} dispatch={dispatch} /> 
                <DigitButton digit={9} dispatch={dispatch} />
                <OperationButton operator={"-"} />
                <DigitButton digit={'.'} dispatch={dispatch} /> 
                <DigitButton digit={0} dispatch={dispatch} /> 
                <button className="equals"> = </button>
            </div>
        </div>
    )
}

export default App
