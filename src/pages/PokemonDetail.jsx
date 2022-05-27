import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorDetail } from "../components/ErrorDetail";

export const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const navigate2 = useNavigate();
  //   const { sprites } = pokemon;
  //   console.log("sprites", sprites);
  //   const { back_default, back_shiny, front_default, front_shiny } = sprites;

  const goBack = () => {
    navigate("/");
  };

  const params = useParams();
  const { pokemonId } = params;

  //llamar al endpoint de detalles por id
  const getPokemon = async () => {
    const urlPokemons = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(urlPokemons);
    const data = await response.json();
    return data;
  };

  useState(() => {
    getPokemon()
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .catch((e) => {
        console.log("error-->", e);
        setError(true);
      });
  }, []);

  return (
    <div>
      {pokemon ? (
        <>
          <div className="flex flex-row justify-between mb-10">
            <h1 className="text-3xl">Pokemon Detail</h1>
            <button
              onClick={goBack}
              className="bg-slate-800 p-2 m-1 rounded-md text-white hover:bg-slate-900 w-24"
            >
              Regresar
            </button>
          </div>
          <div>
            <p className="text-2xl ">Name: {pokemon.name}</p>
            <div className="flex flex-row justify-evenly">
              <img
                src={pokemon.sprites["back_default"]}
                alt={`back_default ${pokemon.name}`}
              />
              <img
                src={pokemon.sprites["back_shiny"]}
                alt={`back_default ${pokemon.name}`}
              />
              <img
                src={pokemon.sprites["front_default"]}
                alt={`back_default ${pokemon.name}`}
              />
              <img
                src={pokemon.sprites["front_shiny"]}
                alt={`back_default ${pokemon.name}`}
              />
            </div>
          </div>
        </>
      ) : (
        <div>{error ? <ErrorDetail /> : <div>Loading...</div>}</div>
      )}
    </div>
  );
};
