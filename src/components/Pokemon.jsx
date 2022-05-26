import { useNavigate } from "react-router-dom";

export const Pokemon = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-slate-800 w-1/4 m-2 rounded-xl flex flex-col content-center items-center cursor-pointer hover:bg-slate-900"
      onClick={() => navigate(`/${pokemon.id}`)}
    >
      <img
        src={pokemon.image}
        alt={`imagen pokemon ${pokemon.name}`}
        className=" rounded-full"
      />
      <h1 className="text-white mb-4">{pokemon.name}</h1>
    </div>
  );
};
