import { useState } from "react";
import PostoCard from "./components/PostoCard";
import postos from "./data/postos.json";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("");

  const resultado = postos.filter(
    p =>
      p.nome.toLowerCase().includes(filtro.toLowerCase()) ||
      p.cidade.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="app">
      <div className="header">
        <h1>📍 Localizador de Postos</h1>
      </div>

      <input
        type="text"
        placeholder="Pesquisar cidade ou posto..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        className="search"
      />
      <div className="cards">
        {resultado.map((posto) => (
          <PostoCard
            key={posto.id}
            posto={posto}
          />
        ))}
      </div>
    </div>
  );
}

export default App;