# Plan de Implementación: Generación Artística de Runas 14 a 24
*Fecha de Registro: 2026-08-10*

Este documento establece la guía técnica, arqueológica y mística para generar las 11 ilustraciones rúnicas restantes (**Perthro** a **Othala**, IDs 14 a 24), sintetizando la **presencia mística del Dios asociado (en bajorrelieve nórdico de piedra/metal)** y sus **símbolos sagrados**, basándose en las piedras pictóricas de Gotland y placas metálicas del periodo Vendel en Dinamarca y Suecia.

---

## 🛡️ Síntesis Mística y Arquetípica de los Dioses (Runas 14 a 24)

### 1. El Concepto Artístico de las Runas
Los dioses no se representan como personajes humanos externos o modernos, sino como **la esencia mística del Dios personificada en bajorrelieve en la piedra rúnica** (*bas-relief carving* al estilo de los artefactos de Vendel y Gotland), mostrando su **aspecto espiritual específico**:

- **Perthro (14) — Frigg (Tejedora del Destino):** Rostro velado y místico de Frigg como Völva Suprema cuidando los hilos de las Nornas en Urðarbrunnr.
- **Algiz (15) — Heimdall (Guardián Inviolable):** Rostro de bajorrelieve de Heimdall en su aspecto vigilante y protector cuidando Bifröst, junto al cuerno Gjallarhorn y astas de alce.
- **Sowilo (16) — Sól y Baldr (Victoria Solar):** Rostro radiante de Baldr emergiendo en oro en relieve del disco solar de Trundholm.
- **Tiwaz (17) — Tyr (Juez Honorable y Sacrificio):** Rostro de firmeza inquebrantable de Tyr en bajorrelieve de hierro con el brazo sacrificado y las cadenas de Gleipnir.
- **Berkano (18) — Idunn y Frigg (Madre Nutricia):** Rostro de gracia materna grabado en madera de abedul y granito con las manzanas de oro de la juventud.
- **Ehwaz (19) — Freyr y Sleipnir (Sinergia Dual):** Visajes de la Alianza Divina entrelazados con el corcel de 8 patas Sleipnir.
- **Mannaz (20) — Heimdall como Ríg (Padre de la Humanidad):** Rostro noble de Ríg unificando el intelecto humano y las fases lunares de Máni.
- **Laguz (21) — Njörðr y Rán (Profundidad Oceánica):** Rostro místico del dios del mar surgido de las olas talladas y la red marina.
- **22. Ingwaz — Ing-Freyr (Semilla Fértil y Gestación):** Rostro del dios de la tierra labrado dentro del diamante sagrado con el jabalí Gullinbursti.
- **23. Dagaz — Dagr y Baldr (Iluminación Trascendente):** Rostro del amanecer cruzando el umbral de la noche a la luz radiante de Skinfaxi.
- **24. Othala — Odín (El Padre Todo-Vidente):** Rostro sagrado de Odín con **su único ojo místico** que ve más allá de la dualidad del bien y del mal, de lo alto y lo bajo, flanqueado por Huginn y Muninn en el recinto ancestral.

---

## 📋 Desglose de Tareas bajo el Formato B-R-M (Beneficio, Riesgo, Modelo)

> [!IMPORTANT]
> La ejecución de la generación de imágenes en lotes se realizará una vez restablecida la cuota API del modelo de imagen.

---

### Tarea 1: Verificación y Auditoría de Diffs de Texto (`App.tsx` & `runesData.ts`)
- **Acción:** Confirmar que la etiqueta del UI `"El Camino del Héroe"` esté correctamente integrada y desplegada en producción.
- **Beneficio:** 9/10 - Coherencia total de la interfaz con los nombres solicitados por el usuario.
- **Riesgo:** 1/10 - Cambio cosmético de bajo riesgo.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡ - Tarea rápida de verificación.

---

### Tarea 2: Generación del Lote 1 de Runas (IDs 14 a 17)
- **Acción:** Generar e integrar las imágenes rúnicas de **Perthro**, **Algiz**, **Sowilo** y **Tiwaz** incorporando la cara/aspecto en bajorrelieve del Dios y sus símbolos.
- **Beneficio:** 10/10 - Avance de 4 de las 11 runas faltantes.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG por arte final.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡ (con herramienta de generación de imágenes `generate_image`).

