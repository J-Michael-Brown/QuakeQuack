

function QuakeQuery() {
  console.log('were in quakequery');
    return fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('were returning json.features');
      console.log(dispatch)
      return json.features;
    });
}

export default QuakeQuery
