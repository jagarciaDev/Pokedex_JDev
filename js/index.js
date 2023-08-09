const nombrePokemon = document.querySelector('.pokemon_name');
const numeroPokemon = document.querySelector('.pokemon_number');
const gifPokemon = document.querySelector('.pokemon_img');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    nombrePokemon.innerHTML = data.name;
    numeroPokemon.innerHTML = data.id;
    gifPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon('3');