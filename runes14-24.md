# Plan de Implementación: Generación Artística de Runas 14 a 24
*Fecha de Registro: 2026-08-10*

Este documento establece la guía técnica, arqueológica y artística para generar las 11 ilustraciones rúnicas restantes (**Perthro** a **Othala**, IDs 14 a 24), garantizando continuidad estética impecable con las runas 1 a 13 e integrando los **símbolos sagrados de los Dioses nórdicos** basados en hallazgos arqueológicos de Dinamarca y Suecia.

---

## 🛡️ Contexto e Investigación Histórico-Arqueológica

### 1. Lecciones de Continuidad Estética y Simbolismo Divino (Runas 1 a 13)
Al examinar las primeras 13 runas (`01_fehu.png` a `13_eihwaz.png`), los símbolos de los dioses no se representan como personajes humanos de cómic, sino como **artefactos y atributos sagrados de los dioses** tallados e entrelazados en la piedra:
- **Thurisaz (3):** El Martillo Mjölnir de Thor.
- **Ansuz (4):** El manto de Odín y los cuervos Huginn y Muninn.
- **Kenaz (6):** El fuego de la antorcha de Heimdall y la forja de Freyja.
- **Eihwaz (13):** El arco de madera de tejo de Ullr y el pilar Yggdrasil.

### 2. Atributos de los Dioses para las Runas 14 a 24
- **Perthro (14):** El huso de oro de Frigg (*Friggerock*) y los hilos del destino de las Nornas en Urðarbrunnr.
- **Algiz (15):** El cuerno **Gjallarhorn** de Heimdall descansando al pie de Bifröst y las astas de alce sagradas.
- **Sowilo (16):** El disco solar de **Sól** (inspirado en Trundholm) y la flor de **Baldr** (*Baldrsbrá*).
- **Tiwaz (17):** La lanza sagrada de **Tyr** y los eslabones de la cadena **Gleipnir** tallados en hierro.
- **Berkano (18):** Las manzanas de oro de la juventud de **Idunn** (*Epli*) y la corteza de abedul de Frigg.
- **Ehwaz (19):** El nudo rúnico del corcel de 8 patas **Sleipnir** y las bridas doradas de Freyr.
- **Mannaz (20):** La marca de **Ríg (Heimdall)** como creador de la sociedad y las fases de Máni.
- **Laguz (21):** Las olas de **Njörðr** y la red marina sagrada de la diosa **Rán**.
- **Ingwaz (22):** El jabalí de cerdas de oro **Gullinbursti** de Freyr y la semilla diamante en la tierra.
- **Dagaz (23):** La melena radiante del caballo del día **Skinfaxi** de Dagr y el nudo de infinito.
- **Othala (24):** El anillo de juramento de **Odín**, sus cuervos **Huginn y Muninn**, y el recinto ancestral Óðal.

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
- **Acción:** Generar e integrar las imágenes rúnicas de **Perthro**, **Algiz**, **Sowilo** y **Tiwaz** incorporando los atributos divinos de Frigg, Heimdall, Sól y Tyr.
- **Beneficio:** 10/10 - Avance de 4 de las 11 runas faltantes.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG por arte final.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡ (con herramienta de generación de imágenes `generate_image`).

#### Prompts Específicos por Runa:
- **14. Perthro (ᛈ) — El Huso de Frigg y el Pozo de las Nornas**
  - *Dios / Potencia:* Frigg (Diosa del Destino) y las Nornas.
  - *Símbolo Divino:* El huso de hilar oro de Frigg (*Friggerock*) y los hilos dorados de Urðarbrunnr.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a weathered basalt stone slab with the rune PERTHRO (ᛈ) deeply carved into it, glowing with soft gold light. Engraved around the stone are intricate Nordic knotwork patterns incorporating Frigg's golden spindle thread and water drops from Urðarbrunnr. Dark gold hues, hyperrealistic stone texture, dark vignette, museum lighting.`
- **15. Algiz (ᛉ) — El Gjallarhorn de Heimdall y el Escudo del Alce**
  - *Dios / Potencia:* Heimdall (El Vigilante de Bifröst) y las Valquirias.
  - *Símbolo Divino:* El cuerno sagrado Gjallarhorn apoyado al pie de la piedra y astas de alce.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a moss-covered granite stone bearing the rune ALGIZ (ᛉ), stylized like branching elk horns. Inlaid in dark bronze at the base of the stone is the famous horn Gjallarhorn of Heimdall, surrounded by Nordic pine mist. Dark moody lighting, subtle gold highlights, hyperrealistic stone carved texture.`
- **16. Sowilo (ᛋ) — El Carro Solar de Sól y la Flor de Baldr**
  - *Dios / Potencia:* Sól (Diosa del Sol) y Baldr (Dios de la Luz).
  - *Símbolo Divino:* El disco solar de Trundholm y la flor solar *Baldrsbrá*.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is an ancient dark stone artifact engraved with the solar rune SOWILO (ᛋ). Embedded around the carving are golden bronze solar spirals inspired by the Trundholm sun chariot disc and Baldr's radiance. Dramatic chiaroscuro, warm gold radiance against dark basalt, hyperrealistic texture.`
