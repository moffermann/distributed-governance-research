## 6. Evidencia computacional

Ponemos a prueba las tres predicciones de §5.3 —y, en experimentos sucesivos,
los supuestos de las Proposiciones 1–4— en una simulación basada en agentes.
Cada experimento (E1–E10) corresponde a un hallazgo:

| Exp | Qué pone a prueba | |
|---|---|---|
| E1 | ¿los topes de financiamiento suben la calidad? | Hallazgo 1 |
| E2 | ¿qué sostiene la calidad de la asignación? | Hallazgo 2 |
| E3 | ¿qué amortigua el decaimiento de la participación? | Hallazgo 3 |
| E4 | agregación distribuida vs. construcción central (refinada por una frontera de fricciones simétricas + captura, E4-v4/v5; y un mapa de robustez de cuatro escenarios de miopía al daño v1.14, §6) | Hallazgo 4 |
| E5 | valor entregado: selección × entrega, a presupuesto igualado | Hallazgo 5 |
| E6 | competencia reputacional y estándar de ejecución | Hallazgo 6 |
| E7 | comparación contra una línea base parametrizada por auditorías | Hallazgo 7 |
| E8 | robustez bajo participación conductual endógena | Hallazgo 8 |
| E9 | el conjunto completo de capas: planificación × selección × entrega (atribución de Shapley) | Hallazgo 9 |
| E10 | la capa de costo administrativo (presupuesto neto, simétrica) | Hallazgo 10 |

Simulamos 10.000 ciudadanos a lo largo de 24 ciclos mensuales asignando sobre un
conjunto permanente de 40 proyectos con calidad *θ*, saliencia *s* (medida
corr(*θ*, *s*) ≈ 0.24), ponderaciones de necesidad para la priorización *w* = λ*θ* + (1 − λ)*u*
(donde *u* es un componente idiosincrático de necesidad independiente de la calidad)
con peso de mezcla λ ∈ {0.4, 0.8} —medida corr(*θ*, *w*) ≈ 0.55 y ≈ 0.97
respectivamente— y escasez de 3× (solo una minoría de proyectos puede
completarse). Los evaluadores (2–10%) financian la mejor calidad que muestrean;
los seguidores de saliencia ven una superficie de descubrimiento de seis ranuras
ordenada por saliencia amplificada por el progreso de financiamiento; el
presupuesto de los seguidores de valores por defecto llena proyectos en orden de
prioridad de planificación. La regla de cierre por meta de financiamiento es
que puede activarse o desactivarse. Veinte corridas con semilla por condición; el código es sin
dependencias y determinista (`scripts/simulation/allocation-sim.mjs`; tablas
completas en [simulation-results](../research/simulation-results.md)).

**Estado cuantitativo: resultados separados por canal, ningún multiplicador calibrado.** El
único cociente anterior de valor por unidad de presupuesto conflacionaba calidad de
selección, fuga de entrega y costo administrativo, y se **retira como efecto calibrado**.
El programa reconstruido reporta los canales por separado: selección (E4), entrega con
presupuesto igualado (E5), una atribución condicional de tres capas (E9, dejando sin
cuantificar la magnitud independiente de la planificación) y costo administrativo (E10).
Todos son diferencias de puntos de referencia con paridad en cero; no se conserva ningún
multiplicador de desempeño institucional.

**La decisión prerregistrada rectora.** La **única computación confirmatoria** del artículo
fue una prueba de estrés limitada a la selección y con simetría restringida —no una prueba
de la arquitectura completa—. Igualó el conjunto de candidatos, los costos, el presupuesto,
el modelo de ruido de los reportes, la elegibilidad según la estimación propia, los
presupuestos esperados de reportes de tasación y la entrega en paridad. El brazo
distribuido conservó la cobertura endógena y su sesgo adverso de voz β; la tasación central
se distribuyó uniformemente y su ordenamiento conservó una presión de crédito acotada
λ ∈ {0.1, 0.2, 0.3} (el control separado con λ = 0 es todavía menor, mediana ≈ 0.016 —el
contraste sigue a la presión de crédito del central, coherente con crédito-versus-cobertura).
El central implementado fue un **lector de valor competente y consciente del daño** cuya
señal de valor muestreado era insesgada pero ruidosa: el parámetro de miopía al daño está
definido entre los parámetros del mundo, pero **el estimador central no lo utiliza**. La
prueba apaga así la ceguera al daño modelada del central y deja la construcción de agenda
fuera de su estimando con conjunto de candidatos fijo.

El contraste distribuido fue **positivo en las 18 celdas primarias**. Tres de los cuatro
criterios conjuntivos se cumplieron, incluido el criterio del límite inferior del bootstrap;
solo falló C2, porque la mediana agrupada Δ = 0.025 no superó el **umbral registrado de
reconstrucción de 0.05**. Bajo la regla congelada, el veredicto formal fue **negativo (no
continuar)**, con la consecuencia registrada de retirar el multiplicador cuantitativo y
tratar la simulación como una frontera condicional ilustrativa. **La falta de superación
del umbral activó la decisión registrada; la construcción determina su alcance.** El 0.025
es pequeño para el estimando de selección ensayado, pero no es una estimación ni una cota
inferior del efecto de Core v0 como arquitectura completa o en el dominio objetivo, y no
establece que sea pequeño fuera de esta prueba. El umbral de 0.05 es una regla de decisión
del programa de investigación, **no** un umbral calibrado de materialidad de política
pública. La asimetría hipotetizada de detección del daño está motivada por la literatura;
este estudio no calibra su prevalencia ni su magnitud. El mapa posterior de cuatro
escenarios utiliza un proceso generador distinto, es **exploratorio** y no modifica ni
revierte este resultado registrado. La prueba es estilizada: sus variables de valor y crédito son puntajes abstractos, no
visibilidad, trazabilidad, permanencia o valor público medidos. Su prerregistro congelado,
la regla de decisión, resultados y diagnósticos están en el Apéndice E4, el
[contrato de afirmación y estimando](../research/claim-and-estimand-contract.md) y
`scripts/simulation/e5-sp-symmetry-gate.mjs`. Las contribuciones fundamentales son la
arquitectura y el mecanismo cualitativo de crédito versus cobertura.

