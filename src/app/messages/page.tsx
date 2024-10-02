import React from 'react';
import Explore from '../explore/page';
import HeaderWithIcons from '../components/homeicon2';
import FluidAISection from '../components/fluiaisection2';


const Messages = () => {
    const styles = {
        container: {
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center', 
        },
        circle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '80px', 
          height: '20px', 
          borderRadius: '50%', 
          backgroundColor: '#1E1E1E', 
          margin: '5px 5px', 
        },
        svg: {
          width: '50%', 
          height: '50%', 
        },
      };
    
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
                right: '64.08%',
                top: '0%',
                bottom: '1.65%',
                fontFamily: 'SF Pro Display',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '28.4701px',
                lineHeight: '100%',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              Messages
            </div>

            {/* Icon */}
            <div
              style={{
                position: 'absolute',
                width: '35.59px',
                height: '35.59px',
                left: '285.59px',
                top: '0px',
                zIndex: 1,
              }}
            >
               <div style={styles.container}>
      <div style={styles.circle}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.2467 2.37485C3.99946 1.70125 4.89067 1.17918 5.87237 0.856567C6.41583 1.5355 7.25158 1.97032 8.18887 1.97032C9.12616 1.97032 9.96187 1.5355 10.5054 0.856567C11.4871 1.17918 12.3783 1.70125 13.131 2.37485C12.8156 3.18454 12.8572 4.12487 13.3255 4.93595C13.7941 5.7475 14.5883 6.25382 15.4477 6.38514C15.5495 6.87468 15.603 7.38188 15.603 7.9016C15.603 8.42126 15.5495 8.92853 15.4477 9.41801C14.5883 9.54938 13.7941 10.0557 13.3255 10.8672C12.8572 11.6783 12.8156 12.6187 13.131 13.4283C12.3783 14.1019 11.4871 14.624 10.5054 14.9466C9.96187 14.2677 9.12616 13.8329 8.18887 13.8329C7.25158 13.8329 6.41583 14.2677 5.87237 14.9466C4.89067 14.624 3.99946 14.1019 3.2467 13.4283C3.56212 12.6187 3.52051 11.6783 3.05224 10.8672C2.58369 10.0557 1.78949 9.54938 0.929994 9.41801C0.828251 8.92853 0.77478 8.42126 0.77478 7.9016C0.77478 7.38188 0.828251 6.87468 0.929994 6.38514C1.78949 6.25382 2.58369 5.7475 3.05224 4.93595C3.52051 4.12487 3.56212 3.18454 3.2467 2.37485ZM9.30098 9.82786C10.3648 9.2136 10.7293 7.85334 10.1151 6.78949C9.50086 5.72564 8.1406 5.36114 7.07675 5.97535C6.01292 6.58953 5.64843 7.94987 6.26263 9.01372C6.87687 10.0776 8.23713 10.442 9.30098 9.82786Z"
            fill="white"
          />
        </svg>
      </div>
      <div style={styles.circle}>
        <svg
          width="20"
          height="18"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.63537 5.16067V0.712219H5.15255V5.16067H0.704102V6.64349H5.15255V11.0919H6.63537V6.64349H11.0838V5.16067H6.63537Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
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
              margin: '130px 10px   0', 
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

          <div
      style={{
        position: 'absolute',
        width: '369.65px',
        height: '27.58px',
        left: '10px',
        top: '200.09px',
        overflow: 'none', 
      }}
    >
      {/* Frame 1000011301 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '31.35px',
          position: 'absolute',
          width: '529.12px',
          height: '14px',
          left: '2.23px',
          top: '0px',
        }}
      >
        {/* All */}
        <div
          style={{
            width: '16px',
            height: '14px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14.235px',
            lineHeight: '100%',
            color: '#FFFFFF', 
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          All
        </div>

    
        <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '74px',
          height: '14px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14.235px',
          lineHeight: '100%',
          color: 'rgba(255, 255, 255, 0.6)',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        Unread
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20px', 
          height: '20px', 
          borderRadius: '50%',
          backgroundColor: 'darkgrey', 
          color: 'white', 
          fontFamily: 'SF Pro Display',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '20px', 
          marginLeft: '-25px',
        }}
      >
        9
      </div>
    </div>


    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '74px',
          height: '14px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14.235px',
          lineHeight: '100%',
          color: 'rgba(255, 255, 255, 0.6)',
          flex: 'none',
          order: 0,
          flexGrow: 0,
        }}
      >
        Groups
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '20px', 
          height: '20px', 
          borderRadius: '50%',
          backgroundColor: 'darkgrey', 
          color: 'white', 
          fontFamily: 'SF Pro Display',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '20px', 
          marginLeft: '-25px',
        }}
      >
        6
      </div>
    </div>

        {/* Hotels */}
        <div
          style={{
            width: '40px',
            height: '14px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14.235px',
            lineHeight: '100%',
            color: 'rgba(255, 255, 255, 0.6)',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Facebook
        </div>

        {/* Concerts */}
        <div
          style={{
            width: '57px',
            height: '14px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14.235px',
            lineHeight: '100%',
            color: 'rgba(255, 255, 255, 0.6)', 
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Whatsapp
        </div>
      </div>
         </div>


         <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '75px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '53.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f1.jpg) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    overflow: 'hidden', 
  }}
> </div>
{/* Socials - Icon on top of the image */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '17.79px',
      position: 'absolute',
      left: '11.08%',
      top: '73.08%',
      width: '16px',
      height: '16px',
    }}
  >
    {/* SVG Icon */}
    <svg width="40" height="40" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7739 6.6199C12.7739 9.76534 10.4423 12.3657 7.41338 12.7877C7.13017 12.827 6.84041 12.8475 6.54629 12.8475C6.20678 12.8475 5.87339 12.8205 5.54872 12.7681C2.58306 12.2907 0.318237 9.71952 0.318237 6.6199C0.318237 3.18033 3.10672 0.391846 6.54585 0.391846C9.98498 0.391846 12.7739 3.18033 12.7739 6.6199Z"
        fill="#1877F2"
      />
      <path
        d="M7.45505 5.26614V6.6459H9.21476L8.93612 8.50452H7.45505V12.7867C7.15811 12.8266 6.8543 12.8475 6.54592 12.8475C6.18995 12.8475 5.84039 12.82 5.49998 12.7667V8.50452H3.87708V6.6459H5.49998V4.9577C5.49998 3.91034 6.37525 3.06091 7.45551 3.06091V3.0618C7.45871 3.0618 7.46146 3.06091 7.46466 3.06091H9.21522V4.66834H8.07136C7.73141 4.66834 7.45551 4.93595 7.45551 5.26569L7.45505 5.26614Z"
        fill="white"
      />
    </svg>
  </div>


  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
    Alex Linderson
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    How are you today? We need to discuss our trip.
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    2 min ago
  </div>

  {/* Count */}
  <div
    style={{
      position: 'absolute',
      width: '6.23px',
      height: '8.01px',
      left: '309.61px',
      top: '34.7px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    6
  </div>

  {/* SVG Circle */}
  <svg
    style={{
      position: 'absolute',
      width: '17px',
      height: '17px',
      left: '305.16px',
      top: '31.14px',
    }}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8.68104"
      cy="8.72999"
      r="8.00721"
      fill="#F3E3BF"
      fillOpacity="0.5"
    />
  </svg>

  {/* Ellipse 608 */}
  <div
    style={{
      position: 'absolute',
      width: '16.01px',
      height: '16.01px',
      left: '305.16px',
      top: '31.14px',
      background: 'rgba(243, 227, 191, 0.5)',
    }}
  />
        </div>

        <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '100px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '53.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f2.png) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    overflow: 'hidden', 
  }}
