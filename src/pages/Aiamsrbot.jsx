import React from 'react';
import Iframe from 'react-iframe';

const Aiamsrbot = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden'}}>
      <Iframe
        url="https://amsrbot.netlify.app/"
        width="100%"
        height="100%"
        
        display="initial"
        position="relative"
        style={{ border: 'none' }} // Optional: Remove iframe border
      />
    </div>
  );
};

export default Aiamsrbot;
