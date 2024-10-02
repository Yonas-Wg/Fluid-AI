import React from 'react';

const FluidAISection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Fluid AI: Simplify, Organize, and Achieve More
      </h1>
      <p style={styles.description}>
        In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
      </p>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    left: '-580px',
    top: '241px',
    width: '380px',
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
  } as React.CSSProperties, 
  title: {
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
  } as React.CSSProperties, 
  description: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '130%',
    letterSpacing: '-0.02em',
    opacity: 0.5,
    marginTop: '40px',
  } as React.CSSProperties, 
};

export default FluidAISection;
