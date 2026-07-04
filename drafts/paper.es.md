# Una Arquitectura Funcional para la Gobernanza Distribuida: Diseño de Mecanismos, Validación Adversarial y Evidencia Computacional para la Distribución Institucional Selectiva

**Working paper — v1.4 (julio de 2026). Revisado tras una ronda adversarial de arbitraje y revisiones metodológicas del autor sobre la simulación y su encuadre, todas parte del registro público.**

*Traducción al español del working paper v1.4 (drafts/paper.md, versión autoritativa en inglés).*

*© 2026 Mauricio Offermann. Licenciado bajo CC BY-NC-ND 4.0 en espera de la selección de la sede de publicación — véase LICENSE.md en la raíz del repositorio. Se ruega citar según se indica en CITATION.cff.*

## Resumen

Los debates sobre el Estado suelen conducirse en torno a su tamaño —más Estado
o menos Estado— antes que a su arquitectura. Este artículo propone y defiende
una alternativa funcional: descomponer la actividad estatal en capas
funcionales, distribuir las capas donde la tecnología moderna de coordinación
supera al monopolio institucional, y mantener central las capas donde no lo
hace. Presentamos una arquitectura de referencia completa (Core v0) para la
capa más disputable, la asignación acotada de recursos públicos: la ciudadanía
asigna una cuota legalmente mandatada de un presupuesto público existente entre
proyectos verificables, bajo estricta separación de los roles de proponer,
modelar, ejecutar, producir evidencia y auditar; los fondos se mueven
únicamente mediante liberación condicional supeditada a hitos (milestones) y
respaldada por garantías materializadas externamente; y todo acto de
consecuencia deja un rastro de auditoría público y estratificado. Tres
contribuciones distinguen esto de la literatura sobre gobernanza participativa
sobre la que se construye. Primero, diseño de mecanismos: derivamos la
condición de compatibilidad de incentivos para el desembolso supeditado a hitos,
una condición de a prueba de colusión para la fiscalización protocolizada con
k-corroboración, y mostramos formalmente que los entornos de verificación
débiles deben tasarse en términos financieros —resultados que convierten las
intuiciones de diseño de la arquitectura en proposiciones verificables. Segundo,
evidencia computacional: una simulación de 10.000 agentes de asignación bajo
restricción de atención muestra que el cierre por meta de financiamiento
funciona como dispositivo anticoncentración pero no como dispositivo de calidad,
que la calidad de la asignación la sostiene la calidad informativa del vector de
pesos que sigue la capa por defecto antes que la atención ciudadana, y que la
caída de la participación es sobrevivible exactamente allí donde la capa por
defecto es fuerte; un cuarto experimento preregistrado que modela el conocimiento
de manera simétrica halla que agregar señales ciudadanas dispersas en ese vector
supera a la construcción central de ancho de banda fijo en cada escala probada
—siempre que exista una institución de agregación y que las señales sean
honestas, no sesgadas y efectivamente recogidas. Tercero,
método: la arquitectura se desarrolló bajo revisión adversarial sistemática
—treinta y cinco resúmenes de ataque (attack briefs), cada uno con una defensa
emparejada y una resolución aceptada bajo una regla explícita de integrar-o-acotar
que o bien añade un mecanismo a través de objetos existentes o bien registra una
frontera con un riesgo residual nombrado, todo propagado al corpus de la
arquitectura; los dos últimos ataques fueron generados por una revisión externa
simulada de cinco perfiles del documento acompañante de este artículo. El
resultado es una arquitectura cuyas limitaciones forman parte de su
especificación y cuyo registro de revisión es en sí mismo público. Enunciamos
esas limitaciones con franqueza: en los modos de operación cerrado y tutelado
que la arquitectura especifica para los pilotos, las agendas de planificación
las construye la autoridad implementadora, y la calidad informativa de esa
construcción es, según nuestra propia simulación, la restricción vinculante
sobre la calidad de la asignación —la trayectoria diseñada es una fijación de
agenda abierta y socialmente construida, cuya viabilidad dentro del modelo mide
el cuarto experimento y cuya mecánica de elicitación sigue siendo un problema de
diseño supeditado a condiciones; la dependencia fiscal respecto del Estado
establecido es medible pero no exigible; y aún no se ha realizado ningún piloto
empírico.

**Palabras clave:** gobernanza distribuida, presupuesto participativo, diseño de
mecanismos, gobernanza policéntrica, rendición de cuentas pública, simulación
basada en agentes, democracia líquida, diseño institucional.

---

## 1. Introducción

