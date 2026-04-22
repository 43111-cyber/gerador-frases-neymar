import { useState } from "react";

export default function App() {
  const [frase, setFrase] = useState("");
  const [loading, setLoading] = useState(false);

  const frases = [
    "A vida é feita de desafios e eu gosto disso.",
    "Nunca desista dos seus sonhos.",
    "A pressão me fortalece.",
    "Deus é fiel em todos os momentos.",
    "Ousadia e alegria sempre.",
    "Eu jogo por amor ao futebol.",
    "Cada jogo é uma nova história escrita no campo.",
    "Trabalho duro supera talento quando talento não trabalha duro."
  ];

  const gerarFrase = () => {
    setLoading(true);

    setTimeout(() => {
      const random = frases[Math.floor(Math.random() * frases.length)];
      setFrase(random);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#2b1055,_#000)] text-white px-4">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[140px] opacity-30 rounded-full top-10"></div>

      {/* Card principal */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            ⚽ Neymar Quotes
          </h1>
          <p className="text-white/60 mt-2">
            Gere frases motivacionais com estilo moderno
          </p>
        </div>

        {/* Botão */}
        <div className="flex justify-center">
          <button
            onClick={gerarFrase}
            className="relative px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Gerar frase ✨
          </button>
        </div>

        {/* Loader / Resultado */}
        <div className="mt-8 min-h-[120px] flex items-center justify-center">
          {loading ? (
            <div className="animate-pulse text-white/60">
              Gerando inspiração...
            </div>
          ) : frase ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-inner">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                “{frase}”
              </p>
            </div>
          ) : (
            <p className="text-white/40">
              Clique no botão para gerar uma frase
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-white/30">
          Feito com 💜 estilo moderno
        </div>

      </div>
    </div>
  );
}