**El escenario de referencia declarado (E4 v1.14): un mapa de robustez exploratorio.** Cuando el selector
central se modela como lo describe la evidencia —su *dirección* en cada eje anclada en la
literatura (no su magnitud ajustada): casi ciego al *daño difuso en la cola larga de baja
visibilidad* (Hayek 1945; Scott 1998; Olson 1965; Bandiera, Prat y Valletti 2009, cuyo
**83% de desperdicio pasivo** en compras de bienes estandarizados muestra que la mayor
parte de la pérdida pública no es elegida), proyectando sus propias creencias previas y
sobreestimando beneficios visibles y tasables (Broockman y Skovron 2018; Flyvbjerg et al.
2003), y sesgado hacia el crédito reclamable (Mayhew 1974; Arnold 1990), en un espacio de
proyectos de cola pesada y baja visibilidad (Skuhrovec et al. 2013)— **la selección
distribuida basada en cobertura recupera cerca del 98% de la referencia voraz de
información completa del modelo frente al ~44% del central: un contraste de modelo
condicional de 54 puntos**, no una calibración empírica ni un efecto de campo (la
referencia es una normalización voraz, no una institución factible ni un óptimo de
bienestar). El resultado no depende de un ajuste preciso de los parámetros: es robusto en todo el espacio declarado;
sobrevive a la degradación realista de señal del *enrutamiento* presupuestario universal de Core
v0 (una composición ~5% reportes activos / ~35% microdelegación / ~60% reglas de perfil
— el *enrutamiento* universal es arquitectónico, la *información* independiente efectiva no lo
es); y se mantiene incluso otorgándole al central el paquete competente completo y
consciente del daño que la literatura le negaría —visión del daño, ausencia de sesgo,
precisión y sin crédito (~+14%). El central apenas supera a la cobertura, y solo **abandonando aún
más los supuestos declarados** —moviéndose también a un mundo casi sin daño donde el daño
difuso que la literatura documenta apenas existe; la idealización *espejo* del brazo distribuido (su propia
receta reflejada: señal perfecta, mundo con daño, central en su miopía declarada) gana
por goleada (~+118%). La única sensibilidad que reduce materialmente la brecha —sin
voltear su signo en el rango declarado— es el error correlacionado o de modo común en el brazo
de cobertura (una plataforma/recomendador compartido o delegación concentrada), que lleva
~+54% a ~+26% con correlación fuerte. Esta es la única condición *arquitectónica* del
mecanismo, no un mero parámetro barrido: **la cobertura sin diversidad de fuentes puede
reproducir el cuello de botella epistémico que pretende reemplazar.** Core v0 trata por
tanto la concentración de delegados, proveedores de perfil y recomendadores como
cantidades observables con umbrales de diversificación (§8), en vez de suponer
independencia por decreto. El mapa completo de cuatro escenarios, el anclaje literario, los
rincones idealizados espejo y la frontera de modo común están en el **Apéndice E4**. Este
mapa exploratorio no modifica el resultado registrado de la prueba; el modelo localiza una
frontera, no estima un efecto de campo.

**Hallazgo 1: los topes de financiamiento son un dispositivo anticoncentración,
no un dispositivo de calidad.** Con el cierre ACTIVADO, la concentración cae
(Gini de financiamiento 0.732 vs 0.759), el 5% de proyectos más saliente absorbe
menos (16.8% vs 19.6% de todo el financiamiento), y se completan un 15% más de
proyectos (25.3% vs 21.9%). Pero la selección de calidad no cambia
(*sel(θ)*, la correlación de Pearson entre proyectos entre la calidad latente θ y el
indicador binario de que un proyecto alcanza su meta de financiamiento, ≈ 0.39 vs
0.41): el excedente que deja de asignarse pasa hacia el siguiente
proyecto más *visible*, no hacia el siguiente *mejor*. La afirmación de la
arquitectura respecto de la regla de cierre debería estar —y en el corpus ahora
está— acotada en consecuencia.

**Hallazgo 2: el ancla por defecto, no la atención ciudadana, sostiene la
calidad de la asignación.** Una mezcla anclada en valores por defecto, con un
planificador casi perfectamente informado (r ≈ 0.97), alcanza sel(θ) ≈ 0.71 —
muy por encima de las configuraciones impulsadas por saliencia (≈ 0.35–0.43). En
cambio, subir la atención ciudadana de 2% a 10% casi no mueve la
aguja —a lo sumo ≈ 0.08 en los regímenes de saliencia, y prácticamente nada en
los anclados en valores por defecto—, mientras que degradar la calidad
informativa del vector de casi perfecta a moderada (r ≈ 0.97 → 0.55) cuesta ≈
0.29 de selección. Manda el ancla, no la atención.

Dos salvedades mantienen honesto el hallazgo:

- **Por construcción.** La regla por defecto es un asignador determinista ya
  correlacionado con θ que retiene la mayor parte del presupuesto; lo que se
  mide es el *condicionamiento* —cuánto determina la calidad informativa del
  vector el valor del ancla, y cuán poco lo sustituye la atención—, no la
  sabiduría de la multitud.

- **Robustez.** Un panel de sensibilidad (variando el tamaño de muestra del
  evaluador y la fuerza de la prueba social) muestra que el ordenamiento de
  regímenes es robusto, salvo bajo prueba social muy fuerte, donde los
  regímenes convergen dentro del ruido porque la amplificación fuerte también
  propaga la señal de calidad de los evaluadores. Las magnitudes dependen de
  los parámetros y no están calibradas; lo que sobrevive a todas las
  variaciones es el ordenamiento y el predominio de la calidad informativa de
  la priorización.

Este hallazgo cuantifica el apalancamiento concentrado en aquello que
construye la priorización de proyectos que sigue el tramo pasivo. Esa
priorización tiene dos capas —que un estudio complementario (Offermann 2026b)
separó por primera vez—: la categorización macro (el Ámbito de Planificación
de este corpus, que enmarca la elegibilidad y no porta pesos de presupuesto) y
los perfiles de asignación agregados que canalizan el presupuesto dentro de ella.
El arreglo distribuido es robusto a la calidad de esa categorización y el
central es frágil a ella, así que la ventaja sobre un statu quo central no es
fija: crece a medida que empeora la planificación central —una dirección interna
al modelo que el aparato complementario ilustra (un contraste condicional que se
amplía sustancialmente a medida que se degrada la categorización central, no un
multiplicador calibrado; véase la nota de estado cuantitativo en esta sección).

Dos hechos arquitectónicos acotan el enunciado y evitan una
sobreinterpretación tentadora. Primero, la capa por defecto es sustituible, no
obligatoriamente central: el autopiloto cívico ofrece a cada ciudadano
asignación manual, delegación, perfiles publicados, una regla automática
personal, o el valor por defecto del sistema; un ciudadano en incorporación
debe seleccionar o reconocer explícitamente un perfil base, y solo la porción
que nunca se involucra sigue necesariamente el valor por defecto del sistema
—que a su vez opera bajo un mandato de asignación registrado. Segundo, la
construcción centralizada de los pesos de ámbito es propiedad de los modos de
transición cerrado y tutelado, no de la arquitectura: los modos de operación
son estados configurados por país, y la trayectoria diseñada apunta hacia la
construcción abierta (el Hallazgo 4 mide su viabilidad dentro del modelo).

