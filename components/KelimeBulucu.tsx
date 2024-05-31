'use client'
import React, { useState } from 'react'

const KelimeBulucu = () => {
    const [text,setText] = useState('')
    const [bulunan,setBulunan] = useState('')
    
    const sayilar = ['a','b','c','d']

    const sayiAra = () => {
        const sayiBul = text
        .toLowerCase()
        .split(' ')
        .map(sayi=> {
        const index = sayilar.indexOf(sayi)
            if(index !== -1){
                setBulunan(text + ' ' + 'sayisı var')
            }else{
                setBulunan('sayi yok')
            }
        })
        
    }


  return (
    <div>
       <textarea className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"  placeholder='şifreyi yaz' 
       onChange={(e)=>setText(e.target.value)}
       />
       
       <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={sayiAra}>Ara</button>
       {bulunan}
    
    </div>

  )
}

export default KelimeBulucu
