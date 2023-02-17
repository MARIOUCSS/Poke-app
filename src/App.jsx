import AppRouter from "./AppRouter";
import PokemonContext from "./context/PokemonContext";

function App() {
  return (
    <PokemonContext>
      <AppRouter />
    </PokemonContext>
  );
}

export default App;
