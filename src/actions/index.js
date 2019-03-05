import QuakeQuery from '../api';

function QuakeQueryActionCreator() {
  return QuakeQuery().then((newQuakes)=>{
    console.log('newQuakes', newQuakes);
    return(
      {
        type: 'QUAKE_QUERY',
        quakes: newQuakes
      })
  })

}

export { QuakeQueryActionCreator };
