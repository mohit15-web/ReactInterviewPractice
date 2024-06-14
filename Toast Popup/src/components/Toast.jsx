import React from 'react'

function Toast({leftOrRight,topOrBottom,color,text}) {
  return (
    <div className={`mx-10 rounded-lg text-white my-4 absolute px-6 py-1 ${leftOrRight === 'left' ? 'left-0' : 'right-0'}
    ${topOrBottom === 'top' ? 'top-0' : 'bottom-0'    }
        ${color === 'Warning' ? 'bg-yellow-500' : ''}
        ${color === 'Error' ? 'bg-red-500' : ''}
        ${color === 'Success' ? 'bg-green-500' : ''}
        ${color === 'Info' ? ' bg-yellow-200' : ''}

    `}
    // style={{
    //     position:"absolute",
        
    // }}
    >{text}</div>
  )
}

export default Toast