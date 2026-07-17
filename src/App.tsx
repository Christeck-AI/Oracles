import { useState, useEffect } from 'react';
import { 
  rollCoins, 
  interpretHexagram, 
  LineValue, 
  CoinRollResult, 
  HexagramData 
} from './ichingEngine';
import './App.css';

const UI_TEXT = {
  es: {
    title: "Oráculo del I Ching Psicológico",
    subtitle: "Sincronicidad, Individuación y el Viaje del Héroe",
    themeLight: "Claro",
    themeDark: "Oscuro",
    langEs: "Español",
    langEn: "English",
    rollButton: "Lanzar Monedas",
    rolling: "Volteando monedas...",
    restartButton: "Nueva Consulta",
    statusLines: (count: number) => `Línea ${count} de 6 generada`,
    introText: "El I Ching es un espejo de tu mente inconsciente. Haz una pregunta en silencio, concéntrate y lanza las monedas 6 veces de abajo hacia arriba para revelar las fuerzas en juego en tu viaje interior.",
    mutatingLines: "Líneas Mutantes",
    mutatingIntro: "Estas líneas inestables señalan los puntos de crisis y transformación en tu psique:",
    primaryHex: "Hexagrama Presente (El Estado de tu Ego)",
    secondaryHex: "Hexagrama Futuro (El Destino / Integración)",
    lineLabel: (index: number) => `Línea ${index}:`,
    mutatedTo: "Mutado a:",
    noMutations: "Tu estado actual es de equilibrio. No hay líneas mutantes. El camino actual es estable y no requiere transformaciones inmediatas.",
    yinLabel: "Yin",
    yangLabel: "Yang",
    oldYin: "Viejo Yin (Mutante)",
    oldYang: "Viejo Yang (Mutante)"
  },
  en: {
    title: "Psychological I Ching Oracle",
    subtitle: "Synchronicity, Individuation and the Hero's Journey",
    themeLight: "Light",
    themeDark: "Dark",
    langEs: "Español",
    langEn: "English",
    rollButton: "Throw Coins",
    rolling: "Flipping coins...",
    restartButton: "New Reading",
    statusLines: (count: number) => `Line ${count} of 6 generated`,
    introText: "The I Ching is a mirror of your unconscious mind. Formulate a question silently, concentrate, and throw the coins 6 times from bottom to top to reveal the forces at play in your inner journey.",
    mutatingLines: "Mutating Lines",
    mutatingIntro: "These unstable lines point to the spots of crisis and transformation in your psyche:",
    primaryHex: "Present Hexagram (The State of your Ego)",
    secondaryHex: "Future Hexagram (The Destination / Integration)",
    lineLabel: (index: number) => `Line ${index}:`,
    mutatedTo: "Mutated to:",
    noMutations: "Your current state is in equilibrium. There are no mutating lines. The present path is stable and requires no immediate transformation.",
    yinLabel: "Yin",
    yangLabel: "Yang",
    oldYin: "Old Yin (Mutating)",
    oldYang: "Old Yang (Mutating)"
  }
};

