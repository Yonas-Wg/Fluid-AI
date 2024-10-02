import React from 'react';
import { Box, Typography } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HeaderWithIcons from '../components/HomeIcon';
import FluidAISection from '../components/FluidAISection';
import FullPageLayout from '../services/page';
/* eslint-disable-next-line @typescript-eslint/prefer-as-const */
const Explore = () => {
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
              Explore
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
              {/* Circle SVG wrapping the smaller icon */}
              <svg
                width="37"
                height="36"
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
          gap: '21.35px',
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

        {/* Restaurants */}
        <div
          style={{
            width: '74px',
            height: '14px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14.235px',
            lineHeight: '100%',
            color: 'rgba(255, 255, 255, 0.6)', // White 60%
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Restaurants
        </div>

        {/* Night clubs */}
        <div
          style={{
            width: '70px',
            height: '14px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '14.235px',
            lineHeight: '100%',
            color: 'rgba(255, 255, 255, 0.6)', // White 60%
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Night clubs
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
            color: 'rgba(255, 255, 255, 0.6)', // White 60%
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Hotels
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
            color: 'rgba(255, 255, 255, 0.6)', // White 60%
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          Concerts
        </div>
      </div>
    </div>


    <div
  style={{
    position: 'absolute',
    width: '553.39px',
    height: '2.67px',
    left: 'calc(53% - 573.39px/2 + 94.75px)',
    top: '194.91px',
  }}
>
  <div
    style={{
      position: 'absolute',
      width: '16.9px',
      height: '1.78px',
      left: '14.24px',
      top: '24.91px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8.8969px',
    }}
  />
</div>

<div
  style={{
    position: 'absolute',
    width: '553.39px',
    height: '0px',
    left: 'calc(50% - 553.39px/2 + 94.75px)',
    top: '222.58px',
    border: '0.88969px solid rgba(255, 255, 255, 0.2)',
  }}
/>
<div
  style={{
    width: '111px',
    height: '18px',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20.7938px',
    lineHeight: '100%',
    marginTop: '22%', 
    marginLeft:'15px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  }}
>
  Recommended
</div>

<div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '14.24px',
    position: 'absolute',
    width: '335.41px',
    height: '186.83px',
    left: '20.24px',
    top: '308.17px',
    backgroundColor: '#000', 
    //overflowX: 'scroll',
  }}
>
  
  {/* Card Image on Scroll */}
  <div
     style={{
       position: 'absolute',
       width: '154.46px',
       height: '188px',
       left: '-15px',
       transition: 'left 2s ease-in, left 2.4s ease-out', 
       top: '0px',
       borderRadius: '15.8857px',
       overflow: 'hidden', 
       zIndex: 1,
     }}
   >
     <div
       style={{
         width: '100%',
         height: '100%',
         background: `url('/images/01.jpg'), url('/path/to/Uzhin-v-Dubae-skolko-stoit-idei-otzyvy.jpg')`,
         backgroundSize: 'cover',
         position: 'absolute',
         top: 0,
         left: 0,
         zIndex: 0,
       }}
     />
     <div
       style={{
         position: 'absolute',
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.35)', 
         zIndex: 1, 
         left:   '0px',
      //   transition: 'left 0.5s ease-in-out', 
       }}
     />
          {/* Restaurant Label */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.29524px 10.5905px',
              gap: '2.65px',
              position: 'absolute',
              width: '73.18px',
              height: '19.59px',
              left: '5.59px',
              fontSize:'11px',
              top: '10.59px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(13.2381px)',
              borderRadius: '123.81px',
              zIndex: 1, 
            }}
          >
            Restaurant
          </div>

          {/* Toggle Icon */}
          <div
            style={{
              position: 'absolute',
              left: '75.67%',
              top: '2.5%',
            //  background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%', 
              zIndex: 2, 
              width: '40px', 
              height: '40px', 
            }}
          >
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <FormatListBulletedIcon />
            </span>
          </div>

          {/* Frame Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '5.3px',
            position: 'absolute',
            width: '182.69px',
            height: '25px', 
            left: '15.89px',
            top: '143.13px',
            zIndex: 2,
            color: '#FFFFFF', 
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.181px',
            lineHeight: '25px', 
          }}
        >
          <span>Ce lA LI</span>
        </Box>

      {/* Additional Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '5.3px', 
          width: '263.03px',
          height: '19px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          position: 'absolute', 
          left: '7.89px', 
          top: '166px',
          zIndex: 2, 
        }}
      >
        {/* Rating */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          5.0
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '10px', 
              lineHeight: '1', 
            }}
          >
            &bull; {/* This is the dot character */}
          </Typography>
        </span>

        {/* Price */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          $$$$
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px', 
              lineHeight: '1', 
            }}
          >
            &bull; 
          </Typography>
        </span>

        {/* Cuisine Type */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          Asian
        </span>

        
      </Box>

 </div>

 //////

 <div
     style={{
       position: 'absolute',
       width: '154.46px',
       height: '188px',
       left: '150px',
       transition: 'left 2s ease-in, left 2.4s ease-out', 
       top: '0px',
       borderRadius: '15.8857px',
       overflow: 'hidden', 
       zIndex: 1,
     }}
   >
     <div
  style={{
    width: '100%',
    height: '100%',
    background: `url('/images/BLU.png'), url('/path/to/Uzhin-v-Dubae-skolko-stoit-idei-otzyvy.jpg')`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    left: 0,
    zIndex: 0,
  }}
/>

     <div
       style={{
         position: 'absolute',
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.35)', 
         zIndex: 1, 
         left:   '0px',
      //   transition: 'left 0.5s ease-in-out', 
       }}
     />
          {/* Restaurant Label */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.29524px 10.5905px',
              gap: '2.65px',
              position: 'absolute',
              width: '73.18px',
              height: '19.59px',
              left: '5.59px',
              fontSize:'11px',
              top: '10.59px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(13.2381px)',
              borderRadius: '123.81px',
              zIndex: 1, 
            }}
          >
            Night Club
          </div>

          {/* Toggle Icon */}
          <div
            style={{
              position: 'absolute',
              left: '75.67%',
              top: '2.5%',
            //  background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%', 
              zIndex: 2, 
              width: '40px', 
              height: '40px', 
            }}
          >
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <FormatListBulletedIcon />
            </span>
          </div>

          {/* Frame Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '5.3px',
            position: 'absolute',
            width: '182.69px',
            height: '25px', 
            left: '15.89px',
            top: '143.13px',
            zIndex: 2,
            color: '#FFFFFF', 
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.181px',
            lineHeight: '25px', 
          }}
        >
          <span>BLU Dubai</span>
        </Box>

      {/* Additional Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '5.3px', 
          width: '263.03px',
          height: '19px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          position: 'absolute', 
          left: '7.89px', 
          top: '166px',
          zIndex: 2, 
        }}
      >
        {/* Rating */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
         4.9
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '10px', 
              lineHeight: '1', 
            }}
          >
            &bull; {/* This is the dot character */}
          </Typography>
        </span>

        {/* Price */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
         260 Sheikh
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px', 
              lineHeight: '1', 
            }}
          >
            &bull; 
          </Typography>
        </span>

        {/* Cuisine Type */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          Zayed Rd
        </span>

        
      </Box>

    
 </div>

 /////

 <div
     style={{
       position: 'absolute',
       width: '154.46px',
       height: '188px',
       left: '315px',
       transition: 'left 2s ease-in, left 2.4s ease-out', 
       top: '0px',
       borderRadius: '15.8857px',
       overflow: 'hidden', 
       zIndex: 1,
     }}
   >
     <div
       style={{
         width: '100%',
         height: '100%',
         background: `url('/images/Dubai.png'), url('/path/to/Uzhin-v-Dubae-skolko-stoit-idei-otzyvy.jpg')`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         position: 'absolute',
         top: 0,
         left: 0,
         zIndex: 0,
       }}
     />
     <div
       style={{
         position: 'absolute',
         width: '100%',
         height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.35)', 
         zIndex: 1, 
         left:   '0px',
      //   transition: 'left 0.5s ease-in-out', 
       }}
     />
          {/* Restaurant Label */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0.29524px 10.5905px',
              gap: '2.65px',
              position: 'absolute',
              width: '73.18px',
              height: '19.59px',
              left: '5.59px',
              fontSize:'11px',
              top: '10.59px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(13.2381px)',
              borderRadius: '123.81px',
              zIndex: 1, 
            }}
          >
            Restaurant
          </div>

          {/* Toggle Icon */}
          <div
            style={{
              position: 'absolute',
              left: '75.67%',
              top: '2.5%',
            //  background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%', 
              zIndex: 2, 
              width: '40px', 
              height: '40px', 
            }}
          >
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <FormatListBulletedIcon />
            </span>
          </div>

          {/* Frame Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '5.3px',
            position: 'absolute',
            width: '182.69px',
            height: '25px', 
            left: '15.89px',
            top: '143.13px',
            zIndex: 2,
            color: '#FFFFFF', 
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.181px',
            lineHeight: '25px', 
          }}
        >
          <span>Al M</span>
        </Box>

      {/* Additional Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '5.3px', 
          width: '263.03px',
          height: '19px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          position: 'absolute', 
          left: '7.89px', 
          top: '166px',
          zIndex: 2, 
        }}
      >
        {/* Rating */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
        4.8
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '10px', 
              lineHeight: '1', 
            }}
          >
            &bull; {/* This is the dot character */}
          </Typography>
        </span>

        {/* Price */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          $$$$
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px', 
              lineHeight: '1', 
            }}
          >
            &bull; 
          </Typography>
        </span>

        {/* Cuisine Type */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          Asian
        </span>

        
      </Box>

 </div>
  
</div>

<div
  style={{
    width: '137px',
    height: '18px',
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18.7938px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    marginTop:'280px',
    marginLeft:'15px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  }}
>
  Recently viewed
</div>

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    gap: '10.68px',
    marginLeft:'10px',
    width: '321.18px',
    height: '88.97px',
  }}
>
  {/* Image Section */}
  <div
    style={{
      width: '88.97px',
      height: '88.97px',
      background: `url('/images/img3.png') center / cover no-repeat`,
      borderRadius: '11.1616px',
      flex: 'none',
      order: 0,
      flexGrow: 0,
    }}
  />

  {/* Text Section */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 'none',
      order: 0,
      flexGrow: 0,
    }}
  >
    {/* Title */}
    <div
      style={{
        width: '191.2px',
        height: '17px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14.235px',
        lineHeight: '120%',
        color: '#FFFFFF',
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    >
      Zuma
    </div>
  {/* Additional Info */}
  <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: '8px',
          gap: '5.3px', 
          width: '263.03px',
          height: '19px',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          position: 'absolute', 
        //  left: '7.89px', 
         // top: '166px',
          zIndex: 2, 
        }}
      >
        {/* Rating */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
       4.1
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '10px', 
              lineHeight: '1', 
            }}
          >
            &bull; {/* This is the dot character */}
          </Typography>
        </span>

        {/* Price */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
      Restaurant
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px', 
              lineHeight: '1', 
            }}
          >
            &bull; 
          </Typography>
        </span>

        {/* Cuisine Type */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
         $$$$
        </span>

        
      </Box>
    {/* Subtitle Section */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        gap: '3.56px',
        width: '107.79px',
        height: '15px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
      }}
    >
       <div style={
        {color:'#fff'}
       }> <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.18086 8.03693L4.87803 11.3397L1.57522 8.03693C-0.248869 6.2128 -0.248869 3.25539 1.57522 1.4313C3.39931 -0.39279 6.35672 -0.39279 8.18086 1.4313C10.0049 3.25539 10.0049 6.2128 8.18086 8.03693ZM4.87803 5.77208C5.4513 5.77208 5.916 5.30738 5.916 4.73411C5.916 4.16085 5.4513 3.69613 4.87803 3.69613C4.30476 3.69613 3.84006 4.16085 3.84006 4.73411C3.84006 5.30738 4.30476 5.77208 4.87803 5.77208Z" fill="white" fill-opacity="0.4"/>
