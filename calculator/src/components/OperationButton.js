export const OperationButton = ({operator, dispatch}) => (
    <button onClick={() => dispatch({type: 'OPERATOR', payload: {operator: operator}})}> 
        {operator} 
    </button>
)