Los Estados modernos concentran tres cosas que no necesitan estar concentradas
juntas: la autoridad para decidir en qué se gasta el dinero público, la
capacidad operativa para ejecutar ese gasto, y la autoridad epistémica para
certificar que el gasto logró algo. Allí donde las tres residen dentro de una
única jerarquía institucional, la rendición de cuentas depende de que la
jerarquía se audite a sí misma (Bovens 2007). Las consecuencias predecibles —asignación
discrecional, cumplimiento autorreportado, captura por intereses concentrados y
desconfianza ciudadana— están documentadas en toda tradición de la economía
política, desde la captura regulatoria (Stigler 1971; Laffont and Tirole 1991)
hasta el cumplimiento ritualizado de la sociedad de la auditoría (Power 1997) y
las coaliciones distributivas que se atrincheran en polities estables (Olson
1982).

El debate estándar responde con cantidad: encoger el Estado o hacerlo crecer.
Ambas posturas tratan al Estado como un objeto único. Este artículo sostiene que
la pregunta tratable es arquitectónica, no volumétrica: *¿qué capas funcionales
de la actividad estatal aún requieren monopolio central, y cuáles pueden ahora
distribuirse —con mejor rendición de cuentas que el statu quo— dado que la
coordinación digital ha colapsado los costos de transacción que antaño
justificaban la jerarquía?* (Coase 1937; Hayek 1945; Williamson 1985) —un linaje
de conocimiento-y-coordinación que corre desde el debate del cálculo (Mises 1920)
pasando por el conocimiento disperso de Hayek hasta su tratamiento institucional
en Sowell (1980): las decisiones deben residir donde está el conocimiento,
disciplinadas por la retroalimentación antes que por la autoridad articulada.
Las garantías de derechos, la fuerza legítima, la estabilidad macrofiscal y la
adjudicación exigible plausiblemente permanecen centrales. El procesamiento de
información, la asignación de recursos a nivel de proyecto, la ejecución de
servicios, la producción de evidencia y la auditoría plausiblemente no.

Hacemos el argumento concreto antes que programático. Core v0 es una
arquitectura de referencia completa para distribuir una capa acotada —la
asignación, ejecución y verificación de una cuota legalmente mandatada de un
presupuesto público existente— desarrollada hasta el nivel de objetos nombrados,
máquinas de estado y reglas de decisión (un corpus de más de cien documentos de
arquitectura, cincuenta y nueve hipótesis diseñadas y treinta y cinco revisiones
adversariales, todo público). La ciudadanía recibe capacidad de asignación
periódica y no retirable en una billetera cívica (civic wallet); los proyectos
atraviesan un ciclo de vida de cierre paralelo en el que financiamiento,
fiscalización independiente, compromisos de evidencia y confirmación de
beneficiarios deben cerrar todos antes de la ejecución; el ejecutor nunca
selecciona ni paga a sus propios auditores —eliminando el costo de agencia
del cumplimiento auto-supervisado (Jensen and Meckling 1976)—; el dinero se mueve solo sobre hitos
revisados con retención y garantías materializadas externamente; y toda
transición de estado de consecuencia queda registrada en un rastro legible por
la ciudadanía y auditable por expertos.

La razón para tomar en serio un ejercicio de diseño como investigación es lo que
se le hizo. Nuestras contribuciones son:

1. **Un principio de distribución funcional con una disciplina comparativa
   explícita.** Las críticas a la arquitectura deben evaluarse contra cómo el
   modelo institucional actual resuelve el mismo problema, no contra un ideal
   (Sección 3). Esto bloquea la falacia del nirvana en ambas direcciones.

2. **Formalización de los mecanismos centrales** (Sección 5). Modelamos el
   desembolso supeditado a hitos como un juego principal-agente y derivamos su
   condición de compatibilidad de incentivos; modelamos el soborno de
   fiscalizadores asignados por protocolo y derivamos una condición de a prueba
   de colusión bajo k-corroboración; y demostramos dos estáticas comparativas
   relevantes para el diseño: la verificación débil debe compensarse con
   términos financieros, y las garantías son contraproducentes cuando la calidad
   de detección cae por debajo del costo del capital.

3. **Evidencia computacional** (Sección 6). Una simulación basada en agentes,
   sin dependencias y con semilla fija, de 10.000 ciudadanos pone a prueba los
   supuestos conductuales de la arquitectura bajo ignorancia racional, atención
   de descubrimiento limitada y cascadas de prueba social. Los resultados
   disciplinan el diseño: apoyan algunas afirmaciones, afilan otras, cuantifican
   el apalancamiento concentrado en la capa de construcción de ámbitos, y miden
   una construcción abierta viable de ella.

