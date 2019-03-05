import {QuakeQueryActionCreator} from '../actions/index'


function QuakeListReducer (initialState = {}, action){
  let newState;
  switch (action.type) {
    case 'QUAKE_QUERY':
    console.log("Hello!");
      newState = {...initialState, quakes: action.quakes}
      console.log('reducer newstate ',newState);
      return newState;
    default:
      return initialState;

  }
};

export default QuakeListReducer;
