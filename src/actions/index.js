import QuakeQuery from '../api';

function QuakeQueryActionCreator() {
  const apiResult = QuakeQuery()
  return apiResult.then((newQuakes)=>{
    console.log('actioncreator', newQuakes);
    return(
      {
        type: 'QUAKE_QUERY',
        quakes: newQuakes
      })
  })

}

export { QuakeQueryActionCreator };
