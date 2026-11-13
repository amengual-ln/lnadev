---
target: portfolio personal de software engineering y product building
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/r42/proyectos/personal/lnadev/src/routes/+page.svelte"
target_fingerprint: "sha256:544f43f840dd1358f4a54de3792287e4f23194da2bba81adc6d09846304736ef"
target_path: /home/r42/proyectos/personal/lnadev/src/routes/+page.svelte
timestamp: 2026-11-08T00-47-09Z
slug: src-routes-page-svelte
---
# Crítica de diseño — portfolio de Lautaro Amengual

**Superficie:** `src/routes/+page.svelte` · **Modo:** Experience · **Puntaje:** 19/28 (Aceptable, 68%).

## Salud de diseño

| # | Heurística de Nielsen | Nota | Hallazgo principal |
|---|---|---:|---|
| 1 | Visibilidad del estado | 3/4 | El tema responde; falta orientación dentro del recorrido largo. |
| 2 | Relación con el mundo real | 3/4 | El lenguaje es claro, aunque la propuesta y varios roles son abstractos. |
| 3 | Control y libertad | 3/4 | Navegación simple y enlaces reversibles. |
| 4 | Consistencia | 3/4 | Grilla, tipografía, reglas y temas forman un sistema estable. |
| 5 | Prevención de errores | 2/4 | El CV enlazado contradice la experiencia actual publicada en la página. |
| 6 | Reconocer antes que recordar | 2/4 | Las capturas parecen abrir trabajos propios, pero llevan a las homepages de empleadores. |
| 7 | Flexibilidad y eficiencia | n/a | No hay un flujo experto en este portfolio estático. |
| 8 | Estética y minimalismo | 3/4 | La contención funciona; el espacio y las imágenes podrían dar más protagonismo al trabajo. |
| 9 | Recuperación de errores | n/a | La portada no tiene entradas ni estados de error. |
| 10 | Ayuda y documentación | n/a | No es necesaria para recorrer este portfolio. |
| **Total** | | **19/28** | **Aceptable** |

## Veredicto de identidad

La dirección editorial técnica es coherente: cobalt, etiquetas monoespaciadas, líneas finas y una grilla limpia. También es relativamente intercambiable con otros portfolios de ingeniería. La primera pantalla presenta una afirmación general y datos laborales; los artefactos aparecen después y sus enlaces salen hacia empresas. Como experiencia de portfolio, hoy demuestra trayectoria con más claridad que criterio de producto o trabajo construido.

El detector determinista devolvió `[]` tanto para `src/routes/+page.svelte` como para el escaneo complementario de `src/components`: cero hallazgos. Esa limpieza de patrones no invalida el juicio visual anterior. No hubo falsos positivos que descartar. La inspección en navegador confirmó que Experience empieza bajo el primer viewport de escritorio y que en móvil el visitante ve titular, datos y enlaces antes del primer trabajo. No hay overlay visible: la API del navegador disponible solo permite evaluar el DOM en modo lectura y no admite inyectar el script del detector.

## Impresión general

La página se ve profesional y fácil de leer. El mayor salto vendría de mostrar una decisión, interfaz o resultado que sea inequívocamente tuyo antes de que el visitante tenga que interpretar cinco empleos.

## Lo que funciona

- El encabezado, el titular y la grilla de datos construyen una primera impresión ordenada en escritorio y móvil (`Header.svelte`, `Hero.svelte`).
- Las filas de experiencia agrupan cronología, rol, texto, tecnologías y visual; a 390 px pasan a una columna sin recortes ni desbordamiento (`Experience.svelte`).
- Las paletas clara y oscura son coherentes; los encabezados mantienen una jerarquía semántica h1 → h2 → h3, y los controles tienen nombres accesibles (`tokens.css`, `DarkModeToggle.svelte`).

## Problemas prioritarios

