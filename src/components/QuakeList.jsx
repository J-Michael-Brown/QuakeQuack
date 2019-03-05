import React from 'react';
import Quake from './Quake';

function QuakeList(props){
  console.log(props.quakeList);

  return (
    <div>
      <h2>This is the QuakeList</h2>
      {props.quakeList.map((quake, index)=>{
        <Quake quake={quake.properties}
          key={index} />
      })}
    </div>

  );
};

export default QuakeList;