</svg></div>

      {/* Subtitle Text */}
      <div
        style={{
          width: '132px',
          height: '15px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12.4557px',
          lineHeight: '120%',
          textAlign: 'left',
          color: 'rgba(255, 255, 255, 0.6)',
          flex: 'none',
          order: 1,
          flexGrow: 0,
        }}
      >
        DIFC Gate Village 3
      </div>
    </div>
  </div>
</div>

<div
  style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    marginLeft:'10px',
    gap: '10.68px',
    width: '321.18px',
    height: '88.97px',
  }}
>
<div
  style={{
    width: '88.97px',
    height: '30.97px',
    background: `url('/images/img4.png') center / cover no-repeat`, 
    borderRadius: '8.1616px',
    flex: 'none',
    order: 0,
    flexGrow: 0,
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)', 
      borderRadius: '8.1616px', 
    }}
  />
</div>


  {/* Text Section */}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 'none',
      order: 0,
      flexGrow: 0,
    }}
  >
    {/* Title */}
    <div
      style={{
        width: '191.2px',
        height: '17px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14.235px',
        lineHeight: '120%',
        color: '#FFFFFF',
        flex: 'none',
        order: 0,
        alignSelf: 'stretch',
        flexGrow: 0,
      }}
    >
      Ameli
    </div>
 

  </div>
</div>

<HeaderWithIcons/>

      
        </div>
      </div>
      
      <FluidAISection /> 
      <div style={{ marginTop: '1200px', width: '100vw', display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '100%', maxWidth: '2200px' }}>
    <FullPageLayout />
  </div>
</div>

    </div>
  );
};

export default Explore;
