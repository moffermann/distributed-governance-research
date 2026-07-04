# Manuscript v1.6 review — Non-expert educated reader profile (raw, verbatim, 2026-07-04)

**Revisión — lector culto no especialista — paper v1.6**

**Perfil del revisor**: Ingeniero/profesional con buena cultura general (lector de The Economist y ensayo largo), voto, pago impuestos, sin formación en economía ni ciencia política.

**Lo que entendí que propone el paper (en mis palabras)**
En vez de discutir si el Estado debe ser más grande o más chico, el autor propone mirarlo como un edificio de "capas" de funciones y preguntarse cuáles todavía necesitan una autoridad central y cuáles ya se pueden repartir entre los ciudadanos gracias a la tecnología. Se concentra en una capa concreta y espinosa: decidir en qué se gasta una parte del presupuesto público, ejecutarlo y verificar que de verdad se hizo. Diseña un sistema (Core v0) donde cada ciudadano recibe una "billetera cívica" para asignar plata a proyectos, donde quien ejecuta la obra nunca elige ni paga a quien lo fiscaliza, y donde el dinero se libera de a poco, solo contra pruebas de que se cumplieron hitos. Lo distintivo es la honestidad del método: sometieron el diseño a 35 "ataques" documentados y a seis simulaciones por computador, varias de las cuales refutaron las propias predicciones de los autores. La conclusión estrella es que el sistema completo entrega 2,19 veces más "valor social por peso gastado" que el sistema opaco actual.

**Dónde me perdí (sección exacta y motivo)**
- **Abstract (líneas 9-64)**: un solo bloque de casi 60 líneas con una oración que se extiende más de veinte. Me perdí en la enumeración de los seis experimentos antes de saber qué es el sistema. Tuve que releerlo después de terminar el paper. Un abstract no debería exigir haber leído el paper.
- **Sección 5.2, Proposición 4 (líneas 396-413)**: acepto la desigualdad de fe, pero los tres corolarios en prosa densa ("Corroboration substitutes for reputation capital", etc.) me exigieron releer tres veces. El puente en lenguaje llano existe pero está tan comprimido que no ayuda.
- **Finding 2 (líneas 450-498)**: el párrafo más largo y difícil del paper. Mezcla el resultado, dos "qualifications", una autocrítica a un borrador anterior y dos hechos arquitectónicos que "acotan" la afirmación. Para el final ya no recordaba cuál era el hallazgo.
- **Encabezado de la Sección 6 (líneas 428-439)**: aparece de golpe todo el vocabulario técnico (θ, s, w, λ, "sel(θ)", Gini, "corr") sin una frase que diga en castellano "vamos a medir la calidad de los proyectos que reciben plata". Aquí es donde más sentí que el paper dejó de hablarme.

**Términos que me frenaron**
- **"weight vector" / "the vector's informational quality"**: concepto central de medio paper y nunca se explica en una frase simple. Deduje "la lista de prioridades que dice qué proyectos importan más", pero tuve que inferirlo.
- **"default layer" / "default anchor" / "the anchor"**: se usan casi como sinónimos y cambian de nombre.
- **"sel(θ)"**: el número que más importa y nunca se traduce a "cuánta plata fue a los proyectos realmente buenos".
- **"salience" / "social proof" / "cascades"**: se usan antes de aclararlos.
- **"agenda-setting" y "second face of power"** (cita a Bachrach y Baratz): supone que sé qué es la "segunda cara del poder".
- **"nirvana fallacy", "credence goods", "moral hazard"**: jerga sin glosa.
- **"tutored / closed / semi-open / open modes"**: "tutored" (tutelado) me costó.

**¿El abstract cumple lo que promete?**
Sí en contenido —de hecho entrega más honestidad de la que un abstract típico prometería, porque reporta predicciones fallidas—. Falla en forma: promete demasiado de golpe y en un formato ilegible. El paper es más persuasivo que su propio resumen.

