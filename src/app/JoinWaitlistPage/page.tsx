'use client';
import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Footer from '../components/footer';
import Divider from '@mui/material/Divider';

const JoinWaitlistPage = () => {
  const [open, setOpen] = useState(false);
  const svgHeight = 553; // Adjust as necessary

  return (
    <>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        left: '-580px',
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      {/* Join Waitlist Section */}
      <Box
        sx={{
          position: 'absolute',
          width: '542px',
          height: '176px',
          left: '80px',
          top: '140px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'SF Pro Display',
            fontWeight: 400,
            fontSize: '80px',
            lineHeight: '110%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          Join the Fluid AI Waitlist Today!
        </Typography>
      </Box>

      {/* Name Input */}
      <Box
        sx={{
          position: 'absolute',
          width: '450.5px',
          height: '28px',
          left: '80px',
          top: '374px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          backgroundColor: 'transparent',
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            padding: '0 10px',
            background: 'transparent',
            color: 'white',
            fontFamily: 'SF Pro Display',
            fontSize: '16px',
            outline: 'none',
          }}
        />
      </Box>

      {/* Email Input */}
      <Box
        sx={{
          position: 'absolute',
          width: '450.5px',
          height: '28px',
          left: '80px',
          top: '460px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          backgroundColor: 'transparent',
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            padding: '0 10px',
            background: 'transparent',
            color: 'white',
            fontFamily: 'SF Pro Display',
            fontSize: '16px',
            outline: 'none',
          }}
        />
      </Box>

      {/* Country Dropdown */}
      <Box
        sx={{
          position: 'absolute',
          width: '450.5px',
          height: '28px',
          left: '80px',
          top: '540px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
          backgroundColor: 'transparent',
        }}
      >
        <Select
          defaultValue=""
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={open ? KeyboardArrowUp : KeyboardArrowDown} 
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          sx={{
            width: '100%',
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: 'white',
            fontFamily: 'SF Pro Display',
            fontSize: '16px',
            outline: 'none',
            '& .MuiSelect-icon': {
              color: 'white', 
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  color: 'grey', 
                },
              },
            },
          }}
        >
          <MenuItem value="">
            <em>Select your country</em>
          </MenuItem>
          <MenuItem value="uae">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '28px' }}>
                <img
                  src="/images/flags/uae.png"
                  alt="United States"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    objectFit: 'cover',
                    objectPosition: '20% 10%',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="United Arab Emirates" sx={{ marginLeft: '10px' }} />
            </Box>
          </MenuItem>
          <MenuItem value="us">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '28px' }}>
                <img
                  src="/images/flags/america.png"
                  alt="United States"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    objectFit: 'cover',
                    objectPosition: '20% 10%',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="USA" sx={{ marginLeft: '10px' }} />
            </Box>
          </MenuItem>
          <MenuItem value="po">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '28px' }}>
                <img
                  src="/images/flags/poland.png"
                  alt="United States"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    objectFit: 'cover',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Poland" sx={{ marginLeft: '10px' }} />
            </Box>
          </MenuItem>
          <MenuItem value="fr">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '28px' }}>
                <img
                  src="/images/flags/france.png"
                  alt="United States"
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    objectFit: 'cover',
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="France" sx={{ marginLeft: '10px' }} />
            </Box>
          </MenuItem>
       
        </Select>
      </Box>

      {/* Join Waitlist Button */}
      <Button
        variant="contained"
        sx={{
          alignItems: 'center',
          padding: '18px 0',
          position: 'absolute',
          width: '167px',
          height: '52px',
          left: '80px',
          top: '600px',
          color: 'black',
          background: '#FFFFFF',
          boxShadow: '0px 5px 30px rgba(255, 255, 255, 0.61)',
          borderRadius: '52px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '100%',
          textTransform: 'none',
        }}
      >
        Join Waitlist
      </Button>

      {/* Mockup Image */}
      <Box
        sx={{
          position: 'absolute',
          width: '900px',
          height: '839.81px',
          left: '644px',
          top: '41px',
          background: 'url(/images/iphonex.png), url(/path/to/iPhone_XS_Mockup_123.jpg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

  
    </Box>
    <Divider style={{ margin: '0px 0',color:'white' }} />
    <Footer/>
    </>
  );
};

export default JoinWaitlistPage;
