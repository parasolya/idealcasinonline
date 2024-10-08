import React from "react";

const Map = ({ src }) => {
  return (
    <iframe
      src={src}
      class="w-full h-full border-0"
      className="w-full h-full border-0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
