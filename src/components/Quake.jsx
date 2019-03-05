import React from 'react';

function Quake({title, mmi, url, sig, type, time}){

  const newDate = new Date(time);

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        <li>Time: { newDate } </li>
        <li>MMI: {mmi} </li>
        <li>Significance: {sig} </li>
        <li>Type: {type} </li>
        <li>URL: {url}</li>
      </ul>
    </div>
  );
};

export default Quake;
