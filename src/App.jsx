import { PokemonsPage } from "./pages/PokemonsPage";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonsPage />} />
      <Route path="/:pokemonId" element={<PokemonDetail />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
