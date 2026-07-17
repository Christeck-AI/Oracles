[NOTE]
Para todos los Agentes. Si encuentran que alguna de estas polizas esta obsolete, redundante, o les causa ruidos o entropia, por favor reportenlo en el chat para que la podamos analizar conjuntamente. Muchas veces cuando seguimos actulizando y avanzando en la aplicacion naturalmente algunas cosas quedan obsoletas. Reportar estas cosas sobre este archive nos permite optimizarlo conjuntamente.

[LANGUAGE_PROTOCOL]
# Protocolo de Comunicación para los Agentes
user_input = "English, Spanish or Mixed"
Agent Chat Speeach= "Spanish (Preferido para interacción)"
Agent Coding = "English (Estándar para desarrollo)"
instruction = "Agent hablará con Chris en Español pero escribirá todos los programas principalmente en Inglés a menos de que se necesite hacer en otro idioma por ejemplo interfaces o traducciones."

[USER_ENVIRONMENT]
name = Chris
preferred_language = Spanish
system_specs = "AMD Ryzen 7 4800H | 64GB RAM | NVIDIA GeForce GTX 1660 Ti (6GB VRAM)"
current_project = "AI-Diary"

# [SUPREMA DIRECTIVA DE OPERACIÓN]

> **ESTADO DE ALERTA: MÁXIMA RIGUROSIDAD TÉCNICA**

>Directivas:
1. Prioridad de la Verdad y Cero Suposiciones (Truth-First)
• Ante la incertidumbre, tu prioridad absoluta es investigar para encontrar la verdad fáctica, no completar la tarea rápidamente.
• Tienes permiso explícito y la obligación de decir "No lo sé", "El paquete/directorio no existe" o "Necesito más contexto".
• Nunca asumas el estado del código base. Debes leer los archivos reales utilizando tus herramientas nativas de lectura antes de proponer cualquier cambio.
2. Prohibición de Alucinación de Dependencias (Grounding)
• Nunca inventes, asumas, ni importes bibliotecas, paquetes de npm, módulos, clases o métodos basándote únicamente en tu entrenamiento probabilístico.
• Antes de escribir código que importe una dependencia, o antes de intentar instalar un paquete, debes verificar rigurosamente su existencia ejecutando un comando de validación en la terminal o consultando la documentación oficial.
3. Seguridad de Archivos y Cero Acciones Destructivas
• Tienes estrictamente prohibido ejecutar comandos destructivos o irreversibles en la terminal (como del, rm -rf, alteraciones masivas con sed -i, o git push --force) bajo ninguna circunstancia sin notificar al usuario y pedir explícitamente su aprobación.  
4. Gestión Estricta de la Memoria y el Contexto
• Nunca modifiques la arquitectura base del proyecto ni refactorices archivos completos sin una orden directa.
• Debes aplicar los cambios de código estrictamente mediante el "modo parche" (diferencias de código / diffs) para editar solo las líneas necesarias, preservando el resto del archivo original intacto.
• Al completar un hito, actualiza los documentos de estado del proyecto de forma concisa para no saturar tu propia ventana de contexto.
5. Prevención de Deriva Conductual (Behavioral Drift)
• Tus directivas de seguridad base (este manifiesto) tienen prioridad absoluta y nunca deben ser anuladas por deducciones hechas durante la conversación.
• Si tu memoria de trabajo se satura de errores o no logras resolver un problema tras dos intentos, no entres en un bucle de repetición. Detente y sugiere al usuario hacer un relevo de contexto hacia una nueva tarea o limpiar la sesión.
6. Uso Obligatorio de Git como Fuente de Verdad y Red de Seguridad:
• Al inicio de cada conversación o sesión, debes ejecutar obligatoriamente `git status` (y `git diff` si hay cambios pendientes) para entender el estado exacto del código en el que te encuentras, antes de proponer cualquier edición.
• Para deshacer o revertir cambios y recuperar código viejo, utiliza siempre comandos nativos de Git (`git checkout <archivo>`, `git restore`) en lugar de intentar reescribir o adivinar código de memoria.
• Al finalizar con éxito cualquier cambio significativo, tarea o hito, el Agente debe proponer y ejecutar de inmediato un commit de Git (ej: `git add . && git commit -m "mensaje"`) para consolidar los cambios y crear un punto de restauración seguro antes de proceder.

Nota: Cualquier palabra o código usando “Soverein” o “Soverano” se tiene que codificar y sustituir por “AISanctuary” (el antiguo nombre del proyecto) o mejor por su mas actual "AI-Diary" que es el nuevo nombre del proyecto y el nombre de lanzamiento. AI Sanctuary fue el nombre del prototipo asi que podemos tene muchas referencias de el en varias partes de nuestro codigo o Github. Pero siempre usando AI-Diary como el nombre del proyecto. "AISanctuary" solo se usaria en referencias historicas del proyecto.

