import React from 'react';

const IconWithBackground: React.FC = () => {
  const iconStyles: React.CSSProperties = {
    left: '0', 
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10.68px',
    marginTop:'430px',
    marginLeft:'15px',
    gap: '8.34px',
    position: 'absolute',
    width: '42.71px',
    height: '42.71px',
    background: 'rgba(0, 0, 0, 0.6)',
    border: '0.834334px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8.34334px)',
    borderRadius: '50%',
  };

  const aiIconStyles: React.CSSProperties = {
    position: 'absolute',
    width: '108.54px',
    height: '108.54px',
    left: 'calc(50% - 108.54px / 2 - 0.45px)',
    top: '619.22px',
  };

  const ellipseStyles: React.CSSProperties = {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '80.07px',
    height: '80.07px',
    left: '14.24px',
    top: '80.23px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '0.88969px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(7.23615px)',
  };

    const outerCircleStyles: React.CSSProperties = {
      position: 'absolute',
      width: '110px',
      height: '110px',
      left: '50%',  
      top: '50%',   
      transform: 'translate(-50%, -50%)',
    };
  
    const middleCircleStyles: React.CSSProperties = {
      position: 'absolute',
      width: '81px',
      height: '81px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
  
    const innerCircleStyles: React.CSSProperties = {
      position: 'absolute',
      width: '52px',
      height: '52px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    };
  
    const micIconStyles: React.CSSProperties = {
      position: 'absolute',
      width: '40px', 
      height: '40px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)', 
    };
  
 
  return (
    <div>
      {/* First Icon + Background */}
      <div style={iconStyles}>
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6796 6.66326L7.48555 11.067C7.19601 11.371 7.19601 11.8639 7.48555 12.1679C7.77509 12.472 8.24453 12.472 8.53405 12.1679L12.7281 7.76419C13.5967 6.85215 13.5967 5.37344 12.7281 4.46139C11.8595 3.54934 10.4512 3.54934 9.58255 4.46139L5.38853 8.86513C3.94084 10.3852 3.94084 12.8497 5.38853 14.3698C6.83622 15.8899 9.18338 15.8899 10.6311 14.3698L14.8251 9.96606L15.8736 11.067L11.6796 15.4708C9.65284 17.5988 6.36679 17.5988 4.34002 15.4708C2.31325 13.3426 2.31325 9.89234 4.34002 7.76419L8.53405 3.36045C9.98173 1.84038 12.329 1.84038 13.7766 3.36045C15.2243 4.88053 15.2243 7.34505 13.7766 8.86513L9.58255 13.2689C8.71399 14.1809 7.30566 14.1809 6.43704 13.2689C5.56842 12.3568 5.56842 10.8781 6.43704 9.96606L10.6311 5.56233L11.6796 6.66326Z"
            fill="white"
          />
        </svg>
      </div>
        {/* Second Icon + Background */}
        <div style={{ ...iconStyles, left: '282.71px' }}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1104 3.78137C17.9354 3.78137 20.2256 6.05754 20.2256 8.86532L20.2256 12.9325C20.2256 15.7402 17.9354 18.0164 15.1104 18.0164C12.2853 18.0164 9.99517 15.7402 9.99517 12.9325L9.99517 8.86532C9.99517 6.05754 12.2853 3.78137 15.1104 3.78137ZM5.95923 13.9493L8.02163 13.9493C8.51803 17.3985 11.5026 20.05 15.1104 20.05C18.718 20.05 21.7026 17.3985 22.1991 13.9493L24.2614 13.9493C23.7897 18.1909 20.4011 21.5588 16.1334 22.0278L16.1334 26.1507L14.0874 26.1507L14.0874 22.0278C9.8196 21.5588 6.431 18.1909 5.95923 13.9493Z"
            fill="white"
          />
        </svg>
      </div>

    
      <div style={{ position: 'relative', width: '110px', height: '110px',top:'400px',left:'120px' }}>
        {/* Outer Circle */}
        <div style={outerCircleStyles}>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_2_1503)">
              <circle cx="55.1489" cy="54.9661" r="54.2711" fill="white" fillOpacity="0.1" />
              <circle cx="55.1489" cy="54.9661" r="53.8263" stroke="white" strokeOpacity="0.1" strokeWidth="0.88969" />
            </g>
            <defs>
              <filter id="filter0_b_2_1503" x="-13.2628" y="-13.4457" width="136.824" height="136.824" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.07032" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_1503" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_1503" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
  
        {/* Middle Circle */}
        <div style={middleCircleStyles}>
          <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_2_1504)">
              <circle cx="40.1494" cy="40.9661" r="40.0361" fill="white" fillOpacity="0.1" />
              <circle cx="40.1494" cy="40.9661" r="39.5912" stroke="white" strokeOpacity="0.1" strokeWidth="0.88969" />
            </g>
            <defs>
              <filter id="filter0_b_2_1504" x="-14.359" y="-13.5423" width="109.017" height="109.017" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.23615" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_1504" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_1504" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
  
        {/* Inner Circle */}
        <div style={innerCircleStyles}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_2_1505)">
              <circle cx="26.1489" cy="25.9661" r="25.801" fill="white" fillOpacity="0.1" />
              <circle cx="26.1489" cy="25.9661" r="25.3562" stroke="white" strokeOpacity="0.1" strokeWidth="0.88969" />
            </g>
            <defs>
              <filter id="filter0_b_2_1505" x="-14.1244" y="-14.3073" width="80.5466" height="80.5466" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.23615" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_1505" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_1505" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
  
        {/* Microphone Icon */}
        <div style={micIconStyles}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 27C21.1046 27 22 26.1046 22 25V21C22 19.8954 21.1046 19 20 19C18.8954 19 18 19.8954 18 21V25C18 26.1046 18.8954 27 20 27Z"
              fill="white"
            />
            <path
              d="M20 32C23.3137 32 26 29.3137 26 26H14C14 29.3137 16.6863 32 20 32Z"
              fill="white"
            />
            <path
              d="M20 1C16.6863 1 14 3.68629 14 7V17C14 20.3137 16.6863 23 20 23C23.3137 23 26 20.3137 26 17V7C26 3.68629 23.3137 1 20 1Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div style={{
      position: 'absolute',
      width: '599.19px',
      height: '816.02px',
      left: 'calc(50% - 579.19px / 2)',
      top: '532.68px',
      marginLeft:'50px',
      background: `url('/images/11111.jpg') no-repeat center center`,
      backgroundSize: 'cover', 
      mixBlendMode: 'lighten',
      filter: 'blur(2px)', 
      zIndex: 1, 
    }}/>
<div
    style={{
        position: 'absolute',
        width: '194px',
        height: '14px',
        left: '107.65px',
        top: '589.4px',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '17.235px',
        lineHeight: '100%',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.4)',
    }}
>
    Go ahead, I’m listening
</div>


    </div>
  );
};

export default IconWithBackground;