// Simplified translation values for mutating lines in classical I Ching
const lineTranslations: Record<number, Record<number, { es: string; en: string }>> = {
  1: { // Hexagram 1 lines
    1: { es: "Dragón escondido. No actuar. La fuerza creativa aún está latente en el inconsciente.", en: "Hidden dragon. Do not act. The creative force is still latent in the unconscious." },
    2: { es: "El dragón aparece en el campo. Es ventajoso ver al gran hombre. El ego comienza a manifestar su potencial.", en: "Dragon appearing in the field. Advantageous to see the great man. The ego begins to manifest its potential." },
    3: { es: "El hombre superior trabaja todo el día. Peligro pero sin reproches. Gran esfuerzo y tensión en el mundo consciente.", en: "The superior man works all day. Danger but no blame. Great effort and tension in the conscious world." },
    4: { es: "Vuelo hesitante sobre los abismos. La prueba de decisión antes de tomar la vía del héroe.", en: "Hesitant flight over the depths. The test of decision before taking the hero's path." },
    5: { es: "Dragón volando en el cielo. Integración del Sí Mismo y manifestación de tu verdadera esencia.", en: "Flying dragon in the sky. Integration of the Self and manifestation of your true essence." },
    6: { es: "Dragón arrogante deberá arrepentirse. Cuidado con la inflación del ego al alcanzar la cumbre.", en: "Arrogant dragon will have cause to repent. Beware of ego inflation upon reaching the summit." }
  },
  2: { // Hexagram 2 lines
    1: { es: "Escarcha bajo los pies. El hielo firme se acerca. Atención a las señales sutiles de la sombra.", en: "Frost underfoot. Solid ice is near. Pay attention to the shadow's subtle signs." },
    2: { es: "Directo, cuadrado, grande. Sin propósito previo, todo es favorecido. Fluir natural con el inconsciente.", en: "Straight, square, great. Without prior purpose, everything is favored. Natural flow with the unconscious." },
    3: { es: "Líneas ocultas. Mantenerse perseverante. Humildad al servicio de una causa superior.", en: "Hidden lines. Remain persevering. Humility in service of a greater cause." },
    4: { es: "Un talego amarrado. Ni alabanzas ni reproches. Retirada y reserva voluntaria de la libido.", en: "A tied sack. No praise, no blame. Voluntary withdrawal and reserve of libido." },
    5: { es: "Una orla amarilla en el traje. Éxito discreto a través de la rectitud y la justicia interna.", en: "A yellow undergarment. Discrete success through inner rectitude and justice." },
    6: { es: "Los dragones luchan en el espacio. Su sangre es negra y amarilla. Conflicto severo entre fuerzas opuestas de la mente.", en: "Dragons fight in the wild. Their blood is black and yellow. Severe conflict between opposing forces of the mind." }
  }
};

