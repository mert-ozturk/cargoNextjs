'use client'
import React, { useEffect,  useRef,  useState } from 'react'
import pat from '@/public/patlama.gif'
import Image from 'next/image';
 

const Bombaci = () => {
      
    const [zaman,setZaman] = useState(14)
    const [active,setActive] = useState(false)
    const [text,setText] = useState('')
    const [kontrol,setKontrol] = useState(false)
    const [ses,setSes] = useState('true')
    const audioRef = useRef(null);
   
    const parola = ['1','2','3']
    
    const parolaGir = () =>{
       text
       .toLowerCase()
       .split('')
       .map((i)=>{ 
       const index = parola.indexOf(i);
        if(index !== -1){
            setKontrol(true)
            setZaman(14)
            setActive(false)
            audioRef.current.play();
          
        }else{
            setKontrol(false)
            setZaman(0)
        }
       } 
      ) 
    }

   
    useEffect(() => {
     let interval = null;
        if (active && zaman > 0) {
          interval = setInterval(() => {
            setZaman((i) => i - 1);
          }, 1000); 
         
         
        }else if(zaman === 0){
         audioRef.current.play();
           
        } 

        
       return () => clearInterval(interval)    
      
      }, [active, zaman]);


      const onStart = () => {
        
        setActive(true)
        setSes('true')

      }

      const onStop = () => {
        setActive(false)
      }
      const onReset = () => {
        setZaman(14)
        setActive(false)
        setText('')
        setKontrol(false)
        setSes('false')
      }
    
 
  return (
    <div>
         <div >{zaman}  {ses === 'true' && <div><audio ref={audioRef} src="/timesong.mp3" /> </div>} </div> 
 
        <textarea  className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"  placeholder='Parola' value={text} onChange={(e)=>setText(e.target.value)}  />
        <button className="focus:outline-none text-white bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={parolaGir}>Parola Gir</button>
        <br/>
        
        {kontrol === true && <div> Bomba imha oldu <div><audio ref={audioRef} src="/imha.mp3" /> </div> </div> }
        <button
         className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
         disabled={active}
        onClick={onStart } >Başlat</button>
        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" disabled={!active} onClick={onStop}>Durdur</button>
        <button  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"   onClick={onReset}>Reset</button>
       
        { zaman  === 0 && 
      <div> 
      <audio ref={audioRef} src="/patlama.mp3" /> 
      <Image src={pat} fill />  
    </div> }
    </div>
  )
}

export default Bombaci
