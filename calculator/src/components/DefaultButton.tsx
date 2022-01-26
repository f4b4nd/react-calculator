import React from 'react'
import { ActionKind } from '../App'
import { Action } from '../helpers/operandsReducer'

interface Props {
    type: ActionKind.DELETE | ActionKind.EVALUATE | ActionKind.CLEAR | ActionKind.DECIMAL,
    dispatch: React.Dispatch<Action>,
    className: string
}

export const DefaultButton: React.FC<Props> = ({dispatch, type, children, ...restProps}) => (
    <button {...restProps}
        onClick={() => dispatch({type: type, payload : {digit: '0', operator: '+'}})}
    >
        {children}
    </button>
)