Los números establecen, por tanto, un condicional. La restricción vinculante
sobre la calidad de la asignación es la calidad informativa de la
**priorización que sigue la porción pasiva** —los perfiles de asignación
agregados, no un vector de planificación macro—, sea quien sea que la provea.
Un proveedor capturado o ignorante es el modo de falla; uno bien informado o
bien agregado, el activo. Aleatorizar esa priorización para escapar de la
captura no ayuda: logra neutralidad al precio de una calidad casi aleatoria
para la porción pasiva. Y como la trayectoria diseñada distribuye su
construcción (modo abierto) y la mantiene visible, versionada y sustituible,
la restricción se satisface por distribución, no por una agenda central. Esto
es distinto del punto más estrecho de fijación de agenda de la Sección 8, que
concierne solo a quién enmarca la elegibilidad.

E1–E3 no autorizan dos lecturas: el origen de la priorización queda sin
especificar (r es una propiedad del vector, no de una oficina estatal), y la
multitud modelada porta prueba social pero ningún conocimiento —de modo que
estos experimentos comparan atención frente a calidad de los pesos, no
conocimiento central frente a distribuido. El Hallazgo 4 hace esa comparación
de manera adecuada.

**Hallazgo 3: lo que amortigua el decaimiento de la participación es el nivel del
ancla, no hacia dónde fluye el peso de quienes se van —nuestra propia predicción
falló aquí.** Predijimos que la evaluación activa en decaimiento (10% a 2% a lo
largo de 24 ciclos) degradaría la asignación de manera gradual solo si la cuota
liberada fluía hacia los valores por defecto antes que hacia la saliencia.
Explotando semillas comunes a través de condiciones, el análisis emparejado
rechaza esto: el efecto del destino sobre la selección general es nulo en ambas
fuerzas de ancla (diferencias emparejadas medias 0.001 [−0.031, 0.033] y 0.021
[−0.028, 0.071]), y el único intervalo que excluye el cero es pequeño y de signo
opuesto (con un ancla fuerte, el destino de saliencia preserva la alineación de
ciclo tardío ligeramente mejor —plausiblemente porque la prueba social
amplificada también propaga la siembra de los evaluadores). Lo que gobierna la
robustez frente al decaimiento es la cuota estructural de la propia capa por
defecto, la variable del Hallazgo 2. El decaimiento del involucramiento —el
destino documentado de la participación en tecnología cívica (Hirschman 1970;
Peixoto y Fox
2016)— es un riesgo amortiguado aquí, pero el amortiguador es el tamaño de la
capa institucional, y la alineación de calidad dentro del ciclo aún se erosiona
en los ciclos más tardíos bajo todas las condiciones, de modo que el decaimiento
se compra, no es gratis.

**Hallazgo 4: las señales dispersas agregadas superan a la construcción central
de ancho de banda fijo del vector de pesos —pero una reexaminación justa y
simétrica resuelve la ventaja en una frontera condicional y añade una
resistencia a la captura que la protege.** Un cuarto experimento prerregistrado
(diseño y predicciones comprometidos antes de cualquier corrida;
`research/e4-institutional-knowledge-design.md`) modela el conocimiento de manera
simétrica en lugar de dotarlo: un planificador con ancho de banda fijo (treinta
inspecciones profundas; su correlación con la calidad latente es ahora una salida
medida, que se desploma de 0.81 → 0.37 → 0.17 a medida que el conjunto de
proyectos crece de 40 → 200 → 1000) frente a un treinta por ciento de la
ciudadanía que posee cuatro señales locales individualmente pobres cada uno
(ruido 0.35). Cinco regímenes comparten el mismo mundo y las mismas señales y
difieren únicamente en la institución de agregación. La predicción prerregistrada
de cruce por escala falló en la dirección informativa: la construcción abierta
del vector de pesos —un promedio simple de las señales ciudadanas por proyecto—
supera a la construcción central pura en *cada* escala, incluida la más pequeña,
donde el planificador inspecciona tres cuartas partes del mundo (sel(θ) 0.76 vs
0.62 con N = 40; 0.73 vs 0.04 con N = 1000). Doce mil señales ruidosas promedian
en un vector casi perfecto; treinta buenas inspecciones no pueden competir, y el
ancho de banda central fijo decae hacia la aleatoriedad a medida que el mundo
crece —una lógica de agregación de Condorcet (1785), y la tratamos como tal: las
condiciones de falla conocidas del teorema del jurado (Austen-Smith y Banks
1996) definen exactamente la frontera que el séptimo experimento pone a prueba.
Tres salvedades permiten interpretar el hallazgo con rigor. Primero, el mismo
conocimiento disperso *sin* una institución de agregación se desperdicia: el
régimen no coordinado financia el 0.6–15% de los proyectos y selecciona mal —el
resultado reivindica los mecanismos de agregación, no la ausencia de mecanismo, y
la capa de valor por defecto más cierre de Core v0 es exactamente uno de esos
mecanismos. Segundo, la agregación vence al ruido, no al sesgo: las señales son no
sesgadas por construcción, y un sesgo de modo común no correlacionado con la
calidad (desinformación, asignación expresiva) no se promediaría a cero —solo se
probó la contaminación endógena por prueba social, que resultó en gran medida
benigna porque el avance visible del financiamiento está él mismo correlacionado
con la calidad en un sistema bien anclado. Tercero, la elicitación es no
estratégica por supuesto; en el despliegue, el reporte de señales se convierte en
una superficie de manipulación y clientelismo, y la mecánica de la construcción
abierta de ámbitos sigue siendo un problema de diseño supeditado a condiciones.
Dentro de esos límites, el hallazgo apunta en una dirección clara: la variable vinculante no es quién sostiene la pluma sino cuánta
información dispersa ingiere la institución de construcción de ámbitos.

La simulación también disciplina la retórica —en ambas direcciones. Nada en
E1–E3 apoya describir la asignación de Core v0 como "la sabiduría de las
multitudes": la descripción honesta es *intermediación inspeccionable con un
valor por defecto corregible por la ciudadanía*, la cual los resultados muestran
que es a la vez realista y mejor que la alternativa impulsada por saliencia hacia
la que convergen las plataformas no estructuradas. Y nada en E1–E3 autoriza la
lectura opuesta —que el conocimiento de la planificación central vence al
conocimiento distribuido— porque nunca modelaron el conocimiento distribuido;
cuando E4 lo hace, la agregación gana allí donde se cumplen sus precondiciones
nombradas. Ambos discursos pierden su eslogan; el diseño conserva sus números.