**¿El 2,19× es evaluable o acto de fe?**
Parcialmente evaluable, y es lo mejor del paper: entiendo cómo se construye (multiplicación de dos efectos, mejor selección × mejor ejecución verificada, en un 2×2, 0,859 contra 0,393). Pero sigue siendo acto de fe en un punto decisivo: todo ocurre dentro de una simulación cuyos parámetros el propio paper admite "plausibles, no calibrados" (línea 764). El 2,19× no es una medición del mundo; es el resultado de un modelo con supuestos que los autores eligieron. La cifra tiene un aura de precisión empírica ("2,19×", "veintinueve puntos porcentuales") que choca con que nada de esto ha pasado en la realidad. Un lector apurado se lo llevará como hecho medido, y no lo es; me habría ayudado que siempre viniera con un "en el modelo". Además, el propio texto (líneas 588-592) admite que el efecto de selección está inflado porque la planificación central con 200 proyectos es "casi aleatoria": si una mitad del producto está inflada, el 2,19× hereda esa inflación. Lo reconocen con elegancia, pero entonces el titular no debería aparecer limpio.

**Dónde me convenció / dónde sobrevivió mi escepticismo**
Me convenció:
- La regla de que el ejecutor nunca elige ni paga a su fiscalizador (línea 306): idea simple y estructural; no pides honestidad, cambias quién paga a quién.
- El reporte de predicciones fallidas (Findings 3, 5, 6). Que digan "predijimos X y el modelo dijo que no" me subió mucho la confianza. Un vendedor lo esconde; un investigador lo publica. Es lo que más me hizo creer en el resto.
- Medir la estrangulación fiscal en vez de pretender impedirla (línea 731): honesto y realista.

Sobrevivió mi escepticismo:
- La brecha entre la elegancia del modelo y el mundo real: todo cuelga de que exista un mercado de fiscalizadores independientes y competentes. El paper lo admite (líneas 738-744), pero en muchos países ese mercado no existe. "It cannot conjure verifiers" es honesto y a la vez una admisión de que puede no funcionar donde más se necesita.
- El agenda-setting (Sección 8, líneas 681-712): el propio paper dice que quien arma el "scope" tiene la palanca más grande, y que en los pilotos eso lo hace la autoridad central. O sea: en la versión que de verdad se probará, la pieza más poderosa sigue centralizada. Resuelve brillantemente ejecución y verificación, pero la pregunta política de fondo —quién decide qué se puede financiar— queda para el "modo abierto", explícitamente sin diseñar (líneas 754-759).
- El sesgo del creador: el mismo equipo diseñó el sistema, los ataques y las simulaciones que lo validan. Transparentísimo sobre esto (línea 761), pero la transparencia lo etiqueta, no lo elimina.

**La pregunta con la que me quedé al terminar**
Si la pieza más poderosa —quién define qué proyectos pueden existir— sigue en manos de la autoridad central durante todos los pilotos, y el "modo abierto" que la descentralizaría está reconocidamente sin diseñar: ¿en qué se diferencia esto, en la práctica y hoy, de un presupuesto participativo bien auditado? ¿Cuánto del 2,19× viene de la parte verdaderamente novedosa (repartir el poder) y cuánto de simplemente auditar mejor, algo que un gobierno podría hacer sin ceder ningún poder? Me convenció de que auditar mejor rinde; no me terminó de convencer de que la parte "distribuida" sea la que hace el trabajo pesado.

**Puntajes**
- Claridad para no especialistas: **2,5 / 5** (ideas accesibles, pero la prosa las entierra en jerga y párrafos-monstruo)
- Estructura: **3 / 5** (arco general lógico, pero abstract y Finding 2 sobrecargados)
- Persuasión honesta: **4,5 / 5** (el reporte de fracasos y los límites explícitos son ejemplares; pierde medio punto porque el 2,19× se presenta más limpio de lo que el propio texto justifica)
- Ganas de compartirlo: **3 / 5** (compartiría la idea con entusiasmo; no este documento con un amigo no especialista, porque no lo terminaría)

**Veredicto final**
Trabajo intelectualmente serio y admirablemente honesto: rara vez un autor documenta con tanto rigor dónde se equivocó. Pero está escrito para colegas del área, no para el ciudadano ilustrado que —irónicamente— es el sujeto de todo el diseño; la jerga y los párrafos de sesenta líneas me expulsaron varias veces. Y su cifra estrella, el 2,19×, es más frágil de lo que su presentación sugiere: vive dentro de un modelo no calibrado y depende de un supuesto (fiscalizadores independientes disponibles) que el propio paper admite que no puede garantizar.
