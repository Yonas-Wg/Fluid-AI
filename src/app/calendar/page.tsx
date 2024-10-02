import React from 'react';
import Messages from '../messages/page';
import HeaderWithIcons from '../components/homeicon3';
import FluidAISection from '../components/FluidAISection';
import Divider from '@mui/material/Divider';
import Calendar from '../components/Calendar';
import ToDoCard from '../components/tododcard';

const LocalCalendarComponent = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '400px',
        height: '860px',
        margin: '0 auto',
        border: '5.07005px solid #3A3A3C',
        borderRadius: '50px',
        boxSizing: 'border-box',
      }}
    >
      {/* Mobile Phone Bezel and Content */}
      <div
        style={{
          position: 'absolute',
          width: '375px',
          height: '825px',
          left: 'calc(50% - 375px / 2)',
          top: 'calc(50% - 812px / 2)',
          backgroundColor: '#000',
          borderRadius: '50px',
          overflow: 'hidden',
          boxShadow: '0px 0px 4.28022px rgba(0, 0, 0, 0.6)',
        }}
      >
     <div
  style={{
    position: 'absolute',
    left: '2.31%',
    right: '2.1%',
    top: '0.72%',
    bottom: '0.72%',
    background: 'linear-gradient(to left, #000000 60%, #333333 100%)',
    borderRadius: '40px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)', 
  }}
>
          {/* Status Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 20px',
              position: 'absolute',
              width: '100%',
              top: '10px',
              fontSize: '12px',
              color: '#fff',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            {/* Time */}
            <div style={{ fontWeight: '500' }}>9:41</div>

            {/* Icons: Cellular, Wi-Fi, Battery */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {/* Cellular Data */}
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 18h2v2H4v-2Zm4-4h2v6H8v-6Zm4-4h2v10h-2V10Zm4-8h2v18h-2V2Z"
                  fill="white"
                />
              </svg>

              {/* Wi-Fi */}
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12.55a11.73 11.73 0 0 1 14 0l-1.45 1.35a9.18 9.18 0 0 0-11.1 0L5 12.55ZM2.2 9.6a16.22 16.22 0 0 1 19.6 0l-1.44 1.35a14.12 14.12 0 0 0-16.72 0L2.2 9.6ZM12 20l-3.5-3.15a6.21 6.21 0 0 1 7 0L12 20Z"
                  fill="white"
                />
              </svg>

              {/* Battery */}
              <svg
                width="16"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 6H7v12h9V6ZM4 8H3v8h1v2h12V6H4v2Zm15 0v8h1v-8h-1Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Main Content (like Nav Bar and Explore Section) */}
          <div
            style={{
              position: 'absolute',
              width: '349.65px',
              height: '89.86px',
              left: 'calc(50% - 309.65px/2)',
              top: '80px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '0px',
              gap: '263.35px',
              isolation: 'isolate',
            }}
          >
           {/* Explore Section */}
<div
  style={{
    position: 'absolute',
    left: '0%',
    right: '82.08%',
    top: '0%',
    bottom: '75.65%',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18.4701px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    borderBottom: '2px solid #FFFFFF',
  }}
>
  Calendar
</div>

            {/* Explore Section */}
            <div
              style={{
                position: 'absolute',
                left: '20%',
                right: '64.08%',
                top: '0%',
                bottom: '1.65%',
                fontFamily: 'SF Pro Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '18.4701px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              To Do
            </div>

            {/* Icon */}
            <div
              style={{
                position: 'absolute',
                width: '25.59px',
                height: '25.59px',
                left: '235.59px',
                top: '0px',
                zIndex: 1,
              }}
            >
              {/* Circle SVG wrapping the smaller icon */}
              <svg
                width="27"
                height="26"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_626_1279)">
                  <circle
                    cx="18.3891"
                    cy="17.9233"
                    r="17.4231"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.741409"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_626_1279"
                    x="-21.6469"
                    y="-22.1127"
                    width="80.0722"
                    height="80.0722"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="11.1211"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_626_1279"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_626_1279"
                      result="shape"
                    />
                  </filter>
                </defs>

                {/* Smaller Icon Inside */}
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: 'absolute', left: '9px', top: '9px' }}
                >
                  <path
                    d="M8.05466 12.927H10.7237V11.5925H8.05466V12.927ZM3.38379 4.9198V6.25434H15.3946V4.9198H3.38379ZM5.38559 9.59067H13.3928V8.25614H5.38559V9.59067Z"
                    fill="white"
                  />
                </svg>
              </svg>
            </div>
            <div
              style={{
                position: 'absolute',
                width: '25.59px',
                height: '25.59px',
                left: '275.59px',
                top: '0px',
                zIndex: 1,
              }}
            >
              {/* Circle SVG wrapping the smaller icon */}
              <svg
                width="25"
                height="24"
                viewBox="0 0 37 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_626_1279)">
                  <circle
                    cx="18.3891"
                    cy="17.9233"
                    r="17.4231"
                    stroke="white"
                    strokeOpacity="0.2"
                    strokeWidth="0.741409"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_626_1279"
                    x="-21.6469"
                    y="-22.1127"
                    width="70.0722"
                    height="70.0722"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="11.1211"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_626_1279"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_626_1279"
                      result="shape"
                    />
                  </filter>
                </defs>

                {/* Smaller Icon Inside */}
                <svg width="35" height="35" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.63745 5.15963V0.711182H5.15463V5.15963H0.706177V6.64245H5.15463V11.0909H6.63745V6.64245H11.0859V5.15963H6.63745Z" fill="white"/>
</svg>
              </svg>
            </div>
        

          </div>

         
   {/* June 26th */}