*Una reexaminación justa y simétrica (E4-v4/v5).* Este primer E4 le dio al
central un ancho de banda de inspección fijo y dejó las señales ciudadanas sin
sesgo —dos idealizaciones que, como mostró una revisión adversarial, inclinan la
comparación a favor del brazo distribuido—. Un modelo reconstruido
(`scripts/simulation/e4-v4-symmetric-frontier.mjs`,
`research/e4-v4-symmetric-frontier-results.txt`, `research/e4-v5-capture-design.md`)
le da a *ambas* instituciones una fricción simétrica para percibir el valor
verdadero, incluido el daño: el central atenúa el daño percibido por un
coeficiente η (0 = ciego al daño difuso, 1 = un planificador plenamente
responsable), mientras el distribuido lee valoraciones verdaderas pero los
perjudicados difusos sub-participan a una tasa β (desigualdad de voz). El
resultado no es un multiplicador sino una frontera con un lugar de paridad en
forma cerrada (`research/e4-analytical-backbone.md`): ambas instituciones son
estimadores sesgados del mismo valor de Samuelson T = S⁺ − S⁻, que ordenan
proyectos por S⁺ − θ·S⁻ con θ_C = η y θ_D = 1 − β, de modo que el distribuido
domina exactamente cuando su coeficiente está más cerca del peso verdadero del
daño, que es uno —es decir, **β < 1 − η**—. La simulación confirma la ley
(paridad en la anti-diagonal η + β = 1) y cuantifica la degradación del valor
entregado fuera de ella (desde la paridad en la anti-diagonal hasta una ventaja
distribuida sustancial a lo largo de la región plausible del espacio de parámetros). La ventaja es así una propiedad de
*incluir a los perjudicados*, no de la agregación en sí; alcanza la paridad a lo
largo de la anti-diagonal β = 1 − η y se convierte en una victoria del central por
debajo de ella (β > 1 − η) —lo que absorbe la objeción del sesgo de participación
dentro del propio eje β del modelo en vez de dejarla externa.
Ningún extremo se asume: η se *barre*, no se fija, y un η bajo pero no nulo es un
régimen defendido, no una premisa. La literatura del daño difuso (los costos no
vistos de Bastiat 1850; la organización asimétrica de Olson 1965 en temas disputados; el
cuadrante de política clientelar de Wilson 1973; la legibilidad de Scott 1998) describe
*cuándo* los costos difusos quedan sin representar —cada una leída en su alcance
propio, no como un reclamo de ceguera global—, mientras la tesis opuesta de que
la competencia política disciplina al centro hacia la eficiencia (Wittman 1989)
es más débil justo en ese cuadrante clientelar. Empíricamente, la mayor parte de
la pérdida *medida* en compras públicas es pasiva —incompetencia, no robo
(Bandiera, Prat y Valletti 2009)—, consistente con un η bajo pero no nulo.

*La resistencia a la captura protege la ventaja (E4-v5).* Modelando la captura
organizada de forma simétrica —la objeción más dura de la revisión, aplicada en
justicia también al planificador central—, la asimetría se ensancha en vez de
cerrarse. Un grupo captura un proyecto de bajo valor solo cuando su renta
privada supera el costo de adquisición más la sanción esperada (Becker 1968);
con la asimetría de disuasión cargada enteramente por la probabilidad de
detección y el escalamiento de la adquisición (la pena mantenida igual, de forma
conservadora), el statu quo se vuelve perjudicial en términos netos con rentas cercanas al 10% del
costo del proyecto mientras el umbral distribuido —con piso en el wallet
igual para cada ciudadano, que el dinero puede persuadir pero no comprar— queda
sustancialmente más alto (forma cerrada en la nota del fundamento analítico). La
detección es una bola de nieve p = 1 − (1 − q)^m, así que su piso es un valor
esperado m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes del público afectado y
transparente —baja, pero esto es una afirmación interna al modelo cuya fuerza
depende enteramente de la brecha de detección estipulada (central ~0.10 vs
distribuido ~1.0), no de una carga de la prueba empírica: el análisis de
sensibilidad es decisiva aquí —la ventaja distribuida se angosta y puede
revertirse si la detección distribuida se lleva hacia ~0.3—, de modo que la
afirmación es que la recaptura organizada es más difícil bajo la transparencia del
brazo distribuido *dados estos parámetros*, no que quede descartada. Esto ata el Hallazgo 4 a la
capa de integridad del Hallazgo 5: la misma fiscalización que hace llegar el
valor es la que impide que las rentas organizadas recompren la ventaja de
asignación, de modo que ambos son una capa y su salvaguarda antes que
multiplicadores independientes. Toda magnitud aquí es interna al modelo; la
literatura (Olson 1965; Wilson 1973; Scott 1998; Bastiat 1850; Becker 1968;
Becker y Stigler 1974; Stokes 2005; Dyck, Morse y Zingales 2010; el monitoreo
por los propios usuarios de Ostrom 1990) defiende
la dirección, el mecanismo y el signo de la asimetría —no los números.

