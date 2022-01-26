import React from 'react'
import { Action, ActionTypes } from '../helpers/operandsReducer'

interface Props {
    operator: string,
    dispatch: React.Dispatch<Action>
}

export const OperatorButton: React.FC<Props> = ({operator, dispatch}) => (
    <button
        className="btn btn-operator"
        onClick={() => dispatch({type: ActionTypes.OPERATOR, payload: {operator: operator, digit:'z'}})}
    >
        {operator}
    </button>
)