export const DigitButton = ({digit, dispatch }) => (
    <button onClick={() => dispatch({type: 'ADD_DIGIT', payload: {digit: digit.toString()} })}> 
        {digit} 
    </button>
)