*Fundamento analítico.* Tres formas cerradas sostienen el análisis, cada una verificada
contra la simulación (`research/e4-analytical-backbone.md`); las corridas solo la
confirman y cuantifican la degradación fuera de los casos limpios. **(i) La ley
de paridad.** Escribiendo cada institución como un estimador sesgado que ordena
proyectos por S⁺ − θ·S⁻, el central conserva θ_C = η del daño percibido y el
distribuido revela θ_D = 1 − β (la tasa de participación se cancela del ordenamiento);
como el peso verdadero del daño es uno, el brazo distribuido entrega más valor
verdadero **si y solo si β < 1 − η**, con paridad en la anti-diagonal. Una lectura
sesgo-varianza *predeciría* que sobre la línea de paridad, donde el sesgo se
cancela, gana el estimador de menor varianza —el ruido de revelación del
distribuido es cero (cada quien conoce su propio valor), el ruido de proxy del
central no—. La simulación implementada **no** lo confirma en el rincón
responsable: en (η = 1, β = 0) el resultado medido es una leve **victoria del
central** (el distribuido queda apenas por debajo del central allí), así que la lectura honesta es la ley de paridad sin ruido
β = 1 − η, y el ladeo sesgo-varianza hacia el distribuido no se sostiene allí.
**(ii) El umbral de captura.** De renta >
adquisición + P(detección)·pena, el umbral del central λ\*_C = (k_c + p_c·f)/C
tiende a cero al reducirse su detección, mientras el del distribuido λ\*_D = k_d +
p_d·f/C tiene *piso* en el término de adquisición del wallet igual k_d; la brecha
de umbral con signo δ(C) = λ\*_D − λ\*_C se mantiene por ello positiva en todo el
rango plausible, ensanchándose a medida que el piso del wallet k_d pasa a dominar a
mayor costo del proyecto. **(iii) El piso de detección.** Con detección de bola de
nieve P = 1 − (1 − q)^m, superar una tasa central p_c requiere, en la aproximación
de *q* pequeño (Poisson) (1 − q)^m ≈ e^{−m·q}, un valor esperado
m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes —la condición Bernoulli exacta es
m ≥ ln(1 − p_c)/ln(1 − q), que depende de *m* y *q* por separado, no solo de su
producto. Es un piso de detección interno al modelo bajo los parámetros
estipulados (dependiente de la sensibilidad; véase el Hallazgo 4), no una inversión
empírica de la carga de la prueba. Tres invariancias acotan la inquietud de las magnitudes
arbitrarias —como propiedades de la *esperanza* sin ruido y de conjuntos grandes,
no de cada corrida de muestra finita: la ventaja es invariante a las unidades de
valor (escala); en esperanza depende del sesgo de voz β y no del *nivel* de
participación (aunque en muestras finitas la concurrencia cambia el tamaño de
muestra, la varianza de muestreo y por ende los ordenamientos y las carteras); y, como
solo entran los primeros momentos S⁺, S⁻ en el ordenamiento esperado, la extracción
de una distribución gaussiana de valoraciones es allí una conveniencia antes que un supuesto
determinante (las colas de muestra finita y la forma de la valoración aún pueden mover
ordenamientos). Un límite
honesto que marcan las corridas: la ley de paridad es el límite de conjuntos
grandes; cuando el conjunto interesado de un proyecto es muy pequeño —un puñado
de personas— la varianza de muestreo del distribuido domina y un central de censo
completo recupera la ventaja. Otros dos límites conviene declarar. La comparación
es *estática* —una sola ronda de asignación—, mientras que los daños reales
emergen a lo largo de ciclos iterados y retroalimentan por elecciones y auditoría,
de modo que un centro persistentemente ciego es el caso de estrés, no una
inevitabilidad. Y el brazo distribuido se *puntúa sobre el valor verdadero que
revela*, lo que sería circular si no fuera porque el sesgo de voz β y las
fricciones de captura hacen de su señal revelada una estimación sesgada y
disputable de ese valor, no una definicional.

*Posicionamiento.* El mecanismo de agregación de preferencias de primer óptimo
—Vickrey–Clarke–Groves (Vickrey 1961; Green y Laffont 1979)— es inviable para
presupuestos públicos (no mantiene el equilibrio presupuestario), de modo que tanto el
planificador central como Core v0 son instituciones de *segundo óptimo* (Lipsey y
Lancaster 1956); la comparación pregunta qué segundo óptimo entrega más, no si
alguno es óptimo. Core v0 en consecuencia no afirma ser inmune a la manipulación estratégica (*strategy-proof*) —imposible
para cualquier mecanismo no dictatorial (Gibbard 1973; Satterthwaite 1975)— sino
*resistencia a la captura bajo coordinación organizada acotada*. El wallet
igual para cada ciudadano lo ubica en la familia de mecanismos de votación que permiten expresar intensidad
(Casella 2012; Lalley y Weyl 2018) con una propiedad anti-plutocrática más nítida:
acota la influencia por *dotación igual* y no por precio convexo, así que el dinero
puede persuadir a los titulares de wallet pero no comprar wallets —exactamente el
piso de costo de adquisición k_d del umbral de captura—. Por último, la ventaja de
agregación es la lógica del jurado de Condorcet (1785) y depende de que se cumpla su condición de independencia (Austen-Smith y Banks 1996): la captura organizada es la violación
por error correlacionado de esa independencia, de modo que la capa de integridad
existe precisamente para defender el supuesto sobre el que descansa la agregación
distribuida. El primitivo de valor sigue las capacidades de Sen (1999) para *qué* se
agrega —libertades, no utilidad monetaria— mientras la *suma* descansa en Samuelson
(1954), una agregación a la que el propio Sen se opone; invocamos cada una solo donde
aplica.

*Calibración.* Las magnitudes son internas al modelo, y la brecha con los datos
define objetivos de calibración antes que estimaciones de campo. El 44–85% del valor alcanzable por el central
es un **objetivo de validación candidato que requiere un mapeo de constructo
explícito** —no una comprobación directa: la razón ex-post entre valor realizado y
valor tasado (las calificaciones del Grupo de Evaluación Independiente del Banco
Mundial; Flyvbjerg, Bruzelius y Rothengatter 2003) es un *constructo distinto* de la
selección central relativa a una referencia de información completa, así que unirlos
requiere un mapeo declarado antes de que uno pueda calibrar al otro; el sesgo de voz
β puede anclarse igualmente
a demografías medidas de presupuestos participativos, y a la sobrerrepresentación
documentada de participantes motivados y no representativos en procesos abiertos
(Einstein, Palmer y Glick 2019), en vez de asumirse. Y evidencia
de campo independiente apunta en la misma dirección que el modelo: el presupuesto
participativo en Brasil desplazó el gasto hacia saneamiento y salud y redujo la
mortalidad infantil con un presupuesto per cápita constante (Gonçalves 2014) —una
instancia real de asignación dirigida por ciudadanos entregando más valor real,
separable de cualquier magnitud que el modelo reporte. El apéndice de objetivos de
calibración vuelve visible la línea entre lo interno al modelo y lo anclado en datos.

**Hallazgo 5: la selección y la entrega se componen de forma multiplicativa —la
ventaja de la arquitectura es el valor entregado, no la selección por sí
sola.** Un quinto experimento
(`scripts/simulation/e4-v5/e5-delivery.mjs`, reconstruido sobre el motor
limpio de E4) añade la etapa de ejecución que los primeros cuatro omitieron,
como un régimen de entrega **independiente** cruzado con los dos regímenes de
selección —un diseño de cuatro celdas para evaluar cada capa por separado y en
conjunto sobre las *mismas* carteras financiadas. Los ejecutores tienen
tipos ocultos: una proporción de los ejecutores, intrínsecamente honesta, cumple con la entrega; los demás desvían
recursos cuando un valor de tentación extraído al azar supera el poder disuasorio del régimen `p·[(1−a(1−r)) + γ + R]`
(detección *p*, exposición del adelanto *a*, recuperación *r*, garantía *γ*,
capital reputacional *R*) —el balde con fugas de Okun (1975). La pérdida de
valor del régimen **opaco** de statu quo se ajusta por momento a la cifra de
~24% de gasto faltante de Olken (2007) (no identificada como bienestar); el
~30% de ineficiencia de la inversión pública del IMF (2015) es una pérdida de
proceso más amplia, y el ~87% de captura ugandesa de Reinikka y Svensson
(2004) es una cola, no el caso central. El régimen **verificado** es la
arquitectura: adelanto condicionado por hitos más garantía de desempeño,
retención, recuperación y capital reputacional —magnitudes declaradas,
direcciones de las Proposiciones 1–4.

