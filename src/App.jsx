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
    "Clique no botão para gerar uma frase."
  );

  const gerarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="card">
          

          <h1>Frases do Neymar</h1>
          <p className="subtitle">Motivação de craque</p>

          <div className="image-box">
            <img src={neymar} alt="Neymar" className="neymar-img" />
          </div>

          <button onClick={gerarFrase}>Gerar Frase</button>

          <div className="frase-box">
            <p>{frase}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;