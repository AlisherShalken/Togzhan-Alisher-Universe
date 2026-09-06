import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

// Вставь сюда свой токен от Mapbox
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hlcnNoZXJzdGFyIiwiYSI6ImNtcHIzd3BjaTByYTUycXNscnlsN2IyY2QifQ.UqsEPF2G_DnTnwZWLBU7Qg';

function TimelineMap() {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(0);

  // Ваша настоящая, романтическая история любви
  const events = [
    {
      id: 0,
      date: "До 2022 года",
      title: "Две судьбы до встречи",
      description: "Я жил в Астане, а она — в Маканчи. Мы ходили под одним небом и даже не подозревали о существовании друг друга. Но судьба уже тогда готовила для нас самую главную встречу в жизни.",
      coords: { longitude: 82.0133, latitude: 46.7905 } 
    },
    {
      id: 1,
      date: "Март 2022",
      title: "Тот самый день",
      description: "Наша первая встреча в Каскелене, в стенах СДУ. Именно тогда в моем сердце зажглось то самое чувство, которое навсегда изменило мою жизнь. Я начал влюбляться.",
      coords: { longitude: 76.6695, latitude: 43.2075 } 
    },
    {
      id: 2,
      date: "2022 — 2024",
      title: "Зарождение чувств",
      description: "Долгие теплые прогулки по Алматы, душевные разговоры и первые робкие ответные чувства. И даже когда летом мы разъезжались по домам, наши сердца тянулись друг к другу сквозь километры.",
      coords: { longitude: 76.8512, latitude: 43.2220 } 
    },
    {
      id: 3,
      date: "Ноябрь 2024",
      title: "Вместе к мечте",
      description: "Ее пригласили на отбор в Air Astana. Мы полетели в Астану вместе, держась за руки. Радость от ее успеха, счастливое возвращение в Алматы и начало нового этапа.",
      coords: { longitude: 71.4304, latitude: 51.1282 } 
    },
    {
      id: 4,
      date: "28 Марта 2025",
      title: "Она сказала «Да»",
      description: "Пока она была высоко в небе на рейсе в Пекине, она согласилась стать моей. Мы начали жить вместе. Весна подарила нам счастье в Капшагае и знакомство с моим родным домом в Бурабае.",
      coords: { longitude: 116.4074, latitude: 39.9042 } 
    },
    {
      id: 5,
      date: "Зима 2025 — Весна 2026",
      title: "Тяжелое испытание",
      description: "Самый темный период. Недопонимания и преграды разлучили нас. От отчаяния я уехал работать в Астану, но каждый день безумно тосковал по ней и не мог отпустить.",
      coords: { longitude: 71.4304, latitude: 51.1282 } 
    },
    {
      id: 6,
      date: "Май 2026 — Сегодня",
      title: "Любовь, победившая всё",
      description: "Мы поняли, что просто не можем дышать друг без друга. Дали клятву больше никогда не предавать нашу любовь. Сейчас нам тяжело на расстоянии, но мы выбираем быть только вместе.",
      coords: { longitude: 76.8512, latitude: 43.2220 } 
    },
    {
      id: 7,
      date: "Октябрь 2026",
      title: "Только ты и я",
      description: "Наш долгожданный совместный отпуск в Таиланде. Время, чтобы забыть обо всех проблемах, перезагрузиться и наслаждаться обществом друг друга у океана.",
      coords: { longitude: 98.3923, latitude: 7.8804 } 
    },
    {
      id: 8,
      date: "2027 — 2028",
      title: "Наше навсегда",
      description: "Покупка нашей собственной светлой квартиры, долгожданная свадьба и жизнь, полная любви и уюта. И неважно, в каком городе — главное, что мы будем вместе.",
      coords: { longitude: 71.4304, latitude: 51.1282 } 
    }
  ];

  const handleEventClick = (index) => {
    setActiveEvent(index);
    mapRef.current?.flyTo({
      center: [events[index].coords.longitude, events[index].coords.latitude],
      zoom: 11,
      pitch: 65,
      bearing: 15,
      duration: 5000 
    });
  };

  return (
    // ЖЕСТКАЯ ФИКСАЦИЯ ВЫСОТЫ ЭКРАНА: h-screen
    <div className="h-screen w-full bg-slate-900 text-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Левая панель: Хронология (Добавлен h-screen и custom-scrollbar) */}
      <div className="w-full h-[50vh] md:h-screen md:w-1/3 bg-slate-900/95 backdrop-blur-xl p-8 md:p-12 z-10 overflow-y-auto border-r border-white/10 shadow-2xl custom-scrollbar">
        <button 
          onClick={() => navigate('/')}
          className="mb-10 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <span>←</span> Назад
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Наша История
        </h2>

        <div className="space-y-8 border-l-2 border-purple-500/30 pl-6 ml-2 pb-10 relative">
          {events.map((ev, index) => (
            <div 
              key={ev.id}
              onClick={() => handleEventClick(index)}
              className={`relative cursor-pointer transition-all duration-300 ${activeEvent === index ? 'opacity-100 scale-105 translate-x-2' : 'opacity-50 hover:opacity-80'}`}
            >
              <div className={`absolute -left-[35px] top-2 w-4 h-4 rounded-full border-4 border-slate-900 transition-colors duration-500 ${activeEvent === index ? 'bg-pink-400 shadow-[0_0_15px_#f472b6]' : 'bg-purple-600'}`}></div>
              
              <span className="text-xs md:text-sm font-bold text-purple-400 tracking-wider uppercase">{ev.date}</span>
              <h3 className="text-lg md:text-xl font-semibold mt-1">{ev.title}</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">{ev.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Правая панель: Интерактивная 3D Карта */}
      <div className="w-full h-[50vh] md:h-screen md:w-2/3 bg-slate-800 relative">
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: events[0].coords.longitude,
            latitude: events[0].coords.latitude,
            zoom: 5,
            pitch: 45,
            bearing: 0
          }}
          mapStyle="mapbox://styles/mapbox/dark-v11" 
          mapboxAccessToken={MAPBOX_TOKEN}
        />
        {/* Градиент для плавного перехода */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900/95 to-transparent z-0 hidden md:block pointer-events-none"></div>
      </div>

      {/* Красивый кастомный скроллбар для левой панели */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.6);
        }
      `}</style>
    </div>
  );
}

export default TimelineMap;