import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ position: 'relative', background: '#000000', padding: '20px',height:'427px',width:'1540px', color: 'rgba(255, 255, 255, 0.5)' }}>
      {/* Logo */}
      <Box
        sx={{
          position: 'absolute',
          width: '207px',
          height: '44.24px',
          left: '40px',
          top: '39px',
        }}
      >
        <img src="/images/footer.jpg" alt="Fluid AI" width="207" height="44.24" />
      </Box>

      {/* Fluid AI Text */}
      <Typography
        sx={{
          position: 'absolute',
          width: '88px',
          height: '22px',
          left: '46px',
          top: '117.24px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '22px',
          textAlign: 'center',
          letterSpacing: '-0.408px',
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        2024 Fluid AI
      </Typography>

      {/* Features and Links Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'absolute',
          width: '95px',
          height: '174px',
          left: '1123px',
          top: '39px',
          background: '#000000',
          padding: '0',
          gap: '16px',
        }}
      >
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Our Features</Link>
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Areas</Link>
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>FAQs</Link>
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>The Waitlist</Link>
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Contact Us</Link>
      </Box>

      {/* Terms of Service and Privacy Policy Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          position: 'absolute',
          width: '120px',
          height: '60px',
          left: '1376px',
          top: '39px',
          background: '#000000',
          borderRadius: '0',
          padding: '0',
          gap: '16px',
        }}
      >
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Terms of Service</Link>
        <Link href="#" sx={{   color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}>Privacy Policy</Link>
      </Box>
    </Box>
  );
};

export default Footer;