4. **Validación adversarial como método** (Sección 7). La arquitectura fue
   atacada sistemáticamente —treinta y cinco resúmenes de ataque anclados en las
   literaturas de ciencia política, economía y derecho, cada uno respondido por
   una defensa emparejada y resuelto bajo una regla explícita de
   integrar-o-acotar, con cada resolución propagada a través del corpus y el
   registro completo de revisión público por construcción. Proponemos este bucle,
   y su regla de terminación, como un método reutilizable para la investigación
   en diseño institucional.

La Sección 8 enuncia las limitaciones con el mismo cuidado que los resultados,
porque bajo nuestro método ellas son resultados: cada una es un riesgo residual
nombrado y acotado.

## 2. Trabajo relacionado

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
de un presupuesto municipal a asambleas ciudadanas (Wampler 2007; Baiocchi and
Ganuza 2017). Empíricamente, el PP mejora algunos resultados fiscales pero
sufre de decaimiento del involucramiento, captura por minorías organizadas y
vínculos débiles entre asignación y entrega verificada (Peixoto and Fox 2016).
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

**Democracia líquida.** La delegación transitiva o acotada promete flexibilidad
entre la participación directa y la representativa, al costo de la concentración
(Blum and Zuber 2016; Kahng, Mackenzie and Procaccia 2018). Core v0 adopta
delegación acotada, revocable y no compensada con visibilidad obligatoria de la
concentración, y —siguiendo la advertencia de Michels (1911) antes que
desestimarla— trata la concentración de delegados como un riesgo monitoreado con
umbrales de estrés, no como un problema resuelto.

**Gobernanza digital y de blockchain.** La literatura sobre DAOs demostró tanto
la viabilidad de la asignación colectiva de recursos codificada por reglas como
su falla característica: la votación plutocrática por tokens y la captura de la
gobernanza (De Filippi and Wright 2018). Core v0 deliberadamente no es un diseño
de blockchain —la identidad es verificada antes que seudónima, y el Estado
soberano permanece como fuente de fondos y de ley— pero importa la lección de
que la meta-gobernanza es la superficie de ataque de mayor apalancamiento
(Sección 8).

**Diseño de mecanismos y auditoría.** Nuestros modelos formales son aplicaciones
elementales del riesgo moral bajo observación imperfecta (Holmström 1979) y de
la colusión en jerarquías de supervisión (Laffont and Tirole 1991), con la ley
de Goodhart (Goodhart 1975; Campbell 1976) como advertencia permanente contra la
manipulación de métricas. El diseño de mecanismos existente más cercano para la
asignación ciudadana de fondos públicos es el financiamiento cuadrático (plural)
(Buterin, Hitzig and Weyl 2019), que tasa la concentración mediante la curvatura
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
liberación. La contribución aquí no es la profundidad técnica sino la
especificidad: los parámetros de los modelos mapean uno a uno con objetos
arquitectónicos nombrados, de modo que cada proposición es un dial
implementable.

**Qué es nuevo.** Hasta donde sabemos, ningún trabajo previo combina (i) una
descomposición funcional de la actividad estatal en capas distribuibles y no
distribuibles, (ii) una arquitectura completa a nivel de objetos para la capa de
asignación, (iii) un análisis formal de incentivos de los mecanismos específicos
de esa arquitectura, (iv) simulación conductual de sus supuestos de cara a la
ciudadanía, y (v) un método documentado de revisión adversarial con una regla de
detención explícita.

## 3. El principio de distribución funcional

Analizamos el Estado como una pila de capas funcionales antes que como una única
institución: (a) garantías de derechos y fuerza legítima; (b) adjudicación
vinculante; (c) creación de reglas; (d) gestión macrofiscal; (e) planificación y
priorización; (f) asignación de recursos a emprendimientos concretos; (g)
ejecución y prestación de servicios; (h) producción de evidencia sobre la
entrega; e (i) evaluación y rendición de cuentas. El principio de distribución
es:

> Una capa es candidata a la distribución cuando se cumplen tres condiciones:
> sus fallas bajo monopolio son fallas de información e incentivos antes que
> fallas de coordinación-de-la-fuerza; la provisión distribuida puede hacerse
> *más* observable que la provisión monopólica; y la capa puede acotarse de modo
> que su falla no cascadee hacia las capas no distribuibles.

Las capas (a), (b) y (d) fallan la primera o la tercera condición y permanecen
centrales en nuestro diseño. Las capas (f) a (i) pasan las tres, y Core v0 las
distribuye conjuntamente —conjuntamente, porque distribuir la asignación sin
distribuir la verificación reproduce la brecha de entrega del PP, y distribuir
la verificación sin la asignación reproduce la sociedad de la auditoría.

La capa (e), la planificación, es el caso deliberadamente sin resolver: Core v0
requiere que los ámbitos de planificación (Planning Scopes) sean públicos,
versionados y portadores de mandato, pero no distribuye su construcción. La
Sección 6 muestra que esto no es un detalle: es la restricción vinculante de
todo el diseño.

