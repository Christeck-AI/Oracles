export interface BilingualText {
  es: string;
  en: string;
}

export interface TarotCardData {
  id: number;
  numberRoman: string;
  name: BilingualText;
  image: string;
  heroJourneyStage: BilingualText;
  
  summary: BilingualText;
  symbolism: BilingualText;
  jungianAnalysis: BilingualText;
  herosJourney: BilingualText;
}

export const TAROT_DECK: TarotCardData[] = [
  {
    id: 0,
    numberRoman: "0",
    name: { en: "The Fool", es: "El Loco" },
    image: "./tarot/00_the_fool.png",
    heroJourneyStage: {
      en: "The Call to Adventure",
      es: "La Llamada a la Aventura"
    },
    summary: {
      en: "The Fool represents the pure, unformed potential of the human psyche before the constraints of ego, society, or logic take hold. Standing at the precipice of a cliff, the Fool is ready to take a leap of faith into the vast unknown. This card does not represent foolishness in the negative sense, but rather the divine madness of spontaneity, enthusiasm, and a profound trust in Providence. It heralds a time of new beginnings, irrational choices that defy logic but feel inherently right, and the ultimate freedom of walking a path without predetermined outcomes. The Fool asks you to embrace life with a beginner's mind, untethered by past failures or future anxieties.",
      es: "El Loco representa el potencial puro y sin formar de la psique humana antes de que las restricciones del ego, la sociedad o la lógica se afiancen. De pie al borde de un acantilado, el Loco está listo para dar un salto de fe hacia lo vasto y desconocido. Esta carta no representa la estupidez en un sentido negativo, sino más bien la locura divina de la espontaneidad, el entusiasmo y una profunda confianza en la Providencia. Anuncia un tiempo de nuevos comienzos, elecciones irracionales que desafían la lógica pero que se sienten inherentemente correctas, y la libertad definitiva de caminar un sendero sin resultados predeterminados. El Loco te pide que abraces la vida con la mente de un principiante, libre de fracasos pasados o ansiedades futuras."
    },
    symbolism: {
      en: "In the Rider-Waite-Smith tradition, the Fool is an enthusiastic youth wearing luxurious garments, indicating a spiritual richness rather than material wealth. He gazes upwards toward the celestial planes, entirely ignoring the physical danger of the cliff edge below him, symbolizing a focus on divine inspiration over earthly fears. A small dog yaps at his heels, acting as a representation of his animal nature and instinct—acting both as a warning and a companion urging him forward. The brilliant sun behind him illuminates his path, a sign of cosmic protection and the divine light guiding his otherwise erratic journey.",
      es: "En la tradición de Rider-Waite-Smith, el Loco es un joven entusiasta que viste ropas lujosas, lo que indica una riqueza espiritual más que material. Su mirada se dirige hacia los planos celestiales, ignorando por completo el peligro físico del borde del acantilado bajo él, simbolizando un enfoque en la inspiración divina por encima de los miedos terrenales. Un pequeño perro ladra a sus talones, actuando como una representación de su naturaleza animal e instinto, funcionando tanto como una advertencia como un compañero que lo impulsa hacia adelante. El sol brillante detrás de él ilumina su camino, señal de protección cósmica y de la luz divina que guía su viaje errático."
    },
    jungianAnalysis: {
      en: "Psychologically, the Fool is the archetype of the Divine Child or the Trickster in its purest form. It is the primal energy of the unconscious mind before the ego has differentiated itself from the whole. The Fool is the seed of individuation, the initial spark of psychic life that refuses to be categorized or boxed in by societal norms. Jung viewed this archetype as essential for psychological growth, as it introduces chaos and disruption into stagnant, overly rational systems. By channeling the Fool, we allow our repressed, spontaneous energy to break through the rigid walls of the persona, opening up entirely new avenues for personal transformation.",
      es: "Psicológicamente, el Loco es el arquetipo del Niño Divino o del Trickster en su forma más pura. Es la energía primordial de la mente inconsciente antes de que el ego se haya diferenciado del todo. El Loco es la semilla de la individuación, la chispa inicial de la vida psíquica que se niega a ser categorizada o encasillada por las normas sociales. Jung consideraba este arquetipo como esencial para el crecimiento psicológico, ya que introduce el caos y la disrupción en sistemas estancados y excesivamente racionales. Al canalizar al Loco, permitimos que nuestra energía reprimida y espontánea atraviese los muros rígidos de la persona, abriendo vías completamente nuevas para la transformación personal."
    },
    herosJourney: {
      en: "In Joseph Campbell's monomyth, the Fool embodies the pivotal 'Call to Adventure.' It is the moment the hero realizes that the ordinary world is no longer sufficient and steps out of their comfort zone. The cliff represents the boundary of the known world; stepping off it is the terrifying but necessary leap of faith required to begin the journey. Without this initial plunge into the irrational and the unknown, there can be no adventure, no trials, and no eventual return with the elixir of wisdom. The Fool is the hero taking their very first breath in the realm of myth.",
      es: "En el monomito de Joseph Campbell, el Loco encarna la crucial 'Llamada a la Aventura'. Es el momento en que el héroe se da cuenta de que el mundo ordinario ya no es suficiente y sale de su zona de confort. El acantilado representa el límite del mundo conocido; saltar de él es el acto de fe aterrador pero necesario para comenzar el viaje. Sin esta inmersión inicial en lo irracional y lo desconocido, no puede haber aventura, ni pruebas, ni el eventual regreso con el elixir de la sabiduría. El Loco es el héroe tomando su primer respiro en el reino del mito."
    }
  },
  {
    id: 1,
    numberRoman: "I",
    name: { en: "The Magician", es: "El Mago" },
    image: "./tarot/01_the_magician.png",
    heroJourneyStage: {
      en: "Ego Emergence & Willpower",
      es: "Surgimiento del Ego y Voluntad"
    },
    summary: {
      en: "The Magician represents the active, conscious mind seizing control of the environment. Unlike the Fool who wanders aimlessly, the Magician acts with absolute intention, focus, and mastery. He is the bridge between the spiritual and physical realms, pulling divine energy down from the heavens and manifesting it into earthly reality. This card signifies a period of immense creative power, where all the resources needed for success are readily available to you. It suggests that you must stop hesitating and use your intellect, willpower, and available tools to shape your destiny. The Magician does not wait for things to happen; he makes them happen through sheer force of will.",
      es: "El Mago representa la mente activa y consciente tomando el control del entorno. A diferencia del Loco que vaga sin rumbo, el Mago actúa con absoluta intención, enfoque y maestría. Es el puente entre los reinos espiritual y físico, bajando la energía divina de los cielos y manifestándola en la realidad terrenal. Esta carta significa un período de inmenso poder creativo, donde todos los recursos necesarios para el éxito están a tu disposición. Sugiere que debes dejar de dudar y usar tu intelecto, fuerza de voluntad y herramientas disponibles para moldear tu destino. El Mago no espera a que las cosas sucedan; él hace que sucedan a través de la pura fuerza de voluntad."
    },
    symbolism: {
      en: "The Magician is depicted as a beautiful, Apollo-like figure. Above his head floats the infinity symbol (the lemniscate), representing eternal life and infinite mental capacity. Around his waist is a serpent biting its own tail (Ouroboros), symbolizing eternity and the cyclical nature of the universe. His posture is iconic: one hand points a wand towards the sky to draw down celestial grace, while the other points to the earth to ground it, echoing the hermetic maxim 'As above, so below.' On the table before him rest the four suits of the Tarot (Wand, Cup, Sword, Pentacle), which correspond to the four elements (Fire, Water, Air, Earth)—showing he has mastery over all aspects of material existence.",
      es: "El Mago es representado como una figura hermosa, similar a Apolo. Sobre su cabeza flota el símbolo del infinito (la lemniscata), que representa la vida eterna y la capacidad mental infinita. Alrededor de su cintura hay una serpiente mordiéndose la cola (Ouroboros), simbolizando la eternidad y la naturaleza cíclica del universo. Su postura es icónica: una mano apunta una varita hacia el cielo para atraer la gracia celestial, mientras la otra apunta a la tierra para anclarla, haciéndose eco de la máxima hermética 'Como es arriba, es abajo'. Sobre la mesa frente a él descansan los cuatro palos del Tarot (Basto, Copa, Espada, Oro), que corresponden a los cuatro elementos (Fuego, Agua, Aire, Tierra), demostrando que tiene dominio sobre todos los aspectos de la existencia material."
    },
    jungianAnalysis: {
      en: "In Jungian terms, the Magician marks the emergence of the conscious Ego from the chaotic unconscious of the Fool. It represents the psychological function of thinking and active manifestation. The Magician is the archetype of the skilled creator who understands the mechanics of reality. He integrates the four psychological functions—intuition (wands), feeling (cups), thinking (swords), and sensation (pentacles)—bringing them under the conscious control of the ego. However, there is a shadow aspect: the Magician can become a manipulator or a trickster if his ego becomes inflated and disconnected from the deeper self. True individuation requires him to act as an ego-conduit for the Self, rather than serving his own selfish desires.",
      es: "En términos junguianos, el Mago marca el surgimiento del Ego consciente a partir del caótico inconsciente del Loco. Representa la función psicológica del pensamiento y la manifestación activa. El Mago es el arquetipo del creador hábil que entiende la mecánica de la realidad. Integra las cuatro funciones psicológicas: intuición (bastos), sentimiento (copas), pensamiento (espadas) y sensación (oros), poniéndolas bajo el control consciente del ego. Sin embargo, existe un aspecto de sombra: el Mago puede convertirse en un manipulador o en un embaucador si su ego se infla y se desconecta del Ser profundo. La verdadera individuación requiere que actúe como un conducto del ego para el Ser, en lugar de servir a sus propios deseos egoístas."
    },
    herosJourney: {
      en: "Within the Hero's Journey, the Magician frequently embodies 'Supernatural Aid' or the Mentor archetype. As the hero crosses the threshold, they are provided with amulets, tools, and wisdom necessary to survive the trials ahead. The Magician teaches the hero that they are not powerless victims of fate, but active participants in their own story. By mastering the tools on the table, the hero learns to harness their inner power. It is the crucial stage of acquiring agency—learning the rules of the new world so that one can eventually transcend them.",
      es: "Dentro del Viaje del Héroe, el Mago encarna frecuentemente la 'Ayuda Sobrenatural' o el arquetipo del Mentor. A medida que el héroe cruza el umbral, se le proporcionan los amuletos, herramientas y la sabiduría necesarios para sobrevivir a las pruebas que se avecinan. El Mago le enseña al héroe que no es una víctima impotente del destino, sino un participante activo en su propia historia. Al dominar las herramientas sobre la mesa, el héroe aprende a aprovechar su poder interior. Es la etapa crucial de adquirir agencia: aprender las reglas del nuevo mundo para poder eventualmente trascenderlas."
    }
  },
  {
    id: 2,
    numberRoman: "II",
    name: { en: "The High Priestess", es: "La Sacerdotisa" },
    image: "./tarot/02_the_high_priestess.png",
    heroJourneyStage: {
      en: "Encountering the Unconscious",
      es: "Encuentro con el Inconsciente"
    },
    summary: {
      en: "The High Priestess is the guardian of the subconscious mind and the mysteries of the unknown. Where the Magician represents active, external manifestation, she represents passive, internal reflection. She sits at the threshold of the hidden temple, asking you to withdraw from the noise of the external world and turn inward. This card urges you to trust your intuition, pay attention to your dreams, and seek out the subtle signs that logic cannot explain. She implies that not all knowledge can be actively acquired through study; some truths must be passively received through meditation, patience, and a deep trust in your own inner voice.",
      es: "La Suma Sacerdotisa es la guardiana de la mente subconsciente y los misterios de lo desconocido. Donde el Mago representa la manifestación activa y externa, ella representa la reflexión pasiva e interna. Ella se sienta en el umbral del templo oculto, pidiéndote que te retires del ruido del mundo externo y mires hacia adentro. Esta carta te insta a confiar en tu intuición, prestar atención a tus sueños y buscar las señales sutiles que la lógica no puede explicar. Ella implica que no todo el conocimiento puede adquirirse activamente a través del estudio; algunas verdades deben recibirse pasivamente a través de la meditación, la paciencia y una profunda confianza en tu propia voz interior."
    },
    symbolism: {
      en: "She sits between two pillars—one black (Boaz) and one white (Jachin)—representing the duality of nature: light and darkness, good and evil, masculine and feminine. Her position perfectly in the middle indicates her role as the balancing force. Behind her hangs a veil adorned with pomegranates and palm trees, hiding the ultimate Temple of Knowledge. This implies that true wisdom is veiled from the uninitiated and can only be accessed by looking beyond the surface. She holds the 'Tora' scroll partly hidden in her robes, symbolizing that esoteric knowledge is only partially revealed. The crescent moon at her feet and the horned diadem on her head connect her to the lunar cycles, intuition, and the divine feminine.",
      es: "Ella se sienta entre dos pilares, uno negro (Boaz) y uno blanco (Jachin), que representan la dualidad de la naturaleza: luz y oscuridad, bien y mal, masculino y femenino. Su posición perfectamente en el medio indica su papel como la fuerza equilibradora. Detrás de ella cuelga un velo adornado con granadas y palmeras, ocultando el Templo Supremo del Conocimiento. Esto implica que la verdadera sabiduría está velada para los no iniciados y solo se puede acceder mirando más allá de la superficie. Sostiene el pergamino de la 'Tora' parcialmente oculto en su túnica, simbolizando que el conocimiento esotérico solo se revela parcialmente. La luna creciente a sus pies y la diadema con cuernos en su cabeza la conectan con los ciclos lunares, la intuición y el divino femenino."
    },
    jungianAnalysis: {
      en: "Psychologically, the High Priestess represents the Anima in its purest, most spiritual, and luminous form. She is the personification of the unconscious mind and the gateway to the vast ocean of the collective unconscious. While the Magician is the Ego, she is the Shadow’s quiet counterpart—the vast, uncharted territory of the psyche that communicates through symbols, archetypes, and synchronicity. Jung emphasized that without integrating this intuitive, receptive function, the psyche becomes dangerously lopsided and overly rational. The High Priestess demands that we honor the irrational, the mysterious, and the deeply feminine aspects of our psychological makeup.",
      es: "Psicológicamente, la Sacerdotisa representa el Ánima en su forma más pura, espiritual y luminosa. Es la personificación de la mente inconsciente y la puerta de entrada al vasto océano del inconsciente colectivo. Mientras que el Mago es el Ego, ella es la contraparte silenciosa de la Sombra: el territorio vasto e inexplorado de la psique que se comunica a través de símbolos, arquetipos y sincronicidad. Jung enfatizó que sin integrar esta función intuitiva y receptiva, la psique se vuelve peligrosamente desequilibrada y excesivamente racional. La Sacerdotisa exige que honremos los aspectos irracionales, misteriosos y profundamente femeninos de nuestra estructura psicológica."
    },
    herosJourney: {
      en: "In the Hero's Journey, she represents the 'Crossing of the First Threshold' into the dark forest or the underworld. The hero must pass between the pillars of duality to leave the known world behind. She is the mysterious guardian who tests whether the hero is ready to face the unconscious. Often, she acts as the mystical aspect of the 'Meeting with the Goddess'—a figure of profound wisdom who cannot be conquered by force, but must be understood and respected. She teaches the hero that the greatest truths on their journey will not be found in the outside world, but within.",
      es: "En el Viaje del Héroe, ella representa el 'Cruce del Primer Umbral' hacia el bosque oscuro o el inframundo. El héroe debe pasar entre los pilares de la dualidad para dejar atrás el mundo conocido. Ella es la misteriosa guardiana que pone a prueba si el héroe está listo para enfrentar el inconsciente. A menudo, actúa como el aspecto místico del 'Encuentro con la Diosa': una figura de profunda sabiduría que no puede ser conquistada por la fuerza, sino que debe ser comprendida y respetada. Ella le enseña al héroe que las mayores verdades en su viaje no se encontrarán en el mundo exterior, sino en su interior."
    }
  },
  {
    id: 3,
    numberRoman: "III",
    name: { en: "The Empress", es: "La Emperatriz" },
    image: "./tarot/03_the_empress.png",
    heroJourneyStage: {
      en: "The Great Mother",
      es: "La Gran Madre"
    },
    summary: {
      en: "The Empress is the ultimate symbol of earthly abundance, fertility, and sensual experience. Where the High Priestess represents the hidden, spiritual realms, the Empress is the vibrant, tangible materialization of life. She invites you to connect with nature, embrace pleasure, and nurture the creative projects that are germinating within you. This card is a highly favorable omen for growth, signifying that a period of gestation is coming to an end and it is time for your ideas to bear fruit in the real world. She tells you to get out of your head and into your body, celebrating the beauty and richness of physical existence.",
      es: "La Emperatriz es el símbolo supremo de la abundancia terrenal, la fertilidad y la experiencia sensual. Donde la Sacerdotisa representa los reinos espirituales ocultos, la Emperatriz es la materialización vibrante y tangible de la vida. Te invita a conectarte con la naturaleza, abrazar el placer y nutrir los proyectos creativos que están germinando dentro de ti. Esta carta es un presagio muy favorable para el crecimiento, lo que significa que un período de gestación está llegando a su fin y es hora de que tus ideas den frutos en el mundo real. Ella te dice que salgas de tu cabeza y entres en tu cuerpo, celebrando la belleza y la riqueza de la existencia física."
    },
    symbolism: {
      en: "She sits majestically in a lush, fertile environment, surrounded by a growing cornfield that represents agricultural abundance and physical nourishment. A river flows peacefully through a forest behind her, symbolizing the continuous, life-giving flow of emotion and energy. She wears a crown of twelve stars, linking her to the zodiac and the celestial cycles that govern earthly seasons. Her shield bears the symbol of Venus, the planet of love, beauty, and art. Her comfortable, flowing garments suggest pregnancy, reinforcing her role as the Mother of all creation, who brings forth life effortlessly and naturally.",
      es: "Se sienta majestuosamente en un entorno exuberante y fértil, rodeada de un campo de maíz en crecimiento que representa la abundancia agrícola y la nutrición física. Un río fluye pacíficamente a través de un bosque detrás de ella, simbolizando el flujo continuo y vivificante de emoción y energía. Lleva una corona de doce estrellas, vinculándola con el zodíaco y los ciclos celestiales que gobiernan las estaciones terrenales. Su escudo lleva el símbolo de Venus, el planeta del amor, la belleza y el arte. Sus prendas cómodas y sueltas sugieren un embarazo, reforzando su papel como la Madre de toda la creación, que da a luz a la vida sin esfuerzo y de forma natural."
    },
    jungianAnalysis: {
      en: "The Empress embodies the archetype of the Great Mother. She is the psychological representation of unconditional love, nurturing, and our deep-rooted connection to the earth and our own physical bodies. In the individuation process, the Empress represents the necessity of grounding our spiritual or intellectual insights into tangible reality. A healthy integration of the Great Mother allows for creativity, emotional warmth, and the ability to care for oneself and others. However, in its shadow aspect, the Devouring Mother can become smothering, possessive, or overly indulgent in sensual pleasures, preventing the individual from achieving independence and self-sufficiency.",
      es: "La Emperatriz encarna el arquetipo de la Gran Madre. Ella es la representación psicológica del amor incondicional, la crianza y nuestra conexión profundamente arraigada con la tierra y nuestros propios cuerpos físicos. En el proceso de individuación, la Emperatriz representa la necesidad de anclar nuestras percepciones espirituales o intelectuales en la realidad tangible. Una integración saludable de la Gran Madre permite la creatividad, la calidez emocional y la capacidad de cuidarse a uno mismo y a los demás. Sin embargo, en su aspecto de sombra, la Madre Devoradora puede volverse asfixiante, posesiva o excesivamente indulgente con los placeres sensuales, impidiendo que el individuo alcance la independencia y la autosuficiencia."
    },
    herosJourney: {
      en: "In the context of the Hero's Journey, the Empress is the 'Meeting with the Goddess' in her most benevolent, life-affirming aspect. After enduring the terrifying trials of the unconscious, the hero is rewarded with a moment of rest, healing, and profound unconditional love. She represents the ultimate boon of physical vitality and the restoration of the hero's spirit. The hero learns that the quest is not merely about conquering demons, but also about protecting and cherishing the beauty of the world. She is the earthly paradise that the hero is fighting to save.",
      es: "En el contexto del Viaje del Héroe, la Emperatriz es el 'Encuentro con la Diosa' en su aspecto más benevolente y afirmativo de la vida. Después de soportar las aterradoras pruebas del inconsciente, el héroe es recompensado con un momento de descanso, sanación y un profundo amor incondicional. Ella representa la máxima bendición de la vitalidad física y la restauración del espíritu del héroe. El héroe aprende que la búsqueda no se trata solo de conquistar demonios, sino también de proteger y valorar la belleza del mundo. Ella es el paraíso terrenal que el héroe lucha por salvar."
    }
  },
  {
    id: 4,
    numberRoman: "IV",
    name: { en: "The Emperor", es: "El Emperador" },
    image: "./tarot/04_the_emperor.png",
    heroJourneyStage: {
      en: "The Great Father",
      es: "El Gran Padre"
    },
    summary: {
      en: "The Emperor is the embodiment of structure, authority, and logical order. Where the Empress represents the chaotic, fertile growth of nature, the Emperor represents the boundaries, rules, and stability required to build a lasting civilization. He is the stabilizing force that brings form to ideas, ensuring they are practical and grounded in reality. This card signifies a time to exercise discipline, set firm boundaries, and take a rational, organized approach to your challenges. It indicates a mastery over one's environment through sheer force of will, logic, and a clear understanding of the rules of the game.",
      es: "El Emperador es la encarnación de la estructura, la autoridad y el orden lógico. Donde la Emperatriz representa el crecimiento caótico y fértil de la naturaleza, el Emperador representa los límites, las reglas y la estabilidad necesarios para construir una civilización duradera. Él es la fuerza estabilizadora que da forma a las ideas, asegurando que sean prácticas y estén ancladas en la realidad. Esta carta significa un momento para ejercer disciplina, establecer límites firmes y adoptar un enfoque racional y organizado frente a tus desafíos. Indica un dominio sobre el entorno a través de la pura fuerza de voluntad, la lógica y una clara comprensión de las reglas del juego."
    },
    symbolism: {
      en: "He sits rigidly on a cubic stone throne, heavily decorated with four ram heads, representing the astrological sign of Aries—a symbol of action, ambition, and pioneering energy. The cube itself is a symbol of matter, earthly reality, and unshakeable stability. In his right hand, he holds an Ankh, the ancient Egyptian cross representing the breath of life, and in his left hand, an orb representing the world over which he rules. Beneath his red robes of passion and worldly power, he wears cold, hard armor, indicating that he is always prepared to defend his territory and enforce his laws. The barren mountains behind him contrast with the lushness of the Empress, highlighting his harsh, unyielding nature.",
      es: "Se sienta rígidamente en un trono de piedra cúbica, fuertemente decorado con cuatro cabezas de carnero, que representan el signo astrológico de Aries: un símbolo de acción, ambición y energía pionera. El cubo en sí es un símbolo de la materia, la realidad terrenal y la estabilidad inquebrantable. En su mano derecha sostiene un Anj, la antigua cruz egipcia que representa el aliento de vida, y en su izquierda, un orbe que representa el mundo sobre el que gobierna. Debajo de sus ropas rojas de pasión y poder mundano, lleva una armadura fría y dura, lo que indica que siempre está preparado para defender su territorio y hacer cumplir sus leyes. Las montañas áridas detrás de él contrastan con la exuberancia de la Emperatriz, destacando su naturaleza dura e inflexible."
    },
    jungianAnalysis: {
      en: "Psychologically, the Emperor is the archetype of the Father, the Senex (the Old Man), and the principle of Logos (reason). He represents the ego's ability to construct boundaries and navigate the material world successfully. A healthy integration of the Father archetype gives a person self-discipline, assertiveness, and the ability to protect themselves. However, the shadow aspect of the Emperor is the Tyrant: rigidity, excessive control, emotional repression, and a refusal to adapt. If the ego becomes too heavily identified with the Emperor, the psyche becomes sterile and dictatorial, crushing the spontaneous joy of the Fool or the creative flow of the Empress.",
      es: "Psicológicamente, el Emperador es el arquetipo del Padre, el Senex (el Viejo) y el principio del Logos (la razón). Representa la capacidad del ego para construir límites y navegar con éxito por el mundo material. Una integración saludable del arquetipo del Padre le da a una persona autodisciplina, asertividad y la capacidad de protegerse. Sin embargo, el aspecto de sombra del Emperador es el Tirano: rigidez, control excesivo, represión emocional y negativa a adaptarse. Si el ego se identifica demasiado con el Emperador, la psique se vuelve estéril y dictatorial, aplastando la alegría espontánea del Loco o el flujo creativo de la Emperatriz."
    },
    herosJourney: {
      en: "In the Hero's Journey, this card often relates to the 'Atonement with the Father' or facing the ultimate threshold guardian of law and order. The hero must reconcile with the patriarchal forces of their society—either by mastering its rules to gain power, or by confronting its restrictive, tyrannical aspects to overthrow them. The Emperor represents the societal structures and the 'known world' that the hero must ultimately transcend, but cannot do so without first understanding its foundations. It is the mastery of the physical world before proceeding to the deeper spiritual trials.",
      es: "En el Viaje del Héroe, esta carta a menudo se relaciona con la 'Expiación con el Padre' o con enfrentar al guardián supremo del umbral de la ley y el orden. El héroe debe reconciliarse con las fuerzas patriarcales de su sociedad, ya sea dominando sus reglas para ganar poder, o confrontando sus aspectos restrictivos y tiránicos para derrocarlos. El Emperador representa las estructuras sociales y el 'mundo conocido' que el héroe debe finalmente trascender, pero no puede hacerlo sin comprender primero sus cimientos. Es el dominio del mundo físico antes de proceder a las pruebas espirituales más profundas."
    }
  },
  {
    id: 5,
    numberRoman: "V",
    name: { en: "The Hierophant", es: "El Sumo Sacerdote" },
    image: "./tarot/05_the_hierophant.png",
    heroJourneyStage: {
      en: "Social Conditioning",
      es: "Condicionamiento Social"
    },
    summary: {
      en: "The Hierophant represents tradition, institutional knowledge, and established belief systems. Where the Emperor dictates material law, the Hierophant translates divine law to the masses. He is the bridge between the sacred and the profane, offering a structured, orthodox path to spiritual understanding. This card often suggests a period of learning from established institutions, seeking sound counsel from mentors, or adhering to the traditional ways of doing things. It emphasizes the importance of community, shared values, and the comfort found in rituals and cultural norms, rather than striking out on an unorthodox, rebellious path.",
      es: "El Sumo Sacerdote representa la tradición, el conocimiento institucional y los sistemas de creencias establecidos. Donde el Emperador dicta la ley material, el Sumo Sacerdote traduce la ley divina a las masas. Es el puente entre lo sagrado y lo profano, ofreciendo un camino estructurado y ortodoxo hacia la comprensión espiritual. Esta carta sugiere a menudo un período de aprendizaje de las instituciones establecidas, buscando buenos consejos de mentores o adhiriéndose a las formas tradicionales de hacer las cosas. Enfatiza la importancia de la comunidad, los valores compartidos y el consuelo que se encuentra en los rituales y las normas culturales, en lugar de emprender un camino poco ortodoxo y rebelde."
    },
    symbolism: {
      en: "He wears a papal tiara with three tiers, representing his dominion over the three worlds: conscious, subconscious, and superconscious. In his left hand, he holds a triple cross, a symbol of his religious authority. His right hand is raised in a traditional blessing, signaling the transmission of esoteric knowledge to the exoteric world. At his feet lie two crossed keys—one of gold (solar/masculine) and one of silver (lunar/feminine)—representing the keys to heaven and the conscious/unconscious minds. Two initiates kneel before him, representing humanity's dualistic nature seeking guidance and the hierarchical transfer of wisdom from master to student.",
      es: "Lleva una tiara papal de tres niveles, que representa su dominio sobre los tres mundos: consciente, subconsciente y superconsciente. En su mano izquierda, sostiene una cruz triple, símbolo de su autoridad religiosa. Su mano derecha está levantada en una bendición tradicional, señalando la transmisión del conocimiento esotérico al mundo exotérico. A sus pies yacen dos llaves cruzadas, una de oro (solar/masculina) y una de plata (lunar/femenina), que representan las llaves del cielo y de las mentes consciente/inconsciente. Dos iniciados se arrodillan ante él, representando la naturaleza dualista de la humanidad que busca guía y la transferencia jerárquica de sabiduría de maestro a estudiante."
    },
    jungianAnalysis: {
      en: "The Hierophant is the archetype of the Wise Old Man channeled through the Persona of society. He represents the collective belief systems, the moral compass of the community, and the necessary psychological conditioning we all undergo to function within a group. Jung noted that individuals need this collective framework before true individuation can occur—you must understand the rules before you can break them. The shadow of the Hierophant is blind conformity, dogmatism, and the crushing of individual thought in favor of groupthink. When negatively aspected, it is the refusal to listen to one's inner High Priestess in favor of external, orthodox authority.",
      es: "El Sumo Sacerdote es el arquetipo del Viejo Sabio canalizado a través de la Persona de la sociedad. Representa los sistemas de creencias colectivos, la brújula moral de la comunidad y el condicionamiento psicológico necesario por el que todos pasamos para funcionar dentro de un grupo. Jung señaló que los individuos necesitan este marco colectivo antes de que pueda ocurrir la verdadera individuación: debes entender las reglas antes de poder romperlas. La sombra del Sumo Sacerdote es la conformidad ciega, el dogmatismo y el aplastamiento del pensamiento individual a favor del pensamiento grupal. Cuando está aspectado negativamente, es la negativa a escuchar a la Sacerdotisa interior en favor de la autoridad externa y ortodoxa."
    },
    herosJourney: {
      en: "In the monomyth, this card represents the phase of 'Social Conditioning' or the encounter with a traditional Mentor figure. Before the hero can embark on a truly unique path, they often undergo training within an established order (like a monastic order or a military academy). The Hierophant provides the hero with the cultural context, the history, and the moral code of their world. Eventually, the hero may outgrow these teachings and realize that the ultimate truth cannot be taught by an institution, but this foundational stage is a vital stepping stone on their journey.",
      es: "En el monomito, esta carta representa la fase del 'Condicionamiento Social' o el encuentro con una figura tradicional de Mentor. Antes de que el héroe pueda emprender un camino verdaderamente único, a menudo se somete a entrenamiento dentro de un orden establecido (como una orden monástica o una academia militar). El Sumo Sacerdote le proporciona al héroe el contexto cultural, la historia y el código moral de su mundo. Eventualmente, el héroe puede superar estas enseñanzas y darse cuenta de que la verdad fundamental no puede ser enseñada por una institución, pero esta etapa fundamental es un escalón vital en su viaje."
    }
  },
  {
    id: 6,
    numberRoman: "VI",
    name: { en: "The Lovers", es: "Los Enamorados" },
    image: "./tarot/06_the_lovers.png",
    heroJourneyStage: {
      en: "The Choice & Alignment",
      es: "La Elección y Alineación"
    },
    summary: {
      en: "The Lovers card is not solely about romance; it represents a profound psychological crossroads and the integration of dualities. It signifies a moment where a significant, life-altering choice must be made—often a choice between the expectations of society (the Hierophant) and one's own internal truth. It speaks to the alignment of your core values, where you must define who you truly are and what you stand for. It is the harmony achieved when the conscious mind and the subconscious mind act in unison, creating a powerful, magnetic attraction toward a person, path, or belief system that deeply resonates with your soul.",
      es: "La carta de Los Enamorados no trata únicamente de romance; representa una profunda encrucijada psicológica y la integración de dualidades. Significa un momento en el que se debe tomar una decisión significativa que altera la vida, a menudo una elección entre las expectativas de la sociedad (el Sumo Sacerdote) y la propia verdad interna. Habla de la alineación de tus valores fundamentales, donde debes definir quién eres realmente y qué defiendes. Es la armonía que se logra cuando la mente consciente y la mente subconsciente actúan al unísono, creando una poderosa atracción magnética hacia una persona, camino o sistema de creencias que resuena profundamente con tu alma."
    },
    symbolism: {
      en: "The imagery heavily references the Garden of Eden. The Archangel Raphael (air, healing, communication) presides over the scene, blessing the union below. Adam stands near the Tree of Life, bearing twelve fiery fruits (the zodiac), representing the conscious, rational mind. Eve stands near the Tree of Knowledge of Good and Evil, with the serpent wrapped around it, representing the subconscious and the senses. Notice the gaze: Adam looks at Eve, and Eve looks up at the Angel. This symbolizes the flow of consciousness: the rational mind must connect with the subconscious, which in turn connects to the divine superconscious. The choice is between remaining in innocent ignorance or taking the risk of eating the fruit to gain profound wisdom.",
      es: "La imaginería hace gran referencia al Jardín del Edén. El Arcángel Rafael (aire, sanación, comunicación) preside la escena, bendiciendo la unión debajo. Adán está cerca del Árbol de la Vida, con doce frutos de fuego (el zodíaco), que representa la mente consciente y racional. Eva está cerca del Árbol del Conocimiento del Bien y del Mal, con la serpiente enroscada en él, representando el subconsciente y los sentidos. Nota la mirada: Adán mira a Eva, y Eva mira hacia arriba al Ángel. Esto simboliza el flujo de la consciencia: la mente racional debe conectarse con el subconsciente, que a su vez se conecta con el superconsciente divino. La elección es entre permanecer en la ignorancia inocente o correr el riesgo de comer el fruto para obtener una profunda sabiduría."
    },
    jungianAnalysis: {
      en: "This card perfectly encapsulates the integration of the Anima (the inner feminine) and the Animus (the inner masculine) within the psyche. Jung believed that we project these inner archetypes onto romantic partners in the external world. The Lovers represent the difficult psychological work of withdrawing those projections and recognizing that the beloved is actually a reflection of one's own soul. The 'choice' inherent in this card is the decision to pursue true individuation, integrating the opposing forces within oneself to create a unified, whole personality, rather than remaining divided and projecting one's flaws and desires onto others.",
      es: "Esta carta encapsula perfectamente la integración del Ánima (el femenino interno) y el Ánimus (el masculino interno) dentro de la psique. Jung creía que proyectamos estos arquetipos internos sobre parejas románticas en el mundo externo. Los Enamorados representan el difícil trabajo psicológico de retirar esas proyecciones y reconocer que el ser amado es en realidad un reflejo del propia alma. La 'elección' inherente a esta carta es la decisión de perseguir la verdadera individuación, integrando las fuerzas opuestas dentro de uno mismo para crear una personalidad unificada y completa, en lugar de permanecer dividido y proyectar los propios defectos y deseos en los demás."
    },
    herosJourney: {
      en: "In Campbell's framework, this is the profound 'Meeting with the Goddess' or a pivotal 'Trial' where the hero is presented with a temptation or a divergent path. The hero must decide whether to abandon the quest for the comforts of the known, or to align their actions with their newly discovered, deeper values. It is a moment of total commitment. The hero leaves behind the paternal rules of the Emperor and the Hierophant, stepping out of adolescence and making the first truly independent, soul-defining choice of their journey.",
      es: "En el marco de Campbell, este es el profundo 'Encuentro con la Diosa' o una 'Prueba' crucial donde se le presenta al héroe una tentación o un camino divergente. El héroe debe decidir si abandona la búsqueda por las comodidades de lo conocido, o si alinea sus acciones con sus valores más profundos y recién descubiertos. Es un momento de compromiso total. El héroe deja atrás las reglas paternas del Emperador y el Sumo Sacerdote, saliendo de la adolescencia y tomando la primera elección verdaderamente independiente y definitoria de su viaje."
    }
  },
  {
    id: 7,
    numberRoman: "VII",
    name: { en: "The Chariot", es: "El Carro" },
    image: "./tarot/07_the_chariot.png",
    heroJourneyStage: {
      en: "Ego Mastery",
      es: "Dominio del Ego"
    },
    summary: {
      en: "The Chariot represents the triumph of willpower, self-discipline, and determination. Having made the critical choice in The Lovers, the charioteer is now thrust forward into action. This card signifies victory over opposing forces, not by destroying them, but by mastering and steering them toward a single goal. It is the sheer force of the ego asserting control over chaotic emotions and conflicting desires. The Chariot guarantees success, provided you maintain laser focus and do not allow your internal contradictions to pull you off course. It is about seizing the reins of your own destiny.",
      es: "El Carro representa el triunfo de la fuerza de voluntad, la autodisciplina y la determinación. Habiendo tomado la decisión crítica en Los Enamorados, el auriga ahora se lanza a la acción. Esta carta significa la victoria sobre las fuerzas opuestas, no destruyéndolas, sino dominándolas y dirigiéndolas hacia un solo objetivo. Es la pura fuerza del ego afirmando el control sobre emociones caóticas y deseos conflictivos. El Carro garantiza el éxito, siempre que mantengas un enfoque láser y no permitas que tus contradicciones internas te desvíen de tu rumbo. Se trata de tomar las riendas de tu propio destino."
    },
    symbolism: {
      en: "The warrior stands inside a cubic chariot, representing material reality and stability. His canopy is decorated with six-pointed stars, symbolizing celestial influence and divine protection. On his shoulders are crescent moons, pointing outward, showing his mastery over the shifting tides of emotion. Most importantly, the chariot is pulled by two sphinxes—one black and one white. They represent dualities (positive/negative, conscious/unconscious, instinct/reason). Notice that the charioteer holds no reins; he drives the beasts purely through the strength of his will and mental focus. The city behind him is left in the distance as he ventures out into the world to conquer it.",
      es: "El guerrero está de pie dentro de un carro cúbico, que representa la realidad material y la estabilidad. Su dosel está decorado con estrellas de seis puntas, que simbolizan la influencia celestial y la protección divina. En sus hombros hay lunas crecientes que apuntan hacia afuera, mostrando su dominio sobre las mareas cambiantes de la emoción. Lo más importante es que el carro es tirado por dos esfinges, una negra y una blanca. Representan dualidades (positivo/negativo, consciente/inconsciente, instinto/razón). Nota que el auriga no sostiene riendas; él conduce a las bestias puramente a través de la fuerza de su voluntad y enfoque mental. La ciudad detrás de él queda en la distancia mientras se aventura en el mundo para conquistarlo."
    },
    jungianAnalysis: {
      en: "The Chariot symbolizes the successful formation of a strong, capable Ego. It is the psychological state where the individual has recognized their opposing inner drives (the black and white sphinxes) and has managed to harness them without being torn apart. However, Jung would note that this is not true 'integration' or individuation yet. The driver is controlling the shadow and the instincts through repression and sheer mental discipline rather than understanding them. It is a necessary stage of psychological development to achieve worldly goals, but it is ultimately fragile—if the driver's focus slips, the sphinxes will pull in opposite directions and tear the psyche apart.",
      es: "El Carro simboliza la formación exitosa de un Ego fuerte y capaz. Es el estado psicológico donde el individuo ha reconocido sus impulsos internos opuestos (las esfinges blanca y negra) y ha logrado aprovecharlos sin ser despedazado. Sin embargo, Jung notaría que esto aún no es una verdadera 'integración' o individuación. El conductor controla la sombra y los instintos a través de la represión y la pura disciplina mental en lugar de comprenderlos. Es una etapa necesaria del desarrollo psicológico para lograr metas mundanas, pero en última instancia es frágil: si el enfoque del conductor se resbala, las esfinges tirarán en direcciones opuestas y destrozarán la psique."
    },
    herosJourney: {
      en: "In the Hero's Journey, this card represents a significant mid-journey victory or the successful departure from the ordinary world. The hero has acquired their tools, made their fundamental choices, and is now actively charging through the trials. It is the moment the hero stops reacting to the plot and starts driving it. While it feels like ultimate victory, it is only the end of the first act. The chariot carries the hero forward into deeper, more terrifying psychological territory where mere ego-strength will no longer be enough to survive.",
      es: "En el Viaje del Héroe, esta carta representa una victoria significativa a mitad del viaje o la exitosa partida del mundo ordinario. El héroe ha adquirido sus herramientas, ha tomado sus decisiones fundamentales y ahora está avanzando activamente a través de las pruebas. Es el momento en que el héroe deja de reaccionar a la trama y comienza a dirigirla. Si bien se siente como la victoria suprema, es solo el final del primer acto. El carro lleva al héroe hacia adelante a un territorio psicológico más profundo y aterrador donde la mera fuerza del ego ya no será suficiente para sobrevivir."
    }
  },
  {
    id: 8,
    numberRoman: "VIII",
    name: { en: "Strength", es: "La Fuerza" },
    image: "./tarot/08_strength.png",
    heroJourneyStage: {
      en: "Taming the Inner Beast",
      es: "Domar a la Bestia Interior"
    },
    summary: {
      en: "Strength represents inner fortitude, compassion, and the power of emotional self-regulation. Unlike the Chariot, which controls opposing forces through sheer willpower and rigid discipline, Strength achieves control through gentle acceptance and love. This card suggests that true power does not come from suppressing your fears, anger, or base desires, but from acknowledging them and treating them with kindness. It is a reminder that you possess the resilience to overcome any obstacle, provided you approach it with patience and a calm, centered spirit rather than brute force.",
      es: "La Fuerza representa la fortaleza interior, la compasión y el poder de la autorregulación emocional. A diferencia del Carro, que controla las fuerzas opuestas a través de pura fuerza de voluntad y rígida disciplina, la Fuerza logra el control a través de la aceptación gentil y el amor. Esta carta sugiere que el verdadero poder no proviene de suprimir tus miedos, ira o deseos básicos, sino de reconocerlos y tratarlos con amabilidad. Es un recordatorio de que posees la resiliencia para superar cualquier obstáculo, siempre y cuando lo abordes con paciencia y un espíritu tranquilo y centrado, en lugar de fuerza bruta."
    },
    symbolism: {
      en: "A serene young woman stands over a fierce lion, gently but firmly closing (or opening) its jaws. She uses no weapons; her power comes from her spiritual purity and lack of fear. Above her head floats the infinity symbol (lemniscate), exactly like the Magician, indicating that she too possesses infinite spiritual power, but expresses it through the heart rather than the mind. She wears a white robe representing purity, adorned with garlands of flowers that connect her to nature. The lion represents our raw, primal passions, our anger, and our animal instincts. The fact that the beast submits willingly to her gentle touch shows that love and compassion are stronger than fear.",
      es: "Una joven serena se alza sobre un león feroz, cerrando (o abriendo) sus mandíbulas de manera gentil pero firme. No usa armas; su poder proviene de su pureza espiritual y de su falta de miedo. Sobre su cabeza flota el símbolo del infinito (lemniscata), exactamente igual que el Mago, indicando que ella también posee un poder espiritual infinito, pero lo expresa a través del corazón en lugar de la mente. Lleva una túnica blanca que representa la pureza, adornada con guirnaldas de flores que la conectan con la naturaleza. El león representa nuestras pasiones crudas y primarias, nuestra ira y nuestros instintos animales. El hecho de que la bestia se someta voluntariamente a su toque gentil demuestra que el amor y la compasión son más fuertes que el miedo."
    },
    jungianAnalysis: {
      en: "In Jungian psychology, Strength perfectly illustrates the confrontation and integration of the Shadow. The lion is the shadow—the repressed, aggressive, and instinctual parts of the psyche that the ego (the woman) usually fears. If we attack our shadow or try to repress it, it only grows more vicious. By approaching the shadow with consciousness and compassion, we 'tame' it. The raw energy of the shadow is not destroyed; instead, it is integrated into the total personality, providing the individual with immense vitality, courage, and true psychological wholeness.",
      es: "En la psicología junguiana, la Fuerza ilustra a la perfección la confrontación y la integración de la Sombra. El león es la sombra: las partes reprimidas, agresivas e instintivas de la psique que el ego (la mujer) usualmente teme. Si atacamos nuestra sombra o tratamos de reprimirla, solo se vuelve más feroz. Al abordar la sombra con consciencia y compasión, la 'domamos'. La energía cruda de la sombra no se destruye; en cambio, se integra en la personalidad total, proporcionando al individuo una inmensa vitalidad, coraje y verdadera plenitud psicológica."
    },
    herosJourney: {
      en: "This stage in the Hero's Journey often involves dealing with a terrifying 'Threshold Guardian' or an inner demon. The hero learns that they cannot defeat every enemy with a sword. Sometimes, the only way to pass the test is to lay down one's weapons and show compassion to the monster, realizing the monster is merely a reflection of the hero's own unresolved trauma. It is the crucial development of emotional maturity before descending into the deepest parts of the underworld.",
      es: "Esta etapa en el Viaje del Héroe a menudo implica lidiar con un aterrador 'Guardián del Umbral' o un demonio interno. El héroe aprende que no puede derrotar a todos los enemigos con una espada. A veces, la única forma de pasar la prueba es dejar las armas y mostrar compasión hacia el monstruo, dándose cuenta de que el monstruo es simplemente un reflejo del propio trauma no resuelto del héroe. Es el desarrollo crucial de la madurez emocional antes de descender a las partes más profundas del inframundo."
    }
  },
  {
    id: 9,
    numberRoman: "IX",
    name: { en: "The Hermit", es: "El Ermitaño" },
    image: "./tarot/09_the_hermit.png",
    heroJourneyStage: {
      en: "Withdrawal & Introspection",
      es: "Retiro e Introspección"
    },
    summary: {
      en: "The Hermit represents the deliberate withdrawal of energy from the external world in order to focus entirely on the inner self. After the external triumphs (The Chariot) and the internal tamings (Strength), a period of profound introspection is required. This card indicates a time for solitude, meditation, and seeking your own inner truth away from the noise and opinions of society. The Hermit suggests that the answers you seek cannot be found in books, teachers, or friends—they can only be illuminated by the quiet light of your own consciousness in the stillness of isolation.",
      es: "El Ermitaño representa el retiro deliberado de la energía del mundo externo para centrarse por completo en el ser interior. Después de los triunfos externos (El Carro) y las domas internas (La Fuerza), se requiere un período de profunda introspección. Esta carta indica un momento para la soledad, la meditación y la búsqueda de tu propia verdad interior lejos del ruido y las opiniones de la sociedad. El Ermitaño sugiere que las respuestas que buscas no se pueden encontrar en libros, maestros o amigos; solo pueden ser iluminadas por la luz silenciosa de tu propia consciencia en la quietud del aislamiento."
    },
    symbolism: {
      en: "An old, bearded man stands alone on a cold, snowy mountain peak, wearing a simple gray cloak. He has reached the pinnacle of spiritual understanding, leaving behind the warmth and distractions of the valleys below. In his right hand, he holds a lantern containing a glowing six-pointed star (the Seal of Solomon), representing the guiding light of divine wisdom and human consciousness. In his left hand, he leans on a golden staff, symbolizing his accumulated knowledge and authority to support him on his solitary path. He looks down, perhaps to guide those who are climbing the mountain after him, or simply to illuminate the next small step on his own path.",
      es: "Un anciano con barba está solo en la cima fría y nevada de una montaña, vistiendo una sencilla capa gris. Ha alcanzado el pináculo de la comprensión espiritual, dejando atrás la calidez y las distracciones de los valles. En su mano derecha sostiene un farol que contiene una estrella brillante de seis puntas (el Sello de Salomón), que representa la luz guía de la sabiduría divina y la consciencia humana. En su mano izquierda, se apoya en un bastón dorado, que simboliza su conocimiento acumulado y su autoridad para apoyarlo en su solitario camino. Mira hacia abajo, quizás para guiar a los que están subiendo la montaña detrás de él, o simplemente para iluminar el siguiente pequeño paso en su propio sendero."
    },
    jungianAnalysis: {
      en: "The Hermit is the archetype of the Wise Old Man, but unlike the Hierophant, who represents collective wisdom, the Hermit represents highly individualized, internal wisdom. He is the psychological process of introversion—turning the libido (psychic energy) inward. Jung emphasized that the first half of life is about adapting to the external world, while the second half (the individuation process proper) requires looking inward. The Hermit is the ego actively seeking dialogue with the Self in the dark, unconscious depths of the psyche.",
      es: "El Ermitaño es el arquetipo del Viejo Sabio, pero a diferencia del Sumo Sacerdote, que representa la sabiduría colectiva, el Ermitaño representa una sabiduría altamente individualizada e interna. Es el proceso psicológico de la introversión: volver la libido (energía psíquica) hacia adentro. Jung enfatizó que la primera mitad de la vida se trata de adaptarse al mundo externo, mientras que la segunda mitad (el proceso de individuación propiamente dicho) requiere mirar hacia adentro. El Ermitaño es el ego buscando activamente el diálogo con el Ser en las oscuras e inconscientes profundidades de la psique."
    },
    herosJourney: {
      en: "In the monomyth, this represents the hero entering the 'Belly of the Whale' or undergoing a period of profound isolation before the final ordeal. The hero is cut off from all allies and external support systems. In this dark, solitary place, the hero must confront their deepest self and distill all their previous experiences into pure wisdom. The lantern is the inner light that will prevent the hero from getting lost as they prepare for the imminent ego-death that lies ahead.",
      es: "En el monomito, esto representa al héroe entrando en el 'Vientre de la Ballena' o atravesando un período de profundo aislamiento antes de la prueba final. El héroe está aislado de todos sus aliados y sistemas de apoyo externo. En este lugar oscuro y solitario, el héroe debe enfrentarse a su ser más profundo y destilar todas sus experiencias anteriores en pura sabiduría. El farol es la luz interior que evitará que el héroe se pierda mientras se prepara para la inminente muerte del ego que se avecina."
    }
  },
  {
    id: 10,
    numberRoman: "X",
    name: { en: "Wheel of Fortune", es: "La Rueda de la Fortuna" },
    image: "./tarot/10_wheel_of_fortune.png",
    heroJourneyStage: {
      en: "Cycles of Fate",
      es: "Ciclos del Destino"
    },
    summary: {
      en: "The Wheel of Fortune signifies the ever-turning cycles of life, karma, and destiny. It is a reminder that nothing is permanent; what goes up must eventually come down, and what is down will rise again. This card often heralds a sudden shift in circumstances, a stroke of luck, or a destined turning point that feels entirely out of your control. Rather than fighting the inevitable changes, the Wheel asks you to adapt. The key to navigating this energy is not to cling to the rim of the wheel, where the motion is dizzying and violent, but to move toward the center—the axis of your own unshakeable psyche.",
      es: "La Rueda de la Fortuna significa los ciclos siempre giratorios de la vida, el karma y el destino. Es un recordatorio de que nada es permanente; lo que sube eventualmente debe bajar, y lo que está abajo volverá a subir. Esta carta a menudo anuncia un cambio repentino en las circunstancias, un golpe de suerte o un punto de inflexión destinado que se siente completamente fuera de tu control. En lugar de luchar contra los cambios inevitables, la Rueda te pide que te adaptes. La clave para navegar esta energía no es aferrarse al borde de la rueda, donde el movimiento es mareante y violento, sino moverse hacia el centro: el eje de tu propia psique inquebrantable."
    },
    symbolism: {
      en: "A massive wheel turns in the sky. Descending on the left is Typhon, the Egyptian god of chaos and destruction. Ascending on the right is Hermanubis, a blend of Hermes (wisdom) and Anubis (guide of souls), representing intelligence and aspiration. Sitting triumphantly at the top is the Sphinx, representing the ultimate riddle of existence and equilibrium. In the four corners of the card are the four living creatures of Ezekiel's vision (the Angel, Eagle, Bull, and Lion), corresponding to the four fixed signs of the zodiac, reading the Torah. They represent the fixed, cosmic laws that govern the chaotic turning of the wheel.",
      es: "Una enorme rueda gira en el cielo. Descendiendo a la izquierda está Tifón, el dios egipcio del caos y la destrucción. Ascendiendo a la derecha está Hermanubis, una mezcla de Hermes (sabiduría) y Anubis (guía de almas), que representa la inteligencia y la aspiración. Sentada triunfante en la cima está la Esfinge, que representa el enigma supremo de la existencia y el equilibrio. En las cuatro esquinas de la carta están las cuatro criaturas vivientes de la visión de Ezequiel (el Ángel, el Águila, el Toro y el León), que corresponden a los cuatro signos fijos del zodíaco, leyendo la Torá. Representan las leyes cósmicas fijas que gobiernan el giro caótico de la rueda."
    },
    jungianAnalysis: {
      en: "The Wheel embodies the Jungian concept of Synchronicity—meaningful coincidences that reveal the deep underlying patterns connecting the internal psyche with the external world. It also represents the cyclical nature of the libido (psychic energy), which naturally flows outward (extraversion) and inward (introversion). When the Wheel appears, the ego is forced to recognize that it is not the master of the universe. True psychological stability is achieved by finding the 'Self' at the center of the wheel, remaining an observing consciousness that is undisturbed by the inevitable fluctuations of fortune and ego-states.",
      es: "La Rueda encarna el concepto junguiano de Sincronicidad: coincidencias significativas que revelan los profundos patrones subyacentes que conectan la psique interna con el mundo externo. También representa la naturaleza cíclica de la libido (energía psíquica), que naturalmente fluye hacia afuera (extraversión) y hacia adentro (introversión). Cuando aparece la Rueda, el ego se ve obligado a reconocer que no es el amo del universo. La verdadera estabilidad psicológica se logra encontrando el 'Ser' en el centro de la rueda, permaneciendo como una consciencia observadora que no se inmuta por las inevitables fluctuaciones de la fortuna y los estados del ego."
    },
    herosJourney: {
      en: "In the Hero's Journey, the Wheel marks a major turning point or an intervention by the 'Fates.' It is a moment where the hero is propelled forward not by their own actions, but by the grand machinery of the plot. The hero realizes they are caught up in a story much larger than themselves. To survive this spin of the wheel, the hero must practice radical acceptance, trusting the process of the journey and knowing that even the darkest downturns are necessary to build the momentum required for the final ascension.",
      es: "En el Viaje del Héroe, la Rueda marca un importante punto de inflexión o una intervención de los 'Destinos'. Es un momento donde el héroe es impulsado hacia adelante no por sus propias acciones, sino por la gran maquinaria de la trama. El héroe se da cuenta de que está atrapado en una historia mucho más grande que él mismo. Para sobrevivir a este giro de la rueda, el héroe debe practicar la aceptación radical, confiando en el proceso del viaje y sabiendo que incluso las caídas más oscuras son necesarias para acumular el impulso requerido para la ascensión final."
    }
  },
  {
    id: 11,
    numberRoman: "XI",
    name: { en: "Justice", es: "La Justicia" },
    image: "./tarot/11_justice.png",
    heroJourneyStage: {
      en: "Karmic Accountability",
      es: "Responsabilidad Kármica"
    },
    summary: {
      en: "Justice represents the universal law of cause and effect, absolute truth, and psychological equilibrium. It demands that you take total responsibility for your current circumstances, acknowledging that your present reality is the sum of your past choices. This card cuts through self-deception and victimhood, insisting on brutal honesty with oneself. It is not necessarily about legal justice, but about karmic accounting. If you have acted with integrity, Justice promises a fair outcome. If you have been living in denial, the sword of Justice will swiftly correct the imbalance.",
      es: "La Justicia representa la ley universal de causa y efecto, la verdad absoluta y el equilibrio psicológico. Exige que asumas la responsabilidad total de tus circunstancias actuales, reconociendo que tu realidad presente es la suma de tus elecciones pasadas. Esta carta corta el autoengaño y el victimismo, insistiendo en una honestidad brutal con uno mismo. No se trata necesariamente de justicia legal, sino de contabilidad kármica. Si has actuado con integridad, la Justicia promete un resultado justo. Si has estado viviendo en negación, la espada de la Justicia corregirá rápidamente el desequilibrio."
    },
    symbolism: {
      en: "A crowned figure sits securely between two pillars, echoing the High Priestess, but the veil behind her is purple (royalty/wisdom) and drawn slightly back, revealing that the mysteries are no longer hidden, but brought into the harsh light of rationality. In her right hand, she holds a double-edged sword pointing straight up—the sword of logic and truth that cuts both ways, severing illusion. In her left hand, she holds the golden scales of balance, representing the weighing of karma, actions, and consequences. She wears a square clasp on her chest, a symbol of geometric order and earthly law.",
      es: "Una figura coronada se sienta con seguridad entre dos pilares, haciéndose eco de la Sacerdotisa, pero el velo detrás de ella es púrpura (realeza/sabiduría) y está ligeramente retirado, revelando que los misterios ya no están ocultos, sino que han sido llevados a la dura luz de la racionalidad. En su mano derecha, sostiene una espada de doble filo que apunta hacia arriba: la espada de la lógica y la verdad que corta en ambos sentidos, cortando la ilusión. En su mano izquierda, sostiene las balanzas doradas del equilibrio, que representan el pesaje del karma, las acciones y las consecuencias. Lleva un broche cuadrado en el pecho, símbolo del orden geométrico y la ley terrenal."
    },
    jungianAnalysis: {
      en: "Psychologically, Justice is the principle of extreme self-accountability and the balancing of the psyche. It requires the ego to face reality without the distortions of defense mechanisms or shadow projections. When we blame the world for our problems, we are psychologically imbalanced. Justice forces the individual to 'own' their shadow. The scales represent the need to balance thinking and feeling, intuition and sensation. It is the moment in individuation where the individual stops looking for a savior and accepts that they are the sole architect of their psychological state.",
      es: "Psicológicamente, la Justicia es el principio de la extrema responsabilidad personal y el equilibrio de la psique. Requiere que el ego enfrente la realidad sin las distorsiones de los mecanismos de defensa o las proyecciones de la sombra. Cuando culpamos al mundo por nuestros problemas, estamos psicológicamente desequilibrados. La Justicia obliga al individuo a 'hacerse cargo' de su sombra. Las balanzas representan la necesidad de equilibrar el pensamiento y el sentimiento, la intuición y la sensación. Es el momento en la individuación donde el individuo deja de buscar un salvador y acepta que es el único arquitecto de su estado psicológico."
    },
    herosJourney: {
      en: "In the Hero's Journey, Justice represents a brutal assessment phase before the ultimate descent into the underworld (Death). The hero's motives, actions, and integrity are placed on the scales. It is a moment of Karmic Accountability. The hero must reflect on the journey thus far, accept the consequences of their mistakes, and ensure their mind is perfectly balanced. One cannot cross the threshold of ego-death if they are still carrying the baggage of self-deception. Justice demands that the hero travels light, carrying only the absolute truth.",
      es: "En el Viaje del Héroe, la Justicia representa una fase de evaluación brutal antes del descenso definitivo al inframundo (La Muerte). Los motivos, acciones y la integridad del héroe se ponen en la balanza. Es un momento de Responsabilidad Kármica. El héroe debe reflexionar sobre el viaje hasta ahora, aceptar las consecuencias de sus errores y asegurarse de que su mente esté perfectamente equilibrada. Uno no puede cruzar el umbral de la muerte del ego si todavía lleva el equipaje del autoengaño. La Justicia exige que el héroe viaje ligero, llevando solo la verdad absoluta."
    }
  },
  {
    id: 12,
    numberRoman: "XII",
    name: { en: "The Hanged Man", es: "El Colgado" },
    image: "./tarot/12_the_hanged_man.png",
    heroJourneyStage: {
      en: "Surrender & New Perspective",
      es: "Rendición y Nueva Perspectiva"
    },
    summary: {
      en: "The Hanged Man represents a period of voluntary suspension, sacrifice, and surrender. When you pull this card, it indicates that fighting against your current circumstances will only tighten the knot. The only way forward is to stop struggling, let go of your ego's need for control, and completely surrender to the present moment. By hanging upside down, you are forced to view the world from a radically different perspective. This period of 'doing nothing' is actually a highly active psychological state of profound inner illumination and letting go of obsolete attachments.",
      es: "El Colgado representa un período de suspensión voluntaria, sacrificio y rendición. Cuando sacas esta carta, indica que luchar contra tus circunstancias actuales solo apretará más el nudo. La única forma de avanzar es dejar de luchar, soltar la necesidad de control de tu ego y rendirte por completo al momento presente. Al colgar boca abajo, te ves obligado a ver el mundo desde una perspectiva radicalmente diferente. Este período de 'no hacer nada' es en realidad un estado psicológico altamente activo de profunda iluminación interior y de dejar ir apegos obsoletos."
    },
    symbolism: {
      en: "A young man hangs upside down by his right foot from a living T-shaped tree (a Tau cross). His left leg crosses behind his right, forming a figure four, and his hands are tied behind his back, forming a downward-pointing triangle. Despite being bound and hanging, his face is completely serene, and a glowing halo surrounds his head, indicating spiritual enlightenment rather than physical torture. The living wood of the tree suggests that this suspension is a natural, necessary part of life's growth cycle. He has willingly sacrificed his physical freedom to gain ultimate spiritual insight.",
      es: "Un joven cuelga boca abajo por su pie derecho de un árbol vivo en forma de T (una cruz Tau). Su pierna izquierda se cruza detrás de la derecha, formando un cuatro, y sus manos están atadas a la espalda, formando un triángulo que apunta hacia abajo. A pesar de estar atado y colgado, su rostro está completamente sereno y un halo brillante rodea su cabeza, lo que indica iluminación espiritual en lugar de tortura física. La madera viva del árbol sugiere que esta suspensión es una parte natural y necesaria del ciclo de crecimiento de la vida. Ha sacrificado voluntariamente su libertad física para obtener la máxima visión espiritual."
    },
    jungianAnalysis: {
      en: "The Hanged Man marks a crucial crisis in individuation: the defeat of the Ego. Up until this point, the ego believed it was the master of the psyche. Now, it must realize its subordination to the greater Self. The ego must voluntarily 'sacrifice' its worldly ambitions, its rigid logic, and its desperate need for control. This psychological surrender allows the contents of the unconscious to flood in, bringing illumination (the halo). It is a time of extreme vulnerability, but it is an absolutely necessary prerequisite for the profound transformation of the next card, Death.",
      es: "El Colgado marca una crisis crucial en la individuación: la derrota del Ego. Hasta este punto, el ego creía que era el amo de la psique. Ahora, debe darse cuenta de su subordinación al Ser superior. El ego debe 'sacrificar' voluntariamente sus ambiciones mundanas, su lógica rígida y su desesperada necesidad de control. Esta rendición psicológica permite que los contenidos del inconsciente inunden la mente, trayendo iluminación (el halo). Es un momento de extrema vulnerabilidad, pero es un requisito previo absolutamente necesario para la profunda transformación de la siguiente carta, la Muerte."
    },
    herosJourney: {
      en: "In the Hero's Journey, this is the approach to the 'Inmost Cave' where the Ordeal begins. The hero realizes that all the weapons, skills, and ego-strength they have gathered so far are useless for the trials ahead. The hero must surrender their old worldview entirely. This is the moment Odin hangs himself from Yggdrasil for nine days to discover the runes. It is the painful realization that you must give up something precious (your old identity) to gain the ultimate wisdom required to complete the quest.",
      es: "En el Viaje del Héroe, este es el acercamiento a la 'Cueva Más Profunda' donde comienza la Prueba. El héroe se da cuenta de que todas las armas, habilidades y fuerza del ego que ha reunido hasta ahora son inútiles para las pruebas que se avecinan. El héroe debe rendir su vieja visión del mundo por completo. Este es el momento en que Odín se cuelga del Yggdrasil durante nueve días para descubrir las runas. Es la dolorosa comprensión de que debes renunciar a algo precioso (tu vieja identidad) para obtener la sabiduría suprema requerida para completar la búsqueda."
    }
  },
  {
    id: 13,
    numberRoman: "XIII",
    name: { en: "Death", es: "La Muerte" },
    image: "./tarot/13_death.png",
    heroJourneyStage: {
      en: "Ego Death & Transformation",
      es: "Muerte del Ego y Transformación"
    },
    summary: {
      en: "Despite its fearsome reputation, the Death card rarely signifies physical death. Instead, it is the card of profound, irrevocable psychological transformation. It represents the absolute ending of a major phase of your life, the severing of old ties, and the necessary destruction of obsolete structures that are holding you back. Just as a forest fire clears the dead wood to allow new seeds to germinate, Death clears away the stagnant aspects of your psyche to make room for a new version of yourself. You cannot move forward until you let the past die.",
      es: "A pesar de su temible reputación, la carta de la Muerte rara vez significa muerte física. En cambio, es la carta de una transformación psicológica profunda e irrevocable. Representa el final absoluto de una fase importante de tu vida, la ruptura de viejos lazos y la destrucción necesaria de estructuras obsoletas que te están frenando. Así como un incendio forestal limpia la madera muerta para permitir que germinen nuevas semillas, la Muerte elimina los aspectos estancados de tu psique para dar cabida a una nueva versión de ti mismo. No puedes avanzar hasta que dejes morir el pasado."
    },
    symbolism: {
      en: "A skeleton in black armor rides a pale horse, indiscriminately trampling over people of all classes—a king, a bishop, a maiden, and a child. This signifies that the forces of change and transformation are universal; no amount of earthly power, piety, or innocence can stop them. The skeleton carries a black flag emblazoned with a mystical white rose, symbolizing purification and the promise of rebirth. In the background, between two pillars, a sun is either setting or rising—a reminder that every ending is simultaneously a new beginning. The old world is completely devastated, but the soil is being prepared for new life.",
      es: "Un esqueleto con armadura negra monta un caballo pálido, pisoteando indiscriminadamente a personas de todas las clases: un rey, un obispo, una doncella y un niño. Esto significa que las fuerzas del cambio y la transformación son universales; ninguna cantidad de poder terrenal, piedad o inocencia puede detenerlas. El esqueleto lleva una bandera negra adornada con una mística rosa blanca, que simboliza la purificación y la promesa del renacimiento. Al fondo, entre dos pilares, un sol se pone o se levanta: un recordatorio de que cada final es simultáneamente un nuevo comienzo. El viejo mundo está completamente devastado, pero la tierra se está preparando para una nueva vida."
    },
    jungianAnalysis: {
      en: "Death represents the psychological phenomenon of 'Ego Death.' Following the surrender in The Hanged Man, the ego's old identity is now completely dissolved by the overwhelming forces of the unconscious. It is a terrifying experience, often accompanied by grief, depression, or a sense of total loss, because the psyche believes it is actually dying. However, Jung saw this 'nigredo' (blackening) phase as the most vital part of the alchemical individuation process. The false persona must rot away completely before the true Self can emerge from the ashes.",
      es: "La Muerte representa el fenómeno psicológico de la 'Muerte del Ego'. Siguiendo a la rendición en El Colgado, la vieja identidad del ego ahora es completamente disuelta por las fuerzas abrumadoras del inconsciente. Es una experiencia aterradora, a menudo acompañada de dolor, depresión o una sensación de pérdida total, porque la psique cree que realmente está muriendo. Sin embargo, Jung vio esta fase de 'nigredo' (ennegrecimiento) como la parte más vital del proceso alquímico de individuación. La falsa persona debe pudrirse por completo antes de que el verdadero Ser pueda emerger de las cenizas."
    },
    herosJourney: {
      en: "This is the 'Supreme Ordeal' in the belly of the beast. The hero faces their greatest fear and must figuratively (or sometimes literally) die. It is the darkest moment of the narrative, where all hope seems lost and the hero's previous identity is shattered. By surviving this profound death and letting go of who they used to be, the hero gains a power that the villain (or the shadow) cannot comprehend. They cross the final threshold of transformation and are reborn, ready to claim the ultimate reward.",
      es: "Esta es la 'Prueba Suprema' en el vientre de la bestia. El héroe se enfrenta a su mayor miedo y debe morir figurativamente (o a veces literalmente). Es el momento más oscuro de la narrativa, donde toda esperanza parece perdida y la identidad anterior del héroe se hace añicos. Al sobrevivir a esta profunda muerte y dejar ir quién solían ser, el héroe gana un poder que el villano (o la sombra) no puede comprender. Cruzan el umbral final de la transformación y renacen, listos para reclamar la recompensa suprema."
    }
  },
  {
    id: 14,
    numberRoman: "XIV",
    name: { en: "Temperance", es: "La Templanza" },
    image: "./tarot/14_temperance.png",
    heroJourneyStage: {
      en: "Psychological Alchemy",
      es: "Alquimia Psicológica"
    },
    summary: {
      en: "Temperance brings a period of profound healing, moderation, and perfect internal balance following the trauma of the Death card. It represents the psychological alchemy of blending opposing forces within yourself to create something entirely new and harmonious. This card advises against extremes in behavior or thought. Instead, it urges you to find the 'middle path,' integrating the lessons you've learned through hardship into a stable, sustainable way of living. It is a card of recovery, patience, and the beautiful, quiet synthesis of your conscious and unconscious minds.",
      es: "La Templanza trae un período de profunda sanación, moderación y un equilibrio interno perfecto después del trauma de la carta de la Muerte. Representa la alquimia psicológica de mezclar fuerzas opuestas dentro de ti para crear algo completamente nuevo y armonioso. Esta carta desaconseja los extremos en el comportamiento o el pensamiento. En cambio, te insta a encontrar el 'camino del medio', integrando las lecciones que has aprendido a través de las dificultades en una forma de vida estable y sostenible. Es una carta de recuperación, paciencia y la hermosa y silenciosa síntesis de tus mentes consciente e inconsciente."
    },
    symbolism: {
      en: "A majestic angel (often associated with Archangel Michael or Gabriel) stands with one foot on solid ground (the conscious mind and material reality) and the other dipped into a pool of water (the unconscious mind and emotion). The angel pours liquid seamlessly between two golden and silver cups, blending fire and water, spirit and matter. This impossible act of alchemy shows mastery over the elements of life. On the angel's forehead is a solar symbol, and on their chest, a triangle within a square—spirit contained within the material world. A long path in the background leads toward a glowing crown over the mountains, indicating the ongoing journey toward higher consciousness.",
      es: "Un ángel majestuoso (a menudo asociado con el Arcángel Miguel o Gabriel) se para con un pie en tierra firme (la mente consciente y la realidad material) y el otro sumergido en un estanque de agua (la mente inconsciente y la emoción). El ángel vierte líquido sin derramar entre dos copas de oro y plata, mezclando fuego y agua, espíritu y materia. Este acto imposible de alquimia muestra el dominio sobre los elementos de la vida. En la frente del ángel hay un símbolo solar, y en su pecho, un triángulo dentro de un cuadrado: el espíritu contenido dentro del mundo material. Un largo camino al fondo conduce hacia una corona brillante sobre las montañas, indicando el viaje continuo hacia una consciencia superior."
    },
    jungianAnalysis: {
      en: "Temperance represents the alchemical 'Coniunctio' (the sacred marriage or union of opposites). After the ego has been broken down (Death), the conflicting elements of the psyche—the Anima/Animus, the Light and the Shadow, the conscious and unconscious—are carefully measured and blended together. This creates a state of psychological homeostasis. The individual is no longer torn apart by internal extremes (e.g., oscillating between intense rage and deep depression), but has forged a unified, stable personality capable of containing paradoxes without tension.",
      es: "La Templanza representa la 'Coniunctio' alquímica (el matrimonio sagrado o la unión de los opuestos). Después de que el ego se ha descompuesto (La Muerte), los elementos conflictivos de la psique —el Ánima/Ánimus, la Luz y la Sombra, el consciente y el inconsciente— son cuidadosamente medidos y mezclados. Esto crea un estado de homeostasis psicológica. El individuo ya no está desgarrado por extremos internos (por ejemplo, oscilando entre una ira intensa y una profunda depresión), sino que ha forjado una personalidad unificada y estable capaz de contener paradojas sin tensión."
    },
    herosJourney: {
      en: "This corresponds to 'The Reward' (Seizing the Sword). After surviving the supreme ordeal, the hero takes a moment to heal, reflect, and integrate the immense power they have just won. The hero is fundamentally changed, having blended their mortal nature with the divine or supernatural forces they encountered in the underworld. It is a moment of deep peace and stabilization before they must begin the treacherous journey back to the ordinary world.",
      es: "Esto corresponde a 'La Recompensa' (Tomar la Espada). Después de sobrevivir a la prueba suprema, el héroe se toma un momento para sanar, reflexionar e integrar el inmenso poder que acaba de ganar. El héroe cambia fundamentalmente, habiendo mezclado su naturaleza mortal con las fuerzas divinas o sobrenaturales que encontró en el inframundo. Es un momento de profunda paz y estabilización antes de que deba comenzar el traicionero viaje de regreso al mundo ordinario."
    }
  },
  {
    id: 15,
    numberRoman: "XV",
    name: { en: "The Devil", es: "El Diablo" },
    image: "./tarot/15_the_devil.png",
    heroJourneyStage: {
      en: "Confronting the Shadow",
      es: "Confrontación con la Sombra"
    },
    summary: {
      en: "The Devil represents a profound state of perceptual illusion, where the ego believes it is hopelessly trapped in a toxic situation, addiction, or destructive pattern. It is the realization that 'all things are wrong in this paradise.' It highlights an acute awareness of being enslaved to materialism, base instincts, or unhealthy relationships. However, the core message of this card is that this bondage is a psychological construct, not a physical reality. The chains that hold you are loose; the prison is built entirely of your own fear, ignorance, and refusal to see the truth. You have the power to walk away at any moment.",
      es: "El Diablo representa un profundo estado de ilusión perceptiva, donde el ego cree que está irremediablemente atrapado en una situación tóxica, una adicción o un patrón destructivo. Es la comprensión de que 'todas las cosas están mal en este paraíso'. Destaca una aguda consciencia de estar esclavizado al materialismo, a los instintos básicos o a relaciones poco saludables. Sin embargo, el mensaje central de esta carta es que esta atadura es una construcción psicológica, no una realidad física. Las cadenas que te sostienen están sueltas; la prisión está construida enteramente de tu propio miedo, ignorancia y negativa a ver la verdad. Tienes el poder de marcharte en cualquier momento."
    },
    symbolism: {
      en: "This image is a dark, corrupted mirror of Card VI (The Lovers). We see Adam and Eve chained by the ankles to a flat, two-dimensional cubic altar, emphasizing a reduction of spiritual depth to mere superficial materialism. Hovering above them is a classic Devil, raised in the air, bearing an inverted pentagram on his forehead and displaying it on his raised palm—symbols of the descent of spirit into matter. The key perceptual shift from The Lovers is stark: Adam looks at Eve, but Eve does not look up at the divine (the Devil); instead, she stares blankly ahead. They are no longer holding hands, disconnected from each other and the divine. Yet, their chains are loose enough to be slipped off easily, proving their imprisonment is a willing illusion.",
      es: "Esta imagen es un espejo oscuro y corrupto de la Carta VI (Los Enamorados). Vemos a Adán y Eva encadenados por los tobillos a un altar cúbico plano y bidimensional, enfatizando la reducción de la profundidad espiritual al mero materialismo superficial. Flotando sobre ellos hay un Diablo clásico, elevado en el aire, que lleva un pentagrama invertido en la frente y lo muestra en su palma levantada: símbolos del descenso del espíritu a la materia. El cambio perceptivo clave con respecto a Los Enamorados es marcado: Adán mira a Eva, pero Eva no mira hacia la divinidad (el Diablo); en cambio, mira inexpresivamente hacia el frente. Ya no están tomados de la mano, desconectados el uno del otro y de lo divino. Sin embargo, sus cadenas están lo suficientemente sueltas como para quitárselas fácilmente, demostrando que su encarcelamiento es una ilusión voluntaria."
    },
    jungianAnalysis: {
      en: "The Devil is the absolute, terrifying confrontation with the darkest core of the Shadow. It is the recognition of one's own capacity for cruelty, self-deception, and the addictive compulsion to repeat destructive cycles. The 'two-dimensional' reality they are chained to represents the ego's refusal to acknowledge psychological depth, opting instead for shallow material gratification. The tragedy is that the Anima and Animus (Eve and Adam) are completely disconnected from the Self. Individuation at this stage requires the ego to recognize its own complicity in its suffering and consciously choose to slip off the loose chains of projection and denial.",
      es: "El Diablo es la confrontación absoluta y aterradora con el núcleo más oscuro de la Sombra. Es el reconocimiento de la propia capacidad para la crueldad, el autoengaño y la compulsión adictiva a repetir ciclos destructivos. La realidad 'bidimensional' a la que están encadenados representa la negativa del ego a reconocer la profundidad psicológica, optando en su lugar por una gratificación material superficial. La tragedia es que el Ánima y el Ánimus (Eva y Adán) están completamente desconectados del Ser. La individuación en esta etapa requiere que el ego reconozca su propia complicidad en su sufrimiento y elija conscientemente quitarse las cadenas sueltas de la proyección y la negación."
    },
    herosJourney: {
      en: "In Campbell's journey, this is the ultimate 'Temptation' or the hero getting lost in the darkest corner of the underworld. The hero is seduced by a false sense of reality or paralyzed by despair, forgetting the true nature of their quest. It is the realization that the ultimate enemy is not a dragon outside, but the hero's own internal demons and attachments. To escape this innermost cave, the hero must realize that they have possessed the key to their own freedom all along.",
      es: "En el viaje de Campbell, esta es la 'Tentación' suprema o el héroe perdiéndose en el rincón más oscuro del inframundo. El héroe es seducido por un falso sentido de la realidad o paralizado por la desesperación, olvidando la verdadera naturaleza de su búsqueda. Es la comprensión de que el enemigo supremo no es un dragón exterior, sino los propios demonios y apegos internos del héroe. Para escapar de esta cueva más profunda, el héroe debe darse cuenta de que siempre ha poseído la llave de su propia libertad."
    }
  },
  {
    id: 16,
    numberRoman: "XVI",
    name: { en: "The Tower", es: "La Torre" },
    image: "./tarot/16_the_tower.png",
    heroJourneyStage: {
      en: "Catarsis & Deconstruction",
      es: "Catarsis y Deconstrucción"
    },
    summary: {
      en: "The Tower represents a sudden, often violent collapse of structures, beliefs, or situations that were built on false foundations. While it can be a frightening card, its core message is liberation. The lightning bolt is a flash of undeniable truth that shatters illusions and tears down the walls you built to protect your ego. This destruction is necessary; the universe is forcefully removing what is no longer serving you so that you can rebuild on solid ground. It is a painful but ultimately freeing psychological breakthrough.",
      es: "La Torre representa un colapso repentino, a menudo violento, de estructuras, creencias o situaciones que se construyeron sobre cimientos falsos. Si bien puede ser una carta aterradora, su mensaje central es la liberación. El relámpago es un destello de verdad innegable que hace añicos las ilusiones y derriba los muros que construiste para proteger tu ego. Esta destrucción es necesaria; el universo está eliminando por la fuerza lo que ya no te sirve para que puedas reconstruir sobre terreno sólido. Es un avance psicológico doloroso pero, en última instancia, liberador."
    },
    symbolism: {
      en: "A tall tower, built on a jagged rock, is struck by a bolt of lightning. The golden crown that sat at its peak is knocked off, symbolizing the violent dethroning of arrogant ego and false authority. Two figures, one wearing a crown and one in simple clothes, fall headfirst into the darkness below, showing that this cataclysm spares no one, regardless of status. Flames burst from the windows. The tower was built as a fortress to keep the chaotic world out, but it became a prison. The lightning is divine intervention—a sudden flash of enlightenment that destroys the prison to free the spirit.",
      es: "Una alta torre, construida sobre una roca escarpada, es alcanzada por un rayo. La corona dorada que se encontraba en su cima es derribada, simbolizando el violento destronamiento del ego arrogante y la falsa autoridad. Dos figuras, una con corona y otra con ropa sencilla, caen de cabeza hacia la oscuridad de abajo, demostrando que este cataclismo no perdona a nadie, independientemente de su estatus. Las llamas estallan por las ventanas. La torre fue construida como una fortaleza para mantener alejado al mundo caótico, pero se convirtió en una prisión. El relámpago es la intervención divina: un destello repentino de iluminación que destruye la prisión para liberar el espíritu."
    },
    jungianAnalysis: {
      en: "The Tower represents the sudden collapse of a rigid Persona or inflated Ego. When the ego becomes too detached from the reality of the unconscious (building its tower too high into the sky), the Self intervenes. The lightning strike is an eruption of repressed unconscious material that the ego can no longer contain. This causes a 'breakdown' that is actually a 'breakthrough.' Jung observed that neurosis is often a rigid structure built to avoid suffering; the Tower is the painful but necessary shattering of that neurosis, forcing the individual back to reality.",
      es: "La Torre representa el colapso repentino de una Persona rígida o un Ego inflado. Cuando el ego se desvincula demasiado de la realidad del inconsciente (construyendo su torre demasiado alto en el cielo), el Ser interviene. El impacto del rayo es una erupción de material inconsciente reprimido que el ego ya no puede contener. Esto causa un 'colapso' que en realidad es un 'avance'. Jung observó que la neurosis es a menudo una estructura rígida construida para evitar el sufrimiento; la Torre es la destrucción dolorosa pero necesaria de esa neurosis, obligando al individuo a volver a la realidad."
    },
    herosJourney: {
      en: "In the Hero's Journey, this is a moment of Disaster or Cataclysm. Just when the hero thought they had everything figured out, a sudden revelation or external force completely destroys their plans. It is the humbling of the hero. The arrogant belief that they could control the outcome is shattered. The hero falls from their high tower and hits rock bottom, which is exactly where they need to be to discover their true, resilient core before the final resurrection.",
      es: "En el Viaje del Héroe, este es un momento de Desastre o Cataclismo. Justo cuando el héroe pensaba que tenía todo resuelto, una revelación repentina o una fuerza externa destruye por completo sus planes. Es la humillación del héroe. La arrogante creencia de que podían controlar el resultado se hace añicos. El héroe cae de su alta torre y toca fondo, que es exactamente donde debe estar para descubrir su verdadero y resistente núcleo antes de la resurrección final."
    }
  },
  {
    id: 17,
    numberRoman: "XVII",
    name: { en: "The Star", es: "La Estrella" },
    image: "./tarot/17_the_star.png",
    heroJourneyStage: {
      en: "Hope & Rejuvenation",
      es: "Esperanza y Rejuvenecimiento"
    },
    summary: {
      en: "Following the devastating collapse of The Tower, The Star brings a period of profound peace, spiritual healing, and renewed hope. Stripped of all pretenses and false structures, you are left completely vulnerable, but in this vulnerability, you find a pure connection to the universe. This card is a beautiful omen of inspiration, tranquility, and faith in the future. It suggests that you have survived the worst and the universe is now pouring healing energy into your life. It is a time to dream again and trust that you are guided by higher forces.",
      es: "Tras el devastador colapso de La Torre, La Estrella trae un período de profunda paz, sanación espiritual y esperanza renovada. Despojado de todas las pretensiones y estructuras falsas, te quedas completamente vulnerable, pero en esta vulnerabilidad, encuentras una conexión pura con el universo. Esta carta es un hermoso presagio de inspiración, tranquilidad y fe en el futuro. Sugiere que has sobrevivido a lo peor y que el universo ahora está vertiendo energía curativa en tu vida. Es hora de volver a soñar y confiar en que estás siendo guiado por fuerzas superiores."
    },
    symbolism: {
      en: "A naked woman kneels by a pool, completely exposed and unashamed, signifying absolute purity and truth after the destruction of the ego's armor. Like Temperance, she has one foot in the water (unconscious) and one on land (conscious). She pours water from two jugs. One pours into the pool, replenishing the source of the unconscious. The other pours onto the land, dividing into five rivulets representing the five senses, nourishing the material world. Above her shines a massive, eight-pointed yellow star surrounded by seven smaller stars, representing cosmic guidance, inspiration, and the chakras. In the background, an ibis (the bird of Thoth, god of wisdom) rests in a tree.",
      es: "Una mujer desnuda se arrodilla junto a un estanque, completamente expuesta y sin vergüenza, lo que significa pureza y verdad absolutas después de la destrucción de la armadura del ego. Al igual que La Templanza, tiene un pie en el agua (inconsciente) y el otro en la tierra (consciente). Vierte agua de dos jarras. Una se vierte en el estanque, reponiendo la fuente del inconsciente. La otra se vierte sobre la tierra, dividiéndose en cinco riachuelos que representan los cinco sentidos, nutriendo el mundo material. Sobre ella brilla una enorme estrella amarilla de ocho puntas rodeada de siete estrellas más pequeñas, que representan la guía cósmica, la inspiración y los chakras. Al fondo, un ibis (el pájaro de Thoth, dios de la sabiduría) descansa en un árbol."
    },
    jungianAnalysis: {
      en: "The Star represents a state of psychological grace and the free flow of libido (psychic energy) between the conscious and unconscious minds. After the Tower destroys the rigid Persona, the individual achieves a state of authentic vulnerability. There are no more walls. In this state, the ego is receptive to the 'Star'—the guiding light of the Self. Inspiration, intuition, and archetypal wisdom flow easily from the collective unconscious into conscious awareness, bringing profound healing to the traumatized psyche.",
      es: "La Estrella representa un estado de gracia psicológica y el libre flujo de la libido (energía psíquica) entre la mente consciente y la inconsciente. Después de que la Torre destruye la rígida Persona, el individuo logra un estado de vulnerabilidad auténtica. Ya no hay muros. En este estado, el ego es receptivo a la 'Estrella': la luz guía del Ser. La inspiración, la intuición y la sabiduría arquetípica fluyen fácilmente desde el inconsciente colectivo hacia la consciencia, brindando una profunda sanación a la psique traumatizada."
    },
    herosJourney: {
      en: "This is 'The Blessing' or 'The Return of Hope'. After the darkest ordeal and the collapse of their world, the hero experiences a moment of profound cosmic grace. They realize that they are not alone and that their suffering had a purpose. The stars align to guide them home. It is a necessary period of rest and rejuvenation, where the hero's faith in themselves and the universe is restored before they face the final, subtle illusions of the journey.",
      es: "Esta es 'La Bendición' o 'El Regreso de la Esperanza'. Después de la prueba más oscura y el colapso de su mundo, el héroe experimenta un momento de profunda gracia cósmica. Se da cuenta de que no está solo y que su sufrimiento tuvo un propósito. Las estrellas se alinean para guiarlo a casa. Es un período necesario de descanso y rejuvenecimiento, donde la fe del héroe en sí mismo y en el universo se restaura antes de enfrentarse a las últimas y sutiles ilusiones del viaje."
    }
  },
  {
    id: 18,
    numberRoman: "XVIII",
    name: { en: "The Moon", es: "La Luna" },
    image: "./tarot/18_the_moon.png",
    heroJourneyStage: {
      en: "The Dark Night of the Soul",
      es: "La Noche Oscura del Alma"
    },
    summary: {
      en: "The Moon pulls you into the deep, mysterious waters of the subconscious. It is a card of intuition, dreams, illusions, and anxieties. In the moonlight, things are not always as they seem; shadows play tricks on the mind, and buried fears can surface. This card suggests a time of uncertainty where logic and reason will fail you. You must navigate this phase by trusting your inner compass and intuition. It is a call to confront the irrational fears and unresolved traumas that lurk just beneath the surface of your conscious mind.",
      es: "La Luna te arrastra hacia las aguas profundas y misteriosas del subconsciente. Es una carta de intuición, sueños, ilusiones y ansiedades. A la luz de la luna, las cosas no siempre son lo que parecen; las sombras le juegan malas pasadas a la mente y los miedos enterrados pueden salir a la superficie. Esta carta sugiere un tiempo de incertidumbre donde la lógica y la razón te fallarán. Debes navegar por esta fase confiando en tu brújula interior e intuición. Es un llamado a confrontar los miedos irracionales y los traumas no resueltos que acechan justo debajo de la superficie de tu mente consciente."
    },
    symbolism: {
      en: "A large moon (containing a crescent within a full circle) shines down on a strange landscape, dropping Yods (sparks of divine spirit) into the darkness. A winding path leads from a deep pool of water, between a tame dog and a wild wolf, towards two distant towers. Emerging from the water is a crayfish. The crayfish represents the most primitive, ancient, and terrifying aspects of the subconscious crawling up into awareness. The dog and wolf represent the dual nature of our animal instincts—the tamed and the wild. The path is the difficult journey of navigating these internal psychic forces in the deceptive, silvery light of illusion.",
      es: "Una gran luna (que contiene una media luna dentro de un círculo completo) brilla sobre un paisaje extraño, dejando caer Yods (chispas del espíritu divino) en la oscuridad. Un camino sinuoso conduce desde un estanque profundo de agua, entre un perro manso y un lobo salvaje, hacia dos torres distantes. Emergiendo del agua hay un cangrejo de río. El cangrejo representa los aspectos más primitivos, antiguos y aterradores del subconsciente trepando hacia la consciencia. El perro y el lobo representan la naturaleza dual de nuestros instintos animales: lo domado y lo salvaje. El camino es el difícil viaje de navegar por estas fuerzas psíquicas internas a la luz engañosa y plateada de la ilusión."
    },
    jungianAnalysis: {
      en: "The Moon represents a deep dive into the darkest layers of the Collective Unconscious. The ego is highly vulnerable here. The dog and wolf are archetypes of instinct, while the crayfish represents the autonomous complexes and primordial fears rising from the deepest 'reptilian' parts of the brain. This is the realm of dreams, active imagination, and sometimes psychosis if the ego is entirely overwhelmed. Navigating The Moon requires recognizing projections and distinguishing between irrational anxiety and genuine intuitive insight.",
      es: "La Luna representa una inmersión profunda en las capas más oscuras del Inconsciente Colectivo. El ego es muy vulnerable aquí. El perro y el lobo son arquetipos del instinto, mientras que el cangrejo de río representa los complejos autónomos y los miedos primordiales que surgen de las partes 'reptilianas' más profundas del cerebro. Este es el reino de los sueños, la imaginación activa y, a veces, la psicosis si el ego está completamente abrumado. Navegar por La Luna requiere reconocer las proyecciones y distinguir entre la ansiedad irracional y la visión intuitiva genuina."
    },
    herosJourney: {
      en: "This is 'The Magic Flight' or the traversal of the final threshold. The hero is on the way back, but the journey is fraught with psychological terrors, shape-shifters, and illusions. It is the 'Dark Night of the Soul' where the hero's sanity and faith are tested one last time. They must pass through a landscape where their own mind turns against them, learning to trust their inner vision rather than the deceptive shadows cast by the moon.",
      es: "Este es el 'Vuelo Mágico' o la travesía del umbral final. El héroe está en camino de regreso, pero el viaje está plagado de terrores psicológicos, cambiaformas e ilusiones. Es la 'Noche Oscura del Alma' donde la cordura y la fe del héroe se ponen a prueba por última vez. Deben atravesar un paisaje donde su propia mente se vuelve contra ellos, aprendiendo a confiar en su visión interior en lugar de las sombras engañosas proyectadas por la luna."
    }
  },
  {
    id: 19,
    numberRoman: "XIX",
    name: { en: "The Sun", es: "El Sol" },
    image: "./tarot/19_the_sun.png",
    heroJourneyStage: {
      en: "Master of Two Worlds",
      es: "Maestro de Dos Mundos"
    },
    summary: {
      en: "The Sun is one of the most positive cards in the deck, radiating pure joy, vitality, and conscious illumination. After the terrifying illusions of the Moon, the Sun rises, bringing absolute clarity. The shadows vanish. It represents success, authentic self-expression, and a state of complete psychological wholeness. When this card appears, it signals that you have integrated the difficult lessons of the past and are now free to step into the light, radiating your true energy outward without fear or hesitation.",
      es: "El Sol es una de las cartas más positivas del mazo, irradiando pura alegría, vitalidad e iluminación consciente. Después de las aterradoras ilusiones de la Luna, sale el Sol, trayendo una claridad absoluta. Las sombras se desvanecen. Representa el éxito, la auténtica autoexpresión y un estado de completa plenitud psicológica. Cuando aparece esta carta, indica que has integrado las difíciles lecciones del pasado y ahora eres libre de dar un paso hacia la luz, irradiando tu verdadera energía hacia afuera sin miedo ni vacilación."
    },
    symbolism: {
      en: "A massive, brilliantly radiant sun shines with absolute clarity, its rays extending everywhere. Beneath it, a naked child rides a white horse, holding a large red banner. The child's nakedness represents absolute innocence, vulnerability, and having nothing left to hide. They have returned to a state of purity, but with the wisdom of the journey. The white horse represents the tamed animal instincts, now carrying the conscious mind willingly. In the background, sunflowers bloom over a brick wall, symbolizing the natural world joyfully responding to the light and breaking through artificial boundaries.",
      es: "Un sol enorme y brillantemente radiante brilla con absoluta claridad, sus rayos extendiéndose por todas partes. Debajo, un niño desnudo monta un caballo blanco, sosteniendo un gran estandarte rojo. La desnudez del niño representa la inocencia absoluta, la vulnerabilidad y no tener nada más que ocultar. Han vuelto a un estado de pureza, pero con la sabiduría del viaje. El caballo blanco representa los instintos animales domados, que ahora llevan voluntariamente a la mente consciente. En el fondo, los girasoles florecen sobre un muro de ladrillos, simbolizando el mundo natural respondiendo alegremente a la luz y rompiendo los límites artificiales."
    },
    jungianAnalysis: {
      en: "The Sun represents the successful culmination of the Individuation process: the realization of the Self. The conscious and unconscious minds are no longer at war; they are fully integrated. The naked child is the 'Divine Child' archetype, representing psychological rebirth, wholeness, and the realization of one's full potential. The ego is no longer inflated (like in the Tower) nor submerged in the unconscious (like in the Moon); it is a transparent vehicle for the radiant energy of the true Self.",
      es: "El Sol representa la culminación exitosa del proceso de Individuación: la realización del Ser. Las mentes consciente e inconsciente ya no están en guerra; están completamente integradas. El niño desnudo es el arquetipo del 'Niño Divino', que representa el renacimiento psicológico, la plenitud y la realización de todo el potencial de uno. El ego ya no está inflado (como en la Torre) ni sumergido en el inconsciente (como en la Luna); es un vehículo transparente para la energía radiante del verdadero Ser."
    },
    herosJourney: {
      en: "The hero has become the 'Master of Two Worlds.' Having survived the underworld and successfully navigated the return journey, the hero emerges into the daylight. They have integrated the spiritual/unconscious wisdom with the material/conscious reality. The hero is reborn, free from fear, radiating the power of the 'Elixir' they have brought back to heal themselves and the world.",
      es: "El héroe se ha convertido en el 'Maestro de Dos Mundos'. Habiendo sobrevivido al inframundo y navegado con éxito el viaje de regreso, el héroe emerge a la luz del día. Han integrado la sabiduría espiritual/inconsciente con la realidad material/consciente. El héroe renace, libre de miedo, irradiando el poder del 'Elixir' que ha traído de vuelta para sanarse a sí mismo y al mundo."
    }
  },
  {
    id: 20,
    numberRoman: "XX",
    name: { en: "Judgement", es: "El Juicio" },
    image: "./tarot/20_judgement.png",
    heroJourneyStage: {
      en: "The Awakening",
      es: "El Despertar"
    },
    summary: {
      en: "Judgement represents a profound spiritual awakening, resurrection, and the answering of a higher calling. It is a moment of final reckoning where you are asked to review your past, forgive yourself and others, and shed any remaining psychological baggage. The trumpet's blast is a wake-up call to step into a new, higher version of yourself. You are being called to rise up from the 'coffins' of your past limitations and embrace a life of deeper meaning and purpose. It signifies absolution and the readiness to move on to the final stage of your journey.",
      es: "El Juicio representa un profundo despertar espiritual, resurrección y la respuesta a un llamado superior. Es un momento de ajuste de cuentas final donde se te pide que revises tu pasado, te perdones a ti mismo y a los demás, y te deshagas de cualquier carga psicológica restante. El sonido de la trompeta es un llamado de atención para dar un paso hacia una versión nueva y superior de ti mismo. Se te llama a levantarte de los 'ataúdes' de tus limitaciones pasadas y abrazar una vida de un significado y propósito más profundos. Significa absolución y la preparación para pasar a la etapa final de tu viaje."
    },
    symbolism: {
      en: "In the sky, the Archangel Gabriel sounds a massive golden trumpet, from which hangs a white banner bearing a red cross (the flag of St. George/resurrection). Below, on a gray, icy sea, naked men, women, and children rise up joyfully from floating, open coffins. Their arms are outstretched, welcoming the call. The nakedness again represents purity and having nothing to hide. Rising from the coffins symbolizes rebirth and the transcendence of death or the past. The snowy mountains in the background indicate that this awakening happens at the very peak of spiritual attainment.",
      es: "En el cielo, el Arcángel Gabriel hace sonar una enorme trompeta dorada, de la que cuelga un estandarte blanco con una cruz roja (la bandera de San Jorge/resurrección). Abajo, en un mar gris y helado, hombres, mujeres y niños desnudos se levantan con alegría de ataúdes flotantes y abiertos. Sus brazos están extendidos, dando la bienvenida al llamado. La desnudez representa de nuevo la pureza y no tener nada que ocultar. Levantarse de los ataúdes simboliza el renacimiento y la trascendencia de la muerte o del pasado. Las montañas nevadas al fondo indican que este despertar ocurre en el pico mismo del logro espiritual."
    },
    jungianAnalysis: {
      en: "Judgement is the penultimate step of individuation: the final, great psychological awakening. The ego hears the undeniable call of the Self (the trumpet) and willingly 'rises from the dead'—shedding its past conditioning, neuroses, and false identities. It is a moment of deep psychological absolution. The individual realizes that their core essence is immortal (in a psychological sense) and cannot be destroyed by the failures of the past. It is the final integration of the unconscious contents before the perfect wholeness of The World.",
      es: "El Juicio es el penúltimo paso de la individuación: el gran y final despertar psicológico. El ego escucha el llamado innegable del Ser (la trompeta) y voluntariamente 'resucita de entre los muertos', despojándose de su condicionamiento pasado, neurosis y falsas identidades. Es un momento de profunda absolución psicológica. El individuo se da cuenta de que su esencia central es inmortal (en un sentido psicológico) y no puede ser destruida por los fracasos del pasado. Es la integración final de los contenidos inconscientes antes de la perfecta plenitud de El Mundo."
    },
    herosJourney: {
      en: "This represents 'The Resurrection' or 'The Atonement'. It is the hero's final test before fully returning to the ordinary world. The hero is cleansed and purified by this ultimate ordeal, shedding the last remnants of their old self. They are absolved of their past mistakes. By answering this final call, the hero proves they have truly mastered the lessons of the journey and are ready to return as a fully realized master, ready to share the elixir with the world.",
      es: "Esto representa 'La Resurrección' o 'La Expiación'. Es la prueba final del héroe antes de regresar completamente al mundo ordinario. El héroe es limpiado y purificado por esta prueba final, despojándose de los últimos restos de su antiguo yo. Son absueltos de sus errores pasados. Al responder a este llamado final, el héroe demuestra que ha dominado verdaderamente las lecciones del viaje y está listo para regresar como un maestro plenamente realizado, listo para compartir el elixir con el mundo."
    }
  },
  {
    id: 21,
    numberRoman: "XXI",
    name: { en: "The World", es: "El Mundo" },
    image: "./tarot/21_the_world.png",
    heroJourneyStage: {
      en: "Individuation Complete",
      es: "Individuación Completa"
    },
    summary: {
      en: "The World is the final card of the Major Arcana, representing completion, wholeness, and absolute fulfillment. It is the successful conclusion of a long and difficult journey. Everything has come full circle, but on a much higher level of consciousness. You have achieved perfect harmony between your inner desires and the outer reality. This card indicates a time of deep satisfaction, success, and the realization of your highest potential. The end of this cycle is not a stopping point, but the joyous beginning of a new one.",
      es: "El Mundo es la carta final de los Arcanos Mayores, que representa la finalización, la plenitud y la realización absoluta. Es la conclusión exitosa de un viaje largo y difícil. Todo ha cerrado el círculo, pero en un nivel de consciencia mucho más alto. Has logrado una armonía perfecta entre tus deseos internos y la realidad exterior. Esta carta indica un momento de profunda satisfacción, éxito y la realización de tu máximo potencial. El final de este ciclo no es un punto de parada, sino el alegre comienzo de uno nuevo."
    },
    symbolism: {
      en: "A beautiful, naked woman dances joyously in the center of an elliptical wreath of laurel leaves (symbolizing victory and eternity). She holds a baton in each hand, signifying absolute mastery over both the conscious and unconscious realms (a step up from the Magician, who held only one). In the four corners of the card are the four living creatures—the Angel, Eagle, Bull, and Lion—representing the four elements, the four seasons, and the four corners of the universe, all brought into perfect, dynamic balance. The wreath forms a zero or an ouroboros (a snake eating its tail), showing that the end is merely a new beginning (The Fool).",
      es: "Una mujer hermosa y desnuda baila alegremente en el centro de una corona elíptica de hojas de laurel (que simboliza la victoria y la eternidad). Sostiene un bastón en cada mano, lo que significa un dominio absoluto sobre los reinos consciente e inconsciente (un paso más allá del Mago, que solo sostenía uno). En las cuatro esquinas de la carta están las cuatro criaturas vivientes: el Ángel, el Águila, el Toro y el León, que representan los cuatro elementos, las cuatro estaciones y los cuatro rincones del universo, todos llevados a un equilibrio perfecto y dinámico. La corona forma un cero o un uróboros (una serpiente mordiéndose la cola), lo que demuestra que el final es simplemente un nuevo comienzo (El Loco)."
    },
    jungianAnalysis: {
      en: "The World is the achievement of Individuation. The Self is fully realized, and the psyche is in a state of dynamic, perfect harmony. The Anima and Animus are completely integrated. The four creatures in the corners represent the four Jungian psychological functions—Thinking, Feeling, Sensation, and Intuition—which have finally been brought into perfect balance. The dancing figure is the fully actualized Ego, happily serving as a conscious channel for the totality of the Self. The psyche is whole, complete, and perfectly aligned with the cosmos.",
      es: "El Mundo es el logro de la Individuación. El Ser está plenamente realizado y la psique se encuentra en un estado de armonía dinámica y perfecta. El Ánima y el Ánimus están completamente integrados. Las cuatro criaturas en las esquinas representan las cuatro funciones psicológicas junguianas: Pensamiento, Sentimiento, Sensación e Intuición, que finalmente se han llevado a un equilibrio perfecto. La figura que baila es el Ego plenamente actualizado, que felizmente sirve como un canal consciente para la totalidad del Ser. La psique está entera, completa y perfectamente alineada con el cosmos."
    },
    herosJourney: {
      en: "This is 'The Return' or 'Freedom to Live'. The hero's journey is officially complete. The hero has successfully brought the 'Elixir' back to the ordinary world, achieving perfect harmony between the inner realm of spirit and the outer realm of matter. The hero is now a true 'Master of Two Worlds,' living without fear of death or the future. They have achieved the ultimate goal and are now free to simply live, dance, and prepare for the next turn of the great cosmic wheel.",
      es: "Este es 'El Regreso' o 'Libertad para Vivir'. El viaje del héroe ha terminado oficialmente. El héroe ha traído con éxito el 'Elixir' de regreso al mundo ordinario, logrando una armonía perfecta entre el reino interior del espíritu y el reino exterior de la materia. El héroe es ahora un verdadero 'Maestro de Dos Mundos', viviendo sin miedo a la muerte o al futuro. Han logrado el objetivo final y ahora son libres de simplemente vivir, bailar y prepararse para el próximo giro de la gran rueda cósmica."
    }
  }
];
