import React from 'react'
import { useState } from 'react'

function Modal() {
    const[show,setShow] = useState(false)
  return (
   <>
    <div className='px-20 pt-10'>
        <button className='bg-green-500 px-8 py-4 text-white rounded-lg'
        onClick={() => setShow(true)}
        > Open Modal</button>
    </div>

    {show && <div className='w-96 p-6 absolute top-[25%] left-[35%] border rounded-xl flex flex-col gap-4'>
        <h1 className='text-3xl font-semibold'>modal Heading</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum temporibus ex totam fugiat ad doloribus dolore beatae explicabo numquam a illo suscipit animi, blanditiis magnam tempora, necessitatibus quidem quas deserunt minus veniam alias sit modi dicta vitae. Nisi, commodi nemo.</p>
        <button className='bg-red-500 px-6 py-2 w-40 text-white'
        onClick={() => setShow(false)}
        >Close</button>
    </div>}
   </>
  )
}

export default Modal