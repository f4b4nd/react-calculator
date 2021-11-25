import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import './App.scss';


function App() {
  return (
    <div className="App">
        <div className="output">
          <div className="current-operand"> 123*</div>
          <div className="current-operand"> 3</div>
        </div>
        <button> AC </button>
        <button> DEL </button>
        <OperationButton operator={"÷"} /> 
        <DigitButton digit={1} /> 
        <DigitButton digit={2} />
        <DigitButton digit={3} /> 
        <OperationButton operator={"*"} /> 
        <DigitButton digit={4} /> 
        <DigitButton digit={5} /> 
        <DigitButton digit={6} />
        <OperationButton operator={"+"} />
        <DigitButton digit={7} /> 
        <DigitButton digit={8} /> 
        <DigitButton digit={9} />
        <OperationButton operator={"-"} />
        <DigitButton digit={'.'} /> 
        <DigitButton digit={0} /> 
        <button> = </button>
    </div>
  )
}

export default App
