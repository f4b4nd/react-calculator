
const DigitButton = ( {digit, dispatch }) => (
    <button onClick={() => dispatch({type: 'digit', payload: digit})}> 
        {digit} 
    </button>
)

export default DigitButton 