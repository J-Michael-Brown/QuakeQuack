import React from 'react';
import PropTypes from 'prop-types';

function Quake(props){
  const {title, mmi, url, sig, type, time} = props.quake;
  const newDate = new Date(time);

  const divStyle = {
    width: '300px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey',
    margin: '10px',
    borderRadius: '4px',
    boxShadow: '5px 5px 10px #222'
  }

  const pStyle = {
    textAlign: 'center',
  }

  return (
    <div style={divStyle}>
      <h4>{title}</h4>
      <p style={pStyle}>MMI: {mmi} </p>
      <p style={pStyle}>Significance: {sig} </p>
      <p style={pStyle}>Type: {type} </p>
      <p style={pStyle}> <a href={url}>Event Page</a> </p>
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
