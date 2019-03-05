import React from 'react';
import PropTypes from 'prop-types';

function Quake(props){
  const {title, mmi, url, sig, type, time} = props.quake;
  const newDate = new Date(time);
  console.log('quake ', props);
  console.log('quake dot title', title);
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        <li>MMI: {mmi} </li>
        <li>Significance: {sig} </li>
        <li>Type: {type} </li>
        <li>URL: {url}</li>
      </ul>
    </div>
  );
};

Quake.propTypes = {
  title: PropTypes.string,
  mmi: PropTypes.number,
  url: PropTypes.string,
  sig: PropTypes.number,
  type: PropTypes.string,
  time: PropTypes.number,
}

export default Quake;
