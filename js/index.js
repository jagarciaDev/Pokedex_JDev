const nombrePokemon = document.querySelector('.pokemon_name');
const numeroPokemon = document.querySelector('.pokemon_number');
const gifPokemon = document.querySelector('.pokemon_img');

const formPoke = document.querySelector('.form');
const input = document.querySelector('.buscador');
const prev = document.querySelector('.btn-prev');
const siguiente = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    nombrePokemon.innerHTML = 'Buscando...';
    numeroPokemon.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        nombrePokemon.innerHTML = data.name;
        numeroPokemon.innerHTML = data.id;
        gifPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
    } else {
        nombrePokemon.innerHTML = 'Pokemon no encontrado :(';
        numeroPokemon.innerHTML = '';
    }

}

formPoke.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());

});

prev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

siguiente.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);