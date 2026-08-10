import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  rollCoins, 
  interpretHexagram, 
  LineValue, 
  CoinRollResult, 
  HexagramData 
} from './ichingEngine';
import { drawTarotSpread, SpreadDrawResult, TarotCardData } from './tarotEngine';
import { drawRunesSpread, RunesDrawResult, RuneData, NornPosition } from './runesEngine';
import './App.css';

const UI_TEXT = {
  es: {
    title: "ORÁCULOS DE INDIVIDUACIÓN",
    subtitle: "Sincronicidad y el Viaje del Héroe",
    menuIntro: "SELECCIONA EL ESPEJO EN EL QUE DESEAS MIRAR TU PSIQUE HOY",
    ichingTitle: "I-Ching. Oráculo de Individuación",
    questionPlaceholder: "Escribe tu pregunta",
    ichingDesc: "El libro de las mutaciones. Revela las fuerzas dinámicas y los cambios en tu estado actual.",
    tarotTitle: "Tarot. Oráculo de Divinación",
    tarotDesc: "El Viaje del Héroe. Explora los arquetipos psicológicos y el proceso de individuación en tu psique.",
    runesTitle: "Runas. Oráculo de las Norns",
    runesDesc: "El Futhark Antiguo. Extrae las fuerzas primordiales y potencias divinas de tu presente.",
    backToMenu: "← Volver al Menú",
    themeLight: "Claro",
    themeDark: "Oscuro",
    langEs: "Español",
    langEn: "English",
    soundOff: "Sonido: OFF",
    soundOn: "Sonido: ON",
    bgMusicPlaying: "🎵 Música: Activa",
    bgMusicPaused: "🎶 Música: Pausada",
    
    // I Ching specific
    rollButton: "Lanzar Monedas",
    rolling: "Volteando monedas...",
    restartButton: "Nueva Consulta",
    statusLines: (count: number) => `Línea ${count} de 6 generada`,
    ichingIntroText: "El I Ching es un espejo de tu mente inconsciente. Haz una pregunta en silencio, concéntrate y lanza las monedas 6 veces de abajo hacia arriba para revelar las fuerzas en juego en tu viaje interior.",
    mutatingLines: "Líneas Mutantes",
    mutatingIntro: "Estas líneas inestables señalan los puntos de crisis y transformación en tu psique:",
    primaryHex: "Hexagrama Presente (El Estado de tu Ego)",
    secondaryHex: "Hexagrama Futuro (El Destino / Integración)",
    lineLabel: (index: number) => `Línea ${index}:`,
    
    // Tarot specific
    drawTarotBtn: "Extraer Tirada (3 Cartas)",
    drawingTarot: "Barajando el mazo...",
    tarotIntroText: "El Tarot es un mapa simbólico del proceso de Individuación (Jung) y el Viaje del Héroe (Campbell). Las cartas actúan como espejos sincrísticos de tu psique. Concéntrate. Esta tirada revelará los arquetipos subconscientes de tu pasado, la máscara del ego en tu presente, y el punto de inflexión creativo de tu destino potencial.",
    pastTitle: "Pasado (El Subconsciente)",
    presentTitle: "Presente (El Consciente)",
    futureTitle: "Posibilidades (El Punto de Inflexión)",
    tarotCardOf: "Carta:",
    tarotHeroStage: "Etapa del Viaje:",
    tarotSummary: "Resumen Psicológico",
    tarotSymbolism: "Simbología (Rider-Waite)",
    tarotJungian: "Análisis Junguiano",
    tarotHero: "El Viaje del Héroe",
    zoomCardBtn: "Ver Carta en Tamaño Completo",
    zoomCardHint: "Haz clic para ver en detalle",
    closeModal: "Cerrar",
    closeModalHint: "(Haz clic fuera o presiona ESC para cerrar)",
    zoomIn: "Acercar (+)",
    zoomOut: "Alejar (-)",
    zoomReset: "Restablecer",
    zoomHint: "Usa la rueda del mouse o los botones para acercar/alejar y desplazarte por la carta.",
    
    // Runes specific
    drawRunesBtn: "Consultar a las Norns (3 Runas)",
    drawingRunes: "Grabando la piedra...",
    runesIntroText: "Las Runas del Futhark Antiguo son fuerzas primordiales. Las tres Norns (Urd, Verdandi y Skuld) tejen la red de causalidad cósmica (Wyrd). Concéntrate en tu dilema actual y extrae 3 runas para revelar las fuerzas en tu Pasado Inconsciente, la Acción de tu Presente, y la Potencia de tu Devenir.",
    runesUrdTitle: "Urd (El Pasado / Origen)",
    runesVerdandiTitle: "Verdandi (El Presente / Acción)",
    runesSkuldTitle: "Skuld (El Futuro / Devenir)",
    runesDeity: "Potencia Divina:",
    runesJungian: "Arquetipo Junguiano",
    runesHero: "Etapa del Viaje",
    runesMeaning: "Significado Psicológico"
  },
  en: {
    title: "ORACLES OF INDIVIDUATION",
    subtitle: "Synchronicity and the Hero's Journey",
    menuIntro: "SELECT THE MIRROR IN WHICH YOU WISH TO LOOK AT YOUR PSYCHE TODAY",
    ichingTitle: "I-Ching. Oracle of Divination",
    questionPlaceholder: "Write your question",
    ichingDesc: "The book of changes. Reveals the dynamic forces and shifts in your current state.",
    tarotTitle: "Tarot. Oracle of Divination",
    tarotDesc: "The Hero's Journey. Explore the psychological archetypes and the individuation process within your psyche.",
    runesTitle: "Runes. Oracle of the Norns",
    runesDesc: "The Elder Futhark. Draw the primordial forces and divine potencies of your present.",
    backToMenu: "← Back to Menu",
    themeLight: "Light",
    themeDark: "Dark",
    langEs: "Español",
    langEn: "English",
    soundOff: "Sound: OFF",
    soundOn: "Sound: ON",
    bgMusicPlaying: "🎵 Music: Playing",
    bgMusicPaused: "🎶 Music: Paused",
    
    // I Ching specific
    rollButton: "Throw Coins",
    rolling: "Flipping coins...",
    restartButton: "New Reading",
    statusLines: (count: number) => `Line ${count} of 6 generated`,
    ichingIntroText: "The I Ching is a mirror of your unconscious mind. Formulate a question silently, concentrate, and throw the coins 6 times from bottom to top to reveal the forces at play in your inner journey.",
    mutatingLines: "Mutating Lines",
    mutatingIntro: "These unstable lines point to the spots of crisis and transformation in your psyche:",
    primaryHex: "Present Hexagram (The State of your Ego)",
    secondaryHex: "Future Hexagram (The Destination / Integration)",
    lineLabel: (index: number) => `Line ${index}:`,
    
    // Tarot specific
    drawTarotBtn: "Draw Spread (3 Cards)",
    drawingTarot: "Shuffling deck...",
    tarotIntroText: "The Tarot is a symbolic map of the Individuation process (Jung) and the Hero's Journey (Campbell). The cards act as synchronistic mirrors of your psyche. Focus. This spread will reveal the subconscious archetypes shaping your past, the mask of the ego in your present, and the creative inflection point of your potential destiny.",
    pastTitle: "Past (The Subconscious)",
    presentTitle: "Present (The Conscious)",
    futureTitle: "Possibilities (The Inflection Point)",
    tarotCardOf: "Card:",
    tarotHeroStage: "Journey Stage:",
    tarotSummary: "Psychological Summary",
    tarotSymbolism: "Symbolism (Rider-Waite)",
    tarotJungian: "Jungian Analysis",
    tarotHero: "The Hero's Journey",
    zoomCardBtn: "View Full Size Card",
    zoomCardHint: "Click to view details",
    closeModal: "Close",
    closeModalHint: "(Click outside or press ESC to close)",
    zoomIn: "Zoom In (+)",
    zoomOut: "Zoom Out (-)",
    zoomReset: "Reset",
    zoomHint: "Use mouse wheel scroll or control buttons to zoom in/out and pan through the card.",
    
    // Runes specific
    drawRunesBtn: "Consult the Norns (3 Runes)",
    drawingRunes: "Carving the stone...",
    runesIntroText: "The Elder Futhark Runes are primordial forces. The three Norns (Urd, Verdandi, and Skuld) weave the web of cosmic causality (Wyrd). Focus on your current dilemma and draw 3 runes to reveal the forces in your Unconscious Past, Present Action, and Emerging Destiny.",
    runesUrdTitle: "Urd (The Past / Root)",
    runesVerdandiTitle: "Verdandi (The Present / Action)",
    runesSkuldTitle: "Skuld (The Future / Becoming)",
    runesDeity: "Divine Power:",
    runesJungian: "Jungian Archetype",
    runesHero: "Journey Stage",
    runesMeaning: "Psychological Meaning"
  }
};