/>
{/* Socials - Icon on top of the image */}
<div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '17.79px',
      position: 'absolute',
      left: '11.08%',
      top: '73.08%',
      width: '16px',
      height: '16px',
    }}
  >
    {/* SVG Icon */}
    <svg width="40" height="40" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7739 6.6199C12.7739 9.76534 10.4423 12.3657 7.41338 12.7877C7.13017 12.827 6.84041 12.8475 6.54629 12.8475C6.20678 12.8475 5.87339 12.8205 5.54872 12.7681C2.58306 12.2907 0.318237 9.71952 0.318237 6.6199C0.318237 3.18033 3.10672 0.391846 6.54585 0.391846C9.98498 0.391846 12.7739 3.18033 12.7739 6.6199Z"
        fill="#1877F2"
      />
      <path
        d="M7.45505 5.26614V6.6459H9.21476L8.93612 8.50452H7.45505V12.7867C7.15811 12.8266 6.8543 12.8475 6.54592 12.8475C6.18995 12.8475 5.84039 12.82 5.49998 12.7667V8.50452H3.87708V6.6459H5.49998V4.9577C5.49998 3.91034 6.37525 3.06091 7.45551 3.06091V3.0618C7.45871 3.0618 7.46146 3.06091 7.46466 3.06091H9.21522V4.66834H8.07136C7.73141 4.66834 7.45551 4.93595 7.45551 5.26569L7.45505 5.26614Z"
        fill="white"
      />
    </svg>
  </div>

  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
  Trip to rome
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
Don't forget to attend the meeting.<br/>
We will be waiting for you.
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    12 min ago
  </div>

  {/* Count */}
  <div
    style={{
      position: 'absolute',
      width: '6.23px',
      height: '8.01px',
      left: '309.61px',
      top: '34.7px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    2
  </div>

  {/* SVG Circle */}
  <svg
    style={{
      position: 'absolute',
      width: '17px',
      height: '17px',
      left: '305.16px',
      top: '31.14px',
    }}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8.68104"
      cy="8.72999"
      r="8.00721"
      fill="#F3E3BF"
      fillOpacity="0.5"
    />
  </svg>

  {/* Ellipse 608 */}
  <div
    style={{
      position: 'absolute',
      width: '16.01px',
      height: '16.01px',
      left: '305.16px',
      top: '31.14px',
      background: 'rgba(243, 227, 191, 0.5)',
    }}
  />
        </div>

        <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '130px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '53.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f3.jpg) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    overflow: 'hidden', 
  }}
