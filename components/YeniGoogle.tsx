'use client'
 
import { useEffect, useRef, useState } from 'react';

const YeniGoogle = () => {
  const mapContainerRef = useRef([]);
  const [distance, setDistance] = useState(null);
  const [baslangic,setBaslangic] = useState('')
  const [hedef,setHedef] = useState('')

  useEffect(() => {
  
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAoL69EuNJ8-4On9RENEcMNYcvYivFBBPs&callback=initMap&libraries=maps,marker&v=beta`;
    googleMapScript.async = true;
    window.initMap = initMap; // Define the function for the callback
    document.body.appendChild(googleMapScript);

    return () => {
      document.body.removeChild(googleMapScript);
    };
 
  }, []);

  const initMap = (e) => {
     e.preventDefault()
    const directionsService = new window.google.maps.DirectionsService();
    const origin =  baslangic; // Başlangıç noktası
    const destination = hedef; // Varış noktası
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING',
    };
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        const distanceInKm = result.routes[0].legs[0].distance.value / 1000;
        setDistance(distanceInKm);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });

   
  };

       

  return (
    <div className="block  border-gray-200 px-7 py-5 shadow-sm focus-within:border-blue-600 focus-within:ring-5 focus-within:ring-blue-600">
      <form className='max-w-[600px] m-auto' onClick={initMap}    > 
      <label className="pt-1 block text-gray-500 text-sm">Adress(İl/İlçe/Sokak)</label>
      <input className='border shadow-lg p-3'
       value={baslangic} type='text' placeholder='Başlangıç Şehir' onChange={(e)=>setBaslangic(e.target.value)}/>
      <input className='border shadow-lg p-3' value={hedef} type='text' placeholder='Hedef Şehir' onChange={(e)=>setHedef(e.target.value)}/>
      <button  className="rounded bg-indigo-600 px-3 py-3 text-sm font-medium text-white hover:bg-indigo-700" type='submit'>Hesapla</button>
      </form>
      <div className='max-w-[600px] m-auto border shadow-lg p-3 px-5 pt-2'>  {distance !== null && <p>Mesafe: {distance.toFixed(1)} km</p>}</div>
       <div  ref={mapContainerRef} style={{ width: '200px', height: '200px' }}></div>
       
    </div>
  );
};

export default YeniGoogle;
