'use client'
import axios from 'axios'
import React, { useState } from 'react'
 
 

const Harita = ( ) => {
    const [mapData,setMapData] = useState(null)
    const [descity,setDescity] = useState('')
    const [orcity,setOrcity] = useState('')

    const API_KEY="f65f7a1242372a97fe852e337c0ae7f4"
    const URL=` https://maps.googleapis.com/maps/api/js?key=AIzaSyAoL69EuNJ8-4On9RENEcMNYcvYivFBBPs&callback=console.debug&libraries=maps,marker&v=beta`

    const googleMaps = async ( ) => {
      
   const response = await axios.get(URL)
      
      setMapData(response.data)
      console.log(response.data)
    }

    

  return (
    <div>
       
         <div>
        
        <button  onClick={googleMaps}>Getir</button>
        {mapData}
         </div>
        
    </div>
    
  )
}

export default Harita
