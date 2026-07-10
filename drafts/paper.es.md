# Una Arquitectura Funcional para la Gobernanza Distribuida: Diseño de Mecanismos, Validación Adversarial y Evidencia Computacional para la Distribución Institucional Selectiva

**Working paper — v1.13 (julio de 2026; última versión depositada: v1.12, DOI 10.5281/zenodo.21252911). Esta versión retira el multiplicador compuesto de valor por peso como efecto calibrado —una prueba de estrés pre-registrada, simétrica y solo-de-selección, dio NO-GO (véase §6 y el contrato de afirmación y estimando)— y se apoya en la arquitectura y el mecanismo cualitativo. Consolida el programa computacional complementario (Offermann 2026b): la regla de complementariedad de la disuasión, la curva de transición semi-abierta, la regla de liberación presupuestaria y la verificación por máquina con segunda instancia humana; y la separación en dos capas del artículo compañero entre la categorización macro y los perfiles de asignación, bajo la cual el brazo distribuido es robusto a una mala categorización central mientras que el brazo central es frágil ante ella. Revisado a través de ciclos sucesivos de revisión adversarial y de autor, documentados en la hoja de ruta del repositorio.**

*Traducción al español del working paper v1.13 (drafts/paper.md, versión autoritativa en inglés).*

*© 2026 Mauricio Offermann. Licenciado bajo CC BY 4.0 — véase LICENSE.md en la raíz del repositorio. Se ruega citar según se indica en CITATION.cff. DOI (de concepto, siempre resuelve a la última versión): 10.5281/zenodo.21193846.*

## Resumen

Los Estados no recaudan impuestos para redistribuir, sino para mejorar la
calidad de vida de las personas: lo que importa es el valor efectivo que llega
por cada peso público gastado. De ahí la pregunta de este paper: **¿puede la
tecnología de hoy rediseñar la arquitectura del Estado para aumentar ese valor
entregado?**

La respuesta no pasa por *más, o menos Estado*, sino por su **arquitectura**:
descomponer la actividad estatal centralizada en capas, distribuir algunas
donde la tecnología de coordinación de hoy supera al monopolio institucional,
y alinear los incentivos correctamente para que lo asignado efectivamente se
entregue.

Presentamos **Core v0**, una arquitectura de software orientada a optimizar
cómo el presupuesto público se asigna y se convierte en valor efectivo para
las personas: los ciudadanos dirigen una parte de los impuestos de un
presupuesto previamente aprobado por la autoridad hacia proyectos
verificables; los roles de proponer, ejecutar, producir evidencia y auditar
están separados; el dinero se libera directamente desde tesorería al ejecutor,
por tramos, contra hitos verificados y garantías exigibles; y cada acto
relevante deja un rastro público y auditable.

El modelo identifica tres resultados (distintos de los Hallazgos 1–7 numerados de
la Sección 6) —una ventaja de asignación, una
resistencia a la captura que la protege, y una capa de entrega que hace llegar
el valor—, cada uno enunciado como una frontera condicional, no como una
constante.

**(1) Elegir distribuidamente asigna mejor —donde le da al perjudicado difuso
más voz de la que el status quo reconoce a su daño.** La asignación distribuida
—elección directa, microdelegación o reglas personalizadas— correlaciona más
con el valor que efectivamente reciben los beneficiarios que la asignación
central. Pero *mapeamos* esa ventaja en vez de afirmar un solo número: obedece
a una ley simple —el distribuido domina exactamente cuando la desigualdad de
voz de la plataforma es menor que la ceguera del planificador central al daño
difuso (β < 1 − η)—, y va en el modelo desde la paridad hasta cerca de **1.8×**
(un cociente distribuido-a-central), máxima donde el daño es difuso e invisible, y
alcanzando la paridad a lo largo de la frontera β = 1 − η —p. ej. donde un
planificador plenamente responsable (η→1) es igualado por una plataforma de voz
plena (β→0), *no* por una que silencia a los perjudicados. La ventaja es una
propiedad de *incluir a los perjudicados*, no de la agregación en sí.

**(2) Esa ventaja de asignación resiste la captura organizada —la objeción que
más presionó una revisión adversarial.** La revisión exigió modelar la captura
en el lado distribuido; en aras de la justicia la modelamos también en el lado
central, simétricamente —y la asimetría entonces se *ensancha* en vez de
cerrarse—. En el modelo el status quo se vuelve net-dañino cuando las rentas
privadas de un proyecto capturado alcanzan cerca del **10% de su costo**,
mientras el brazo distribuido resiste rentas cerca de **10× mayores**: su costo
de captura tiene piso en el wallet igual-por-ciudadano (el dinero no compra
wallets, solo persuade a quienes los tienen) y su fraude queda expuesto por una
detección que solo necesita un puñado de denunciantes de un público afectado y
transparente. Esto invierte la carga de la prueba —para derrotar al brazo
distribuido, un crítico debe suponer una apatía cívica casi total entre personas
estafadas de un beneficio que les correspondía.

**(3) Alinear los incentivos hace que el valor llegue —y es la precondición, no
un segundo multiplicador.** El ejecutor entrega, y no desvía, cuando arriesga
más de lo que podría robar: pagos por tramos contra hitos verificados,
retenciones, garantías exigibles, reputación y fiscalización cruzada,
formalizados como condiciones que se pueden chequear. A igualdad de proyectos,
en el modelo esta capa añade **~43% (1.4×)** de valor *(un contraste interno del
modelo, no un efecto calibrado)* —y es la misma maquinaria de integridad la que
hace resistente a captura a la ventaja de asignación, de modo que asignación y
entrega son una capa y su salvaguarda, no dos efectos
independientes que se multiplican.

**Sobre la magnitud — una corrección.** Una síntesis anterior combinó estas capas
en un solo multiplicador de valor por peso. Una **prueba de estrés posterior,
pre-registrada, simétrica y solo-de-selección** —ambos brazos con **presupuestos
esperados de reportes de tasación igualados**, el mismo pool de proyectos, costos
y ruido, **entrega mantenida en paridad**, cada uno actuando sobre su propia
estimación ruidosa y no sobre la verdad— encontró que la diferencia
distribuido-menos-central es **positiva en todas las celdas pre-especificadas pero
pequeña: la mediana agrupada pre-registrada Δ = 0.025, por debajo de su umbral de
materialidad pre-registrado de 0.05** (una estimación post-hoc de ratio-of-sums es
Δ = 0.026, con un intervalo Monte-Carlo por conglomerado-de-mundos al 95%
[0.023, 0.029]). Por lo tanto **retiramos el
multiplicador compuesto como efecto calibrado**; las cifras del modelo basado en
agentes anterior sobreviven solo como salidas condicionales de ese aparato
(reportadas en la Sección 6), no como una estimación de cuánto eleva el valor la
arquitectura. Las contribuciones que cargan el peso son la **arquitectura** y la
**dirección** del mecanismo —la selección central presionada por el crédito asigna
peor que la selección distribuida basada en cobertura—, no un multiplicador puntual.

La arquitectura fue sometida a **crítica adversarial sistemática**: cuarenta y tres
ataques, cada uno con su defensa y una resolución que *o* agrega un mecanismo
*o* declara un límite con su riesgo; las rondas finales fueron el método
aplicado a sí mismo, con revisiones externas simuladas cuyas preguntas sin
respuesta se volvieron nuevos ataques. La evidencia es simulada sobre un
*modelo* de la arquitectura —no prueba institucional ni piloto real; los
límites se declaran a lo largo del texto.

## 1. Introducción

Los Estados modernos concentran tres cosas que no necesitan estar juntas: la
autoridad para decidir en qué se gasta el dinero público, la capacidad para
ejecutar ese gasto, y el poder de certificar que sirvió de algo. Cuando las
tres viven dentro de una misma jerarquía, la rendición de cuentas se reduce a
que ella misma se audite (Bovens 2007). Las consecuencias son predecibles y
están documentadas en toda la economía política —asignación discrecional,
cumplimiento autorreportado, captura por intereses concentrados y desconfianza
ciudadana—: desde la captura regulatoria (Stigler 1971; Laffont y Tirole 1991)
hasta la auditoría vuelta ritual (Power 1997) y las coaliciones distributivas
que se atrincheran en los sistemas políticos estables (Olson 1982).

Estas fallas no son abstractas: son la razón por la que el valor no llega a
las personas para quienes se recaudó. Los Estados no cobran impuestos para
redistribuir, sino para mejorar la vida de la gente —y quitarle al rico no
mejora al más vulnerable; lo mejora el valor efectivo que recibe—. Si la obra
no se construye, o se construye mal, la redistribución no ayudó a nadie: el
balde agujereado de Okun (1975) cargó agua que nunca llegó. El objetivo,
entonces, no es cuánto se gasta, sino cuánto valor efectivo llega por cada
peso público gastado.

El debate estándar responde con cantidad: encoger el Estado o hacerlo crecer.
Ambas posturas lo tratan como un objeto único. Este artículo sostiene que la
pregunta tratable es arquitectónica, no de tamaño: *¿qué capas de la actividad
estatal aún requieren monopolio central, y cuáles pueden hoy distribuirse —con
mejor rendición de cuentas que el statu quo— ahora que la coordinación digital
ha desplomado los costos de transacción que antes justificaban la jerarquía?*
(Coase 1937; Hayek 1945; Williamson 1985). Es una pregunta con linaje —dónde
deben residir las decisiones cuando el conocimiento está disperso—, del debate
del cálculo económico (Mises 1920) al conocimiento disperso de Hayek y su
tratamiento institucional en Sowell (1980): las decisiones deben vivir donde
está el conocimiento, disciplinadas por la retroalimentación más que por la
orden jerárquica. Las garantías de derechos, la fuerza legítima, la
estabilidad macrofiscal y la adjudicación exigible plausiblemente siguen
siendo centrales; el procesamiento de información, la asignación de recursos a
nivel de proyecto, la ejecución de servicios, la producción de evidencia y la
auditoría, plausiblemente no.

Hacemos el argumento como un diseño concreto, no como un manifiesto. Core v0
es una arquitectura de referencia completa para distribuir una capa acotada
—la asignación, ejecución y verificación de una cuota, con mandato legal, de
un presupuesto público existente—, desarrollada hasta el nivel de objetos
nombrados, máquinas de estado y reglas de decisión (un corpus de más de cien
documentos de arquitectura, cincuenta y nueve hipótesis diseñadas y cuarenta y tres
revisiones adversariales, todo público). La ciudadanía recibe una capacidad de
asignación periódica y no retirable en una billetera cívica (civic wallet);
los proyectos atraviesan un ciclo de vida de cierre paralelo, en el que
financiamiento, fiscalización independiente, compromisos de evidencia y
confirmación de beneficiarios deben cerrar todos antes de la ejecución; el
ejecutor nunca elige ni paga a sus propios auditores —lo que elimina el costo
de agencia del cumplimiento auto-supervisado (Jensen y Meckling 1976)—; el
dinero solo se mueve sobre hitos revisados, con retención y garantías
materializadas externamente; y toda transición de estado relevante queda
registrada en un rastro legible por la ciudadanía y auditable por expertos.

El *ejecutor* —quien realiza el proyecto, sea una obra, un servicio de cuidado
de personas o un programa educativo— puede ser un servicio público, un
municipio, una fundación, una cooperativa o una empresa, según lo defina la
normativa de la autoridad implementadora, bajo una condición: competencia no
monopólica y honesta, con quiebras y consecuencias para quien incumple. Y la
cuota que cada ciudadano dirige la fija una fórmula pública y versionada que
elige la autoridad; su opción simple es *igual para todos los ciudadanos
elegibles*, bajo la cual nadie compra más influencia con más dinero.

Un ejemplo concreto. Supongamos que un municipio destina recursos a programas
de cuidado para adultos mayores en situación de vulnerabilidad. Hoy, entre el
peso que se asigna y la ayuda que efectivamente llega hay una brecha donde se
pierde valor. Bajo esta arquitectura, cada vecino puede dirigir parte de sus
impuestos al programa que prefiere; la fundación, cooperativa o servicio que
lo ejecuta cobra por tramos, y solo cuando un verificador que ella no eligió
confirma que la ayuda llegó; y cada paso queda público y auditable.

