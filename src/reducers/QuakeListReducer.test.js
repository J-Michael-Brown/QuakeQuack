import QuakeListReducer from './QuakeListReducer'
import {QuakeQueryActionCreator} from '../actions/index';

describe('QuakeListReducer', () => {

  test('null type should return initial state', () => {
    expect(QuakeListReducer({}, { type: null })).toEqual({})
  });

  test('QUAKE_QUERY should return a new list of the last month\s most recent significant earthquakes', () => {
    let actionPromise = QuakeQueryActionCreator();
    actionPromise.then((action)=>{
      expect(QuakeListReducer({}, action)).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            "type": expect.any(String),
            "properties": expect.any(Object),
            "geometery": expect.any(Object),
            "id": expect.any(String)
          })
        ])
      )
    })
  });
});