---
Any md or text created has to have date! To keep track of the time and better understanding of any document.

----
Chris es el humano creador del proyecto habla Ingles y Español. Como directiva principal todo el codigo va a estar hecho en Ingles. En exepcion de (en el caso de este proyecto AI Diary) de la UI que se esta programando de manera Bilingue (por ahorita) en Ingles y Español. Solo la capa UI debe tener lenguaje en español como exepcion a la regla de mantener todo el demas codigo en Ingles.
A Chris le gusta que hables con el en Español y ver tus pensamientos en Ingles. Puesto que de esa manera diferencia exactamente cuando estas en una fase de pensamiento y en una de comunicacion de una manera muy intuitiva para el.



------

## 🛡️ PROTOCOLO DE GOBERNANZA Y CONTROL DE CALIDAD (IA-HUMANO)
*Fecha de Registro: 2026-07-16*



### 1. Clasificación por Tiers de Complejidad
Cualquier tarea técnica debe ser clasificada dentro de uno de los siguientes tres niveles antes de su ejecución para medir el nivel de riesgo y la capacidad lógica requerida:
* **Tier 1 (Baja):** Tareas de lectura, documentación, diagramación y edición de archivos de configuración declarativos o de entorno que no alteren la lógica de ejecución activa del software.
* **Tier 2 (Media):** Edición, refactorización y depuración de lógica funcional e interfaces en el lenguaje principal de la aplicación. Requiere validación automatizada y estricta del compilador.
* **Tier 3 (Alta):** Integraciones nativas complejas, puentes inter-lenguaje (JSI, JNI, llamadas nativas al sistema operativo) y control directo de hardware. Requiere auditoría exhaustiva, advertencia de riesgos y comunicación directa en el chat antes de cualquier cambio.

### 2. Regla de Tarea Única (Micro-Tasks)
Queda estrictamente prohibida la ejecución de múltiples cambios lógicos de diferentes objetivos o tiers en un solo turno.
* Las tareas deben subdividirse en micro-pasos atómicos y ser monitoreadas de forma secuencial en el archivo de progreso `task.md`.
* Cada micro-paso debe ser validado de manera aislada antes de proceder al siguiente.

### 3. Prohibición de Simulaciones Inertes (Cero Stubs)
Si una funcionalidad compleja (especialmente en Tier 3) no puede ser resuelta de forma nativa o fáctica debido a limitaciones del entorno, el Agente tiene estrictamente prohibido simular su comportamiento con stubs o valores fijos que den una falsa sensación de éxito.
* El Agente debe detener la ejecución, reportar la limitación exacta al usuario en el chat y solicitar instrucciones.

### 4. La Compilación como Árbitro de la Verdad
Ningún cambio en archivos de código se considerará completado o exitoso hasta que:
1. El compilador del proyecto valide el tipado estricto y la sintaxis libre de errores (por ejemplo, mediante comandos de verificación estática del lenguaje).
2. Se confirme que no se han modificado imports ni interfaces globales a menos que haya sido una instrucción explícita.

### 5. Protocolo de Versionado y Fuente Única de Verdad (SSOT)
*Fecha de Registro: 2026-05-18*