Lo que vuelve investigación a un ejercicio de diseño es el rigor al que se lo
somete, bajo una disciplina transversal: cada afirmación se evalúa contra cómo
la institución actual resuelve el mismo problema, no contra un ideal,
bloqueando la falacia del nirvana —comparar la institución real contra un
ideal inalcanzable, no contra la alternativa disponible— en ambas direcciones
(Sección 2). Nuestras contribuciones son:

1. **La distribución de la capa de asignación.** El aporte central de diseño:
   aplicar el principio de distribución funcional a la asignación de recursos
   —los ciudadanos dirigen su cuota directamente, la delegan, o la gobiernan
   con reglas personales—, instanciado como una arquitectura de referencia
   completa (Core v0).

2. **Formalización de los mecanismos de incentivos** (Sección 5). Modelamos el
   desembolso supeditado a hitos como un juego principal-agente y derivamos su
   condición de compatibilidad de incentivos; modelamos el soborno de
   fiscalizadores asignados por protocolo y derivamos una condición a prueba
   de colusión bajo k-corroboración; y demostramos dos estáticas comparativas
   relevantes para el diseño: la verificación débil debe compensarse con
   términos financieros, y las garantías son contraproducentes cuando la
   calidad de detección cae por debajo del costo del capital. Hitos,
   retención, garantías y memoria reputacional forman la pila de disuasión del
   diseño.

3. **Evidencia computacional** (Sección 6). Una simulación basada en agentes,
   sin dependencias y con semilla fija, de 10.000 ciudadanos pone a prueba los
   supuestos conductuales de la arquitectura bajo ignorancia racional,
   atención limitada al descubrimiento y cascadas de prueba social. Los
   resultados disciplinan el diseño: apoyan algunas afirmaciones, afilan
   otras, cuantifican el apalancamiento concentrado en la capa de construcción
   de ámbitos, miden una construcción abierta viable de ella, y llevan la
   comparación de extremo a extremo: desde la asignación hasta el valor social
   entregado por unidad de presupuesto —el criterio que la redistribución
   existe para satisfacer. En el modelo, la entrega verificada y la
   priorización social interactúan en lugar de solo sumarse; el aparato basado
   en agentes anterior produjo un compuesto de 2.22× una línea base del statu
   quo parametrizada a partir de los hallazgos publicados de instituciones de
   auditoría (1.4–1.6× a escala de piloto municipal). **Retiramos ese compuesto
   como efecto calibrado**: una prueba de estrés pre-registrada, simétrica y
   solo-de-selección reduce la ventaja de selección distribuido-menos-central a
   un efecto agrupado de ~0.026 de un benchmark de información completa, por
   debajo de su umbral de materialidad de 0.05. La contribución que carga el
   peso es la arquitectura y la *dirección* del mecanismo, no el multiplicador.

4. **La revisión adversarial como método** (Sección 7). La arquitectura fue
   atacada sistemáticamente: cuarenta y tres resúmenes de ataque anclados en las
   literaturas de ciencia política, economía y derecho, cada uno respondido
   por una defensa emparejada y resuelto bajo una regla explícita de
   integrar-o-acotar, con cada resolución propagada a través del corpus y el
   registro completo de revisión público por construcción. El bucle es una
   autocrítica estructurada, no validación externa, y así lo decimos; lo proponemos, junto con su regla de terminación y a la espera de validación externa independiente, como una propuesta metodológica preliminar para la investigación en diseño institucional.

El estudio complementario mide tres efectos que amplían esta arquitectura: la
ablación de la pila de disuasión (sus términos son individualmente redundantes
pero conjuntamente indispensables), la factibilidad de la fiscalización por
IA, y el efecto de separar la planificación macro de la asignación (robustez
frente a una mala planificación central —un contraste del aparato anterior,
sujeto a la misma salvedad de magnitud que el compuesto anterior, no un efecto
calibrado).

La Sección 8 enuncia las limitaciones con el mismo cuidado que los resultados,
porque bajo nuestro método ellas son resultados: cada una es un riesgo
residual nombrado y acotado.

## 2. El principio de distribución funcional

Analizamos el Estado como una pila de capas funcionales antes que como una
única institución: (a) garantías de derechos y fuerza legítima; (b)
adjudicación vinculante; (c) creación de reglas; (d) gestión macrofiscal; (e)
planificación macro y enmarcado de agenda; (f) priorización de proyectos y
asignación de recursos a proyectos concretos; (g) ejecución y prestación de
servicios; (h) producción de evidencia sobre la entrega; e (i) evaluación y
rendición de cuentas. El principio de distribución es:

> Una capa es candidata a la distribución cuando se cumplen tres condiciones:
> sus fallas bajo monopolio son fallas de información e incentivos antes que
> fallas de coordinación de la fuerza; la provisión distribuida puede hacerse
> *más* observable que la provisión monopólica; y la capa puede acotarse de
> modo que su falla no se propague en cascada hacia las capas no
> distribuibles.

Las capas (a), (b) y (d) fallan la primera o la tercera condición y permanecen
centrales en nuestro diseño. Las capas (f) a (i) pasan las tres, y Core v0 las
distribuye como un bloque, y debe hacerlo: distribuir la asignación sin la
verificación reproduce la brecha de entrega del presupuesto participativo
(PP), y distribuir la verificación sin la asignación reproduce la sociedad de
la auditoría.

La capa (e), la planificación, es el caso deliberadamente sin resolver: Core v0
requiere que los ámbitos de planificación (Planning Scopes) sean públicos,
versionados y portadores de mandato, pero no distribuye su construcción —razón
por la cual la promesa de la arquitectura se enuncia con su calificador
incorporado: lo que distribuye es la asignación *dentro de ámbitos de
planificación acotados por mandato, visibles, versionados y disputables*, nunca
la asignación sobre una agenda sin enmarcar. La Sección 6 muestra que el
calificador no es un detalle: es la restricción vinculante de todo el diseño, y
la Sección 8 eleva su remoción al siguiente objeto del programa de investigación.

Dos reglas metodológicas gobiernan todo lo que sigue. La **regla de crítica
comparativa** (P001): toda objeción se evalúa contra la línea base
institucional actual, no contra un ideal —una dificultad compartida por ambos
sistemas es un problema general de la gobernanza, no una refutación de la
propuesta. La **regla de integrar-o-acotar** (P007): una vez que la
arquitectura central está completa, una objeción fundada produce un nuevo
mecanismo solo si el modo de falla derrotaría una afirmación central y no
puede controlarse mediante objetos existentes; de lo contrario produce una
frontera explícita, un riesgo residual visible y un enunciado de limitación.
La primera regla disciplina a los críticos; la segunda disciplina a los
diseñadores —un sesgo hacia pocas reglas simples y generales por sobre la
proliferación de maquinaria específica, en el espíritu de Epstein (1995).

## 3. Trabajo relacionado

**Gobernanza policéntrica.** La demostración de Ostrom de que los recursos de
uso común pueden gobernarse mediante regímenes anidados y autoorganizados sin
monopolio central (Ostrom 1990) es el ancestro intelectual más cercano: sus
principios de diseño —ámbito acotado, monitoreo por monitores responsables,
sanciones graduadas, resolución barata de conflictos— reaparecen aquí como
objetos impuestos por software. La diferencia es el ámbito y el instrumento:
apuntamos a funciones estatales presupuestadas antes que a los comunes de
recursos naturales, y codificamos el régimen en una plataforma cuyos cambios de
reglas son ellos mismos objetos versionados y auditables.

**Presupuesto participativo.** El PP al estilo de Porto Alegre delega una cuota
de un presupuesto municipal a asambleas ciudadanas (Wampler 2007; Baiocchi y Ganuza 2017). Empíricamente, el PP mejora algunos resultados fiscales pero
sufre de decaimiento del involucramiento, captura por minorías organizadas y
vínculos débiles entre asignación y entrega verificada (Peixoto y Fox 2016).
Core v0 difiere en exactamente esos márgenes: la asignación es continua e
individual antes que asamblearia; la entrega está ligada a la asignación
mediante contratos probatorios (evidential contracts) y desembolso condicional;
y la arquitectura trata la baja participación como un insumo de diseño (Sección
6) antes que como una falla a exhortar hasta hacerla desaparecer —la acción
colectiva no se sostiene sola a escala (Olson 1965)—. La billetera
cívica misma generaliza el mecanismo de vouchers (Friedman 1962) —dinero público
dirigido por la ciudadanía— desde la elección entre proveedores de servicios
hasta la asignación entre proyectos verificables, añadiendo el ciclo de vida de
verificación que los vouchers nunca portaron.

**Federalismo fiscal y democracia epistémica.** Los ancestros formales del
principio de distribución funcional son la literatura de la descentralización
—el teorema de Oates (1972) sobre cuándo la provisión descentralizada domina,
Tiebout (1956) sobre la revelación de preferencias mediante la elección de
jurisdicción, y Besley y Coate (2003) sobre la provisión centralizada versus
descentralizada bajo economía política— con una diferencia deliberada: nuestras
capas son funcionales antes que territoriales, de modo que lo que se distribuye
es una etapa del proceso de gasto (asignación, ejecución, verificación) antes
que un nivel de gobierno. Del lado epistémico, los resultados de agregación de la
Sección 6 pertenecen al linaje del teorema del jurado de Condorcet (1785) y sus
condiciones modernas de falla (Austen-Smith y Banks 1996) —una deuda que
hacemos explícita, porque el régimen de falla del teorema (señales
correlacionadas, estratégicas o sesgadas) es exactamente lo que el séptimo
experimento pone a prueba— y la conversación de diseño con la democracia abierta
de Landemore (2020) y la gobernanza participativa empoderada de Fung y Wright
(2003) es directa: esos programas distribuyen la deliberación y el
empoderamiento; este distribuye la asignación, la ejecución y la verificación con
un núcleo de diseño de mecanismos y de rastro de auditoría que ellos no intentan.

**Democracia líquida.** La delegación transitiva o acotada promete flexibilidad
entre la participación directa y la representativa, al costo de la concentración
(Blum y Zuber 2016; Kahng, Mackenzie y Procaccia 2018). Core v0 adopta
delegación acotada, revocable y no compensada con visibilidad obligatoria de la
concentración, y —siguiendo la advertencia de Michels (1911) antes que
desestimarla— trata la concentración de delegados como un riesgo monitoreado con
umbrales de estrés, no como un problema resuelto.

**Gobernanza digital y de blockchain.** La literatura sobre DAOs demostró tanto
la viabilidad de la asignación colectiva de recursos codificada por reglas como
su falla característica: la votación plutocrática por tokens y la captura de la
gobernanza (De Filippi y Wright 2018). Core v0 deliberadamente no es un diseño
de blockchain —la identidad es verificada antes que seudónima, y el Estado
soberano permanece como fuente de fondos y de ley— pero importa la lección de
que la meta-gobernanza es la superficie de ataque de mayor apalancamiento
(Sección 8).

**Diseño de mecanismos y auditoría.** Nuestros modelos formales son aplicaciones
elementales del riesgo moral bajo observación imperfecta (Holmström 1979) y de
la colusión en jerarquías de supervisión (Laffont y Tirole 1991), con la ley
de Goodhart (Goodhart 1975; Campbell 1976) como advertencia permanente contra la
manipulación de métricas. El diseño de mecanismos existente más cercano para la
asignación ciudadana de fondos públicos es el financiamiento cuadrático (o «plural»)
(Buterin, Hitzig y Weyl 2019), que tasa la concentración mediante la curvatura
de los fondos de contrapartida; la regla de cierre por meta de financiamiento de
Core v0 persigue la misma meta anticoncentración por truncamiento antes que por
tasación, y nuestros resultados de simulación (Sección 6, Hallazgo 1) delimitan
lo que el truncamiento puede y no puede lograr. Del lado de la auditoría, el
experimento de campo de Olken (2007) sobre proyectos viales indonesios es el
anclaje empírico canónico para las probabilidades de detección que nuestras
Proposiciones 1–2 toman como parámetros —y su hallazgo de que la auditoría de
arriba hacia abajo superó al monitoreo de base para el fraude en compras es una
advertencia que esta arquitectura absorbe al hacer de la fiscalización
profesional, no de la observación de la multitud, la capa que condiciona la
liberación. La literatura brasileña de loterías de auditoría (Ferraz y Finan
2008) aporta la evidencia complementaria de mecanismo —la divulgación de los
hallazgos de auditoría cambia los resultados políticos, y la exposición a
auditoría reduce la corrupción subsiguiente— y sus datos subyacentes de la CGU
entran directamente en la línea base parametrizada por auditorías del séptimo experimento. La
contribución aquí no es la profundidad técnica sino la especificidad: los parámetros de los modelos mapean uno a uno con objetos
arquitectónicos nombrados, de modo que cada proposición es un dial
implementable.

