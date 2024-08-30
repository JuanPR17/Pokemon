async function fetchPokemonData(pokemonName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
const pokemonName = 'pikachu';
fetchPokemonData(pokemonName)
    .then(data => {
        if (data) {
            console.log('Pokemon data:', data);
            
        } else {
            console.log(`No se encontró el Pokemon ${pokemonName}`);
        }
    });
