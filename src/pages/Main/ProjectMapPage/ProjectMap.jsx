import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import marker from '../../../assets/logo/Frame.png';
import location from '../../../assets/logo/location.svg';
import { useTranslation } from 'react-i18next';
import project1 from '../../../assets/centraVista/IMG_1911.JPG';
import project2 from '../../../assets/nurafshon/Q2.jpg';
import project3 from '../../../assets/Asia Medline/IMG_1930.JPG';
import project4 from '../../../assets/The Knowledge center/IMG_2039.JPG';
import project5 from '../../../assets/MaxRoy/view_001.jpg';

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
      position: { lat: 41.322163, lng: 69.283195 },
      title: t('project_map.location1_subtitle'),
      description: t('project_map.location1_title'),
      district: t('project_map.location1_desc'),
      image: project1,
    },
    {
      id: 2,
      position: { lat: 41.341622, lng: 69.233231 },
      title: t('project_map.location2_subtitle'),
      description: t('project_map.location2_title'),
      district: t('project_map.location2_desc'),
      image: project2,
    },
    {
      id: 3,
      position: { lat: 41.32675, lng: 69.293024 },
      title: t('project_map.location3_subtitle'),
      description: t('project_map.location3_title'),
      district: t('project_map.location3_desc'),
      image: project3,
    },
    {
      id: 4,
      position: { lat: 41.342476, lng: 69.207431 },
      title: t('project_map.location4_subtitle'),
      description: t('project_map.location4_title'),
      district: t('project_map.location4_desc'),
      image: project4,
    },
    {
      id: 5,
      position: { lat: 41.329199, lng: 69.280078 },
      title: t('project_map.location5_subtitle'),
      description: t('project_map.location5_title'),
      district: t('project_map.location5_desc'),
      image: project5,
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
              onClick={() => {
                setHoveredLocation(location);
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
                maxWidth: 600,
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
                className="bg-white  rounded-xl w-[300px] sm:w-[500px] h-[200px] sm:h-[240px] overflow-hidden relative"
              >
                <div className="bg-[#FFFFFFD9] absolute bottom-3 left-3 p-3 rounded-[12px]">
                  <h3 className="text-[#D18202] font-bold text-lg">
                    {hoveredLocation.title}
                  </h3>
                  <p
                    style={{ fontFamily: 'SF Pro Regular' }}
                    className="text-[#151515] text-[14px]"
                  >
                    {hoveredLocation.description}
                  </p>
                  <p
                    style={{ fontFamily: 'SF Pro Regular' }}
                    className="text-[#151515] text-sm flex items-center mt-[20px]"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                          fill="#D18202"
                        />
                      </svg>
                    </span>
                    {hoveredLocation.district}
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
