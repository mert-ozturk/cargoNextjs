'use client'
import React, { useEffect, useRef, useState } from 'react'
import pat from '@/public/patlama.gif'
import Image from 'next/image';
 
const Urun = () => {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [program,setProgram] = useState('')
  const [text,setText] = useState('')
  const [stext,setStext] = useState('')
  const audioRef = useRef(null);
  const [ses,setSes] = useState('')
 


  useEffect(() => {
      
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((i) => i - 1);
      }, 1000); 
      if(time === 6){
       
        setProgram('on program')
        
      }else if(stext === '2'){
        setProgram('restat program')
        setTime(10)
      
      } 
    }else if(time === 0){
      audioRef.current.play();
      setProgram(' ')
       
     }else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const start = () => {
    
    setIsActive(true);
   
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setText(' ')
    setStext(' ')
    setProgram(' ')
    setIsActive(false);
    setTime(10);
    
  };

  const onSubmit = (e) => {
     e.preventDefault()
      
  }
 
  const sesDalgasi = () => {
    if(isActive === true){
      setSes('ses çalıyor')
     return <div>  <audio ref={audioRef} src="/patlama.mp3" /> </div>
    }

}

  return ( 
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
     
     <div >{time}  {ses} </div> 
    <button onClick={sesDalgasi}>ses</button>
      <div
      className=" bg-indigo-600 py-4 px-2 rounded-lg overflow-hidden">
      
      <h1 className="countdown-element seconds font-Cormorant font-semibold text-2xl text-white text-center animate-countinsecond">{time}</h1>
   
      
      <p >saniye</p>
      </div>
     
        <input className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"  placeholder='şifreyi yaz' onChange={(e)=>setText(e.target.value)} />
        <button  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={onSubmit}>Şifreyi gir</button>
        <div> 
        <button value={ses}  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={start || sesDalgasi} disabled={isActive}>Başlat</button>
       
        </div>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={pause} disabled={!isActive}>Duraklat</button>
        <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={reset}>Sıfırla</button>
         
 
     <p className='text-left'>{program}  </p>  
       
      { time  === 0 && <div> 
      <audio ref={audioRef} src="/patlama.mp3" />
      
      <Image src={pat} fill />  
    </div>}
    </div>
  )
}

export default Urun