**Qué es nuevo.** Hasta donde sabemos —a la espera de una revisión sistemática de
literatura previa (nuestro mapa de literatura es aún preliminar)— ningún trabajo
previo combina:

- **(i)** una descomposición funcional de la actividad estatal en capas
  distribuibles y no distribuibles;

- **(ii)** una arquitectura completa a nivel de objetos para la capa de
  asignación;

- **(iii)** un análisis formal de incentivos de los mecanismos específicos de
  esa arquitectura;

- **(iv)** simulación conductual de sus supuestos de cara a la ciudadanía
  —incluida lo que creemos es una comparación temprana de conocimiento simétrico,
  en simulación, de la construcción abierta de las prioridades de asignación a
  partir de señales ciudadanas agregadas contra la construcción central de ancho
  de banda finito (una prueba simétrica pre-registrada posterior encuentra la
  ventaja distribuida consistente pero pequeña; Sección 6)—;

- **(v)** un método documentado de revisión adversarial con una regla de
  detención explícita.

Y el resultado sustantivo es en sí mismo nuevo:

- **(vi)** una comparación institucional de extremo a extremo sobre el
  criterio que la redistribución existe para satisfacer —valor social
  entregado por unidad de presupuesto—, descomponiendo la selección de la
  entrega sobre carteras apareadas, mostrando que ambas capas interactúan dentro
  del aparato anterior, e introduciendo la brecha de visibilidad (entrega
  oficialmente reportada menos entrega real) como un déficit de rendición de
  cuentas medible del statu quo;

- **(vii)** esa comparación contra una línea base parametrizada por auditorías,
  construida exclusivamente a partir de los hallazgos publicados de instituciones
  supremas de auditoría de nueve jurisdicciones y la Unión Europea, bajo una
  condición preregistrada de retiro del resultado principal.

Las evaluaciones de presupuestos participativos miden participación y
asignación; los estudios de auditoría miden fugas después del hecho; no
conocemos ninguno que mida, dentro de un mismo marco, cuánto valor entregado
produce una institución de asignación a partir de los mismos recursos.

## 4. La arquitectura Core v0

Resumimos la arquitectura de referencia al nivel necesario para el análisis; el
modelo completo de objetos, las máquinas de estado y las capas de interfaz
ciudadana están especificados en el corpus público.

**Financiamiento.** Una autoridad implementadora migra una cuota, con mandato
legal, de un presupuesto existente hacia billeteras cívicas individuales:
capacidad de asignación periódica, no retirable, de propósito público, igual
por ciudadano por defecto. Todo ámbito de planificación activo porta un
registro de *Allocation Mandate* (mandato de asignación) que nombra el
estatuto o instrumento que autorizó la migración, su rango legal, el órgano al
que se imputan las asignaciones y la fórmula de asignación. La plataforma
registra esa autorización externa; no la fabrica. La operación en modo
vinculante está supeditada a que se haya registrado una norma habilitante de
rango suficiente; en caso contrario, el modo predeterminado admisible es la
operación consultiva o tutelada. El acto de asignación se diseña para replicar
dos garantías propias del sufragio: el secreto de la preferencia y la
resistencia a la coacción (receipt-freeness). En la medida en que una norma
habilitante lo reconozca, podrá ampararse con protecciones equivalentes a las
del voto; hasta entonces, son garantías técnicas de la plataforma, no un
estatuto legal. Las asignaciones individuales son seudónimas en la capa
pública y se reconcilian criptográficamente contra los totales públicos por
ámbito —cada peso trazable como dinero, ningún ciudadano trazable como
asignador, y no existe recibo ni prueba exportable de ninguna asignación
individual, ni siquiera voluntariamente, de modo que un patrón que exija
prueba nunca pueda obtenerla (la defensa propia del voto secreto, aplicada a
la billetera). Un *Fiscal Commitment Profile* (perfil de compromiso fiscal)
por ámbito hace públicos y versionados el porcentaje migrado, la indexación y
la latencia de entrega, de modo que el estrangulamiento fiscal por parte de la
tesorería establecida sea medible y atribuible antes que silencioso. Los
servicios esenciales con obligaciones de continuidad quedan protegidos por
pisos no asignables, fuera de la popularidad ciudadano-por-ciudadano.

**Proyectos y roles.** Los proyectos financiables declaran una tesis de valor
con afirmaciones verificables, partes afectadas, riesgos y antivalores, un plan
de fases e hitos, y un *contrato probatorio* (evidential contract): qué debe
probarse, por qué clase de productor calificado, con qué método, para qué efecto
formal. Seis roles están estructuralmente separados —proponente, modelador/
diseñador, ejecutor, fiscalizador, productor de evidencia, custodio— con las
relaciones de partes vinculadas declaradas en un grafo clasificado por
severidad. La regla que soporta la carga es que el ejecutor nunca elige ni paga
a sus propios fiscalizadores o productores de evidencia: el trabajo de control se
financia desde un presupuesto de control separado y se asigna por protocolo.

**Cierre paralelo y desembolso condicional.** Un proyecto publicado reúne
compromisos de financiamiento, asignaciones de fiscalizadores, compromisos de
evidencia y confirmaciones de beneficiarios de manera concurrente; la ejecución
se vuelve posible solo cuando todas las condiciones requeridas por su *política
de umbrales* (threshold policy) proporcional cierran. Los fondos comprometidos
quedan en custodia, no transferidos: la liberación ocurre por hito, contra
evidencia de cumplimiento revisada, con retención, verificaciones de bloqueadores
y garantías materializadas por custodios externos antes de cualquier liberación.
Un *Duty-of-Care Anchor* (ancla de deber de diligencia) nombra, antes del desembolso, a la persona jurídica solvente que responde civilmente frente a terceros por los daños derivados de la ejecución, en particular los daños a la integridad física.

**Infraestructura de atención.** La ciudadanía actúa a través de una interfaz
estratificada: descubrimiento con ordenamiento controlado por el usuario y con
razón visible; tarjetas de proyecto compactas; y superficies de auditoría
progresivamente más profundas hasta el rastro completo. Los ciudadanos que no
prestan atención son servidos por perfiles automáticos de asignación
configurables —o un perfil por defecto sensato cuando no se define ninguno—
y por delegación acotada y revocable con
visibilidad de la concentración. La arquitectura no supone ciudadanos atentos;
supone que en su mayoría son desatentos y enruta su peso a través de una
intermediación inspeccionable (Lupia y McCubbins 1998). Esta es una respuesta
de diseño a la objeción de competencia ciudadana en su forma contemporánea más
aguda (Brennan 2016): antes que restringir el derecho de nadie a participar,
la arquitectura hace que la intermediación que la desatención produce sea
visible, revocable y auditable.

Un aparente reproche —que participar por aplicación, billetera y tutor de IA
excluya a la población no digitalizada— se disuelve bajo la disciplina
comparativa: el ciudadano no digital ya delega hoy, entregando su decisión,
vía el voto, a un representante lejano que asigna el presupuesto por él. Core
v0 no agrega una barrera: quita un nivel de indirección. Quien nunca participa
cae en el valor por defecto del sistema —igual por ciudadano, acotado por
mandato—, no en la preferencia de la minoría atenta; y quien participa aunque
sea mínimamente, incluso por vías no digitales o delegación asistida, acerca
la decisión a sus intereses directos mediante la microdelegación y reglas como
«cerca de mí», que financian lo que puede tocar. Lo que aparenta excluir,
incluye más —con la construcción del ámbito de planificación como la única
indirección restante (Sección 8).

**Transición.** El despliegue procede a través de modos de operación —cerrado,
tutelado, semiabierto, abierto— en los que una autoridad pública puede retener la revisión de elegibilidad (admisibilidad de proyectos), pero toda decisión tutelada material, y todo
silencio tutelado más allá de su plazo, se convierte en un objeto público de
resolución de gobernanza. Los indicadores de resistencia del sistema
establecido (cuota de ámbito abierta, tasas de rechazo y de vencimiento de
plazos, privilegio del operador) hacen distinguible la adopción simbólica de
la transferencia real.

## 5. Análisis formal

Enunciamos los tres modelos y sus resultados; las demostraciones son álgebra
de un paso y aparecen en la nota acompañante (`research/formal-models.md`).
Todos los agentes son neutrales al riesgo; los presupuestos están normalizados
a 1. La estructura de disuasión a lo largo del texto es la de Becker (1968):
una violación se disuade cuando la probabilidad de detección por lo que está
en juego excede su ganancia —nuestra contribución es mapear cada término de
esa desigualdad sobre un objeto arquitectónico nombrado y configurable. Para
evitar colisiones de notación, *Proposición N* designa los resultados formales
de esta sección; *P001/P007*, las reglas metodológicas (§2); y *predicción N*,
las predicciones conductuales de §5.3.

### 5.1 Desembolso supeditado a hitos

Un ejecutor elige entregar un hito a costo privado *c* ∈ (0, 1) o desviar. El
mecanismo libera un adelanto *a*, retiene el remanente para la aceptación
revisada, recupera una fracción *r* del adelanto ante la no entrega confirmada,
incauta una garantía depositada *γ* (con costo de mantenimiento *κ* por unidad),
e impone una pérdida reputacional de continuación *R*. La revisión confirma la
desviación con probabilidad *p* —la calidad conjunta de los estándares de
evidencia, la independencia del fiscalizador y la corroboración.

**Proposición 1 (compatibilidad de incentivos).** La entrega es óptima si y solo
si

> *c* ≤ *p* · [ (1 − *a*(1 − *r*)) + *γ* + *R* ].

La entrega debe ser más barata que la probabilidad de detección por el total en
juego. Cada prueba de manipulación de desembolsos en la arquitectura es un
término de esta desigualdad.

