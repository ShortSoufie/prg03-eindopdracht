window.addEventListener('load', init);

// Globals
const webservice = 'http://localhost/prg03-eindopdracht/webservice/';
let gallery;

function init() {
    gallery = document.getElementById('league-gallery')

    ajaxRequest(webservice, createLeagueCard);
}

function ajaxRequest(url, succes) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(succes)
        .catch(ajaxErrorHandler);
}

function createLeagueCard(data) {
    for (const champion of data) {
        const championCard = document.createElement('div');
        championCard.classList.add('champion-card');
        championCard.dataset.name = champion.id;
        gallery.appendChild(championCard);
        let championID = champion.id;

        fillChampionCard(championID);
    }
}

function fillChampionCard(data){
    let troll =
    console.log();

}
function ajaxErrorHandler(error) {
    console.error('Ajax request failed:', error);
}