import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '700px',
  marginTop: '40px',
};

const center = {
  lat: 41.2995,
  lng: 69.2401,
};

// Locationlar ro‘yxati
const locations = [
  {
    id: 1,
    position: { lat: 41.295, lng: 69.2405 },
    title: 'Toza Havo',
    description: 'Luxury residence',
    district: 'Chilonzor tumani',
    image: '/assets/images/project1.jpg',
  },
  {
    id: 2,
    position: { lat: 41.3205, lng: 69.2256 },
    title: 'Oltin Mo’jiza',
    description: 'Premium Apartments',
    district: 'Yunusobod tumani',
    image: '/assets/images/project2.jpg',
  },
  {
    id: 3,
    position: { lat: 41.3101, lng: 69.2554 },
    title: 'Eco Park Residence',
    description: 'Eco-friendly Homes',
    district: 'Mirzo Ulug’bek tumani',
    image: '/assets/images/project3.jpg',
  },
];

const ProjectMap = () => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  return (
    <section className="pt-[140px] relative">
      <div className="container">
        <h2 className="text-[#D18202] font-bold text-[56px] leading-[74px] text-center">
          Toshkent bo‘yicha Loyihalarimiz
        </h2>
        <p className="font-light text-[20px] leading-[20px] text-center mt-[10px]">
          Shahar bo‘ylab o‘zingizga qulay joylashuvdagi loyihamizda istiqomat qiling
        </p>
      </div>

      <LoadScript googleMapsApiKey="AIzaSyDfe-B3bRqFV6yNU3t7rhMR4Nsm_kzsaf4">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onMouseOver={() => setHoveredMarker(location)}
              onMouseOut={() => setHoveredMarker(null)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      {/* Hover qilinganda chiqadigan Info Card */}
      {hoveredMarker && (
        <div className="absolute left-[50%] bottom-[100px] transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[280px]">
          <img
            src={hoveredMarker.image}
            alt={hoveredMarker.title}
            className="w-full h-[150px] object-cover rounded-lg"
          />
          <h3 className="text-[#D18202] font-bold text-lg mt-2">
            {hoveredMarker.title}
          </h3>
          <p className="text-gray-700">{hoveredMarker.description}</p>
          <p className="text-gray-500 text-sm flex items-center mt-1">
            <span className="mr-2">📍</span> {hoveredMarker.district}
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectMap;
