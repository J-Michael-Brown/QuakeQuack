import React from 'react';
import Quake from './Quake';
import PropTypes from 'prop-types';

function QuakeList(props){

  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',

  }

  return (
    <React.Fragment>
      <h2>Significant Earthquakes around the world over the last month</h2>
      <div style={divStyle}>
        {props.quakeList.map((quake, index)=>
          <Quake
            quake={quake.properties}
            key={index} />
        )}
      </div>
    </React.Fragment>
  );
};

QuakeList.propTypes = {
  quakeList: PropTypes.array
}

export default QuakeList;
