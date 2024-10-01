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
  const [svgPosition, setSvgPosition] = useState(0); 
  const svgHeight = scrolled ? '188vh' : '1650px';

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
       overflowX: 'hidden',
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
        transition: 'top 3s ease, transform 0.9s ease', 
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
           <div
     style={{
       position: 'absolute',
       width: '214.46px',
       height: '278px',
       left: scrolled ? '235px' : '-235px',
       transition: 'left 3s ease-in, left 1s ease-out', 
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
         backgroundColor: 'rgba(0, 0, 0, 0.35)', 
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
      

      <Box
        sx={{
          position: 'absolute',
          width: '282.18px',
          height: '93.54px',
          top: '354px',
          background: 'rgba(38, 38, 38, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24.9443px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          left: scrolled ? '-85px' : '-285px', 
          transition: 'left 3s ease-in, left 1s ease-out', 
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

        
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '282.18px',
            height: '183.96px',
            left: scrolled ? '-7px' : '-325px', 
            transition: 'left 3s ease-in, left 1s ease-out', 
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
    left: scrolled ? '398px' : '-398px', 
    transition: 'left 3s ease-in, left 1s ease-out', 
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



<Box
  sx={{
    boxSizing: 'border-box',
    position: 'absolute',
    width: '282.18px',
    height: '93.54px',
    left: scrolled ? '1020px' : '1901px', 
    transition: 'left 3s ease-in, left 1s ease-out', 
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


  <Box
    sx={{
      boxSizing: 'border-box',
      position: 'absolute',
      width: '282.18px',
      height: '183.96px',
      left: scrolled ? '1201px' : '1901px', 
      transition: 'left 3s ease-in, left 1s ease-out', 
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
    left: scrolled ? '1345px' : '1945px', 
    transition: 'left 3s ease-in, left 1s ease-out', 
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
    left: scrolled ? '1316px' : '1901px', 
    transition: 'left 3s ease-in, left 1s ease-out', 
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



 <Box
 sx={{
   position: 'absolute',
   width: '268.15px',
   height: '289.98px',
   left: scrolled ? '990px' : '1990px', 
    transition: 'left 3s ease-in, left 1s ease-out', 
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



<FlightInfoDisplay scrolled={scrolled} />

  
      {/* SVG Image with effect and custom styles */}
      <div
        style={{
          position: 'absolute',
          width: '2580px',
          height: '553px',
          left: '-10px',
         // top: `${svgPosition}px`,
          top: scrolled ? '60px' : `${svgPosition}px`, 
          zIndex: -1,
          transition: 'top 0.8s ease',
        }}
      >
        
        <svg width="1840" height={svgHeight} viewBox="0 0 1540 1210" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2_2515)">
<path d="M942.351 344.926C1106.01 346.441 1206.8 330.667 1265.97 311.048C1321.92 292.5 1371.27 242.545 1423.45 215.121L1489.74 180.273C1556.59 145.133 1638.83 180.573 1659.19 253.302C1666.08 277.892 1665.25 304.097 1654.06 327.052C1571.83 495.773 1311.25 813.138 791.844 975.618C232.822 1150.49 33.3418 948.145 3.47967 825.112C-8.46529 705.663 -13.0044 442.397 64.3987 344.926C116.265 279.613 199.991 257.85 268.997 254.193C326.099 251.168 381.172 270.416 436.474 284.957C539.363 312.009 714.114 342.813 942.351 344.926Z" fill="#612B10"/>
</g>
<defs>
<filter id="filter0_f_2_2515" x="-169.195" y="0.665909" width="1998.7" height="930.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="82.9604" result="effect1_foregroundBlur_2_2515"/>
</filter>
</defs>

<g filter="url(#filter0_f_2_2516)">
<path d="M964.335 344.935C1128 346.45 1228.78 330.676 1287.96 311.057C1343.9 292.508 1393.26 242.554 1445.43 215.13L1511.73 180.282C1578.58 145.141 1660.81 180.582 1681.18 253.31C1688.06 277.9 1687.23 304.106 1676.04 327.061C1593.81 495.782 1333.23 813.146 813.829 975.627C254.806 1150.5 55.3262 948.154 25.464 825.121C13.5191 705.671 8.97997 442.405 86.3831 344.935C138.25 279.621 221.975 257.859 290.982 254.202C348.084 251.176 403.156 270.425 458.459 284.965C561.348 312.017 736.098 342.821 964.335 344.935Z" fill="#E48F4C"/>
</g>
<defs>
<filter id="filter0_f_2_2516" x="-147.211" y="0.674454" width="1698.7" height="930.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="82.9604" result="effect1_foregroundBlur_2_2516"/>
</filter>
</defs>


<g filter="url(#filter0_f_2_2517)" transform="translate(0, 500)">
<path d="M992.573 321.971C1135.59 323.296 1223.66 309.511 1275.37 292.367C1324.26 276.159 1367.39 232.506 1412.98 208.542L1470.91 178.09C1529.33 147.382 1601.19 178.352 1618.98 241.906C1625 263.394 1624.27 286.293 1614.5 306.352C1542.64 453.788 1314.93 731.117 861.053 873.1C372.552 1025.91 198.237 849.093 172.142 741.581C161.704 637.2 157.738 407.146 225.376 321.971C268.017 268.276 335.299 248.265 393.329 243.423C450.313 238.669 505.582 258.304 561.031 272.274C652.092 295.216 800.705 320.195 992.573 321.971Z" fill="#F3C78B"/>
</g>
<defs>
<filter id="filter0_f_2_2517" x="10.319473" y="10.209122" width="1698.7" height="420.07" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="82.9604" result="effect1_foregroundBlur_2_2517"/>
</filter>
</defs>
</svg>
      </div>

      {/* "Unlock Seamless Efficiency" text */}
  <h1
    style={{
      position: 'absolute',
      width: '668px',
      height: '176px',
      left: '50%',  
      transform: 'translateX(-50%)',
      fontFamily: "'SF Pro Display', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '80px',
      lineHeight: '110%',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
      transition: 'top 0.8s ease-out, opacity 0.8s ease-out', 
      opacity: scrolled ? 1 : 0,
      top: scrolled ? '403.15px' : '603.15px', 
    }}
  >
    Unlock Seamless Efficiency
  </h1>


            {/* Join Waitlist button */}
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
            transform: scrolled ? 'translateX(-50%)' : 'translateX(-50%) translateY(20px)', 
            background: '#FFFFFF',
            boxShadow: '0px 5px 30px rgba(255, 255, 255, 0.61)',
            borderRadius: '52px',
            border: 'none',
            cursor: 'pointer', 
            fontFamily: "'SF Pro Display', sans-serif",
            fontWeight:'semi-bold',
            fontSize: '16px', 
            color: '#000000', 
            transition: 'top 0.8s ease-out, opacity 0.8s ease-out', 
            opacity: scrolled ? 1 : 0,
            top: scrolled ? '611.15px' : '713.15px', 
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

<header
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '32px',
    alignItems: 'center',
    position: 'absolute', 
    top: 0, 
    width: '100%', 
    zIndex: 1000, 
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
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
