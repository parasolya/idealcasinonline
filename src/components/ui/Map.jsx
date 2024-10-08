import React from "react";

const Map = ({ src }) => {
  return (
    <iframe
    src={src}
    className="w-full h-full border-0"
    allowFullScreen 
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade" 
  ></iframe>
  );
};

export default Map;
