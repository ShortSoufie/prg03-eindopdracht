window.addEventListener('load', init);

// Globals
const webservice = 'webservice/data.php';
let gallery;
let championData = {};

function init() {
    gallery = document.getElementById('league-gallery')

    ajaxRequest(webservice, createLeagueCard);
    updateFavoritesSection();
}

// Fetch webservice and specific data
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
        championCard.dataset.name = champion.id; // Give every element champion id
        gallery.appendChild(championCard);

        fillChampionCard(champion); // Fill info about every champ
    }

    // Call updateFavoritesSection after all champions are created
    updateFavoritesSection();
}

function fillChampionCard(champion){
    const championCard = document.querySelector(`.champion-card[data-name='${champion.id}']`); // Get the id for "Zoe" = 1

    // Create HTML Elements for the specific Champion with info from Champion
    const h2 = document.createElement('h2');
    h2.innerHTML = `${champion.name} (#${champion.id})`;

    const img = document.createElement('img');
    img.src = champion.img;
    img.dataset.championCard = `${champion.name}`;
    img.classList.add('champion-image');

    const btnFav = document.createElement('button');
        // Check if ID is in favorites
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let isFavorite = favorites.includes(champion.id);

        if (isFavorite) {
            btnFav.innerHTML = 'Remove from favorites';
        } else {
            btnFav.innerHTML = 'Add to favorites';
        }

    btnFav.dataset.id = `${champion.id}`
    btnFav.classList.add('champion-button');

    const btnBio = document.createElement('button');
    btnBio.innerHTML = `Show Bio`;
    btnBio.dataset.id = `${champion.id}`
    btnBio.classList.add('champion-button', 'champion-bioButton');

    // Append new elements
    championCard.appendChild(h2);
    championCard.appendChild(img);
    championCard.appendChild(btnFav);
    championCard.appendChild(btnBio);

    // Store Champion globally
    let championId = champion.id;
    championData[champion.id] = champion; // Add champion to championData, so we have it locally

    // Event listeners for the butons
    btnBio.addEventListener('click', function() {
        // Fetch description and tags for specific champ with ID
        ajaxRequest(`webservice/data.php?id=${championId}`, showChampionBio)
    });

    btnFav.addEventListener('click', function() {
        toggleFavorite(championId);

        const clickedButton = event.target;
        console.log(clickedButton)

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let isFavorite = favorites.includes(championId);

        if (isFavorite) {
            clickedButton.textContent = 'Remove from favorites';
        } else {
            clickedButton.textContent = 'Add to favorites';
        }
    });
}

function showChampionBio(data) {
    if (data) {
        // Get champion details
        const {description, tags} = data; // Destructuring Assignment

        // Get ID from the HTML Section
        const bioSection = document.getElementById('champion-info');

        // Clear previous bio
        bioSection.innerHTML = '';

        // Create HTML Elements for the bio
        const title = document.createElement('h1');
        title.textContent = 'Description';

        const p = document.createElement('p');
        p.textContent = description;

        const tagTitle = document.createElement('h1');
        tagTitle.textContent = 'Tags';

        // Make a list for the Tags
        const ul = document.createElement('ul');
        tags.forEach(tag => {
            const li = document.createElement('li');
            li.textContent = tag;
            ul.appendChild(li);
        });

        // Append new elements
        bioSection.appendChild(title);
        bioSection.appendChild(p);
        bioSection.appendChild(tagTitle);
        bioSection.appendChild(ul);
    }
}

function toggleFavorite(championId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(championId);
    if (index === -1) {
        favorites.push(championId);
    } else {
        favorites = favorites.filter(id => id !== championId);
    }

    // Update the array in localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesSection();
}

function updateFavoritesSection() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesSection = document.getElementById('favorite-list');
    favoritesSection.innerHTML = '';

    if (favorites.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No favorite champions yet.';
        favoritesSection.appendChild(emptyMessage);
    } else {
        const title = document.createElement('h1');
        title.textContent = 'Favorites';
        favoritesSection.appendChild(title);

        favorites.forEach(championId => {
            // Check champion in ChampionData array
            const champion = championData[championId];

            // Check if champion is not undefined
            if (champion) {
                // If champion exists, create div with the name and id of the Champion.
                const championDiv = document.createElement('div');
                championDiv.textContent = `${champion.name} (#${champion.id})`;
                favoritesSection.appendChild(championDiv);
            }
        });
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