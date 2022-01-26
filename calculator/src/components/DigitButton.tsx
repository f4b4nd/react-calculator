import React from 'react'
import { ActionKind } from '../App'
import { Action } from '../helpers/operandsReducer'

interface IProps {
    digit: string,
    dispatch: React.Dispatch<Action>
}

export const DigitButton: React.FC<IProps> = ({digit, dispatch }) => (
    <button
        className="btn btn-digit"
        onClick={() => dispatch({type: ActionKind.DIGIT, payload: {digit: digit.toString()}})}
    >
        {digit}
    </button>
)