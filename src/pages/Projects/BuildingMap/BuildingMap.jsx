import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import marker from '../../../assets/logo/Frame.png';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  overflow: 'hidden',
};

const center = {
  lat: 41.2995,
  lng: 69.2401,
};

const BuildingMap = ({ module }) => {
  const apiKey = 'AIzaSyDfe-B3bRqFV6yNU3t7rhMR4Nsm_kzsaf4';

  const markerIcon = {
    url: marker,
    scaledSize: null,
  };

  const onLoad = (map) => {
    markerIcon.scaledSize = new window.google.maps.Size(40, 40);
  };

  return (
    <section className="pt-[40px] lg:py-[100px] bg-[#FFFFFF]">
      <div className="container">
        <h2
          style={{ fontFamily: 'Playfair Display Bold' }}
          className="text-[32px] md:text-[36px] text-center lg:text-left font-bold text-[#D18202] leading-[42px] md:leading-[48px] uppercase w-full"
        >
          {module?.map_page.title}
        </h2>

        <div className="pt-[36px] grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 lg:grid-cols-1 col-span-2 gap-6 lg:col-span-1">
            <div
              style={{ fontFamily: 'SF Pro Display Medium' }}
              className="bg-[#C4A0581C] px-[24px] py-[20px] rounded-[12px]"
            >
              <h3 className="text-[#C4A058] text-[18px] md:text-[20px] lg:text-[26px] leading-[24px] lg:leading-[30px] mb-[24px] lg:mb-[30px] flex items-center">
                <span className="mr-[8px]">
                  <svg
                    className="w-[24px] md:w-[30px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M11.4252 13.0685L16.2328 9.57559C16.7605 9.19102 17.4126 8.97815 18.097 9.0012C19.7641 9.0422 21.2281 10.135 21.7374 11.7305C22.0168 12.6065 22.2717 13.1975 22.5021 13.5037C23.8705 15.3232 26.0478 16.5 28.4998 16.5V19.5C25.2378 19.5 22.3233 18.0124 20.3974 15.6789L19.351 21.6127L22.4427 24.207L25.7775 33.369L22.9584 34.395L19.8985 25.9884L14.8132 21.7212C13.9918 21.0573 13.5466 19.9788 13.743 18.8651L14.5059 14.5385L13.4906 15.2761L10.3001 19.6674L7.87305 17.9042L11.3998 13.05L11.4252 13.0685ZM20.2498 8.25C18.5929 8.25 17.2498 6.90686 17.2498 5.25C17.2498 3.59314 18.5929 2.25 20.2498 2.25C21.9066 2.25 23.2498 3.59314 23.2498 5.25C23.2498 6.90686 21.9066 8.25 20.2498 8.25ZM15.7924 28.0219L10.9715 33.7674L8.67337 31.839L13.1361 26.5205L14.2559 23.25L16.9426 25.5L15.7924 28.0219Z"
                      fill="#C4A058"
                    />
                  </svg>
                </span>
                {module?.map_page.foot}
              </h3>
              <ul
                style={{ listStyle: 'inside' }}
                className="text-[14px] lg:text-[20px] leading-[16px] lg:leading-[24px]"
              >
                {module?.map_page.foot_location.map((item, index) => (
                  <li key={index} className="mb-[16px] lg:mb-[25px] last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{ fontFamily: 'SF Pro Display Medium' }}
              className="bg-[#C4A0581C] px-[24px] py-[20px] rounded-[12px]"
            >
              <h3 className="text-[#C4A058] text-[18px] md:text-[20px] lg:text-[26px] leading-[24px] lg:leading-[30px] mb-[24px] lg:mb-[30px] flex items-center">
                <span className="mr-[8px]">
                  <svg
                  className='w-[24px] md:w-[30px]'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <path
                      d="M22.9587 24.1668H6.04199V25.3752C6.04199 26.0425 5.501 26.5835 4.83366 26.5835H3.62533C2.95799 26.5835 2.41699 26.0425 2.41699 25.3752V14.5002L5.45394 6.40161C5.80766 5.45839 6.70937 4.8335 7.71674 4.8335H21.2839C22.2913 4.8335 23.193 5.45839 23.5468 6.40161L26.5837 14.5002V25.3752C26.5837 26.0425 26.0427 26.5835 25.3753 26.5835H24.167C23.4996 26.5835 22.9587 26.0425 22.9587 25.3752V24.1668ZM4.99799 14.5002H24.0027L21.2839 7.25016H7.71674L4.99799 14.5002ZM7.85449 20.5418C8.85551 20.5418 9.66699 19.7303 9.66699 18.7293C9.66699 17.7283 8.85551 16.9168 7.85449 16.9168C6.85347 16.9168 6.04199 17.7283 6.04199 18.7293C6.04199 19.7303 6.85347 20.5418 7.85449 20.5418ZM21.1462 20.5418C22.1471 20.5418 22.9587 19.7303 22.9587 18.7293C22.9587 17.7283 22.1471 16.9168 21.1462 16.9168C20.1452 16.9168 19.3337 17.7283 19.3337 18.7293C19.3337 19.7303 20.1452 20.5418 21.1462 20.5418Z"
                      fill="#C4A058"
                    />
                  </svg>
                </span>
                {module?.map_page.car}
              </h3>

              <ul
                style={{ listStyle: 'inside' }}
                className="text-[14px] lg:text-[20px] leading-[16px] lg:leading-[24px]"
              >
                {module?.map_page.car_location.map((item, index) => (
                  <li key={index} className="mb-[16px] lg:mb-[25px] last:mb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-2 rounded-[16px] lg:block min-h-[400px]">
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
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
                onLoad={onLoad}
              >
                <Marker
                  position={module?.map_page.position || center}
                  icon={markerIcon}
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingMap;