const getLineInterpretation = (hexNum: number, lineIndex: number, lang: "es" | "en") => {
  const custom = lineTranslations[hexNum]?.[lineIndex];
  if (custom) return custom[lang];
  
  // Generic psychological interpretation fallback
  if (lang === "es") {
    return `Línea ${lineIndex} en mutación: Señala una transición en este aspecto de tu vida. Jung sugiere observar esta tensión para integrarla como parte de tu individuación.`;
  } else {
    return `Line ${lineIndex} in transition: Points to a change in this area of your life. Jung suggests observing this tension to integrate it into your individuation.`;
  }
};

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Reading states
  const [lines, setLines] = useState<LineValue[]>([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollResult, setRollResult] = useState<CoinRollResult | null>(null);
  const [activeTab, setActiveTab] = useState<"primary" | "mutations" | "secondary">("primary");

  // Sync HTML theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleRoll = () => {
    if (lines.length >= 6 || isRolling) return;
    
    setIsRolling(true);
    setRollResult(null);

    // Simulate 3D rolling animation time
    setTimeout(() => {
      const res = rollCoins();
      setRollResult(res);
      setLines(prev => [...prev, res.sum]);
      setIsRolling(false);
    }, 800);
  };

  const handleRestart = () => {
    setLines([]);
    setRollResult(null);
    setIsRolling(false);
    setActiveTab("primary");
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === "es" ? "en" : "es"));
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const text = UI_TEXT[lang];
  const isFinished = lines.length === 6;
  
  // Interpret hexagrams when roll is complete
  const interpretation = isFinished ? interpretHexagram(lines) : null;

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

      <main className="app-grid">
        {/* Left column: Oracular Board & Coin rollers */}
        <section className="glass-panel oracle-section">
          <h2>{isFinished ? text.restartButton : text.rollButton}</h2>
          
          <div className="coins-container">
            {rollResult ? (
              rollResult.coins.map((coin, index) => (
                <div 
                  key={index} 
                  className={`coin ${isRolling ? 'flipping' : ''} ${coin === 2 ? 'yin' : 'yang'}`}
                >
                  {coin === 2 ? "☯" : "✵"}
                  <div className="coin-inner"></div>
                </div>
              ))
            ) : (
              // Empty coin slots
              [1, 2, 3].map(i => (
                <div key={i} className={`coin yin ${isRolling ? 'flipping' : ''}`}>
                  ?
                  <div className="coin-inner"></div>
                </div>
              ))
            )}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            {lines.length > 0 && !isFinished && (
              <p className="badge-stage" style={{ alignSelf: "center" }}>
                {text.statusLines(lines.length)}
              </p>
            )}
          </div>

          {!isFinished ? (
            <button 
              className="btn-roll" 
              onClick={handleRoll} 
              disabled={isRolling}
            >
              {isRolling ? text.rolling : text.rollButton}
            </button>
          ) : (
            <button className="btn-roll" onClick={handleRestart}>
              {text.restartButton}
            </button>
          )}

          {/* Hexagram visualization board */}
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

        {/* Right column: Results & Psychological Readings */}
        <section className="reading-section">
          {!isFinished ? (
            <div className="glass-panel hexagram-detail-card" style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
              <p>{text.introText}</p>
            </div>
          ) : (
            interpretation && (
              <div className="reading-panel">
                {/* Navigation Tabs for results */}
                <div className="controls" style={{ marginBottom: "1.5rem" }}>
                  <button 
                    className="btn-icon" 
                    style={{ 
                      borderColor: activeTab === "primary" ? "var(--accent)" : "var(--panel-border)",
                      background: activeTab === "primary" ? "var(--accent-light)" : "var(--panel-bg)",
                      color: activeTab === "primary" ? "var(--accent)" : "var(--text-primary)"
                    }}
                    onClick={() => setActiveTab("primary")}
                  >
                    ☯ {text.primaryHex}
                  </button>

                  {interpretation.movingLines.length > 0 && (
                    <>
                      <button 
                        className="btn-icon"
                        style={{ 
                          borderColor: activeTab === "mutations" ? "var(--accent)" : "var(--panel-border)",
                          background: activeTab === "mutations" ? "var(--accent-light)" : "var(--panel-bg)",
                          color: activeTab === "mutations" ? "var(--accent)" : "var(--text-primary)"
                        }}
                        onClick={() => setActiveTab("mutations")}
                      >
                        ⚡ {text.mutatingLines} ({interpretation.movingLines.length})
                      </button>

                      <button 
                        className="btn-icon"
                        style={{ 
                          borderColor: activeTab === "secondary" ? "var(--accent)" : "var(--panel-border)",
                          background: activeTab === "secondary" ? "var(--accent-light)" : "var(--panel-bg)",
                          color: activeTab === "secondary" ? "var(--accent)" : "var(--text-primary)"
                        }}
                        onClick={() => setActiveTab("secondary")}
                      >
                        🔮 {text.secondaryHex}
                      </button>
                    </>
                  )}
                </div>

                {/* Tab content 1: Primary Hexagram */}
                {activeTab === "primary" && (
                  <div className="glass-panel hexagram-detail-card">
                    <span className="hex-number">{text.primaryHex}</span>
                    <h2 className="hex-title">
                      {interpretation.primary.number}. {interpretation.primary.name[lang]}{" "}
                      <span className="pinyin-title">({interpretation.primary.name.pinyin})</span>
                    </h2>
                    <p className="hex-image-label">{interpretation.primary.image[lang]}</p>
                    <div className="badge-stage">
                      🦸‍♂️ {interpretation.primary.heroJourneyStage[lang]}
                    </div>
                    <div className="hex-description">
                      <p>{interpretation.primary.summary[lang]}</p>
                    </div>
                  </div>
                )}

                {/* Tab content 2: Mutating lines */}
                {activeTab === "mutations" && (
                  <div className="glass-panel hexagram-detail-card">
                    <span className="hex-number">{text.mutatingLines}</span>
                    <h2>{text.mutatingLines}</h2>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{text.mutatingIntro}</p>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {interpretation.movingLines.map(lineNum => (
                        <div key={lineNum} className="mutating-explanation">
                          <strong>{text.lineLabel(lineNum)} </strong>
                          <span>
                            {getLineInterpretation(interpretation.primary.number, lineNum, lang)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab content 3: Future/Secondary Hexagram */}
                {activeTab === "secondary" && interpretation.secondary && (
                  <div className="glass-panel hexagram-detail-card">
                    <span className="hex-number">{text.secondaryHex}</span>
                    <h2 className="hex-title">
                      {interpretation.secondary.number}. {interpretation.secondary.name[lang]}{" "}
                      <span className="pinyin-title">({interpretation.secondary.name.pinyin})</span>
                    </h2>
                    <p className="hex-image-label">{interpretation.secondary.image[lang]}</p>
                    <div className="badge-stage">
                      🌟 {interpretation.secondary.heroJourneyStage[lang]}
                    </div>
                    <div className="hex-description">
                      <p>{interpretation.secondary.summary[lang]}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
