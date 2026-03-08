import { useState } from "react"
import BloomingFlower from "./components/BloomingFlower"
import LoveLetter from "./components/LoveLetter"

export default function App() {
  const [started, setStarted] = useState(false)
  const [flowerBloomed, setFlowerBloomed] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false)

  const handleStart = () => {
    setStarted(true)
    setTimeout(() => setFlowerBloomed(true), 500)
    setTimeout(() => setLetterOpen(true), 3000)
    setTimeout(() => setShowParticles(true), 4000)
  }

  const handleReset = () => {
    setShowParticles(false)
    setLetterOpen(false)
    setFlowerBloomed(false)
    setTimeout(() => setStarted(false), 1000)
  }

  return (
    <main className="min-h-screen bg-pink-50 relative overflow-hidden flex flex-col items-center justify-center px-4 py-8">

      {/* Partículas de fundo */}
      {showParticles && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-pink-300 rounded-full opacity-40"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>
      )}

      {/* Título */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-center" style={{ fontFamily: "'Georgia', serif" }}>
        <span className="text-pink-600">Uma Mensagem</span> Especial
      </h1>

      {/* Subtítulo */}
      <p className="text-gray-600 mb-8 sm:mb-10 text-center text-sm sm:text-base max-w-md">
        {!started
          ? "Clique no botao para revelar sua surpresa"
          : "Aprecie cada momento desta mensagem"}
      </p>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 items-center mb-8 sm:mb-10">
        <BloomingFlower isBlooming={flowerBloomed} />
        <LoveLetter
          isOpen={letterOpen}
          message="Voce e a razao do meu sorriso. Cada momento ao seu lado e um presente que guardo no coracao."
          signature="Com todo meu amor"
        />
      </div>

      {/* Botões */}
      {!started ? (
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors text-sm sm:text-base font-medium shadow-lg hover:shadow-xl"
        >
          Revelar Surpresa
        </button>
      ) : (
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors text-sm sm:text-base"
        >
          Ver novamente
        </button>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </main>
  )
}
