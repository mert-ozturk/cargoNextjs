'use client'
import React, { useState } from 'react'

const KelimeSay = () => {
  const [text,setText] = useState('') 
  const [sonuc,setSonuc] = useState('')

const [sesli,setSesli] = useState('')

const [file,setFile] = useState()

const onSubmit = async (e) => {
  e.preventDefault()
  const data= new FormData()
  data.set('file',file);
  let result = await fetch("api/upload",{
    method:"POST",
    body:data
  });
  result = await result.json()
  console.log(result)
   
}



const sesliHarfler = ['a','e','ı','i','o','ö','u','ü']
const sesliHarfBul = () => {
  

   const kelimeler = text.split(" ")
   const bulunanKelime = kelimeler.filter(kelime=>kelime.match(sesliHarfler)
   .map(char => {
    const index = sesliHarfler.indexOf(char);
    if (index !== -1) {
      return sesliHarfler[(index - 3 + sesliHarfler.length) % sesliHarfler.length];
    }
    return char;
  })
   .join(''))
  
  
   setSonuc(bulunanKelime)


  }

  const kelimeSay = () => {
    const kelime = text.split(" ")
  const kelimeyiSay = kelime.length
     setSonuc(kelimeyiSay)
     
  }
  
  return (
    <div>
      <textarea    placeholder='kelime'    onClick={(e)=>setText(e.target.value)}   />
      <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" onClick={kelimeSay} >Getir</button>
      <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" onClick={(e)=>setSonuc('')}>Clear</button>
      <button className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500" onClick={sesliHarfBul}>SesliHarfBul</button>
      <div className="block  border-gray-200 px-7 py-5 shadow-sm focus-within:border-blue-600 focus-within:ring-5 focus-within:ring-blue-600" > 
      {sonuc}
      </div>
    <form onSubmit={onSubmit}>
      <input 
      type='file'
      name='file'
      onChange={(e)=>setFile(e.target.files?.[0])}
      />
      <button type='submit' >upload image</button>
    </form>


      
    </div>
  )
}

export default KelimeSay
