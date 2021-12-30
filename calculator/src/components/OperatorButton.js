export const OperatorButton = ({operator, dispatch}) => (
    <button className="btn btn-operator" onClick={() => dispatch({type: 'OPERATOR', payload: {operator: operator}})}> 
        {operator} 
    </button>
)