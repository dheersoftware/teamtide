import React from 'react';

function Preloader() {
  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon"><img src="images/loader.svg" alt="" /></div>
      </div>
    </div>
  );
}

export default Preloader;