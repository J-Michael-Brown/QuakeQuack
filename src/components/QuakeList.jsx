import React from 'react';
import Quake from './Quake';
import PropTypes from 'prop-types';

function QuakeList(props){
  console.log(props);

  return (
    <div>
      <h2>This is the QuakeList</h2>
      {props.quakeList.map((quake, index)=>
        <Quake
          quake={quake.properties}
          key={index} />
      )}
    </div>

  );
};

QuakeList.propTypes = {
  quakeList: PropTypes.array
}

export default QuakeList;