<div
  style={{
    position: 'absolute',
    width: '146.8px',
    height: '145.91px',
    left: '14.24px',
    top: '184.09px',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '71.1752px',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  }}
>
  June 26th
</div>
{/* Vertical Line using MUI Divider */}
<Divider
  orientation="vertical"
  sx={{
    position: 'absolute',
    left: '201.07px',
    top: '223.67px',
    height: '107px', 
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: '0.88969px',
    borderStyle: 'solid', 
  }}
/>
<div style={{ display: 'flex', flexDirection: 'column', gap: '4px',position:'relative', top:'220px',left:'250px' }}>
  {/* Time */}
  <div style={{
      width: '30px',
      height: '17px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14.235px',
      lineHeight: '120%',
      color: 'rgba(255, 255, 255, 0.6)',
      flex: 'none',
      order: 0,
      flexGrow: 0,
  }}>
    Time
  </div>

  {/* Time Value */}
  <div style={{
      width: '74.73px',
      height: '17px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14.235px',
      lineHeight: '120%',
      color: 'rgba(255, 255, 255, 0.6)',
      flex: 'none',
      order: 1,
      alignSelf: 'stretch',
      flexGrow: 0,
  }}>
    Next To-do 
  </div>

  {/* Next To-do */}
  <div style={{
      width: '85.41px',
      height: '17px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14.235px',
      lineHeight: '120%',
      color: '#FFFFFF',
      flex: 'none',
      order: 0,
      alignSelf: 'stretch',
      flexGrow: 0,
      marginBottom:'20px',
  }}>
    11:30 PM
  </div>

  {/* Appointment */}
  <div style={{
      width: '78px',
      height: '17px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14.235px',
      lineHeight: '120%',
      color: '#FFFFFF',
      flex: 'none',
      order: 1,
      flexGrow: 0,
  }}>
    Appointment
  </div>
</div>


<Calendar/>

<div
      style={{
        width: '137.01px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontFamily: 'SF Pro Display, sans-serif',
        color: '#FFFFFF',
        position:'relative',
        top:'400px',
        left:'20px',
      }}
    >
      Your Events
      <div
        style={{
          width: '137.01px',
          height: '14px',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14.235px',
          lineHeight: '100%',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        4 events
      </div>
    </div>

    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '3.55876px',
        gap: '5.34px',
        position: 'absolute',
        width: '83.63px',
        height: '42.71px',
        left: '251.78px',
        top: '502.14px',
        border: '0.88969px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '28.4701px',
      }}
    >
      {/* Icon + Background */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '8.8969px',
          gap: '10.12px',
          width: '35.59px',
          height: '35.59px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(8.8969px)',
          borderRadius: '28.4701px',
        }}
      >
        {/* SVG Icon 1 */}
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '17.79px', height: '17.79px', flex: 'none', order: 0, flexGrow: 0 }}
        >
          <g opacity="0.9" clipPath="url(#clip0_626_2691)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.62769 13.7352V13.8743C3.62769 14.8052 4.3824 15.56 5.31338 15.56H15.6385C16.8669 15.56 17.8627 14.5641 17.8627 13.3357V6.56937C17.8627 5.63839 17.108 4.88367 16.177 4.88367H16.039C16.0681 5.02714 16.0833 5.17561 16.0833 5.32765V11.5555C16.0833 12.7839 15.0875 13.7797 13.8591 13.7797H4.07251C3.92017 13.7797 3.77141 13.7644 3.62769 13.7352Z"
              fill="white"
              fillOpacity="0.4"
            />
            <rect x="0.959351" y="2.21481" width="14.235" height="10.6763" rx="1.6857" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_626_2691">
              <rect width="17.7938" height="17.7938" fill="white" transform="translate(0.514526 -0.0094223)" />
            </clipPath>
          </defs>
        </svg>
        
        {/* SVG Icon 2 (New Icon) */}
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '17.79px', height: '17.79px', flex: 'none', order: 0, flexGrow: 0 ,marginLeft:'15px'}}
        >
          <path
            d="M0.664551 0.697624H14.0099V2.18044H0.664551V0.697624ZM0.664551 5.14608H14.0099V6.62889H0.664551V5.14608ZM0.664551 9.59453H14.0099V11.0773H0.664551V9.59453Z"
            fill="white"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </div>

 {/* Input Search Bar */}
 <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '11.566px 15.235px',
              gap: '8.9px',
              width: '331.18px',
              height: '44.48px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '0.88969px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10.6763px',
              margin: '430px 10px   0', 
            }}
          >
            {/* Search Icon */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.62141 0.339233C11.3047 0.339233 14.2941 3.32859 14.2941 7.01191C14.2941 10.6952 11.3047 13.6846 7.62141 13.6846C3.93809 13.6846 0.94873 10.6952 0.94873 7.01191C0.94873 3.32859 3.93809 0.339233 7.62141 0.339233ZM7.62141 12.2018C10.4888 12.2018 12.8113 9.87931 12.8113 7.01191C12.8113 4.14451 10.4888 1.82205 7.62141 1.82205C4.75401 1.82205 2.43155 4.14451 2.43155 7.01191C2.43155 9.87931 4.75401 12.2018 7.62141 12.2018ZM13.9125 12.2545L16.0095 14.3515L14.961 15.4L12.864 13.303L13.9125 12.2545Z" fill="white" fill-opacity="0.4"/>
</svg>


            {/* Search Text */}
            <div
              style={{
                fontFamily: 'SF Pro Text',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14.235px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              Search
            </div>
          </div>
<ToDoCard/>
<HeaderWithIcons/>
        </div>
      </div>
      <div style={{ marginTop: '1200px' }}>
          <Messages />
        </div>
      <FluidAISection /> 
    </div>
  );
};

export default LocalCalendarComponent;
