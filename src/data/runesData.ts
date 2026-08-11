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
      en: "Fehu represents the dynamic, circulating life force and the raw material of your potential. Unlike static riches, true wealth must flow to sustain vitality. Psychologically, this rune points to your foundational energy and resources. Are you hoarding your energy out of fear, or are you allowing your creative power to circulate and nourish your goals? Fehu invites you to mobilize your inner assets, reminding you that true power lies in active, purposeful movement and constant generation.",
      es: "Fehu representa la fuerza vital dinámica y circulante, y la materia prima de tu potencial. A diferencia de las riquezas estáticas, la verdadera abundancia debe fluir para sostener la vitalidad. Psicológicamente, esta runa señala tu energía y recursos fundamentales. ¿Estás acumulando tu energía por miedo, o permites que tu poder creativo circule y nutra tus metas? Fehu te invita a movilizar tus activos internos, recordando que el verdadero poder reside en el movimiento activo y la generación constante."
    },
    symbolism: {
      en: "The glyph of Fehu resembles the horns of cattle reaching upward to receive divine light. Associated with Freyr, god of fertility and peace, and Njörðr, master of ocean abundance, it symbolizes prosperity earned through effort and harmonious exchange with nature.",
      es: "El glifo de Fehu se asemeja a los cuernos del ganado elevándose hacia arriba para recibir la luz divina. Asociado con Freyr, dios de la fertilidad y la paz, y Njörðr, maestro de la abundancia oceánica, simboliza la prosperidad ganada con esfuerzo y el intercambio armonioso con la naturaleza."
    },
    jungianAnalysis: {
      en: "Fehu embodies the archetype of Libido—the raw, generative psychic energy that fuels all human endeavor. In the psyche, energy cannot remain dormant without causing neurosis; it must be channeled into constructive expression. It represents the foundational instinct for growth and the vital spark of the libido before it is directed by conscious will. It challenges the ego to transform raw, unformed potential into tangible, manifest value in the material world.",
      es: "Fehu encarna el arquetipo de la Libido: la energía psíquica bruta y generativa que impulsa todo esfuerzo humano. En la psique, la energía no puede permanecer inactiva sin causar estancamiento; debe canalizarse hacia una expresión constructiva. Representa el instinto fundamental de crecimiento y la chispa vital antes de ser dirigida por la voluntad consciente. Desafía al ego a transformar el potencial bruto e informe en valor tangible y manifiesto en la realidad material."
    },
    herosJourney: {
      en: "In the Hero's Journey, Fehu corresponds to the 'Ordinary World' and its initial resources. It represents the vitality, physical endowment, and material stability the hero possesses before setting forth on the adventure. It is the baseline of comfort and potential. The hero must understand the true nature of their resources, realizing that these gifts are not meant to be hoarded in the ordinary world, but are the vital fuel necessary to sustain the perilous journey ahead.",
      es: "En el Viaje del Héroe, Fehu corresponde al 'Mundo Ordinario' y sus recursos iniciales. Representa la vitalidad, la dote física y la estabilidad material que posee el héroe antes de emprender la aventura. Es la base de comodidad y potencial latente. El héroe debe comprender la verdadera naturaleza de sus recursos, dándose cuenta de que estos dones no deben ser atesorados pasivamente, sino que son el combustible necesario para sostener el peligroso viaje psicológico que se avecina."
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
      en: "Uruz is the raw, untamed physical vigor and primal resilience of the wild Aurochs. It signifies vital force, immense stamina, and the instinctual drive required to overcome physical or emotional weakness. When Uruz appears, it calls you to tap into your primal resilience and shed old, limiting frailties. You are being pushed to endure discomfort in order to grow stronger. It is a reminder that true power often requires a period of wild, unrefined chaotic energy before it can be structured.",
      es: "Uruz es el vigor físico bruto e indómito y la resiliencia primordial del uro salvaje. Significa fuerza vital, inmensa resistencia y el impulso instintivo necesario para superar la debilidad física o emocional. Cuando aparece, te llama a recurrir a tu resiliencia profunda y despojarte de viejas fragilidades limitantes. Se te está empujando a soportar la incomodidad para volverte más fuerte. Es un recordatorio de que el verdadero poder a menudo requiere un período de energía caótica y salvaje antes de estructurarse."
    },
    symbolism: {
      en: "The glyph portrays the heavy horns and muscular spine of the Aurochs bowing down to charge forward. Linked to Audhumla—the cosmic cow that licked the world out of primal ice—and the raw strength of Thor, it embodies healing and invincible endurance.",
      es: "El glifo retrata los pesados cuernos y el lomo musculoso del uro inclinándose para embestir. Vinculado a Audhumla —la vaca cósmica que lamió el mundo fuera del hielo primordial— y la fuerza bruta de Thor, encarna la sanación y la resistencia invencible."
    },
    jungianAnalysis: {
      en: "Uruz relates to the archetype of the Primal Shadow and the somatic unconscious. It represents the deeply buried, animalistic drives and the raw survival instincts that the civilized ego often represses. Integrating Uruz means acknowledging your animal nature without being consumed by it. It is the vital life force that surges from the deep unconscious, demanding to be felt and expressed physically. This raw power is necessary to shatter stagnant psychic structures and initiate profound healing.",
      es: "Uruz se relaciona con el arquetipo de la Sombra Primordial y el inconsciente somático. Representa los impulsos instintivos profundamente enterrados y de supervivencia que el ego civilizado a menudo reprime. Integrar a Uruz significa reconocer tu naturaleza animal sin ser consumido por ella. Es la fuerza vital que surge del inconsciente profundo, exigiendo ser sentida y expresada físicamente. Este poder bruto es necesario para destrozar estructuras psíquicas estancadas e iniciar una sanación profunda."
    },
    herosJourney: {
      en: "This corresponds to the 'Stirring of the Deep' or the initial resistance to change. The hero begins to feel a restless, primal urge that the ordinary world can no longer contain. It is the awakening of the inner strength required to face the impending trials. Before the journey formally begins, the hero must realize that their civilized exterior masks a deeper, indomitable will to survive and overcome. Uruz provides the necessary sheer force to break the inertia of normal life.",
      es: "Corresponde al 'Despertar de las Profundidades' o la resistencia inicial al cambio. El héroe comienza a sentir un impulso primordial e inquieto que el mundo ordinario ya no puede contener. Es el despertar de la fuerza interior requerida para enfrentar las pruebas inminentes. Antes de que el viaje comience, el héroe debe darse cuenta de que su exterior civilizado oculta una voluntad de supervivencia indomable. Uruz proporciona la fuerza bruta necesaria para romper la inercia de la vida normal."
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
      en: "Thurisaz is the thorn, the giant, and the hammer—the active, defensive force that shatters obstacles and protects boundaries. It represents psychological friction, necessary conflict, and the aggressive willpower required to clear a path. This rune warns you that you are facing a critical threshold where passivity is dangerous. You must decisively strike down what opposes your growth or defend your space with clear, uncompromising boundaries. It is the catalyst of conflict that purifies and clears the way for new order.",
      es: "Thurisaz es la espina, el gigante y el martillo: la fuerza activa y defensiva que destroza obstáculos y protege los límites. Representa la fricción psicológica, el conflicto necesario y la fuerza de voluntad agresiva requerida para despejar un camino. Esta runa advierte que enfrentas un umbral crítico donde la pasividad es peligrosa. Debes derribar decisivamente lo que se opone a tu crecimiento o defender tu espacio con límites inquebrantables. Es el catalizador del conflicto que purifica y abre paso al nuevo orden."
    },
    symbolism: {
      en: "Resembling both a sharp thorn on a branch and Thor's hammer Mjölnir, Thurisaz is a symbol of reactive defense and the destruction of chaotic forces (the Jotuns). It channels the violent but necessary energy that clears space for creation.",
      es: "Asemejándose tanto a una espina afilada en una rama como al martillo de Thor, Mjölnir, Thurisaz es un símbolo de defensa reactiva y de la destrucción de las fuerzas caóticas (los Jotuns). Canaliza la energía violenta pero necesaria que despeja el espacio para la creación."
    },
    jungianAnalysis: {
      en: "Thurisaz embodies the archetype of the Protector/Destroyer and the confrontational aspects of the Animus. Psychologically, it is the mechanism of boundary-setting and the healthy integration of aggression. When suppressed, this energy turns inward as destructive self-sabotage; when consciously directed, it becomes the psychological hammer that smashes through neurotic complexes and defense mechanisms. It teaches that conflict is not inherently evil, but a vital psychological function necessary to protect the integrity of the fragile developing ego against consuming unconscious forces.",
      es: "Thurisaz encarna el arquetipo del Protector/Destructor y los aspectos de confrontación del Animus. Psicológicamente, es el mecanismo para establecer límites y la integración saludable de la agresión. Cuando se suprime, esta energía se vuelve hacia adentro como autosabotaje destructivo; cuando se dirige conscientemente, se convierte en el martillo psicológico que rompe complejos neuróticos y mecanismos de defensa. Enseña que el conflicto no es intrínsecamente malo, sino una función vital necesaria para proteger la integridad del ego frente a fuerzas inconscientes."
    },
    herosJourney: {
      en: "In the journey, this is the encounter with the 'Threshold Guardian' or the first major internal conflict. The hero realizes that the path forward is blocked, not merely by external enemies, but by their own hesitations and psychological barriers. To cross the threshold, the hero must wield the hammer of their own will, decisively striking down their fear and proving they have the fortitude to leave the ordinary world behind. It is the violent initiation into the adventure.",
      es: "En el viaje, este es el encuentro con el 'Guardián del Umbral' o el primer gran conflicto interno. El héroe se da cuenta de que el camino a seguir está bloqueado no solo por enemigos externos, sino por sus propias vacilaciones y barreras psicológicas. Para cruzar el umbral, el héroe debe empuñar el martillo de su propia voluntad, derribando decisivamente su miedo y demostrando que tiene la fortaleza para dejar atrás el mundo ordinario. Es la violenta iniciación a la aventura."
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
      en: "Ansuz is the rune of divine breath, intellectual wisdom, and the transformative power of language. It signifies the emergence of the conscious mind and the ability to articulate one's truth. When Ansuz appears, it suggests a breakthrough in understanding or a clear message arriving from the divine or the deeper self. You are invited to speak your truth with clarity, seek counsel from wise sources, and align your thoughts with the higher order of the universe.",
      es: "Ansuz es la runa del aliento divino, la sabiduría intelectual y el poder transformador del lenguaje. Significa el surgimiento de la mente consciente y la capacidad de articular la propia verdad. Cuando aparece Ansuz, sugiere un avance en la comprensión o un mensaje claro que llega de lo divino o del sí-mismo más profundo. Se te invita a expresar tu verdad con claridad, buscar consejo de fuentes sabias y alinear tus pensamientos con el orden superior del universo."
    },
    symbolism: {
      en: "Shaped like the cloak of Odin or a branch of the ash tree, Ansuz represents the breath of life (Önd) breathed into the first humans. It is linked to poetry, communication, and the divine wisdom of the Allfather.",
      es: "Con la forma de la capa de Odín o una rama del fresno, Ansuz representa el aliento de vida (Önd) insuflado en los primeros humanos. Está vinculada a la poesía, la comunicación y la sabiduría divina del Padre de Todo."
    },
    jungianAnalysis: {
      en: "Ansuz represents the archetype of the Wise Old Man and the Logos principle. Psychologically, it signifies the integration of consciousness—where chaotic unconscious contents are named, structured, and given meaning through language. It is the moment the ego gains the ability to communicate its experiences clearly, bridging the gap between the internal psyche and the external world. Ansuz teaches that clarity of thought is the primary tool for mastery over one's own psychological complexes.",
      es: "Ansuz representa el arquetipo del Viejo Sabio y el principio del Logos. Psicológicamente, significa la integración de la conciencia, donde los contenidos inconscientes caóticos son nombrados, estructurados y dotados de significado a través del lenguaje. Es el momento en que el ego adquiere la capacidad de comunicar sus experiencias con claridad, tendiendo un puente entre la psique interna y el mundo externo. Ansuz enseña que la claridad de pensamiento es la herramienta principal para el dominio sobre los propios complejos psicológicos."
    },
    herosJourney: {
      en: "In the Hero's Journey, Ansuz signifies the 'Call to Adventure' and the 'Mentor's Guidance'. The hero receives a transformative message or awakens to their true vocation. It is the intellectual initiation where the hero learns that their words and understanding are magical tools. By listening to the inner mentor and interpreting signs correctly, the hero gains the philosophical grounding and tactical clarity necessary to navigate the perilous path ahead and fulfill their heroic destiny.",
      es: "En el Viaje del Héroe, Ansuz significa la 'Llamada a la Aventura' y la 'Guía del Mentor'. El héroe recibe un mensaje transformador o despierta a su verdadera vocación. Es la iniciación intelectual donde el héroe aprende que sus palabras y su comprensión son herramientas mágicas. Al escuchar al mentor interno e interpretar los signos correctamente, el héroe obtiene el fundamento filosófico y la claridad táctica necesarios para navegar el peligroso camino y cumplir su destino heroico."
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
      en: "Raidho represents the rhythmic movement of the chariot, signifying the journey of the soul through life. It is about establishing order, discipline, and finding your true path among many choices. This rune asks you to consider your current pace and direction: are your daily actions aligned with your ultimate purpose? Raidho encourages you to take control of the reins, maintain a steady rhythm, and trust the process of your unfolding destiny through conscious, intentional steps.",
      es: "Raidho representa el movimiento rítmico del carro, significando el viaje del alma a través de la vida. Trata sobre establecer orden, disciplina y encontrar tu camino verdadero entre muchas opciones. Esta runa te pide considerar tu ritmo y dirección actuales: ¿están tus acciones diarias alineadas con tu propósito final? Raidho te anima a tomar el control de las riendas, mantener un ritmo constante y confiar en el proceso de tu destino en desarrollo mediante pasos conscientes e intencionales."
    },
    symbolism: {
      en: "The rune glyph resembles a wheel or a riding boot, symbolizing the movement of the solar chariot across the sky. Linked to Forseti, the god of justice, it embodies the natural law, cosmic cycles, and the ethical responsibility inherent in every step we take on our journey.",
      es: "El glifo de la runa se asemeja a una rueda o una bota de montar, simbolizando el movimiento del carro solar a través del cielo. Vinculado a Forseti, el dios de la justicia, encarna la ley natural, los ciclos cósmicos y la responsabilidad ética inherente en cada paso que damos en nuestro viaje."
    },
    jungianAnalysis: {
      en: "Raidho relates to the teleological drive toward Individuation—the innate psychological urge to become whole. Psychologically, it represents the coordination of the Ego with the Self's direction. When Raidho is active, the individual moves beyond circular, neurotic behavior and begins to walk a structured path. It involves the integration of conscious will and unconscious instinct, allowing the psyche to move forward in harmony rather than being stalled by doubt or the fragmentation of uncoordinated impulses.",
      es: "Raidho se relaciona con el impulso teleológico hacia la Individuación: el impulso psicológico innato de volverse completo. Psicológicamente, representa la coordinación del Ego con la dirección del Sí-Mismo. Cuando Raidho está activo, el individuo se mueve más allá del comportamiento circular y neurótico y comienza a caminar por un sendero estructurado. Implica la integración de la voluntad consciente y el instinto inconsciente, permitiendo que la psique avance en armonía en lugar de estancarse por la duda o la fragmentación de impulsos descoordinados."
    },
    herosJourney: {
      en: "In the Hero's Journey, Raidho signifies 'The Road of Trials' and the disciplined departure into the unknown. The hero realizes that the quest is not a singular act but a sustained, rhythmical process of transformation. It emphasizes the importance of pacing, maintaining balance under pressure, and adhering to one's moral code. The hero learns that progress is made by staying true to the rhythm of the journey, even when the terrain becomes difficult or the destination seems far away.",
      es: "En el Viaje del Héroe, Raidho significa 'La Ruta de las Pruebas' y la partida disciplinada hacia lo desconocido. El héroe se da cuenta de que la búsqueda no es un acto singular, sino un proceso de transformación sostenido y rítmico. Enfatiza la importancia de marcar el paso, mantener el equilibrio bajo presión y adherirse al propio código moral. El héroe aprende que el progreso se logra manteniéndose fiel al ritmo del viaje, incluso cuando el terreno se vuelve difícil o el destino parece lejano."
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
      en: "Kenaz is the torch of illumination in the dark, the forge fire, and the beacon of creative knowledge. It represents technical skill, focused willpower, and the spark of artistic inspiration that transforms raw material into something beautiful and useful. Kenaz illuminates what was hidden, bringing sudden clarity and understanding. It challenges you to become the artisan of your own life. You are called to apply your focused attention and creative fire to forge solutions out of the challenges you currently face.",
      es: "Kenaz es la antorcha de iluminación en la oscuridad, el fuego de la forja y el faro del conocimiento creativo. Representa la habilidad técnica, la fuerza de voluntad enfocada y la chispa de inspiración artística que transforma la materia prima en algo hermoso y útil. Kenaz ilumina lo que estaba oculto, aportando repentina claridad. Te desafía a convertirte en el artesano de tu propia vida. Estás llamado a aplicar tu atención enfocada y fuego creativo para forjar soluciones a los desafíos actuales."
    },
    symbolism: {
      en: "The shape of Kenaz is the flame of a torch or the opening of a forge. Associated with Heimdall, the light-bringer, and Freyja's passionate magic, it signifies the controlled fire of human intellect and civilization.",
      es: "La forma de Kenaz es la llama de una antorcha o la apertura de una forja. Asociada con Heimdall, el portador de la luz, y la magia apasionada de Freyja, significa el fuego controlado del intelecto humano y la civilización."
    },
    jungianAnalysis: {
      en: "Kenaz relates to the archetype of the Magician or the Artisan, and the illuminating light of the Ego consciousness. Psychologically, it is the focused light of awareness cutting through the darkness of the unconscious shadow. It represents sublimation—the process of taking raw, primitive emotional energy (like the fire of anger or passion) and using the conscious will to forge it into high art, skill, or constructive psychological insight. It is the transformative fire of therapy.",
      es: "Kenaz se relaciona con el arquetipo del Mago o el Artesano, y la luz iluminadora de la conciencia del Ego. Psicológicamente, es la luz enfocada de la conciencia atravesando la oscuridad de la sombra inconsciente. Representa la sublimación: el proceso de tomar energía emocional primitiva y en bruto (como el fuego de la ira o la pasión) y usar la voluntad consciente para forjarla en arte elevado, habilidad o percepción constructiva. Es el fuego transformador de la terapia."
    },
    herosJourney: {
      en: "In the Hero's Journey, Kenaz represents the 'Acquisition of Tools' and the 'Illumination of the Path'. The hero gains a crucial skill, weapon, or piece of knowledge that shines a light on how to defeat the enemy. It is the moment the hero stops stumbling in the dark and begins to see the underlying patterns of the underworld. The hero learns that their creative fire and focused intellect are their greatest weapons against the chaos of the unknown.",
      es: "En el Viaje del Héroe, Kenaz representa la 'Adquisición de Herramientas' y la 'Iluminación del Camino'. El héroe adquiere una habilidad, arma o conocimiento crucial que arroja luz sobre cómo derrotar al enemigo. Es el momento en que el héroe deja de tropezar en la oscuridad y comienza a ver los patrones subyacentes del inframundo. El héroe aprende que su fuego creativo y su intelecto enfocado son sus mayores armas contra el caos de lo desconocido."
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
      en: "Gebo is the rune of the gift, sacred exchange, and equilibrium. In Norse culture, a gift demands a gift; it is the establishment of a bond based on mutual respect and equal energy exchange. Gebo signifies harmony in relationships, fair contracts, and the balance of giving and receiving. Are you giving too much and draining yourself, or taking too much and creating a debt? This rune reminds you that true harmony requires an equal, conscious exchange of energy, love, and effort.",
      es: "Gebo es la runa del regalo, el intercambio sagrado y el equilibrio. En la cultura nórdica, un regalo exige un regalo; es el establecimiento de un vínculo basado en el respeto mutuo. Gebo significa armonía en las relaciones, contratos justos y el equilibrio entre dar y recibir. ¿Estás dando demasiado y agotándote, o tomando demasiado y creando una deuda? Esta runa te recuerda que la verdadera armonía requiere un intercambio igualitario y consciente de energía, amor y esfuerzo."
    },
    symbolism: {
      en: "The intersecting lines of Gebo form an 'X', representing the meeting point of two equal forces. Associated with Odin's ring Draupnir and Gefjon's reciprocal generosity, it is the sacred bond of hospitality and alliances.",
      es: "Las líneas que se cruzan de Gebo forman una 'X', representando el punto de encuentro de dos fuerzas iguales. Asociada con el anillo Draupnir de Odín y la generosidad recíproca de Gefjon, es el vínculo sagrado de la hospitalidad y las alianzas."
    },
    jungianAnalysis: {
      en: "Gebo embodies the archetype of the Syzygy (the Divine Couple) and the psychological principle of Equilibrium. It represents the crucial balance between the Ego and the Self, the Anima and the Animus, or the conscious and unconscious minds. Psychologically, it warns against one-sidedness. A healthy psyche requires a reciprocal relationship between its various parts; repressing an instinct creates a debt that the unconscious will eventually collect. Gebo is the psychic harmony achieved when all inner forces are respected equally.",
      es: "Gebo encarna el arquetipo de la Sizigia (la Pareja Divina) y el principio psicológico del Equilibrio. Representa el equilibrio crucial entre el Ego y el Sí-Mismo, el Ánima y el Ánimus, o las mentes consciente e inconsciente. Psicológicamente, advierte contra la unilateralidad. Una psique sana requiere una relación recíproca entre sus partes; reprimir un instinto crea una deuda que el inconsciente eventualmente cobrará. Gebo es la armonía psíquica lograda cuando todas las fuerzas internas se respetan por igual."
    },
    herosJourney: {
      en: "Gebo corresponds to 'The Meeting with the Goddess' or the 'Sacred Marriage'. The hero learns the power of alliance, trust, and mutual sacrifice. The hero realizes they cannot complete the quest entirely alone; they must form equitable bonds with allies or integrate their own opposing internal forces. It is the moment the hero learns to give of themselves freely and to graciously accept the help of others, understanding that salvation is a reciprocal, shared endeavor.",
      es: "Gebo corresponde a 'El Encuentro con la Diosa' o el 'Matrimonio Sagrado'. El héroe aprende el poder de la alianza, la confianza y el sacrificio mutuo. Se da cuenta de que no puede completar la búsqueda completamente solo; debe formar vínculos equitativos con aliados o integrar sus propias fuerzas internas opuestas. Es el momento en que el héroe aprende a darse libremente y a aceptar con gracia la ayuda de los demás, comprendiendo que la salvación es un esfuerzo recíproco y compartido."
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
      en: "Wunjo is the golden banner of joy, clan harmony, and absolute fulfillment. It is the joyous realization of a goal, the ecstasy of belonging to a supportive community, and the deep peace that comes when all elements of your life are perfectly aligned. Wunjo signals a time of emotional well-being and the successful completion of a cycle. It invites you to pause, celebrate your victories, and bask in the warmth of your connections before the next challenge begins.",
      es: "Wunjo es el estandarte dorado de la alegría, la armonía del clan y la realización absoluta. Es la alegre realización de un objetivo, el éxtasis de pertenecer a una comunidad que te apoya y la profunda paz que surge cuando todos los elementos de tu vida están perfectamente alineados. Wunjo señala un tiempo de bienestar emocional y la finalización exitosa de un ciclo. Te invita a hacer una pausa, celebrar tus victorias y disfrutar de la calidez de tus conexiones antes de que comience el siguiente desafío."
    },
    symbolism: {
      en: "The shape of Wunjo represents a weather vane or a tribal banner waving in victory. Associated with Frigg's domestic harmony and Odin's mead of ecstasy, it signifies peace, emotional satisfaction, and the joyous unity of the clan.",
      es: "La forma de Wunjo representa una veleta o un estandarte tribal ondeando en victoria. Asociada con la armonía doméstica de Frigg y el hidromiel de éxtasis de Odín, significa la paz, la satisfacción emocional y la unidad alegre del clan."
    },
    jungianAnalysis: {
      en: "Wunjo represents the experience of Wholeness and the transient integration of the Self. It is the psychological state of 'Flow' and emotional homeostasis, where the friction between the ego and the unconscious temporarily ceases. Wunjo is the joyous affect that accompanies the successful integration of a shadow aspect or the resolution of a complex. It teaches that joy is not just an emotion, but a profound psychological state of perfect alignment and inner peace.",
      es: "Wunjo representa la experiencia de la Totalidad y la integración transitoria del Sí-Mismo. Es el estado psicológico de 'Flujo' y homeostasis emocional, donde la fricción entre el ego y el inconsciente cesa temporalmente. Wunjo es el afecto alegre que acompaña a la integración exitosa de un aspecto de la sombra o la resolución de un complejo. Enseña que la alegría no es solo una emoción, sino un profundo estado psicológico de alineación perfecta y paz interior."
    },
    herosJourney: {
      en: "In the Hero's Journey, Wunjo represents the 'Reward' or a 'Campfire Moment' of respite. After surviving initial trials or completing a significant milestone, the hero experiences a profound sense of camaraderie and joy with their allies. It is a necessary period of psychological rest and celebration. The hero integrates their recent growth and remembers what they are fighting to protect. This joy replenishes the hero's spirit, giving them the vital strength needed to face the darker trials still to come.",
      es: "En el Viaje del Héroe, Wunjo representa la 'Recompensa' o un 'Momento de Fogata' de respiro. Después de sobrevivir a las pruebas iniciales o completar un hito importante, el héroe experimenta un profundo sentido de camaradería y alegría con sus aliados. Es un período necesario de descanso psicológico y celebración. El héroe integra su crecimiento reciente y recuerda qué está luchando por proteger. Esta alegría repone el espíritu del héroe, dándole la fuerza vital necesaria para enfrentar las pruebas más oscuras que aún están por venir."
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
      en: "Hagalaz is the hailstorm—the sudden, uncontrollable destruction of old structures. It is the crisis that shatters illusions and disrupts rigid plans. While terrifying, this disruption is entirely natural and necessary to clear away what is stagnant or false in your life. You are advised not to fight the storm or cling to crumbling foundations. Surrender to the chaos, let the false structures fall, and prepare the ground to rebuild your life on a much truer, more authentic foundation.",
      es: "Hagalaz es la tormenta de granizo: la repentina e incontrolable destrucción de las viejas estructuras. Es la crisis que destroza las ilusiones y altera los planes rígidos. Aunque aterradora, esta interrupción es completamente natural y necesaria para barrer lo que está estancado o es falso en tu vida. Se te aconseja no luchar contra la tormenta ni aferrarte a cimientos que se desmoronan. Ríndete al caos, deja que las estructuras falsas caigan y prepara el terreno para reconstruir tu vida sobre una base mucho más verdadera y auténtica."
    },
    symbolism: {
      en: "Although at first glance it seems a negative rune, it is the \"necessary destruction\". Represents drastic events beyond our control, but which serve to destroy old patterns, clear the ground and force us to wake up or change course. The rune resembles a structural beam shattered by cross-forces. Associated with the goddess **Hel** (sovereign of the underworld) and Urd (the Norn of the past) and the destructive aspect of Ymir, it is the cosmic reset button—the winter storm before spring.",
      es: "Aunque a primera vista parece una runa negativa, Hagalaz es la \"destrucción necesaria\". Representa eventos drásticos que están fuera de nuestro control, pero que sirven para destruir viejos patrones, limpiar el terreno y obligarnos a despertar o cambiar de rumbo. La runa se asemeja a una viga estructural destrozada por fuerzas cruzadas. Asociada con la diosa **Hel** (soberana del inframundo) y con Urd (la Norna del pasado) y el aspecto destructivo de Ymir, es el botón de reinicio cósmico: la tormenta de invierno antes de la primavera."
    },
    jungianAnalysis: {
      en: "Hagalaz embodies the archetype of the Shadow Eruption and the psychological principle of Enantiodromia (when things turn into their opposites). When ego structures become too rigid, arrogant, or disconnected from the Self, the unconscious violently intervenes to break them down. It is the necessary psychological catastrophe that precedes any profound transformation. It teaches that the ego is not the master of the psyche, and that radical ego-death is often the only way to cure deep-seated neurosis.",
      es: "Hagalaz encarna el arquetipo de la Erupción de la Sombra y el principio psicológico de la Enantiodromía (cuando las cosas se convierten en sus opuestos). Cuando las estructuras del ego se vuelven demasiado rígidas, arrogantes o desconectadas del Sí-Mismo, el inconsciente interviene violentamente para derribarlas. Es la catástrofe psicológica necesaria que precede a cualquier transformación profunda. Enseña que el ego no es el amo de la psique, y que la muerte radical del ego a menudo es la única forma de curar una neurosis profundamente arraigada."
    },
    herosJourney: {
      en: "It is the moment when the hero suffers an unexpected setback (lightning destroying his castle, a storm sinking his ship). He is reminded that he does not have absolute control and must learn to adapt to primordial forces. Hagalaz represents 'The Belly of the Whale' or the sudden crisis that decisively destroys the hero's known world. The hero is violently swallowed by the unknown, stripped of their previous identity, defenses, and comforts. It is a terrifying descent into the underworld where all control must be relinquished. The hero learns that to survive the ordeal and be reborn, they must first allow their old self to be completely shattered by the storm.",
      es: "Es el momento en que el héroe sufre un revés inesperado (un rayo que destruye su castillo, una tormenta que hunde su barco). Se le recuerda que no tiene el control absoluto y debe aprender a adaptarse a las fuerzas primordiales. Hagalaz representa 'El Vientre de la Ballena' o la crisis repentina que destruye decisivamente el mundo conocido del héroe. El héroe es violentamente tragado por lo desconocido, despojado de su identidad anterior, sus defensas y comodidades. Es un descenso aterrador al inframundo donde todo control debe ser abandonado. El héroe aprende que para sobrevivir a la prueba y renacer, primero debe permitir que su antiguo yo sea completamente destrozado por la tormenta."
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
      en: "Nauthiz, the crucible of friction, is the rune of need, constraint, and necessity. It represents the heavy burden of limitation, unavoidable delays, and the harsh friction of survival. It highlights the stark difference between what you want and what you truly need. This rune indicates a period of severe restriction where external progress is blocked. However, it is precisely this agonizing friction that creates the inner fire of resilience. Embrace the constraint, for it forces you to dig deep and discover your unbreakable core.",
      es: "Nauthiz, el crisol de la fricción, es la runa de la necesidad, la restricción y la obligación. Representa la pesada carga de la limitación, los retrasos inevitables y la dura fricción de la supervivencia. Destaca la cruda diferencia entre lo que quieres y lo que realmente necesitas. Esta runa indica un período de severa restricción donde el progreso externo está bloqueado. Sin embargo, es precisamente esta fricción agonizante la que crea el fuego interior de la resiliencia. Abraza la restricción, porque te obliga a cavar profundo y descubrir tu núcleo inquebrantable."
    },
    symbolism: {
      en: "The glyph represents the two sticks of a bow-drill rubbing together to create fire. Associated with Verdandi (the Norn of the present and the necessity) and the harsh winters of Midgard, it is the fire born from desperate need. It represents the weight of limitations, unavoidable delays, and the harsh friction of survival.",
      es: "El glifo representa los dos palos de un taladro de arco frotándose para crear fuego. Asociado con Verdandi (la Norna del presente y la necesidad) y los duros inviernos de Midgard, es el fuego nacido de la necesidad desesperada. Representa el peso de las limitaciones, los retrasos inevitables y la dura fricción de la supervivencia."
    },
    jungianAnalysis: {
      en: "Nauthiz relates to the archetype of the Shadow and the psychological complex of Deprivation. It is the agonizing experience of limitation, frustration, and blocked libido. Jung taught that neurosis is often born from the refusal to bear legitimate suffering. Nauthiz demands that we endure the 'tension of opposites' without seeking an immediate escape. By holding this tension consciously, the friction eventually produces the 'Transcendent Function'—the inner fire of transformation that resolves the psychological deadlock.",
      es: "Nauthiz se relaciona con el arquetipo de la Sombra y el complejo psicológico de Privación. Es la experiencia agonizante de limitación, frustración y libido bloqueada. Jung enseñó que la neurosis a menudo nace de la negativa a soportar el sufrimiento legítimo. Nauthiz exige que soportemos la 'tensión de los opuestos' sin buscar un escape inmediato. Al sostener esta tensión conscientemente, la fricción eventualmente produce la 'Función Trascendente': el fuego interior de transformación que resuelve el punto muerto psicológico."
    },
    herosJourney: {
      en: "In the Hero's Journey, Nauthiz represents the darkest part of 'The Road of Trials', focusing on limitation, frustration and blocked libido. Facing the stark difference between what you want and what you truly need. The hero faces severe scarcity, despair, or a seemingly impossible restriction that tests their breaking point. There is no easy way out and no magical rescue. The hero learns that necessity is the ultimate forge of character, forcing them to find hidden inner reserves of willpower they never knew they possessed to survive the ordeal.",
      es: "En el Viaje del Héroe, Nauthiz representa la parte más oscura de 'La Ruta de las Pruebas', enfocándose en la limitación, frustración y la libido bloqueada. Se enfrenta a la cruda diferencia entre lo que quiere y lo que realmente necesita. El héroe enfrenta una severa escasez, desesperación o una restricción aparentemente imposible que pone a prueba su punto de quiebre. No hay salida fácil ni rescate mágico. El héroe aprende que la necesidad es la forja definitiva del carácter, obligándolo a encontrar reservas internas ocultas de fuerza de voluntad que nunca supo que poseía para sobrevivir a la prueba."
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
      en: "Isa is the ice, stillness, and delay. It signifies the freezing of forward momentum and the crystallization of current conditions. Like winter, it is a necessary period of hibernation, preservation, and deep concentration of energy. Isa advises you not to force movement or battle against the freeze, as action now will be fruitless. Instead, use this profound pause to look inward, reflect on your core identity, and consolidate your psychological power before the spring thaw arrives.",
      es: "Isa es el hielo, la quietud y el retraso. Significa la congelación del impulso hacia adelante y la cristalización de las condiciones actuales. Como el invierno, es un período necesario de hibernación, preservación y profunda concentración de energía. Isa te aconseja no forzar el movimiento ni luchar contra la helada, ya que la acción ahora será infructuosa. En cambio, usa esta profunda pausa para mirar hacia adentro, reflexionar sobre tu identidad central y consolidar tu poder psicológico antes de que llegue el deshielo primaveral."
    },
    symbolism: {
      en: "The single vertical line represents an icicle or a frozen river. Linked to Skadi, the snowshoe goddess, and the icy realm of Niflheim, it denotes total stasis, boundaries, and the preservation of the self.",
      es: "La única línea vertical representa un carámbano o un río helado. Vinculada a Skadi, la diosa de las raquetas de nieve, y al reino helado de Niflheim, denota éxtasis total, límites y la preservación del yo."
    },
    jungianAnalysis: {
      en: "Isa embodies the archetype of Introversion and the withdrawal of Libido from the external world. It is the psychological winter where psychic energy moves inward toward the Self. This is not depression, but a necessary concentration. It represents the ego's vital detachment from external validation to crystallize a solid, internal sense of identity and boundary. Isa warns against identifying too closely with external events; true stability requires a core of inner ice that remains unmoved by the chaos outside.",
      es: "Isa encarna el arquetipo de la Introversión y la retirada de la Libido del mundo externo. Es el invierno psicológico donde la energía psíquica se mueve hacia adentro, hacia el Sí-Mismo. Esto no es depresión, sino una concentración necesaria. Representa el desapego vital del ego de la validación externa para cristalizar un sentido de identidad y límites sólido e interno. Isa advierte contra identificarse demasiado con los eventos externos; la verdadera estabilidad requiere un núcleo de hielo interior que permanezca inmutable ante el caos exterior."
    },
    herosJourney: {
      en: "In the Hero's Journey, Isa corresponds to a moment of profound suspension, often mirroring 'The Meeting with the Goddess' in its stillness, or the quiet contemplation inside the abyss. The hero is frozen, unable to progress physically. External progress stops completely, allowing the hero to fully absorb the harsh lessons of the underworld in silence. It is the deep winter of the soul, where the hero learns that sometimes the greatest strength is simply holding one's ground and preserving one's core identity.",
      es: "En el Viaje del Héroe, Isa corresponde a un momento de profunda suspensión, reflejando a menudo 'El Encuentro con la Diosa' en su quietud, o la contemplación silenciosa dentro del abismo. El héroe está congelado, incapaz de progresar físicamente. El progreso externo se detiene por completo, permitiendo al héroe absorber plenamente las duras lecciones del inframundo en silencio. Es el profundo invierno del alma, donde el héroe aprende que a veces la mayor fuerza es simplemente mantenerse firme y preservar su identidad central."
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
      en: "Jera represents the harvest, the completion of cyclic time, and the inevitable result of past actions. It teaches the fundamental law of nature: what you sow, you must eventually reap. Jera counsels patience and trust in the organic timing of the universe; you cannot rush the harvest by pulling on the crops. If you have done the necessary, consistent work, Jera signals a time of fruitful reward and the peaceful realization that your efforts are finally coming into harmony with the natural cycles.",
      es: "Jera representa la cosecha, la finalización del tiempo cíclico y el resultado inevitable de acciones pasadas. Enseña la ley fundamental de la naturaleza: lo que siembras, eventualmente debes cosecharlo. Jera aconseja paciencia y confianza en el tiempo orgánico del universo; no puedes apresurar la cosecha tirando de los cultivos. Si has hecho el trabajo necesario y constante, Jera señala un tiempo de recompensa fructífera y la pacífica constatación de que tus esfuerzos finalmente están entrando en armonía con los ciclos naturales."
    },
    symbolism: {
      en: "The glyph depicts two interlocking halves of the year (summer and winter) rotating around a center point. Associated with Freyr and Sif (goddess of the golden grain), it represents the turning wheel of the year and agricultural abundance.",
      es: "El glifo representa dos mitades entrelazadas del año (verano e invierno) girando alrededor de un punto central. Asociado con Freyr y Sif (diosa del grano dorado), representa la rueda giratoria del año y la abundancia agrícola."
    },
    jungianAnalysis: {
      en: "Jera embodies the archetype of the Cycle and the rhythm of the Self. Psychologically, it represents the realization of integration and maturation over time. Transformation is not an instantaneous magical event; it requires the slow, organic maturation of the psyche through patient, daily work. Jera reminds the ego that it must submit to the natural developmental timelines of the unconscious. Rapid spiritual bypassing fails; true psychological harvest only comes when we respect the seasons of our own internal growth.",
      es: "Jera encarna el arquetipo del Ciclo y el ritmo del Sí-Mismo. Psicológicamente, representa la realización de la integración y maduración a lo largo del tiempo. La transformación no es un evento mágico instantáneo; requiere la lenta y orgánica maduración de la psique a través del trabajo paciente y diario. Jera recuerda al ego que debe someterse a los plazos naturales de desarrollo del inconsciente. El atajo espiritual rápido fracasa; la verdadera cosecha psicológica solo llega cuando respetamos las estaciones de nuestro propio crecimiento interno."
    },
    herosJourney: {
      en: "In the Hero's Journey, Jera corresponds to 'The Reward' and the integration phase after enduring the trials of the underworld. The hero finally reaps the wisdom and power sown during the long, dark periods of struggle. It is the understanding that the journey is cyclical; the harvest of one adventure provides the seeds for the next. The hero learns patience, realizing that true transformation cannot be forced, but must be cultivated and earned over the long turning of the year.",
      es: "En el Viaje del Héroe, Jera corresponde a 'La Recompensa' y la fase de integración después de soportar las pruebas del inframundo. El héroe finalmente cosecha la sabiduría y el poder sembrados durante los largos y oscuros períodos de lucha. Es la comprensión de que el viaje es cíclico; la cosecha de una aventura proporciona las semillas para la siguiente. El héroe aprende paciencia, dándose cuenta de que la verdadera transformación no puede ser forzada, sino que debe ser cultivada y ganada a lo largo del lento giro del año."
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
      en: "Eihwaz is the Yew tree, the axis mundi, representing vertical alignment and resilience through death. It connects the underworld to the heavens. Eihwaz signifies enduring extreme pressure, undergoing a symbolic death, and reaching a higher state of being. You are acting as a conduit between the dark roots of your past and the bright branches of your future. Stand firm; this ordeal is not a punishment, but a necessary initiation to forge unbreakable inner strength.",
      es: "Eihwaz es el tejo, el axis mundi, representando la alineación vertical y la resiliencia a través de la muerte. Conecta el inframundo con los cielos. Eihwaz significa soportar una presión extrema, sufrir una muerte simbólica y alcanzar un estado superior del ser. Estás actuando como un conducto entre las raíces oscuras de tu pasado y las ramas brillantes de tu futuro. Mantente firme; esta prueba no es un castigo, sino una iniciación necesaria para forjar una fuerza interior inquebrantable."
    },
    symbolism: {
      en: "The rune resembles the trunk of Yggdrasil connecting above and below. Linked to Ullr (the bow-god who crafts weapons from yew) and the poisonous but evergreen nature of the Yew tree, it represents life enduring through death.",
      es: "La runa se asemeja al tronco de Yggdrasil conectando lo de arriba y lo de abajo. Vinculada a Ullr (el dios del arco que fabrica armas de tejo) y a la naturaleza venenosa pero siempre verde del tejo, representa la vida que perdura a través de la muerte."
    },
    jungianAnalysis: {
      en: "Eihwaz embodies the archetype of the Axis Mundi and the Transcendent Function. It is the psychological spine that unites the opposites: the conscious heights and the unconscious depths. It represents the ego's ability to survive the 'little deaths' of transformation. When faced with an impossible contradiction, Eihwaz is the vertical ascent—the capacity of the psyche to bridge instinct and spirit, emerging stronger from the crucible of psychological tension.",
      es: "Eihwaz encarna el arquetipo del Axis Mundi y la Función Trascendente. Es la columna vertebral psicológica que une los opuestos: las alturas conscientes y las profundidades inconscientes. Representa la capacidad del ego para sobrevivir a las 'pequeñas muertes' de la transformación. Cuando se enfrenta a una contradicción imposible, Eihwaz es el ascenso vertical: la capacidad de la psique para tender un puente entre el instinto y el espíritu, emergiendo más fuerte del crisol de la tensión psicológica."
    },
    herosJourney: {
      en: "In the Hero's Journey, Eihwaz represents 'The Descent into the Underworld' and 'The Supreme Ordeal'. The hero is suspended on the world tree, navigating the terrifying axis between life and death. The hero learns that they cannot escape the underworld horizontally by running away; they must grow vertically. By enduring the darkest night and holding their center, the hero achieves a spiritual breakthrough, proving they are worthy to receive the ultimate boon.",
      es: "En el Viaje del Héroe, Eihwaz representa 'El Descenso al Inframundo' y 'La Prueba Suprema'. El héroe está suspendido en el árbol del mundo, navegando el eje aterrador entre la vida y la muerte. Aprende que no puede escapar del inframundo horizontalmente huyendo; debe crecer verticalmente. Al soportar la noche más oscura y mantener su centro, el héroe logra un avance espiritual, demostrando que es digno de recibir el don supremo."
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
      en: "Perthro represents the dice cup, the unknown, synchronicity, and unmanifest fate. It is the mystery of chance and the hidden variables operating beyond your control. Perthro reminds you that life is a game played with forces larger than your ego's comprehension. Rather than trying to force an outcome, you are called to surrender to the mystery, trust the hidden patterns unfolding behind the scenes, and play the hand you are currently dealt with wisdom and intuition.",
      es: "Perthro representa el cubilete de dados, lo desconocido, la sincronicidad y el destino inmanifiesto. Es el misterio del azar y las variables ocultas que operan más allá de tu control. Perthro te recuerda que la vida es un juego jugado con fuerzas mayores que la comprensión de tu ego. En lugar de intentar forzar un resultado, estás llamado a rendirte al misterio, confiar en los patrones ocultos que se desarrollan detrás de escena y jugar la mano que te ha tocado con sabiduría e intuición."
    },
    symbolism: {
      en: "The rune glyph looks like an open dice cup lying on its side. Associated with Frigg, the goddess who knows all fates but speaks them to none, it represents the Norns' unwritten tapestry and the secret laws of probability.",
      es: "El glifo de la runa parece un cubilete de dados abierto apoyado de lado. Asociado con Frigg, la diosa que conoce todos los destinos pero no se los revela a nadie, representa el tapiz no escrito de las Nornas y las leyes secretas de la probabilidad."
    },
    jungianAnalysis: {
      en: "Perthro embodies the archetype of the Unconscious as the Womb of Fate, and Carl Jung's concept of Synchronicity. It represents the acausal connecting principle where inner psychic states mirror outer events in meaningful ways. Perthro challenges the modern illusion of absolute ego control, demanding that the rational mind accept its role as a participant in a larger, mysterious cosmic pattern. It is the wisdom of recognizing that some psychological events are deeply governed by the collective unconscious.",
      es: "Perthro encarna el arquetipo del Inconsciente como Matriz del Destino, y el concepto de Sincronicidad de Carl Jung. Representa el principio de conexión acausal donde los estados psíquicos internos reflejan eventos externos de manera significativa. Perthro desafía la ilusión moderna del control absoluto del ego, exigiendo que la mente racional acepte su papel como participante en un patrón cósmico más amplio y misterioso. Es la sabiduría de reconocer que algunos eventos psicológicos están profundamente gobernados por el inconsciente colectivo."
    },
    herosJourney: {
      en: "In the Hero's Journey, Perthro corresponds to 'The Meeting with the Oracle' or the profound encounter with Fate. The hero realizes that some elements of their journey are preordained or governed by forces beyond their intellectual understanding. The hero must learn to read the subtle signs, trust the 'coincidences' that guide them, and accept the mystery of the unfolding quest without demanding to know the final outcome in advance.",
      es: "En el Viaje del Héroe, Perthro corresponde a 'El Encuentro con el Oráculo' o el profundo encuentro con el Destino. El héroe se da cuenta de que algunos elementos de su viaje están preordenados o gobernados por fuerzas más allá de su comprensión intelectual. El héroe debe aprender a leer los signos sutiles, confiar en las 'coincidencias' que lo guían y aceptar el misterio de la búsqueda en desarrollo sin exigir conocer el resultado final de antemano."
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
      en: "Algiz represents the elk horns branching upward, forming a sanctuary shield of divine protection and heightened awareness. It is the psychic antenna that connects you to higher guidance while warding off negative influences. Algiz warns you to stay alert, maintain clear boundaries, and keep your spiritual connection open. It advises you to ground yourself in the physical world while remaining acutely receptive to the subtle warning signs and protective guidance of the universe.",
      es: "Algiz representa los cuernos de alce que se ramifican hacia arriba, formando un escudo santuario de protección divina y conciencia elevada. Es la antena psíquica que te conecta con una guía superior mientras repele influencias negativas. Algiz te advierte que te mantengas alerta, mantengas límites claros y mantengas abierta tu conexión espiritual. Te aconseja enraizarte en el mundo físico mientras permaneces agudamente receptivo a las sutiles señales de advertencia y la guía protectora del universo."
    },
    symbolism: {
      en: "The rune depicts a person standing with arms raised to the heavens, or the protective antlers of an elk. Associated with Heimdall, the ever-vigilant watchman of the gods, and the protective Valkyries, it signifies spiritual sanctuary and warding off evil.",
      es: "La runa representa a una persona de pie con los brazos levantados hacia el cielo, o las astas protectoras de un alce. Asociada con Heimdall, el vigilante siempre alerta de los dioses, y las valquirias protectoras, significa santuario espiritual y protección contra el mal."
    },
    jungianAnalysis: {
      en: "Algiz embodies the archetype of the Guardian and the psychological defense mechanisms aligned with the Self. It is not rigid, paranoid armor (like Thurisaz can be), but an expansive, sensitive boundary. Algiz is the psychic immune system that wards off unconscious possession, toxic external projections, and psychic inflation. It keeps the sacred inner space pure and protected during vulnerable periods of transition, allowing the ego to develop safely under the watchful eye of the Self.",
      es: "Algiz encarna el arquetipo del Guardián y los mecanismos de defensa psicológica alineados con el Sí-Mismo. No es una armadura rígida y paranoica (como puede serlo Thurisaz), sino un límite expansivo y sensible. Algiz es el sistema inmunológico psíquico que protege contra la posesión inconsciente, las proyecciones externas tóxicas y la inflación psíquica. Mantiene el espacio interior sagrado puro y protegido durante períodos vulnerables de transición, permitiendo que el ego se desarrolle de manera segura bajo la atenta mirada del Sí-Mismo."
    },
    herosJourney: {
      en: "In the Hero's Journey, Algiz corresponds to the 'Amulet of Protection' or the 'Supernatural Aid' received during the quest. The hero receives a divine shield or a heightened instinct that warns them of impending danger. The hero learns that true protection comes not from hiding in fear, but from standing tall, remaining acutely aware of their surroundings, and trusting their spiritual connection to guide them safely through the perils of the underworld.",
      es: "En el Viaje del Héroe, Algiz corresponde al 'Amuleto de Protección' o la 'Ayuda Sobrenatural' recibida durante la búsqueda. El héroe recibe un escudo divino o un instinto elevado que le advierte del peligro inminente. El héroe aprende que la verdadera protección no proviene de esconderse por miedo, sino de mantenerse erguido, permanecer muy consciente de su entorno y confiar en su conexión espiritual para guiarlo de manera segura a través de los peligros del inframundo."
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
      en: "Sowilo represents the blazing sun wheel, solar victory, absolute clarity, and wholeness. It is the radiant triumph of conscious light over dark doubts and internal confusion. Sowilo marks a peak moment of vitality, success, and the victory of truth. It urges you to stand confidently in your authentic power, shine your truth into the world, and embrace complete, unapologetic self-realization. The shadows retreat when you fully inhabit your own light.",
      es: "Sowilo representa la rueda solar en llamas, la victoria solar, la claridad absoluta y la totalidad. Es el triunfo radiante de la luz consciente sobre las dudas oscuras y la confusión interna. Sowilo marca un momento cumbre de vitalidad, éxito y victoria de la verdad. Te insta a mantenerte con confianza en tu poder auténtico, irradiar tu verdad al mundo y abrazar la autorrealización completa y sin remordimientos. Las sombras se retiran cuando habitas plenamente tu propia luz."
    },
    symbolism: {
      en: "The rune resembles a lightning bolt or a ray of the sun. Associated with Sól (the sun goddess) and Baldr (the god of light and purity), it symbolizes the life-giving, invincible power of the sun conquering the winter darkness.",
      es: "La runa se asemeja a un rayo o un rayo de sol. Asociada con Sól (la diosa del sol) y Baldr (el dios de la luz y la pureza), simboliza el poder vivificante e invencible del sol conquistando la oscuridad del invierno."
    },
    jungianAnalysis: {
      en: "Sowilo is the archetype of the Self in its fully conscious, solar aspect. It represents the successful illumination of the psyche, where the ego and the Self are aligned in radiant, undisputed wholeness. Sowilo signifies the healing power of full consciousness—when the dark, hidden aspects of the shadow have been acknowledged, integrated, and transformed into light and vitality. It is the ultimate victory of the conscious mind synthesizing all internal opposites.",
      es: "Sowilo es el arquetipo del Sí-Mismo en su aspecto solar y plenamente consciente. Representa la iluminación exitosa de la psique, donde el ego y el Sí-Mismo están alineados en una totalidad radiante e indiscutible. Sowilo significa el poder curativo de la plena conciencia: cuando los aspectos oscuros y ocultos de la sombra han sido reconocidos, integrados y transformados en luz y vitalidad. Es la victoria definitiva de la mente consciente que sintetiza todos los opuestos internos."
    },
    herosJourney: {
      en: "In the Hero's Journey, Sowilo represents 'The Apotheosis' or the moment of supreme illumination. The hero reaches a peak of understanding, success, and divine empowerment. The darkness of the underworld has been unequivocally conquered by the light of the hero's expanded consciousness. The hero steps into their full power and authority, realizing they are no longer a victim of fate, but the active, radiant creator of their own destiny.",
      es: "En el Viaje del Héroe, Sowilo representa 'La Apoteosis' o el momento de suprema iluminación. El héroe alcanza una cima de comprensión, éxito y empoderamiento divino. La oscuridad del inframundo ha sido inequívocamente conquistada por la luz de la conciencia expandida del héroe. El héroe asume su pleno poder y autoridad, dándose cuenta de que ya no es una víctima del destino, sino el creador activo y radiante de su propio camino."
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
      en: "Tiwaz is the upward-pointing spear of Tyr, the one-handed god who sacrificed his arm in the wolf's jaws to bind chaos. It represents unwavering moral integrity, spiritual warriorhood, and justice. Tiwaz teaches that true victory often requires sacrificing short-term ego comfort for long-term ethical truth. It asks: What personal attachment must you willingly sacrifice to honor your highest principles and restore order to your life?",
      es: "Tiwaz es la lanza de Tyr apuntando hacia arriba, el dios manco que sacrificó su brazo en las fauces del lobo para atar el caos. Representa una integridad moral inquebrantable, la condición de guerrero espiritual y la justicia. Tiwaz enseña que la verdadera victoria a menudo requiere sacrificar la comodidad a corto plazo del ego por la verdad ética a largo plazo. Pregunta: ¿Qué apego personal debes sacrificar voluntariamente para honrar tus principios más elevados y restaurar el orden en tu vida?"
    },
    symbolism: {
      en: "An upward pointing spearhead or the world pillar. Linked to Tyr's legal oath and divine courage, it embodies unwavering focus, spiritual warriorhood, and the alignment of the personal will with universal law.",
      es: "Una punta de lanza apuntando hacia arriba o el pilar del mundo. Vinculada al juramento legal de Tyr y al coraje divino, encarna el enfoque inquebrantable, la condición de guerrero espiritual y la alineación de la voluntad personal con la ley universal."
    },
    jungianAnalysis: {
      en: "Tiwaz is the archetype of the Spiritual Warrior and the Ethical Ego. It represents the psychological maturation where the ego ceases to act out of blind instinct or selfish desire and begins to align with the higher moral imperatives of the Self. It requires facing the internal 'wolf' (chaos) and making painful, conscious choices that prioritize structural integrity and truth over immediate gratification.",
      es: "Tiwaz es el arquetipo del Guerrero Espiritual y el Ego Ético. Representa la maduración psicológica donde el ego deja de actuar por puro instinto ciego o deseo egoísta y comienza a alinearse con los imperativos morales superiores del Sí-Mismo. Requiere enfrentar al 'lobo' interno (el caos) y tomar decisiones dolorosas y conscientes que priorizan la integridad estructural y la verdad sobre la gratificación inmediata."
    },
    herosJourney: {
      en: "In the Hero's Journey, Tiwaz corresponds to 'The Supreme Sacrifice' or the willingness to risk the self for the redemption of the community. The hero realizes that the ultimate victory is not about conquering others, but conquering their own fear and selfishness. They must willingly enter the jaws of danger, knowing they may lose a part of themselves, to secure the future of the world.",
      es: "En el Viaje del Héroe, Tiwaz corresponde al 'Sacrificio Supremo' o la disposición a arriesgarse a sí mismo por la redención de la comunidad. El héroe se da cuenta de que la victoria definitiva no se trata de conquistar a otros, sino de conquistar su propio miedo y egoísmo. Deben entrar voluntariamente en las fauces del peligro, sabiendo que pueden perder una parte de sí mismos, para asegurar el futuro del mundo."
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
      en: "Berkano is the Birch tree—the gentle sanctuary of rebirth, motherhood, and nurturing growth. After the harsh sacrifice of Tiwaz, Berkano provides the healing, fertile soil needed for new beginnings. It represents the quiet, persistent growth of new ideas, the healing of old wounds, and the protective embrace of the mother. Berkano invites you to cultivate extreme patience, gently nurture your emerging projects, and allow warm, healing energy to restore your soul.",
      es: "Berkano es el abedul: el suave santuario del renacimiento, la maternidad y el crecimiento enriquecedor. Después del duro sacrificio de Tiwaz, Berkano proporciona la tierra fértil y curativa necesaria para nuevos comienzos. Representa el crecimiento silencioso y persistente de nuevas ideas, la curación de viejas heridas y el abrazo protector de la madre. Berkano te invita a cultivar una paciencia extrema, nutrir suavemente tus proyectos emergentes y permitir que la energía cálida y curativa restaure tu alma."
    },
    symbolism: {
      en: "The rune glyph resembles the breasts of the Great Mother or birch bark. Linked to Idunn's apples of youth and Frigg's sanctuary, it signifies gentle birth, cyclical regeneration, and the unconditional love that protects fragile new life.",
      es: "El glifo de la runa se asemeja a los pechos de la Gran Madre o a la corteza del abedul. Vinculado a las manzanas de la juventud de Idunn y al santuario de Frigg, significa un nacimiento suave, la regeneración cíclica y el amor incondicional que protege la nueva y frágil vida."
    },
    jungianAnalysis: {
      en: "Berkano embodies the positive aspect of the Great Mother archetype (Alma Mater). It provides the protective psychological container (the temenos) necessary for new psychic structures to incubate safely without being crushed by the harsh demands of the external world. It is the healing regression in service of the ego, where the psyche retreats to a nurturing inner sanctuary to heal trauma and gather strength for the next developmental leap.",
      es: "Berkano encarna el aspecto positivo del arquetipo de la Gran Madre (Alma Mater). Proporciona el contenedor psicológico protector (el temenos) necesario para que las nuevas estructuras psíquicas se incuben de forma segura sin ser aplastadas por las duras exigencias del mundo exterior. Es la regresión curativa al servicio del ego, donde la psique se retira a un santuario interior nutritivo para curar el trauma y reunir fuerzas para el próximo salto de desarrollo."
    },
    herosJourney: {
      en: "In the Hero's Journey, Berkano corresponds to 'Rebirth and Restoration' or 'The Healing of the Hero'. After enduring devastating trials, the hero is taken into a hidden sanctuary to rest and recover. It is a period of receiving maternal grace and emotional nourishment. The hero learns that vulnerability and rest are just as crucial to the quest as bravery and action, allowing their wounded spirit to be renewed.",
      es: "En el Viaje del Héroe, Berkano corresponde a 'Renacimiento y Restauración' o 'La Curación del Héroe'. Después de soportar pruebas devastadoras, el héroe es llevado a un santuario oculto para descansar y recuperarse. Es un período de recibir gracia maternal y nutrición emocional. El héroe aprende que la vulnerabilidad y el descanso son tan cruciales para la búsqueda como la valentía y la acción, permitiendo que su espíritu herido se renueve."
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
      en: "Ehwaz is the sacred horse and rider moving in seamless, intuitive synergy. It represents profound mutual trust, harmonious partnership, and swift, dynamic momentum. In this state, neither the horse nor the rider dominates; true progress requires equal cooperation and deep non-verbal communication. Ehwaz asks you to examine your alliances: Are you working in harmonious partnership with others, and are your conscious goals aligned with your deep unconscious instincts?",
      es: "Ehwaz es el caballo sagrado y su jinete moviéndose en una sinergia intuitiva y perfecta. Representa una profunda confianza mutua, una asociación armoniosa y un impulso rápido y dinámico. En este estado, ni el caballo ni el jinete dominan; el verdadero progreso requiere cooperación equitativa y una profunda comunicación no verbal. Ehwaz te pide que examines tus alianzas: ¿Estás trabajando en asociación armoniosa con otros y están tus objetivos conscientes alineados con tus profundos instintos inconscientes?"
    },
    symbolism: {
      en: "Two horses facing each other or a stylized 'M' depicting the deep bond between human and animal. Associated with Sleipnir (Odin's eight-legged steed) and Freyr's steeds, it embodies swift journey, loyalty, and the sacred marriage of mind and body.",
      es: "Dos caballos frente a frente o una 'M' estilizada que representa el profundo vínculo entre el humano y el animal. Asociada con Sleipnir (el corcel de ocho patas de Odín) y los corceles de Freyr, encarna el viaje veloz, la lealtad y el matrimonio sagrado de mente y cuerpo."
    },
    jungianAnalysis: {
      en: "Ehwaz represents the psychological Synergy of the Ego and the Instinctual Drive (the rider and the horse). When the ego tries to tyrannize the body or the instincts, neurosis occurs. Ehwaz is the state of integration where the conscious mind guides the powerful, raw energy of the unconscious with respect and cooperation. This creates a state of psychological 'flow' and graceful, powerful movement toward the goals of the Self.",
      es: "Ehwaz representa la Sinergia psicológica del Ego y el Impulso Instintivo (el jinete y el caballo). Cuando el ego intenta tiranizar el cuerpo o los instintos, se produce neurosis. Ehwaz es el estado de integración donde la mente consciente guía la energía poderosa y cruda del inconsciente con respeto y cooperación. Esto crea un estado de 'flujo' psicológico y un movimiento elegante y poderoso hacia los objetivos del Sí-Mismo."
    },
    herosJourney: {
      en: "In the Hero's Journey, Ehwaz reflects 'The Magic Flight' or 'The Swift Return Journey'. The hero has formed an unbreakable bond with their allies or animal guides. With newfound power and trusted companions, the hero rides swiftly back toward the ordinary world. The journey is no longer a solitary struggle; it is a synchronized movement supported by powerful forces that have been tamed through mutual respect.",
      es: "En el Viaje del Héroe, Ehwaz refleja 'El Vuelo Mágico' o 'El Rápido Viaje de Retorno'. El héroe ha formado un vínculo inquebrantable con sus aliados o guías animales. Con un poder recién descubierto y compañeros de confianza, el héroe cabalga rápidamente de regreso hacia el mundo ordinario. El viaje ya no es una lucha solitaria; es un movimiento sincronizado apoyado por fuerzas poderosas que han sido domesticadas a través del respeto mutuo."
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
      en: "Mannaz is the rune of humanity, social consciousness, and the integrated mind. It highlights our shared human condition, our intellect, and the deep interconnectedness of the human family. Mannaz challenges you to view yourself clearly in the mirror of your community. It asks: Are you balancing your unique individual identity with your shared human destiny? True fulfillment comes not from isolation, but from understanding your place within the intricate web of humanity.",
      es: "Mannaz es la runa de la humanidad, la conciencia social y la mente integrada. Destaca nuestra condición humana compartida, nuestro intelecto y la profunda interconexión de la familia humana. Mannaz te desafía a verte claramente en el espejo de tu comunidad. Pregunta: ¿Estás equilibrando tu identidad individual única con tu destino humano compartido? La verdadera realización no proviene del aislamiento, sino de comprender tu lugar dentro de la intrincada red de la humanidad."
    },
    symbolism: {
      en: "Two Gebo runes crossed forming an 'M'—showing two humans embracing in mutual support. Linked to Heimdall under the name Ríg (father of social orders), it represents enlightened humanity, shared intellect, and the divine spark within all people.",
      es: "Dos runas Gebo cruzadas formando una 'M', mostrando a dos humanos abrazándose en apoyo mutuo. Vinculada a Heimdall bajo el nombre de Ríg (padre de los órdenes sociales), representa la humanidad iluminada, el intelecto compartido y la chispa divina dentro de todas las personas."
    },
    jungianAnalysis: {
      en: "Mannaz represents the archetype of the Anthropos (the Primordial Human) and the Self in a Social Context. It is the realization that personal individuation does not isolate us; paradoxically, the more we become our unique, true selves, the more deeply we connect to the universal human experience. It is the integration of the ego into the collective, recognizing that our personal struggles are a reflection of the collective human drama.",
      es: "Mannaz representa el arquetipo del Anthropos (el Humano Primordial) y el Sí-Mismo en un Contexto Social. Es darse cuenta de que la individuación personal no nos aísla; paradójicamente, cuanto más nos convertimos en nuestro ser único y verdadero, más profundamente nos conectamos con la experiencia humana universal. Es la integración del ego en el colectivo, reconociendo que nuestras luchas personales son un reflejo del drama humano colectivo."
    },
    herosJourney: {
      en: "In the Hero's Journey, Mannaz corresponds to the 'Master of Two Worlds'. The hero has survived the isolation of the underworld and has returned to integrate their spiritual enlightenment with everyday human existence. They realize that the ultimate goal of the quest was never personal glory, but to bring the elixir back to heal society. The hero becomes a true leader, deeply connected to the needs and suffering of their fellow humans.",
      es: "En el Viaje del Héroe, Mannaz corresponde al 'Maestro de Dos Mundos'. El héroe ha sobrevivido al aislamiento del inframundo y ha regresado para integrar su iluminación espiritual con la existencia humana cotidiana. Se dan cuenta de que el objetivo final de la búsqueda nunca fue la gloria personal, sino traer de vuelta el elixir para sanar a la sociedad. El héroe se convierte en un verdadero líder, profundamente conectado a las necesidades y el sufrimiento de sus semejantes."
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
      en: "Laguz is the flowing ocean water—the realm of dreams, deep intuition, and the unconscious mind. Like water, life requires fluidity, adaptability, and a willingness to be carried by currents larger than yourself. Laguz calls you to dive into your emotional depths, trust your intuitive stream, and yield to the organic flow of events rather than attempting rigid, rational control. The answers you seek are floating in the deep.",
      es: "Laguz es el agua fluyente del océano: el reino de los sueños, la intuición profunda y la mente inconsciente. Como el agua, la vida requiere fluidez, adaptabilidad y la disposición a dejarse llevar por corrientes más grandes que uno mismo. Laguz te llama a sumergirte en tus profundidades emocionales, confiar en tu corriente intuitiva y ceder al flujo orgánico de los acontecimientos en lugar de intentar un control rígido y racional. Las respuestas que buscas flotan en las profundidades."
    },
    symbolism: {
      en: "A single line sloping upward like a rising wave or a leek plant growing from water. Associated with Njörðr's ocean realm and the mysteries of the deep sea, it symbolizes the primal source of all life.",
      es: "Una sola línea inclinada hacia arriba como una ola creciente o una planta de puerro creciendo del agua. Asociada con el reino oceánico de Njörðr y los misterios de las profundidades del mar, simboliza la fuente primordial de toda vida."
    },
    jungianAnalysis: {
      en: "Laguz is the archetype of the Unconscious Mind and the Anima Waters. It represents the psychic ocean from which all consciousness emerges. It demands that the rational ego temporarily surrender its demand for logic and instead navigate by feeling and intuitive truth. It is the necessary immersion into the emotional depths (the 'night sea journey') to retrieve lost psychic fragments or hidden creative inspiration.",
      es: "Laguz es el arquetipo de la Mente Inconsciente y las Aguas del Anima. Representa el océano psíquico del que emerge toda conciencia. Exige que el ego racional renuncie temporalmente a su demanda de lógica y, en cambio, navegue por el sentimiento y la verdad intuitiva. Es la inmersión necesaria en las profundidades emocionales (el 'viaje nocturno por el mar') para recuperar fragmentos psíquicos perdidos o inspiración creativa oculta."
    },
    herosJourney: {
      en: "In the Hero's Journey, Laguz reflects 'The Sea Voyage' or 'Crossing the Great Waters'. It is the perilous navigation across the vast, emotional unknown to reach the final shore. The hero cannot conquer the ocean by force; they must learn to build a sturdy vessel of the self, read the subtle currents of the deep, and trust their intuition to guide them safely through the dark, churning waters.",
      es: "En el Viaje del Héroe, Laguz refleja 'El Viaje Marítimo' o 'Cruzando las Grandes Aguas'. Es la peligrosa navegación a través del vasto y emocional mundo desconocido para llegar a la orilla final. El héroe no puede conquistar el océano por la fuerza; debe aprender a construir una embarcación robusta del yo, leer las corrientes sutiles de las profundidades y confiar en su intuición para guiarlo a salvo a través de las aguas oscuras y agitadas."
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
      en: "Ingwaz is the closed diamond seed—the concentrated, internal storage of potential energy before it bursts into life. It signifies a necessary phase of quiet gestation, internal focus, and the successful completion of a preparatory cycle. Rest in the dark, fertile soil of your soul. Do not force external action yet; energy is currently accumulating and organizing itself for an explosive, transformative breakthrough in the near future.",
      es: "Ingwaz es la semilla de diamante cerrada: el almacenamiento interno y concentrado de energía potencial antes de que estalle en vida. Significa una fase necesaria de gestación silenciosa, enfoque interno y la finalización exitosa de un ciclo preparatorio. Descansa en el suelo oscuro y fértil de tu alma. Todavía no fuerces la acción externa; la energía se está acumulando y organizando actualmente para un avance explosivo y transformador en el futuro cercano."
    },
    symbolism: {
      en: "A closed diamond shape '◇'. Linked to Ing-Freyr, the god of earthy fertility, agriculture, and the sacred enclosed hearth, it represents concentrated potential and safe boundaries.",
      es: "Una forma de diamante cerrada '◇'. Vinculada a Ing-Freyr, el dios de la fertilidad terrenal, la agricultura y el hogar sagrado cerrado, representa el potencial concentrado y los límites seguros."
    },
    jungianAnalysis: {
      en: "Ingwaz represents Psychic Incubation and the concept of the 'Temenos' (the sacred, enclosed container). It is the psychological womb that protects nascent, fragile creative ideas or new personality structures. Before these new structures can withstand the harsh light of reality, they must be allowed to gestate in the dark safety of the unconscious. It is the crucial period of rest and assimilation that immediately precedes a major developmental leap.",
      es: "Ingwaz representa la Incubación Psíquica y el concepto del 'Temenos' (el contenedor sagrado y cerrado). Es el útero psicológico que protege las ideas creativas nacientes y frágiles o las nuevas estructuras de personalidad. Antes de que estas nuevas estructuras puedan soportar la dura luz de la realidad, se les debe permitir gestarse en la oscura seguridad del inconsciente. Es el período crucial de descanso y asimilación que precede inmediatamente a un gran salto de desarrollo."
    },
    herosJourney: {
      en: "Ingwaz embodies 'The Sacred Enclosure' or the 'Preparation for Emergence'. It is the quiet room where the hero rests just before returning to the ordinary world, or the chrysalis phase of final transformation. The hero is integrating all the lessons, power, and elixirs gathered on the quest into their very DNA. The hero is no longer seeking; they are quietly becoming the master they were destined to be.",
      es: "Ingwaz encarna 'El Recinto Sagrado' o la 'Preparación para el Surgimiento'. Es la habitación silenciosa donde el héroe descansa justo antes de regresar al mundo ordinario, o la fase de crisálida de transformación final. El héroe está integrando todas las lecciones, el poder y los elixires reunidos en la búsqueda en su propio ADN. El héroe ya no busca; se está convirtiendo silenciosamente en el maestro que estaba destinado a ser."
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
      en: "Dagaz is the sudden, blinding breakthrough of dawn—a radical transformation of consciousness where all polarities dissolve into divine light. The long night turns into day; doubts vanish in an instant. Dagaz heralds a major paradigm shift, ultimate clarity, and spiritual awakening. The waiting is over. Step boldly into the new light, for a completely new day has begun and the old rules no longer apply.",
      es: "Dagaz es el avance repentino y cegador del amanecer: una transformación radical de la conciencia donde todas las polaridades se disuelven en luz divina. La larga noche se convierte en día; las dudas se desvanecen en un instante. Dagaz anuncia un cambio de paradigma importante, claridad absoluta y despertar espiritual. La espera ha terminado. Entra con valentía en la nueva luz, porque ha comenzado un día completamente nuevo y las viejas reglas ya no se aplican."
    },
    symbolism: {
      en: "An infinity hourglass shape connecting night and day. Associated with Dagr riding his horse Skinfaxi bringing morning light, it symbolizes awakening, enlightenment, and the mystical balance of opposites.",
      es: "Una forma de reloj de arena infinito que conecta la noche y el día. Asociada con Dagr montando su caballo Skinfaxi trayendo la luz de la mañana, simboliza el despertar, la iluminación y el equilibrio místico de los opuestos."
    },
    jungianAnalysis: {
      en: "Dagaz is the Transcendence of Opposites and the successful manifestation of the Transcendent Function. When psychological conflict reaches a peak of unbearable tension, a third, unifying symbol often emerges from the unconscious, bringing instant illumination. Dagaz is this mystical flash of insight—the 'Satori' moment where the ego and shadow, light and dark, are finally synthesized into a higher, unified state of consciousness that transcends the limitations of the previous, divided psychological perspective.",
      es: "Dagaz es la Trascendencia de los Opuestos y la manifestación exitosa de la Función Trascendente. Cuando el conflicto psicológico alcanza un punto máximo de tensión insoportable, a menudo emerge un tercer símbolo unificador del inconsciente, trayendo iluminación instantánea. Dagaz es este destello místico de perspicacia: el momento 'Satori' donde el ego y la sombra, la luz y la oscuridad, finalmente se sintetizan en un estado de conciencia superior y unificado que trasciende las limitaciones de la perspectiva psicológica dividida anterior."
    },
    herosJourney: {
      en: "In the Hero's Journey, Dagaz corresponds to 'The Crossing of the Return Threshold'. The hero brings the blinding light of their transformation back to illuminate the ordinary world. The hero is no longer just a participant in the world; they have become a living beacon of new consciousness. It is the pivotal moment the hero shares the ultimate elixir, forever changing the reality of their entire community with the dawn of a new, enlightened era.",
      es: "En el Viaje del Héroe, Dagaz corresponde a 'El Cruce del Umbral de Regreso'. El héroe trae la luz cegadora de su transformación de vuelta para iluminar el mundo ordinario. El héroe ya no es solo un participante en el mundo; se ha convertido en un faro viviente de nueva conciencia. Es el momento crucial en que el héroe comparte el elixir definitivo, cambiando para siempre la realidad de toda su comunidad con el amanecer de una nueva era iluminada."
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
      en: "Othala is the final rune of the Elder Futhark—the enclosed homestead, spiritual lineage, and ancestral wisdom. It represents your true spiritual home and the integrated heritage you will leave behind. You are called to separate the gold from the dross in your lineage: consciously keep the traditions that honor your soul and bravely release the inherited burdens and generational trauma. You are the sacred sanctuary of your ancestors' highest potential.",
      es: "Othala es la runa final del Elder Futhark: la propiedad cerrada, el linaje espiritual y la sabiduría ancestral. Representa tu verdadero hogar espiritual y la herencia integrada que dejarás atrás. Estás llamado a separar el oro de la escoria en tu linaje: mantén conscientemente las tradiciones que honran tu alma y libera valientemente las cargas heredadas y el trauma generacional. Tú eres el santuario sagrado del máximo potencial de tus antepasados."
    },
    symbolism: {
      en: "An enclosed diamond shape with two legs anchoring it to the earth. Linked to ancestral land rights, inherited wealth, and Odin's eternal sanctuary, it signifies complete integration and belonging.",
      es: "Una forma de diamante cerrada con dos patas que la anclan a la tierra. Vinculada a los derechos territoriales ancestrales, la riqueza heredada y el santuario eterno de Odín, significa integración y pertenencia completas."
    },
    jungianAnalysis: {
      en: "Othala represents the Total Integration of the Collective Ancestral Unconscious. The individual has completed the long, arduous journey of Individuation. They have not only forged a unique, robust Ego, but they have successfully anchored that unique Self within the long, historical lineage of humanity. It is the psychological realization that one is the living culmination of thousands of ancestors, carrying their integrated wisdom into the future.",
      es: "Othala representa la Integración Total del Inconsciente Colectivo Ancestral. El individuo ha completado el largo y arduo viaje de la Individuación. No solo han forjado un Ego único y robusto, sino que han anclado con éxito ese Sí-Mismo único dentro del largo linaje histórico de la humanidad. Es la realización psicológica de que uno es la culminación viva de miles de antepasados, llevando su sabiduría integrada hacia el futuro."
    },
    herosJourney: {
      en: "Othala embodies 'Freedom to Live' or the 'Return with the Elixir'. This is the final stage of Campbell's monomyth. The quest is truly over. The hero has returned home, but 'home' is now transformed by their presence. The hero lives in full, peaceful harmony with both the spiritual and material worlds, serving as a wise elder and safeguarding the sacred sanctuary for the next generation of seekers.",
      es: "Othala encarna la 'Libertad para Vivir' o el 'Regreso con el Elixir'. Esta es la etapa final del monomito de Campbell. La búsqueda realmente ha terminado. El héroe ha regresado a casa, pero el 'hogar' ahora se ha transformado por su presencia. El héroe vive en plena y pacífica armonía con los mundos espiritual y material, sirviendo como un sabio anciano y salvaguardando el santuario sagrado para la próxima generación de buscadores."
    }
  }
];
