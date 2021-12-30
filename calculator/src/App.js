import { useReducer } from 'react'

import './App.css'

import { DigitButton } from './components/DigitButton'
import { OperatorButton } from './components/OperatorButton'
import { initialOperands, operandsReducer } from './helpers/operandsReducer'


export default function App () {

    const [state, dispatch] = useReducer(operandsReducer, initialOperands)

    return (
        <div className="App">
            <div className="calculator">

                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} {state.operation} </div>                    
                    <div className="current-operand"> {state.currentOperand} </div>
                </div>

                <button className="btn btn-allclear" onClick={() => dispatch({type: 'ALL_CLEAR'})}> AC </button>
                <button className="btn btn-delete" onClick={() => dispatch({type: 'DELETE_DIGIT'})}> DEL </button>
                <OperatorButton operator={"÷"} dispatch={dispatch} /> 

                <DigitButton digit={1} dispatch={dispatch} /> 
                <DigitButton digit={2} dispatch={dispatch} />
                <DigitButton digit={3} dispatch={dispatch} />
                <OperatorButton operator={"*"} dispatch={dispatch} /> 

                <DigitButton digit={4} dispatch={dispatch} /> 
                <DigitButton digit={5} dispatch={dispatch} /> 
                <DigitButton digit={6} dispatch={dispatch} />
                <OperatorButton operator={"+"} dispatch={dispatch} />

                <DigitButton digit={7} dispatch={dispatch} /> 
                <DigitButton digit={8} dispatch={dispatch} /> 
                <DigitButton digit={9} dispatch={dispatch} />
                <OperatorButton operator={"-"} dispatch={dispatch} />

                <DigitButton digit={'.'} dispatch={dispatch} /> 
                <DigitButton digit={0} dispatch={dispatch} /> 
                <button className="btn btn-evaluate" onClick={() => dispatch({type: 'EVALUATE'})} > = </button>

            </div>
        </div>
    )
}
