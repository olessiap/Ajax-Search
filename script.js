const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [];

fetch(url) 
    .then(resp => resp.json())
    .then(data => cities.push(...data))



function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}


function displayMatches(matchedWord) {
    const resultsArray = findMatches(this.value, cities);
    const html = resultsArray.map(result => {
        const highlightedStr = new RegExp(this.value, 'gi');
        const cityName = result.city.replace(highlightedStr, `<span class="hl">${this.value}</span>`)
        const stateName = result.state.replace(highlightedStr, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span>${cityName}, ${stateName} </span>
                <span>${result.population} </span>
            </li>
        `;
    }).join("");
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);