Cada celda es un porcentaje de la misma referencia voraz de información
completa a entrega perfecta (un normalizador heurístico, no un óptimo), de
modo que no se reporta multiplicador compuesto. La eficiencia de selección
reproduce E4 (distribuido ≈ 98%, central ≈ 44% de la referencia); la
eficiencia de entrega es ≈ 78% opaca frente a ≈ 95% verificada. Si se interpretan como dos efectos principales en el mundo declarado, la capa de entrega añade ≈ 8
puntos bajo selección central y ≈ 17 bajo distribuida; la capa de selección
añade ≈ 42 puntos bajo entrega opaca y ≈ 51 bajo verificada. La interacción
es positiva: las dos capas **se componen de forma multiplicativa** —una
identidad contable (valor entregado = valor seleccionado × fracción
entregada, aplicada por proyecto), de la cual la interacción positiva es la manifestación del efecto de nivel, no un hallazgo independiente. La arquitectura
completa de **selección y entrega** supera al statu quo en ≈ +58.6 puntos de la referencia (intervalo
Monte Carlo condicional al 95% [+58.0, +59.2], que refleja solo la
variabilidad de simulación interna —la incertidumbre de mundo, forma
funcional y calibración no está incluida). Una versión anterior resumía esto
como un único multiplicador compuesto de valor por presupuesto; ese compuesto
se **retira**, y E5 reporta las capas como porcentajes separados.

Dos refinamientos sobreviven al escrutinio. Primero, la cobertura distribuida
de Core v0 no es solo una señal de selección: los ciudadanos que rutearon el
presupuesto también observan la entrega. Pero la cobertura comunitaria eleva
de forma creíble la *detección*, no la *recuperación* (la recuperación de fondos exige
seguimiento institucional), de modo que el dividendo de entrega solo-comunitario
es pequeño (una fracción de punto en el régimen de control débil;
Björkman y Svensson 2009, con réplicas fallidas; Molina et al. 2016); la
ganancia de entrega considerable viene del canal **formal** de recuperación
—el régimen verificado—, no de la mera observación ciudadana. Segundo, el desvío del
régimen verificado es **bajo pero no nulo** (≈ 2% de incidencia, ≈ 7% sin el
capital reputacional): una casos extremos de gran corrupción deja un remanente que el
control fuerte no elimina, coincidiendo con el hallazgo de Olken de que las
auditorías reducen la fuga sin borrarla (2007; Avis, Ferraz y Finan 2018;
Becker 1968) —disuasión ex ante, no un cero empírico. Dentro del mundo
PROBABLE, el resultado es estable entre semillas y bajo riesgo de entrega
**correlacionado con el costo o el tamaño** (el costo del proyecto es independiente del
valor modelado), y un barrido conjunto de parámetros de entrega,
condicional al mundo declarado, mantiene a la cobertura adelante en todo el
espacio muestreado. El valor entregado aquí se mide a *presupuesto igual*; el
*costo* administrativo de operar cada institución es una capa separada
(Hallazgo 10).

**Hallazgo 6: la visibilidad sostiene el estándar; los mercados reputacionales
ingenuos concentran más rápido de lo que seleccionan.** Un sexto experimento
prerregistrado (`research/e6-reputational-competition-design.md`) aísla el canal
de incentivos de la disuasión por completo —un escenario de preocupaciones de
carrera (career concerns) en el sentido de Holmström (1999): un conjunto de
ejecutores enteramente honestos con esfuerzo ajustable y sin posibilidad de
desvío (el modelo no tasa costo de esfuerzo explícito alguno; la minimización de
costos está codificada conductualmente como la regla de decaimiento del régimen
opaco). En el régimen opaco, el esfuerzo se desploma hacia la minimización de
costos
(0.49 → 0.24 a lo largo de veinticuatro ciclos) —no por malicia, sino porque el
esfuerzo no tiene retorno y no existe un estándar visible que imitar. Hacer
visible la calidad verificada sostiene el esfuerzo cerca de su nivel inicial, y
el régimen visible-competitivo produce una ganancia material de entrega impulsada
por la visibilidad frente a la línea base opaca —una
ganancia de incentivo pura con cero desvío en el modelo. Dos predicciones
prerregistradas fallaron de manera informativa. La visibilidad por sí sola porta
la mayor parte del efecto: el espejo precede al mercado (la regla conductual liga
la imitación a la visibilidad, de modo que parte de esto es por construcción
—pero la construcción codifica la afirmación de que la opacidad erosiona las
normas profesionales al eliminar el estándar mismo). Y la asignación ingenua
ponderada por reputación concentra el trabajo de manera dramática (Gini de
asignaciones 0.84 frente a 0.34) mientras rastrea la capacidad verdadera solo
débilmente —bloqueo por suerte temprana, la dinámica de ventaja acumulativa de
las cascadas de información reapareciendo en el mercado de ejecutores. La lección
de diseño corre en ambas direcciones: la visibilidad verificada es donde vive el
incentivo de calidad, y toda ponderación fuerte por reputación —humana o
algorítmica— necesita la observabilidad de la concentración, los pisos para
entrantes y la reputación normalizada por oportunidades que el corpus prescribe.
En Core v0, la reputación orienta las decisiones de los financiadores en lugar de
la asignación automática, con la concentración visible por construcción —y nunca
excluye: ninguna regla de protocolo impide a un financiador elegir a cualquier
actor admisible por motivos reputacionales.