Dos reglas metodológicas gobiernan todo lo que sigue. La **regla de crítica
comparativa** (P001): toda objeción se evalúa contra la línea base
institucional actual, no contra un ideal —una dificultad compartida por ambos
sistemas es un problema general de la gobernanza, no una refutación de la
propuesta. La **regla de integrar-o-acotar** (P007): una vez que la arquitectura
central está completa, una objeción fundada produce un nuevo mecanismo solo si el
modo de falla derrotaría una afirmación central y no puede controlarse mediante
objetos existentes; de lo contrario produce una frontera explícita, un riesgo
residual visible y un enunciado de limitación. La primera regla disciplina a los
críticos; la segunda disciplina a los diseñadores —un sesgo hacia reglas pocas,
simples y generales por sobre la proliferación de maquinaria específica, en el
espíritu de Epstein (1995).

## 4. La arquitectura Core v0

Resumimos la arquitectura de referencia al nivel necesario para el análisis; el
modelo completo de objetos, las máquinas de estado y las capas de interfaz
ciudadana están especificados en el corpus público.

**Financiamiento.** Una autoridad implementadora migra una cuota legalmente
mandatada de un presupuesto existente hacia billeteras cívicas individuales:
capacidad de asignación periódica, no retirable, de propósito público, igual por
ciudadano por defecto. Todo ámbito de planificación activo porta un registro de
*Allocation Mandate* (mandato de asignación) que nombra el estatuto o instrumento
que autorizó la migración y la fórmula de asignación —la plataforma registra la
autorización externa; no la fabrica. Un *Fiscal Commitment Profile* (perfil de
compromiso fiscal) por ámbito hace públicos y versionados el porcentaje migrado,
la indexación y la latencia de entrega, de modo que el estrangulamiento fiscal
por parte de la tesorería establecida sea medible y atribuible antes que
silencioso. Los servicios esenciales con obligaciones de continuidad quedan
protegidos por pisos no asignables, fuera de la popularidad ciudadano-por-
ciudadano.

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
Un *Duty-of-Care Anchor* (ancla del deber de cuidado) nombra, antes del
desembolso, a la persona jurídica solvente responsable ante terceros por daño
físico.

**Infraestructura de atención.** La ciudadanía actúa a través de una interfaz
estratificada: descubrimiento con ordenamiento controlado por el usuario y con
razón visible; tarjetas de proyecto compactas; y superficies de auditoría
progresivamente más profundas hasta el rastro completo. Los ciudadanos que no
prestan atención son servidos por reglas de asignación por defecto del sistema
que siguen las prioridades del ámbito de planificación, por perfiles automáticos
configurables, y por delegación acotada y revocable con visibilidad de la
concentración. La arquitectura no supone ciudadanos atentos; supone que en su
mayoría son desatentos y enruta su peso a través de una intermediación
inspeccionable (Lupia and McCubbins 1998). Esta es una respuesta de diseño a la
objeción de competencia ciudadana en su forma contemporánea más aguda (Brennan
2016): antes que restringir la legitimación de nadie, la arquitectura hace que la
intermediación que la desatención produce sea visible, revocable y auditable.

**Transición.** El despliegue procede a través de modos de operación —cerrado,
tutelado, semiabierto, abierto— en los que una autoridad pública puede retener la
revisión de admisibilidad, pero toda decisión tutelada material, y todo silencio
tutelado más allá de su plazo, se convierte en un objeto público de resolución
de gobernanza. Los indicadores de resistencia del establecido (cuota de ámbito
abierta, tasas de rechazo y de vencimiento de plazos, privilegio del operador)
hacen distinguible la adopción simbólica de la transferencia real.

## 5. Análisis formal

Enunciamos los tres modelos y sus resultados; las demostraciones son álgebra de
un paso y aparecen en la nota acompañante (`research/formal-models.md`). Todos
los agentes son neutrales al riesgo; los presupuestos están normalizados a 1. La
estructura de disuasión a lo largo del texto es la de Becker (1968): una
violación se disuade cuando la probabilidad de detección por lo que está en juego
excede su ganancia —nuestra contribución es mapear cada término de esa
desigualdad sobre un objeto arquitectónico nombrado y configurable.

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

