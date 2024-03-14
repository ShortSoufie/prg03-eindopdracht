window.addEventListener('load', init);

// Globals
const webservice = 'http://localhost/prg03-eindopdracht/webservice/';
let gallery;
let championData = {};

function init() {
    gallery = document.getElementById('league-gallery')

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
        championCard.dataset.name = champion.name;
        gallery.appendChild(championCard);
        let championID = champion.id;

        fillChampionCard(champion);
    }
}

function fillChampionCard(champion){
    const championCard = document.querySelector(`.champion-card[data-name='${champion.name}']`);

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
    btnBio.classList.add('champion-button');

    btnBio.addEventListener('click', function() {
        showChampionBio(champion.id);
    });

    // Store Champion globally
    championData[champion.id] = champion;
}

function ajaxErrorHandler(error) {
    console.error('Ajax request failed:', error);
}