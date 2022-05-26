import { useEffect, useState } from "react";
import { PokemonList } from "../components/PokemonList";
export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);

  //se ejecuta una sola vez al iniciar el componente
  useEffect(() => {
    getPokemons()
      .then((pokemons) => {
        const newPokemons = pokemons.map((pokemon, index) => {
          pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`;
          pokemon.id = index + 1;
          return pokemon;
        });
        setPokemons(newPokemons);
      })
      .catch((e) => {
        console.log("error -> ", e);
      });
  }, []);

  //llamar a un endpoint de una API
  const getPokemons = async () => {
    const urlPokemons = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
    const response = await fetch(urlPokemons);
    const data = await response.json();
    return data.results;
  };

  return (
    <div className="flex flex-col w-screen h-auto justify-center content-center">
      <h1 className="text-3xl">Pokemons {pokemons.length}</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};