y en particular siempre que *kqW* ≥ *G*. Tres corolarios cargan peso de diseño.
*La corroboración sustituye al capital reputacional*: el capital en juego
requerido por fiscalizador cae linealmente en *k*, de modo que la revisión
redundante es exactamente lo que hace viables los conjuntos de fiscalizadores de
reputación superficial, a costo de control lineal —que es para lo que sirven las
políticas de umbrales proporcionales. *Las relaciones repetidas son la superficie
de ataque*: el término de fricción existe solo mientras se impida la contratación
relacional, razón por la cual la visibilidad de los emparejamientos repetidos
soporta la carga (mantenemos la probabilidad de reporte *δ* exógena a *k*;
endogenizarla —más revisores abordados, más chances de un reporte— solo fortalece
la condición). *Los mercados delgados atacan ambos modelos a la vez*: un
fiscalizador monopolista que no puede excluirse de manera creíble pierde su
capital confiscable (*W* → 0) al tiempo que degrada *p* en la Proposición 1 —las
dos condiciones identifican los mismos entornos como frágiles, por la misma
razón.

### 5.3 Asignación bajo restricción de atención

Los ciudadanos asignan pequeños presupuestos individuales; el retorno pivotal de
evaluar proyectos es insignificante, de modo que la ignorancia racional es el
equilibrio (Downs 1957), y la pregunta de diseño es hacia dónde fluye el peso de
la mayoría *desatenta*: hacia la saliencia amplificada por la prueba social
(Bikhchandani, Hirshleifer and Welch 1992; Salganik, Dodds and Watts 2006), o
hacia reglas institucionales por defecto que siguen las prioridades de
planificación. El modelo arroja tres predicciones verificables —los topes doman
las cascadas (P1), los valores por defecto anclan la calidad (P2), el decaimiento
se degrada gráciles solo con valores por defecto (P3)— evaluadas a continuación.

## 6. Evidencia computacional

Simulamos 10.000 ciudadanos a lo largo de 24 ciclos mensuales asignando sobre un
conjunto permanente de 40 proyectos con calidad *θ*, saliencia *s* (medida
corr(*θ*, *s*) ≈ 0.24), pesos-necesidad del planificador *w* = λ*θ* + (1 − λ)*u*
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

**Hallazgo 1: los topes de financiamiento son un dispositivo anticoncentración,
no un dispositivo de calidad.** Con el cierre ACTIVADO, la concentración cae
(Gini de financiamiento 0.732 vs 0.759), el 5% de proyectos más saliente absorbe
menos (16.8% vs 19.6% de todo el financiamiento), y se completan un 15% más de
proyectos (25.3% vs 21.9%). Pero la selección de calidad no cambia
(sel(θ) ≈ 0.39 vs 0.41): el excedente truncado se derrama hacia el siguiente
proyecto más *visible*, no hacia el siguiente *mejor*. La afirmación de la
arquitectura respecto de la regla de cierre debería estar —y en el corpus ahora
está— acotada en consecuencia.

