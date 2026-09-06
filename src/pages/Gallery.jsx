import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Gallery() {
  const navigate = useNavigate();
  
  // Теперь мы храним не ссылку, а ИНДЕКС (номер) открытой картинки
  const [selectedIndex, setSelectedIndex] = useState(null);

  const photos = [
    "https://lh3.googleusercontent.com/pw/AP1GczPB10qMAt74z7BK9DJrZjTupzk1vBGRCBbjrlkVcDk0fmvBEb58mGKOgzhwyFtfsggAZE8X8N8a0nKLoT9Jx1smRnG0rwDUeJZ_Jn-xuD4_RolNgwJenmalXj9W4FdDgduf-t7U65Rck6IAWHz2gAXP=w1159-h869-s-no-gm?authuser=0",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=800",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800",
    "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=800"
  ];

  // Функция для переключения ВПЕРЕД
  const showNext = (e) => {
    e.stopPropagation(); // Чтобы клик не закрыл окно
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Функция для переключения НАЗАД
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  // Добавляем слушатель клавиатуры, чтобы работали стрелки и кнопка Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext(e);
      if (e.key === 'ArrowLeft') showPrev(e);
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12">
      
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Наши Воспоминания
        </h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300"
        >
          ← На главную
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {photos.map((url, index) => (
          <div 
            key={index} 
            // При клике передаем ИНДЕКС картинки
            onClick={() => setSelectedIndex(index)} 
            className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer border border-white/5 shadow-lg"
          >
            <img 
              src={url} 
              alt={`Воспоминание ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-medium text-lg tracking-wide border-b-2 border-purple-400 pb-1">
                Открыть
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedIndex(null)} 
        >
          {/* Кнопка закрытия */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white text-5xl transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>

          {/* Левая стрелка */}
          <button 
            onClick={showPrev}
            className="absolute left-4 md:left-10 text-white/50 hover:text-white text-5xl p-4 transition-colors"
          >
            &#10094;
          </button>
          
          {/* Главное фото */}
          <img 
            src={photos[selectedIndex]} 
            alt="Увеличенное фото" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] object-contain select-none"
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Правая стрелка */}
          <button 
            onClick={showNext}
            className="absolute right-4 md:right-10 text-white/50 hover:text-white text-5xl p-4 transition-colors"
          >
            &#10095;
          </button>
        </div>
      )}

    </div>
  );
}

export default Gallery;