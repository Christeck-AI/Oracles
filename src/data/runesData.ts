import { BilingualText } from './tarotData';

export interface RuneData {
  id: number;
  symbol: string;
  name: BilingualText;
  aett: BilingualText;
  godOrPower: BilingualText;
  image: string;
  nornStage: BilingualText; // Urd (Past), Verdandi (Present), Skuld (Future)
  
  summary: BilingualText;
  symbolism: BilingualText;
  jungianAnalysis: BilingualText;
  herosJourney: BilingualText;
}

export const RUNES_DECK: RuneData[] = [
  // --- AETT 1: FREYR'S AETT (Fuerzas físicas, vitalidad y aliento inicial) ---
  {
    id: 1,
    symbol: "ᚠ",
    name: { en: "Fehu (Wealth / Mobile Energy)", es: "Fehu (Abundancia / Energía Móvil)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Freyr & Njörðr (Sacred Cattle & Dynamic Circulation)", es: "Freyr y Njörðr (Ganado Sagrado y Circulación Dinámica)" },
    image: "./runes/01_fehu.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Fehu represents not static riches, but the active, circulating life force of mobile abundance. Like the sacred cattle of Norse tradition, energy must flow to sustain vitality. This rune invites you to reflect on your inner resources: Are you hoarding energy out of fear, or allowing your creative power to circulate and nourish your goals? True wealth is dynamic power in motion.",
      es: "Fehu representa no las riquezas estáticas, sino la fuerza vital activa y circulante de la abundancia móvil. Al igual que el ganado sagrado de la tradición nórdica, la energía debe fluir para sostener la vitalidad. Esta runa te invita a reflexionar sobre tus recursos internos: ¿Estás acumulando energía por miedo, o permites que tu poder creativo circule y nutra tus objetivos? La verdadera riqueza es poder dinámico en movimiento."
    },
    symbolism: {
      en: "The glyph of Fehu resembles the horns of cattle reaching upward to receive divine light. Associated with Freyr, god of fertility and peace, and Njörðr, master of ocean abundance, it symbolizes prosperity earned through effort and harmonious exchange with nature.",
      es: "El glifo de Fehu se asemeja a los cuernos del ganado elevándose hacia arriba para recibir la luz divina. Asociado con Freyr, dios de la fertilidad y la paz, y Njörðr, maestro de la abundancia oceánica, simboliza la prosperidad ganada con esfuerzo y el intercambio armonioso con la naturaleza."
    },
    jungianAnalysis: {
      en: "Psychologically, Fehu is the archetype of Libido (psychic energy) in its generative phase. Jung posited that psychic energy cannot remain dormant without causing neurosis; it must find constructive channels of expression. Fehu challenges the ego to convert raw potential into manifest creative value.",
      es: "Psicológicamente, Fehu es el arquetipo de la Libido (energía psíquica) en su fase generativa. Jung planteó que la energía psíquica no puede permanecer inactiva sin causar neurosis; debe encontrar canales constructivos de expresión. Fehu desafía al ego a convertir el potencial bruto en valor creativo manifiesto."
    },
    herosJourney: {
      en: "In Campbell's Monomyth, Fehu corresponds to 'The Ordinary World's Resources'—the initial vitality and physical endowment that the hero possesses before setting forth on the adventure.",
      es: "En el Monomito de Campbell, Fehu corresponde a los 'Recursos del Mundo Ordinario': la vitalidad inicial y la dote física que posee el héroe antes de emprender la aventura."
    }
  },
  {
    id: 2,
    symbol: "ᚢ",
    name: { en: "Uruz (Primal Strength / Wild Aurochs)", es: "Uruz (Fuerza Primordial / Uro Salvaje)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Audhumla & Thor (Primal Vitality & Untamed Strength)", es: "Audhumla y Thor (Vitalidad Primordial y Fuerza Indómita)" },
    image: "./runes/02_uruz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Uruz is the raw, untamed physical vigor of the wild Aurochs. It signifies vital force, stamina, and the instinctual drive to overcome physical or emotional weakness. When Uruz appears, it calls you to tap into your primal resilience, shed old frailties, and step into raw bodily self-realization.",
      es: "Uruz es el vigor físico bruto e indómito del uro salvaje. Significa fuerza vital, resistencia y el impulso instintivo para superar la debilidad física o emocional. Cuando aparece Uruz, te llama a recurrir a tu resiliencia primordial, despojarte de viejas fragilidades y asumir una firme autorrealización."
    },
    symbolism: {
      en: "The glyph portrays the heavy horns and muscular spine of the Aurochs bowing down to charge forward. Linked to Audhumla—the cosmic cow that licked the world out of primal ice—and the raw strength of Thor, it embodies healing and invincible endurance.",
      es: "El glifo retrata los pesados cuernos y el lomo musculoso del uro inclinándose para embestir. Vinculado a Audhumla —la vaca cósmica que lamió el mundo fuera del hielo primordial— y la fuerza bruta de Thor, encarna la sanación y la resistencia invencible."
    },
    jungianAnalysis: {
      en: "Uruz represents the Somatic Unconscious—the wisdom of the animal body. Jung emphasized that the intellect without connection to bodily instinct leads to alienation. Uruz demands grounding and honoring the physical container of the psyche.",
      es: "Uruz representa el Inconsciente Somático: la sabiduría del cuerpo animal. Jung enfatizó que el intelecto sin conexión con el instinto corporal conduce a la alienación. Uruz exige enraizarse y honrar el contenedor físico de la psique."
    },
    herosJourney: {
      en: "Corresponds to 'The Call to Physical Endurance'—the moment the hero must fortify their body and mind to survive the arduous trials ahead.",
      es: "Corresponde a la 'Llamada a la Resistencia Física': el momento en que el héroe debe fortificar su cuerpo y mente para sobrevivir a las arduas pruebas venideras."
    }
  },
  {
    id: 3,
    symbol: "ᚦ",
    name: { en: "Thurisaz (The Thorn / Giant Friction)", es: "Thurisaz (La Espina / Fricción del Gigante)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Thor & The Jötnar (Mjölnir & Defensive Threshold)", es: "Thor y los Jötnar (Mjölnir y el Umbral Defensivo)" },
    image: "./runes/03_thurisaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Thurisaz represents the thorn on the rose, the reactive conflict, or the defensive hammer stroke of Thor. It marks a threshold of sharp friction where unconscious impulses can cause destruction if unexamined. Thurisaz challenges you: Will you react out of blind anger, or use boundary awareness to protect your sacred space?",
      es: "Thurisaz representa la espina en la rosa, el conflicto reactivo o el golpe de martillo defensivo de Thor. Marca un umbral de aguda fricción donde los impulsos inconscientes pueden causar destrucción si no se examinan. Thurisaz te desafía: ¿Reaccionarás con ira ciega o usarás la conciencia de límites para proteger tu espacio sagrado?"
    },
    symbolism: {
      en: "The rune shape resembles a sharp thorn or Thor's hammer Mjölnir held in striking readiness. It represents the Jötnar (chaos giants) controlled and repelled by Thor's divine lightning.",
      es: "La forma de la runa se asemeja a una espina afilada o al martillo Mjölnir de Thor sostenido en posición de ataque. Representa a los Jötnar (gigantes del caos) controlados y repelidos por el rayo divino de Thor."
    },
    jungianAnalysis: {
      en: "Thurisaz symbolizes the Shadow's defensive armor and aggressive projections. Jung noted that unrecognized anger turns outward as hostility. Thurisaz invites the ego to master self-discipline over instinctual reactivity.",
      es: "Thurisaz simboliza la armadura defensiva de la Sombra y las proyecciones agresivas. Jung señaló que la ira no reconocida se convierte en hostilidad externa. Thurisaz invita al ego a dominar la autodisciplina sobre la reactividad instintiva."
    },
    herosJourney: {
      en: "Reflects 'Crossing the Threshold / Encountering the Threshold Guardian'—confronting the terrifying guardians that test the hero's resolve.",
      es: "Refleja el 'Cruce del Umbral / Encuentro con el Guardián del Umbral': enfrentar a los guardianes aterradores que ponen a prueba la resolución del héroe."
    }
  },
  {
    id: 4,
    symbol: "ᚨ",
    name: { en: "Ansuz (The Divine Voice / Sacred Breath)", es: "Ansuz (La Voz Divina / Soplo Sagrado)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Odin (Allfather, Önd Breath & Óðr Poetic Inspiration)", es: "Odín (Padre de Todos, Aliento Önd e Inspiración Óðr)" },
    image: "./runes/04_ansuz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Ansuz is the rune of Odin, god of wisdom, poetry, and divine speech. It represents the sacred breath (*Önd*) that infuses matter with consciousness. Ansuz calls you to pay attention to words—both your internal dialogue and ancestral wisdom. Listen deeply to intuitive synchronicities and speak your truth with clarity.",
      es: "Ansuz es la runa de Odín, dios de la sabiduría, la poesía y el discurso divino. Representa el aliento sagrado (*Önd*) que infunde conciencia a la materia. Ansuz te llama a prestar atención a las palabras, tanto a tu diálogo interno como a la sabiduría de los ancestros. Escucha profundamente las sincronicidades intuitivas y habla tu verdad con claridad."
    },
    symbolism: {
      en: "The rune resembles Odin's cloak streaming in the wind or the branches of wisdom. Associated with the ravens Huginn (Thought) and Muninn (Memory), it denotes divine illumination through language and insight.",
      es: "La runa se asemeja al manto de Odín ondeando en el viento o a las ramas de la sabiduría. Asociada con los cuervos Huginn (Pensamiento) y Muninn (Memoria), denota la iluminación divina a través del lenguaje y la percepción."
    },
    jungianAnalysis: {
      en: "Ansuz embodies the Archetype of the Wise Old Man / Logos. It is the Higher Self communicating through symbols, dreams, and synchronicities. Jung emphasized that integrating Logos allows the individual to articulate their inner truth.",
      es: "Ansuz encarna el Arquetipo del Viejo Sabio / Logos. Es el Sí-Mismo communicating a través de símbolos, sueños y sincronicidades. Jung enfatizó que integrar el Logos permite al individuo articular su verdad interior."
    },
    herosJourney: {
      en: "Embodies 'Meeting the Mentor'—receiving divine council, magical artifacts, or verbal wisdom necessary for the quest.",
      es: "Encarna el 'Encuentro con el Mentor': recibir consejo divino, artefactos mágicos o sabiduría verbal necesaria para la búsqueda."
    }
  },
  {
    id: 5,
    symbol: "ᚱ",
    name: { en: "Raidho (The Chariot / Cosmic Journey)", es: "Raidho (El Carro / Viaje Cósmico)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Thor & Forseti (Cosmic Order & Rhythmic Movement)", es: "Thor y Forseti (Orden Cósmico y Movimiento Rítmico)" },
    image: "./runes/05_raidho.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Raidho represents the ordered journey, rhythm, and moral direction. It is the movement of Thor's chariot across the heavens and the natural alignment of inner values with outer action. Raidho asks: Is your life moving in harmony with your deeper purpose, or are you wandering out of rhythm?",
      es: "Raidho representa el viaje ordenado, el ritmo y la dirección moral. Es el movimiento del carro de Thor a través de los cielos y la alineación natural de los valores internos con la acción externa. Raidho pregunta: ¿Tu vida se mueve en armonía con tu propósito profundo o estás vagando fuera de ritmo?"
    },
    symbolism: {
      en: "The rune resembles a riding boot or chariot wheel. Connected to Forseti, god of peacemaking and justice, it represents law, natural cycles, and purposeful movement.",
      es: "La runa se asemeja a una bota de montar o a la rueda de un carro. Conectada con Forseti, dios de la reconciliación y la justicia, representa la ley, los ciclos naturales y el movimiento con propósito."
    },
    jungianAnalysis: {
      en: "Raidho signifies Ego Alignment with the Teleological Path of Individuation. Jung viewed the psychological journey as having an innate direction toward wholeness; Raidho is keeping one's hands steady on the steering wheel.",
      es: "Raidho significa la Alineación del Ego con el Sendero Teleológico de la Individuación. Jung veía el viaje psicológico como una dirección innata hacia la totalidad; Raidho es mantener las manos firmes en el volante."
    },
    herosJourney: {
      en: "Corresponds to 'The Road of Trials'—navigating the structured path of transformation with discipline and rhythm.",
      es: "Corresponde a la 'Ruta de las Pruebas': navegar por el sendero estructurado de la transformación con disciplina y ritmo."
    }
  },
  {
    id: 6,
    symbol: "ᚲ",
    name: { en: "Kenaz (The Torch / Creative Fire)", es: "Kenaz (La Antorcha / Fuego Creativo)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Heimdall & Freyja (Illumination & Craft Mastery)", es: "Heimdall y Freyja (Iluminación y Maestría del Oficio)" },
    image: "./runes/06_kenaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Kenaz is the controlled flame of the forge and torch—the light of technical mastery, creative passion, and psychological insight. It pierces the darkness of ignorance, revealing hidden talents. Kenaz encourages you to bring the torch of awareness into shadowy corners and forge your creative vision.",
      es: "Kenaz es la llama controlada de la forja y la antorcha: la luz de la maestría técnica, la pasión creativa y la percepción psicológica. Atraviesa la oscuridad de la ignorancia, revelando talentos ocultos. Kenaz te anima a llevar la antorcha de la conciencia a los rincones sombríos y forjar tu visión creativa."
    },
    symbolism: {
      en: "The rune glyph resembles an open beacon angle or glowing torch. Linked to Heimdall's keen vision and the dwarf smiths who forged Freyr's golden boar, it represents controlled creative transformation.",
      es: "El glifo de la runa se asemeja al ángulo de un faro abierto o una antorcha brillante. Vinculado a la visión aguda de Heimdall y a los enanos herreros que forjaron el jabalí de oro de Freyr, representa la transformación creativa controlada."
    },
    jungianAnalysis: {
      en: "Kenaz is the archetype of Consciousness illuminating the Unconscious. It is the active spark of insight (*Aha! moment*) where repressed contents are brought to light and transformed into art or self-knowledge.",
      es: "Kenaz es el arquetipo de la Conciencia iluminando lo Inconsciente. Es la chispa activa de la comprensión (el momento *¡Ajá!*) donde los contenidos reprimidos salen a la luz y se transforman en arte o autoconocimiento."
    },
    herosJourney: {
      en: "Represents 'The First Insight / The Discovery of the Sacred Tool'—where the hero discovers their inner talent to craft solutions.",
      es: "Representa 'La Primera Revelación / El Descubrimiento de la Herramienta Sagrada': donde el héroe descubre su talento interno para forjar soluciones."
    }
  },
  {
    id: 7,
    symbol: "ᚷ",
    name: { en: "Gebo (The Gift / Sacred Exchange)", es: "Gebo (El Regalo / Intercambio Sagrado)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Gefjon & Freyr (Reciprocity & Balance of Giving)", es: "Gefjon y Freyr (Reciprocidad y Equilibrio al Dar)" },
    image: "./runes/07_gebo.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Gebo is the rune of exchange, partnership, and sacred gifts. In Norse culture, a gift demands a gift in return to maintain cosmic equilibrium. Gebo highlights your relationships: Are your interactions based on mutual respect and equal exchange, or is there an imbalance depleting your psychic energy?",
      es: "Gebo es la runa del intercambio, las alianzas y los regalos sagrados. En la cultura nórdica, un regalo exige un regalo a cambio para mantener el equilibrio cósmico. Gebo destaca tus relaciones: ¿Tus interacciones se basan en el respeto mutuo y el intercambio equitativo, o hay un desequilibrio que agota tu energía psíquica?"
    },
    symbolism: {
      en: "The rune forms a perfect 'X' balance of two crossing lines. Associated with Gefjon, goddess of ploughing and abundance, it signifies honorable pacts, hospitality, and divine blessing.",
      es: "La runa forma una 'X' perfecta en equilibrio de dos líneas cruzadas. Asociada con Gefjon, diosa de la abundancia, significa pactos honorables, hospitalidad y bendición divina."
    },
    jungianAnalysis: {
      en: "Gebo symbolizes the Integration of Anima and Animus—the sacred marriage (*Hieros Gamos*) within the psyche. It requires honoring both internal masculine and feminine energies in balanced reciprocity.",
      es: "Gebo simboliza la Integración de Anima y Animus: el matrimonio sagrado (*Hieros Gamos*) dentro de la psique. Requiere honrar tanto las energías masculinas como femeninas internas en reciprocidad equilibrada."
    },
    herosJourney: {
      en: "Reflects 'Allies & Companions'—forming meaningful bonds and receiving help from trusted allies on the quest.",
      es: "Refleja 'Aliados y Compañeros': formar lazos significativos y recibir ayuda de aliados de confianza en la búsqueda."
    }
  },
  {
    id: 8,
    symbol: "ᚹ",
    name: { en: "Wunjo (Joy / Clan Harmony)", es: "Wunjo (Gozo / Armonía del Clan)" },
    aett: { en: "Freyr's Aett", es: "Aett de Freyr" },
    godOrPower: { en: "Frigg & Odin (Fulfillment & Belonging)", es: "Frigg y Odín (Realización y Pertenencia)" },
    image: "./runes/08_wunjo.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Wunjo is the culmination of Freyr's Aett—the rune of joy, emotional fulfillment, and harmonious alignment with one's community or inner aspects. It represents the peace that comes when desire aligns with truth. Celebrate your achievements, cultivate warmth, and rest in deep psychic harmony.",
      es: "Wunjo es la culminación del Aett de Freyr: la runa de la alegría, la realización emocional y la alineación armoniosa con la comunidad y los aspectos internos. Representa la paz que surge cuando el deseo se alinea con la verdad. Celebra tus logros, cultiva calidez y descansa en una profunda armonía psíquica."
    },
    symbolism: {
      en: "The rune resembles a clan banner or flag flying high in victory. Linked to Frigg's domestic warmth and Odin's joy in Valhalla, it embodies bliss without friction.",
      es: "La runa se asemeja a un estandarte o bandera de clan ondeando en la victoria. Vinculada a la calidez de Frigg y la alegría de Odín en el Valhalla, encarna la dicha sin fricción."
    },
    jungianAnalysis: {
      en: "Wunjo represents Ego-Self Harmony—a state of psychic equilibrium where complex conflicts are temporarily resolved, yielding genuine joy and belonging.",
      es: "Wunjo representa la Armonía entre Ego y Sí-Mismo: un estado de equilibrio psíquico donde los conflictos complejos se resuelven temporalmente, produciendo genuina alegría y pertenencia."
    },
    herosJourney: {
      en: "Corresponds to 'The Golden Moment of Peace'—a period of celebration and resting at the oasis before higher challenges.",
      es: "Corresponde al 'Momento Dorado de Paz': un período de celebración y descanso en el oasis antes de desafíos más elevados."
    }
  },

  // --- AETT 2: HEIMDALL'S AETT (Crisis, pruebas, destino y fuerza cósmica) ---
  {
    id: 9,
    symbol: "ᚺ",
    name: { en: "Hagalaz (The Hailstone / Cosmic Disruption)", es: "Hagalaz (El Granizo / Ruptura Cósmica)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Skadi & Urd (Hail, Necessity & Sudden Transformation)", es: "Skadi y Urd (Granizo, Necesidad y Transformación Repentina)" },
    image: "./runes/09_hagalaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Hagalaz is the unyielding hail storm—a sudden, unavoidable cosmic disruption that shatters rigid structures. Though destructive, hail melts into water that feeds future life. Hagalaz asks you to release control over external chaos and recognize disruption as a necessary clearing for authentic growth.",
      es: "Hagalaz es la tormenta de granizo inflexible: una interrupción cósmica repentina e inevitable que destruye las estructuras rígidas. Aunque destructivo, el granizo se derrite en agua que nutre la vida futura. Hagalaz te pide que liberes el control sobre el caos externo y reconozcas la disrupción como una limpieza necesaria para el crecimiento auténtico."
    },
    symbolism: {
      en: "The rune resembles an 'H' or cosmic crystal seed. Associated with Skadi, goddess of winter mountains, and the primal waters of Niflheim, it embodies necessary crisis.",
      es: "La runa se asemeja a una 'H' o semilla de cristal cósmico. Asociada con Skadi, diosa de las montañas invernales, y las aguas primordiales de Niflheim, encarna la crisis necesaria."
    },
    jungianAnalysis: {
      en: "Hagalaz is the archetype of Psychological Crisis / Enantiodromia. When the ego becomes overly rigid, the unconscious generates a violent storm (breakdown) to force restructuring.",
      es: "Hagalaz es el arquetipo de la Crisis Psicológica / Enantiodromia. Cuando el ego se vuelve excesivamente rígido, el inconsciente genera una tormenta violenta (colapso) para forzar la reestructuración."
    },
    herosJourney: {
      en: "Embodies 'The Ordeal / The Crisis Point'—where everything the hero built is tested by uncontrollable elemental forces.",
      es: "Encarna 'La Gran Prueba / El Punto de Crisis': donde todo lo que el héroe construyó es probado por fuerzas elementales incontrolables."
    }
  },
  {
    id: 10,
    symbol: "ᚾ",
    name: { en: "Nauthiz (Necessity / Crucible of Friction)", es: "Nauthiz (La Necesidad / Crisol de la Fricción)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "The Norns (Constraint & Fire of Hardship)", es: "Las Nornas (Restricción y Fuego de la Adversidad)" },
    image: "./runes/10_nauthiz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Nauthiz is the friction fire generated by rubbing two dry sticks under extreme need. It represents constraint, scarcity, and spiritual resistance. Nauthiz teaches that true strength is forged not in ease, but in necessity. Examine your friction: What constraint is forcing you to awaken your inner fire?",
      es: "Nauthiz es el fuego por fricción generado al frotar dos maderas secas bajo extrema necesidad. Representa restricción, escasez y resistencia espiritual. Nauthiz enseña que la verdadera fuerza no se forja en la comodidad, sino en la necesidad. Examina tu fricción: ¿Qué restricción te está obligando a despertar tu fuego interno?"
    },
    symbolism: {
      en: "The rune shows an upright staff crossed by a diagonal line of tension. Governed by Skuld and Verdandi, it denotes fate's constraint and the necessity of self-reliance.",
      es: "La runa muestra un mástil vertical cruzado por una línea diagonal de tensión. Gobernada por Skuld y Verdandi, denota la restricción del destino y la necesidad de autosuficiencia."
    },
    jungianAnalysis: {
      en: "Nauthiz represents the Necessity of Suffering (*Passio*) for Individuation. Jung wrote that suffering is not a mistake but the very friction that sparks conscious self-awareness.",
      es: "Nauthiz representa la Necesidad del Sufrimiento (*Passio*) para la Individuación. Jung escribió que el sufrimiento no es un error, sino la fricción misma que enciende la autoconciencia."
    },
    herosJourney: {
      en: "Reflects 'The Belly of the Whale'—being trapped in extreme isolation where old coping mechanisms fail.",
      es: "Refleja 'En el Vientre de la Ballena': estar atrapado en un aislamiento extremo donde los viejos mecanismos de afrontamiento fallan."
    }
  },
  {
    id: 11,
    symbol: "ᛁ",
    name: { en: "Isa (Ice / Stillness & Focus)", es: "Isa (El Hielo / Quietud y Enfoque)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Frost Giants & Rán (Stillness & Crystallization)", es: "Gigantes de Hielo y Rán (Quietud y Cristalización)" },
    image: "./runes/11_isa.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Isa is the ice vertical beam—absolute stillness, preservation, and freezing of movement. It signals a phase where action is useless; patience and internal focus are required. Use this cold pause to consolidate your identity and observe without reacting.",
      es: "Isa es el madero vertical de hielo: quietud absoluta, preservación y congelación del movimiento. Señala una fase donde la acción es inútil; se requiere paciencia y enfoque interno. Usa esta pausa fría para consolidar tu identidad y observar sin reaccionar."
    },
    symbolism: {
      en: "A single vertical line symbolizing an icicle or glacier column. Linked to Niflheim's ice world, it represents preservation of essence under frozen conditions.",
      es: "Una sola línea vertical que simboliza un carámbano o columna de glaciar. Vinculada al mundo de hielo de Niflheim, representa la preservación de la esencia en condiciones congeladas."
    },
    jungianAnalysis: {
      en: "Isa is Introversion and Ego Consolidation. It is the necessary hibernation phase where psychic contents solidify into a stable ego structure before outward expansion.",
      es: "Isa es la Introversión y la Consolidad del Ego. Es la fase de hibernación necesaria donde los contenidos psíquicos se solidifican en una estructura de ego estable antes de la expansión externa."
    },
    herosJourney: {
      en: "Embodies 'The Suspension Phase'—the pause in the quest where the hero must wait out the blizzard before proceeding.",
      es: "Encarna la 'Fase de Suspensión': la pausa en la búsqueda donde el héroe debe esperar a que pase la ventisca antes de continuar."
    }
  },
  {
    id: 12,
    symbol: "ᛃ",
    name: { en: "Jera (Harvest / Cyclical Reward)", es: "Jera (La Cosecha / Recompensa Cíclica)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Freyr & Sif (Seasonal Harvest & Natural Completion)", es: "Freyr y Sif (Cosecha Estacional y Culminación Natural)" },
    image: "./runes/12_jera.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Jera is the fruitful harvest resulting from patient, seasonal effort. You cannot rush nature's timeline. Jera promises that seeds planted with integrity will yield their natural reward in due season. Trust the cyclical process of time.",
      es: "Jera es la cosecha fructífera que resulta del esfuerzo paciente y estacional. No se puede apresurar el ritmo de la naturaleza. Jera promete que las semillas plantadas con integridad darán su recompensa natural a su debido tiempo. Confía en el proceso cíclico del tiempo."
    },
    symbolism: {
      en: "Two interlocking half-circles representing winter turning into summer. Associated with Sif's golden hair and Freyr's fertile fields, it signifies natural law and earned abundance.",
      es: "Dos semicírculos entrelazados que representan el invierno convirtiéndose en verano. Asociada con el cabello dorado de Sif y los campos fértiles de Freyr, significa la ley natural y la abundancia ganada."
    },
    jungianAnalysis: {
      en: "Jera symbolizes Maturation of Psychic Fruit. Psychological development cannot be forced; it requires honoring organic stages of growth.",
      es: "Jera simboliza la Maduración del Fruto Psíquico. El desarrollo psicológico no puede ser forzado; requiere honrar las etapas orgánicas del crecimiento."
    },
    herosJourney: {
      en: "Corresponds to 'Reaping the Reward / The Fruit of Labor'—enjoying the legitimate outcome of surviving past trials.",
      es: "Corresponde a 'Cosechar la Recompensa / El Fruto del Trabajo': disfrutar del resultado legítimo de haber sobrevivido a las pruebas pasadas."
    }
  },
  {
    id: 13,
    symbol: "ᛇ",
    name: { en: "Eihwaz (The Yew / Yggdrasil Resilience)", es: "Eihwaz (El Tejo / Resiliencia de Yggdrasil)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Yggdrasil & Ullr (World Tree Axis Mundi & Vertical Passage)", es: "Yggdrasil y Ullr (Eje del Mundo Yggdrasil y Pasaje Vertical)" },
    image: "./runes/13_eihwaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Eihwaz is the Yew tree—evergreen, flexible, deeply rooted in the underworld while reaching into the heavens. It represents the spine of Yggdrasil and endurance through death and rebirth. Eihwaz encourages you to root deeply into your core values so that no storm can uproot you.",
      es: "Eihwaz es el árbol del Tejo: perenne, flexible, profundamente enraizado en el inframundo mientras se eleva hacia los cielos. Representa la columna vertebral de Yggdrasil y la resistencia a través de la muerte y el renacimiento. Eihwaz te anima a enraizarte profundamente en tus valores centrales para que ninguna tormenta pueda desenraizarte."
    },
    symbolism: {
      en: "A central vertical line with hooks at top and bottom linking Asgard and Helheim. Linked to Ullr, god of the yew bow and winter wilderness, it embodies transformation.",
      es: "Una línea vertical central con ganchos en la parte superior e inferior que unen Asgard y Helheim. Vinculada a Ullr, dios del arco de tejo y la naturaleza invernal, encarna la transformación."
    },
    jungianAnalysis: {
      en: "Eihwaz is the Axis Mundi of the Psyche—connecting conscious ego with both deep animal instincts and higher spiritual self.",
      es: "Eihwaz es el Eje del Mundo de la Psique: conectando el ego consciente con los instintos animales profundos y el sí-mismo espiritual superior."
    },
    herosJourney: {
      en: "Represents 'The Descent into the Underworld / Atonement with the Father'—enduring symbolic death to gain spiritual resurrection.",
      es: "Representa el 'Descenso al Inframundo / Expiación con el Padre': soportar la muerte simbólica para lograr la resurrección espiritual."
    }
  },
  {
    id: 14,
    symbol: "ᛈ",
    name: { en: "Perthro (The Mystery Cup / Synchronistic Fate)", es: "Perthro (La Copa del Misterio / Destino Sincrónico)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Frigg & The Well of Urd (Unmanifest Fate & Synchronicity)", es: "Frigg y el Pozo de Urd (Destino Inmanifiesto y Sincronicidad)" },
    image: "./runes/14_perthro.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Perthro is the rune cup used to cast the lots—the mystery of unmanifest fate, secret knowledge, and synchronicities. It reminds you that life contains hidden variables beyond ego control. Surrender to mystery, trust hidden patterns, and play your hand with wisdom.",
      es: "Perthro es la copa rúnica utilizada para lanzar la suerte: el misterio del destino inmanifiesto, el conocimiento secreto y las sincronicidades. Te recuerda que la vida contiene variables ocultas más allá del control del ego. Entrégate al misterio, confía en los patrones ocultos y juega tu mano con sabiduría."
    },
    symbolism: {
      en: "The rune resembles a dice cup laying on its side releasing lots. Associated with Frigg who knows all fates but speaks little, it symbolizes hidden potential.",
      es: "La runa se asemeja a una copa de dados acostada de lado liberando la suerte. Asociada con Frigg, quien conoce todos los destinos pero habla poco, simboliza el potencial oculto."
    },
    jungianAnalysis: {
      en: "Perthro is the Archetype of Synchronicity and the Unconscious Matrix. Jung described synchronicity as an acausal connecting principle; Perthro is trusting meaning beyond cause-and-effect.",
      es: "Perthro es el Arquetipo de la Sincronicidad y la Matriz Inconsciente. Jung describió la sincronicidad como un principio de conexión acausal; Perthro es confiar en el significado más allá de la causa y efecto."
    },
    herosJourney: {
      en: "Reflects 'The Meeting with Mystery / Unveiling Secret Wisdom'—where the hero encounters hidden laws governing the cosmos.",
      es: "Refleja el 'Encuentro con el Misterio / Develación de la Sabiduría Secreta': donde el héroe se encuentra con las leyes ocultas que gobiernan el cosmos."
    }
  },
  {
    id: 15,
    symbol: "ᛉ",
    name: { en: "Algiz (Elk Horn Shield / Divine Protection)", es: "Algiz (Escudo de Cuernos de Alce / Protección Divina)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Heimdall & The Valkyries (Vigilance & Spiritual Shield)", es: "Heimdall y las Valquirias (Vigilancia y Escudo Espiritual)" },
    image: "./runes/15_algiz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Algiz is the elk horns branching upward—the sanctuary shield of divine protection and heightened awareness. Linked to Heimdall's sharp senses, it warns you to stay alert and maintain clear boundaries. Ground yourself while staying open to spiritual guidance.",
      es: "Algiz son los cuernos de alce ramificándose hacia arriba: el escudo santuario de protección divina y conciencia elevada. Vinculada a los sentidos agudos de Heimdall, te advierte que te mantengas alerta y mantengas límites claros. Enraízate mientras permaneces abierto a la guía espiritual."
    },
    symbolism: {
      en: "A vertical line branching into three upward tines like an elk's antlers or a person standing with open arms. Associated with Valkyries and Heimdall guarding Bifröst.",
      es: "Una línea vertical que se ramifica en tres puntas hacia arriba como las astas de un alce o una persona de pie con los brazos abiertos. Asociada con las Valquirias y Heimdall custodiando el Bifröst."
    },
    jungianAnalysis: {
      en: "Algiz is the Spiritual Boundary of the Persona. It protects psychic integrity from toxic introjects and invasive unconscious projections.",
      es: "Algiz es el Límite Espiritual de la Persona. Protege la integridad psíquica de introyectos tóxicos y proyecciones inconscientes invasivas."
    },
    herosJourney: {
      en: "Corresponds to 'The Magical Shield / Protection of the Gods'—receiving divine sanctuary during perilous phases.",
      es: "Corresponde al 'Escudo Mágico / Protección de los Dioses': recibir santuario divino durante fases peligrosas."
    }
  },
  {
    id: 16,
    symbol: "ᛋ",
    name: { en: "Sowilo (The Sun / Solar Wholeness)", es: "Sowilo (El Sol / Totalidad Solar)" },
    aett: { en: "Heimdall's Aett", es: "Aett de Heimdall" },
    godOrPower: { en: "Sól & Baldr (Solar Victory & Higher Consciousness)", es: "Sól y Baldr (Victoria Solar y Conciencia Superior)" },
    image: "./runes/16_sowilo.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Sowilo is the blazing sun wheel—the radiant triumph of light, clarity, and solar wholeness. It marks the victory of conscious awareness over dark doubts. Sowilo urges you to stand in your authentic power, shine your truth, and embrace complete self-realization.",
      es: "Sowilo es la rueda solar resplandeciente: el triunfo radiante de la luz, la claridad y la totalidad solar. Marca la victoria de la conciencia lúcida sobre las dudas oscuras. Sowilo te insta a mantenerte en tu poder auténtico, hacer brillar tu verdad y abrazar la autorrealización completa."
    },
    symbolism: {
      en: "The rune resembles a lightning bolt or solar segment. Associated with Sól driving her sun chariot and Baldr's pure light, it represents irresistible life force.",
      es: "La runa se asemeja a un rayo o segmento solar. Asociada con Sól conduciendo su carro solar y la luz pura de Baldr, representa una fuerza vital irresistible."
    },
    jungianAnalysis: {
      en: "Sowilo is the Archetype of Self-Realization / The Enlightened Ego. The darkness of the unconscious has been integrated into radiant wholeness.",
      es: "Sowilo es el Arquetipo de la Autorrealización / El Ego Iluminado. La oscuridad del inconsciente se ha integrado en una totalidad radiante."
    },
    herosJourney: {
      en: "Embodies 'The Ultimate Boon / Apotheosis'—reaching the peak of enlightenment and triumphing over darkness.",
      es: "Encarna el 'Elixir Supremo / Apoteosis': alcanzar la cima de la iluminación y triunfar sobre la oscuridad."
    }
  },

  // --- AETT 3: TYR'S AETT (Justicia, conciencia social, renacimiento y trascendencia) ---
  {
    id: 17,
    symbol: "ᛏ",
    name: { en: "Tiwaz (Tyr / Sacred Sacrifice & Honor)", es: "Tiwaz (Tyr / Sacrificio Sagrado y Honor)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Tyr (One-Handed God of Justice & Moral Sacrifice)", es: "Tyr (Dios Manco de la Justicia y Sacrificio Moral)" },
    image: "./runes/17_tiwaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Tiwaz is the spear arrow of Tyr, the one-handed god who sacrificed his arm in Fenrir's jaws to bind chaos. It represents moral integrity, justice, and willingness to sacrifice ego comfort for a higher ethical cause. Tiwaz asks: What ego attachment must you sacrifice to honor your highest principles?",
      es: "Tiwaz es la flecha de lanza de Tyr, el dios manco que sacrificó su brazo en las fauces de Fenrir para atar el caos. Representa integridad moral, justicia y disposición a sacrificar la comodidad del ego por una causa ética superior. Tiwaz pregunta: ¿Qué apego del ego debes sacrificar para honrar tus principios más elevados?"
    },
    symbolism: {
      en: "An upward pointing spearhead. Linked to Tyr's legal oath and divine courage, it embodies unwavering focus and spiritual warriorhood.",
      es: "Una punta de lanza apuntando hacia arriba. Vinculada al juramento legal y coraje divino de Tyr, encarna un enfoque inquebrantable y la condición de guerrero espiritual."
    },
    jungianAnalysis: {
      en: "Tiwaz is the Archetype of the Spiritual Warrior / Ethical Ego. It requires making painful ethical choices that serve the Self rather than selfish desires.",
      es: "Tiwaz es el Arquetipo del Guerrero Espiritual / Ego Ético. Requiere tomar decisiones éticas dolorosas que sirvan al Sí-Mismo en lugar de a deseos egoístas."
    },
    herosJourney: {
      en: "Corresponds to 'The Supreme Sacrifice'—where the hero risks their safety for the survival and redemption of the community.",
      es: "Corresponde al 'Sacrificio Supremo': donde el héroe arriesga su seguridad para la supervivencia y redención de la comunidad."
    }
  },
  {
    id: 18,
    symbol: "ᛒ",
    name: { en: "Berkano (The Birch / Nurturing Rebirth)", es: "Berkano (El Abedul / Renacimiento Nutricio)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Frigg & Idunn (Birch Goddess & Regeneration)", es: "Frigg e Idunn (Diosa del Abedul y Regeneración)" },
    image: "./runes/18_berkano.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Berkano is the Birch tree—the gentle sanctuary of rebirth, motherhood, and nurturing growth. It represents the fertility of new ideas and healing of old wounds. Berkano invites you to cultivate patience, nurture your emerging projects, and allow healing warmth to restore your soul.",
      es: "Berkano es el árbol de Abedul: el santuario apacible del renacimiento, la maternidad y el crecimiento nutricio. Representa la fertilidad de nuevas ideas y la sanación de viejas heridas. Berkano te invita a cultivar paciencia, nutrir tus proyectos emergentes y permitir que la calidez sanadora restaure tu alma."
    },
    symbolism: {
      en: "The rune glyph resembles the breasts of the Great Mother or birch bark. Linked to Idunn's apples of youth and Frigg's sanctuary, it signifies gentle birth.",
      es: "El glifo de la runa se asemeja a los pechos de la Gran Madre o a la corteza de abedul. Vinculada a las manzanas de la juventud de Idunn y al santuario de Frigg, significa nacimiento apacible."
    },
    jungianAnalysis: {
      en: "Berkano is the Great Mother Archetype (*Alma Mater*). It provides the protective container needed for new psychic structures to incubate safely.",
      es: "Berkano es el Arquetipo de la Gran Madre (*Alma Mater*). Proporciona el contenedor protector necesario para que las nuevas estructuras psíquicas se incuben de forma segura."
    },
    herosJourney: {
      en: "Embodies 'Rebirth & Restoration'—healing after crisis and receiving maternal grace before returning to the world.",
      es: "Encarna el 'Renacimiento y Restauración': sanar tras la crisis y recibir gracia maternal antes de regresar al mundo."
    }
  },
  {
    id: 19,
    symbol: "ᛖ",
    name: { en: "Ehwaz (The Sacred Steed / Dual Harmony)", es: "Ehwaz (El Corcel Sagrado / Armonía Dual)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Freyr & Sleipnir (Sacred Horse & Rider Trust)", es: "Freyr y Sleipnir (Confianza entre Caballo y Jinete)" },
    image: "./runes/19_ehwaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Ehwaz is the sacred horse and rider moving in seamless synergy. It represents mutual trust, partnership, and dynamic momentum. Neither horse nor rider dominates; progress requires equal cooperation. Ehwaz asks: Are you working in harmonious partnership with others and with your own unconscious instincts?",
      es: "Ehwaz es el caballo sagrado y el jinete moviéndose en una sinergia fluida. Representa confianza mutua, asociación y el impulso dinámico. Ni el caballo ni el jinete dominan; el progreso requiere cooperación equitativa. Ehwaz pregunta: ¿Estás trabajando en asociación armoniosa con los demás y con tus propios instintos inconscientes?"
    },
    symbolism: {
      en: "Two horses facing each other or a stylized 'M'. Associated with Sleipnir (Odin's eight-legged steed) and Freyr's steeds, it embodies swift journey.",
      es: "Dos caballos enfrentados o una 'M' estilizada. Asociada con Sleipnir (el corcel de ocho patas de Odín) y los corceles de Freyr, encarna un viaje veloz."
    },
    jungianAnalysis: {
      en: "Ehwaz is the Synergy of Ego and Instinctual Drive. The rider (ego) guides the powerful horse (instincts) without tyranny, creating graceful movement.",
      es: "Ehwaz es la Sinergia del Ego y el Impulso Instintivo. El jinete (ego) guía al poderoso caballo (instintos) sin tiranía, creando un movimiento fluido."
    },
    herosJourney: {
      en: "Reflects 'The Swift Return Journey'—riding home with newfound power and trusted companions.",
      es: "Refleja el 'Rápido Viaje de Regreso': cabalgar a casa con un nuevo poder y compañeros de confianza."
    }
  },
  {
    id: 20,
    symbol: "ᛗ",
    name: { en: "Mannaz (Humanity / The Integrated Self)", es: "Mannaz (La Humanidad / El Sí-Mismo Integrado)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Heimdall (Ríg) & Máni (Integrated Human Mind)", es: "Heimdall (Ríg) y Máni (Mente Humana Integrada)" },
    image: "./runes/20_mannaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Mannaz is the rune of humanity, social consciousness, and the integrated mind. It highlights our shared human condition, intellect, and memory. Mannaz challenges you to view yourself clearly in the mirror of community: Are you balancing your individual identity with your shared human destiny?",
      es: "Mannaz es la runa de la humanidad, la conciencia social y la mente integrada. Destaca nuestra condición humana compartida, el intelecto y la memoria. Mannaz te desafía a verte claramente en el espejo de la comunidad: ¿Estás equilibrando tu identidad individual con tu destino humano compartido?"
    },
    symbolism: {
      en: "Two Gebo runes crossed forming an 'M'—showing two humans embracing. Linked to Heimdall under the name Ríg (father of social orders), it represents enlightened humanity.",
      es: "Dos runas Gebo cruzadas formando una 'M', mostrando a dos humanos abrazándose. Vinculada a Heimdall bajo el nombre de Ríg (padre de los órdenes sociales), representa la humanidad iluminada."
    },
    jungianAnalysis: {
      en: "Mannaz represents The Self Archetype in Social Context. It is the realization that personal individuation does not isolate, but connects us more deeply to humanity.",
      es: "Mannaz representa El Arquetipo del Sí-Mismo en Contexto Social. Es la comprensión de que la individuación personal no aisla, sino que nos conecta más profundamente con la humanidad."
    },
    herosJourney: {
      en: "Corresponds to 'Master of Two Worlds'—integrating spiritual enlightenment with everyday human existence.",
      es: "Corresponde a 'Maestro de Ambos Mundos': integrar la iluminación espiritual con la existencia humana cotidiana."
    }
  },
  {
    id: 21,
    symbol: "ᛚ",
    name: { en: "Laguz (The Ocean Waters / Unconscious Flow)", es: "Laguz (Las Aguas del Océano / Flujo Inconsciente)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Njörðr & Rán Waters (Intuition & Primal Depth)", es: "Njörðr y las Aguas de Rán (Intuición y Profundidad Primordial)" },
    image: "./runes/21_laguz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Laguz is the flowing ocean water—the realm of dreams, deep intuition, and the unconscious mind. Like water, life requires fluidity and adaptability. Laguz calls you to dive into your emotional depths, trust your intuitive stream, and yield to organic flow rather than rigid control.",
      es: "Laguz es el agua fluyente del océano: el reino de los sueños, la intuición profunda y la mente inconsciente. Como el agua, la vida requiere fluidez y adaptabilidad. Laguz te llama a sumergirte en tus profundidades emocionales, confiar en tu corriente intuitiva y ceder al flujo orgánico en lugar del control rígido."
    },
    symbolism: {
      en: "A single line sloping upward like a rising wave or leek plant growing from water. Associated with Njörðr's ocean realm and sea spirits.",
      es: "Una sola línea inclinada hacia arriba como una ola creciente o la planta de puerro creciendo del agua. Asociada con el reino oceánico de Njörðr y los espíritus del mar."
    },
    jungianAnalysis: {
      en: "Laguz is The Unconscious Mind / Anima Waters. It demands that the rational ego surrender to the intuitive stream of dreams and emotional truth.",
      es: "Laguz es La Mente Inconsciente / Aguas de Anima. Exige que el ego racional se entregue a la corriente intuitiva de los sueños y la verdad emocional."
    },
    herosJourney: {
      en: "Reflects 'The Sea Voyage / Crossing the Great Waters'—navigating the vast emotional unknown to reach the final shore.",
      es: "Refleja 'El Viaje Marítimo / Cruzando las Grandes Aguas': navegar por el vasto desconocido emocional para alcanzar la orilla final."
    }
  },
  {
    id: 22,
    symbol: "ᛝ",
    name: { en: "Ingwaz (The Seed / Gestation & Core Strength)", es: "Ingwaz (La Semilla / Gestación y Fuerza Central)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Ing-Freyr (Sacred Earth Seed & Internalized Power)", es: "Ing-Freyr (Semilla Sagrada de la Tierra y Poder Internalizado)" },
    image: "./runes/22_ingwaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Ingwaz is the closed diamond seed—the concentrated, internal storage of potential energy before emergence. It signifies a necessary phase of quiet gestation and internal focus. Rest in the dark fertile soil of your soul; energy is accumulating for an explosive breakthrough.",
      es: "Ingwaz es la semilla de diamante cerrada: el almacenamiento interno y concentrado de energía potencial antes del surgimiento. Significa una fase necesaria de gestación tranquila y enfoque interno. Descansa en la tierra fértil y oscura de tu alma; la energía se está acumulando para una eclosión transformadora."
    },
    symbolism: {
      en: "A closed diamond shape '◇'. Linked to Ing-Freyr, god of earthy fertility and sacred enclosure, it represents concentrated potential.",
      es: "Una forma de diamante cerrada '◇'. Vinculada a Ing-Freyr, dios de la fertilidad terrenal y el recinto sagrado, representa el potencial concentrado."
    },
    jungianAnalysis: {
      en: "Ingwaz is Psychic Incubation / The Temenos Container. It protects nascent creative ideas within a sacred enclosure until they are strong enough to emerge.",
      es: "Ingwaz es la Incubación Psíquica / El Contenedor Temenos. Protege las ideas creativas nacientes dentro de un recinto sagrado hasta que sean lo suficientemente fuertes para emerger."
    },
    herosJourney: {
      en: "Embodies 'The Sacred Enclosure / Preparation for Emergence'—the quiet room before the hero returns to the world.",
      es: "Encarna el 'Recinto Sagrado / Preparación para el Surgimiento': el cuarto silencioso antes de que el héroe regrese al mundo."
    }
  },
  {
    id: 23,
    symbol: "ᛞ",
    name: { en: "Dagaz (Daybreak / Cosmic Illumination)", es: "Dagaz (El Amanecer / Iluminación Cósmica)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Baldr & Dagr (Daybreak & Paradigm Shift)", es: "Baldr y Dagr (Amanecer y Cambio de Paradigma)" },
    image: "./runes/23_dagaz.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Dagaz is the sudden breakthrough of dawn—a radical transformation of consciousness where polarities dissolve into divine light. Night turns into day; doubts vanish. Dagaz heralds a major paradigm shift, clarity, and awakening. Step boldly into the new light.",
      es: "Dagaz es el surgimiento repentino del amanecer: una transformación radical de la conciencia donde las polaridades se disuelven en la luz divina. La noche se convierte en día; las dudas desaparecen. Dagaz anuncia un importante cambio de paradigma, claridad y despertar. Da un paso audaz hacia la nueva luz."
    },
    symbolism: {
      en: "An infinity hourglass shape connecting night and day. Associated with Dagr riding his horse Skinfaxi bringing morning light, it symbolizes awakening.",
      es: "Una forma de reloj de arena infinito que conecta la noche y el día. Asociada con Dagr conduciendo su caballo Skinfaxi trayendo la luz matutina, simboliza el despertar."
    },
    jungianAnalysis: {
      en: "Dagaz is Transcendence of Opposites / The Transcendent Function. Jung wrote that when conflict reaches peak tension, a third unifying symbol emerges, bringing illumination.",
      es: "Dagaz es la Trascendencia de los Opuestos / La Función Trascendente. Jung escribió que cuando el conflicto alcanza su máxima tensión, surge un tercer símbolo unificador que trae iluminación."
    },
    herosJourney: {
      en: "Corresponds to 'The Crossing of the Return Threshold'—bringing the light of transformation back to illuminate the ordinary world.",
      es: "Corresponde al 'Cruce del Umbral de Regreso': traer la luz de la transformación para iluminar el mundo ordinario."
    }
  },
  {
    id: 24,
    symbol: "ᛟ",
    name: { en: "Othala (Ancestral Heritage / Sacred Sanctuary)", es: "Othala (Patrimonio Ancestral / Santuario Sagrado)" },
    aett: { en: "Tyr's Aett", es: "Aett de Tyr" },
    godOrPower: { en: "Odin & The Ancestors (Enclosed Heritage & Spiritual Home)", es: "Odín y los Ancestros (Patrimonio Encerrado y Hogar Espiritual)" },
    image: "./runes/24_othala.png",
    nornStage: { en: "Urd / Verdandi / Skuld", es: "Urd / Verdandi / Skuld" },
    summary: {
      en: "Othala is the final rune of the Elder Futhark—the enclosed homestead, spiritual lineage, and ancestral wisdom. It represents your true spiritual home and integrated heritage. Separate gold from dross in your lineage: Keep what honors your soul and release inherited burdens. You are the sacred sanctuary of your ancestors.",
      es: "Othala es la runa final del Elder Futhark: el hogar cercado, el linaje espiritual y la sabiduría ancestral. Representa tu verdadero hogar espiritual y tu patrimonio integrado. Separa el oro de la escoria en tu linaje: conserva lo que honra a tu alma y libera las cargas heredadas. Tú eres el santuario sagrado de tus ancestros."
    },
    symbolism: {
      en: "An enclosed diamond shape with two legs anchoring it to the earth. Linked to ancestral land rights and Odin's eternal sanctuary, it signifies complete integration.",
      es: "Una forma de diamante cerrada con dos patas anclándola a la tierra. Vinculada a los derechos de tierras ancestrales y al santuario eterno de Odín, significa la integración completa."
    },
    jungianAnalysis: {
      en: "Othala is Total Integration of the Collective Ancestral Unconscious. The individual has completed the journey of Individuation and anchored their unique Self within the lineage of humanity.",
      es: "Othala es la Integración Total del Inconsciente Colectivo Ancestral. El individuo ha completado el viaje de Individuación y ha anclado su Sí-Mismo único dentro del linaje de la humanidad."
    },
    herosJourney: {
      en: "Embodies 'Freedom to Live / Return with the Elixir'—the final stage of Campbell's monomyth, where the hero lives in full harmony with all worlds.",
      es: "Encarna la 'Libertad para Vivir / Regreso con el Elixir': la etapa final del monomito de Campbell, donde el héroe vive en plena armonía con todos los mundos."
    }
  }
];
