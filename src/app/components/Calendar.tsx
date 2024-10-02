import React from 'react';

const Calendar: React.FC = () => {
  // Inline styles
  const calendarContainerStyle: React.CSSProperties = {
    boxSizing: 'border-box' as 'border-box',
    position: 'absolute',
    width: '321.18px',
    height: '96.98px',
    left: 'calc(50% - 321.18px / 2)',
    top: '378.47px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '0.88969px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '21.3526px',
    display: 'flex',
    flexDirection: 'column',
  };

  const calendarHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const dayStyle: React.CSSProperties = {
    flex: 1,
    textAlign: 'center',
    color: 'white',
  };


  const selectedDayStyle: React.CSSProperties = {
    ...dayStyle,
    background: 'rgba(128, 128, 128, 0.5)',
    borderRadius: '5px', 
  };

  const underlineStyle: React.CSSProperties = {
    width: '80%',
    height: '2px',
    background: 'white', 
    margin: '0 auto',
  };

  return (
    <div style={calendarContainerStyle}>
      <div style={calendarHeaderStyle}>
        <div style={dayStyle}>Sun 23</div>
        <div style={dayStyle}>Mon 24</div>
        <div style={dayStyle}>Tue 25</div>
        <div style={dayStyle}>Wed  <div style={selectedDayStyle}>
         26
          <div style={underlineStyle}></div> 
        </div></div>
        <div style={dayStyle}>Thu 27</div>
        <div style={dayStyle}>Fri 29</div>
        <div style={dayStyle}>Sat 29</div>
      </div>
    </div>
  );
};

export default Calendar;
