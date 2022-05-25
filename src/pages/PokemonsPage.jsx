import { useEffect, useState } from "react";
export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);

  //se ejecuta una sola vez al iniciar el componente
  useEffect(() => {
    getPokemon()
      .then((pokemons) => {
        const newPokemons = pokemons.map((pokemon, index) => {
          pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`;
          return pokemon;
        });
        setPokemons(newPokemons);
      })
      .catch((e) => {
        console.log("error -> ", e);
      });
  }, []);

  //llamar a un endpoint de una API
  const getPokemon = async () => {
    const urlPokemons = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
    const response = await fetch(urlPokemons);
    const data = await response.json();
    return data.results;
  };

  return (
    <div className="flex flex-col w-screen h-auto justify-center content-center">
      <h1 className="text-3xl">Pokemons {pokemons.length}</h1>
      <div className="bg-slate-100 flex flex-row flex-wrap shrink">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.url} className="bg-slate-800 w-1/3  rounded-xl">
              <img
                src={pokemon.image}
                alt={`imagen pokemon ${pokemon.name}`}
                className=" rounded-full bg-slate-100"
              />
              <h1>{pokemon.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