**Proposición 2 (la verificación débil debe tasarse).** La garantía mínima que
sostiene la entrega para todo *c* ≤ *c̄* es *γ\**(*p*) = max{0, *c̄*/*p* −
(1 − *a*(1 − *r*)) − *R*}, decreciente y convexa en *p*. Allí donde la
verificación es débil —mercados de fiscalización delgados, calidad de evidencia
pobre— el mecanismo debe compensar con adelantos más pequeños, mayor
recuperabilidad, garantías más grandes o ejecutores de mayor reputación. Un único
porcentaje de garantía global no puede ser óptimo a lo largo de entornos de
verificación heterogéneos.

Los términos de disuasión de esta condición son complementos, no sustitutos. Un
programa de ablación pre-registrado sobre los experimentos complementarios
(Offermann 2026b) midió la consecuencia: en el punto de operación diseñado la
desigualdad se sostiene con holgura, de modo que quitar cualquier término
individual cuesta casi nada — y un despliegue negociado concesión defendible por
concesión puede cruzar el umbral de forma invisible, terminando por debajo del
status quo que reemplazó (0.87× de valor verificado con la calidad de selección
intacta) mientras luce plenamente instrumentado. El corpus exige por ello que
cada ámbito publique su margen de la desigualdad de disuasión en su configuración
operativa, recomputado ante cada cambio de término, con las reducciones de
términos clasificadas como cambios de regla materiales (docs/111). La misma
holgura, mantenida intacta, compra un dividendo inesperado: absorbe el error del
instrumento de verificación — en el panel complementario de cinco familias
reales de modelos, incluso un verificador máquina que deja pasar ~20% del
fraude que exige juicio produjo una fuga indistinguible de la verificación
humana pura, porque la cascada elimina los intentos aguas arriba — siempre que
el adversario no coluda a través de las capas de verificación (Offermann 2026b,
docs/113).

**Proposición 3 (compromiso entre participación y disuasión).** Elevar *γ*
relaja la compatibilidad de incentivos a tasa *p* pero reduce el pago de los
ejecutores honestos a tasa *κ*; bajo un objetivo del diseñador que pondera una
unidad de holgura de incentivos por igual contra una unidad de pago del ejecutor
honesto, un incremento de la garantía es netamente beneficioso solo si *p* > *κ*
(otras ponderaciones desplazan el umbral, no la estructura del compromiso). Allí
donde la calidad de detección está por debajo del costo local del capital,
acumular garantías excluye a ejecutores honestos de bajo margen sin disuadir el
fraude —el contenido formal de la disciplina de proporcionalidad de la
arquitectura.

### 5.2 Fiscalización a prueba de colusión

Un hito no entregado vale *G* para el ejecutor si es aprobado
fraudulentamente. La liberación requiere la aprobación de *k* fiscalizadores
asignados por protocolo, cada uno portando un capital en juego confiscable *W*
(honorarios futuros del protocolo más reputación de rol) y enfrentando una
probabilidad de descubrimiento posterior a la aprobación *q*. Como la asignación
está protocolizada y los emparejamientos repetidos son visibles, el ejecutor y el
fiscalizador son extraños: una oferta de soborno es en sí misma reportada con
probabilidad *δ*, costándole al ejecutor una penalidad *P_e*.

**Proposición 4 (a prueba de colusión).** El fraude de aprobación es insostenible
si

> *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,

y en particular siempre que *kqW* ≥ *G*. Tres corolarios cargan peso de diseño:

- ***La corroboración sustituye al capital reputacional.*** El capital en
  juego requerido por fiscalizador cae linealmente en *k*, de modo que la
  revisión redundante es exactamente lo que hace viables los conjuntos de
  fiscalizadores de reputación superficial, a costo de control lineal —que es
  para lo que sirven las políticas de umbrales proporcionales.

- ***Las relaciones repetidas son la superficie de ataque.*** El término de
  fricción existe solo mientras se impida la contratación relacional, razón
  por la cual la visibilidad de los emparejamientos repetidos soporta la carga
  (mantenemos la probabilidad de reporte *δ* exógena a *k*; endogenizarla —más
  revisores abordados, más chances de un reporte— solo fortalece la
  condición).

- ***Los mercados delgados atacan ambos modelos a la vez.*** Un fiscalizador
  monopolista que no puede excluirse de manera creíble pierde su capital
  confiscable (*W* → 0) al tiempo que degrada *p* en la Proposición 1: las dos
  condiciones identifican los mismos entornos como frágiles, por la misma
  razón.

### 5.3 Asignación bajo restricción de atención

Los ciudadanos asignan pequeños presupuestos individuales; el retorno pivotal de
evaluar proyectos es insignificante, de modo que la ignorancia racional es el
equilibrio (Downs 1957), y la pregunta de diseño es hacia dónde fluye el peso de
la mayoría *desatenta*: hacia la saliencia amplificada por la prueba social
(Bikhchandani, Hirshleifer y Welch 1992; Salganik, Dodds y Watts 2006), o
hacia la capa de reglas por defecto de la propia arquitectura, cuyo
enrutamiento sigue la priorización distribuida de proyectos —los perfiles de asignación agregados—, no un plan central. El modelo arroja tres predicciones verificables —los topes doman
las cascadas (predicción 1), los valores por defecto anclan la calidad (predicción 2), el decaimiento
se degrada con gracia solo con valores por defecto (predicción 3)— evaluadas a continuación.

## 6. Evidencia computacional

Ponemos a prueba las tres predicciones de §5.3 —y, en experimentos sucesivos,
los supuestos de las Proposiciones 1–4— en una simulación basada en agentes.
Cada experimento (E1–E8) corresponde a un hallazgo:

| Exp | Qué pone a prueba | |
|---|---|---|
| E1 | ¿los topes de financiamiento suben la calidad? | Hallazgo 1 |
| E2 | ¿qué sostiene la calidad de la asignación? | Hallazgo 2 |
| E3 | ¿qué amortigua el decaimiento de la participación? | Hallazgo 3 |
| E4 | agregación distribuida vs. construcción central (refinada por una frontera de fricciones simétricas + captura, E4-v4/v5) | Hallazgo 4 |
| E5 | dónde gana valor la arquitectura (capas de selección y entrega) | Hallazgo 5 |
| E6 | competencia reputacional y estándar de ejecución | Hallazgo 6 |
| E7 | comparación contra una línea base parametrizada por auditorías | Hallazgo 7 |
| E8 | robustez bajo participación conductual endógena | cierre de §6 |

Simulamos 10.000 ciudadanos a lo largo de 24 ciclos mensuales asignando sobre un
conjunto permanente de 40 proyectos con calidad *θ*, saliencia *s* (medida
corr(*θ*, *s*) ≈ 0.24), pesos-necesidad del planificador *w* = λ*θ* + (1 − λ)*u*
(donde *u* es un componente idiosincrático de necesidad independiente de la calidad)
con peso de mezcla λ ∈ {0.4, 0.8} —medida corr(*θ*, *w*) ≈ 0.55 y ≈ 0.97
respectivamente— y escasez de 3× (solo una minoría de proyectos puede
completarse). Los evaluadores (2–10%) financian la mejor calidad que muestrean;
los seguidores de saliencia ven una superficie de descubrimiento de seis ranuras
ordenada por saliencia amplificada por el progreso de financiamiento; el
presupuesto de los seguidores de valores por defecto llena proyectos en orden de
prioridad de planificación. La regla de cierre por meta de financiamiento es
conmutable. Veinte corridas con semilla por condición; el código es sin
dependencias y determinista (`scripts/simulation/allocation-sim.mjs`; tablas
completas en `research/simulation-results.md`).

**Estado de los cocientes compuestos anteriores.** Este aparato basado en agentes
produjo tres líneas base del mismo cociente de valor por unidad de presupuesto:
**2.19×** frente al cero-control (E5), **2.22×** frente al statu quo parametrizado
por auditorías (E7) y **2.26×** bajo adopción conductual (E8). Se conservan aquí
por trazabilidad como **salidas condicionales de ese aparato**, pero están
**superadas para inferir magnitud** y ya no se ofrecen como la cifra principal del
artículo.

**Estado cuantitativo (rector).** Una prueba de estrés pre-registrada, simétrica y
solo-de-selección —ambos brazos con presupuestos esperados de reportes de tasación
igualados, el mismo pool de proyectos, costos y ruido, entrega en paridad, cada uno
actuando sobre su propia estimación ruidosa y no sobre la verdad— encontró que la
ventaja de selección distribuido-menos-central es **positiva en las 18 celdas
pre-especificadas pero pequeña.** El estadístico de decisión pre-registrado es la
**mediana agrupada Δ = 0.025**, por debajo del umbral de materialidad
pre-registrado de **0.05**; una estimación **post-hoc** de ratio-of-sums es
**Δ = 0.026, con un intervalo Monte-Carlo por conglomerado-de-mundos al 95%
[0.023, 0.029]** (reportada por separado, sobre el proceso generador simulado). El
multiplicador compuesto, por lo tanto, **no** se reclama como efecto calibrado. Esta
es una prueba estilizada de un *mecanismo de selección*, no una implementación
validada de Core v0: sus variables de valor y crédito son puntajes abstractos, no
visibilidad, trazabilidad, permanencia o valor público medidos. La especificación
rectora es
[claim-and-estimand-contract](../research/claim-and-estimand-contract.md); la prueba,
su pre-registro congelado, resultados y diagnósticos están en
`scripts/simulation/e5-sp-symmetry-gate.mjs` y `audits/2026-07-10/symmetry-gate-*`.
Las contribuciones que cargan el peso son la arquitectura y la *dirección* del
mecanismo, no un multiplicador puntual.

**Hallazgo 1: los topes de financiamiento son un dispositivo anticoncentración,
no un dispositivo de calidad.** Con el cierre ACTIVADO, la concentración cae
(Gini de financiamiento 0.732 vs 0.759), el 5% de proyectos más saliente absorbe
menos (16.8% vs 19.6% de todo el financiamiento), y se completan un 15% más de
proyectos (25.3% vs 21.9%). Pero la selección de calidad no cambia
(*sel(θ)*, la correlación de Pearson entre proyectos entre la calidad latente θ y el
indicador binario de que un proyecto alcanza su meta de financiamiento, ≈ 0.39 vs
0.41): el excedente truncado se derrama hacia el siguiente
proyecto más *visible*, no hacia el siguiente *mejor*. La afirmación de la
arquitectura respecto de la regla de cierre debería estar —y en el corpus ahora
está— acotada en consecuencia.

**Hallazgo 2: el ancla por defecto, no la atención ciudadana, sostiene la
calidad de la asignación.** Una mezcla anclada en valores por defecto, con un
planificador casi perfectamente informado (r ≈ 0.97), alcanza sel(θ) ≈ 0.71:
entre 1.6× y 2× las configuraciones impulsadas por saliencia (≈ 0.35–0.43). En
cambio, quintuplicar la atención ciudadana (α de 2% a 10%) casi no mueve la
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
los perfiles de asignación agregados que rutean el presupuesto dentro de ella.
El arreglo distribuido es robusto a la calidad de esa categorización y el
central es frágil a ella, así que la ventaja sobre un status quo central no es
fija: crece a medida que empeora la planificación central (ese estudio la mide
subiendo de ~2× a más de 5×).

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
captura no ayuda: compra neutralidad al precio de una calidad casi aleatoria
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
largo de 24 ciclos) degradaría la asignación de manera grácil solo si la cuota
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
resistencia a la captura que la protege.** Un cuarto experimento preregistrado
(diseño y predicciones comprometidos antes de cualquier corrida;
`research/e4-institutional-knowledge-design.md`) modela el conocimiento de manera
simétrica en lugar de dotarlo: un planificador con ancho de banda fijo (treinta
inspecciones profundas; su correlación con la calidad latente es ahora una salida
medida, que se desploma de 0.81 → 0.37 → 0.17 a medida que el conjunto de
proyectos crece de 40 → 200 → 1000) frente a un treinta por ciento de la
ciudadanía que posee cuatro señales locales individualmente pobres cada uno
(ruido 0.35). Cinco regímenes comparten el mismo mundo y las mismas señales y
difieren únicamente en la institución de agregación. La predicción preregistrada
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
Tres salvedades cargan el peso honesto del hallazgo. Primero, el mismo
conocimiento disperso *sin* una institución de agregación se desperdicia: el
régimen no coordinado financia el 0.6–15% de los proyectos y selecciona mal —el
resultado reivindica los mecanismos de agregación, no la ausencia de mecanismo, y
la capa de valor-por-defecto-más-cierre de Core v0 es exactamente uno de esos
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
estimadores sesgados del mismo valor de Samuelson T = S⁺ − S⁻, que rankean
proyectos por S⁺ − θ·S⁻ con θ_C = η y θ_D = 1 − β, de modo que el distribuido
domina exactamente cuando su coeficiente está más cerca del peso verdadero del
daño, que es uno —es decir, **β < 1 − η**—. La simulación confirma la ley
(paridad en la anti-diagonal η + β = 1) y cuantifica la degradación del valor
entregado fuera de ella (desde la paridad hasta ~1.8× como **cociente
distribuido-a-central** a lo largo de la caja plausible —esto es D/C, no una
fracción del benchmark de información completa). La ventaja es así una propiedad de
*incluir a los perjudicados*, no de la agregación en sí; alcanza la paridad a lo
largo de la anti-diagonal β = 1 − η y se convierte en una victoria del central por
debajo de ella (β > 1 − η) —lo que absorbe la objeción del sesgo de participación
dentro del propio eje β del modelo en vez de dejarla externa.
Ningún extremo se asume: η se *barre*, no se fija, y un η bajo pero no nulo es un
régimen defendido, no una premisa. La literatura del daño difuso (los costos no
vistos de Bastiat; la organización asimétrica de Olson en temas disputados; el
cuadrante de política clientelar de Wilson; la legibilidad de Scott) describe
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
conservadora), el status quo se vuelve net-dañino con rentas cercanas al 10% del
costo del proyecto mientras el umbral distribuido —con piso en el wallet
igual-por-ciudadano, que el dinero puede persuadir pero no comprar— queda cerca
de diez veces más alto (forma cerrada ρ(C) en la nota del backbone). La
detección es una bola de nieve p = 1 − (1 − q)^m, así que su piso es un valor
esperado m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes del público afectado y
transparente —una barra tan baja que derrotar al brazo distribuido exige suponer
una apatía cívica casi total entre los estafados—. Esto ata el Hallazgo 4 a la
capa de integridad del Hallazgo 5: la misma fiscalización que hace llegar el
valor es la que impide que las rentas organizadas recompren la ventaja de
asignación, de modo que ambos son una capa y su salvaguarda antes que
multiplicadores independientes. Toda magnitud aquí es interna al modelo; la
literatura (Olson, Wilson, Scott, Bastiat; Becker, Becker y Stigler, Stokes,
Dyck-Morse-Zingales; el monitoreo por los propios usuarios de Ostrom) defiende
la dirección, el mecanismo y el signo de la asimetría —no los números.

*Backbone analítico.* Tres formas cerradas cargan el peso, cada una verificada
contra la simulación (`research/e4-analytical-backbone.md`); las corridas solo la
confirman y cuantifican la degradación fuera de los casos limpios. **(i) La ley
de paridad.** Escribiendo cada institución como un estimador sesgado que rankea
proyectos por S⁺ − θ·S⁻, el central conserva θ_C = η del daño percibido y el
distribuido revela θ_D = 1 − β (la tasa de participación se cancela del ranking);
como el peso verdadero del daño es uno, el brazo distribuido entrega más valor
verdadero **si y solo si β < 1 − η**, con paridad en la anti-diagonal. Una lectura
sesgo-varianza *predeciría* que sobre la línea de paridad, donde el sesgo se
cancela, gana el estimador de menor varianza —el ruido de revelación del
distribuido es cero (cada quien conoce su propio valor), el ruido de proxy del
central no—. La simulación implementada **no** lo confirma en el rincón
responsable: en (η = 1, β = 0) el cociente medido es **0.89× —una victoria del
central (D/C < 1)**—, así que la lectura honesta es la ley de paridad sin ruido
β = 1 − η, y el ladeo sesgo-varianza hacia el distribuido no se sostiene allí.
**(ii) El umbral de captura.** De renta >
adquisición + P(detección)·pena, el umbral del central λ\*_C = (k_c + p_c·f)/C
tiende a cero al reducirse su detección, mientras el del distribuido λ\*_D = k_d +
p_d·f/C tiene *piso* en el término de adquisición del wallet igual k_d; la razón
de resistencia ρ(C) = (k_d·C + p_d·f)/(k_c + p_c·f) ≈ 6–10×, creciente en el
costo del proyecto. **(iii) El piso de detección.** Con detección de bola de
nieve P = 1 − (1 − q)^m, superar una tasa central p_c solo requiere un valor
esperado m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes —la inversión de la carga de la
prueba hecha rigurosa. Tres invariancias acotan la inquietud de las magnitudes
arbitrarias: la ventaja es invariante a las unidades de valor (escala) y al
*nivel* de participación (solo importa el sesgo β, no la concurrencia), y por el
teorema central del límite solo entran los primeros momentos S⁺, S⁻, así que el
sorteo gaussiano de valoraciones es una conveniencia, no un supuesto. Un límite
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
—Vickrey–Clarke–Groves— es inviable para presupuestos públicos (no es
presupuestariamente balanceado; Green y Laffont 1979), de modo que tanto el
planificador central como Core v0 son instituciones de *segundo óptimo* (Lipsey y
Lancaster 1956); la comparación pregunta qué segundo óptimo entrega más, no si
alguno es óptimo. Core v0 en consecuencia no reclama strategy-proofness —imposible
para cualquier mecanismo no dictatorial (Gibbard 1973; Satterthwaite 1975)— sino
*resistencia a la captura bajo coordinación organizada acotada*. El wallet
igual-por-ciudadano lo ubica en la familia de votación que expresa intensidad
(Casella 2012; Lalley y Weyl 2018) con una propiedad anti-plutocrática más nítida:
acota la influencia por *dotación igual* y no por precio convexo, así que el dinero
puede persuadir a los tenedores de wallet pero no comprar wallets —exactamente el
piso de costo de adquisición k_d del umbral de captura—. Por último, la ventaja de
agregación es la lógica del jurado de Condorcet (1785) y muere bajo su condición de
independencia (Austen-Smith y Banks 1996): la captura organizada es la violación
por error correlacionado de esa independencia, de modo que la capa de integridad
existe precisamente para defender el supuesto sobre el que descansa la agregación
distribuida. El primitivo de valor sigue las capacidades de Sen para *qué* se
agrega —libertades, no utilidad-dinero— mientras la *suma* descansa en Samuelson
(1954), una agregación que el propio Sen resiste; invocamos cada una solo donde
aplica.

*Calibración.* Las magnitudes son internas al modelo, pero la brecha con los datos
es una hoja de ruta, no una disculpa. El 46–68% del valor alcanzable por el central
es un **objetivo de validación candidato que requiere un mapeo de constructo
explícito** —no una comprobación directa: la razón ex-post entre valor realizado y
valor tasado (las calificaciones del Grupo de Evaluación Independiente del Banco
Mundial; Flyvbjerg, Bruzelius y Rothengatter 2003) es un *constructo distinto* de la
selección central relativa a un benchmark de información completa, así que unirlos
requiere un mapeo declarado antes de que uno pueda calibrar al otro; el sesgo de voz
β puede anclarse igualmente
a demografías medidas de presupuestos participativos en vez de asumirse. Y evidencia
de campo independiente apunta en la dirección que apunta el modelo: el presupuesto
participativo en Brasil desplazó el gasto hacia saneamiento y salud y redujo la
mortalidad infantil a presupuesto per cápita constante (Gonçalves 2014) —una
instancia real de asignación dirigida por ciudadanos entregando más valor real,
separable de cualquier magnitud que el modelo reporte. El apéndice de objetivos de
calibración vuelve visible la línea entre lo interno al modelo y lo anclado en datos.

**Hallazgo 5: el valor entregado, no la asignación, es donde la arquitectura
justifica su valía —y la selección y la entrega interactúan.** Un quinto
experimento preregistrado (`research/e5-value-delivery-design.md`) añade la
etapa de ejecución que los primeros cuatro omitieron: ejecutores con tipos
ocultos cuya decisión de desvío sigue la condición de incentivos de la
Proposición 1, bajo un régimen de entrega opaco —una cota inferior de
cero-control (baja detección, adelantos no protegidos, sin recuperación, sin
memoria reputacional), con parámetros dentro de la banda de fuga documentada
empíricamente: 87% en las subvenciones por capitación de Uganda (Reinikka y Svensson 2004), 24% en los caminos indonesios (Olken 2007)— frente al régimen
verificado construido a partir de las Proposiciones 1-4 (condicionamiento por
hitos, retención, recuperación, detección en la capa de evidencia, y un capital
reputacional en juego: un registro visible de desvío confirmado que cuesta
selección futura por parte de los financiadores). Cruzar la entrega con
los dos regímenes de selección de E4 arroja un 2×2 cuyos efectos principales son
dos preguntas sencillas. Los mismos proyectos, distinta capa de control: el
régimen verificado entrega un +43% sobre carteras idénticas (ΔV emparejado =
0.168 [0.143, 0.193]), y la finalización oficial del régimen de cero-control
sobreestima su entrega real en veintinueve puntos porcentuales. La misma capa de
control, distintos proyectos: la priorización social entrega un +53-54% bajo
cualquiera de los dos regímenes. La interacción es positiva y significativa
(+0.085 [0.053, 0.117]): dentro de este aparato las dos capas **interactúan en
lugar de solo sumarse**, produciendo una **salida condicional de escenario
cero-control de 2.19×** por unidad de presupuesto (0.859 vs 0.393) a lo largo de
las tasas de participación directa desde el 3% (el piso del presupuesto
participativo) hasta el 40% (escala de votación). Este compuesto es un contraste
factorial interno del modelo, **no** un efecto calibrado (véase la nota de estado
cuantitativo en la Sección 6 y el contrato de estimando). Dos predicciones
preregistradas fallaron
honestamente. El predominio esperado de la entrega sobre la selección no se
sostuvo a esta escala —la selección central con doscientos proyectos es casi
aleatoria (E4), inflando el margen de selección—, de modo que dentro de este
aparato el patrón robusto es la *interacción* de las dos capas, no su ordenamiento
(la magnitud compuesta en sí se retira como efecto calibrado; véase la Sección 6).
Y la esperada depuración
reputacional nunca se activó bajo los parámetros de verificación fuerte, por la
mejor razón posible: la condición de incentivos se cumple para todo ejecutor, de
modo que nadie se desvía y no hay a quién excluir —la disuasión se anticipa al
castigo, la aplicación de Becker operando ex ante. Un análisis de sensibilidad
post-hoc etiquetado con verificación debilitada muestra la segunda línea de
defensa: disuasión parcial, detección activa, y un conjunto de ejecutores que
mejora de manera medible a medida que los financiadores dejan de seleccionar a
los desviadores confirmados, cuyos registros son visibles (cuota de oportunistas
0.28 → 0.21 a lo largo de veinticuatro ciclos) —salida del conjunto por
preferencia perdida, no por poder alguno de exclusión de la plataforma; la
reputación informa las elecciones, nunca excluye. Un barrido
acompañante de las categorías de descubrimiento por defecto muestra que cada una
porta una firma distributiva amplia y medible —"cerca de mí" concentra el 71% del
presupuesto en el quintil más denso, "rural" lo invierte— de modo que el valor
por defecto es una palanca de política distributiva visible y configurable, no un
sesgo inherente del planificador.

**Hallazgo 6: la visibilidad sostiene el estándar; los mercados reputacionales
ingenuos concentran más rápido de lo que seleccionan.** Un sexto experimento
preregistrado (`research/e6-reputational-competition-design.md`) aísla el canal
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
el régimen visible-competitivo entrega un +11% sobre la línea base opaca —una
ganancia de incentivo pura con cero desvío en el modelo. Dos predicciones
preregistradas fallaron de manera informativa. La visibilidad por sí sola porta
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
En Core v0, la reputación informa las elecciones de los financiadores antes que
la asignación automática, con la concentración visible por construcción —y nunca
excluye: ninguna regla de protocolo impide a un financiador elegir a cualquier
actor admisible por motivos reputacionales.

**Hallazgo 7: una línea base parametrizada por auditorías — qué calibra y qué
no.** El ataque más agudo de la ronda de revisión del manuscrito
sostuvo que la línea base de cero-control es una caricatura —las administraciones
reales operan instituciones de auditoría, retenciones, fianzas e inspección— y la
respuesta fue un séptimo experimento preregistrado
(`research/e7-calibrated-baseline-design.md`) con una condición de retiro
comprometida: si el resultado principal colapsaba contra una línea base justa,
sería retirado, no requalificado. El brazo del statu quo calibrado está
parametrizado exclusivamente a partir de los hallazgos publicados de
instituciones de auditoría —detección a partir de los estudios de obras de la
contraloría de Chile, retención a partir de la práctica documentada de estados de
pago, recuperación a partir de la serie de la ASF de México, anclas de fuga
emparejadas por categoría con la construcción (Olken 2007; la base de evidencia
multipaís abarca la GAO estadounidense, la NAO británica, el Tribunal de Cuentas Europeo, el TCU y la CGU
de Brasil, y las contralorías de Chile, Perú y Colombia; Ferraz y Finan 2008)—
con el ancho de banda de inspección del planificador escalado al ámbito y el
sesgo coordinado de señales barrido como el régimen de falla de Condorcet. La
condición de retiro no se activó *dentro de este aparato*: contra la línea base
parametrizada por auditorías produjo 2.22× [2.10, 2.35] por unidad de presupuesto
a escala, y 1.4–1.6× a escala de piloto municipal (10-40 proyectos), donde la
selección central con cobertura plena es competitiva y el caso descansa en la
entrega y la medición. Pero la evidencia de auditoría *parametriza la fuga de la
línea base*; **no** calibra el efecto de tratamiento institucional de Core v0, que
está gobernado por la prueba simétrica pre-registrada posterior (Sección 6) que
reduce la ventaja de selección a un efecto agrupado de ~0.026 de un benchmark de
información completa —así que estas cifras de E7 se conservan como salidas
condicionales del aparato, no como un resultado principal sobreviviente. El
hallazgo central del experimento fortalece la tesis más que cualquier
multiplicador: la auditoría a su intensidad empíricamente
documentada, sin memoria reputacional, no disuade desvío alguno —el umbral de
incentivos del régimen calibrado queda por debajo del costo de todo oportunista,
de modo que su fuga iguala la del régimen de cero-control, y lo que compra la
detección del mundo real es una mentira más pequeña (la brecha de visibilidad cae
de veintinueve a diecinueve puntos), nunca más entrega. La fuga del brazo
calibrado aterriza dentro de la banda documentada por la auditoría (24-48% en
obras); la mecánica de fuga del modelo, alimentada con parámetros de auditoría, es
*consistente con* el rango documentado —esto parametriza la fuga de la línea base,
no calibra el efecto de tratamiento institucional. Y el barrido de sesgo
acota el reclamo de construcción abierta con honestidad: la selección distribuida
se degrada de manera casi lineal con la captura coordinada de señales y cae por
debajo de un planificador municipal competente de cobertura plena solo con una
cuota coordinada de aproximadamente el treinta por ciento —se degrada, nunca
colapsa, y sigue siendo superior en todas partes por debajo del diez por ciento.

Un octavo experimento preregistrado (E8,
`research/e8-behavioral-participation-design.md`) reemplazó luego el lado de
participación de estos brazos —la cuota por defecto y la cuota informada que los
brazos de arquitectura habían impuesto— con trayectorias de adopción generadas
por un estudio conductual compañero: un modelo basado en agentes conforme a Core
v0 de conciencia, registro, modos de participación y microdelegación confiada,
calibrado con priors sintéticos elicitados mediante LLM (paquete de replicación:
el repositorio distributed-governance-experiments). El aparato anterior produjo
2.26 [2.23, 2.30] a escala bajo sus supuestos sintéticos de adopción y 2.15–2.9× a
través de tres poblaciones y todas las escalas, incluida una trayectoria de
lanzamiento que comienza con participación cercana a cero —que cuesta el 1.7%
del cociente, porque la capa por defecto ancla por construcción los ciclos
tempranos delgados. El estudio conductual también reproduce de forma
independiente el supuesto de cuota informada que estos experimentos habían
impuesto: 0.309 emergente contra el 0.30 asumido.

## 7. La revisión adversarial como método

La arquitectura se desarrolló bajo un bucle adversarial documentado: **ataque**
(un resumen que enuncia un modo de falla, su ubicación en el corpus, un escenario
de estrés y anclajes en la literatura) → **defensa emparejada** (una evaluación
objetiva que clasifica el ataque como fundado, parcialmente fundado o diferencia
de criterio, con citas ancladas a líneas dentro del corpus) → **resolución** (un
documento aceptado que o bien integra un mecanismo o bien acota el riesgo) →
**propagación** (las restricciones de la resolución enhebradas a través de cada
documento de arquitectura afectado). El bucle corrió cinco rondas, todas ahora
plenamente resueltas y propagadas. La primera ronda: dieciocho ataques a los
mecanismos de la arquitectura (manipulación de métricas, captura del
fiscalizador, manipulación de desembolsos, colusión, control de partes
vinculadas, complejidad, resistencia del establecido, entre otros). La segunda:
quince ataques deliberadamente más profundos a los fundamentos políticos y
conductuales (mandato democrático, fijación de agenda, dependencia fiscal,
mercados delgados, vacío de meta-gobernanza, ignorancia racional, cascadas,
clientelismo, polarización, miopía intertemporal, el problema de las muchas
manos (Thompson 1980)). La tercera ronda emergió del método vuelto hacia afuera: una revisión
externa simulada de cinco perfiles del documento acompañante de este artículo
generó preguntas de revisor que el corpus no podía responder con los anclajes
existentes, y la regla permanente convirtió las dos serias en ataques formales
—la caracterización legal del acto de asignación ciudadana, y el costo de
capacidad administrativa de la operación tutelada— ambos desde entonces resueltos
y propagados. La cuarta ronda volvió el mismo instrumento sobre este manuscrito
mismo: cinco perfiles de revisor simulados (académico, derecho público,
arquitectura de sistemas, práctica del sector público, lector general instruido)
atacaron la v1.6 publicada, y sus cinco objeciones irresolubles se convirtieron
en ataques formales, cada uno ahora resuelto —la línea base de cero-control como
un hombre de paja de calibración (respondida por el séptimo experimento y una
regla de reporte vinculante), la reserva de ley sobre la competencia de
asignación (un registro de norma habilitante que supedita el modo vinculante), la
exclusión reputacional como una sanción no procesada (reclasificada: el diseño no
posee poder de exclusión con el cual sancionar), la trazabilidad de la asignación
frente al secreto de la preferencia (resuelta como secreto de la asignación
ciudadana con dinero público), y la paradoja de la adopción (una capa de adopción
bajo una frontera de tesis explícita). El requisito de honestidad del método se
aplica a sí mismo: varias
resoluciones responden a sus ataques con un explícito "acotado, no resuelto", y
el registro completo de revisión es público.

El bucle termina por la regla de integrar-o-acotar (P007). Su disciplina de
salida es lo que lo distingue del modelado de amenazas ordinario: todo ataque
acotado debe dejar tres artefactos —una oración de frontera explícita ("Core v0
no requiere X"), un riesgo residual visible y un enunciado de limitación de una
oración. La sección de limitaciones que sigue no es, por tanto, un gesto de
humildad; es la salida acumulada y adversarialmente generada del método. De los
cuarenta y tres ataques, ninguno fue desestimado; nueve de los quince de la
segunda ronda fueron clasificados como fundados de plano y los otros seis como
parcialmente fundados, los cinco de la ronda del manuscrito fueron clasificados
como fundados al menos en parte, y la respuesta del corpus a varios es un honesto
"acotado, no resuelto".

Usamos el bucle con un único equipo de diseño más asistencia de IA —razón por la
cual lo llamamos autocrítica estructurada antes que validación; un adversario
autoadministrado, por disciplinado que sea, no puede sustituir el ataque
independiente. Su siguiente aplicación obvia es con revisores genuinamente
independientes, que identificamos más abajo como el primer punto del trabajo
futuro.

## 8. Limitaciones

Enunciadas según la propia regla del método —cada una es una frontera registrada
con un riesgo residual nombrado.

**Construir el marco de elegibilidad está centralizado en los modos de
transición.** En los modos de operación cerrado y tutelado que Core v0 especifica
para los pilotos, la autoridad implementadora construye los ámbitos de
planificación; la arquitectura hace esa construcción pública, versionada,
portadora de mandato y disputable mediante la visibilidad, pero en esos modos no
la distribuye. Construir el ámbito significa definir el marco —qué propósitos,
qué porción del presupuesto, qué pisos protegidos, qué reglas de admisibilidad—,
no diseñar ni jerarquizar proyectos: la creación y la priorización de proyectos
siguen distribuidas incluso en modo tutelado, de modo que este poder de agenda
residual es el poder de decidir qué *puede* financiarse, nunca qué *se* financia.
Es importante no malinterpretar aquí nuestra propia simulación. Lo que esa
simulación muestra dominando todo otro margen de calidad es la calidad
informativa de la **priorización de proyectos** —los perfiles de asignación
agregados que sigue la porción financiada—, y esa priorización es distribuida por
diseño, incluso en modo tutelado; el resultado es por tanto un argumento *a favor*
de distribuir la construcción, no evidencia de que una agenda central gobierne la
entrega. El poder centralizado residual es el más estrecho: construir el marco de
elegibilidad es en sí mismo la segunda cara del poder (Bachrach y Baratz 1962;
Schattschneider 1960; Lukes 1974) —el poder de dejar algo fuera del menú—, que la
arquitectura responde, en estos modos, haciendo el marco público, versionado,
portador de mandato y disputable en vez de distribuyéndolo. Tres cosas acotan la
limitación con honestidad. Es una propiedad de los modos de transición, no de la
arquitectura: los modos de operación son estados configurados por país, y la
trayectoria diseñada es una fijación de agenda abierta y socialmente construida.
Es más estrecha que la porción pasiva: los ciudadanos involucrados asignan
manualmente, delegan, o adoptan perfiles configurables, de modo que los pesos de
la autoridad gobiernan plenamente solo la porción que nunca se involucra. Y ahora
está medida en lugar de supuesta: E4 muestra que la construcción abierta de los
pesos a partir de señales ciudadanas agregadas es viable y robusta frente a la
escala en el modelo, de modo que la restricción ya no es si la construcción
distribuida puede funcionar en principio sino si un mecanismo de elicitación puede
mantener las señales dispersas honestas, no sesgadas y representativas bajo la
presión de la manipulación, el clientelismo y la asignación expresiva —un problema
de diseño que el corpus supedita a condiciones en lugar de dar por resuelto. La
línea base comparativa también corresponde a este párrafo: bajo el modelo
institucional actual, la totalidad del presupuesto sigue un vector construido
centralmente que no es ni publicado, ni versionado, ni sustituible, ni anulable
por ciudadano alguno. Los modos de transición reproducen esa centralización de
manera visible y revocable; el modo abierto está diseñado para terminarla. Este
sigue siendo el principal problema abierto de la arquitectura, ahora con un premio
medido asociado a resolverlo —y por esa razón lo tratamos no como una limitación
entre muchas sino como el siguiente objeto del programa de investigación: el
diseño de la fijación de agenda abierta, incluida la arquitectura candidata en la
que una agenda distribuida se construye en paralelo a la de la propia autoridad y
el rol tutelado se estrecha a la revisión de admisibilidad de los conflictos entre
ambas, es el tema natural de un estudio de seguimiento y un piloto dedicados.

**La legitimidad procedimental no es mandato democrático —y la norma habilitante
aún no existe.** La plataforma registra la autorización externa para la migración
presupuestaria y las fórmulas de asignación (el Allocation Mandate); no puede
fabricar una autorización que la ley nunca otorgó. En la tradición continental de
las jurisdicciones de referencia, la asignación ciudadana vinculante requiere un
norma habilitante de rango suficiente que ningún estatuto actual provee
—los precedentes regionales (el estatuto de presupuesto participativo del Perú,
el marco del estatuto de la ciudad de Brasil) prueban que el instrumento es
alcanzable, no que exista— de modo que los despliegues lícitos de la arquitectura
hoy son consultivos y tutelados, en los que toda decisión de asignación material
permanece atribuida a la autoridad competente como una resolución pública
razonada; los resultados de entrega, medición y memoria reputacional operan sin
cambios bajo ese estatus, y solo el modo abierto maduro requiere asignación
vinculante. El debate normativo sobre sustituir la asignación atomizada por la
apropiación representativa (Rosanvallon 2008; Urbinati 2014) permanece abierto.
Bajo desacuerdo evaluativo profundo, la postura de la arquitectura es
procedimental en el sentido de Gaus (2011): sus reglas apuntan a ser
justificables desde puntos de vista morales diversos —que es lo que proveen los
registros de mandato, la neutralidad de motivos y la disciplina de crítica
comparativa— sin presuponer una doctrina comprehensiva compartida. Una objeción
adicional queda deliberadamente fuera de alcance: el modelo toma como dado el
presupuesto recaudado coercitivamente y mejora su administración; el desafío
libertario a la recaudación misma (Nozick 1974) ni se responde ni se da por
sentado aquí. Las fórmulas de asignación ponderadas por contribución, en
particular, son señaladas por la arquitectura como desviaciones plutocráticas que
requieren autorización superior explícita.

**La dependencia fiscal es medible, no exigible.** El Estado controla la llave
del presupuesto. El Fiscal Commitment Profile convierte el estrangulamiento de
invisible a atribuible —la latencia de entrega, las órdenes válidas no
ejecutadas, los recortes de cuota a mitad de ciclo, todos se vuelven datos
públicos— pero ningún software obliga a un soberano a pagar (Kydland y Prescott 1977; North y Weingast
1989). El compromiso creíble debe provenir de la ley a nivel de país.

**La calidad de verificación se supone, luego se tasa.** Las Proposiciones 1–4
toman las probabilidades de detección y descubrimiento como parámetros. En
mercados de control delgados —mercados de bienes de confianza donde la calidad
es inobservable para el comprador (Akerlof 1970; Dulleck y Kerschbamer
2006)— ambas colapsan simultáneamente, y los únicos
márgenes compensatorios son los términos financieros y la verificación importada
(remota o transterritorial). La arquitectura tasa la verificación débil; no puede
conjurar verificadores.

**El realismo conductual corta en ambos sentidos.** La simulación reivindica
diseñar para ciudadanos desatentos, pero igualmente muestra que un despliegue
débil en valores por defecto degenera en asignación impulsada por saliencia. Los
fenómenos fuera de la plataforma —intermediación clientelar, polarización
expresiva, colusión conducida enteramente fuera del sistema— se hacen más
difíciles y más descubribles, nunca imposibles; las afirmaciones de la
arquitectura son comparativas (contra el monopolio opaco), no absolutas.

**La meta-gobernanza en modo abierto se difiere por diseño.** El procedimiento de
cambio de reglas, el versionado y las restricciones de no-sorpresa están
especificados; la mecánica constitucional —reglas para hacer reglas (Buchanan y Tullock
1962)— de quién vota sobre los cambios de
protocolo en un despliegue maduro en modo abierto deliberadamente no lo está. El
despliegue en modo abierto está supeditado a resolverlos.

**La adopción selecciona, y la tesis no depende de ello.** Este artículo responde
si la arquitectura puede construirse y si entrega más valor —no si alguna
autoridad la quiere. El corpus provee la capa de despliegue para una autoridad
que ya ha decidido (líneas base prospectivas medidas desde el inicio de la
instrumentación, atribución de crédito sobre la entrega verificada, atribución
institucional antes que personal de los vencimientos de plazo en el primer ciclo,
y una cláusula de simetría que impide a cualquier operador eximir sus propios
proyectos), y nombra los arquetipos de adoptante plausibles —el retador
pos-escándalo, el gobierno superior que lo mandata, el financiador externo que lo
condiciona. El efecto de selección honesto se mantiene: la arquitectura será
plausiblemente adoptada primero por patrocinadores relativamente limpios o recién
llegados, en los lugares que menos la necesitan.

**Epistémicamente, este es el diseño autocriticado de un solo equipo.** El corpus
adversarial fue producido por el mismo esfuerzo de investigación que ataca, con
asistencia de IA; la línea base del statu quo de la simulación ahora está anclada
en auditoría (sus parámetros justificados ítem por ítem a partir de los hallazgos
publicados de instituciones de auditoría) pero no calibrada a un conjunto de
datos de PP específico, y los parámetros restantes son plausibles antes que
medidos; y no se ha realizado ningún piloto. Las tres validaciones faltantes —ataque experto independiente,
calibración a datos empíricos de PP, y un piloto tutelado acotado (sector
deportivo, un municipio)— son la siguiente fase del programa de investigación, en
ese orden.

## 9. Ruta de implementación

La arquitectura está construida para una adopción gradual y revocable, y esta
sección es explícita sobre lo que afirma y lo que no: la pregunta de
investigación de este artículo —si la arquitectura de asignación bicentenaria
puede mejorarse con la tecnología de hoy, y en cuánto— se responde con
independencia de si alguna autoridad elige desplegarla; lo que sigue es la ruta
para una que ya lo ha decidido. Un país abre una función pública (el piloto de
referencia es la infraestructura deportiva municipal), migra una pequeña cuota
presupuestaria bajo un modo de operación tutelado, y retiene la revisión de
admisibilidad —con toda decisión y demora tutelada pública por construcción. El
encuadre por defecto del piloto es prospectivo: la instrumentación comienza en la
adopción, la brecha de visibilidad se publica como la línea de partida declarada
del adoptante ("mídanme desde aquí"), y las cifras previas a la adopción se
reportan por separado, de manera impersonal y como contexto —la configuración
bajo la cual históricamente se han adoptado instrumentos que exponen. Las
métricas de madurez funcional (mezcla de
participación, cuota de flujo por defecto, tasas de independencia de la
fiscalización, indicadores de resistencia del sistema establecido, confiabilidad fiscal)
determinan si el despliegue gana un ámbito más amplio, y sus trayectorias, no la
retórica, responden si la distribución supera a la línea base local. La condición
de salida es honesta en ambas direcciones: un piloto cuyos indicadores se
estancan bajo el ahogamiento del sistema establecido documenta ese hecho públicamente, lo
cual es en sí mismo información que el sistema actual nunca produce.

La transición entre regímenes está ella misma medida. Los experimentos
complementarios (Offermann 2026b) cuantifican el régimen semi-abierto de la
escalera de regímenes operativos (docs/110) —un sobre presupuestario acotado y mandatado (envelope) que
corre en piloto automático de protocolo junto al presupuesto tradicional de la
autoridad— como una mezcla fiscal: sobre un piso de granularidad de cartera de
aproximadamente diez por ciento, el valor verificado mezclado sube de forma
monótona y casi lineal con la cuota del sobre dentro de ese aparato, desde el
punto de equilibrio cerca del ocho a diez por ciento hacia arriba —un contraste
del aparato anterior, ahora sujeto a la salvedad del multiplicador retirado
(Sección 6), no un punto final calibrado. La transición desde el status quo hacia
el régimen abierto es una perilla, no un salto: la adopción puede proceder por
incrementos.

Los mismos experimentos midieron una variable que este corpus había dejado sin
regular: *cuándo* libera la autoridad el presupuesto hacia la maquinaria de
asignación. La regla de despliegue resultante: medir la liberación contra un
techo de obra-en-proceso calibrado al caudal (throughput) y tiempo de ciclo de la
tubería de entrega-y-verificación —nunca contra el calendario. La liberación
por calendario congela meses de presupuesto en custodia y satura la verificación;
y cuando la capacidad de verificación es escasa, ninguna política de liberación
compensa —la capacidad de verificación es el techo de la tubería antes que su
instrumento anti-fraude. La regla es condicional a un instrumento de arrastre
plurianual (el sobre semi-abierto es precisamente tal vehículo); bajo
anualidad presupuestaria estricta degenera a medición intra-anual.

Finalmente, la premisa tecnológica que reduce los costos de participación del
lado ciudadano (el tutor de IA) aplica simétricamente al lado del control. La
verificación por máquina de las clases de evidencia protocolizables multiplica
la capacidad de fiscalización, con humanos como segunda instancia permanente
—re-verificación muestreada con un piso publicado, controles sembrados de
respuesta conocida como instrumento de calibración y detección de deriva,
auditando al verificador en vez de competir con él— de modo que la tasa de
error de la máquina permanece medida y la profesión humana de control sigue
financiada desde el presupuesto de control que ella alivia. Medido sobre un
panel de cinco familias reales de modelos (Offermann 2026b), los modelos
frontera convergen en buena especificidad y detección de fraude sobre
evidencia legible en documentos, mientras los modelos locales pequeños son más
débiles, y los contratos de evidencia que incluyen referencias objetivas de
comparación (precios de mercado, bandas de duración, umbrales) permiten al
verificador estricto juzgar en vez de adivinar. La capa máquina alcanza solo
el fraude legible en documentos de la fase de entrega —la calidad por debajo de la especificación física y el robo previo al contrato quedan enteramente en manos humanas, de modo que
la atestación de procedencia es evidencia de manipulación en la captura, no
prueba de grado judicial, y la admisibilidad probatoria aún requiere custodia, contradicción y
peritaje. La evidencia ciudadana contrapuesta —productores independientes con
intereses opuestos al ejecutor, cuya existencia anticipada disuade el desvío—
mantiene la vigilancia distribuida incluso cuando el trabajo rutinario de
verificación documental se reduce; pero su fuerza equivale a la *independencia*
de la capa de contribuyentes, y un anillo colusivo que la capture o silencie
borra el efecto. La colusión entre capas es, de hecho, el único adversario que
sortea la disuasión por hito y mueve la fuga un orden de magnitud (mientras la
ventaja de valor entregado sobrevive), así que la resistencia a la colusión
—propiedad efectiva verificada, resistencia Sybil de los contribuyentes y
descentralización del asignador y del piso de presupuesto de auditoría— es un
requisito de primera clase (docs/113), no una salvedad residual.

## 10. Conclusión

Los Estados no recaudan impuestos para asignar presupuestos; asignan
presupuestos para mejorar las vidas de la sociedad que los financió (Musgrave
1959). Si, tras una redistribución, la sociedad no está mejor, la redistribución
no logró nada —el balde agujereado de Okun (1975) transportó agua que nunca
llegó. El criterio correcto para cualquier institución de asignación no es, por
tanto, cuán fielmente ejecuta un plan sino cuánto valor entregado y verificado
produce por unidad de recurso público. El experimento final de este artículo
aplica ese criterio de extremo a extremo, y su estructura puede enunciarse como
dos preguntas que cualquiera puede hacerse. Primero: tómense los mismos
proyectos, diseñados de manera idéntica, y cámbiese únicamente quién ejecuta y
cómo se lo vigila —¿acaso el régimen visiblemente auditado con consecuencias
reputacionales entrega más que el opaco sin ellas? Lo hace, en el modelo: un +43%
de valor entregado sobre carteras idénticas, porque bajo la verificación
supeditada a hitos la condición de incentivos se cumple y el desvío se disuade
antes de que ocurra. Segundo: manténgase fija la capa de control y cámbiese
únicamente qué proyectos se financian, ¿planificados centralmente o priorizados
socialmente? La priorización social entrega más bajo cualquiera de los dos
regímenes de control (+53-54%). Y los dos efectos interactúan en lugar de
solo sumarse: la entrega verificada amplifica la buena selección, porque un
proyecto bien elegido que tiene fugas pierde su ventaja. **No** adjuntamos un
multiplicador compuesto calibrado a esta interacción: una prueba pre-registrada,
simétrica y solo-de-selección
encuentra la ventaja de selección distribuido-menos-central positiva pero pequeña
(un efecto agrupado de ~0.026 de un benchmark de información completa, por debajo de
su umbral de materialidad de 0.05). Sobre lo que se sostiene el artículo es la
arquitectura y la *dirección* del mecanismo, no el estimador puntual. La línea base parametrizada por auditorías produjo la oración más aguda del artículo: la
auditoría a su intensidad real y documentada —detección sin consecuencias
persistentes— no disuade desvío alguno en el modelo; encoge la brecha reportada,
de veintinueve puntos a diecinueve, nunca la real. El instrumento que mueve el
valor entregado es el que el statu quo carece a cualquier intensidad de
auditoría: consecuencias que persisten. La rendición de cuentas sin memoria es
contabilidad.

El punto más profundo es el de Friedman: una administración central gasta el
dinero de otras personas en otras personas, la categoría de gasto con el menor
cuidado tanto por el costo como por el valor (Friedman y Friedman 1980). Esta
arquitectura no responde a ese problema con exhortación; reconecta las cañerías
del balde. La planificación permanece —como el hilo conductor que fija ámbitos,
pisos y mandatos— pero el motor del valor es la capa de conversión: promesas
medibles, liberación condicional, verificación independiente, consecuencias que
se acumulan en reputación, y un medidor en cada fuga. La pregunta que este
artículo responde no es, por tanto, si los Estados deberían ser más grandes o más
pequeños, sino si las capas de la actividad estatal que fallan a través del
monopolio de información e incentivos pueden rearquitecturarse para fallar menos
—y para mostrar sus fallas cuando las tienen. Para una de esas capas hemos
especificado una arquitectura completa, demostrado las condiciones de incentivos
de las que dependen sus mecanismos, medido la selección, la agregación y la
entrega en simulación contra una línea base que los propios auditores del sistema
establecido suministraron, y sometido el conjunto a cinco rondas de revisión
adversarial documentada con una disciplina explícita de integrar-o-acotar. El
resultado es deliberadamente modesto en sus afirmaciones e inusualmente explícito
sobre sus bordes: la calidad de la asignación cabalga sobre la calidad
informativa de aquello que construya el vector de pesos, cuya construcción
abierta se mide viable pero cuya elicitación honesta sigue siendo el problema
abierto; el valor entregado cabalga sobre una verificación cuyas condiciones de
mercado deben tasarse; la legitimidad cabalga sobre mandatos que la plataforma
puede registrar pero no crear. Lo que distingue a la propuesta es que estos
bordes están especificados, monitoreados y adjuntos a objetos nombrados —que es,
sostenemos, cómo se ve cuando el diseño institucional se trata como una
disciplina de ingeniería antes que como una ideológica.

## Apéndice: objetivos de calibración de E4

Las magnitudes de E4-v4/v5 son internas al modelo; la tabla nombra, para cada
parámetro, el dato real que *podría* informarlo —volviendo la frontera entre lo
interno al modelo y lo anclado empíricamente una línea visible y no un caveat
enterrado en prosa (detalles en `research/e4-calibration-targets.md`). El
%-benchmark del central es un *output* que el modelo computa, pero mapearlo a las
razones observadas realizado/tasado **no es una superposición directa**: son
constructos distintos (§6), así que es un **objetivo de validación candidato que
requiere un puente de constructo explícito**, no una calibración en un paso.

| Cantidad del modelo | Valor modelo | Proxy real | Dataset(s) candidato | Estado |
|---|---|---|---|---|
| %-benchmark del central | 46–68% | valor realizado ÷ tasado | calificaciones IEG del Banco Mundial; base de megaproyectos de Flyvbjerg | objetivo candidato; requiere mapeo de constructo explícito |
| η (ceguera al daño) | 0–0.5 | desperdicio pasivo vs activo | Bandiera-Prat-Valletti 2009 (83% pasivo, específico del contexto: compras de bienes estandarizados en Italia) | dirección anclada |
| β (desigualdad de voz) | 0.2–0.5 | sesgo de participación en PP | NYC / París / Porto Alegre; Decidim / Consul | calibrable |
| q, m (detección) | q ≈ 0.5–1%, m en cientos | tasas de queja / denuncia | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibrable |
| umbral λ | central ≈ 0.10 | rentas de compras / profundidad de soborno | Olken 2007; WB Enterprise Surveys | calibrable |
| pena f | igual en ambos lados | escala de sanción legal | mantenida igual (conservador) | elección de alcance |

## Referencias

- Akerlof, G. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84(3).
- Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
- Bachrach, P., and M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Besley, T., and S. Coate (2003). "Centralized versus Decentralized Provision of Local Public Goods: A Political Economy Approach." *Journal of Public Economics* 87(12).
- Baiocchi, G., and E. Ganuza (2017). *Popular Democracy: The Paradox of Participation*. Stanford University Press.
- Bandiera, O., A. Prat, and T. Valletti (2009). "Active and Passive Waste in Government Spending: Evidence from a Policy Experiment." *American Economic Review* 99(4).
- Bastiat, F. (1850). *Ce qu'on voit et ce qu'on ne voit pas* [What Is Seen and What Is Not Seen]. Paris.
- Becker, G. (1968). "Crime and Punishment: An Economic Approach." *Journal of Political Economy* 76(2).
- Becker, G., and G. Stigler (1974). "Law Enforcement, Malfeasance, and Compensation of Enforcers." *Journal of Legal Studies* 3(1).
- Bikhchandani, S., D. Hirshleifer, and I. Welch (1992). "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades." *Journal of Political Economy* 100(5).
- Brennan, J. (2016). *Against Democracy*. Princeton University Press.
- Blum, C., and C. I. Zuber (2016). "Liquid Democracy: Potentials, Problems, and Perspectives." *Journal of Political Philosophy* 24(2).
- Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal* 13(4).
- Buchanan, J., and G. Tullock (1962). *The Calculus of Consent*. University of Michigan Press.
- Buterin, V., Z. Hitzig, and E. G. Weyl (2019). "A Flexible Design for Funding Public Goods." *Management Science* 65(11).
- Campbell, D. (1976). "Assessing the Impact of Planned Social Change." Occasional Paper 8, Dartmouth College.
- Casella, A. (2012). *Storable Votes: Protecting the Minority Voice*. Oxford University Press.
- Coase, R. (1937). "The Nature of the Firm." *Economica* 4(16).
- Condorcet, M. de (1785). *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix*. Imprimerie Royale.
- De Filippi, P., and A. Wright (2018). *Blockchain and the Law: The Rule of Code*. Harvard University Press.
- Downs, A. (1957). *An Economic Theory of Democracy*. Harper.
- Dulleck, U., and R. Kerschbamer (2006). "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods." *Journal of Economic Literature* 44(1).
- Dyck, A., A. Morse, and L. Zingales (2010). "Who Blows the Whistle on Corporate Fraud?" *Journal of Finance* 65(6).
- Epstein, R. (1995). *Simple Rules for a Complex World*. Harvard University Press.
- Ferraz, C., and F. Finan (2008). "Exposing Corrupt Politicians: The Effects of Brazil's Publicly Released Audits on Electoral Outcomes." *Quarterly Journal of Economics* 123(2).
- Flyvbjerg, B., N. Bruzelius, and W. Rothengatter (2003). *Megaprojects and Risk: An Anatomy of Ambition*. Cambridge University Press.
- Friedman, M. (1962). *Capitalism and Freedom*. University of Chicago Press.
- Friedman, M., and R. Friedman (1980). *Free to Choose*. Harcourt.
- Fung, A., and E. O. Wright (2003). *Deepening Democracy: Institutional Innovations in Empowered Participatory Governance*. Verso.
- Gaus, G. (2011). *The Order of Public Reason*. Cambridge University Press.
- Gibbard, A. (1973). "Manipulation of Voting Schemes: A General Result." *Econometrica* 41(4).
- Gonçalves, S. (2014). "The Effects of Participatory Budgeting on Municipal Expenditures and Infant Mortality in Brazil." *World Development* 53.
- Goodhart, C. (1975). "Problems of Monetary Management: The UK Experience." *Papers in Monetary Economics*, Reserve Bank of Australia.
- Green, J., and J.-J. Laffont (1979). *Incentives in Public Decision-Making*. North-Holland.
- Hayek, F. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4).
- Hirschman, A. (1970). *Exit, Voice, and Loyalty*. Harvard University Press.
- Holmström, B. (1979). "Moral Hazard and Observability." *Bell Journal of Economics* 10(1).
- Holmström, B. (1999). "Managerial Incentive Problems: A Dynamic Perspective." *Review of Economic Studies* 66(1).
- Jensen, M., and W. Meckling (1976). "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure." *Journal of Financial Economics* 3(4).
- Kahng, A., S. Mackenzie, and A. Procaccia (2018). "Liquid Democracy: An Algorithmic Perspective." *AAAI*.
- Kydland, F., and E. Prescott (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy* 85(3).
- Laffont, J.-J., and J. Tirole (1991). "The Politics of Government Decision-Making: A Theory of Regulatory Capture." *Quarterly Journal of Economics* 106(4).
- Lalley, S., and E. G. Weyl (2018). "Quadratic Voting: How Mechanism Design Can Radicalize Democracy." *AEA Papers and Proceedings* 108.
- Landemore, H. (2020). *Open Democracy: Reinventing Popular Rule for the Twenty-First Century*. Princeton University Press.
- Lipsey, R., and K. Lancaster (1956). "The General Theory of Second Best." *Review of Economic Studies* 24(1).
- Lukes, S. (1974). *Power: A Radical View*. Macmillan.
- Lupia, A., and M. McCubbins (1998). *The Democratic Dilemma: Can Citizens Learn What They Need to Know?* Cambridge University Press.
- Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
- Michels, R. (1911). *Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy*.
- Mises, L. von (1920). "Economic Calculation in the Socialist Commonwealth." Translated in F. Hayek, ed., *Collectivist Economic Planning* (1935).
- Nozick, R. (1974). *Anarchy, State, and Utopia*. Basic Books.
- Oates, W. (1972). *Fiscal Federalism*. Harcourt Brace Jovanovich.
- Offermann, M. (2026b). "Stress-Testing a Distributed Public-Resource Governance Architecture: Adversarial and Behavioral Agent-Based Evidence." Companion computational-experiments paper and repository, doi:10.5281/zenodo.21246089.
- Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
- Olken, B. (2007). "Monitoring Corruption: Evidence from a Field Experiment in Indonesia." *Journal of Political Economy* 115(2).
- North, D., and B. Weingast (1989). "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England." *Journal of Economic History* 49(4).
- Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press.
- Olson, M. (1982). *The Rise and Decline of Nations*. Yale University Press.
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Peixoto, T., and J. Fox (2016). "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" *IDS Bulletin* 47(1).
- Power, M. (1997). *The Audit Society: Rituals of Verification*. Oxford University Press.
- Reinikka, R., and J. Svensson (2004). "Local Capture: Evidence from a Central Government Transfer Program in Uganda." *Quarterly Journal of Economics* 119(2).
- Rosanvallon, P. (2008). *Counter-Democracy: Politics in an Age of Distrust*. Cambridge University Press.
- Salganik, M., P. Dodds, and D. Watts (2006). "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market." *Science* 311(5762).
- Samuelson, P. (1954). "The Pure Theory of Public Expenditure." *Review of Economics and Statistics* 36(4).
- Satterthwaite, M. (1975). "Strategy-Proofness and Arrow's Conditions: Existence and Correspondence Theorems for Voting Procedures and Social Welfare Functions." *Journal of Economic Theory* 10(2).
- Schattschneider, E. E. (1960). *The Semisovereign People*. Holt, Rinehart and Winston.
- Scott, J. (1998). *Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed*. Yale University Press.
- Sen, A. (1999). *Development as Freedom*. Oxford University Press.
- Sowell, T. (1980). *Knowledge and Decisions*. Basic Books.
- Stigler, G. (1971). "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science* 2(1).
- Stokes, S. (2005). "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina." *American Political Science Review* 99(3).
- Thompson, D. (1980). "Moral Responsibility of Public Officials: The Problem of Many Hands." *American Political Science Review* 74(4).
- Tiebout, C. (1956). "A Pure Theory of Local Expenditures." *Journal of Political Economy* 64(5).
- Urbinati, N. (2014). *Democracy Disfigured: Opinion, Truth, and the People*. Harvard University Press.
- Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders." *Journal of Finance* 16(1).
- Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
- Williamson, O. (1985). *The Economic Institutions of Capitalism*. Free Press.
- Wilson, J. Q. (1973). *Political Organizations*. Basic Books.
- Wittman, D. (1989). "Why Democracies Produce Efficient Results." *Journal of Political Economy* 97(6).

---

*Materiales acompañantes: demostraciones formales (`research/formal-models.md`),
código de simulación y tablas completas de resultados
(`scripts/simulation/allocation-sim.mjs`,
`research/simulation-results.md`), la base de evidencia de instituciones de
auditoría (`research/audit-evidence-base.md`), el corpus de la arquitectura
(`docs/`, `knowledge/`), y el registro adversarial completo (`attacks/`,
`defenses/`, resoluciones aceptadas `docs/67`–`docs/113`; los cuarenta y tres
ataques resueltos y propagados).*
