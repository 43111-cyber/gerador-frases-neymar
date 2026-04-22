import { useState } from "react";
import neymar from "./download.jpg";

function App() {
  const frases = [
    "O segredo é nunca desistir.",
    "Treine enquanto eles dormem.",
    "O impossível é só questão de opinião.",
    "Jogue com alegria.",
    "Cada dia é uma nova chance.",
    "Foco, força e fé.",
    "Se divirta jogando bola.",
    "Sonhe grande e trabalhe duro."
  ];

  const [frase, setFrase] = useState(
    "Clique no botão para gerar uma frase do Neymar."
  );

  const gerarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div className="page">
      <div className="phone">
        <div className="status-bar">
          <span>9:41</span>
          <div className="status-icons">
            <span>◦◦◦</span>
          </div>
        </div>

        <div className="top-bar">
          <button className="icon-btn">☰</button>
          <button className="icon-btn">⚙</button>
        </div>

        <div className="hero">
          <p className="hello">Hi, Neymar fan</p>
          <h1>Vamos gerar uma frase inspiradora?</h1>
        </div>

        <div className="cards-grid">
          <div className="main-card">
            <p className="small-title">Frase do dia</p>
            <img src={neymar} alt="Neymar" className="neymar-img" />
            <button className="primary-btn" onClick={gerarFrase}>
              Gerar frase
            </button>
          </div>

          <div className="side-card">
            <p>Frases motivacionais</p>
            
          </div>

          <div className="side-card">
            <p>Energia de craque</p>
            
          </div>
        </div>

        <div className="result-card">
          <p className="result-label">Frase gerada</p>
          <h2>{frase}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;