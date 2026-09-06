import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-8">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">
          Наша История
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
          Тоғжан, этот сайт — маленькая вселенная, созданная только для нас двоих. 
          Здесь собраны наши самые теплые воспоминания, любимые песни и моменты, 
          которые делают нас счастливыми.
        </p>

        <div className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.4)] mt-12 transition-transform duration-500 hover:scale-105">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMGmrO0j-ucKOY_BFOwwoFrzgJwgYg-eiVFcpHijfwS7I4zl3QOqtD1DTDg4q6TgRYuA7Q2X6YIhpLCpNWLN_lEdRpPlbFrTXARz4e9uOjoJHBMfWPDLryIX17P94BlSPGjkXGX4cWCjBCaTAT9TPgN=w651-h869-s-no-gm?authuser=0" 
            alt="Мы" 
            className="w-full h-full object-cover"
          />
        </div>

{/* Кнопки навигации */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 flex-wrap">
          <button 
            onClick={() => navigate('/gallery')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Воспоминания
          </button>
          
          <button 
            onClick={() => navigate('/map')}
            className="px-8 py-4 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 backdrop-blur-md text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            3D Хронология
          </button>

          <button 
            onClick={() => navigate('/music')}
            className="px-8 py-4 bg-pink-600/30 hover:bg-pink-600/50 border border-pink-500/50 backdrop-blur-md text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(244,114,182,0.4)]"
          >
            Наша Музыка
          </button>

          <button 
            onClick={() => navigate('/dramas')}
            className="px-8 py-4 bg-red-600/30 hover:bg-red-600/50 border border-red-500/50 backdrop-blur-md text-white rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            Дорамы
          </button>
        </div>

      </div>
    </div>
  );
}

export default Home;