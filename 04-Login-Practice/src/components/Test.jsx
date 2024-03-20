import { styled } from 'styled-components'; 
import { useState } from 'react';
const TestingElement = styled.div`    color: ${({ $isvalid }) => $isvalid? "green" : "red"}; 
font-size: 28px; 
font-weight: bolder;
text-transform: capitalize;
text-align: center; 
margin: 21px auto;
cursor: pointer;
user-select:none`
export default function Test() {
    const [toggler, setToggler] = useState(false);
    const [isValidValue, setIsValidValue] = useState(true)
    return (
        <>
            <TestingElement $isvalid={isValidValue} onClick={()=>{
                setIsValidValue(!isValidValue)
            }}>
                hello this's just testing text "Click On Me"
            </TestingElement>
            <p style={{color: toggler?'red':'white', textAlign:'center', fontWeight: 'bold', fontSize: '27px', textTransform: 'capitalize', userSelect: 'none', cursor: 'pointer'}} onClick={()=>{
                setToggler(!toggler)
            }}>hello this's inline style</p>
        </>
    )
}