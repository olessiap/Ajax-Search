const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [];

fetch(url)
    .then(resp => resp.json())
    .then(data => cities.push(...data)) 
