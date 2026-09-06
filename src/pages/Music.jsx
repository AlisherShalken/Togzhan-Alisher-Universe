import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Music() {
  const navigate = useNavigate();
  
  const [playingId, setPlayingId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  const songs = [
    {
      id: 1,
      title: "Perfect",
      artist: "Ed Sheeran",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=500",
      duration: "4:23"
    },
    {
      id: 2,
      title: "Yellow",
      artist: "Coldplay",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500",
      duration: "4:26"
    },
    {
      id: 3,
      title: "Любимая песня Тоғжан",
      artist: "Неизвестный исполнитель",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500",
      duration: "3:15"
    }
  ];

  const currentSong = songs.find(s => s.id === playingId);

  useEffect(() => {
    setProgress(0);
  }, [playingId]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        // Добавил Number(prev) на всякий случай для надежности
        setProgress((prev) => (Number(prev) >= 100 ? 0 : Number(prev) + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSongClick = (id) => {
    if (playingId === id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingId(id);
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    if (!playingId) return;
    const currentIndex = songs.findIndex(s => s.id === playingId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setPlayingId(songs[nextIndex].id);
    setIsPlaying(true);
  };

  const playPrev = () => {
    if (!playingId) return;
    const currentIndex = songs.findIndex(s => s.id === playingId);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setPlayingId(songs[prevIndex].id);
    setIsPlaying(true);
  };

  const formatTime = (percent) => {
    const totalSeconds = 260; 
    const currentSeconds = Math.floor((Number(percent) / 100) * totalSeconds);
    const mins = Math.floor(currentSeconds / 60);
    const secs = currentSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 md:p-12 pb-32">
      
      <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Наш Плейлист
        </h1>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300"
        >
          ← На главную
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {songs.map((song) => (
          <div 
            key={song.id}
            className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
              playingId === song.id 
                ? 'bg-purple-600/20 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                : 'bg-white/5 border-white/5 hover:bg-white/10'
            }`}
            onClick={() => handleSongClick(song.id)}
          >
            <div className="relative w-14 h-14 md:w-16 md:h-16 mr-4 flex-shrink-0">
              <img 
                src={song.cover} 
                alt="cover" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-2xl">{playingId === song.id && isPlaying ? '⏸' : '▶'}</span>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className={`text-base md:text-lg font-semibold ${playingId === song.id ? 'text-pink-300' : 'text-white'}`}>
                {song.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">{song.artist}</p>
            </div>

            <div className="text-gray-400 mr-2 md:mr-4 text-sm">
              {playingId === song.id && isPlaying ? (
                <div className="flex gap-1 items-end h-4">
                  <div className="w-1 bg-pink-400 animate-pulse h-full"></div>
                  <div className="w-1 bg-purple-400 animate-pulse h-2/3 delay-75"></div>
                  <div className="w-1 bg-pink-400 animate-pulse h-full delay-150"></div>
                </div>
              ) : (
                song.duration
              )}
            </div>
          </div>
        ))}
      </div>

      {playingId && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border-t border-white/10 px-4 py-4 md:px-8 flex flex-col md:flex-row items-center justify-between z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] animate-[slideUp_0.3s_ease-out]">
          
          <div className="flex items-center w-full md:w-1/3 mb-4 md:mb-0">
            <img 
              src={currentSong.cover} 
              alt="cover" 
              className={`w-14 h-14 object-cover transition-all duration-500 shadow-md ${isPlaying ? 'rounded-full animate-[spin_8s_linear_infinite]' : 'rounded-md'}`}
            />
            <div className="ml-4 truncate">
              <h4 className="text-white font-medium text-base truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:w-1/3 max-w-md">
            <div className="flex items-center gap-8 mb-2">
              <button onClick={playPrev} className="text-gray-400 hover:text-pink-400 text-2xl transition-colors">
                ⏮
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className="text-white hover:text-pink-400 text-4xl hover:scale-110 transition-all drop-shadow-lg"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              
              <button onClick={playNext} className="text-gray-400 hover:text-pink-400 text-2xl transition-colors">
                ⏭
              </button>
            </div>
            
            <div className="w-full flex items-center gap-3 text-xs text-gray-400 font-medium tracking-wide">
              <span className="w-8 text-right">{formatTime(progress)}</span>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="0.1"
                value={progress}
                /* ВОТ ОНО! Обернули e.target.value в Number() */
                onChange={(e) => setProgress(Number(e.target.value))}
                className="flex-grow h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"
              />
              <span className="w-8">{currentSong.duration}</span>
            </div>
          </div>

          <div className="hidden md:flex justify-end items-center w-1/3 text-gray-400 gap-3 pr-4">
            <span className="text-xl">{volume == 0 ? '🔇' : '🔊'}</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              /* И здесь тоже обернули в Number() */
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-24 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"
            />
          </div>

        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        input[type="range"]::-webkit-slider-thumb {
          width: 12px;
          height: 12px;
          background: #f472b6; 
          border-radius: 50%;
          cursor: pointer;
          -webkit-appearance: none;
        }
      `}</style>
    </div>
  );
}

export default Music;