/>
{/* Socials - Icon on top of the image */}
<div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '17.79px',
      position: 'absolute',
      left: '11.08%',
      top: '73.08%',
      width: '16px',
      height: '16px',
    }}
  >
    {/* SVG Icon */}
   <svg width="40" height="40" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.56025 0.74231H6.53189C3.10018 0.74231 0.318237 3.52426 0.318237 6.95596V6.98433C0.318237 10.416 3.10018 13.198 6.53189 13.198H6.56025C9.99196 13.198 12.7739 10.416 12.7739 6.98433V6.95596C12.7739 3.52426 9.99196 0.74231 6.56025 0.74231Z" fill="url(#paint0_linear_626_1437)"/>
<path d="M8.32388 3.41138H4.76874C3.78657 3.41138 2.98755 4.24589 2.98755 5.27169V8.66859C2.98755 9.69439 3.78657 10.5289 4.76874 10.5289H8.32388C9.30605 10.5289 10.1051 9.69439 10.1051 8.66859V5.27169C10.1051 4.24589 9.30605 3.41138 8.32388 3.41138ZM3.6159 5.27169C3.6159 4.60786 4.13315 4.06764 4.76874 4.06764H8.32388C8.95947 4.06764 9.47672 4.60786 9.47672 5.27169V8.66859C9.47672 9.33242 8.95947 9.87264 8.32388 9.87264H4.76874C4.13315 9.87264 3.6159 9.33242 3.6159 8.66859V5.27169Z" fill="white"/>
<path d="M6.54647 8.74931C7.52738 8.74931 8.32585 7.95127 8.32585 6.96993C8.32585 5.98859 7.52781 5.19055 6.54647 5.19055C5.56513 5.19055 4.76709 5.98859 4.76709 6.96993C4.76709 7.95127 5.56513 8.74931 6.54647 8.74931ZM6.54647 5.86582C7.15559 5.86582 7.65102 6.36124 7.65102 6.97037C7.65102 7.57949 7.15559 8.07491 6.54647 8.07491C5.93735 8.07491 5.44192 7.57949 5.44192 6.97037C5.44192 6.36124 5.93735 5.86582 6.54647 5.86582Z" fill="white"/>
<path d="M8.77028 5.19072C9.01537 5.19072 9.21513 4.99136 9.21513 4.74587C9.21513 4.50038 9.01577 4.30103 8.77028 4.30103C8.5248 4.30103 8.32544 4.50038 8.32544 4.74587C8.32544 4.99136 8.5248 5.19072 8.77028 5.19072Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_626_1437" x1="2.13795" y1="11.3783" x2="10.9542" y2="2.56246" gradientUnits="userSpaceOnUse">
<stop stop-color="#FAAD4F"/>
<stop offset="0.35" stop-color="#DD2A7B"/>
<stop offset="0.62" stop-color="#9537B0"/>
<stop offset="1" stop-color="#515BD4"/>
</linearGradient>
</defs>
</svg>

  </div>


  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
   Sarah A.
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
   Hey can you join the meeting? <br/>
   Must loop you in on a couple of things
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    20 min ago
  </div>

  {/* Count */}
  <div
    style={{
      position: 'absolute',
      width: '6.23px',
      height: '8.01px',
      left: '309.61px',
      top: '34.7px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    1
  </div>

  {/* SVG Circle */}
  <svg
    style={{
      position: 'absolute',
      width: '17px',
      height: '17px',
      left: '305.16px',
      top: '31.14px',
    }}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8.68104"
      cy="8.72999"
      r="8.00721"
      fill="#F3E3BF"
      fillOpacity="0.5"
    />
  </svg>

  {/* Ellipse 608 */}
  <div
    style={{
      position: 'absolute',
      width: '16.01px',
      height: '16.01px',
      left: '305.16px',
      top: '31.14px',
      background: 'rgba(243, 227, 191, 0.5)',
    }}
  />
        </div>


        <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '160px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '53.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f4.jpg) no-repeat center ',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    overflow: 'hidden', 
  }}
