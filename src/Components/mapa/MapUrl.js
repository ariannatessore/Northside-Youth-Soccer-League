import React from 'react';

export const MapUrl = ({url}) => {
    return (
      <div className="google-map-url">
      <iframe title="locations" src={url} width="500" height="300"  
   style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    )
  }