#### Prompts Específicos por Runa:
- **14. Perthro (ᛈ) — Frigg (Tejedora del Destino) y las Nornas**
  - *Dios / Aspecto:* Frigg en su aspecto de Queen of Fate y Völva Suprema.
  - *Símbolo y Visaje:* Bajorrelieve del rostro velado de Frigg en piedra basáltica, el huso de hilo de oro (*Friggerock*) y gotas del pozo Urðarbrunnr.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a weathered basalt stone slab carved with the rune PERTHRO (ᛈ) glowing with gold light. Carved in deep Norse bas-relief above the rune is the solemn, veiled visage of Goddess Frigg as Seeress of Fate, intertwined with golden spindle threads and water drops from Urðarbrunnr. Dark gold hues, hyperrealistic stone texture, dark vignette, museum lighting.`
- **15. Algiz (ᛉ) — Heimdall (Guardián Inviolable y Vigilante)**
  - *Dios / Aspecto:* Heimdall en su aspecto de Guardián Inviolable de Bifröst.
  - *Símbolo y Visaje:* Bajorrelieve del rostro severo y vigilante de Heimdall en granito, con ojos místicos celestiales, astas de alce y el cuerno Gjallarhorn en bronce a la base.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a moss-covered granite stone bearing the rune ALGIZ (ᛉ) shaped like branching elk horns. Carved into the stone bas-relief is the stern, ever-vigilant visage of Heimdall watching over Bifröst. Inlaid in bronze at the base is Gjallarhorn. Dark moody lighting, subtle gold highlights, hyperrealistic stone carved texture.`
- **16. Sowilo (ᛋ) — Baldr y Sól (Victoria Solar e Iluminación)**
  - *Dios / Aspecto:* Baldr el Radiante y la Diosa Sól en su triunfo solar.
  - *Símbolo y Visaje:* Bajorrelieve dorado del rostro luminoso de Baldr integrado en el disco solar de Trundholm.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is an ancient dark stone artifact engraved with the solar rune SOWILO (ᛋ). Carved in glowing gold leaf bas-relief is the luminous visage of Baldr, god of light, merged with the bronze solar disc of Trundholm and Baldrsbrá petals. Dramatic chiaroscuro, warm gold radiance against dark basalt, hyperrealistic texture.`
- **17. Tiwaz (ᛏ) — Tyr (Juez Honorable y Sacrificio Supremo)**
  - *Dios / Aspecto:* Tyr en su aspecto de Dios Manco del Honor y la Ley.
  - *Símbolo y Visaje:* Bajorrelieve del rostro estoico e inquebrantable de Tyr en pilar de hierro y piedra, con el brazo sacrificado y las cadenas de Gleipnir.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a solemn iron and stone pillar inscribed with the spear rune TIWAZ (ᛏ). Carved in heavy Norse bas-relief is the stoic, noble face of Tyr, god of justice, alongside iron chain links of Gleipnir and sacred sword filigree. Dark misty Nordic atmosphere, ancient iron oxidation, solemn lighting, hyperrealistic stone and metal carving.`

---

### Tarea 3: Generación del Lote 2 de Runas (IDs 18 a 21)
- **Acción:** Generar e integrar las imágenes rúnicas de **Berkano**, **Ehwaz**, **Mannaz** y **Laguz** con los rostros y aspectos de Idunn, Freyr/Sleipnir, Ríg y Njörðr.
- **Beneficio:** 10/10 - Avance de otras 4 runas.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **18. Berkano (ᛒ) — Idunn y Frigg (Madre Nutricia y Renacimiento)**
  - *Dios / Aspecto:* Idunn y la Gran Madre en su aspecto de gracia y sanación.
  - *Símbolo y Visaje:* Bajorrelieve del rostro materno de Idunn labrado en abedul y granito con manzanas doradas.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark stone tablet engraved with the rune BERKANO (ᛒ). Carved in gentle Norse bas-relief is the serene maternal visage of Goddess Idunn, surrounded by golden apples and spiraling birch vine interlace. Soft warm illumination, organic dark wood and stone textures, hyperrealistic detail.`
- **19. Ehwaz (ᛖ) — Freyr y Sleipnir (Sinergia Dual y Alianza Sagrada)**
  - *Dios / Aspecto:* Freyr y la Alianza Divina con el corcel Sleipnir.
  - *Símbolo y Visaje:* Bajorrelieve de visajes entrelazados con el caballo de 8 patas Sleipnir (estilo piedra de Gotland).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark slate rune stone bearing the twin-horse rune EHWAZ (ᛖ). Carved in Gotland-style bas-relief are the noble faces of the divine partners intertwined with Sleipnir's 8-legged horse knotwork, inlaid with gold and bronze. Dark moody tone, cinematic side lighting, hyperrealistic stone texture.`