/>
{/* Socials - Icon on top of the image */}
<div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '17.79px',
      position: 'absolute',
      left: '11.08%',
      top: '73.08%',
      width: '16px',
      height: '16px',
    }}
  >
    {/* SVG Icon */}
    <svg width="40" height="40" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.56025 0.917603H6.53189C3.10018 0.917603 0.318237 3.69955 0.318237 7.13125V7.15962C0.318237 10.5913 3.10018 13.3733 6.53189 13.3733H6.56025C9.99196 13.3733 12.7739 10.5913 12.7739 7.15962V7.13125C12.7739 3.69955 9.99196 0.917603 6.56025 0.917603Z" fill="#00E510"/>
<path d="M7.76 8.9676C6.1659 8.9676 4.86897 7.67024 4.86853 6.07613C4.86897 5.67204 5.198 5.34344 5.60122 5.34344C5.64267 5.34344 5.68369 5.34694 5.72297 5.35392C5.80937 5.36832 5.89141 5.39756 5.96691 5.44163C5.97782 5.44818 5.98523 5.45865 5.98698 5.47087L6.15542 6.53259C6.1576 6.54524 6.15368 6.55746 6.14539 6.56662C6.05244 6.66961 5.93374 6.7438 5.80152 6.78089L5.73781 6.79878L5.7618 6.86031C5.97912 7.41364 6.42162 7.8557 6.97539 8.07389L7.03692 8.09833L7.05481 8.03462C7.0919 7.90239 7.16608 7.7837 7.26907 7.69075C7.27649 7.68376 7.28653 7.68027 7.29656 7.68027C7.29874 7.68027 7.30093 7.68027 7.30355 7.68071L8.36526 7.84915C8.37792 7.85133 8.38839 7.85832 8.39494 7.86923C8.43858 7.94472 8.46782 8.0272 8.48265 8.1136C8.48963 8.152 8.49269 8.19259 8.49269 8.23491C8.49269 8.63857 8.16409 8.96717 7.76 8.9676Z" fill="#FDFDFD"/>
<path d="M10.5861 6.79596C10.5001 5.82457 10.055 4.92344 9.33277 4.25883C8.60619 3.59029 7.6636 3.22198 6.67782 3.22198C4.51423 3.22198 2.75387 4.98235 2.75387 7.14594C2.75387 7.87208 2.95416 8.57945 3.33338 9.19562L2.48767 11.0677L5.19543 10.7793C5.66628 10.9721 6.16463 11.0699 6.67738 11.0699C6.81222 11.0699 6.95056 11.0629 7.08933 11.0485C7.21151 11.0354 7.33501 11.0162 7.45633 10.9918C9.26819 10.6256 10.5909 9.01758 10.6013 7.16688V7.14594C10.6013 7.02811 10.5961 6.91029 10.5856 6.79596H10.5861ZM5.29972 9.95755L3.80162 10.1173L4.24892 9.12624L4.15945 9.00623C4.15291 8.99751 4.14636 8.98878 4.13895 8.97874C3.75057 8.44243 3.54546 7.8088 3.54546 7.14637C3.54546 5.41917 4.95061 4.01402 6.67782 4.01402C8.29592 4.01402 9.66747 5.27647 9.7997 6.88803C9.80668 6.97444 9.81061 7.06128 9.81061 7.14681C9.81061 7.17125 9.81017 7.19525 9.80973 7.22099C9.77657 8.66586 8.76722 9.89296 7.35508 10.2054C7.2473 10.2294 7.13689 10.2477 7.02692 10.2595C6.91259 10.2726 6.7952 10.2792 6.67869 10.2792C6.26369 10.2792 5.86047 10.1989 5.47951 10.04C5.43718 10.023 5.39572 10.0047 5.35689 9.98591L5.30016 9.95842L5.29972 9.95755Z" fill="#FDFDFD"/>
</svg>


  </div>

  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
   Laith
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
   How are you today?
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    1 hour ago
  </div>


        </div>

        <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '180px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '53.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f5.jpg) no-repeat center ',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    overflow: 'hidden', 
  }}
