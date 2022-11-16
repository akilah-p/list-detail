export function renderCharacterCard(character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-card');

    p.textContent = character.name;
    img.src = `./assets/${character.name}.jpg`;
    a.href = `./detail/?id=${character.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCharacterDetail(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const quoteEl = document.createElement('p')
    const nameEl = document.createElement('p');



    div.classList.add('character-detail');

    nameEl.textContent = character.name;
    nameEl.classList.add('name');

    quoteEl.textContent = character.quotes;
    quoteEl.classList.add('quotes');

    descriptionEl.textContent = character.details;
    descriptionEl.classList.add('details');



    img.src = `../assets/${character.id}.jpg`;

    div.append(nameEl, img, quoteEl, descriptionEl);

    return div;
}
