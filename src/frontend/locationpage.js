import React, { useState, useEffect } from 'react';

const LocationList = require("lieux-de-tournage-a-paris.json");

const Locations = () => {
    return (
    <div>
      <h3>Locations</h3>
      <body>
      <ul>
        {LocationList.map(location => (
          <li key={location.id_lieu}>{location.nom_tournage}</li>
        ))}
      </ul>
      </body>
    </div>
    );
};

export default Locations;
