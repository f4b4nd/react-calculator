import React from 'react'
import { ActionKind } from '../App'
import { Action } from '../helpers/operandsReducer'

interface IProps {
    operator: string,
    dispatch: React.Dispatch<Action>
}

export const OperatorButton: React.FC<IProps> = ({operator, dispatch}) => (
    <button
        className="btn btn-operator"
        onClick={() => dispatch({type: ActionKind.OPERATOR, payload: {operator: operator, digit:'z'}})}
    >
        {operator}
    </button>
)