/>
{/* Socials - Icon on top of the image */}
<div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '17.79px',
      position: 'absolute',
      left: '11.08%',
      top: '76.08%',
      width: '16px',
      height: '16px',
    }}
  >
     {/* Combined SVG Icons */}
  <svg width="40" height="40" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* First path */}
    <path
      d="M12.773 6.32083C12.773 9.46627 10.4415 12.0667 7.4127 12.4887C7.12949 12.5279 6.83975 12.5484 6.54563 12.5484C6.20614 12.5484 5.87276 12.5214 5.5481 12.469C2.58298 11.9916 0.318237 9.42045 0.318237 6.32083C0.318237 2.88126 3.10662 0.0927734 6.54607 0.0927734C9.98552 0.0927734 12.7739 2.88126 12.7739 6.32083H12.773Z"
      fill="#1C1C1B"
    />
    {/* Second path */}
    <path
      d="M1.00467 0.761841L3.75264 4.68752L0.987549 7.87936H1.61004L4.03112 5.08499L5.9871 7.87936H8.10507L5.20262 3.73287L7.7765 0.761841H7.15401L4.92456 3.33539L3.12306 0.761841H1.00508H1.00467ZM1.91982 1.25166H2.8926L7.18908 7.38955H6.21631L1.91982 1.25166Z"
      fill="white"
    />
  </svg>



  </div>

  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
    Sabila Sayma
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
   Have a good day.
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    1 hour ago
  </div>
    </div>


        <div
  style={{
    width: '321.18px',
    height: '49.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '205px',
    gap: '17.79px',
    position: 'relative', 
  }}
>
  {/* Rectangle 1093 */}
  <div
  style={{
    position: 'absolute',
    width: '46.26px',
    height: '46.26px',
    left: '0px',
    top: '0px',
    background: 'url(/images/f0.jpg) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '27.5804px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'SF Pro Display',
    fontSize: '20px',
    fontWeight: 600,
    color: '#FFFFFF',
  }}
>
  ZS
</div>



  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
  Zaheer S.
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    How are you today? We need to discuss our trip.
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    2 min ago
  </div>

        </div>
        <div
  style={{
    width: '321.18px',
    height: '39.82px',
    display: 'flex',
    left: '10px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0px',
    top: '220px',
    gap: '17.79px',
    position: 'relative',
//background: 'linear-gradient(to bottom, #1E1E1E, transparent)', 
  }}
>
  {/* Rectangle 1093 */}
<div
  style={{
    position: 'absolute',
    width: '53.26px',
    height: '45.26px',
    left: '0px',
    top: '0px',
    background: 'linear-gradient(to top, #000 10%, transparent), url(/images/f5.jpg) no-repeat center center',
    backgroundSize: 'cover',
    borderRadius: '25.5804px',
    overflow: 'hidden',
  }}
/>



  {/* Alex Linderson */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '18px',
      left: '60.5px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '17.7938px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    }}
  >
    Sabila Sayma
  </div>

  {/* Message */}
  <div
    style={{
      position: 'absolute',
      width: '217.08px',
      height: '28px',
      left: '60.5px',
      top: '23.13px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12.4557px',
      lineHeight: '110%',
      color: 'rgba(255, 255, 255, 0.6)',
      background: 'linear-gradient(to bottom, #000, transparent)', 
    }}
  >
 Have a good day
  </div>

  {/* Time */}
  <div
    style={{
      position: 'absolute',
      width: '113.88px',
      height: '11px',
      left: '217.3px',
      top: '0px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '10.6763px',
      lineHeight: '11px',
      textAlign: 'right',
      color: 'rgba(255, 255, 255, 0.6)',
    }}
  >
    1 hour ago
  </div>

        </div>
      
        <HeaderWithIcons/>
        </div>
  
      </div>
      <div style={{ marginTop: '1200px' }}>
          <Explore />
        </div>
      <FluidAISection /> 
    </div>
  );
};

export default Messages;
