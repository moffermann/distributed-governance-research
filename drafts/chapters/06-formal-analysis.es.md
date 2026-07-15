## 5. Análisis formal

Presentamos tres modelos; sus demostraciones de álgebra de un paso aparecen en la nota acompañante ([formal-models](../research/formal-models.md)). Los agentes son neutrales al riesgo y los presupuestos están normalizados a 1. Siguiendo a Becker (1968), la disuasión requiere que la probabilidad de detección multiplicada por lo que está en juego exceda la ganancia; nuestra contribución asigna cada término a un objeto arquitectónico nombrado y configurable. *Proposición N* designa los resultados formales de esta sección, *P001/P007* las reglas metodológicas (§2) y *predicción N* las predicciones conductuales de §5.3.

### 5.1 Desembolso supeditado a hitos

Un ejecutor elige entre entregar un hito a un costo privado *c* ∈ (0, 1) o desviar los fondos. El mecanismo libera un adelanto *a*, retiene el remanente a la espera de una aceptación revisada, recupera una fracción *r* del adelanto ante la no entrega confirmada, incauta una garantía *γ*, cuyo costo es *κ* por unidad, e impone una pérdida reputacional de continuación *R*. La revisión confirma la desviación con probabilidad *p*, que refleja conjuntamente los estándares de evidencia, la independencia del fiscalizador y la corroboración.

**Proposición 1 (compatibilidad de incentivos).** La entrega es óptima si y solo si

> *c* ≤ *p* · [(1 − *a*(1 − *r*)) + *γ* + *R*].

La entrega no debe costar más que la probabilidad de detección multiplicada por el total en juego; toda prueba arquitectónica de manipulación de desembolsos entra en esta desigualdad.

**Proposición 2 (la verificación débil debe compensarse mediante las condiciones financieras).** La garantía mínima que sostiene la entrega para todo *c* ≤ *c̄* es *γ\**(*p*) = max{0, *c̄*/*p* − (1 − *a*(1 − *r*)) − *R*}, decreciente y convexa en *p*. La verificación débil —mercados de fiscalización delgados o evidencia deficiente— requiere por tanto adelantos más pequeños, mayor recuperabilidad o garantías mayores, o ejecutores de mayor reputación. Ningún porcentaje global de garantía es óptimo en entornos de verificación heterogéneos.

Los términos de disuasión son complementos, no sustitutos. Una ablación prerregistrada del experimento complementario (Offermann 2026b) halló que, en el punto de operación diseñado, la desigualdad tiene holgura suficiente para que retirar un término cueste casi nada. Sin embargo, concesiones defendibles sucesivas pueden cruzar el umbral de manera imperceptible, dejando el valor verificado materialmente por debajo del statu quo reemplazado pese a una calidad de selección intacta y una instrumentación aparentemente completa. Cada ámbito debe por ello publicar su margen operativo de disuasión, recalcularlo después de cada cambio de término y clasificar las reducciones de términos como cambios materiales de reglas (docs/111). La holgura preservada también absorbe el error del instrumento de verificación: en cinco familias reales de modelos, la fuga siguió siendo indistinguible de la obtenida mediante verificación puramente humana incluso cuando un verificador automático dejó pasar ~20% del fraude que requiere juicio, porque la cascada eliminó los intentos aguas arriba —siempre que los adversarios no coludan a través de las capas de verificación (Offermann 2026b, docs/113).

**Proposición 3 (compromiso entre participación y disuasión).** Elevar *γ* relaja la compatibilidad de incentivos a tasa *p*, pero reduce el pago del ejecutor honesto a tasa *κ*. Si el diseñador pondera por igual una unidad de holgura de incentivos y una unidad de pago del ejecutor honesto, un aumento es netamente beneficioso si y solo si *p* > *κ*; otras ponderaciones desplazan el umbral, no la estructura del compromiso. Cuando la calidad de detección está por debajo del costo local de capital, garantías mayores excluyen a ejecutores honestos de bajo margen sin disuadir el fraude —la disciplina de proporcionalidad de la arquitectura.

### 5.2 Fiscalización a prueba de colusión

Un hito no entregado y aprobado fraudulentamente le reporta *G* al ejecutor. La liberación requiere *k* fiscalizadores asignados por protocolo, cada uno con un capital en juego confiscable *W* (honorarios futuros del protocolo más reputación de rol) y una probabilidad *q* de descubrimiento posterior a la aprobación. La asignación protocolizada y los emparejamientos repetidos visibles mantienen al ejecutor y a los fiscalizadores como extraños entre sí; una oferta de soborno se reporta con probabilidad *δ*, imponiendo al ejecutor una penalidad *P_e*.

**Proposición 4 (a prueba de colusión).** El fraude de aprobación es insostenible si

> *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,

y, en particular, siempre que *kqW* ≥ *G*. Tres corolarios son importantes:

- ***La corroboración sustituye al capital reputacional.*** El capital en juego requerido por fiscalizador disminuye linealmente con *k*: la revisión redundante permite conjuntos de fiscalizadores de trayectoria reputacional limitada a un costo de control lineal, lo que motiva políticas de umbrales proporcionales.

- ***Las relaciones repetidas son la superficie de ataque.*** El término de fricción exige impedir la contratación relacional, lo que vuelve decisiva la visibilidad de los emparejamientos repetidos. Mantenemos *δ* exógena a *k*; endogenizarla —más revisores abordados y, por tanto, más oportunidades de reporte— solo fortalece la condición.

- ***Los mercados poco profundos atacan ambos modelos.*** Un fiscalizador monopolista que no puede ser excluido de manera creíble pierde su capital en juego confiscable (*W* → 0) y degrada *p* en la Proposición 1; ambas condiciones identifican los mismos entornos frágiles por la misma razón.

### 5.3 Asignación bajo restricción de atención

Los ciudadanos asignan pequeños presupuestos individuales, y los retornos pivotales insignificantes de evaluar proyectos hacen que la ignorancia racional sea el equilibrio (Downs 1957). La cuestión de diseño es si el peso de la mayoría desatenta sigue la saliencia amplificada por la prueba social (Bikhchandani, Hirshleifer y Welch 1992; Noelle-Neumann 1974; Salganik, Dodds y Watts 2006) o la capa de reglas por defecto de la arquitectura. En modo abierto —el valor por defecto arquitectónico— la planificación es distribuida por construcción. La planificación centralizada existe únicamente en el modo de transición tutelado/cerrado; incluso allí, la priorización de proyectos sigue siendo distribuida mediante perfiles de asignación agregados, en lugar de un plan central. El modelo arroja tres predicciones verificables —los topes doman las cascadas (predicción 1), los valores por defecto anclan la calidad (predicción 2) y el decaimiento solo produce un deterioro gradual cuando existen valores por defecto (predicción 3)— que se evalúan a continuación.