**Hallazgo 7: una línea base parametrizada por auditorías — qué calibra y qué
no.** El ataque más agudo de la ronda de revisión del manuscrito
sostuvo que la línea base de cero-control es una caricatura —las administraciones
reales operan instituciones de auditoría, retenciones, fianzas e inspección— y la
respuesta fue un séptimo experimento prerregistrado
(`research/e7-calibrated-baseline-design.md`) con una condición de retiro
comprometida: si el resultado principal colapsaba contra una línea base justa,
sería retirado, no requalificado. El brazo del statu quo parametrizado por
auditorías toma sus parámetros de los hallazgos publicados de
instituciones de auditoría (un escenario informado por prácticas documentadas; la
verificación de algunas fuentes primarias está en curso) —detección a partir de los estudios de obras de la
contraloría de Chile, retención a partir de la práctica documentada de estados de
pago, recuperación a partir de la serie de la ASF de México, anclas de fuga
emparejadas por categoría con la construcción (Olken 2007; la base de evidencia
multipaís abarca la GAO estadounidense, la NAO británica, el Tribunal de Cuentas Europeo, el TCU y la CGU
de Brasil, y las contralorías de Chile, Perú y Colombia; Ferraz y Finan 2008)—
con el ancho de banda de inspección del planificador escalado al ámbito y el
sesgo coordinado de señales barrido como el régimen de falla de Condorcet. La
condición de retiro no se activó *dentro de este aparato*: contra la línea base
parametrizada por auditorías el compuesto anterior fue sustancial a escala pero solo
casi-paridad a escala de piloto municipal (10-40 proyectos), donde la selección central
con cobertura plena es competitiva y el caso descansa en la entrega y la medición. Pero la evidencia de auditoría *parametriza la fuga de la
línea base*; **no** calibra el efecto de tratamiento institucional de Core v0, que
la prueba prerregistrada de selección posterior no respaldó recalibrar (Sección 6)
—así que estas cifras de E7 se conservan como
salidas condicionales del aparato, no como un resultado principal aún vigente.
Dentro de este aparato, y condicional a su distribución estipulada de costos de
oportunistas y a su línea base sin memoria, un resultado cualitativo es
instructivo: a la intensidad de detección reportada por auditorías del modelo
(verificación de fuentes primarias en curso), sin memoria reputacional, el modelo no disuade desvío alguno —el
umbral de incentivos del régimen parametrizado por auditorías queda por debajo del
costo de todo oportunista modelado, de modo que su fuga iguala la del régimen de
cero-control, y en el modelo la detección añadida reduce la brecha de visibilidad
(de veintinueve a diecinueve puntos) en lugar de elevar el valor entregado. Estas
son salidas internas al modelo del aparato estipulado de E7, no un efecto causal
estimado de la auditoría del mundo real. La fuga del brazo parametrizado por
auditorías aterriza dentro de la banda de fuga reportada por auditorías (24-48% en
obras); la mecánica de fuga del modelo, alimentada con parámetros de auditoría, es
*consistente con* el rango documentado —esto parametriza la fuga de la línea base,
no calibra el efecto de tratamiento institucional. Y el barrido de sesgo
acota el reclamo de construcción abierta con honestidad: la selección distribuida
se degrada de manera casi lineal con la captura coordinada de señales y cae por
debajo de un planificador municipal competente de cobertura plena solo con una
cuota coordinada de aproximadamente el treinta por ciento —se degrada, nunca
colapsa, y sigue siendo superior en todas partes por debajo del diez por ciento.

**Hallazgo 8: el ordenamiento de arquitecturas sobrevive a la participación
conductual endógena.** Un octavo experimento prerregistrado (E8,
`research/e8-behavioral-participation-design.md`) reemplazó luego el lado de
participación de estos brazos —la cuota por defecto y la cuota informada que los
dos arquitecturas habían impuesto— con trayectorias de adopción generadas
por un estudio conductual complementario: un modelo basado en agentes conforme a Core
v0 de conciencia, registro, modos de participación y microdelegación confiada,
calibrado con distribuciones previas sintéticas elicitados mediante LLM (paquete de replicación:
el repositorio distributed-governance-experiments). El ordenamiento de
arquitecturas se mantiene invariable en las tres poblaciones sintéticas y todas
las escalas, incluida una trayectoria de lanzamiento que comienza con
participación cercana a cero —donde la capa por defecto ancla por construcción
los primeros ciclos con pocos participantes. El estudio conductual también reproduce de forma
independiente el supuesto de cuota informada que estos experimentos habían
impuesto: 0.309 emergente contra el 0.30 asumido.

**Hallazgo 9: el conjunto completo de capas —planificación, selección y entrega— y una
contabilidad honesta de lo que aporta cada capa.** Un noveno experimento
(`scripts/simulation/e4-v5/e9-fullstack.mjs`, construido sobre E5) añade la
tercera capa arquitectónica, la **planificación** (construir el marco de
elegibilidad y las cuotas de presupuesto por sector): E9 compara las versiones
central y distribuida de las tres capas en un factorial 2×2×2 aplicado a diez
sectores persistentes, el número de COFOG (United Nations 1999). Una atribución de Shapley descompone
la brecha entre el sistema completamente distribuido y el statu quo en contribuciones por capa que
suman exactamente a ella. En el mundo declarado PROBABLE el conjunto completo de capas
supera al statu quo en ≈ +57 puntos de la referencia [intervalo Monte Carlo
condicional al 95% +56.8, +58.1], y el desglose condicional de Shapley es
planificación ≈ +3, selección ≈ +43 y entrega ≈ +11 puntos.
Dos salvedades honestas rigen la lectura. Primero,
la atribución es *condicional*: cada valor de capa se calcula mediante el generador de sectores de planificación declarado, así que las cifras
autónomas y cuantificadas de **selección** y **entrega** son las de E5 (sin
capa de planificación); E9 aporta la *estructura* de tres capas y el *método*
de atribución. Segundo, **la selección y la entrega son grandes en PROBABLE
pero no robustas a través de los cuatro mundos nombrados** (PROBABLE,
PRO_CENTRAL, MYOPIA_OFF y PRO_DIST): la selección se vuelve
negativa en PRO_CENTRAL, y la entrega se vuelve negativa en PRO_DIST porque una
entrega más fuerte magnifica una cartera dañina. Pese a esas reversiones de
componente, la diagonal completa de Core v0 permanece positiva en los cuatro
—un hecho que el artículo reporta en lugar de ocultar. La descomposición por mundo
(atribuciones condicionales de Shapley a través del generador de sectores
declarado, puntos de la referencia):

| mundo | ganancia del conjunto completo | planificación | selección | entrega |
|---|---|---|---|---|
| PROBABLE | +57.1% | +3.1% | +42.7% | +11.3% |
| PRO_CENTRAL | +14.7% | +1.5% | −2.8% | +16.0% |
| MYOPIA_OFF | +44.7% | +2.5% | +29.5% | +12.6% |
| PRO_DIST | +172.6% | +4.8% | +169.1% | −1.4% |

