import React from 'react';

const OfflineMessage = () => {
  return (
    <div className="offline-container">
      <div className="offline-icon">📶</div>
      <h1>Oops! You are offline</h1>
      <p>Please check your internet connection</p>
      <button className="retry-button" onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
};

export default OfflineMessage;
