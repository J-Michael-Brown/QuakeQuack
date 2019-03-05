

function QuakeQuery() {
    return fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then((json)=>{
      return json.features
    }
    );
}

export default QuakeQuery
