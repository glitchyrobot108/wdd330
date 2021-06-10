fetch('https://swapi.dev/api/planets/1/', {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))