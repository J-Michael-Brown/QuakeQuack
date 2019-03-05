import QuakeQuery from '../api';

function QuakeQueryActionCreator() {
  const apiResult = QuakeQuery()
  return apiResult.then((newQuakes)=>{
    return(
      {
        type: 'QUAKE_QUERY',
        quakes: newQuakes
      })
  })

}

export { QuakeQueryActionCreator };