**Hallazgo 2: el ancla por defecto, no la atención ciudadana, sostiene la
calidad de la asignación.** Una mezcla anclada en valores por defecto con un
planificador casi perfectamente informado (r ≈ 0.97) alcanza sel(θ) ≈ 0.71
—aproximadamente 1.6–2× las configuraciones impulsadas por saliencia
(≈ 0.35–0.43)— mientras que quintuplicar la atención ciudadana (α de 2% a 10%)
mueve la selección de calidad a lo sumo en ≈ 0.08 en los regímenes impulsados por
saliencia y esencialmente nada en los anclados en valores por defecto. Degradar
la calidad informativa del vector de casi perfecta a moderada (r ≈ 0.97 → 0.55)
cuesta ≈ 0.29 de selección de calidad —mucho más de lo que cualquier ganancia de
atención factible recupera. Dos salvedades mantienen honesto este hallazgo. El
predominio de los valores por defecto es en parte por construcción —la regla por
defecto es un asignador determinista correlacionado con θ que retiene la mayor
parte del presupuesto— de modo que el contenido informativo es el
*condicionamiento*: cuánto determina la calidad informativa del vector el valor
del ancla, y cuán poco lo sustituye la atención ciudadana. Y un panel de
sensibilidad (variando el tamaño de muestra del evaluador y la fuerza de la
prueba social) muestra que el ordenamiento de regímenes es robusto salvo bajo
prueba social muy fuerte, donde los regímenes convergen dentro del ruido porque
la amplificación fuerte también propaga la señal de calidad de los evaluadores;
las magnitudes dependen de los parámetros y no están calibradas. Lo que sobrevive
a todas las variaciones es el ordenamiento y el predominio de la calidad
informativa del vector de pesos —lo que cuantifica el apalancamiento concentrado
en aquello que construye el vector que gobierna la porción asignada pasivamente.
Dos hechos arquitectónicos acotan correctamente ese enunciado, y la formulación
de un borrador anterior ("la vulnerabilidad central de la arquitectura... quien
construye los ámbitos de planificación tiene la calidad de la asignación en sus
manos") carecía de ambos. Primero, la capa por defecto es sustituible, no
obligatoriamente central: el autopiloto cívico del corpus ofrece a cada ciudadano
asignación manual, delegación, perfiles de asignación publicados, una regla
automática personal, o el valor por defecto del sistema —un ciudadano en proceso
de incorporación debe seleccionar o reconocer explícitamente un perfil base, y
solo la porción de ciudadanos que nunca se involucra sigue necesariamente el
valor por defecto del sistema, el cual a su vez opera bajo un Allocation Mandate
registrado. Segundo, la construcción centralizada de los pesos de ámbito es una
propiedad de los modos de transición cerrado y tutelado, no de la arquitectura:
los modos de operación son estados configurados por país, y la trayectoria
diseñada apunta hacia la construcción abierta (el Hallazgo 4 mide su viabilidad
dentro del modelo). Lo que los números establecen es, por tanto, un condicional:
la calidad informativa de los vectores que gobiernan la porción pasiva es la
restricción vinculante sobre la calidad de la asignación, quienquiera o lo que sea
que los provea —un proveedor capturado o ignorante es el modo de falla, uno bien
informado o bien agregado es el activo, y aleatorizar el vector para escapar de la
captura compraría neutralidad al precio de una calidad casi aleatoria para la
porción pasiva. La discusión sobre la fijación de agenda (Sección 8) no es una
limitación entre muchas; por estos números es la restricción vinculante —y, a
diferencia del statu quo, es una visible, versionada y sustituible. Dos cosas que
E1–E3 no pueden afirmar, y que un borrador anterior sobreinterpretó al afirmarlas: el
origen del vector de pesos queda sin especificar (r es una propiedad del vector,
no de una oficina estatal), y la multitud modelada porta prueba social pero
ningún conocimiento —de modo que estos experimentos comparan atención frente a
calidad de los pesos, no conocimiento central frente a conocimiento distribuido.
El Hallazgo 4 se diseñó, tras la revisión del autor, para hacer esa comparación
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
Peixoto and Fox
2016)— es un riesgo amortiguado aquí, pero el amortiguador es el tamaño de la
capa institucional, y la alineación de calidad dentro del ciclo aún se erosiona
en los ciclos más tardíos bajo todas las condiciones, de modo que el decaimiento
se compra, no es gratis.

**Hallazgo 4: las señales dispersas agregadas superan a la construcción central
de ancho de banda fijo del vector de pesos en cada escala probada —pero solo a
través de una institución de agregación.** Un cuarto experimento preregistrado
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
crece. Tres salvedades cargan el peso honesto del hallazgo. Primero, el mismo
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
Dentro de esos límites, el hallazgo invierte la lectura que un borrador anterior
invitaba: la variable vinculante no es quién sostiene la pluma sino cuánta
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

## 7. La validación adversarial como método

La arquitectura se desarrolló bajo un bucle adversarial documentado: **ataque**
(un resumen que enuncia un modo de falla, su ubicación en el corpus, un escenario
de estrés y anclajes en la literatura) → **defensa emparejada** (una evaluación
objetiva que clasifica el ataque como fundado, parcialmente fundado o diferencia
de criterio, con citas ancladas a líneas dentro del corpus) → **resolución** (un
documento aceptado que o bien integra un mecanismo o bien acota el riesgo) →
**propagación** (las restricciones de la resolución enhebradas a través de cada
documento de arquitectura afectado). El bucle corrió tres rondas, todas ahora
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
y propagados. El requisito de honestidad del método se aplica a sí mismo: varias
resoluciones responden a sus ataques con un explícito "acotado, no resuelto", y
el registro completo de revisión es público.

