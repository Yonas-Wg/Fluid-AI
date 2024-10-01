'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ToggleIcon from '@mui/icons-material/ToggleOff';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import FlightInfoDisplay from './components/newticket';
import Upcoming from './components/upcoming';
import Link from 'next/link';
import Footer from './components/footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [svgPosition, setSvgPosition] = useState(317); 
  const svgHeight = scrolled ? '115vh' : '553px';

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
              zIndex: 2, 
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
            top: '213.13px',
            zIndex: 2,
            color: '#FFFFFF', 
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '21.181px',
            lineHeight: '25px', 
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
         <Upcoming scrolled={scrolled}/>   
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
      left: '1201px', 
      top: '287px',    
      background: 'rgba(38, 38, 38, 0.3)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '24.9443px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px',
    }}
  >
   <Upcoming scrolled={scrolled}/>
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
   zIndex: 0,
 }}
>
 {/* Dark overlay with transition effect */}
 <div
   style={{
     position: 'absolute',
     width: '100%',
     height: '96.5%',
     backgroundColor: 'rgba(0, 0, 0, 0.2)',
     zIndex: 1,
     borderRadius: '24.9443px',
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
      fontSize: '14.7082px',
      lineHeight: '22.45px',
      color: '#FFFFFF', 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      left:'-28px',
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
      left:'5px',
      paddingTop: 2,
      gap: '6.24px',
      position: 'relative', 
      color: '#FFFFFF', 
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
      left:'-9px',
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

<FlightInfoDisplay scrolled={scrolled} />

  
      {/* SVG Image with effect and custom styles */}
      <div
        style={{
          position: 'absolute',
          width: '2580px',
          height: '553px',
          left: '56.73px',
          top: `${svgPosition}px`,
          zIndex: -1,
          transition: 'top 0.8s ease',
        }}
      >
        <svg width="2900" height={svgHeight} viewBox="0 0 2540 553" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <Link href="/JoinWaitlistPage">
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
        </Link>
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