1. **P1 — Falta una muestra inspeccionable del trabajo propio.** `src/routes/+page.svelte:7-11` solo monta Hero y Experience. En `Experience.svelte:87-96`, nombre e imagen de cada empresa conducen a su homepage. Un visitante no puede verificar el tipo de problema, tu decisión ni el resultado que sustenta “product builder”. **Acción:** presentar 2–3 casos seleccionados con problema, responsabilidad, artefacto real y efecto comprobable; acercar el primero al inicio. Si el trabajo no puede mostrarse completo, usar un recorte o diagrama autorizado. **Comando:** `$impeccable shape`.
2. **P1 — Credencial enlazada contradictoria (pendiente ya reconocido).** `Hero.svelte:7-14` dice Mercado Libre como puesto actual, pero el CV enlazado todavía presenta otros puestos como actuales. Eso resta confianza a quien comprueba fechas. **Acción:** reemplazar el PDF por la versión vigente cuando esté lista e indicar su fecha de actualización. Esta crítica no modifica el archivo. **Comando:** `$impeccable clarify`.
3. **P2 — La propuesta y los roles cuentan intención más que contribución.** El titular de `Hero.svelte:3-4` podría describir a muchos ingenieros. En `jobs.js`, verbos como “help”, “focus” e “improve” no señalan una decisión o pieza entregada. **Acción:** formular una especialidad concreta y asociar cada rol con una prueba de alcance o resultado, sin inventar métricas. **Comando:** `$impeccable clarify`.
4. **P2 — Las imágenes pierden valor como prueba.** `Experience.svelte:94-96,126-149` limita las capturas a 19rem en escritorio, las recorta y aplica escala de grises/opacidad hasta hover o centrado móvil. Su contenido es difícil de leer y ninguna leyenda explica qué se ve. **Acción:** elegir un recorte más legible, aumentar el espacio dedicado al artefacto y acompañarlo con una leyenda que identifique tu intervención. **Comando:** `$impeccable layout`.
5. **P2 — El recorrido móvil repite una misma cadencia.** Cinco filas con texto, stack e imagen similares producen un scroll largo; el cierre repite Email/LinkedIn (`Experience.svelte`, `Footer.svelte`). **Acción:** priorizar las piezas más fuertes, variar el ritmo según su importancia y cerrar con una invitación ligada al trabajo mostrado. **Comando:** `$impeccable distill`.

## Personas y carga cognitiva

- **Quien contrata por primera vez:** toca una captura esperando ver el proyecto y llega al sitio corporativo; le falta contexto sobre tu responsabilidad.
- **Quien verifica antecedentes:** encuentra fechas incompatibles entre página y CV. Es un pendiente conocido, pero sigue afectando la confianza.
- **Visitante móvil con poco tiempo:** la primera pantalla termina antes de un artefacto; necesita recorrer varias filas parecidas para llegar a una prueba concreta.
- **Usuario de teclado o lector de pantalla:** los focos y la estructura ayudan, pero dos enlaces por empleo llevan al mismo destino y el texto alternativo “product interface” no explica la imagen.

La carga de lectura es moderada y no hay más de cuatro opciones simultáneas en el hero. El esfuerzo alto está en **verificar** la promesa: combinar párrafos, capturas pequeñas, enlaces externos y el CV para inferir qué construiste. El recorrido emocional abre con seguridad, se aplana en la secuencia de empleos y termina con los mismos contactos ya visibles al principio.

## Observaciones menores

`jobs.js` usa presente para Loud Intelligence, aunque las fechas de la página lo muestran como pasado. “Frontend” y “Front-end” alternan. Las etiquetas monoespaciadas son pequeñas; la inspección actual no midió contraste a nivel de píxel, así que no se afirma una falla WCAG.

## Preguntas de diseño

- ¿Qué artefacto de producto permitiría creer “product builder” en los primeros cinco segundos?
- ¿Qué dos decisiones o tradeoffs muestran tu criterio y no solo las tecnologías usadas?
- Si desaparecieran los enlaces a los empleadores, ¿la página seguiría demostrando tu trabajo?
