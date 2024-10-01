import React from 'react';
import { Box, Typography } from '@mui/material';

// Define the interface for component props
interface UpcomingProps {
  scrolled: boolean; 
}

// Use the interface in the functional component definition
const Upcoming: React.FC<UpcomingProps> = ({ scrolled }) => {
  return (
    <>
      {scrolled && (
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
      )}

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
    </>
  );
};

export default Upcoming;