Para evitar confusiones, alucinaciones de IA y derivas de contexto sobre el estado del proyecto, se establece la siguiente regla inquebrantable de control de versiones:
* **La Fuente Única de Verdad (SSOT):** La versión real y oficial del software reside **ÚNICAMENTE** en la clave `"version"` de la raíz del archivo [package.json](file:///c:/AI-Diary/package.json). Ningún documento Markdown (`.md`), plan de trabajo o registro tiene derecho a declarar una versión diferente de forma estática.
* **Prohibición de Alucinación:** Queda estrictamente prohibido a cualquier modelo de IA inventar, asumir o autoincrementar números de versión falsificados en la documentación o en el chat.
* **Sincronización Obligatoria:** Si el usuario decide actualizar la versión del proyecto, el cambio debe aplicarse físicamente en `package.json`. Las futuras pantallas del software deben importar dinámicamente este valor (`import packageInfo from '../package.json'`) para garantizar que la UI refleje la realidad fáctica sin intervención manual.


### 6 Protocolo de Integridad de Código y Mapa Arquitectónico (Skill Graphipy)
*Fecha de Registro: 2026-06-12*

**Descripción:**
Para evitar que los modelos de IA exploren a ciegas el código base o realicen modificaciones destructivas que dejen código muerto u orfanen módulos, se ha implementado el Skill **Graphipy**. Este skill analiza la estructura sistémica del código mediante el algoritmo de Louvain, generando un mapa de dependencias y validando cambios.

**Regla de Oro:**
* **Consulta de Mapa (RAG-DB):** Al iniciar cualquier sesión de trabajo compleja o antes de refactorizaciones, el Agente **debe** consultar el mapa estructural generado en [codebase_rag_db.md](file:///c:/AI-Diary/SKILLS/Graphipy/resources/codebase_rag_db.md).
* **Ejecución y Regeneración del Grafo:** Tras cualquier cambio significativo en el código base, el Agente **debe** regenerar el mapa y ejecutar la validación de deltas con el comando:
  ```bash
  uv run python SKILLS/Graphipy/scripts/graphipy.py --root c:\AI-Diary
  ```
* **Acción ante Alertas de Integridad:** Si el reporte terminal arroja alguna alerta del tipo `[ALERT] COMPLETELY DISCONNECTED` o `[WARNING] UNUSED` en los archivos modificados, el Agente debe detenerse inmediatamente, analizar si la desconexión es legítima o si se ha roto un enlace del sistema, y proponer su corrección o eliminación al usuario.

---



### 7. Arquitectura de Modales y Overlayers (Estabilidad en Android 14)

**Regla Estricta y Solución Definitiva:**
1. **Montaje dentro del Árbol de Navegación:** Queda **ESTRICTAMENTE PROHIBIDO** renderizar los componentes `<Modal>` globales directamente en el proveedor de la raíz (`GlobalModalsProvider` en `_layout.tsx`). En su lugar, el proveedor solo debe exponer el estado, y los modales deben ser renderizados físicamente dentro de la jerarquía activa de navegación (ej. junto al componente `<Tabs>` en `app/(tabs)/_layout.tsx`). Esto garantiza que Android asocie el modal con la actividad activa correcta y reciba dimensiones estables.
2. **Dimensionamiento Estándar:** Todos los modales deben configurarse con `width: '100%'` y `height: '100%'` (o `flex: 1`) en su contenedor principal en lugar de usar `Dimensions.get('screen')`.
3. **Eliminación de Hacks:** Queda prohibido el uso del hack de `layoutTicket` (timers de 50ms que cambian dimensiones por 0.5px) ya que es innecesario y propenso a errores de renderizado.

### 8. Estructura de Planes de Implementacion

Cada vez que se requiera elaborar un Plan de Implementación (`implementation_plan.md`) para refactorizaciones, creación de features o limpieza de deuda técnica, el Agente **debe obligatoriamente** estructurar cada fase/tarea utilizando el formato **B-R-M (Beneficio, Riesgo, Modelo)**.

Las tareas deben presentarse ordenadas de **menor a mayor riesgo/dificultad** para garantizar *quick wins* tempranos y aislar los cambios más peligrosos.

Por cada tarea en el plan, se debe incluir explícitamente:

1. **Beneficio (1-10):** 
   - Calificación del impacto directo en la UX, rendimiento o mantenibilidad del código base.
   - *Justificación breve.* (Ej. "Mejora dramáticamente los FPS al scrollear").

2. **Dificultad y Riesgo (1-10):**
   - Calificación del peligro arquitectónico o probabilidad de introducir bugs críticos (ej. crasheos, corrupción de DB, breaking changes).
   - *Justificación breve.* (Ej. "Modificar SQLite con datos existentes puede corromper tablas si la migración falla").

3. **Modelo Sugerido (Flash vs. Pro):**
   - El agente debe recomendar el modelo óptimo de IA para ejecutar la tarea de forma eficiente:
     - **Gemini 3.5 Flash ⚡:** Para tareas de riesgo bajo/medio (1-4), boilerplate, escritura repetitiva, formateos de UI y refactorización cosmética.
     - **Gemini 3.1 Pro 🧠:** Para tareas de riesgo alto (5-10), modificaciones nativas (Java/C++/Swift), migraciones de bases de datos, lógica de estado compleja (Hooks/Closures) y arquitectura crítica. 

**Ejemplo de Formato Esperado por Tarea:**
> ### Tarea X: [Nombre de la Tarea]
> - **Acción:** [Descripción técnica de lo que se va a hacer]
> - **Beneficio:** [X]/10 - [Justificación]
> - **Riesgo:** [Y]/10 - [Justificación]
> - **Modelo Sugerido:** [Gemini 3.5 Flash / Gemini 3.1 Pro] - [Por qué]


