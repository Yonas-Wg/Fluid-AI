import React from 'react';

const ToDoCard = () => {
  return (
        <div
        style={{
            boxSizing: 'border-box',
            width: '321.18px',
            height: '97.76px',
          //  background: 'rgba(255, 255, 255, 0.1)',
            border: '0.88969px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16.0144px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '3.56px',
            position: 'absolute',
            left: '14.24px',
            top: '634.24px',
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1)',
        }}
        >
      {/* Doings */}
      <div
        style={{
          width: '183.28px',
          height: '15px',
          margin:'5px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12.4557px',
          lineHeight: '120%',
          color: 'rgba(255, 255, 255, 0.4)',
        }}
      >
        Personal
      </div>

      {/* Task Title */}
      <div
        style={{
          width: '226.87px',
          height: '21px',
          margin:'10px',
          fontFamily: 'SF Pro Display',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '17.7938px',
          lineHeight: '120%',
          letterSpacing: '-0.88969px',
          color: '#FFFFFF',
        }}
      >
        Flight to Rome (W6 1543)
      </div>

      {/* Time and SVG Icon Container */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px',   marginLeft:'10px', }}>
        {/* SVG Icon */}
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.86462 12.4845C3.58887 12.4845 0.93335 9.82891 0.93335 6.55319C0.93335 3.27744 3.58887 0.621918 6.86462 0.621918C10.1403 0.621918 12.7959 3.27744 12.7959 6.55319C12.7959 9.82891 10.1403 12.4845 6.86462 12.4845ZM7.45775 6.55319V3.58755H6.27149V7.73944H9.83025V6.55319H7.45775Z"
            fill="white"
            fillOpacity="0.6"
          />
        </svg>

        {/* Time */}
        <div
          style={{
            width: '119.22px',
            height: '15px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12.4557px',
            lineHeight: '120%',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          10:00 - 10:20 AM
        </div>
      </div>

      {/* Label */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '5.33814px 10.6763px',
          gap: '1.78px',
          position: 'absolute',
          width: '46.35px',
          height: '25.8px',
          right: '14.41px',
          top: '14.24px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '889.69px',
        }}
      >
        {/* High */}
        <div
          style={{
            width: '25px',
            height: '15px',
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12.4557px',
            lineHeight: '120%',
            color: '#FFFFFF',
          }}
        >
          High
        </div>
      </div>

      {/* Group Position */}
      <div
        style={{
          position: 'absolute',
          width: '33.81px',
          height: '33.81px',
          left: '273.14px',
          top: '58.72px',
        }}
      >
        {/* Image Container */}
        <div
  style={{
    position: 'absolute',
    width: '33.81px',
    height: '33.81px',
    left: '0', 
    top: '0',  
    display: 'flex',             
    justifyContent: 'center',   
    alignItems: 'center',       
  }}
>
  <div
    style={{
      width: '100%',          
      height: '100%',
      background: `url('/images/cal.jpg') center / cover no-repeat`, 
      backdropFilter: 'blur(2.36567px)',
      borderRadius: '50%',
    }}
  />
</div>

      </div>
      
    </div>
  );
};

export default ToDoCard;
