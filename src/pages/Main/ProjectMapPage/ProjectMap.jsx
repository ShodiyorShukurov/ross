import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import marker from '../../../assets/logo/Frame.png';
import { useTranslation } from 'react-i18next';

const containerStyle = {
  width: '100%',
  height: '700px',
};

const center = {
  lat: 41.2995,
  lng: 69.2401,
};

const ProjectMap = () => {
  const { t } = useTranslation();
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const locations = [
    {
      id: 1,
      position: { lat: 41.295, lng: 69.2405 },
      description: t('project_map.location1_title'),
      district: t('project_map.location1_desc'),
      image: 'https://placehold.co/600x400',
    },
    {
      id: 2,
      position: { lat: 41.3205, lng: 69.2256 },
      description: t('project_map.location2_title'),
      district: t('project_map.location2_desc'),
      image: 'https://placehold.co/600x400',
    },
    {
      id: 3,
      position: { lat: 41.3101, lng: 69.2554 },
      description: t('project_map.location3_title'),
      district: t('project_map.location3_desc'),
      image: 'https://placehold.co/600x400',
    },
  ];

  return (
    <section className="pt-[80px] md:pt-[140px] relative">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[#D18202] font-bold text-[32px] sm:text-[40px] md:text-[56px] sm:leading-[53px] md:leading-[74px] text-center"
        >
          {t('project_map.title')}
        </h2>
        <p
          style={{ fontFamily: 'SF Pro Medium' }}
          className="font-light text-[16px] md:text-[20px] leading-[20px] text-center mt-[10px] mb-[24px] md:mb-[40px]"
        >
          {t('project_map.subtitle')}
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
              { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
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
              animation={
                hoveredLocation?.id === location.id
                  ? window.google.maps.Animation.BOUNCE
                  : null
              }
              onMouseOver={() => {
                if (window.innerWidth > 768) setHoveredLocation(location); // Desktop: hover
              }}
              onClick={() => {
                if (window.innerWidth <= 768) setHoveredLocation(location); // Mobile: click
              }}
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
                disableCloseButton: false, 
              }}
              onCloseClick={() => setHoveredLocation(null)}
            >
              <div
                style={{
                  backgroundImage: `url(${hoveredLocation.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                className="bg-white p-3 rounded-xl w-[250px] h-[200px] overflow-hidden relative"
              >
                <div className="bg-black/50 absolute bottom-3 left-3 p-3 rounded-lg">
                  <h3 className="text-[#D18202] font-bold text-lg">
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
