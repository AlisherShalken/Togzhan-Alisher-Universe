import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dramas() {
  const navigate = useNavigate();
  
  // Состояния для маршрутизации внутри страницы
  const [selectedDrama, setSelectedDrama] = useState(null); // Какая дорама выбрана
  const [isPlaying, setIsPlaying] = useState(false);        // Нажат ли плей (переход от обложки к плееру)
  const [currentEpisode, setCurrentEpisode] = useState(1);  // Текущая серия

  // Полный каталог дорам
  const dramas = [
    {
      id: 1,
      title: "Цветочки после ягодок",
      genre: "Мелодрама, Комедия, Школа",
      rating: "9.5",
      description: "Простая девушка из бедной семьи случайно попадает в элитную школу, где сталкивается с F4 — четверкой самых богатых и влиятельных парней. Классическая история, с которой у многих началась любовь к дорамам.",
      cover: "https://www.yesasia.ru/wp-content/uploads/2022/03/Boys-Over-Flowers-thumbnail-130322-780x470-1.jpg",
      episodes: [
        "https://drive.google.com/file/d/1oTovm4ftKIvpVlx9MtZdWsuPq7njMELT/preview", //  1 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  2 серия
        "https://drive.google.com/file/d/1l4EGRnzHit-UMdQf6LvMEIoN_m3amNS8/preview", //  3 серия
        "https://drive.google.com/file/d/1uoUva58C-Xp7q1zao8oLaq7bhM9lJoO4/preview", //  4 серия
        "https://drive.google.com/file/d/17K2XeUQGslzwlZ4vuZp340aB3B6SFmDG/preview", //  5 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  6 серия
        "https://drive.google.com/file/d/19v5MrvcIZalr7hNCMGuzVrzb_WlKBJBx/preview", //  7 серия
        "https://drive.google.com/file/d/1OhPoOuD9G8mThjHmJrG7hjtINPr93TXP/preview", //  8 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  9 серия
        "https://drive.google.com/file/d/1fwdZgkjEG0WH60dlObnQ7XLpR0lH65jE/preview", //  10 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  11 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  12 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  13 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  14 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  15 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  16 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  17 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  18 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  19 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  20 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  21 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  22 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  23 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview", //  24 серия
        "https://drive.google.com/file/d/1xvQH4-1Jy-Lva744RuYXQdhZOWYg1-K7/preview"  //  25 серия
      ],
      episodesCount: 25
    },
    {
      id: 2,
      title: "Потомки солнца",
      genre: "Военный, Мелодрама, Драма",
      rating: "9.6",
      description: "История любви между миротворцем из спецназа Южной Кореи и талантливым военным врачом, разворачивающаяся на фоне опасной миссии в горячей точке.",
      cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/WKfE5N_Ww7Q",
      episodesCount: 16
    },
    {
      id: 3,
      title: "Алые Сердца",
      genre: "Исторический, Фэнтези, Драма",
      rating: "9.8",
      description: "Современная девушка во время солнечного затмения таинственным образом переносится в эпоху Корё и оказывается в самом центре борьбы прекрасных принцев за трон и её сердце.",
      cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600", 
      videoUrl: "https://www.youtube.com/embed/hbS-k9MhU0M", 
      episodesCount: 20
    },
    {
      id: 4,
      title: "Аварийная посадка любви",
      genre: "Романтика, Комедия, Драма",
      rating: "9.7",
      description: "Наследница южнокорейского конгломерата во время полета на параплане попадает в торнадо и случайно приземляется в Северной Корее прямо на молодого офицера.",
      cover: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/eL01X_HkYAA",
      episodesCount: 16
    },
    {
      id: 5,
      title: "Истинная красота",
      genre: "Школа, Комедия, Романтика",
      rating: "9.4",
      description: "Старшеклассница, неуверенная в своей внешности, с помощью мастерства макияжа превращается в настоящую богиню школы и оказывается в любовном треугольнике.",
      cover: "https://images.unsplash.com/photo-1522337360788-8b13fee7a3ce?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/jwzNOqE_ZzM",
      episodesCount: 16
    },
    {
      id: 6,
      title: "Болтун",
      genre: "Триллер, Детектив, Криминал",
      rating: "9.3",
      description: "Адвокат-неудачник оказывается втянут в масштабный заговор и вынужден стать гениальным мошенником, чтобы выжить и спасти свою жену.",
      cover: "https://images.unsplash.com/photo-1584968153916-311c52b2a293?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/39oHQqY4QZ4",
      episodesCount: 16
    },
    {
      id: 7,
      title: "Когда жизнь преподносит мандарины",
      genre: "Драма, Повседневность",
      rating: "9.0",
      description: "Трогательная история о жизни, любви и преодолении трудностей на прекрасном острове Чеджу.",
      cover: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    },
    {
      id: 8,
      title: "Мисс Хон под прикрытием",
      genre: "Детектив, Комедия, Боевик",
      rating: "8.9",
      description: "Секретные агенты под прикрытием берутся за опасное задание, приправляя расследование отличным юмором.",
      cover: "https://images.unsplash.com/photo-1555661530-68c8e98db4e6?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    },
    {
      id: 9,
      title: "Судья из Ада",
      genre: "Фэнтези, Детектив",
      rating: "9.2",
      description: "Настоящий демон вселяется в тело красивой и жестокой судьи, чтобы вершить свое собственное, адское правосудие.",
      cover: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 14
    },
    {
      id: 10,
      title: "Шеф повар Тирана",
      genre: "Исторический, Комедия",
      rating: "8.8",
      description: "Кулинарные шедевры и дворцовые интриги сплетаются воедино в этой захватывающей истории.",
      cover: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    },
    {
      id: 11,
      title: "Вкусный, твой",
      genre: "Романтика, Повседневность",
      rating: "8.7",
      description: "Милая и уютная история о том, как хорошая еда может объединять сердца и лечить душевные раны.",
      cover: "https://images.unsplash.com/photo-1495474472205-51f750c05336?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    },
    {
      id: 12,
      title: "Женись на мне",
      genre: "Мелодрама, Фантастика",
      rating: "9.5",
      description: "Девушка получает второй шанс на жизнь: она возвращается в прошлое на 10 лет назад, чтобы отомстить и изменить свою судьбу.",
      cover: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    },
    {
      id: 13,
      title: "Слепленный город",
      genre: "Боевик, Триллер",
      rating: "9.1",
      description: "Обычный геймер становится главным подозреваемым в преступлении и вынужден доказать свою невиновность в реальном мире.",
      cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 1
    },
    {
      id: 14,
      title: "Мой демон",
      genre: "Фэнтези, Романтика",
      rating: "9.6",
      description: "Холодная наследница корпорации заключает фиктивный брак с настоящим демоном, который внезапно теряет свои силы.",
      cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/a_nFv73vYxM",
      episodesCount: 16
    }
  ];

  // Умная кнопка "Назад"
  const handleBack = () => {
    if (isPlaying) {
      setIsPlaying(false); // Из плеера возвращаемся на обложку
    } else if (selectedDrama) {
      setSelectedDrama(null); // С обложки возвращаемся в каталог
    } else {
      navigate('/'); // Из каталога возвращаемся на главную
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative overflow-x-hidden">
      
      {/* Шапка (делаем её поверх всего, чтобы кнопка назад всегда была доступна) */}
      <div className="relative z-50 max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-pink-500">
            Тоғжан Cinema 🍿
          </h1>
          <p className="text-gray-400 text-sm mt-1">Твои любимые истории в одном месте</p>
        </div>
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all flex items-center gap-2 backdrop-blur-md"
        >
          <span>←</span> 
          {isPlaying ? 'К описанию' : (selectedDrama ? 'В каталог' : 'На главную')}
        </button>
      </div>

      {/* РОУТИНГ ВНУТРИ СТРАНИЦЫ */}

      {!selectedDrama && (
        /* --- ЭКРАН 1: КАТАЛОГ ДОРАМ --- */
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-[fadeIn_0.4s_ease-out]">
          {dramas.map((drama) => (
            <div
              key={drama.id}
              onClick={() => {
                setSelectedDrama(drama);
                setIsPlaying(false); // Сначала показываем обложку
              }}
              className="group bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <img
                  src={drama.cover}
                  alt={drama.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md text-amber-400 text-xs font-bold border border-amber-500/20">
                  ★ {drama.rating}
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors line-clamp-1">
                    {drama.title}
                  </h3>
                  <p className="text-purple-400 text-xs font-medium mt-1 truncate">{drama.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDrama && !isPlaying && (
        /* --- ЭКРАН 2: СТРАНИЦА ДОРАМЫ (НОВЫЙ КИНОПОИСК-СТИЛЬ) --- */
        <div className="max-w-7xl mx-auto animate-[fadeIn_0.5s_ease-out]">
          <div className="relative w-full h-[65vh] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Фоновое изображение (растянуто на весь контейнер) */}
            <img 
              src={selectedDrama.cover} 
              alt={selectedDrama.title} 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-80"
            />
            
            {/* Плавное затемнение (градиент) снизу вверх. Сливается с bg-slate-950 */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-black/20"></div> {/* Легкая общая тень для читаемости */}

            {/* Контент поверх баннера (выровнен по нижнему краю) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  {selectedDrama.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6 text-sm sm:text-base">
                  <span className="px-3 py-1 bg-amber-500 text-black font-extrabold rounded-md shadow-lg">
                    ★ {selectedDrama.rating}
                  </span>
                  <span className="text-white font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    {selectedDrama.genre}
                  </span>
                  <span className="text-gray-300 font-medium bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm border border-white/5">
                    {selectedDrama.episodesCount} серий
                  </span>
                </div>

                <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 line-clamp-3 sm:line-clamp-4 drop-shadow-md">
                  {selectedDrama.description}
                </p>

                {/* ГИГАНТСКАЯ КНОПКА СМОТРЕТЬ (Белая в стиле Apple TV/Netflix) */}
                <button 
                  onClick={() => {
                    setIsPlaying(true);
                    setCurrentEpisode(1);
                  }}
                  className="px-8 sm:px-12 py-4 bg-white text-black hover:bg-gray-200 font-extrabold text-lg sm:text-xl rounded-full transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span className="text-2xl leading-none">▶</span> Смотреть сейчас
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedDrama && isPlaying && (
        /* --- ЭКРАН 3: РЕЖИМ ПРОСМОТРА (ПЛЕЕР) --- */
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 animate-[fadeIn_0.4s_ease-out]">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <iframe
                src={
                  selectedDrama.episodes && selectedDrama.episodes[currentEpisode - 1]
                    ? selectedDrama.episodes[currentEpisode - 1]
                    : (selectedDrama.videoUrl ? `${selectedDrama.videoUrl}?autoplay=1` : "")
                }
                title={selectedDrama.title}
                className="w-full h-full bg-slate-900"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold">{selectedDrama.title} — Серия {currentEpisode}</h2>
            </div>
          </div>

          {/* Правая колонка: Выбор серий */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit backdrop-blur-md">
            <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
              <span>Серии</span>
              <span className="text-sm text-gray-400 font-normal">Всего: {selectedDrama.episodesCount}</span>
            </h3>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3 max-h-[60vh] overflow-y-auto pr-2">
              {Array.from({ length: selectedDrama.episodesCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentEpisode(i + 1)}
                  className={`aspect-square rounded-xl font-semibold border text-sm transition-all flex items-center justify-center ${
                    currentEpisode === i + 1
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white shadow-lg'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Dramas;