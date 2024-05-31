'use client'
 
import React, { useEffect, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Sifreleme = () => {
   
    const [klavye,setKlavye] = useState('')
    const [sonuc,setSonuc] = useState('')
    const [savedValues, setSavedValues] = useState([]);
    const [savedValuess, setSavedValuess] = useState([]);
   
    const alfabe =  [
        'a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'
      ];
    const alfabeS = ['A' ,'B' ,'C' ,'Ç' ,'D' ,'E' ,'F' ,'G' ,'Ğ' ,'H' ,'İ' ,'I' ,'J' ,'K' ,'L' ,'M' ,'N ','O' ,'Ö','P' ,'R' ,'S' ,'Ş' ,'T','U','Ü','V','Y','Z']
   
   
    const encryptText = () => {
        const encrypted = klavye
          .toLowerCase()
          .split('')
          .map(char => {
            const index = alfabe.indexOf(char);
            if (index !== -1) {
              return alfabe[(index + 3) % alfabe.length];
            }
            return char;
          })
          .join('');
          setSonuc(encrypted);
          setSavedValues([...savedValues, sonuc]);
           
          
      };
    
      const decryptText = () => {
        const decrypted = klavye
          .toLowerCase()
          .split('')
          .map(char => {
            const index = alfabe.indexOf(char);
            if (index !== -1) {
              return alfabe[(index - 3 + alfabe.length) % alfabe.length];
            }
            return char;
          })
          .join('');
          setSonuc(decrypted);
          setSavedValuess([...savedValuess, sonuc]);
 
          
      };
 
    
      

   const refreshPage = () => {
    window.location.reload();
  };

 
 
    const onHarfDegistir = (e) =>{
        e.preventDefault()
       
        if(klavye === alfabe[0]){
            setSonuc(alfabe[3])
        }else if(klavye === alfabe[1]){
            setSonuc(alfabe[4])
        }else if(klavye === alfabe[2]){
            setSonuc(alfabe[5])
        }
        else if(klavye === alfabe[3]){
            setSonuc(alfabe[6])
        }
        else if(klavye === alfabe[4]){
            setSonuc(alfabe[7])
        }
        else if(klavye === alfabe[5]){
            setSonuc(alfabe[8])
        }else if(klavye === alfabe[6]){
            setSonuc(alfabe[9])
        }
        else if(klavye === alfabe[7]){
            setSonuc(alfabe[10])
        }else if(klavye === alfabe[8]){
            setSonuc(alfabe[11])
        }else if(klavye === alfabe[9]){
            setSonuc(alfabe[12])
        }else if(klavye === alfabe[10]){
            setSonuc(alfabe[13])
        }
        else if(klavye === alfabe[11]){
            setSonuc(alfabe[14])
        }
        else if(klavye === alfabe[12]){
            setSonuc(alfabe[15])
        }
        else if(klavye === alfabe[13]){
            setSonuc(alfabe[16])
        }
        else if(klavye === alfabe[14]){
            setSonuc(alfabe[17])
        }
        else if(klavye === alfabe[15]){
            setSonuc(alfabe[18])
        }
        else if(klavye === alfabe[16]){
            setSonuc(alfabe[19])
        }
        else if(klavye === alfabe[17]){
            setSonuc(alfabe[20])
        }
        else if(klavye === alfabe[18]){
            setSonuc(alfabe[21])
        }
        else if(klavye === alfabe[19]){
            setSonuc(alfabe[22])
        }
        else if(klavye === alfabe[20]){
            setSonuc(alfabe[23])
        }
        else if(klavye === alfabe[21]){
            setSonuc(alfabe[24])
        }
        else if(klavye === alfabe[22]){
            setSonuc(alfabe[25])
        }
        else if(klavye === alfabe[23]){
            setSonuc(alfabe[26])
        }
        else if(klavye === alfabe[24]){
            setSonuc(alfabe[27])
        }
        else if(klavye === alfabe[25]){
            setSonuc(alfabe[28])
        }
        else if(klavye === alfabe[26]){
            setSonuc(alfabe[0])
        }
        else if(klavye === alfabe[27]){
            setSonuc(alfabe[1])
        }
        else if(klavye === alfabe[28]){
            setSonuc(alfabe[2])
        }  
        setSavedValues([...savedValues, sonuc]);
        
    }

     
    const onHarfTers = ( ) =>{
       
        if(klavye === alfabe[3]){
            setSonuc(alfabe[0])
        }else if(klavye === alfabe[4]){
            setSonuc(alfabe[1])
        }else if(klavye === alfabe[5]){
            setSonuc(alfabe[2])
        }
        else if(klavye === alfabe[6]){
            setSonuc(alfabe[3])
        }
        else if(klavye === alfabe[7]){
            setSonuc(alfabe[4])
        }
        else if(klavye === alfabe[8]){
            setSonuc(alfabe[5])
        }else if(klavye === alfabe[9]){
            setSonuc(alfabe[6])
        }
        else if(klavye === alfabe[10]){
            setSonuc(alfabe[7])
        }else if(klavye === alfabe[11]){
            setSonuc(alfabe[8])
        }else if(klavye === alfabe[12]){
            setSonuc(alfabe[9])
        }else if(klavye === alfabe[13]){
            setSonuc(alfabe[10])
        }
        else if(klavye === alfabe[14]){
            setSonuc(alfabe[11])
        }
        else if(klavye === alfabe[15]){
            setSonuc(alfabe[12])
        }
        else if(klavye === alfabe[16]){
            setSonuc(alfabe[13])
        }
        else if(klavye === alfabe[17]){
            setSonuc(alfabe[14])
        }
        else if(klavye === alfabe[18]){
            setSonuc(alfabe[15])
        }
        else if(klavye === alfabe[19]){
            setSonuc(alfabe[16])
        }
        else if(klavye === alfabe[20]){
            setSonuc(alfabe[17])
        }
        else if(klavye === alfabe[21]){
            setSonuc(alfabe[18])
        }
        else if(klavye === alfabe[22]){
            setSonuc(alfabe[19])
        }
        else if(klavye === alfabe[23]){
            setSonuc(alfabe[20])
        }
        else if(klavye === alfabe[24]){
            setSonuc(alfabe[21])
        }
        else if(klavye === alfabe[25]){
            setSonuc(alfabe[22])
        }
        else if(klavye === alfabe[26]){
            setSonuc(alfabe[23])
        }
        else if(klavye === alfabe[27]){
            setSonuc(alfabe[24])
        }
        else if(klavye === alfabe[28]){
            setSonuc(alfabe[25])
        }
        else if(klavye === alfabe[0]){
            setSonuc(alfabe[26])
        }
        else if(klavye === alfabe[1]){
            setSonuc(alfabe[27])
        }
        else if(klavye === alfabe[2]){
            setSonuc(alfabe[28])
        }  
        setSavedValuess([...savedValuess, sonuc]);
    }

  return (
    <div>

  
 
 <p className="text-2xl font-medium text-gray-600">SONUÇ: {sonuc}  </p>

    

  <div
    className="overflow-hidden rounded-lg border border-gray-200 shadow-sm  "
  >
    
    <textarea
      id="OrderNotes"
      className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
      value={klavye}  onChange={(e)=>setKlavye(e.target.value)}
      placeholder="Enter any additional order notes..."
    ></textarea>

    <div className="flex items-center justify-end gap-2 bg-white p-3">
      <button
        type="button"
        onClick={(e)=>setKlavye('')}
        className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium  "
      >
        Clear
      </button>

      <button
        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
       onClick={encryptText}>Şifrele</button>
    <button
        className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
       onClick={decryptText}>Şifre Aç</button>
    </div>
  </div>

    
    <div className="text-2xl font-medium text-green-900"> 
    <p  > ŞİFRELE: {savedValues} </p>
    <button  onClick={(e)=>setSavedValues(savedValues.slice(0,-1))}><FaDeleteLeft /></button>  
    </div>
    <p className="text-2xl font-medium text-blue-500">ŞİFRE-AÇ: {savedValuess }<button onClick={(e)=>setSavedValuess(savedValuess.slice(0,-1))}><FaDeleteLeft /></button></p>
 
    
    </div>
  )
}

export default Sifreleme
