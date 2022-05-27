import { useNavigate, useParams } from "react-router-dom";
import { Pokemon } from "./Pokemon";
//import { PokemonDetail } from "./PokemonDetail";

export const ErrorDetail = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-4xl">
        El id {Pokemon.id} no corresponde a ningun Pokemon
      </h1>
      <button
        onClick={goBack}
        className="bg-slate-800 p-2 m-1 rounded-md text-white hover:bg-slate-900 w-24"
      >
        Regresar
      </button>
    </div>
  );
};
