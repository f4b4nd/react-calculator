import { useReducer } from 'react'

import './App.scss'

import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import {initOperands, operandsReducer} from './operandReducer'


function App () {
    const [state, dispatch] = useReducer(operandsReducer, initOperands)
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