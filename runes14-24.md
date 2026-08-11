# Plan de Implementación: Generación Artística de Runas 14 a 24
*Fecha de Registro: 2026-08-10*

Este documento establece la guía técnica, arqueológica y artística para generar las 11 ilustraciones rúnicas restantes (**Perthro** a **Othala**, IDs 14 a 24), garantizando continuidad estética impecable con las runas 1 a 13 y rigor histórico basado en fuentes primarias y hallazgos arqueológicos de Dinamarca y Suecia.

---

## 🛡️ Contexto e Investigación Histórico-Arqueológica

### 1. Lecciones de Continuidad Estética (Análisis de Runas 1 a 13)
Al examinar los assets de las primeras 13 runas (`01_fehu.png` a `13_eihwaz.png`), se identifica la siguiente fórmula visual:
- **Sujeto Principal:** El glifo de la runa o su artefacto sagrado en primer plano tallado en piedra o grabado en metal/oro.
- **Paleta de Color:** Tonos oscuros, sombríos, con dorados cálidos, bronce, piedra basáltica, verde bosque místico e iluminación dramática (chiaroscuro).
- **Estilo:** Arte místico/esotérico hiperrealista (texturas de piedra tallada, líquenes, oro desgastado, grano fotográfico de museo).
- **Prohibiciones Explícitas:** Queda strictly prohibido incluir representaciones antropomórficas completas (humanos/guerreros en primer plano) o tropos de la cultura pop como cascos con cuernos.

### 2. Fuentes Arqueológicas y Mitológicas de Referencia (Dinamarca y Suecia)
- **Bracteatos de Oro:** *Bracteato de Vadstena* (Suecia) y *Bracteato de Mariedamm* (orden del Elder Futhark).
- **Piedras Pictóricas de Gotland:** *Lärbro* y *Stora Hammars* (simbolismo de Odín, Valkirias y nudos sagrados Valknut).
- **Hallazgos Arqueológicos:** *Carro Solar de Trundholm* (Dinamarca), *Estatuilla de Freyr en Rällinge* (Södermanland, Suecia), *Casco de Gjermundbu* (visor de hierro sin cuernos), *Depósitos de Torsbjerg y Illerup Ådal* (armas y chapas de espada talladas con runas).

---

## 📋 Desglose de Tareas bajo el Formato B-R-M (Beneficio, Riesgo, Modelo)

> [!IMPORTANT]
> La ejecución de la generación de imágenes en lotes se realizará una vez restablecida la cuota API del modelo de imagen (aproximadamente en 4h 45m).

---

### Tarea 1: Verificación y Auditoría de Diffs de Texto (`App.tsx` & `runesData.ts`)
- **Acción:** Confirmar que la etiqueta del UI `"El Camino del Héroe"` esté correctamente integrada y desplegada en producción.
- **Beneficio:** 9/10 - Coherencia total de la interfaz con los nombres solicitados por el usuario.
- **Riesgo:** 1/10 - Cambio cosmético de bajo riesgo.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡ - Tarea rápida de verificación.

---

### Tarea 2: Generación del Lote 1 de Runas (IDs 14 a 17)
- **Acción:** Generar e integrar las imágenes rúnicas de **Perthro**, **Algiz**, **Sowilo** y **Tiwaz** usando la plantilla de estilo coherente.
- **Beneficio:** 10/10 - Avance de 4 de las 11 runas faltantes.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG por arte final.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡ (con herramienta de generación de imágenes `generate_image`).

#### Prompts Específicos por Runa:
- **14. Perthro (ᛈ) — El Cubilete del Destino y las Nornas**
  - *Asociación:* Frigg, Las Nornas, Urðarbrunnr (Pozo del Destino).
  - *Referencia:* Bracteatos de oro de Gotland y Vasos rituales de bronce.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a weathered basalt stone slab with the rune PERTHRO (ᛈ) deeply carved into it, glowing with a soft golden inner light. In the background, mysterious threads of fate and water drops from Urðarbrunnr reflect dark gold hues. Hyperrealistic stone texture, dark vignette, museum lighting.`
- **15. Algiz (ᛉ) — El Escudo de Cuernos y Protección Divina**
  - *Asociación:* Heimdall, Las Valquirias, Astas de Alce Sagradas.
  - *Referencia:* Visores del periodo Vendel (Öland, Suecia) y tallas rúnicas de protección.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a moss-covered granite stone bearing the rune ALGIZ (ᛉ), stylized like branching elk horns. Surrounding the stone are subtle iron and bronze Valkyrie shield bosses and Nordic pine mist. Dark, moody lighting, subtle gold highlights, hyperrealistic stone carved texture.`
- **16. Sowilo (ᛋ) — La Rueda Solar e Iluminación Invencible**
  - *Asociación:* Sól, Baldr, El Carro Solar.
  - *Referencia:* Carro Solar de Trundholm (Dinamarca) y discos solares de bronce.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is an ancient dark stone artifact engraved with the solar rune SOWILO (ᛋ). Embedded around the carving are fragments of weathered gold leaf and bronze solar spirals inspired by the Trundholm sun chariot. Dramatic chiaroscuro, warm gold radiance against dark basalt, hyperrealistic texture.`
- **17. Tiwaz (ᛏ) — La Lanza de Tyr y el Sacrificio Moral**
  - *Asociación:* Tyr, El Juramento del Thing, La Lanza Sagrada.
  - *Referencia:* Depósito de armas de Torsbjerg y chapas de espada con inscripciones rúnicas.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a solemn iron and stone pillar inscribed with the upward spear rune TIWAZ (ᛏ). The rune is inlaid with worn silver and gold filigree. Dark, misty Nordic atmosphere, ancient iron oxidation, solemn lighting, hyperrealistic stone and metal carving.`

