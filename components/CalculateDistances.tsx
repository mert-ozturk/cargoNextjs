'use client'
import { useState } from 'react';
import axios from 'axios';

export default function CalculateDistances() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = async () => {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
        params: {
          units: 'metric',
          origins: origin,
          destinations: destination,
          key: 'AIzaSyAoL69EuNJ8-4On9RENEcMNYcvYivFBBPs' 
        }
      });
      const distanceInKm = response.data.rows[0].elements[0].distance.value / 1000;
      setDistance(distanceInKm);
    } catch (error) {
      console.error('Error fetching distance:', error);
    }
  };

  return (
    <div>
      <h1>Şehirler Arası Mesafe Ölçer</h1>
      <input type="text" placeholder="Başlangıç Şehri" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      <input type="text" placeholder="Varış Şehri" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <button onClick={calculateDistance}>Mesafeyi Hesapla</button>
      {distance !== null && <p>Mesafe: {distance} km</p>}
    </div>
  );
}
