import React from 'react'
import { Action, ActionTypes } from '../helpers/operandsReducer'

interface Props {
    digit: number,
    dispatch: React.Dispatch<Action>
}

export const DigitButton: React.FC<Props> = ({digit, dispatch }) => (
    <button
        className="btn btn-digit"
        onClick={() => dispatch({type: ActionTypes.DIGIT, payload: {digit: digit.toString(), operator: 'z'}})}
    >
        {digit}
    </button>
)