# Plan de Implementación: Generación Artística de Runas 14 a 24
*Fecha de Registro: 2026-08-10*

Este documento establece la guía técnica, arqueológica y mística para generar las 11 ilustraciones rúnicas restantes (**Perthro** a **Othala**, IDs 14 a 24). Sintetiza tres elementos inseparables: **El Glifo y Significado de la Runa (Foco Principal)**, **La Esencia Mística del Dios (bajorrelieve)** y **Los Símbolos Sagrados**. Todo bajo la continuidad estética de las runas 1 a 13 (piedra tallada, chiaroscuro, oro/bronce, sin humanos modernos ni tropos pop).

---

## 🛡️ La Triada Estética: Runa, Dios y Símbolo

Para cada ilustración, la jerarquía visual es estricta:
1. **Foco Principal (LA RUNA):** El glifo rúnico (ej. ᛈ, ᛉ, ᛋ) debe ser el centro absoluto, tallado profundamente en la piedra y brillando o destacando visualmente.
2. **Fondo / Entorno (EL DIOS):** La presencia del dios no es un personaje humano, sino un **rostro místico tallado en bajorrelieve (*bas-relief*)** en la misma piedra, observando desde el fondo (estilo piedra de Gotland o placas de Vendel).
3. **Detalles (EL SÍMBOLO):** Objetos sagrados (Gjallarhorn, manzanas de Idunn, cuervos) entrelazados en el tallado alrededor de la runa.

---

## 📋 Desglose de Tareas bajo el Formato B-R-M (Beneficio, Riesgo, Modelo)

> [!IMPORTANT]
> La ejecución de la generación de imágenes en lotes se realizará una vez restablecida la cuota API del modelo de imagen.

---

### Tarea 1: Verificación y Auditoría de Diffs de Texto (`App.tsx` & `runesData.ts`)
- **Acción:** Confirmar que la etiqueta del UI `"El Camino del Héroe"` esté correctamente integrada y desplegada en producción.
- **Beneficio:** 9/10 - Coherencia total de la interfaz.
- **Riesgo:** 1/10 - Cambio cosmético de bajo riesgo.
- **Modelo Sugerido:** Gemini 3.1 Pro 🧠 - Verificación exacta.

---

### Tarea 2: Generación del Lote 1 de Runas (IDs 14 a 17)
- **Acción:** Generar e integrar las imágenes rúnicas de **Perthro**, **Algiz**, **Sowilo** y **Tiwaz**.

#### Prompts Específicos por Runa:
- **14. Perthro (ᛈ) — El Cubilete del Destino**
  - *Dios y Aspecto:* Frigg (Völva Suprema y Tejedora del Destino).
  - *Símbolos:* El huso de oro (*Friggerock*) y el pozo de Urðarbrunnr.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the rune PERTHRO (ᛈ) deeply carved into a basalt slab and glowing with inner gold light. Carved in the background stone bas-relief is the solemn, veiled visage of Goddess Frigg as Seeress of Fate. Intertwined around the glowing rune are golden spindle threads and water drops from Urðarbrunnr. Hyperrealistic stone texture, dark vignette.`
- **15. Algiz (ᛉ) — El Escudo de Cuernos y Santuario**
  - *Dios y Aspecto:* Heimdall (El Guardián Inviolable de Bifröst).
  - *Símbolos:* El cuerno Gjallarhorn y astas de alce sagradas.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the rune ALGIZ (ᛉ) shaped like branching elk horns, deeply carved into mossy granite. Carved in the background stone bas-relief is the stern, vigilant visage of Heimdall watching over Bifröst. Inlaid in bronze at the base of the rune is the Gjallarhorn. Dark moody lighting, hyperrealistic stone texture.`
- **16. Sowilo (ᛋ) — La Rueda Solar y el Rayo**
  - *Dios y Aspecto:* Sól y Baldr (Victoria Solar e Iluminación).
  - *Símbolos:* Disco solar de Trundholm y la flor *Baldrsbrá*.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the solar rune SOWILO (ᛋ) brilliantly carved and glowing with golden fire. Carved in gold leaf bas-relief behind the rune is the luminous visage of Baldr, merged with the bronze solar spirals of the Trundholm sun chariot. Dramatic chiaroscuro, warm gold radiance against dark basalt, hyperrealistic.`
- **17. Tiwaz (ᛏ) — La Lanza de la Justicia y el Sacrificio**
  - *Dios y Aspecto:* Tyr (El Juez Honorable).
  - *Símbolos:* La lanza sagrada y los eslabones de la cadena *Gleipnir*.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the upward spear rune TIWAZ (ᛏ) deeply inscribed in an iron and stone pillar. Carved in the background bas-relief is the stoic, noble face of Tyr, god of justice. Wrapped around the glowing rune are iron chain links of Gleipnir and sacred sword filigree. Ancient iron oxidation, solemn lighting.`

---

### Tarea 3: Generación del Lote 2 de Runas (IDs 18 a 21)
- **Acción:** Generar e integrar las imágenes rúnicas de **Berkano**, **Ehwaz**, **Mannaz** y **Laguz**.