El bucle termina por la regla de integrar-o-acotar (P007). Su disciplina de
salida es lo que lo distingue del modelado de amenazas ordinario: todo ataque
acotado debe dejar tres artefactos —una oración de frontera explícita ("Core v0
no requiere X"), un riesgo residual visible y un enunciado de limitación de una
oración. La sección de limitaciones que sigue no es, por tanto, un gesto de
humildad; es la salida acumulada y adversarialmente generada del método. De los
treinta y cinco ataques, ninguno fue desestimado; nueve de los quince de la
segunda ronda fueron clasificados como fundados de plano y los otros seis como
parcialmente fundados, y la respuesta del corpus a varios es un honesto "acotado,
no resuelto".

Usamos el bucle con un único equipo de diseño más asistencia de IA; su siguiente
aplicación obvia es con atacantes genuinamente independientes, que identificamos
más abajo como el primer punto del trabajo futuro.

## 8. Limitaciones

Enunciadas según la propia regla del método —cada una es una frontera registrada
con un riesgo residual nombrado.

**La fijación de agenda está centralizada en los modos de transición, y es lo que
más importa.** En los modos de operación cerrado y tutelado que Core v0 especifica
para los pilotos, la autoridad implementadora construye los ámbitos de
planificación; la arquitectura hace esa construcción pública, versionada,
portadora de mandato y disputable mediante la visibilidad, pero en esos modos no
la distribuye. Nuestra propia simulación muestra que la calidad informativa del
vector de pesos predomina sobre todo otro margen de calidad, y quien construye el
ámbito ejerce la segunda cara del poder (Bachrach and Baratz 1962;
Schattschneider 1960) sobre todo lo que está aguas abajo. Tres cosas acotan la
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
medido asociado a resolverlo.

**La legitimidad procedimental no es mandato democrático.** La plataforma
registra la autorización externa para la migración presupuestaria y las fórmulas
de asignación (el Allocation Mandate); no puede fabricar una autorización que la
ley nunca otorgó, y el debate normativo sobre sustituir la asignación atomizada
por la apropiación representativa (Rosanvallon 2008; Urbinati 2014) permanece
abierto. Bajo desacuerdo evaluativo profundo, la postura de la arquitectura es
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
públicos— pero ningún software obliga a un soberano a pagar (Kydland and Prescott 1977; North and Weingast
1989). El compromiso creíble debe provenir de la ley a nivel de país.

**La calidad de verificación se supone, luego se tasa.** Las Proposiciones 1–4
toman las probabilidades de detección y descubrimiento como parámetros. En
mercados de control delgados —mercados de bienes de confianza donde la calidad
es inobservable para el comprador (Akerlof 1970; Dulleck and Kerschbamer
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
especificados; la mecánica constitucional —reglas para hacer reglas (Buchanan and Tullock
1962)— de quién vota sobre los cambios de
protocolo en un despliegue maduro en modo abierto deliberadamente no lo está. El
despliegue en modo abierto está supeditado a resolverlos.

**Epistémicamente, este es el diseño validado de un solo equipo.** El corpus
adversarial fue producido por el mismo esfuerzo de investigación que ataca, con
asistencia de IA; los parámetros de la simulación son plausibles antes que
calibrados a un conjunto de datos de PP específico; y no se ha realizado ningún
piloto. Las tres validaciones faltantes —ataque experto independiente,
calibración a datos empíricos de PP, y un piloto tutelado acotado (sector
deportivo, un municipio)— son la siguiente fase del programa de investigación, en
ese orden.

## 9. Ruta de implementación

La arquitectura está construida para una adopción gradual y revocable: un país
abre una función pública (el piloto de referencia es la infraestructura deportiva
municipal), migra una pequeña cuota presupuestaria bajo un modo de operación
tutelado, y retiene la revisión de admisibilidad —con toda decisión y demora
tutelada pública por construcción. Las métricas de madurez funcional (mezcla de
participación, cuota de flujo por defecto, tasas de independencia de la
fiscalización, indicadores de resistencia del establecido, confiabilidad fiscal)
determinan si el despliegue gana un ámbito más amplio, y sus trayectorias, no la
retórica, responden si la distribución supera a la línea base local. La condición
de salida es honesta en ambas direcciones: un piloto cuyos indicadores se
estancan bajo el ahogamiento del establecido documenta ese hecho públicamente, lo
cual es en sí mismo información que el sistema actual nunca produce.

## 10. Conclusión

La pregunta que este artículo responde no es si los Estados deberían ser más
grandes o más pequeños, sino si las capas de la actividad estatal que fallan a
través del monopolio de información e incentivos pueden rearquitecturarse para
fallar menos. Para una de esas capas —la asignación acotada de recursos públicos
con verificación— hemos especificado una arquitectura completa, demostrado las
condiciones de incentivos de las que dependen sus mecanismos, medido sus
supuestos conductuales en simulación, y sometido el conjunto a tres rondas de
revisión adversarial documentada con una disciplina explícita de
integrar-o-acotar. El resultado es deliberadamente modesto en sus afirmaciones e
inusualmente explícito sobre sus bordes: la calidad de la asignación cabalga
sobre valores por defecto institucionales cuya construcción sigue siendo el
problema abierto; la rendición de cuentas cabalga sobre una verificación cuyas
condiciones de mercado deben tasarse; la legitimidad cabalga sobre mandatos que
la plataforma puede registrar pero no crear. Lo que distingue a la propuesta es
que estos bordes están especificados, monitoreados y adjuntos a objetos
nombrados —que es, sostenemos, cómo se ve cuando el diseño institucional se trata
como una disciplina de ingeniería antes que como una ideológica.

## Referencias

- Akerlof, G. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84(3).
- Bachrach, P., and M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Baiocchi, G., and E. Ganuza (2017). *Popular Democracy: The Paradox of Participation*. Stanford University Press.
- Becker, G. (1968). "Crime and Punishment: An Economic Approach." *Journal of Political Economy* 76(2).
- Bikhchandani, S., D. Hirshleifer, and I. Welch (1992). "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades." *Journal of Political Economy* 100(5).
- Brennan, J. (2016). *Against Democracy*. Princeton University Press.
- Blum, C., and C. I. Zuber (2016). "Liquid Democracy: Potentials, Problems, and Perspectives." *Journal of Political Philosophy* 24(2).
- Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal* 13(4).
- Buchanan, J., and G. Tullock (1962). *The Calculus of Consent*. University of Michigan Press.
- Buterin, V., Z. Hitzig, and E. G. Weyl (2019). "A Flexible Design for Funding Public Goods." *Management Science* 65(11).
- Campbell, D. (1976). "Assessing the Impact of Planned Social Change." Occasional Paper 8, Dartmouth College.
- Coase, R. (1937). "The Nature of the Firm." *Economica* 4(16).
- De Filippi, P., and A. Wright (2018). *Blockchain and the Law: The Rule of Code*. Harvard University Press.
- Downs, A. (1957). *An Economic Theory of Democracy*. Harper.
- Dulleck, U., and R. Kerschbamer (2006). "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods." *Journal of Economic Literature* 44(1).
- Epstein, R. (1995). *Simple Rules for a Complex World*. Harvard University Press.
- Friedman, M. (1962). *Capitalism and Freedom*. University of Chicago Press.
- Gaus, G. (2011). *The Order of Public Reason*. Cambridge University Press.
- Goodhart, C. (1975). "Problems of Monetary Management: The UK Experience." *Papers in Monetary Economics*, Reserve Bank of Australia.
- Hayek, F. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4).
- Hirschman, A. (1970). *Exit, Voice, and Loyalty*. Harvard University Press.
- Holmström, B. (1979). "Moral Hazard and Observability." *Bell Journal of Economics* 10(1).
- Jensen, M., and W. Meckling (1976). "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure." *Journal of Financial Economics* 3(4).
- Kahng, A., S. Mackenzie, and A. Procaccia (2018). "Liquid Democracy: An Algorithmic Perspective." *AAAI*.
- Kydland, F., and E. Prescott (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy* 85(3).
- Laffont, J.-J., and J. Tirole (1991). "The Politics of Government Decision-Making: A Theory of Regulatory Capture." *Quarterly Journal of Economics* 106(4).
- Lupia, A., and M. McCubbins (1998). *The Democratic Dilemma: Can Citizens Learn What They Need to Know?* Cambridge University Press.
- Michels, R. (1911). *Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy*.
- Mises, L. von (1920). "Economic Calculation in the Socialist Commonwealth." Translated in F. Hayek, ed., *Collectivist Economic Planning* (1935).
- Nozick, R. (1974). *Anarchy, State, and Utopia*. Basic Books.
- Olken, B. (2007). "Monitoring Corruption: Evidence from a Field Experiment in Indonesia." *Journal of Political Economy* 115(2).
- North, D., and B. Weingast (1989). "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England." *Journal of Economic History* 49(4).
- Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press.
- Olson, M. (1982). *The Rise and Decline of Nations*. Yale University Press.
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Peixoto, T., and J. Fox (2016). "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" *IDS Bulletin* 47(1).
- Power, M. (1997). *The Audit Society: Rituals of Verification*. Oxford University Press.
- Rosanvallon, P. (2008). *Counter-Democracy: Politics in an Age of Distrust*. Cambridge University Press.
- Salganik, M., P. Dodds, and D. Watts (2006). "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market." *Science* 311(5762).
- Schattschneider, E. E. (1960). *The Semisovereign People*. Holt, Rinehart and Winston.
- Sowell, T. (1980). *Knowledge and Decisions*. Basic Books.
- Stigler, G. (1971). "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science* 2(1).
- Thompson, D. (1980). "Moral Responsibility of Public Officials: The Problem of Many Hands." *American Political Science Review* 74(4).
- Urbinati, N. (2014). *Democracy Disfigured: Opinion, Truth, and the People*. Harvard University Press.
- Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
- Williamson, O. (1985). *The Economic Institutions of Capitalism*. Free Press.

---

*Materiales acompañantes: demostraciones formales (`research/formal-models.md`),
código de simulación y tablas completas de resultados
(`scripts/simulation/allocation-sim.mjs`,
`research/simulation-results.md`), el corpus de la arquitectura (`docs/`,
`knowledge/`), y el registro adversarial completo (`attacks/`,
`defenses/`, resoluciones aceptadas `docs/67`–`docs/103`; los treinta y cinco
ataques resueltos y propagados).*
