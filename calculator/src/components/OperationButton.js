export const OperationButton = ({operator, dispatch}) => (
    <button className="btn-operation" onClick={() => dispatch({type: 'OPERATOR', payload: {operator: operator}})}> 
        {operator} 
    </button>
)