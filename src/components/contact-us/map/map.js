import React from "react";

const MapSection = () => {
  const latitude = '30.7163659';     // example: 28.6139
  const longitude = '76.8164077';   // example: 77.2090

  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="p-0 container-fluid">
      {/* Embedded Google Map */}
      <iframe
        title="company-location"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.2582741645875!2d76.8138328!3d30.7163705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0c67b64c6d%3A0x7f541af7fa13a829!2sEnlight%20Infotech!5e0!3m2!1sen!2sin!4v1700000000000"
        // src={`https://www.google.com/maps/embed/v1/place?key='kt'&q=${latitude},${longitude}`}
      ></iframe>

      <div className="text-center mt-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapSection;
