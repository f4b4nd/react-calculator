import React, { useReducer } from 'react'

import './App.css'

import { DigitButton } from './components/DigitButton'
import { OperatorButton } from './components/OperatorButton'
import { operandsReducer } from './helpers/operandsReducer'
//import { DefaultButton } from './components/DefaultButton'


export interface OperandState {
    operator: string | null,
    previousOperand: string | null,
    currentOperand: string | null
}

export const initialOperands: OperandState = {
    currentOperand: null,
    previousOperand: null,
    operator: null,
}

export enum ActionKind {
    DIGIT = 'ADD_DIGIT',
    DECIMAL = 'ADD_DECIMAL',
    OPERATOR = 'SET_OPERATOR',
    DELETE = 'DELETE_DIGIT',
    EVALUATE = 'EVALUATE',
    CLEAR = 'ALL_CLEAR'
}


export default function App () {

    const [state, dispatch] = useReducer(operandsReducer, initialOperands)

    return (
        <div className="App">
            <div className="calculator">

                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} {state.operator} </div>                    
                    <div className="current-operand"> {state.currentOperand} </div>
                </div>

                <button className="btn btn-allclear" onClick={() => dispatch({type: ActionKind.CLEAR})}> AC </button>
                <button className="btn btn-delete" onClick={() => dispatch({type: ActionKind.DELETE})}> DEL </button>
                <OperatorButton operator={"÷"} dispatch={dispatch} /> 

                <DigitButton digit={'1'} dispatch={dispatch} />
                <DigitButton digit={'2'} dispatch={dispatch} />
                <DigitButton digit={'3'} dispatch={dispatch} />
                <OperatorButton operator={"*"} dispatch={dispatch} />

                <DigitButton digit={'4'} dispatch={dispatch} /> 
                <DigitButton digit={'5'} dispatch={dispatch} /> 
                <DigitButton digit={'6'} dispatch={dispatch} />
                <OperatorButton operator={"+"} dispatch={dispatch} />

                <DigitButton digit={'7'} dispatch={dispatch} /> 
                <DigitButton digit={'8'} dispatch={dispatch} /> 
                <DigitButton digit={'9'} dispatch={dispatch} />
                <OperatorButton operator={"-"} dispatch={dispatch} />

                <button className="btn btn-decimal" onClick={() => dispatch({type: 'ADD_DECIMAL'})} > . </button>
                <DigitButton digit={'0'} dispatch={dispatch} /> 
                <button className="btn btn-evaluate" onClick={() => dispatch({type: 'EVALUATE'})} > = </button>

            </div>
        </div>
    )
}
