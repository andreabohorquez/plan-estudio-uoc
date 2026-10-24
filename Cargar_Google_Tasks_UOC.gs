/**
 * Script para cargar automáticamente el Plan de Estudio UOC en Google Tasks
 * INSTRUCCIONES:
 * 1. En script.google.com, en el menú izquierdo haz clic en "+" junto a "Servicios".
 * 2. Selecciona "Tasks API" y haz clic en "Añadir".
 * 3. Haz clic arriba en "Ejecutar" (▶).
 */
function cargarPlanEstudioUOC() {
  // 1. Crear lista para las 13 Entregas Oficiales
  var listaEntregas = Tasks.Tasklists.insert({
    title: "🚨 UOC · 13 Entregas Oficiales"
  });
  
  var entregas = [
    ['2026-10-27', '[ENT] ENTREGA R0 · Equipo e idea de negocio', 'Obligatoria. Nota de completo o incompleto según participación y coordinación.'],
    ['2026-11-10', '[TFM] ENTREGA R2 · Marco teórico, objetivos y metodología', 'Obligatoria. Incorpora el feedback del tutor sobre R1.'],
    ['2026-11-22', '[EST] ENTREGA R1 (PEC 1) · Desarrollo corporativo (Caso Puig)', '50 puntos. Individual. Enunciado en Word.'],
    ['2026-12-01', '[ENT] ENTREGA R1 · Diseñar y validar el modelo de negocio', '40 puntos. Reto sobre el modelo de negocio de la startup.'],
    ['2026-12-02', '[TFM] ENTREGA R3 · Recogida de información y estudio empírico', 'Obligatoria. Trabajo de campo: encuestas y entrevistas.'],
    ['2026-12-22', '[ENT] ENTREGA R3 · El pitch', '20 puntos. Comunicación del proyecto.'],
    ['2027-01-05', '[TFM] ENTREGA R4 · Conclusiones y borrador', '40 puntos. Borrador completo del trabajo.'],
    ['2027-01-10', '[EST] ENTREGA R2 (PEC 2) · Gobierno corporativo', '50 puntos. El material se desbloquea el 23 de noviembre.'],
    ['2027-01-17', '[ENT] ENTREGA R2 · Marketing, ventas y sostenibilidad', '40 puntos. Se desbloquea Recap y cierre el 18 de enero.'],
    ['2027-01-25', '[TFM] ENTREGA R5 · Documento final TFM', '40 puntos. Entrega final del trabajo.'],
    ['2027-01-25', '[EST] ENTREGA PEC adicional', '50 puntos. Confirmar si es obligatoria o de recuperación.'],
    ['2027-01-28', '[ENT] Checkpoint síncrono de seguimiento', 'Sesión de seguimiento.'],
    ['2027-01-29', '[ENT] Actividad adicional', 'Sin puntos en el aula.']
  ];

  for (var i = 0; i < entregas.length; i++) {
    var e = entregas[i];
    Tasks.Tasks.insert({
      title: e[1],
      notes: e[2],
      due: e[0] + "T23:59:00.000Z"
    }, listaEntregas.id);
    Utilities.sleep(150);
  }

  // 2. Crear lista para el Plan de Estudio Diario (Oct 2026 - Ene 2027)
  var listaDiaria = Tasks.Tasklists.insert({
    title: "📚 UOC · Plan de Estudio Diario"
  });

  var dias = [
    ['2026-10-24', '[ENT] (2h) Lee el enunciado completo de R0 y los recursos; publica tu idea (GeoBig) en el foro para formar equipo'],
    ['2026-10-24', '[EST] (2h) Descarga el enunciado de la PEC 1 (Word), lee el planteamiento y el módulo Introducción al concepto de estrategia'],
    ['2026-10-25', '[ENT] (1.5h) Elige equipo e idea con tus compañeros y deja el acuerdo por escrito'],
    ['2026-10-25', '[EST] (1.5h) Módulo Direcciones de desarrollo de la estrategia'],
    ['2026-10-25', '[TFM] (1h) Relee el feedback del tutor sobre R1 y el PDF del enunciado de R2'],
    ['2026-10-26', '[ENT] (1h) Cierra el acuerdo con el equipo y redacta la entrega de R0'],
    ['2026-10-26', '[EST] (1h) Artículo de Ansoff, Strategies for diversification'],
    ['2026-10-27', '[ENT] (2h) Revisa y entrega R0 (límite hoy); lee el planteamiento de R1'],
    ['2026-10-28', '[TFM] (1.5h) R2: esquema del marco teórico, teorías y modelo de análisis'],
    ['2026-10-29', '[EST] (1.5h) Artículo de Porter, From competitive advantage to corporate strategy'],
    ['2026-10-30', '[TFM] (1.5h) R2: ajusta pregunta de investigación, hipótesis y objetivos'],
    ['2026-10-31', '[EST] (2h) Módulo Métodos de desarrollo de la estrategia'],
    ['2026-10-31', '[TFM] (1.5h) R2: reúne de 10 a 15 fuentes para el marco teórico'],
    ['2026-11-01', '[EST] (1h) Resume en media página lo leído esta semana'],
    ['2026-11-01', '[TFM] (2.5h) R2: primera versión del marco teórico'],
    ['2026-11-02', '[TFM] (1.5h) R2: marco teórico, primer apartado'],
    ['2026-11-03', '[EST] (1.5h) Artículo de Palich, Cardinal y Miller sobre diversificación y rendimiento'],
    ['2026-11-04', '[TFM] (1.5h) R2: marco teórico, segundo apartado'],
    ['2026-11-05', '[TFM] (1.5h) R2: objetivos y pregunta de investigación'],
    ['2026-11-06', '[ENT] (1.5h) Lee los recursos de R1 de Entrepreneurship'],
    ['2026-11-07', '[TFM] (3.5h) R2: metodología, fuentes primarias y secundarias y herramientas de análisis'],
    ['2026-11-08', '[EST] (2.5h) Artículos de Teece y de Bocken et al. sobre modelos de negocio'],
    ['2026-11-08', '[TFM] (1h) R2: lee el borrador completo de principio a fin'],
    ['2026-11-09', '[TFM] (1.5h) R2: revisa la coherencia entre objetivos, marco teórico y metodología'],
    ['2026-11-10', '[TFM] (1.5h) Entrega R2 (límite hoy)'],
    ['2026-11-11', '[ENT] (1.5h) R1: borrador del lienzo del modelo de negocio'],
    ['2026-11-12', '[EST] (1.5h) Artículo de Shafer, Smith y Linder, The power of business models'],
    ['2026-11-13', '[ENT] (1.5h) R1: hipótesis a validar'],
    ['2026-11-14', '[EST] (2h) Artículos de Adner y de Miravitlles et al. (Fluidra)'],
    ['2026-11-14', '[ENT] (1.5h) R1: segmentos de cliente'],
    ['2026-11-15', '[EST] (2.5h) Módulos Modelos de negocio empresarial y Nuevos modelos de negocio'],
    ['2026-11-15', '[ENT] (1h) R1: problema y solución'],
    ['2026-11-16', '[EST] (1.5h) PEC 1: relee el enunciado y plantea el esquema de respuesta'],
    ['2026-11-17', '[EST] (1.5h) PEC 1: niveles de estrategia y estrategias de crecimiento'],
    ['2026-11-18', '[TFM] (1.5h) R3: lee enunciado y recursos y define la muestra'],
    ['2026-11-19', '[EST] (1.5h) PEC 1: diversificación y desarrollo externo e interno'],
    ['2026-11-20', '[ENT] (1.5h) R1: propuesta de valor'],
    ['2026-11-21', '[EST] (3.5h) PEC 1: termina la redacción y revisa'],
    ['2026-11-22', '[EST] (0.5h) Entrega PEC 1 (límite hoy)'],
    ['2026-11-22', '[TFM] (1.5h) R3: diseña la encuesta y el guion de entrevistas'],
    ['2026-11-22', '[ENT] (1.5h) R1: segmentos y canales'],
    ['2026-11-23', '[EST] (1.5h) R2 se desbloquea hoy: lee enunciado y planteamiento'],
    ['2026-11-24', '[TFM] (1.5h) R3: prepara y envía la encuesta a la demanda'],
    ['2026-11-25', '[ENT] (1.5h) R1: ingresos y costes'],
    ['2026-11-26', '[TFM] (1.5h) R3: agenda y haz entrevistas a proveedores'],
    ['2026-11-27', '[ENT] (1.5h) R1: plan de validación y métricas'],
    ['2026-11-28', '[ENT] (2h) R1: redacta la entrega'],
    ['2026-11-28', '[TFM] (1.5h) R3: entrevistas'],
    ['2026-11-29', '[ENT] (1h) R1: revisión'],
    ['2026-11-29', '[EST] (1h) R2: primeras lecturas de gobierno corporativo'],
    ['2026-11-29', '[TFM] (1.5h) R3: tabula las respuestas'],
    ['2026-11-30', '[ENT] (1.5h) R1: cierra la entrega'],
    ['2026-12-01', '[ENT] (1h) Entrega R1 (límite hoy)'],
    ['2026-12-01', '[TFM] (0.5h) R3: repaso del análisis'],
    ['2026-12-02', '[TFM] (1.5h) Entrega R3 (límite hoy)'],
    ['2026-12-03', '[EST] (1.5h) R2: lectura de recursos'],
    ['2026-12-04', '[EST] (1.5h) R2: lectura de recursos'],
    ['2026-12-05', '[EST] (2h) R2: esquema de respuesta'],
    ['2026-12-05', '[TFM] (1.5h) R4: análisis de los datos recogidos'],
    ['2026-12-06', '[EST] (1.5h) R2: primera parte'],
    ['2026-12-06', '[TFM] (2h) R4: resultados y gráficos'],
    ['2026-12-07', '[EST] (1.5h) R2: estructura del gobierno corporativo'],
    ['2026-12-08', '[TFM] (1.5h) R4: conclusiones preliminares (Festivo: movible)'],
    ['2026-12-09', '[ENT] (1.5h) Lee los recursos de R2 (marketing, ventas y sostenibilidad)'],
    ['2026-12-10', '[EST] (1.5h) R2: desarrollo'],
    ['2026-12-11', '[ENT] (1.5h) Lee el planteamiento y los recursos de R3 (pitch)'],
    ['2026-12-12', '[EST] (2h) R2: desarrollo'],
    ['2026-12-12', '[TFM] (1.5h) R4: discusión de resultados'],
    ['2026-12-13', '[ENT] (1.5h) R2: segmentos y propuesta de marketing'],
    ['2026-12-13', '[EST] (0.5h) R2: repaso'],
    ['2026-12-13', '[TFM] (1.5h) R4: redacción'],
    ['2026-12-14', '[ENT] (1.5h) Pitch: estructura y mensaje central'],
    ['2026-12-15', '[EST] (1.5h) R2: segunda parte'],
    ['2026-12-16', '[ENT] (1.5h) Pitch: guion'],
    ['2026-12-17', '[TFM] (1.5h) R4: borrador'],
    ['2026-12-18', '[EST] (1.5h) R2: segunda parte'],
    ['2026-12-19', '[ENT] (2h) Pitch: diapositivas'],
    ['2026-12-19', '[TFM] (1.5h) R4: borrador'],
    ['2026-12-20', '[ENT] (1h) Pitch: primer ensayo'],
    ['2026-12-20', '[EST] (1.5h) R2: segunda parte'],
    ['2026-12-20', '[TFM] (1h) R4: bibliografía y formato'],
    ['2026-12-21', '[ENT] (1.5h) Pitch: ensayo final'],
    ['2026-12-22', '[ENT] (1h) Entrega el pitch R3 (límite hoy)'],
    ['2026-12-22', '[EST] (0.5h) R2: repaso'],
    ['2026-12-23', '[TFM] (1.5h) R4: redacción'],
    ['2026-12-24', '[EST] (1.5h) R2: redacción'],
    ['2026-12-25', '[ENT] (1.5h) R2: mercado y canales (Navidad: movible)'],
    ['2026-12-26', '[EST] (2h) R2: redacción'],
    ['2026-12-26', '[TFM] (1.5h) R4: redacción'],
    ['2026-12-27', '[EST] (1h) R2: redacción'],
    ['2026-12-27', '[ENT] (0.5h) R2: ventas'],
    ['2026-12-27', '[TFM] (2h) R4: conclusiones'],
    ['2026-12-28', '[TFM] (1.5h) R4: conclusiones'],
    ['2026-12-29', '[EST] (1.5h) R2: revisión'],
    ['2026-12-30', '[ENT] (1.5h) R2: plan de marketing'],
    ['2026-12-31', '[TFM] (1.5h) R4: revisión'],
    ['2027-01-01', '[ENT] (1.5h) R2: ventas (Año Nuevo: movible)'],
    ['2027-01-02', '[TFM] (2h) R4: cierra el borrador'],
    ['2027-01-02', '[EST] (1.5h) R2: revisión'],
    ['2027-01-03', '[TFM] (1.5h) R4: revisión final'],
    ['2027-01-03', '[ENT] (1h) R2: sostenibilidad'],
    ['2027-01-03', '[EST] (1h) R2: revisión'],
    ['2027-01-04', '[TFM] (1.5h) R4: última revisión y formato'],
    ['2027-01-05', '[TFM] (1h) Entrega R4 (límite hoy)'],
    ['2027-01-05', '[EST] (0.5h) R2: revisión'],
    ['2027-01-06', '[ENT] (1.5h) R2: sostenibilidad (Reyes: festivo)'],
    ['2027-01-07', '[EST] (1.5h) R2: revisión'],
    ['2027-01-08', '[EST] (1.5h) R2: pulido'],
    ['2027-01-09', '[EST] (3.5h) R2: cierre final'],
    ['2027-01-10', '[EST] (1.5h) Entrega R2 (límite hoy)'],
    ['2027-01-10', '[ENT] (2h) R2: redacción'],
    ['2027-01-11', '[ENT] (1.5h) R2: redacción'],
    ['2027-01-12', '[TFM] (1.5h) R5: integra el feedback de R4 y fija la estructura'],
    ['2027-01-13', '[ENT] (1.5h) R2: redacción'],
    ['2027-01-14', '[TFM] (1.5h) R5: redacción'],
    ['2027-01-15', '[ENT] (1.5h) R2: revisión'],
    ['2027-01-16', '[ENT] (2h) R2: revisión'],
    ['2027-01-16', '[TFM] (1.5h) R5: redacción'],
    ['2027-01-17', '[ENT] (3h) Cierra y entrega R2 (límite hoy)'],
    ['2027-01-17', '[TFM] (0.5h) R5: notas para la semana'],
    ['2027-01-18', '[ENT] (1h) Lee Recap y cierre (se desbloquea hoy)'],
    ['2027-01-18', '[TFM] (0.5h) R5: capítulos pendientes'],
    ['2027-01-19', '[EST] (1.5h) PEC adicional: lee el enunciado'],
    ['2027-01-20', '[TFM] (1.5h) R5: capítulos centrales'],
    ['2027-01-21', '[EST] (1.5h) PEC adicional: desarrollo'],
    ['2027-01-22', '[TFM] (1.5h) R5: redacción'],
    ['2027-01-23', '[EST] (2h) PEC adicional: desarrollo'],
    ['2027-01-23', '[TFM] (1.5h) R5: revisión'],
    ['2027-01-24', '[EST] (1.5h) PEC adicional: cierre'],
    ['2027-01-24', '[TFM] (2h) R5: revisión final'],
    ['2027-01-25', '[TFM] (0.5h) Entrega R5 (límite hoy)'],
    ['2027-01-25', '[EST] (1h) Entrega PEC adicional (límite hoy)'],
    ['2027-01-26', '[TFM] (1.5h) R6, defensa: estructura de la presentación'],
    ['2027-01-27', '[ENT] (1.5h) Checkpoint síncrono: prepara qué contar'],
    ['2027-01-28', '[ENT] (1.5h) Checkpoint síncrono (hoy)'],
    ['2027-01-29', '[ENT] (1h) Entrega la actividad adicional (límite hoy)'],
    ['2027-01-29', '[EST] (0.5h) Revisa el feedback de la PEC 1'],
    ['2027-01-30', '[TFM] (3.5h) R6, defensa: guion y ensayo'],
    ['2027-01-31', '[TFM] (0.5h) Repasa los requisitos de la defensa y busca su fecha en el aula']
  ];

  for (var j = 0; j < dias.length; j++) {
    var d = dias[j];
    Tasks.Tasks.insert({
      title: d[1],
      due: d[0] + "T18:00:00.000Z"
    }, listaDiaria.id);
    Utilities.sleep(150);
  }

  Logger.log("¡Todas las tareas y entregas han sido creadas con éxito en Google Tasks!");
}
