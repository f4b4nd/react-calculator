export const DigitButton = ({digit, dispatch }) => (
    <button onClick={() => dispatch({type: 'digit', payload: {digit: digit.toString()} })}> 
        {digit} 
    </button>
)
