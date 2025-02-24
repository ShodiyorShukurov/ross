import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import marker from '../../../assets/logo/Frame.png';

const containerStyle = {
  width: '100%',
  height: '700px',
  marginTop: '40px',
};

const center = {
  lat: 41.2995,
  lng: 69.2401,
};

const locations = [
  {
    id: 1,
    position: { lat: 41.295, lng: 69.2405 },
    description: 'Luxury residence',
    district: 'Chilonzor tumani',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    position: { lat: 41.3205, lng: 69.2256 },
    description: 'Premium Apartments',
    district: 'Yunusobod tumani',
    image: 'https://placehold.co/600x400',
  },
  {
    id: 3,
    position: { lat: 41.3101, lng: 69.2554 },
    description: 'Eco-friendly Homes',
    district: 'Mirzo Ulug’bek tumani',
    image: 'https://placehold.co/600x400',
  },
];

const ProjectMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section className="pt-[140px] relative">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[56px] leading-[74px] text-center"
        >
          Toshkent bo‘yicha Loyihalarimiz
        </h2>
        <p style={{fontFamily: "SF Pro Medium"}} className="font-light text-[20px] leading-[20px] text-center mt-[10px]">
          Shahar bo‘ylab o‘zingizga qulay joylashuvdagi loyihamizda istiqomat
          qiling
        </p>
      </div>

      <LoadScript googleMapsApiKey="AIzaSyDfe-B3bRqFV6yNU3t7rhMR4Nsm_kzsaf4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={{
            disableDefaultUI: true,
            styles: [
              {
                featureType: 'poi.business',
                stylers: [{ visibility: 'off' }],
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.icon',
                stylers: [{ visibility: 'on' }],
              },
            ],
          }}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              icon={{
                url: marker,
                scaledSize: window.google
                  ? new window.google.maps.Size(40, 40)
                  : undefined,
              }}
              onMouseOver={() => setHoveredLocation(location)}
              onMouseOut={() => setHoveredLocation(null)}
            />
          ))}

          {hoveredLocation && (
            <InfoWindow
              position={{
                lat: hoveredLocation.position.lat,
                lng: hoveredLocation.position.lng,
              }}
              options={{
                disableAutoPan: true,
                pixelOffset: new window.google.maps.Size(0, -30),
                disableCloseButton: true,
              }}
            >
              <div
                style={{
                  backgroundImage: ` url(${hoveredLocation.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                className="bg-white p-[5px] rounded-[12px] w-[250px] transform h-[200px] overflow-hidden"
              >
                <div className="bg-[#00000055] absolute bottom-3 left-3 p-[12px] rounded-[12px]">
                  <h3 className="text-[#D18202] font-bold text-lg mt-2">
                    {hoveredLocation.title}
                  </h3>
                  <p className="text-gray-700">{hoveredLocation.description}</p>
                  <p className="text-gray-500 text-sm flex items-center mt-1">
                    <span className="mr-2">📍</span> {hoveredLocation.district}
                  </p>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default ProjectMap;
