'use client'
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';

const MapContainer = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(null);

  const calculateDistance = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyAoL69EuNJ8-4On9RENEcMNYcvYivFBBPs&callback=initMap&libraries=maps,marker&v=beta`
      );
      const distanceValue = response.data.rows[0].elements[0].distance.value;
      setDistance(distanceValue / 1000); // Convert meters to kilometers
    } catch (error) {
      console.error('Error calculating distance:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter origin city"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter destination city"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distance && <p className='text-black'>Distance: {distance} km</p>}
      <LoadScript googleMapsApiKey="AIzaSyAoL69EuNJ8-4On9RENEcMNYcvYivFBBPs">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 0, lng: 0 }}
          zoom={2}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
