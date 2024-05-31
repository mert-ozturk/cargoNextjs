'use client'
import React, { use, useEffect, useState } from 'react'
import GoogleHarita from '@/components/GoogleHarita'

 
 
 
const YolHesaplama = ( ) => {
  
     const [km,setKm] = useState()
     const [kdv,setKdv] = useState(20)
     const [toplam,setToplam] = useState(0)
     const [kg,setKg] = useState('')
     const [sehirD,setSehirD] = useState(null)
     const [tkdv,setTkdv] = useState(0)
     const [klg,setKlg] = useState(0)
   
    
    
     const handleToggle = (e) => {
      setSehirD(e.target.value);
    };

  
    const tutarHesapla = (e) => {
      e.preventDefault()
     if(sehirD == 'true') {
      let yakit = 22
        if(kg <= 12 ){
        const tutar =  km * yakit
        const vergi = (tutar * kdv )/ 100
        setToplam(vergi + tutar)
        setTkdv(vergi)
       }else{
        const tutar = km * yakit
        const vergi = (tutar * kdv )/ 100
        const kilo = (tutar * kg/200)
        setToplam(vergi + tutar + kilo)
        setTkdv(vergi)
        setKlg(kilo)
       }
     }
     else if(sehirD == 'false') {
      let yakit = 25
      if(kg <= 12 ){
      const tutar = km * yakit
      const vergi = (tutar * kdv )/ 100
      setToplam(vergi + tutar)
      setTkdv(vergi)
     }else{
      const tutar = km * yakit
      const vergi = (tutar * kdv )/ 100
      const kilo = (tutar * kg/200)
      setToplam(vergi + tutar + kilo)
      setTkdv(vergi)
      setKlg(kilo)
      
     } 
   }  
     }
    
     const refreshPage = () => {
        window.location.reload();
      };
   
   
  return (
    <div className="block  border-gray-200 px-7 py-5 shadow-sm focus-within:border-blue-600 focus-within:ring-5 focus-within:ring-blue-600">
<div> 
  

<article className="rounded-lg border border-gray-100 bg-white p-6 mt-7  ">
  <div className="flex items-center justify-between">
  <input className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
       value={km} type='text' placeholder='Km Giriniz' onChange={(e)=>setKm(e.target.value)} />
      <input  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
       value={kg} type='text' placeholder='Kg Giriniz' onChange={(e)=>setKg(e.target.value)} />
       <select  onChange={handleToggle}>
       <option value="">Seçiniz</option>
      <option value='true' >Şehir Dışı</option>
      <option value='false' >Şehir İçi</option>
       </select>
       <button  onClick={tutarHesapla }
     className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
    Hesapla
    </button>
    <div>
      <p className="text-sm text-gray-500">TOPLAM TUTAR</p>

      <p className="text-2xl font-medium text-gray-900">{toplam && (
        toplam.toFixed(2))}TL</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <p className="flex gap-2 text-xs">
      <span className="font-medium">KDV'siz: {(toplam - tkdv).toFixed(1)}TL +</span>

      <span className="text-red-500"><b>KDV: </b>{tkdv}TL </span>
    <span className="text-gray-500"> (Yİ/YD 12 KG ++) Fiyat:{klg.toFixed(1)}TL</span>
    </p>
  </div>
</article>
</div>
     <button 
     className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
     onClick={refreshPage}>Sayfayı Yenile</button>
    </div>
  )
}

export default YolHesaplama
