import { useState } from "react"

import Header from "./Components/Header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  const INPUT_IS_VALID = userInputs.duration > 0; 
  function handleUserInputChanges(inputIdentifier, newValue) {
    setUserInputs(prevUserInput => {
      // for prevent using state inside state 
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} onInputChange={handleUserInputChanges} />
      {INPUT_IS_VALID ? <Results inputs={userInputs}/>:<p className="center">Please enter a duration greater than zero.</p> }
      
    </>
  )
}

export default App
