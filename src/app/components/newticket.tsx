import React from 'react';
import { Box, Typography } from '@mui/material';

interface FlightInfoDisplayProps {
    scrolled: boolean; 
  }
  
  const FlightInfoDisplay: React.FC<FlightInfoDisplayProps> = ({ scrolled }) => {
  
  return (
    <>
      {scrolled && (
        <Box
          sx={{
            position: 'absolute',
            width: '398px',
            height: '217.19px',
            left: '262px',
            top: '770px',
            background: 'rgba(169, 169, 169, 0.5)',
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
              textAlign: 'center',
              color: '#FFFFFF',
              opacity: 0.6,
            }}
          >
            7 hours 10 mins
          </Typography>
        </Box>
      )}
    </>
  );
};

export default FlightInfoDisplay;
