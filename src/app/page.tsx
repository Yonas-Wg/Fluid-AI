'use client'; // Ensure this is a client-side component

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ToggleIcon from '@mui/icons-material/ToggleOff';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [svgPosition, setSvgPosition] = useState(317); 
  const svgHeight = scrolled ? '75vh' : '553px';

  // Calculate the position for the SVG based on viewport height
  useEffect(() => {
    const handleResize = () => {
      if (scrolled) {
        const newPosition = window.innerHeight * 0.25; 
        setSvgPosition(newPosition);
      } else {
        setSvgPosition(317); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize); 
  }, [scrolled]);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });

    // Change the position to cover half the screen when scrolled up
    const halfScreenHeight = window.innerHeight / 2;
    setSvgPosition(halfScreenHeight);
    setScrolled(true); 
  };

  const handleImageClick = () => {
    // Scroll back to the previous position (or top)
    window.scrollTo({
      top: document.body.scrollHeight, 
      behavior: 'smooth',
    });
    setScrolled(false); 
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh', 
       // overflow: 'hidden', 
        transition: 'background-color 0.01 ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Fluid AI Logo */}
      <main
  style={{
    position: 'absolute',
    left: '50%',
    top: scrolled ? '40%' : '50%', 
    transform: `translate(-50%, -50%) scale(${scrolled ? 0.8 : 1})`,
    transition: 'top 2s ease, transform 0.8s ease', 
  }}
>
        <Image
          src="/images/fluidai.png"
          alt="Fluid AI"
          width={scrolled ? 200 : 841}
          height={scrolled ? 50 : 180} 
          priority
          onClick={handleImageClick} 
        />
      </main>


      {/* Card Image on Scroll */}
      {scrolled && (
     <div
     style={{
       position: 'absolute',
       width: '214.46px',
       height: '278px',
       left: '235px',
       top: '135px',
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
         backgroundColor: 'rgba(0, 0, 0, 0.55)', 
         zIndex: 1, 
         left: scrolled ? '0' : '-15px',
         transition: 'left 0.5s ease-in-out', 
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
              padding: '5.29524px 10.5905px',
              gap: '2.65px',
              position: 'absolute',
              width: '93.18px',
              height: '29.59px',
              left: '10.59px',
              top: '10.59px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(13.2381px)',
              borderRadius: '1323.81px',
              zIndex: 2, // Ensure it overlays the card
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
            height: '25px', // Height for the title
            left: '15.89px',
            top: '213.13px',
            zIndex: 2,
            color: '#FFFFFF', // White text color
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '21.181px',
            lineHeight: '25px', // Set line height to 25px
          }}
        >
          <span>Clap Dubai</span>
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
          left: '15.89px', 
          top: '240px',
          zIndex: 2, 
        }}
      >
        {/* Rating */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16.8857px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          4.4
        </span>

        <span style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px', 
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
            fontSize: '16.8857px',
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
            &bull; {/* This is the dot character */}
          </Typography>
        </span>

        {/* Cuisine Type */}
        <span
          style={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16.8857px',
            lineHeight: '120%', 
            color: 'rgba(255, 255, 255, 0.6)', 
          }}
        >
          Japanese
        </span>

        
      </Box>

    
        </div>
      )}

