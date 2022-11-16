import { getCharacter } from '../fetch-utils.js';
import { renderCharacterDetail } from '../render-utils.js';

const characterDetailContainer = document.getElementById('character-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const details = await getCharacter(id);

    const getDetailEl = renderCharacterDetail(details);
    characterDetailContainer.append(getDetailEl);
});