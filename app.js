/* Imports */
import { getAllCharacters } from './fetch-utils.js';
import { renderCharacterCard } from './render-utils.js';

/* Get DOM Elements */
const characterListContainer = document.getElementById('character-list-container');

window.addEventListener('load', async () => {
    const characters = await getAllCharacters();

    for (let character of characters) {
        const characterEl = renderCharacterCard(character);
        characterListContainer.append(characterEl)
    }
});

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