{scrolled && (
      <Box
        sx={{
          position: 'absolute',
          width: '282.18px',
          height: '93.54px',
          left: scrolled ? '-85px' : '-105px', 
          top: '354px',
          background: 'rgba(38, 38, 38, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24.9443px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'left 0.5s ease-in-out', 
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '18px',
            fontFamily: 'SF Pro Display',
            fontWeight: 400,
          }}
        >
          Car Insurance
        </Typography>
      </Box>

        )}
{scrolled && (
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '282.18px',
            height: '183.96px',
            left: '-7px',
            top: '522px',
            background: 'rgba(38, 38, 38, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24.9443px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          {/* Event Content Wrapped in a Column */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: '10.91px',
              position: 'absolute',
              width: '138.75px',
              height: '88.03px',
              left: '20.71px',
              top: '77.95px',
            }}
          >
            {/* Upcoming Events Title */}
            <Typography
              sx={{
                fontSize: '18px',
                fontFamily: 'SF Pro Display',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Upcoming Events
            </Typography>
            
            {/* Kite Beach Location */}
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'SF Pro Display',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Kite Beach
            </Typography>

            {/* Time and Icon in a Single Row */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5.46px',
                width: '138.75px',
                height: '22px',
              }}
            >
              {/* SVG for Time */}
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3559 20.0768C6.33331 20.0768 2.26166 16.0051 2.26166 10.9825C2.26166 5.95983 6.33331 1.88818 11.3559 1.88818C16.3785 1.88818 20.4502 5.95983 20.4502 10.9825C20.4502 16.0051 16.3785 20.0768 11.3559 20.0768ZM12.2654 10.9825V6.43533H10.4465V12.8013H15.9031V10.9825H12.2654Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>

              {/* Time Text */}
              <Typography
                sx={{
                  fontSize: '14px',
                  fontFamily: 'SF Pro Display',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                10:40 - 14:00
              </Typography>
            </Box>
          </Box>

          <Box
  sx={{
    position: 'absolute',
    top: '18.71px',
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
    left: '8.71px',
  }}
>
  {/* Image 1 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '171.49px', 
      background: 'url(/images/003.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />

  {/* Image 2 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '196.6px', 
      background: 'url(/images/001.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />

  {/* Image 3 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '221.71px',
      background: 'url(/images/002.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />
          </Box>     
    </Box>
      )}
  {scrolled && (
<Box
  sx={{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '13.0769px 26.1538px',
    gap: '13.08px',
    position: 'absolute',
    width: '158.31px',
    height: '51.15px',
    left: '398px',
    top: '655px',
    background: 'rgba(100, 100, 100, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '31.3846px',
  }}
>
  <Typography
    sx={{
      color: '#fff', 
      fontSize: '18px', 
      fontFamily: 'SF Pro Display', 
      fontWeight: 400, 
    }}
  >
    Cafe Nearby
  </Typography>
</Box>
    )}

{scrolled && (
<Box
  sx={{
    boxSizing: 'border-box',
    position: 'absolute',
    width: '282.18px',
    height: '93.54px',
    left: '1020px',
    top: '157px',
    background: 'rgba(38, 38, 38, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24.9443px',
    padding: '18.71px', 
  }}
>
  {/* Next To-Do Text */}
  <Typography
    sx={{
      position: 'absolute',
      width: '190px',
      height: '22px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18.7082px',
      lineHeight: '120%',
      color: 'rgba(255, 255, 255, 0.6)',
      marginBottom: '10px',
    }}
  >
    Next To-Do
  </Typography>

  {/* Renew Car Insurance Text */}
  <Typography
    sx={{
      position: 'absolute',
      width: '221px',
      height: '30px',
      left: '18.71px',
      top: '46.77px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24.9443px',
      lineHeight: '120%',
      color: '#FFFFFF',
    }}
  >
    Renew Car Insurance
  </Typography>
</Box>
    )}
{scrolled && (
  <Box
    sx={{
      boxSizing: 'border-box',
      position: 'absolute',
      width: '282.18px',
      height: '183.96px',
      left: '1201px',  // Updated position
      top: '287px',    // Updated position
      background: 'rgba(38, 38, 38, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24.9443px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px',
    }}
  >
    {/* Event Content Wrapped in a Column */}
    <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: '10.91px',
              position: 'absolute',
              width: '138.75px',
              height: '88.03px',
              left: '20.71px',
              top: '77.95px',
            }}
          >
            {/* Upcoming Events Title */}
            <Typography
              sx={{
                fontSize: '18px',
                fontFamily: 'SF Pro Display',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Upcoming Events
            </Typography>
            
            {/* Kite Beach Location */}
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'SF Pro Display',
                fontWeight: 300,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Kite Beach
            </Typography>

            {/* Time and Icon in a Single Row */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5.46px',
                width: '138.75px',
                height: '22px',
              }}
            >
              {/* SVG for Time */}
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3559 20.0768C6.33331 20.0768 2.26166 16.0051 2.26166 10.9825C2.26166 5.95983 6.33331 1.88818 11.3559 1.88818C16.3785 1.88818 20.4502 5.95983 20.4502 10.9825C20.4502 16.0051 16.3785 20.0768 11.3559 20.0768ZM12.2654 10.9825V6.43533H10.4465V12.8013H15.9031V10.9825H12.2654Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>

              {/* Time Text */}
              <Typography
                sx={{
                  fontSize: '14px',
                  fontFamily: 'SF Pro Display',
                  fontWeight: 300,
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                10:40 - 14:00
              </Typography>
            </Box>
          </Box>

    {/* Images Section */}
    <Box
  sx={{
    position: 'absolute',
    top: '18.71px',
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
    left: '8.71px',
  }}
>
  {/* Image 1 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '171.49px', 
      background: 'url(/images/003.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />

  {/* Image 2 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '196.6px', 
      background: 'url(/images/001.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />

  {/* Image 3 */}
  <Box
    sx={{
      width: '41.55px',
      height: '41.82px',
      left: '221.71px',
      background: 'url(/images/002.jpg)', 
      backgroundSize: 'cover',
      position: 'absolute',
      borderRadius: '50%',
    }}
  />
          </Box>
  </Box>
)}
{scrolled && (
<Box
  sx={{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '13.0769px 26.1538px',
    gap: '13.08px',
    position: 'absolute',
    width: '161.31px',
    height: '51.15px',
    left: '1345px', 
    top: '522px',   
    background: 'rgba(38, 38, 38, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '31.3846px',
    cursor: 'pointer', 
    '&:hover': {
      background: 'rgba(38, 38, 38, 0.3)',
    },
  }}
>
  <Typography
    sx={{
      fontSize: '16px',
      fontFamily: 'SF Pro Display',
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.9)', 
    }}
  >
    Book a Flight
  </Typography>
</Box>
)}

{scrolled && (
<Box
  sx={{
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '13.0769px 26.1538px',
    gap: '13.08px',
    position: 'absolute',
    width: '136.31px',
    height: '51.15px',
    left: '1316px',
    top: '591px',  
    background: 'rgba(38, 38, 38, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(13.0769px)',
    borderRadius: '31.3846px',
    cursor: 'pointer', 
    '&:hover': {
      background: 'rgba(38, 38, 38, 0.2)', 
    },
  }}
>
  <Typography
    sx={{
      fontSize: '16px',
      fontFamily: 'SF Pro Display',
      fontWeight: 500,
      color: 'rgba(255, 255, 255, 0.9)', 
    }}
  >
    Trip Ideas
  </Typography>
</Box>
)}

{scrolled && (
 <Box
 sx={{
   position: 'absolute',
   width: '268.15px',
   height: '289.98px',
   left: '990px',
   top: ' 655px',
   backgroundImage: 'url(/images/02.jpg)', 
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '24.9443px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   padding: '10px',
 }}
>
 {/* Dark overlay with transition effect */}
 <div
   style={{
     position: 'absolute',
     width: '100%',
     height: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.1)',
     zIndex: 1,
     left: '0', 
     transition: 'left 0.5s ease-in-out', 
   }}
 />
 {/* Reservations Text */}
 <Typography
    sx={{

      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '15.7082px',
      lineHeight: '120%',
      color: 'rgba(255, 255, 255, 0.6)', 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      left:'-14px',
      paddingTop: 27,
      gap: '6.24px',
      position: 'relative', 
      width: '149.06px',
      height: '22.55px',
    }}
  >
    Reservations
  </Typography>

  {/* Restaurant Name */}
  <Typography
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      left:'15px',
      paddingTop: 2,
      gap: '6.24px',
      position: 'relative', 
      width: '149.06px',
      height: '22.55px',
      fontFamily: 'SF Pro Display',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '17.9443px',
      lineHeight: '120%',
    }}
  >
    Restaurant Le Bous
  </Typography>

  {/* Date and Time Row */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      gap: '6.24px',
      position: 'relative', 
      width: '126.06px',
      height: '22.55px',
      marginTop: 'auto', 
    }}
  >
    {/* SVG Icon */}
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6218 20.359C6.59911 20.359 2.52747 16.2873 2.52747 11.2647C2.52747 6.24206 6.59911 2.17041 11.6218 2.17041C16.6443 2.17041 20.716 6.24206 20.716 11.2647C20.716 16.2873 16.6443 20.359 11.6218 20.359ZM12.5312 11.2647V6.71755H10.7123V13.0836H16.1689V11.2647H12.5312Z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>

    {/* Date and Time Text */}
    <Typography
      sx={{
        fontFamily: 'SF Pro Display',
        fontWeight: 300,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
        lineHeight: '22px',
      }}
    >
      4 Oct 20:00
    </Typography>
  </Box>
