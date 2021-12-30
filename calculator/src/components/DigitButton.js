export const DigitButton = ({digit, dispatch }) => (
    <button className="btn btn-digit" onClick={() => dispatch({type: 'ADD_DIGIT', payload: {digit: digit.toString()} })}> 
        {digit} 
    </button>
)
