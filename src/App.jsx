import { useState } from "react";
import neymar from "./download.jpg";
function App() {
  const frases = [
    "O segredo é nunca desistir ",
    "Treine enquanto eles dormem ",
    "O impossível é só questão de opinião ",
    "Jogue com alegria ",
    "Cada dia é uma nova chance ",
    "Foco, força e fé ",
    "Se divirta jogando bola ",
    "Sonhe grande e trabalhe duro "
  ];

  const [frase, setFrase] = useState("");

  const gerarFrase = () => {
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  };

  return (
    <div className="container">
      <h1>Frases do neymar</h1>
      <p>Motivação de craque</p>
      <img src={neymar} alt="Neymar" className="neymar-img" />
      <button onClick={gerarFrase}>Gerar Frase</button>

      {frase && (
        <div className="card">
          <p>{frase}</p>
        </div>
      )}
    </div>
  );
}

export default App;