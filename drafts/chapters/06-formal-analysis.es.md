## 5. Análisis formal

Enunciamos los tres modelos y sus resultados; las demostraciones son álgebra
de un paso y aparecen en la nota acompañante ([formal-models](../research/formal-models.md)).
Todos los agentes son neutrales al riesgo; los presupuestos están normalizados
a 1. La estructura de disuasión a lo largo del texto es la de Becker (1968):
una violación se disuade cuando la probabilidad de detección por lo que está
en juego excede su ganancia —nuestra contribución es mapear cada término de
esa desigualdad sobre un objeto arquitectónico nombrado y configurable. Para
evitar colisiones de notación, *Proposición N* designa los resultados formales
de esta sección; *P001/P007*, las reglas metodológicas (§2); y *predicción N*,
las predicciones conductuales de §5.3.

### 5.1 Desembolso supeditado a hitos

Un ejecutor elige entre entregar un hito a costo privado *c* ∈ (0, 1) y desviar los fondos. El
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

**Proposición 2 (la verificación débil debe compensarse mediante las condiciones financieras).** La garantía mínima que
sostiene la entrega para todo *c* ≤ *c̄* es *γ\**(*p*) = max{0, *c̄*/*p* −
(1 − *a*(1 − *r*)) − *R*}, decreciente y convexa en *p*. Allí donde la
verificación es débil —mercados de fiscalización delgados, calidad de evidencia
pobre— el mecanismo debe compensar con adelantos más pequeños, mayor
recuperabilidad, garantías más grandes o ejecutores de mayor reputación. Un único
porcentaje de garantía global no puede ser óptimo a lo largo de entornos de
verificación heterogéneos.

Los términos de disuasión de esta condición son complementos, no sustitutos. Un
programa de ablación prerregistrado sobre los experimentos complementarios
(Offermann 2026b) midió la consecuencia: en el punto de operación diseñado la
desigualdad se sostiene con holgura, de modo que quitar cualquier término
individual cuesta casi nada — y un despliegue negociado concesión defendible por
concesión puede cruzar el umbral de forma invisible, terminando por debajo del
statu quo que reemplazó (un déficit material de valor verificado, con la calidad
de selección intacta) mientras luce plenamente instrumentado. El corpus exige por ello que
cada ámbito publique su margen de la desigualdad de disuasión en su configuración
operativa, recomputado ante cada cambio de término, con las reducciones de
términos clasificadas como cambios de regla materiales (docs/111). La misma
holgura, mantenida intacta, compra un dividendo inesperado: absorbe el error del
instrumento de verificación — en el panel complementario de cinco familias
reales de modelos, incluso un verificador automático que deja pasar ~20% del
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
fiscalizador no tienen relación previa: una oferta de soborno es en sí misma reportada con
probabilidad *δ*, costándole al ejecutor una penalidad *P_e*.

**Proposición 4 (a prueba de colusión).** El fraude de aprobación es insostenible
si

> *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,

y en particular siempre que *kqW* ≥ *G*. Tres corolarios son importantes para el diseño:

- ***La corroboración sustituye al capital reputacional.*** El capital en
  juego requerido por fiscalizador cae linealmente en *k*, de modo que la
  revisión redundante es exactamente lo que hace viables los conjuntos de
  fiscalizadores de trayectoria reputacional limitada, a costo de control lineal —que es
  para lo que sirven las políticas de umbrales proporcionales.

- ***Las relaciones repetidas son la superficie de ataque.*** El término de
  fricción existe solo mientras se impida la contratación relacional, razón
  por la cual la visibilidad de los emparejamientos repetidos es decisiva
  (mantenemos la probabilidad de reporte *δ* exógena a *k*; endogenizarla —más
  revisores abordados, más chances de un reporte— solo fortalece la
  condición).

- ***Los mercados poco profundos atacan ambos modelos a la vez.*** Un fiscalizador
  monopolista que no puede excluirse de manera creíble pierde su capital
  confiscable (*W* → 0) al tiempo que degrada *p* en la Proposición 1: las dos
  condiciones identifican los mismos entornos como frágiles, por la misma
  razón.

### 5.3 Asignación bajo restricción de atención

Los ciudadanos asignan pequeños presupuestos individuales; el retorno pivotal de
evaluar proyectos es insignificante, de modo que la ignorancia racional es el
equilibrio (Downs 1957), y la pregunta de diseño es hacia dónde fluye el peso de
la mayoría *desatenta*: hacia la saliencia amplificada por la prueba social
(Bikhchandani, Hirshleifer y Welch 1992; Noelle-Neumann 1974; Salganik, Dodds y Watts 2006), o
hacia la capa de reglas por defecto de la propia arquitectura, cuyo
enrutamiento sigue la priorización distribuida de proyectos —los perfiles de asignación agregados—, no un plan central. El modelo arroja tres predicciones verificables —los topes doman
las cascadas (predicción 1), los valores por defecto anclan la calidad (predicción 2), el decaimiento
solo produce un deterioro gradual cuando existen valores por defecto (predicción 3)— evaluadas a continuación.

