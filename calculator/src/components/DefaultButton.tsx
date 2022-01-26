import React from 'react'
import { Action, ActionTypes } from '../helpers/operandsReducer'

interface Props {
    type: ActionTypes.DELETE | ActionTypes.EVALUATE | ActionTypes.CLEAR | ActionTypes.DECIMAL,
    dispatch: React.Dispatch<Action>,
    className?: string
}

export const DefaultButton: React.FC<Props> = ({dispatch, type, children, ...restProps}) => (
    <button {...restProps}
        onClick={() => dispatch({type: type})}
    >
        {children}
    </button>
)