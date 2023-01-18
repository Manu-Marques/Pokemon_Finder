import { useRef, useState } from 'react'

export default function Input() {
    // State to store value from the input field
    const [inputValue, setInputValue] = useState("");
  
    // Input Field handler
    const handleUserInput = (e) => {
      setInputValue(e.target.value);
    };
  
    // Reset Input Field handler
    const resetInputField = () => {
      setInputValue("");
      console.log(resetInputField, ' la valeur est :', inputValue);
    };
  
    return (
      <div>
        {/* Input Field */}
        <input type="text" value={inputValue} onChange={handleUserInput} />
  
        {/* Reset button */}
        <button onClick={resetInputField}>Reset</button>
      </div>
    );
  }