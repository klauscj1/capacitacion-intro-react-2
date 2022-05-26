import { Pokemon } from "./Pokemon";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className=" flex flex-row flex-wrap justify-evenly">
      {pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} key={pokemon.name} />;
      })}
    </div>
  );
};
