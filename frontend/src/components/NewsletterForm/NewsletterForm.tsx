import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'


const NewsletterForm = () => {
  return (
    <form className='flex gap-2 flex-col lg:flex-row'>
        <Input label='First Name'></Input>
        <Input label='Last Name'></Input>
        
      <input type="text" className='border-2 border-accent3 h-fit px-4 py-2' placeholder='Email*' required/>
        <Button styleType='outline' height='120' onClick={()=> console.log('')}>Submit</Button>
    </form>
  )
}

export default NewsletterForm
