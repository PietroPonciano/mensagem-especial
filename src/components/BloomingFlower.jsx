export default function BloomingFlower({ isBlooming }) {
  const outerPetals = [...Array(12)].map((_, i) => ({
    rotation: i * 30,
    delay: 1.2 + i * 0.08,
    size: { width: 28, height: 55 }
  }))

  const middlePetals = [...Array(10)].map((_, i) => ({
    rotation: i * 36 + 18,
    delay: 1.6 + i * 0.06,
    size: { width: 22, height: 42 }
  }))

  const innerPetals = [...Array(8)].map((_, i) => ({
    rotation: i * 45 + 10,
    delay: 2 + i * 0.05,
    size: { width: 16, height: 30 }
  }))

  const corePetals = [...Array(6)].map((_, i) => ({
    rotation: i * 60 + 15,
    delay: 2.3 + i * 0.04,
    size: { width: 10, height: 18 }
  }))

  return (
    <div className="relative w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 flex items-center justify-center">
      
      {/* Caule */}
      <div 
        className="absolute bottom-0 w-2 sm:w-2.5 md:w-3 rounded-full transition-all duration-1000 ease-out origin-bottom"
        style={{
          background: "linear-gradient(to top, #2d5a27, #3d7a37)",
          height: isBlooming ? "55%" : "0%",
          transitionDelay: "0s"
        }}
      />

      {/* Espinhos */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`thorn-${i}`}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 transition-all duration-500 ease-out"
          style={{
            bottom: `${12 + i * 10}%`,
            left: i % 2 === 0 ? "46%" : "52%",
            background: "#2d5a27",
            transform: isBlooming 
              ? `rotate(${i % 2 === 0 ? -45 : 45}deg) scale(1)` 
              : "scale(0)",
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${0.3 + i * 0.1}s`,
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
          }}
        />
      ))}

      {/* Folha esquerda */}
      <div 
        className="absolute transition-all duration-700 ease-out origin-right"
        style={{
          bottom: "18%",
          left: "15%",
          width: "35%",
          height: "12%",
          background: "linear-gradient(135deg, #4a8f42 0%, #3d7a37 100%)",
          borderRadius: "50% 0% 50% 50%",
          transform: isBlooming ? "rotate(-25deg) scale(1)" : "rotate(0deg) scale(0)",
          opacity: isBlooming ? 1 : 0,
          transitionDelay: "0.5s"
        }}
      >
        <div 
          className="absolute top-1/2 left-1/4 w-1/2 h-0.5 rounded-full"
          style={{ background: "rgba(45, 90, 39, 0.5)" }}
        />
      </div>

      {/* Folha direita */}
      <div 
        className="absolute transition-all duration-700 ease-out origin-left"
        style={{
          bottom: "28%",
          right: "15%",
          width: "35%",
          height: "12%",
          background: "linear-gradient(-135deg, #4a8f42 0%, #3d7a37 100%)",
          borderRadius: "0% 50% 50% 50%",
          transform: isBlooming ? "rotate(25deg) scale(1)" : "rotate(0deg) scale(0)",
          opacity: isBlooming ? 1 : 0,
          transitionDelay: "0.7s"
        }}
      >
        <div 
          className="absolute top-1/2 right-1/4 w-1/2 h-0.5 rounded-full"
          style={{ background: "rgba(45, 90, 39, 0.5)" }}
        />
      </div>

      {/* Sépalas */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`sepal-${i}`}
          className="absolute transition-all duration-500 ease-out origin-bottom"
          style={{
            top: "32%",
            left: "50%",
            width: "10%",
            height: "18%",
            marginLeft: "-5%",
            background: "linear-gradient(to top, #3d7a37, #4a8f42)",
            borderRadius: "50% 50% 20% 20%",
            transform: isBlooming 
              ? `rotate(${i * 72}deg) translateY(-15%) scale(1)` 
              : `rotate(${i * 72}deg) translateY(0%) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${0.9 + i * 0.05}s`,
            zIndex: 1
          }}
        />
      ))}

      {/* Pétalas externas */}
      {outerPetals.map((petal, i) => (
        <div
          key={`outer-${i}`}
          className="absolute transition-all duration-700 ease-out origin-bottom"
          style={{
            top: "28%",
            left: "50%",
            width: `${petal.size.width}px`,
            height: `${petal.size.height}px`,
            marginLeft: `-${petal.size.width / 2}px`,
            background: `linear-gradient(to top, #d16b8f 0%, #e087a5 50%, #f0a3bb 100%)`,
            borderRadius: "50% 50% 40% 40%",
            transform: isBlooming 
              ? `rotate(${petal.rotation}deg) translateY(-${petal.size.height * 0.7}px) scale(1)` 
              : `rotate(${petal.rotation}deg) translateY(0px) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${petal.delay}s`,
            boxShadow: "inset 0 -8px 12px rgba(180, 80, 120, 0.3)",
            zIndex: 2
          }}
        />
      ))}

      {/* Pétalas médias */}
      {middlePetals.map((petal, i) => (
        <div
          key={`middle-${i}`}
          className="absolute transition-all duration-700 ease-out origin-bottom"
          style={{
            top: "30%",
            left: "50%",
            width: `${petal.size.width}px`,
            height: `${petal.size.height}px`,
            marginLeft: `-${petal.size.width / 2}px`,
            background: `linear-gradient(to top, #e087a5 0%, #f0a3bb 50%, #f8c4d4 100%)`,
            borderRadius: "50% 50% 35% 35%",
            transform: isBlooming 
              ? `rotate(${petal.rotation}deg) translateY(-${petal.size.height * 0.65}px) scale(1)` 
              : `rotate(${petal.rotation}deg) translateY(0px) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${petal.delay}s`,
            boxShadow: "inset 0 -6px 10px rgba(200, 100, 140, 0.25)",
            zIndex: 3
          }}
        />
      ))}

      {/* Pétalas internas */}
      {innerPetals.map((petal, i) => (
        <div
          key={`inner-${i}`}
          className="absolute transition-all duration-700 ease-out origin-bottom"
          style={{
            top: "32%",
            left: "50%",
            width: `${petal.size.width}px`,
            height: `${petal.size.height}px`,
            marginLeft: `-${petal.size.width / 2}px`,
            background: `linear-gradient(to top, #f0a3bb 0%, #f8c4d4 50%, #fce4ec 100%)`,
            borderRadius: "50% 50% 30% 30%",
            transform: isBlooming 
              ? `rotate(${petal.rotation}deg) translateY(-${petal.size.height * 0.6}px) scale(1)` 
              : `rotate(${petal.rotation}deg) translateY(0px) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${petal.delay}s`,
            zIndex: 4
          }}
        />
      ))}

      {/* Pétalas centrais */}
      {corePetals.map((petal, i) => (
        <div
          key={`core-${i}`}
          className="absolute transition-all duration-500 ease-out origin-bottom"
          style={{
            top: "34%",
            left: "50%",
            width: `${petal.size.width}px`,
            height: `${petal.size.height}px`,
            marginLeft: `-${petal.size.width / 2}px`,
            background: `linear-gradient(to top, #f8c4d4 0%, #fce4ec 100%)`,
            borderRadius: "50%",
            transform: isBlooming 
              ? `rotate(${petal.rotation}deg) translateY(-${petal.size.height * 0.5}px) scale(1)` 
              : `rotate(${petal.rotation}deg) translateY(0px) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${petal.delay}s`,
            zIndex: 5
          }}
        />
      ))}

      {/* Centro amarelo */}
      <div 
        className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full transition-all duration-500 ease-out"
        style={{
          top: "38%",
          left: "50%",
          transform: isBlooming ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)",
          background: "radial-gradient(circle, #f7dc6f 0%, #f4c430 60%, #d4a520 100%)",
          transitionDelay: "2.5s",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(150, 120, 0, 0.3)",
          zIndex: 10
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full transition-opacity duration-300"
            style={{
              top: `${30 + Math.sin(i * 30 * Math.PI / 180) * 30}%`,
              left: `${30 + Math.cos(i * 30 * Math.PI / 180) * 30}%`,
              background: "#b8860b",
              opacity: isBlooming ? 0.7 : 0,
              transitionDelay: `${2.7 + i * 0.02}s`
            }}
          />
        ))}
      </div>

      {/* Estames */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`stamen-${i}`}
          className="absolute transition-all duration-500 ease-out"
          style={{
            top: "38%",
            left: "50%",
            width: "2px",
            height: "14px",
            background: "linear-gradient(to top, #b8860b, #f7dc6f)",
            borderRadius: "1px",
            transformOrigin: "center center",
            transform: isBlooming 
              ? `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px) scale(1)` 
              : `translate(-50%, -50%) rotate(${i * 45}deg) translateY(0) scale(0)`,
            opacity: isBlooming ? 1 : 0,
            transitionDelay: `${2.6 + i * 0.03}s`,
            zIndex: 9
          }}
        >
          <div 
            className="absolute -top-1.5 left-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2"
            style={{
              background: "radial-gradient(circle, #ffe066 0%, #f4c430 100%)"
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes floatPollen {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          25% { transform: translate(3px, -5px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(-2px, -10px) scale(0.9); opacity: 0.6; }
          75% { transform: translate(4px, -6px) scale(1.05); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
