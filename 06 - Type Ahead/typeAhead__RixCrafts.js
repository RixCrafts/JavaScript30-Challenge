// Data

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];
fetch(endpoint)
    .then(rawData => rawData.json())
    .then(data => cities.push(...data));

// Search info
let selection = "";

document.querySelector(".search").addEventListener('keyup', () => {
    updateView(matcher());
});

function matcher() {

    console.log("matcher");

    let word = document.querySelector(".search").value;

    console.log(word);

    return cities.filter(data =>
        data.city.toUpperCase().includes(word.toUpperCase()) ||
        data.state.toUpperCase().includes(word.toUpperCase())
    );
}

function updateView(data) {
    let word = document.querySelector(".search").value;
    let ulContainer = document.querySelector(".suggestions");
    if (word == "") {
        ulContainer.innerHTML = `<li>Filter for a city</li>
        <li>or a state</li>`;
    } else {
        ulContainer.innerHTML = ``;
        data.forEach(element => {
            ulContainer.innerHTML += 
            `<li>
                <span>${element.city}, ${element.state}</span> 
                <span class="population">${populationFormat(element.population)}</span>
            </li>`.replace(new RegExp(word, 'gi'), `<span class="hl">${word}</span>`
            );
        });
    }
}

function populationFormat(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
