import { useState, useEffect } from "react"

export default function LoveLetter({ isOpen, message, signature }) {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowText(true), 1500)
      return () => clearTimeout(timer)
    } else {
      setShowText(false)
    }
  }, [isOpen])

  return (
    <div className="relative w-72 h-56 sm:w-80 sm:h-64" style={{ perspective: "1000px" }}>
      
      {/* Envelope base */}
      <div 
        className="absolute inset-0 rounded-lg shadow-2xl border border-pink-200 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%)"
        }}
      >
        {/* Padrão decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #e91e63 10px, #e91e63 11px)`
            }}
          />
        </div>

        {/* Carta interior */}
        <div 
          className="absolute inset-4 bg-white rounded shadow-inner flex flex-col justify-center items-center p-5 transition-all duration-1000 ease-out"
          style={{
            transform: isOpen ? "translateY(0)" : "translateY(100%)",
            opacity: isOpen ? 1 : 0,
            transitionDelay: "0.8s"
          }}
        >
          <div 
            className="text-center transition-all duration-700 ease-out"
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? "translateY(0)" : "translateY(20px)"
            }}
          >
            <p 
              className="text-gray-700 text-base sm:text-lg leading-relaxed italic"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {message}
            </p>
            <p 
              className="text-pink-500 mt-4 text-lg sm:text-xl font-semibold"
              style={{
                opacity: showText ? 1 : 0,
                transform: showText ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.5s ease-out 0.5s"
              }}
            >
              {signature}
            </p>
          </div>

          {/* Coração */}
          <div 
            className="absolute bottom-3 right-3 text-2xl transition-all duration-500"
            style={{
              opacity: showText ? 1 : 0,
              transform: showText ? "scale(1)" : "scale(0)",
              transitionDelay: "1s",
              animation: showText ? "heartbeat 1.5s ease-in-out infinite" : "none"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ec4899">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Aba inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 origin-bottom transition-all duration-700 ease-out"
        style={{
          clipPath: "polygon(0 100%, 50% 30%, 100% 100%)",
          background: "linear-gradient(180deg, #f8bbd9 0%, #f48fb1 100%)",
          transform: isOpen ? "scaleY(0)" : "scaleY(1)",
          transitionDelay: "0.3s"
        }}
      />

      {/* Aba superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 origin-top transition-all duration-1000 ease-out"
        style={{
          clipPath: "polygon(0 0, 50% 70%, 100% 0)",
          background: "linear-gradient(180deg, #fce4ec 0%, #f8bbd9 100%)",
          transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
          transformStyle: "preserve-3d",
          boxShadow: isOpen ? "none" : "0 4px 6px -1px rgba(0,0,0,0.1)"
        }}
      />

      {/* Selo */}
      <div 
        className="absolute top-2 right-4 w-10 h-10 bg-pink-500 rounded-sm flex items-center justify-center transition-all duration-500"
        style={{
          transform: isOpen ? "rotate(12deg) scale(0.8)" : "rotate(0deg) scale(1)",
          opacity: isOpen ? 0.5 : 1
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  )
}
