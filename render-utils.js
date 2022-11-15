export function renderCharacterCard(dog) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-card');

    p.textContent = character.name;
    img.src = ``;
    a.href = ``;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCharacterDetail(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');


    div.classList.add('character-detail');

    nameEl.textContent = character.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = character.description;
    descriptionEl.classList.add('description');


    img.src = `../assets/${dog.breed}.jpeg`;

    div.append(nameEl, img, descriptionEl);

    return div;
}
