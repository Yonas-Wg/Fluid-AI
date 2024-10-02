import React from 'react';

// Example SVG components (replace these with your actual SVG components or imports)
const HomeIcon = () => (
<svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3178 16.3608C16.3178 16.8521 15.9195 17.2504 15.4281 17.2504H1.19304C0.701677 17.2504 0.303345 16.8521 0.303345 16.3608V7.00928C0.303345 6.73474 0.430099 6.47556 0.646819 6.30701L7.76438 0.771149C8.08565 0.521271 8.53547 0.521271 8.85674 0.771149L15.9743 6.30701C16.191 6.47556 16.3178 6.73474 16.3178 7.00928V16.3608ZM7.42087 10.1329V15.4711H9.20025V10.1329H7.42087Z" fill="white"/>
</svg> 
);

const OtherIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
    <path d="M2.35388 10.3536H20.1477V18.3608C20.1477 18.8522 19.7494 19.2505 19.258 19.2505H3.24357C2.75221 19.2505 2.35388 18.8522 2.35388 18.3608V10.3536ZM15.6992 3.23605H19.258C19.7494 3.23605 20.1477 3.63438 20.1477 4.12574V8.57419H2.35388V4.12574C2.35388 3.63438 2.75221 3.23605 3.24357 3.23605H6.80233V1.45667H8.58172V3.23605H13.9199V1.45667H15.6992V3.23605Z" fill="white"/>
    </g>
    </svg>
    
    
);

const MessageIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.05698 3.23608H12.6157C16.5467 3.23608 19.7333 6.42271 19.7333 10.3536C19.7333 14.2845 16.5467 17.4711 12.6157 17.4711V20.585C8.16729 18.8057 1.93945 16.1366 1.93945 10.3536C1.93945 6.42271 5.12608 3.23608 9.05698 3.23608Z" fill="white"/>
    </svg>    
);

const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
    <path d="M9.88685 2.34631C14.3068 2.34631 17.8941 5.93355 17.8941 10.3535C17.8941 14.7735 14.3068 18.3607 9.88685 18.3607C5.46687 18.3607 1.87964 14.7735 1.87964 10.3535C1.87964 5.93355 5.46687 2.34631 9.88685 2.34631ZM17.4361 16.6446L19.9525 19.161L18.6943 20.4192L16.1779 17.9028L17.4361 16.6446Z" fill="white"/>
    </g>
    </svg>
    
);


const HeaderWithIcons = () => {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px 50px',
      marginTop:'120px',
      backgroundColor: 'black',
      //borderRadius: '8px',
      width: '360px',
      height: '100px', 
    }}
  >
      {/* Left Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <HomeIcon />
        <OtherIcon />
      </div>

      {/* Center Circle Icon */}
      <div
  style={{
    width: '53px',
    height: '53px',
    borderRadius: '50%',
    background: `url('/images/siri.png'), url('/path/to/Uzhin-v-Dubae-skolko-stoit-idei-otzyvy.jpg')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    filter: 'blur(0.4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
        {/* This can be an SVG icon representing Siri */}
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.46446 14.2538C7.77353 14.1782 9.18897 14.0098 10.1162 13.0826C11.1368 12.0619 11.2755 10.4895 11.0461 9.06434C10.7 6.91507 11.3555 4.63585 13.0124 2.97889C15.7537 0.237504 20.1983 0.237505 22.9397 2.97889C25.681 5.72029 25.681 10.165 22.9397 12.9063C21.2015 14.6446 18.7785 15.2806 16.5392 14.8146C15.1481 14.525 13.5885 14.6327 12.5837 15.6374C11.6938 16.5274 11.5351 17.8858 11.499 19.1438C11.4653 20.3158 11.0012 21.4778 10.1067 22.3723C8.24768 24.2313 5.23363 24.2313 3.37463 22.3723C1.51562 20.5132 1.51562 17.4991 3.37462 15.6401C4.23385 14.7809 5.33983 14.3187 6.46446 14.2538ZM7.21047 10.3466C5.58108 11.976 2.93932 11.976 1.30993 10.3466C-0.319457 8.71719 -0.319457 6.07538 1.30993 4.44596C2.93932 2.81653 5.58108 2.81653 7.21047 4.44596C8.83986 6.07538 8.83986 8.71719 7.21047 10.3466ZM18.9505 22.0183C17.8977 23.0712 16.1907 23.0712 15.1378 22.0183C14.085 20.9654 14.085 19.2584 15.1378 18.2055C16.1907 17.1526 17.8977 17.1526 18.9505 18.2055C20.0034 19.2584 20.0034 20.9654 18.9505 22.0183Z" fill="white"/>
</svg>

      </div>

      {/* Right Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <MessageIcon />
        <SearchIcon />
      </div>

<div
  style={{
    position: 'absolute',
    width: '120.11px',
    height: '4.45px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '0px',
    background: '#FFFFFF',
    borderRadius: '88.969px',
  }}
>
  <svg width="121" height="6" viewBox="0 0 121 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.155273" y="0.846313" width="120.108" height="4.44845" rx="2.22423" fill="white" />
  </svg>
</div>
    </div>
  );
};

export default HeaderWithIcons;
