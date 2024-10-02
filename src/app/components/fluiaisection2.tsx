import React from 'react';

const FluidAISection = () => {
  return (
    <div style={styles.container as React.CSSProperties}>
      <h1 style={styles.title as React.CSSProperties}>
        Fluid AI: Simplify, Organize, and Achieve More
      </h1>
      <p style={styles.description as React.CSSProperties}>
        In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
      </p>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute' as 'absolute',
    left: '-580px',
    top: '241px',
    width: '380px',
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
  },
  title: {
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '100%',
    letterSpacing: '-0.02em',
  },
  description: {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '130%',
    letterSpacing: '-0.02em',
    opacity: 0.5,
    marginTop: '40px',
  },
};

export default FluidAISection;