- **17. Tiwaz (ᛏ) — La Lanza de Tyr y las Cadenas de Gleipnir**
  - *Dios / Potencia:* Tyr (Dios Manco de la Justicia y el Honor).
  - *Símbolo Divino:* La punta de lanza ritual de Tyr y los eslabones de la cadena *Gleipnir*.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a solemn iron and stone pillar inscribed with the upward spear rune TIWAZ (ᛏ). Around the pillar are engraved iron chain links of Gleipnir and Viking sword chape filigree. Dark misty Nordic atmosphere, ancient iron oxidation, solemn lighting, hyperrealistic stone and metal carving.`

---

### Tarea 3: Generación del Lote 2 de Runas (IDs 18 a 21)
- **Acción:** Generar e integrar las imágenes rúnicas de **Berkano**, **Ehwaz**, **Mannaz** y **Laguz** con los atributos de Idunn, Freyr, Ríg y Njörðr/Rán.
- **Beneficio:** 10/10 - Avance de otras 4 runas.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **18. Berkano (ᛒ) — Las Manzanas de Idunn y el Abedul Sagrado**
  - *Dios / Potencia:* Idunn (Diosa de la Juventud y Sanación) y Frigg.
  - *Símbolo Divino:* Las manzanas de oro de Idunn (*Epli*) y ramas de abedul de Oseberg.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark stone tablet engraved with the rune BERKANO (ᛒ). Resting at the base are subtle carved golden apples of Idunn and ancient birch leaf interlace. Soft warm illumination, organic dark wood and stone textures, hyperrealistic detail.`
- **19. Ehwaz (ᛖ) — Sleipnir y las Bridas Doradas de Freyr**
  - *Dios / Potencia:* Freyr y Sleipnir (El Corcel de 8 Patas).
  - *Símbolo Divino:* Motivos estilizados del caballo Sleipnir (estilo piedra de Tjängvide).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark slate rune stone bearing the twin-horse rune EHWAZ (ᛖ). The carving features subtle 8-legged horse knotwork interlace inspired by Gotland picture stones, inlaid with bronze and gold. Dark moody tone, cinematic side lighting, hyperrealistic stone texture.`
- **20. Mannaz (ᛗ) — La Corona de Ríg (Heimdall) y Máni**
  - *Dios / Potencia:* Heimdall (como Ríg, Padre de la Sociedad) y Máni.
  - *Símbolo Divino:* El brazalete sagrado de Ríg y las fases lunares de Máni.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark polished granite stone carved with the rune MANNAZ (ᛗ). Intertwined around the rune are silver lunar phase engravings of Máni and Ríg's social crown ring. Deep shadow contrast, museum quality, hyperrealistic.`
- **21. Laguz (ᛚ) — El Barco de Njörðr y la Red de Rán**
  - *Asociación:* Njörðr (Dios del Océano) y Rán (Diosa Marina).
  - *Símbolo Divino:* El mascarón de proa del barco de Njörðr y los hilos de la red de Rán.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a wet dark sea-stone carved with the ocean rune LAGUZ (ᛚ). Engraved into the stone are dragon-ship prow curves of Njörðr and sea-net patterns of Rán. Water droplets glistening on dark stone, dark aqua and warm gold glows, hyperrealistic wet stone texture.`

---

### Tarea 4: Generación del Lote 3 de Runas (IDs 22 a 24)
- **Acción:** Generar e integrar las últimas 3 imágenes: **Ingwaz**, **Dagaz** y **Othala** con los atributos de Gullinbursti, Skinfaxi y Odín.
- **Beneficio:** 10/10 - Completa el 100% de las 24 runas del Elder Futhark en alta definición.
- **Riesgo:** 2/10 - Consolidación final del oráculo.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **22. Ingwaz (ᛝ) — El Jabalí Gullinbursti y la Semilla Sagrada**
  - *Dios / Potencia:* Ing-Freyr (Dios de la Tierra y la Fertilidad).
  - *Símbolo Divino:* El jabalí dorado *Gullinbursti* de Freyr (estilo estatuilla de Rällinge).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark diamond rune stone inscribed with INGWAZ (ᛝ). Etched around the diamond rune are subtle golden boar bristle interlace motifs of Gullinbursti. Glowing golden seed from within dark fertile soil, hyperrealistic stone detail.`
- **23. Dagaz (ᛞ) — Skinfaxi y el Reloj de Arena Infinito**
  - *Dios / Potencia:* Dagr (Dios del Día) y Baldr.
  - *Símbolo Divino:* La melena de fuego del caballo *Skinfaxi* y el nudo de equilibrio infinito.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a split dark-and-light stone carving of the infinity rune DAGAZ (ᛞ). Engraved into the stone are subtle radiant horse mane motifs of Skinfaxi bringing morning light. High contrast chiaroscuro, hyperrealistic stone texture.`
- **24. Othala (ᛟ) — El Anillo de Odín y los Cuervos Huginn/Muninn**
  - *Dios / Potencia:* Odín (Padre de Todos) y los Ancestros (*Óðal*).
  - *Símbolo Divino:* El anillo sagrado de Odín y las siluetas estilizadas de sus cuervos.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a massive ancestral boundary stone engraved with OTHALA (ᛟ). Surrounding the rune are deeply carved Vendel-style raven motifs of Huginn and Muninn and Odin's oath ring, inlaid with antique gold and iron. Majestic, dark, ancient heritage aesthetic, hyperrealistic texture.`

---

### Tarea 5: Despliegue, Build y Commit a GitHub Pages
- **Acción:** Copiar los nuevos archivos PNG a `public/runes/`, ejecutar `npm run build`, crear un commit en git (`git commit -m "feat: integrate final artistic rune cards 14-24 with divine symbols"`) y publicar en la rama `main`.
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
