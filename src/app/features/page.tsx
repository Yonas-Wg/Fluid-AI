import React from 'react';
import FluidAISection from '../components/fluiaisection2';
import IconWithBackground from '../components/featureai';
import LocalCalendar from '../calendar/page';

const Features = () => {
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
        margin: '500px auto',
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

          <div
      style={{
        position: 'relative', 
        width: '300px',
        height: '300px', 
       // border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '16px', 
      }}
    >
      {/* First SVG */}
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          left: '7.67%',
          right: '16.67%',
          top: '27.59%',
          bottom: '17.59%',
        }}
      >
        <path
          d="M3.96923 6.64563H14.7982V8.42501H3.96923L8.7415 13.1972L7.4833 14.4554L0.56311 7.53532L7.4833 0.615112L8.7415 1.87332L3.96923 6.64563Z"
          fill="white"
        />
      </svg>

      {/* Text */}
      <div
        style={{
          position: 'absolute',
          width: '169.04px',
          height: '17px',
          left: '90.75px',
          top: '80.06px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '14.235px',
          lineHeight: '17px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        Speaking to Fluid AI
      </div>

      {/* Second SVG */}
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          left: '105.33%',
          right: '8.33%',
          top: '27.33%',
          bottom: '8.33%',
        }}
      >
        <path
          d="M9.28546 18.4321C4.37183 18.4321 0.38855 14.4488 0.38855 9.53521C0.38855 4.62158 4.37183 0.638306 9.28546 0.638306C14.199 0.638306 18.1824 4.62158 18.1824 9.53521C18.1824 14.4488 14.199 18.4321 9.28546 18.4321ZM10.1751 9.53521V5.08676H8.39577V11.3146H13.7339V9.53521H10.1751Z"
          fill="white"
        />
      </svg>
    </div>

    <div
      style={{
        position: 'absolute',
        width: '282.92px',
        height: '84px',
        left: 'calc(50% - 282.92px / 2 - 0.44px)',
        top: 'calc(50% - 84px / 2 - 0.71px)',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '28.4701px',
        lineHeight: '100%', // or '28px'
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
      }}
    >
      Hi! Can you find me top rated restaurants with a <div style={{ color: 'rgba(255, 255, 255, 0.4)',}}>nice view</div> 
    </div>
    
<IconWithBackground/>
        </div>
       
      </div>
      <div
    style={{
        position: 'absolute',
        width: '897px',
        height: '240px',
        left: '-221.5px',
        top: '-330px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '80px',
        lineHeight: '100%', 
        textAlign: 'center',
        letterSpacing: '-0.02em',
        color: '#FFFFFF',
    }}
>
    Fluid AI was born out of a desire to simplify and streamline modern life
</div>
<div
    style={{
        position: 'absolute',
        width: '484px',
        height: '23px',
        left: '-41.5px',
        top: '-400px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '130%',
        textAlign: 'center',
        letterSpacing: '-0.408px',
        color: '#FFFFFF',
        opacity: 0.5,
    }}
>
    Our Features
</div>
<div style={{ marginTop: '1200px' }}>
          <LocalCalendar />
        </div>
      <FluidAISection /> 
    
    </div>
    
  );
};

export default Features;
