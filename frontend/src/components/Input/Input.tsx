import React from 'react'
type InputProps = {
    label: string;
}
const Input: React.FC<InputProps> = ({label}) => {
  return (
    <>
     <input type="text" className='h-fit border-2 border-accent3 px-4 py-2' placeholder={label ? label : "Input text"} /> 
    </>
  )
}

export default Input