const getLineInterpretation = (hexData: HexagramData, lineIndex: number, lang: "es" | "en") => {
  if (hexData.lines && (hexData.lines as any)[lineIndex]) {
    return (hexData.lines as any)[lineIndex][lang];
  }
  
  if (lang === "es") {
    return `Línea ${lineIndex} en mutación: Señala una transición en este aspecto de tu vida. Jung sugiere observar esta tensión para integrarla como parte de tu individuación.`;
  } else {
    return `Line ${lineIndex} in transition: Points to a change in this area of your life. Jung suggests observing this tension to integrate it into your individuation.`;
  }
};

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function ProtectedImage({ src, alt, className = "", onClick, style }: ProtectedImageProps) {
  return (
    <div 
      className={`protected-img-wrapper ${className}`}
      onClick={onClick}
      style={{ position: 'relative', cursor: onClick ? 'pointer' : 'default', display: 'inline-block', ...style }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div 
        className="protected-img-overlay"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <img 
        src={src} 
        alt={alt} 
        className="protected-img-content"
        draggable={false} 
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeOracle, setActiveOracle] = useState<"menu" | "iching" | "tarot" | "runes">(() => {
    const params = new URLSearchParams(window.location.search);
    const oracleParam = params.get('oraculo');
    if (oracleParam === 'iching' || oracleParam === 'tarot' || oracleParam === 'runes') {
      return oracleParam;
    }
    return "menu";
  });
  
  // URL Routing Sync
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const oracleParam = params.get('oraculo');
      if (oracleParam === 'iching' || oracleParam === 'tarot' || oracleParam === 'runes') {
        setActiveOracle(oracleParam);
      } else {
        setActiveOracle("menu");
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (oracle: "menu" | "iching" | "tarot" | "runes") => {
    setActiveOracle(oracle);
    if (oracle === "menu") {
      window.history.pushState({}, '', window.location.pathname);
    } else {
      window.history.pushState({}, '', `${window.location.pathname}?oraculo=${oracle}`);
    }
  };
  
  // I Ching Reading states
  const [question, setQuestion] = useState("");
  const [lines, setLines] = useState<LineValue[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollResult, setRollResult] = useState<CoinRollResult | null>(null);
  const [activeIChingTab, setActiveIChingTab] = useState<"primary" | "mutations" | "secondary">("primary");

  // Tarot Reading states
  const [isDrawingTarot, setIsDrawingTarot] = useState(false);
  const [tarotSpread, setTarotSpread] = useState<SpreadDrawResult | null>(null);
  const [activeTarotTab, setActiveTarotTab] = useState<"past" | "present" | "future">("past");
  
  // Runes Reading states
  const [isDrawingRunes, setIsDrawingRunes] = useState(false);
  const [runesSpread, setRunesSpread] = useState<RunesDrawResult | null>(null);
  const [activeRuneTab, setActiveRuneTab] = useState<NornPosition>("urd");
  
  const [maximizedCard, setMaximizedCard] = useState<TarotCardData | RuneData | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Background Audio state & refs (Sound is ON by default)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Map activeOracle view to track URL & title
  const currentTrack = useMemo(() => {
    switch (activeOracle) {
      case "iching":
        return { url: "./still_water.mp3", name: "Still Water" };
      case "tarot":
        return { url: "./sacred_horizon.mp3", name: "Sacred Horizon" };
      case "runes":
        return { url: "./bone_mantra.mp3", name: "Bone Mantra" };
      case "menu":
      default:
        return { url: "./sacred_stillness.mp3", name: "Sacred Stillness" };
    }
  }, [activeOracle]);

  // Audio track switching & auto-play effect
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(currentTrack.url);
      audio.loop = true;
      audio.volume = 0.45;
      audioRef.current = audio;
    } else {
      audioRef.current.pause();
      audioRef.current.src = currentTrack.url;
      audioRef.current.loop = true;
    }

    // Do not overlap background music while the intro video is playing on the menu
    if (activeOracle === "menu" && isVideoPlaying) {
      return;
    }

    if (isAudioPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay policy prevented playback; start audio on first user gesture
        const handleFirstInteraction = () => {
          if (audioRef.current && isAudioPlaying) {
            audioRef.current.play().catch(() => {});
          }
          window.removeEventListener('click', handleFirstInteraction);
          window.removeEventListener('touchstart', handleFirstInteraction);
          window.removeEventListener('keydown', handleFirstInteraction);
        };
        window.addEventListener('click', handleFirstInteraction);
        window.addEventListener('touchstart', handleFirstInteraction);
        window.addEventListener('keydown', handleFirstInteraction);
      });
    }
  }, [currentTrack, isAudioPlaying, activeOracle, isVideoPlaying]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    if (audioRef.current && isAudioPlaying) {
      audioRef.current.src = "./sacred_stillness.mp3";
      audioRef.current.loop = true;
      audioRef.current.play().catch(err => console.log("Video ended audio error:", err));
    }
  };

  const toggleBackgroundAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      setIsAudioPlaying(true);
      if (!(activeOracle === "menu" && isVideoPlaying)) {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      }
    }
  };

  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.25, 3.5));
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.25, 1));
  const handleZoomReset = () => setZoomScale(1);

  const openCardModal = (card: TarotCardData | RuneData) => {
    setMaximizedCard(card);
    setZoomScale(1);
  };

  // Sync HTML theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Keyboard Escape listener & contextmenu prevention for image downloads
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMaximizedCard(null);
      }
    };
    const preventContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.classList.contains('protected-img-overlay')) {
        e.preventDefault();
      }
    };
    const preventDrag = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.classList.contains('protected-img-overlay')) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', preventContextMenu);
    window.addEventListener('dragstart', preventDrag);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('dragstart', preventDrag);
    };
  }, []);

  const toggleLanguage = () => setLang(prev => (prev === "es" ? "en" : "es"));
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const text = UI_TEXT[lang];

  // --- I Ching Handlers ---
  const handleRoll = () => {
    if (lines.length >= 6 || isRolling) return;
    if (question.trim() !== "") {
      setQuestion("");
    }
    setIsRolling(true);
    setRollResult(null);
    setTimeout(() => {
      const res = rollCoins();
      setRollResult(res);
      setLines(prev => [...prev, res.sum]);
      setIsRolling(false);
    }, 800);
  };

  const handleRestartIChing = () => {
    setQuestion("");
    setLines([]);
    setRollResult(null);
    setIsRolling(false);
    setActiveIChingTab("primary");
  };

  const isIChingFinished = lines.length === 6;
  const ichingInterpretation = isIChingFinished ? interpretHexagram(lines) : null;

  // --- Tarot Handlers ---
  const handleDrawTarot = () => {
    if (isDrawingTarot) return;
    if (question.trim() !== "") {
      setQuestion("");
    }
    setIsDrawingTarot(true);
    setTarotSpread(null);
    
    // Simulate shuffling time
    setTimeout(() => {
      setTarotSpread(drawTarotSpread());
      setIsDrawingTarot(false);
      setActiveTarotTab("past");
    }, 1500);
  };

  const handleRestartTarot = () => {
    setQuestion("");
    setTarotSpread(null);
    setIsDrawingTarot(false);
  };

  // --- Runes Handlers ---
  const handleDrawRunes = () => {
    if (isDrawingRunes) return;
    if (question.trim() !== "") {
      setQuestion("");
    }
    setIsDrawingRunes(true);
    setRunesSpread(null);
    
    setTimeout(() => {
      setRunesSpread(drawRunesSpread());
      setIsDrawingRunes(false);
      setActiveRuneTab("urd");
    }, 1500);
  };

  const handleRestartRunes = () => {
    setQuestion("");
    setRunesSpread(null);
    setIsDrawingRunes(false);
  };

  const goBackToMenu = () => {
    navigateTo("menu");
    // Optionally reset states when going back
    handleRestartIChing();
    handleRestartTarot();
    handleRestartRunes();
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="title-area">
          <h1>{text.title}</h1>
          <span className="subtitle">{text.subtitle}</span>
        </div>
        <div className="controls">
          {activeOracle !== "menu" && (
            <button className="btn-icon" onClick={goBackToMenu} style={{ fontWeight: 'bold' }}>
              🏠 {lang === "es" ? "Menú" : "Menu"}
            </button>
          )}
          <button 
            className="btn-icon" 
            onClick={toggleBackgroundAudio} 
            title={isAudioPlaying ? (lang === "es" ? "Desactivar Sonido" : "Turn Sound OFF") : (lang === "es" ? "Activar Sonido" : "Turn Sound ON")}
            style={{
              borderColor: isAudioPlaying ? "var(--accent)" : "var(--panel-border)",
              background: isAudioPlaying ? "var(--accent-light)" : "var(--panel-bg)",
              color: isAudioPlaying ? "var(--accent)" : "var(--text-primary)"
            }}
          >
            {isAudioPlaying ? `🔊 🎵 ${currentTrack.name}` : `🔇 ${text.soundOff}`}
          </button>
          <button className="btn-icon" onClick={toggleLanguage}>
            🌐 {lang === "es" ? text.langEn : text.langEs}
          </button>
          <button className="btn-icon" onClick={toggleTheme}>
            {theme === "light" ? "🌙 " + text.themeDark : "☀️ " + text.themeLight}
          </button>
        </div>
      </header>

      {/* --- MENU VIEW --- */}
      {activeOracle === "menu" && (
        <main className="menu-container">
          <div className="divider-line" />

          <div className="video-container">
            <video 
              controls 
              autoPlay 
              playsInline 
              className="intro-video"
              src="./IntroToOracles.mp4"
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnded}
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>

          <div className="divider-line" />

          <h2 className="menu-intro">{text.menuIntro}</h2>

          <div className="oracle-cards">
            <div className="oracle-selection-card glass-panel" onClick={() => navigateTo("tarot")}>
              <div className="oracle-icon">🃏</div>
              <h2>{text.tarotTitle}</h2>
              <p>{text.tarotDesc}</p>
            </div>
            <div className="oracle-selection-card glass-panel" onClick={() => navigateTo("iching")}>
              <div className="oracle-icon">☯</div>
              <h2>{text.ichingTitle}</h2>
              <p>{text.ichingDesc}</p>
            </div>
            <div className="oracle-selection-card glass-panel" onClick={() => navigateTo("runes")}>
              <div className="oracle-icon">ᛉ</div>
              <h2>{text.runesTitle}</h2>
              <p>{text.runesDesc}</p>
            </div>
          </div>
        </main>
      )}

      {/* --- I CHING VIEW --- */}
      {activeOracle === "iching" && (
        <main className="app-grid">
          <section className="glass-panel oracle-section">
            <h2 className="oracle-title">{text.ichingTitle}</h2>

            <div className="question-input-container">
              <input 
                type="text" 
                className="question-input" 
                placeholder={text.questionPlaceholder}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>

            <div className="coins-container">
              {rollResult ? (
                rollResult.coins.map((coin, index) => (
                  <div key={index} className={`coin ${isRolling ? 'flipping' : ''} ${coin === 2 ? 'yin' : 'yang'}`}>
                    {coin === 2 ? "☯" : "✵"}
                    <div className="coin-inner"></div>
                  </div>
                ))
              ) : (
                [1, 2, 3].map(i => (
                  <div key={i} className={`coin yin ${isRolling ? 'flipping' : ''}`}>
                    ? <div className="coin-inner"></div>
                  </div>
                ))
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              {lines.length > 0 && !isIChingFinished && (
                <p className="badge-stage" style={{ alignSelf: "center" }}>
                  {text.statusLines(lines.length)}
                </p>
              )}
            </div>

            {!isIChingFinished ? (
              <button className="btn-roll" onClick={handleRoll} disabled={isRolling}>
                {isRolling ? text.rolling : text.rollButton}
              </button>
            ) : (
              <button className="btn-roll" onClick={handleRestartIChing}>
                {text.restartButton}
              </button>
            )}

            {lines.length > 0 && (
              <div className="hexagram-board">
                {lines.map((val, idx) => {
                  const isYang = val === 7 || val === 9;
                  const isMutating = val === 6 || val === 9;
                  return (
                    <div key={idx} className="hexagram-line-row">
                      {isYang ? (
                        <div className="line-solid" />
                      ) : (
                        <div className="line-broken">
                          <div className="chunk" />
                          <div className="chunk" />
                        </div>
                      )}
                      {isMutating && (
                        <span className="mutating-marker">
                          {val === 6 ? "×" : "o"}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          <section className="reading-section">
            {!isIChingFinished ? (
              <div className="glass-panel hexagram-detail-card" style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
                <p>{text.ichingIntroText}</p>
              </div>
            ) : (
              ichingInterpretation && (
                <div className="reading-panel">
                  <div className="controls" style={{ marginBottom: "1.5rem" }}>
                    <button 
                      className="btn-icon" 
                      style={{ 
                        borderColor: activeIChingTab === "primary" ? "var(--accent)" : "var(--panel-border)",
                        background: activeIChingTab === "primary" ? "var(--accent-light)" : "var(--panel-bg)",
                        color: activeIChingTab === "primary" ? "var(--accent)" : "var(--text-primary)"
                      }}
                      onClick={() => setActiveIChingTab("primary")}
                    >
                      ☯ {text.primaryHex}
                    </button>
                    {ichingInterpretation.movingLines.length > 0 && (
                      <>
                        <button 
                          className="btn-icon"
                          style={{ 
                            borderColor: activeIChingTab === "mutations" ? "var(--accent)" : "var(--panel-border)",
                            background: activeIChingTab === "mutations" ? "var(--accent-light)" : "var(--panel-bg)",
                            color: activeIChingTab === "mutations" ? "var(--accent)" : "var(--text-primary)"
                          }}
                          onClick={() => setActiveIChingTab("mutations")}
                        >
                          ⚡ {text.mutatingLines} ({ichingInterpretation.movingLines.length})
                        </button>
                        <button 
                          className="btn-icon"
                          style={{ 
                            borderColor: activeIChingTab === "secondary" ? "var(--accent)" : "var(--panel-border)",
                            background: activeIChingTab === "secondary" ? "var(--accent-light)" : "var(--panel-bg)",
                            color: activeIChingTab === "secondary" ? "var(--accent)" : "var(--text-primary)"
                          }}
                          onClick={() => setActiveIChingTab("secondary")}
                        >
                          🔮 {text.secondaryHex}
                        </button>
                      </>
                    )}
                  </div>

                  {activeIChingTab === "primary" && (
                    <div className="glass-panel hexagram-detail-card">
                      <span className="hex-number">{text.primaryHex}</span>
                      <h2 className="hex-title">
                        {ichingInterpretation.primary.number}. {ichingInterpretation.primary.name[lang]}{" "}
                        <span className="pinyin-title">({ichingInterpretation.primary.name.pinyin})</span>
                      </h2>
                      <p className="hex-image-label">{ichingInterpretation.primary.image[lang]}</p>
                      <div className="badge-stage">
                        🦸‍♂️ {ichingInterpretation.primary.heroJourneyStage[lang]}
                      </div>
                      <div className="hex-description">
                        <p>{ichingInterpretation.primary.summary[lang]}</p>
                      </div>
                    </div>
                  )}

                  {activeIChingTab === "mutations" && (
                    <div className="glass-panel hexagram-detail-card">
                      <span className="hex-number">{text.mutatingLines}</span>
                      <h2>{text.mutatingLines}</h2>
                      <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{text.mutatingIntro}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {ichingInterpretation.movingLines.map(lineNum => (
                          <div key={lineNum} className="mutating-explanation">
                            <strong>{text.lineLabel(lineNum)} </strong>
                            <span>{getLineInterpretation(ichingInterpretation.primary, lineNum, lang)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeIChingTab === "secondary" && ichingInterpretation.secondary && (
                    <div className="glass-panel hexagram-detail-card">
                      <span className="hex-number">{text.secondaryHex}</span>
                      <h2 className="hex-title">
                        {ichingInterpretation.secondary.number}. {ichingInterpretation.secondary.name[lang]}{" "}
                        <span className="pinyin-title">({ichingInterpretation.secondary.name.pinyin})</span>
                      </h2>
                      <p className="hex-image-label">{ichingInterpretation.secondary.image[lang]}</p>
                      <div className="badge-stage">
                        🌟 {ichingInterpretation.secondary.heroJourneyStage[lang]}
                      </div>
                      <div className="hex-description">
                        <p>{ichingInterpretation.secondary.summary[lang]}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </section>
        </main>
      )}

      {/* --- TAROT VIEW --- */}
      {activeOracle === "tarot" && (
        <main className="tarot-container">
          {!tarotSpread ? (
            <div className="tarot-intro glass-panel">
              <h2 className="oracle-title" style={{ marginBottom: '1rem' }}>{text.tarotTitle}</h2>
              <div className="question-input-container" style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}>
                <input 
                  type="text" 
                  className="question-input" 
                  placeholder={text.questionPlaceholder}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="oracle-icon" style={{ fontSize: '4rem', marginBottom: '1rem' }}>🃏</div>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", marginBottom: '2rem', maxWidth: '600px', textAlign: 'center' }}>
                {text.tarotIntroText}
              </p>
              <button 
                className="btn-roll" 
                onClick={handleDrawTarot} 
                disabled={isDrawingTarot}
              >
                {isDrawingTarot ? text.drawingTarot : text.drawTarotBtn}
              </button>
            </div>
          ) : (
            <div className="tarot-spread-layout">
              {/* Spread visualizer top area */}
              <div className="spread-visualizer">
                {(["past", "present", "future"] as const).map(position => {
                  const card = tarotSpread[position];
                  const title = position === 'past' ? text.pastTitle : position === 'present' ? text.presentTitle : text.futureTitle;
                  const isActive = activeTarotTab === position;
                  return (
                    <div 
                      key={position}
                      className={`tarot-card-slot ${isActive ? 'active-slot' : ''}`}
                      onClick={() => {
                        setActiveTarotTab(position);
                        openCardModal(card);
                      }}
                      title={text.zoomCardHint}
                    >
                      <div className="slot-img-wrapper">
                        <ProtectedImage src={card.image} alt={card.name[lang]} className="tarot-img" />
                        <div className="zoom-badge">
                          🔍 {lang === "es" ? "Ampliar" : "Expand"}
                        </div>
                      </div>
                      <div className="slot-label">{title}</div>
                    </div>
                  );
                })}
              </div>

              {/* Spread interpretation bottom area */}
              <div className="spread-interpretation glass-panel">
                <div className="reading-panel">
                  <div className="controls" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
                    {(["past", "present", "future"] as const).map(tab => (
                      <button 
                        key={tab}
                        className="btn-icon" 
                        style={{ 
                          borderColor: activeTarotTab === tab ? "var(--accent)" : "var(--panel-border)",
                          background: activeTarotTab === tab ? "var(--accent-light)" : "var(--panel-bg)",
                          color: activeTarotTab === tab ? "var(--accent)" : "var(--text-primary)",
                          flex: 1
                        }}
                        onClick={() => setActiveTarotTab(tab)}
                      >
                        {tab === "past" ? "🌑 " + text.pastTitle : 
                         tab === "present" ? "🌓 " + text.presentTitle : 
                         "🌕 " + text.futureTitle}
                      </button>
                    ))}
                  </div>
                  
                  {/* Detailed interpretation based on active tab */}
                  {(() => {
                    const activeCard = tarotSpread[activeTarotTab];
                    return (
                      <div className="hexagram-detail-card" style={{ padding: 0, background: 'transparent', border: 'none' }}>
                        <span className="hex-number">{activeCard.numberRoman}</span>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h2 className="hex-title" style={{ margin: 0 }}>
                            {activeCard.name[lang]}
                          </h2>
                          <button 
                            className="btn-icon" 
                            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                            onClick={() => openCardModal(activeCard)}
                          >
                            🔍 {text.zoomCardBtn}
                          </button>
                        </div>
                        <div className="badge-stage" style={{ marginBottom: '1rem' }}>
                          🦸‍♂️ {activeCard.heroJourneyStage[lang]}
                        </div>
                        <div className="hex-description">
                          {activeCard.summary && activeCard.summary[lang] && (
                            <>
                              <h3 style={{marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.tarotSummary}</h3>
                              <p>{activeCard.summary[lang]}</p>
                            </>
                          )}
                          
                          {activeCard.symbolism && activeCard.symbolism[lang] && (
                            <>
                              <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.tarotSymbolism}</h3>
                              <p>{activeCard.symbolism[lang]}</p>
                            </>
                          )}
                          
                          {activeCard.jungianAnalysis && activeCard.jungianAnalysis[lang] && (
                            <>
                              <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.tarotJungian}</h3>
                              <p>{activeCard.jungianAnalysis[lang]}</p>
                            </>
                          )}
                          
                          {activeCard.herosJourney && activeCard.herosJourney[lang] && (
                            <>
                              <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.tarotHero}</h3>
                              <p>{activeCard.herosJourney[lang]}</p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <button className="btn-back" style={{ marginTop: '2rem' }} onClick={handleRestartTarot}>
                {text.restartButton}
              </button>
            </div>
          )}
        </main>
      )}

      {/* --- RUNES VIEW --- */}
      {activeOracle === "runes" && (
        <main className="tarot-container">
          {!runesSpread ? (
            <div className="tarot-intro glass-panel">
              <h2 className="oracle-title" style={{ marginBottom: '1rem' }}>{text.runesTitle}</h2>
              <div className="question-input-container" style={{ width: '100%', maxWidth: '400px', marginBottom: '1rem' }}>
                <input 
                  type="text" 
                  className="question-input" 
                  placeholder={text.questionPlaceholder}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className="oracle-icon" style={{ fontSize: '4rem', marginBottom: '1rem', fontFamily: "'Segoe UI Historic', 'Noto Sans Runic', sans-serif", letterSpacing: '0.2em' }}>ᚠᚢᚦᚨᚱᚲ</div>
              <p style={{ fontStyle: "italic", color: "var(--text-secondary)", marginBottom: '2rem', maxWidth: '600px', textAlign: 'center' }}>
                {text.runesIntroText}
              </p>
              <button 
                className="btn-roll" 
                onClick={handleDrawRunes} 
                disabled={isDrawingRunes}
              >
                {isDrawingRunes ? text.drawingRunes : text.drawRunesBtn}
              </button>
            </div>
          ) : (
            <div className="tarot-spread-layout">
              <div className="spread-visualizer">
                {(["urd", "verdandi", "skuld"] as const).map(position => {
                  const card = runesSpread[position];
                  const title = position === 'urd' ? text.runesUrdTitle : position === 'verdandi' ? text.runesVerdandiTitle : text.runesSkuldTitle;
                  const isActive = activeRuneTab === position;
                  return (
                    <div 
                      key={position}
                      className={`tarot-card-slot ${isActive ? 'active-slot' : ''}`}
                      onClick={() => {
                        setActiveRuneTab(position);
                        openCardModal(card);
                      }}
                      title={text.zoomCardHint}
                    >
                      <div className="slot-img-wrapper" style={{aspectRatio: '1/1'}}>
                        <ProtectedImage src={card.image} alt={card.name[lang]} className="tarot-img" style={{objectFit: 'cover'}} />
                        <div className="zoom-badge">
                          🔍 {lang === "es" ? "Ampliar" : "Expand"}
                        </div>
                      </div>
                      <div className="slot-label">{title}</div>
                    </div>
                  );
                })}
              </div>

              <div className="spread-interpretation glass-panel">
                <div className="reading-panel">
                  <div className="controls" style={{ marginBottom: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                    {(["urd", "verdandi", "skuld"] as const).map(tab => (
                      <button 
                        key={tab}
                        className="btn-icon" 
                        style={{ 
                          borderColor: activeRuneTab === tab ? "var(--accent)" : "var(--panel-border)",
                          background: activeRuneTab === tab ? "var(--accent-light)" : "var(--panel-bg)",
                          color: activeRuneTab === tab ? "var(--accent)" : "var(--text-primary)",
                          flex: 1,
                          minWidth: "120px"
                        }}
                        onClick={() => setActiveRuneTab(tab)}
                      >
                        {tab === "urd" ? "📜 " + text.runesUrdTitle : 
                         tab === "verdandi" ? "⚡ " + text.runesVerdandiTitle : 
                         "✨ " + text.runesSkuldTitle}
                      </button>
                    ))}
                  </div>
                  
                  {(() => {
                    const activeRune = runesSpread[activeRuneTab];
                    return (
                      <div className="hexagram-detail-card" style={{ padding: 0, background: 'transparent', border: 'none' }}>
                        <span className="hex-number" style={{fontFamily: "'Segoe UI Historic', 'Noto Sans Runic', sans-serif"}}>{activeRune.symbol}</span>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h2 className="hex-title" style={{ margin: 0 }}>
                            {activeRune.name[lang]}
                          </h2>
                          <button 
                            className="btn-icon" 
                            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                            onClick={() => openCardModal(activeRune)}
                          >
                            🔍 {text.zoomCardBtn}
                          </button>
                        </div>
                        <div className="badge-stage" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                          🦸‍♂️ {activeRune.aett[lang]}
                        </div>
                        <div className="badge-stage" style={{ marginBottom: '1rem', display: 'inline-block', marginLeft: '1rem', background: 'rgba(212, 175, 55, 0.15)', borderColor: 'rgba(212, 175, 55, 0.4)', color: '#d4af37' }}>
                          ⚡ {activeRune.godOrPower[lang]}
                        </div>
                        <div className="hex-description">
                          {activeRune.summary && activeRune.summary[lang] && (
                            <>
                              <h3 style={{marginTop: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.runesMeaning}</h3>
                              <p>{activeRune.summary[lang]}</p>
                            </>
                          )}
                          
                          {activeRune.jungianAnalysis && activeRune.jungianAnalysis[lang] && (
                            <>
                              <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent)'}}>{text.runesJungian}</h3>
                              <p>{activeRune.jungianAnalysis[lang]}</p>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <button className="btn-back" style={{ marginTop: '2rem' }} onClick={handleRestartRunes}>
                {text.restartButton}
              </button>
            </div>
          )}
        </main>
      )}

      {/* --- CARD MAXIMIZE MODAL (TAROT & RUNES) --- */}
      {maximizedCard && (
        <div className="modal-backdrop" onClick={() => setMaximizedCard(null)}>
          <div className="modal-card-full glass-panel" onClick={(e) => e.stopPropagation()}>
            <header className="modal-toolbar">
              <div className="modal-title-group">
                <span className="hex-number" style={{fontFamily: 'symbol' in maximizedCard ? "'Segoe UI Historic', 'Noto Sans Runic', sans-serif" : "inherit"}}>
                  {'symbol' in maximizedCard ? maximizedCard.symbol : maximizedCard.numberRoman}
                </span>
                <h2>{maximizedCard.name[lang]}</h2>
                <span className="badge-stage" style={{ margin: 0 }}>🦸‍♂️ {'aett' in maximizedCard ? maximizedCard.aett[lang] : maximizedCard.heroJourneyStage[lang]}</span>
              </div>
              <div className="modal-actions">
                <button className="zoom-btn-control" onClick={handleZoomIn} title="Zoom In">
                  {text.zoomIn}
                </button>
                <button className="zoom-btn-control" onClick={handleZoomOut} title="Zoom Out">
                  {text.zoomOut}
                </button>
                <button className="zoom-btn-control" onClick={handleZoomReset} title="Reset">
                  {text.zoomReset} ({Math.round(zoomScale * 100)}%)
                </button>
                <button className="zoom-btn-control close" onClick={() => setMaximizedCard(null)} title="Close">
                  {text.closeModal}
                </button>
              </div>
            </header>

            <div 
              className="modal-viewport"
              onWheel={(e) => {
                e.stopPropagation();
                if (e.deltaY < 0) {
                  handleZoomIn();
                } else {
                  handleZoomOut();
                }
              }}
            >
              <div 
                className="maximized-image-wrapper"
                style={{ 
                  transform: `scale(${zoomScale})`, 
                  transformOrigin: 'center center' 
                }}
              >
                <ProtectedImage 
                  src={maximizedCard.image} 
                  alt={maximizedCard.name[lang]} 
                  className="maximized-tarot-img"
                />
              </div>
            </div>

            <footer className="modal-footer">
              <span>💡 {text.zoomHint}</span>
              <span>ESC {text.closeModalHint}</span>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
