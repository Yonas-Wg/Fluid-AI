'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const FullPageLayout = () => {
  // Define state to track the current step
  const [currentStep, setCurrentStep] = useState(0);

  // Dynamic content for each step
  const content = [
    {
      text: 'Fluid has Internet access, so you can get up-to-date information from it.',
      image: '/images/services/fluid1.png',
      time: 'Time for work',
    },
    {
      text: 'You can use Fluid as an assistant to save time - and save your sanity.',
      image: '/images/services/fluid1.png',
      time: 'Time for family',
    },
    {
      text: 'Fluid easily integrates with your friends calendars',
      image: '/images/services/fluid2.jpg',
      time: 'Time for friends',
    },
  ];

  // Handle next step transition
  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % content.length); // Loop through steps
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${content[currentStep].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Centered Frame */}
      <Box
        sx={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(187.83deg, rgba(186, 186, 186, 0) 14.03%, rgba(186, 186, 186, 0.4) 94.25%)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '32px',
        }}
      >
        {/* Inside Text */}
        <Typography
          sx={{
            position: 'absolute',
            width: '299px',
            height: '87px',
            left: '30px',
            top: '30px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            opacity: 0.9,
          }}
        >
          {content[currentStep].text}
        </Typography>

        {/* Time for Work */}
        <Typography
          sx={{
            position: 'absolute',
            width: '387px',
            height: '62px',
            left: '30px',
            top: '468px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '46px',
            lineHeight: '110%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          {content[currentStep].time}
        </Typography>
      </Box>

      {/* Ellipse 559 with Arrow */}
      <Box
        sx={{
          position: 'absolute',
          width: '58px',
          height: '58px',
          left: '1164px',
          top: '367px',
          background: 'rgba(100, 100, 100, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleNext} 
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.1716 6.9999H0V8.9999H12.1716L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.22168L6.8076 1.63589L12.1716 6.9999Z" fill="white" />
        </svg>
      </Box>

      {/* Frame 1000011268 with 3 Circles */}
      <Box
        sx={{
          position: 'absolute',
          width: '98px',
          height: '6px',
          left: '50%',
          top: '754px',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Circle 1 */}
        <Box
          sx={{
            width: '6px',
            height: '6px',
            backgroundColor: currentStep === 0 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
          }}
        />
        {/* Circle 2 */}
        <Box
          sx={{
            width: '6px',
            height: '6px',
            backgroundColor: currentStep === 1 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
          }}
        />
        {/* Circle 3 */}
        <Box
          sx={{
            width: '6px',
            height: '6px',
            backgroundColor: currentStep === 2 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
          }}
        />
      </Box>
    </Box>
  );
};

export default FullPageLayout;