</Box>

)}

{scrolled && (
  <Box
    sx={{
      position: 'absolute',
      width: '398px',
      height: '217.19px',
      left: '262px',
      top: '770px',
      background: 'linear-gradient(180deg, #123456 0%, #654321 100%)', // Example gradient
      borderRadius: '24.9443px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px',
      overflow: 'hidden',
    }}
  >
    {/* Dubai */}
    <Typography
      sx={{
        position: 'absolute',
        left: '22.05px',
        top: '22.05px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '13.2299px',
        color: '#FFFFFF',
        opacity: 0.6,
      }}
    >
      Dubai
    </Typography>

    {/* Emirates Airlines */}
    <Typography
      sx={{
        position: 'absolute',
        left: 'calc(50% - 92px/2 - 0.31px)',
        top: '22.05px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '13.2299px',
        color: '#FFFFFF',
      }}
    >
      Emirates Airlines
    </Typography>

    {/* Paris */}
    <Typography
      sx={{
        position: 'absolute',
        right: '22.05px',
        top: '22.05px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '13.2299px',
        color: '#FFFFFF',
        opacity: 0.6,
      }}
    >
      Paris
    </Typography>

    {/* DXB */}
    <Typography
      sx={{
        position: 'absolute',
        left: '22.05px',
        top: '63.94px',
        fontFamily: 'SF Pro Display',
        fontWeight: 500,
        fontSize: '30.8698px',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
      }}
    >
      DXB
    </Typography>

    {/* Oct 4, 8:20 */}
    <Typography
      sx={{
        position: 'absolute',
        left: '22.05px',
        top: '98.12px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '11.0249px',
        color: '#FFFFFF',
        opacity: 0.6,
      }}
    >
      Oct 4, 8:20
    </Typography>

    {/* SVG for dashed line */}
    <svg
      width="196"
      height="48"
      viewBox="0 0 196 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: '50.57px',
        left: 'calc(50% - 195.38px/2)',
      }}
    >
      <path
        d="M181.789 33.7896C109.454 -5.50896 42.454 13.5086 12.9998 30.4343"
        stroke="white"
        strokeWidth="1.0161"
        strokeDasharray="6.1 6.1"
      />
    </svg>

    {/* CDG */}
    <Typography
      sx={{
        position: 'absolute',
        right: '22.05px',
        top: '63.94px',
        fontFamily: 'SF Pro Display',
        fontWeight: 500,
        fontSize: '30.8698px',
        color: '#FFFFFF',
        textAlign: 'right',
      }}
    >
      CDG
    </Typography>

    {/* 4 Oct, 13:30 */}
    <Typography
      sx={{
        position: 'absolute',
        right: '22.05px',
        top: '98.12px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '11.0249px',
        color: '#FFFFFF',
        opacity: 0.6,
        textAlign: 'right',
      }}
    >
      4 Oct, 13:30
    </Typography>

    {/* Flight */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: '22.05px',
        top: '163.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      Flight
    </Typography>

    {/* Flight Number EK073 */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: '22.05px',
        top: '183.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      EK073
    </Typography>

    {/* Class */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: '99.22px',
        top: '163.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      Class
    </Typography>

    {/* Class Type Guest */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: '99.22px',
        top: '183.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      Guest
    </Typography>

    {/* Aircraft */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: 'calc(50% - 50.71px/2 + 2.2px)',
        top: '163.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      Aircraft
    </Typography>

    {/* Aircraft Type A380 */}
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        width: '50.71px',
        height: '32.64px',
        left: 'calc(50% - 50.71px/2 + 2.2px)',
        top: '183.17px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '14px',
        color: '#FFFFFF',
      }}
    >
      A380
    </Typography>

    {/* Non-Stop */}
    <Typography
      sx={{
        position: 'absolute',
        width: '55px',
        height: '16px',
        left: 'calc(50% - 55px/2 - 0.06px)',
        top: 'calc(50% - 16px/2 + 2.89px)',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '13.2299px',
        textAlign: 'center',
        color: '#FFFFFF',
        opacity: 0.6,
      }}
    >
      Non-Stop
    </Typography>

    {/* 7 hours 10 mins */}
    <Typography
      sx={{
        position: 'absolute',
        width: '88px',
        height: '16px',
        left: '287.75px',
        top: '179.71px',
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '13.2299px',
        color: '#FFFFFF',
        opacity: 0.6,
      }}
    >
      7 hours 10 mins
    </Typography>
  </Box>
)}

  
      {/* SVG Image with effect and custom styles */}
      <div
        style={{
          position: 'absolute',
          width: '2540px',
          height: '553px',
          left: '56.73px',
          top: `${svgPosition}px`,
          zIndex: -1,
          transition: 'top 0.8s ease',
        }}
      >
        <svg width="2540" height={svgHeight} viewBox="0 0 2540 553" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_2_4077)">
            <path
              d="M1002.35 344.926C1166.01 346.441 1266.8 330.667 1325.97 311.048C1381.92 292.5 1431.27 242.545 1483.45 215.121L1549.74 180.273C1616.59 145.133 1698.83 180.573 1719.19 253.302C1726.08 277.892 1725.25 304.097 1714.06 327.052C1631.83 495.773 1371.25 813.138 851.844 975.618C292.822 1150.49 93.3418 948.145 63.4797 825.112C51.5347 705.663 46.9956 442.397 124.399 344.926C176.265 279.613 259.991 257.85 328.997 254.193C386.099 251.168 441.172 270.416 496.474 284.957C599.363 312.009 774.114 342.813 1002.35 344.926Z"
              fill="#B76E4D" 
            />
          </g>
          <defs>
            <filter id="filter0_f_2_4077" x="-109.195" y="0.665665" width="1998.7" height="1209.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="82.9604" result="effect1_foregroundBlur_2_4077" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* "Unlock Seamless Efficiency" text */}
      {scrolled && (
        <h1
          style={{
            position: 'absolute',
            width: '668px',
            height: '176px',
            left: '50%', 
            top: '403.15px', 
            transform: 'translateX(-50%)',
            fontFamily: "'SF Pro Display', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '80px',
            lineHeight: '110%',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            transition: 'opacity 0.8s easeout',
            opacity: 1, 
          }}
        >
          Unlock Seamless Efficiency
        </h1>
      )}

            {/* Join Waitlist button */}
            {scrolled && (
        <button
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '18px 0px',
            gap: '10px',
            position: 'absolute',
            width: '167px',
            height: '52px',
            left: '50%', 
            top: '611.15px',
            transform: scrolled ? 'translateX(-50%)' : 'translateX(-50%) translateY(20px)', 
            background: '#FFFFFF',
            boxShadow: '0px 5px 30px rgba(255, 255, 255, 0.61)',
            borderRadius: '52px',
            border: 'none',
            cursor: 'pointer', 
            fontFamily: "'SF Pro Display', sans-serif",
            fontSize: '16px', 
            color: '#000000', 
            transition: 'transform 0.8s ease-out, background 0.3s ease', 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f0f0'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF'; 
          }}
        >
          Join Waitlist
        </button>
      )}


      {/* Scroll Up Button */}
      {!scrolled && (
        <button
          onClick={handleScrollUp}
          style={{
            position: 'fixed',
            bottom: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            outline: 'none',
            fontSize: '24px',
            color: '#fff',
          }}
        >
          🖱️ Scroll Up
        </button>
      )}

      {/* Top Navigation */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '32px',
          alignItems: 'center',
        }}
      >
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ textDecoration: 'none', fontSize: '18px' }}>
            What we believe
          </a>
          <a href="#" style={{ textDecoration: 'none', fontSize: '18px' }}>
            Our Features
          </a>
        </nav>
        <nav style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ textDecoration: 'none', fontSize: '18px' }}>
            Our Story
          </a>
          <a href="#" style={{ textDecoration: 'none', fontSize: '18px' }}>
            The Waitlist
          </a>
        </nav>
      </header>
    </div>
  );
}
