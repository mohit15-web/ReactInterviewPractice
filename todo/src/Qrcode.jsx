import React, { useState } from 'react'
import QRCode from 'qrcode.react'
function Qrcode() {
    const[text,setText] = useState('')
    const[send,setSend] = useState('')
  return (
    <div>
        <div>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setSend(text)}>Generate QRcode</button>
        </div>
        {send && <QRCode value={send} />}
    </div>
  )
}

export default Qrcode