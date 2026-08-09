import { useState, useEffect } from 'react';
import { 
  rollCoins, 
  interpretHexagram, 
  LineValue, 
  CoinRollResult, 
  HexagramData 
} from './ichingEngine';
import { drawTarotSpread, SpreadDrawResult } from './tarotEngine';
import './App.css';

const UI_TEXT = {
  es: {
    title: "Oráculos de Individuación",
    subtitle: "Sincronicidad y el Viaje del Héroe",
    menuIntro: "Selecciona el espejo en el que deseas mirar tu psique hoy:",
    ichingTitle: "I Ching",
    ichingDesc: "El libro de las mutaciones. Revela las fuerzas dinámicas y los cambios en tu estado actual.",
    tarotTitle: "Tarot",
    tarotDesc: "El Viaje del Héroe. Explora los arquetipos psicológicos y el proceso de individuación en tu psique.",
    backToMenu: "← Volver al Menú",
    themeLight: "Claro",
    themeDark: "Oscuro",
    langEs: "Español",
    langEn: "English",
    
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
    tarotHero: "El Viaje del Héroe"
  },
  en: {
    title: "Oracles of Individuation",
    subtitle: "Synchronicity and the Hero's Journey",
    menuIntro: "Select the mirror in which you wish to look at your psyche today:",
    ichingTitle: "I Ching",
    ichingDesc: "The book of changes. Reveals the dynamic forces and shifts in your current state.",
    tarotTitle: "Tarot",
    tarotDesc: "The Hero's Journey. Explore the psychological archetypes and the individuation process within your psyche.",
    backToMenu: "← Back to Menu",
    themeLight: "Light",
    themeDark: "Dark",
    langEs: "Español",
    langEn: "English",
    
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
    tarotHero: "The Hero's Journey"
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

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeOracle, setActiveOracle] = useState<"menu" | "iching" | "tarot">("menu");
  
  // I Ching Reading states
  const [lines, setLines] = useState<LineValue[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollResult, setRollResult] = useState<CoinRollResult | null>(null);
  const [activeIChingTab, setActiveIChingTab] = useState<"primary" | "mutations" | "secondary">("primary");

  // Tarot Reading states
  const [isDrawingTarot, setIsDrawingTarot] = useState(false);
  const [tarotSpread, setTarotSpread] = useState<SpreadDrawResult | null>(null);
  const [activeTarotTab, setActiveTarotTab] = useState<"past" | "present" | "future">("past");

  // Sync HTML theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleLanguage = () => setLang(prev => (prev === "es" ? "en" : "es"));
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const text = UI_TEXT[lang];

  // --- I Ching Handlers ---
  const handleRoll = () => {
    if (lines.length >= 6 || isRolling) return;
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
    setTarotSpread(null);
    setIsDrawingTarot(false);
  };

  const goBackToMenu = () => {
    setActiveOracle("menu");
    // Optionally reset states when going back
    handleRestartIChing();
    handleRestartTarot();
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="title-area">
          <h1>{text.title}</h1>
          <span className="subtitle">{text.subtitle}</span>
        </div>
        <div className="controls">
          <button className="btn-icon" onClick={toggleLanguage}>
            🌐 {lang === "es" ? text.langEn : text.langEs}
          </button>
          <button className="btn-icon" onClick={toggleTheme}>
            {theme === "light" ? "🌙 " + text.themeDark : "☀️ " + text.themeLight}
          </button>
        </div>
      </header>

      {/* BACK BUTTON */}
      {activeOracle !== "menu" && (
        <button className="btn-back" onClick={goBackToMenu}>
          {text.backToMenu}
        </button>
      )}

      {/* --- MENU VIEW --- */}
      {activeOracle === "menu" && (
        <main className="menu-container">
          <p className="menu-intro">{text.menuIntro}</p>
          <div className="oracle-cards">
            <div className="oracle-selection-card glass-panel" onClick={() => setActiveOracle("tarot")}>
              <div className="oracle-icon">🃏</div>
              <h2>{text.tarotTitle}</h2>
              <p>{text.tarotDesc}</p>
            </div>
            <div className="oracle-selection-card glass-panel" onClick={() => setActiveOracle("iching")}>
              <div className="oracle-icon">☯</div>
              <h2>{text.ichingTitle}</h2>
              <p>{text.ichingDesc}</p>
            </div>
          </div>
        </main>
      )}

      {/* --- I CHING VIEW --- */}
      {activeOracle === "iching" && (
        <main className="app-grid">
          <section className="glass-panel oracle-section">
            <h2>{isIChingFinished ? text.restartButton : text.rollButton}</h2>
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
                <div 
                  className={`tarot-card-slot ${activeTarotTab === 'past' ? 'active-slot' : ''}`}
                  onClick={() => setActiveTarotTab("past")}
                >
                  <img src={tarotSpread.past.image} alt={tarotSpread.past.name[lang]} className="tarot-img" />
                  <div className="slot-label">{text.pastTitle}</div>
                </div>
                <div 
                  className={`tarot-card-slot ${activeTarotTab === 'present' ? 'active-slot' : ''}`}
                  onClick={() => setActiveTarotTab("present")}
                >
                  <img src={tarotSpread.present.image} alt={tarotSpread.present.name[lang]} className="tarot-img" />
                  <div className="slot-label">{text.presentTitle}</div>
                </div>
                <div 
                  className={`tarot-card-slot ${activeTarotTab === 'future' ? 'active-slot' : ''}`}
                  onClick={() => setActiveTarotTab("future")}
                >
                  <img src={tarotSpread.future.image} alt={tarotSpread.future.name[lang]} className="tarot-img" />
                  <div className="slot-label">{text.futureTitle}</div>
                </div>
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
                        <h2 className="hex-title">
                          {activeCard.name[lang]}
                        </h2>
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
    </div>
  );
}

export default App;
