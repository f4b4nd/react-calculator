const OperationButton = ({operator, dispatch}) => (
    <button onClick={() => dispatch({type: 'operator', payload: operator})}> 
        {operator} 
    </button>)

export default OperationButton