#### Prompts Específicos por Runa:
- **18. Berkano (ᛒ) — El Abedul de Renacimiento y Sanación**
  - *Dios y Aspecto:* Idunn y Frigg (La Madre Nutricia).
  - *Símbolos:* Manzanas de oro de la juventud (*Epli*) y corteza de abedul.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the rune BERKANO (ᛒ) carved into a tablet of silver-grained birch and dark stone. Carved in gentle bas-relief in the background is the serene maternal visage of Goddess Idunn. Resting around the rune are subtle golden apples and spiraling green birch vines. Soft warm illumination, organic texture.`
- **19. Ehwaz (ᛖ) — El Corcel Sagrado y Sinergia Dual**
  - *Dios y Aspecto:* Freyr y Sleipnir (La Alianza Divina).
  - *Símbolos:* Nudos rúnicos del caballo de 8 patas (estilo Gotland).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the twin-horse rune EHWAZ (ᛖ) deeply carved into dark slate. Carved in the background bas-relief are the noble intertwined faces of the divine partners. Surrounding the rune is Sleipnir's 8-legged horse knotwork inlaid with bronze. Dark cinematic side lighting, hyperrealistic stone texture.`
- **20. Mannaz (ᛗ) — La Humanidad e Integración Social**
  - *Dios y Aspecto:* Heimdall como Ríg (El Padre Primordial).
  - *Símbolos:* Anillo/Corona de Ríg y las fases de Máni (la Luna).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the rune MANNAZ (ᛗ) deeply carved into polished granite. Carved in the background bas-relief is the primordial face of Ríg (Heimdall) unifying the mind. Entwined with the rune are silver lunar phase engravings of Máni and human interlace patterns. Deep shadow contrast, museum quality.`
- **21. Laguz (ᛚ) — Las Aguas del Océano e Intuición**
  - *Dios y Aspecto:* Njörðr y Rán (Los Señores del Océano Inconsciente).
  - *Símbolos:* Mascarón de proa de drakkar y la red sagrada de Rán.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the ocean rune LAGUZ (ᛚ) carved into a wet dark sea-stone. Carved in the background bas-relief is the mysterious face of sea-god Njörðr emerging from the waves. Interlaced with the rune are dragon-ship prows and sea-net patterns of Rán. Water droplets glistening, dark aqua glows, hyperrealistic.`

---

### Tarea 4: Generación del Lote 3 de Runas (IDs 22 a 24)
- **Acción:** Generar e integrar las imágenes rúnicas de **Ingwaz**, **Dagaz** y **Othala**.

#### Prompts Específicos por Runa:
- **22. Ingwaz (ᛝ) — La Semilla y el Recinto Sagrado**
  - *Dios y Aspecto:* Ing-Freyr (Gestación Fértil y Terrenal).
  - *Símbolos:* Jabalí de oro *Gullinbursti* y la semilla diamante.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the diamond-shaped rune INGWAZ (ᛝ) glowing like an incubating golden seed in dark soil. Carved in the background bas-relief inside the diamond temenos is the earthy visage of Ing-Freyr. Etched around the rune are golden boar bristle motifs of Gullinbursti. Rich earthy palette, hyperrealistic.`
- **23. Dagaz (ᛞ) — El Amanecer y el Equilibrio Infinito**
  - *Dios y Aspecto:* Dagr y Baldr (Iluminación Trascendente).
  - *Símbolos:* El caballo solar *Skinfaxi* y el reloj de arena/infinito.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the infinity rune DAGAZ (ᛞ) carved into a split dark-and-light stone. Carved in high-relief in the background is the radiant face of Dagr, riding Skinfaxi's flaming mane from night shadows into brilliant morning light. The glowing rune bridges the duality. High contrast chiaroscuro, hyperrealistic.`
- **24. Othala (ᛟ) — El Hogar Ancestral y la Herencia**
  - *Dios y Aspecto:* Odín (Padre Todo-Vidente, más allá de la dualidad).
  - *Símbolos:* Su único ojo resplandeciente, Huginn y Muninn, y el anillo de juramento.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The absolute central focal point is the ancestral boundary rune OTHALA (ᛟ) deeply carved into a massive boundary stone. Carved in majestic Vendel-style bas-relief behind the rune is the awe-inspiring face of Allfather Odin with his SINGLE GLOWING MYSTICAL EYE. Flanking the glowing rune are ravens Huginn and Muninn and Odin's oath ring. Majestic heritage aesthetic.`

---

### Tarea 5: Despliegue, Build y Commit a GitHub Pages
- **Acción:** Copiar PNGs a `public/runes/`, ejecutar `npm run build`, y `git commit`.
- **Beneficio:** 10/10 - Publicación final.
- **Riesgo:** 2/10 - Proceso CI/CD.
- **Modelo Sugerido:** Gemini 3.1 Pro 🧠.

---

## 🧪 Plan de Verificación
- Cargar `christeck9.github.io/Oracles/#/runes`.
- Tirar una tirada y verificar que las 24 runas muestren sus ilustraciones (con el glifo, dios y símbolos).