---

### Tarea 3: Generación del Lote 2 de Runas (IDs 18 a 21)
- **Acción:** Generar e integrar las imágenes rúnicas de **Berkano**, **Ehwaz**, **Mannaz** y **Laguz**.
- **Beneficio:** 10/10 - Avance de otras 4 runas.
- **Riesgo:** 2/10 - Reemplazo de placeholders PNG.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **18. Berkano (ᛒ) — El Abedul del Renacimiento y Sanación**
  - *Asociación:* Idunn, Frigg, La Madre Tierra.
  - *Referencia:* Restos de corteza de abedul de Oseberg y motivos florales en plata de Tissø (Dinamarca).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a silver-grained birch wood and dark stone tablet engraved with the rune BERKANO (ᛒ). Tender green moss and ancient carved spiraling vines encircle the rune. Soft warm illumination, organic dark wood and stone textures, hyperrealistic detail.`
- **19. Ehwaz (ᛖ) — El Corcel Sagrado y la Sinergia Dual**
  - *Asociación:* Freyr, Sleipnir, La Pareja Sagrada.
  - *Referencia:* Piedras pictóricas de Tjängvide (Gotland) y arneses de barcos funerarios de Skamby (Suecia).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark slate rune stone bearing the twin-horse rune EHWAZ (ᛖ). The carving features subtle animal-style Viking knotwork interlaced around the rune, inlaid with bronze and gold. Dark moody tone, cinematic side lighting, hyperrealistic stone texture.`
- **20. Mannaz (ᛗ) — La Humanidad e Integración Social**
  - *Asociación:* Heimdall (Ríg), Máni, La Mente Humana Integrada.
  - *Referencia:* Figurillas de plata de Uppåkra (Escania, Suecia) y el *Rígsthula*.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark polished granite stone carved with the rune MANNAZ (ᛗ), symbolizing two crossed Gebo runes in human unity. Ancient Norse geometric interlace surrounds the rune with subtle amber glows. Deep shadow contrast, museum quality, hyperrealistic.`
- **21. Laguz (ᛚ) — Las Aguas del Océano e Intuición Primordial**
  - *Asociación:* Njörðr, Rán, Las Aguas Inconscientes.
  - *Referencia:* Inscripciones de madera de barcos vikingos y copas rituales de Escania.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a wet dark sea-stone carved with the ocean rune LAGUZ (ᛚ). Water droplets and seafoam glisten on the dark stone surface, reflecting cold aqua and warm gold lights from within the carved rune. Deep oceanic atmosphere, hyperrealistic wet stone texture.`

---

### Tarea 4: Generación del Lote 3 de Runas (IDs 22 a 24)
- **Acción:** Generar e integrar las últimas 3 imágenes: **Ingwaz**, **Dagaz** y **Othala**.
- **Beneficio:** 10/10 - Completa el 100% de las 24 runas del Elder Futhark en alta definición.
- **Riesgo:** 2/10 - Consolidación final del oráculo.
- **Modelo Sugerido:** Gemini 3.5 Flash ⚡.

#### Prompts Específicos por Runa:
- **22. Ingwaz (ᛝ) — La Semilla y el Recinto Sagrado**
  - *Asociación:* Ing-Freyr, La Fertilidad Terrenal.
  - *Referencia:* Estatuilla de Freyr de Rällinge (Södermanland, Suecia).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a dark diamond-shaped rune stone inscribed with INGWAZ (ᛝ). The carved diamond rune glows from within like an incubating golden seed in dark fertile soil. Rich earthy and gold palette, dark vignette, hyperrealistic stone detail.`
- **23. Dagaz (ᛞ) — El Amanecer y la Iluminación Trascendente**
  - *Asociación:* Dagr, Baldr, El Equilibrio Infinito.
  - *Referencia:* Piedras de Gotland con motivos de reloj de arena infinito y amanecer.
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a split dark-and-light stone carving of the infinity rune DAGAZ (ᛞ). One side rests in deep night shadows while the carved rune bridge glows with the brilliant warm gold of daybreak. High contrast chiaroscuro, hyperrealistic stone texture.`
- **24. Othala (ᛟ) — El Hogar Ancestral y la Herencia Sagrada**
  - *Asociación:* Odín, Los Ancestros, El Óðal (Dominio Ancestral).
  - *Referencia:* Piedra rúnica de Sparlösa (Västergötland, Suecia) y trazados de Fyrkat (Dinamarca).
  - *Prompt:* `A dark, mystical runic artwork matching the exact style of ancient Scandinavian rune stones. The central focal point is a massive ancestral boundary stone engraved with OTHALA (ᛟ). The rune is surrounded by deeply carved Vendel-style gripping beast interlace, inlaid with antique gold and iron. Majestic, dark, ancient heritage aesthetic, hyperrealistic texture.`

---

### Tarea 5: Despliegue, Build y Commit a GitHub Pages
- **Acción:** Copiar los nuevos archivos PNG a `public/runes/`, ejecutar `npm run build`, crear un commit en git (`git commit -m "feat: integrate final artistic rune cards 14-24"`) y publicar en la rama `main`.
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
