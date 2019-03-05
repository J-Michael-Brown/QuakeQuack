

function QuakeQuery() {
    return fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson').then(
      response => response.json().features,
      error => console.log('An error occurred.', error)
    );
}

export default QuakeQuery
