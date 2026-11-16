# Portfolio — backlog del audit

Audit de producción: 2026-11-15. Actualizado: 2026-11-16.
Trabajar de a poco, priorizando cambios pequeños y verificables. Preservar el Hero aprobado, la foto en ambos temas y la mención de Spärck. No inventar aportes ni métricas.

## Quick wins

- [ ] **Tipografía de Experience** (`impeccable typeset`): descripciones y puestos a 16 px; fechas y tecnologías a 12 px. Implementado; pendiente comparación visual con el usuario. Verificar desktop/móvil y ambos temas antes de cerrar.
- [ ] **Optimizar imágenes sin pérdida visual apreciable** (`impeccable optimize`): conservar originales; comparar detalle y bordes del retrato en ambos temas. El audit registró 822 KB del PNG y 77 KB del JPEG.
- [ ] **Carga por tema y viewport**: evitar descargar el retrato oculto; usar variantes con `srcset`/`sizes` según tamaño renderizado y densidad de pantalla. Lazy loading para imágenes fuera del viewport; mantener carga prioritaria para la imagen principal visible del Hero. Verificar requests en cargas nuevas, cambio de tema y resize, sin saltos de layout ni fotos ausentes. Experience ya usa `loading="lazy"`.
- [ ] **Aclarar imágenes ilustrativas** (`impeccable clarify`): corregir alt y atribución para que no parezcan entregables propios; distinguir visita a empresa de muestras de trabajo.

## Siguientes pasadas

- [ ] **Jerarquía y síntesis de Experience** (`impeccable layout` / `clarify`): destacar contribuciones verificadas, reducir repetición y evaluar tamaño/utilidad de imágenes por rol, especialmente en móvil.
- [ ] **Spärck como evidencia**: definir con Lautaro problema, aportes, decisiones y artefactos públicos antes de escribir una sección entre Hero y Experience.
- [ ] **Explorar recorte móvil más corto del retrato**: opcional, comparar sin alterar desktop. Experience empieza a unos 1217 px a 390 px de ancho y 1282 px a 320 px.
- [ ] **Polish final** (`impeccable polish`) y repetir audit.

## Evidencia y límites

- Score orientativo: 16/20; no es certificación WCAG ni medición de Core Web Vitals.
- Playwright: ambos temas; anchos 320, 390, 768, 1024 y 1440 px, sin overflow horizontal observado.
- Ancla Experience deja el título visible; no requiere corrección por ahora.
- Colores de empresas en tema claro superan 3:1 para títulos grandes; no reportados como fallo.
- Detector automático sin hallazgos. Pendiente verificación táctil en dispositivo real.
- No modificar ni publicar sin el alcance acordado; no commit/push salvo pedido explícito.
