import React, { useReducer } from 'react'
import './App.css'

import { operandsReducer, ActionTypes } from './helpers/operandsReducer'

import { DigitButton } from './components/DigitButton'
import { OperatorButton } from './components/OperatorButton'
import { DefaultButton } from './components/DefaultButton'


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


export default function App () {

    const [state, dispatch] = useReducer(operandsReducer, initialOperands)

    return (
        <div className="App">
            <div className="calculator">

                <div className="output">
                    <div className="previous-operand"> {state.previousOperand} {state.operator} </div>                    
                    <div className="current-operand"> {state.currentOperand} </div>
                </div>

                <DefaultButton className="btn btn-allclear" dispatch={dispatch} type={ActionTypes.CLEAR} > AC </DefaultButton>
                <DefaultButton className="btn btn-delete" dispatch={dispatch} type={ActionTypes.DELETE} > DEL </DefaultButton>
                <OperatorButton dispatch={dispatch} operator={"÷"} />

                <DigitButton dispatch={dispatch} digit={1} />
                <DigitButton dispatch={dispatch} digit={2} />
                <DigitButton dispatch={dispatch} digit={3} />
                <OperatorButton dispatch={dispatch} operator={"*"} />

                <DigitButton dispatch={dispatch} digit={4} />
                <DigitButton dispatch={dispatch} digit={5} />
                <DigitButton dispatch={dispatch} digit={6} />
                <OperatorButton dispatch={dispatch} operator={"+"} />

                <DigitButton dispatch={dispatch} digit={7} />
                <DigitButton dispatch={dispatch} digit={8} />
                <DigitButton dispatch={dispatch} digit={9} />
                <OperatorButton dispatch={dispatch} operator={"-"} />

                <DefaultButton className="btn btn-decimal" dispatch={dispatch} type={ActionTypes.DECIMAL} > . </DefaultButton>
                <DigitButton dispatch={dispatch} digit={0} />
                <DefaultButton className="btn btn-evaluate" dispatch={dispatch} type={ActionTypes.EVALUATE} > = </DefaultButton>

            </div>
        </div>
    )
}