- **20. Mannaz (ᛗ) — Heimdall como Ríg (Padre de la Sociedad Humana)**
  - *Dios / Aspecto:* Ríg (Heimdall) insuflando mente y sabiduría a la humanidad.
  - *Símbolo y Visaje:* Bajorrelieve del rostro primordial de Ríg unificando las fases lunares de Máni.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark polished granite stone carved with the rune MANNAZ (ᛗ). Carved in noble bas-relief is the primordial face of Ríg (Heimdall) surrounded by silver lunar phase engravings of Máni and human interlace. Deep shadow contrast, museum quality, hyperrealistic.`
- **21. Laguz (ᛚ) — Njörðr y Rán (Señores del Océano Inconsciente)**
  - *Dios / Aspecto:* Njörðr y Rán en su aspecto de profundidad oceánica e intuición.
  - *Símbolo y Visaje:* Bajorrelieve místico del rostro del dios del mar emergiendo de las olas y la red sagrada.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a wet dark sea-stone carved with the ocean rune LAGUZ (ᛚ). Carved into the stone bas-relief is the mysterious face of sea-god Njörðr emerging from dragon-ship prows and sea-net patterns of Rán. Water droplets glistening on dark stone, dark aqua and warm gold glows, hyperrealistic wet stone texture.`

---

### Tarea 4: Generación del Lote 3 de Runas (IDs 22 a 24)
- **Acción:** Generar e integrar las últimas 3 imágenes: **Ingwaz**, **Dagaz** y **Othala** con los visajes divinos de Freyr, Dagr y Odín Todo-Vidente.
- **Beneficio:** 10/10 - Completa el 100% de las 24 runas del Elder Futhark en alta definición.
- **Riesgo:** 2/10 - Consolidación final del oráculo.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **22. Ingwaz (ᛝ) — Ing-Freyr (Semilla Fértil y Gestación)**
  - *Dios / Aspecto:* Ing-Freyr en su aspecto de gestación interna en la tierra.
  - *Símbolo y Visaje:* Bajorrelieve del rostro terrenal de Freyr (estilo estatuilla de Rällinge) dentro del diamante sagrado con Gullinbursti.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark diamond rune stone inscribed with INGWAZ (ᛝ). Carved in bas-relief inside the diamond is the earthy visage of Ing-Freyr and golden boar bristle motifs of Gullinbursti. Glowing golden seed from within dark fertile soil, hyperrealistic stone detail.`
- **23. Dagaz (ᛞ) — Dagr y Baldr (Amanecer e Iluminación Trascendente)**
  - *Dios / Aspecto:* Dagr cruzando el umbral de la noche al día.
  - *Símbolo y Visaje:* Bajorrelieve del rostro radiante del dios del día cruzando la noche con la melena de Skinfaxi.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a split dark-and-light stone carving of the infinity rune DAGAZ (ᛞ). Carved in high-relief is the radiant face of Dagr, god of day, riding Skinfaxi's flaming mane from darkness into golden morning light. High contrast chiaroscuro, hyperrealistic stone texture.`
- **24. Othala (ᛟ) — Odín (El Padre Todo-Vidente y Más Allá de la Dualidad)**
  - *Dios / Aspecto:* Odín como Padre Todo-Vidente con **su único ojo místico** que ve más allá del bien y del mal, de lo alto y lo bajo.
  - *Símbolo y Visaje:* Bajorrelieve del rostro sagrado de Odín con su único ojo resplandeciente, flanqueado por Huginn y Muninn en el recinto ancestral.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a massive ancestral boundary stone engraved with OTHALA (ᛟ). Carved in majestic Vendel-style bas-relief is the awe-inspiring face of Allfather Odin, featuring his SINGLE GLOWING MYSTICAL EYE that sees beyond duality, high and low, good and evil. Flanked by ravens Huginn and Muninn and Odin's oath ring, inlaid with gold and iron. Majestic, dark, ancient heritage aesthetic, hyperrealistic texture.`

---

### Tarea 5: Despliegue, Build y Commit a GitHub Pages
- **Acción:** Copiar los nuevos archivos PNG a `public/runes/`, ejecutar `npm run build`, crear un commit en git (`git commit -m "feat: integrate final artistic rune cards 14-24 with deity faces and symbols"`) y publicar en la rama `main`.
- **Beneficio:** 10/10 - Publicación final accesible desde la URL pública `christeck9.github.io/Oracles/`.
- **Riesgo:** 2/10 - Proceso estandarizado de CI/CD.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

---

## 🧪 Plan de Verificación

### Inspección Automatizada
- Ejecución de `npm run build` en el proyecto `/Users/default/Projects/Oracles` para validar la integridad del empaquetado de assets.

### Verificación Manual por el Usuario
- Cargar la URL de producción `christeck9.github.io/Oracles/#/runes`.
- Tirar una tirada de las Nornas y verificar que las 24 runas muestren sus ilustraciones finales en formato `.png`.
- Confirmar que la sección de detalle exponga claramente los tres bloques: *Significado Psicológico*, *Arquetipo Junguiano* y *El Camino del Héroe*.
