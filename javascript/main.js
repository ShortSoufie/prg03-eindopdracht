window.addEventListener('load', init);

// Globals
const webservice = 'http://localhost/prg03-eindopdracht/webservice/';
let gallery;
let championData = {};

function init() {
    gallery = document.getElementById('league-gallery')
    gallery.addEventListener('click', clickHandler)

    ajaxRequest(webservice, createLeagueCard);
}

function ajaxRequest(url, success) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(success)
        .catch(ajaxErrorHandler);
}

function createLeagueCard(data) {
    for (const champion of data) {
        const championCard = document.createElement('div');
        championCard.classList.add('champion-card');
        championCard.dataset.name = champion.id;
        gallery.appendChild(championCard);

        fillChampionCard(champion);
    }
}

function fillChampionCard(champion){
    const championCard = document.querySelector(`.champion-card[data-name='${champion.id}']`);

    const h2 = document.createElement('h2');
    h2.innerHTML = `${champion.name} (#${champion.id})`;
    championCard.appendChild(h2);

    const img = document.createElement('img');
    img.src = champion.img;
    img.dataset.championCard = `${champion.name}`;
    championCard.appendChild(img);
    img.classList.add('champion-image');

    const btnFav = document.createElement('button');
    btnFav.innerHTML = `Add to favorites`;
    btnFav.dataset.id = `${champion.id}`
    championCard.appendChild(btnFav);
    btnFav.classList.add('champion-button');

    const btnBio = document.createElement('button');
    btnBio.innerHTML = `Show Bio`;
    btnBio.dataset.id = `${champion.id}`
    championCard.appendChild(btnBio);
    btnBio.classList.add('champion-button', 'champion-bioButton');

    let championId = champion.id;
    btnBio.addEventListener('click', function() {
        ajaxRequest(`${webservice}?id=${championId}`, showChampionBio)
    });

    // Store Champion globally
    championData[champion.id] = champion;
}

function clickHandler(e) {
    let clickedChampion = e.target

    if (clickedChampion.classList.contains('champion-bioButton')) {
        const championID = clickedChampion.closest('.champion-card').dataset.name
        ajaxRequest(`${webservice}?id=${championID}`, showChampionBio)
    }
}

function showChampionBio(data) {
    if (data) {
        console.log('Showing bio for champion:', data);
        // Extract champion details
        const {name, description, tags} = data;
        console.log(data.description)
        const bioSection = document.getElementById('champion-info');

        // Clear previous bio
        bioSection.innerHTML = '';

        // Create elements for the bio
        const h2 = document.createElement('h2');
        h2.textContent = name;

        const p = document.createElement('p');
        p.textContent = description;

        const ul = document.createElement('ul');
        tags.forEach(tag => {
            const li = document.createElement('li');
            li.textContent = tag;
            ul.appendChild(li);
        });

        // Append new elements
        bioSection.appendChild(h2);
        bioSection.appendChild(p);
        bioSection.appendChild(ul);
    }
}


function ajaxErrorHandler(error) {
    console.error('Ajax request failed:', error);
    if (error instanceof TypeError) {
        console.error('Network error. Check your internet connection or server availability.');
    } else {
        error.response.json().then(data => {
            console.error('Response:', data);
        }).catch(err => {
            console.error('Failed to parse response:', err);
        });
    }
}