El valor de la capa de
**planificación** opera principalmente a través de la **captura de agenda**
—el sistema central mantiene funciones enteras de alta necesidad y baja
visibilidad fuera del menú (la segunda cara del poder; Bachrach y Baratz
1962; Schattschneider 1960). Ese mecanismo es real y su *dirección* está
anclada (la taxonomía COFOG; el giro pre-electoral hacia el gasto visible,
Drazen y Eslava 2010; el descuido sistemático del mantenimiento y la
prevención, Rioja 2003), pero su *magnitud* no puede identificarse sin datos
presupuestarios de un país concreto. Por eso reportamos la planificación solo
como la contribución **condicional** de Shapley en la tabla anterior (≈ +3
puntos, pequeña y positiva a través de los mundos nombrados), **no como una
figura independiente anclada**: cuantificarla como efecto independiente con el
mecanismo apagado la subestimaría, y encendido aún no es anclable. Chile aporta una ilustración solo
cualitativa: el gasto en salud mental se mantuvo cerca del 2% del gasto en salud
durante 2007–2015, pese a ser los trastornos mentales la principal causa de
discapacidad del país (Errázuriz et al. 2015). Ese patrón es consistente con una subprovisión de baja
saliencia, pero ni identifica la captura de agenda ni calibra su magnitud; la
salud mental es una subfunción financiada, no una función COFOG de primer nivel
excluida.

**Hallazgo 10: el costo administrativo favorece a Core v0 —aproximadamente neutro
solo bajo un piso conservador de baja dispersión, una ventaja declarada bajo un escenario
de costos asimétrico.** Un décimo experimento (`scripts/simulation/e4-v5/e10-costs.mjs`) añade
el costo administrativo y de maquinaria que cada institución opera y que Core
v0 reemplaza en gran medida —los estudios que aproximan el valor mediante indicadores indirectos, el aparato de
asignación y priorización, y las licencias que carga el central, frente a la
propia plataforma y maquinaria de control de Core v0. El modelo trata estos
costos de tres maneras. Los resta del *presupuesto* de cada brazo antes de
seleccionar, por lo que la pérdida de valor es menos que proporcional porque la financiación
voraz corta primero los proyectos marginales; cobra la propia maquinaria de
verificación y recuperación de Core v0 en lugar de tratarla como gratuita; y
evita duplicar la fuga de entrega ya contabilizada en E5. Reportamos dos escenarios
**declarados** sobre perímetros de costo idénticos (solo costos de régimen en estado
estacionario —el **CAPEX de implementación inicial se excluye en lugar de amortizarse**).
Bajo un **piso conservador de baja dispersión** (κ_C = 0.08, κ_D = 0.05, ambos dentro de
una banda de overhead administrativo de 1–10%) la capa es aproximadamente neutra: el costo
administrativo mueve la brecha modelada de +58.6 a +57.7 puntos de referencia, una
contribución de −0.9 puntos. Pero esa baja dispersión es un piso deliberado, no el único
caso defendible. En estado estacionario, la maquinaria del central —estudios de tasación y
de indicadores indirectos de valor, la burocracia de priorización y asignación, las
aprobaciones, y los sueldos que la operan— es plausiblemente un gran overhead recurrente,
mientras que Core v0 corre sobre una plataforma digital más fiscalización asistida por IA
y aportada por ciudadanos a costo marginal casi nulo. Por eso se declara un segundo
**escenario de costos asimétrico** (κ_C ≫ κ_D), que se separa en dos afirmaciones.
Primero, una **diferencia de presupuesto neto supuesta**: bajo unas cuotas declaradas
κ_C = 0.12 frente a κ_D = 0.02, el costo operativo modelado del central en estado
estacionario supera al de Core v0 en cerca de una décima parte del presupuesto —un insumo
de escenario declarado, no un ahorro medido (y κ_C = 0.12 se lee como costo operativo
recurrente en sentido amplio —tasación, priorización, burocracia salarial—, no overhead
puro, pues queda justo por encima de esa banda de 1–10%). Segundo, su **efecto sobre el
valor entregado** es menor (cerca de +0.4 puntos de referencia sobre la brecha) porque ese
presupuesto liberado financia proyectos marginales de bajo valor (la sub-proporcionalidad
del presupuesto neto). Así que la lectura honesta no es "sin diferencia de costos": la
**dirección favorece a Core v0**; "aproximadamente neutro" solo se sostiene bajo el piso
conservador de baja dispersión; y el escenario de costos asimétrico declarado es una
ventaja de costo declarada —aunque modesta en bienestar y no cuantificada. Las cuotas de
costo son insumos de escenario declarados, no costos medidos específicos por brazo: la
dirección de la maquinaria central refleja la gran burocracia recurrente de
tasación/priorización documentada en cuentas de costos de administración pública; el lado
de la plataforma refleja el bajo costo operativo de sistemas públicos de compras
electrónicas establecidos (KONEPS, ChileCompra, ProZorro) y la fiscalización IA/ciudadana
de costo marginal casi nulo.

**Qué establece el programa computacional.** Reducido a lo esencial. **(1)** Las
contribuciones fundamentales son la arquitectura y el mecanismo cualitativo de crédito
versus cobertura: el ordenamiento central presionado por crédito subpondera el valor difuso
que la selección distribuida basada en cobertura sí visibiliza. **(2)** En conjunto, E5–E10
ubican la ventaja condicional en la selección y la entrega verificada, no en la carga
administrativa: E5 mide esos márgenes por separado sobre carteras apareadas; E9 aporta una
atribución condicional de conjunto completo de capas cuyos signos de componente varían por
mundo mientras la diagonal completa se mantiene positiva; y E10 deja el costo administrativo
aproximadamente neutro bajo un piso conservador de baja dispersión, con la dirección a favor
de Core v0 (una ventaja declarada, aunque modesta, bajo un escenario de costos asimétrico).
**(3)** Una extensión de robustez de cuatro escenarios (v1.14) —un análisis *separado y
exploratorio* bajo un proceso generador distinto— modela al central como lo describe
*direccionalmente* la evidencia (*casi ciego al daño difuso en la cola larga de baja
visibilidad*: Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009): la selección
por cobertura recupera ≈ 98% de la referencia voraz del modelo frente al ≈ 44% del central,
un contraste de modelo condicional reportado como puntos de referencia declarados, no
impacto calibrado. **(4)** El multiplicador compuesto de valor por presupuesto de una
versión anterior se retira aquí como efecto calibrado —bajo la regla prerregistrada
congelada, la única prueba confirmatoria de selección no superó el umbral de reconstrucción
de 0.05 (§6, Apéndice E4). La planificación queda sin resolver cuantitativamente —su
mecanismo de captura de agenda está direccionalmente anclado, pero su magnitud independiente
se difiere deliberadamente en vez de fabricarse a partir de un escenario no anclado.
Cualquier efecto calibrado de valor total entregado sobre datos reales sigue siendo
trabajo futuro.

