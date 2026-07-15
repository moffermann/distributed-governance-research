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
las personas para quienes se recaudó. Para el dinero público que financia obras
concretas —infraestructura, obras, programas locales— lo que en último término
importa no es cuánto se asigna en el presupuesto sino cuánto valor efectivo llega a la gente por
peso gastado: un proyecto que no se construye, o se construye mal, no ayuda a nadie,
por bien intencionada que sea la asignación (el balde agujereado de Okun (1975)
cargó agua que nunca llegó). Este es un criterio acotado para la inversión pública
tipo proyecto, no una teoría de todo el presupuesto ni de por qué los Estados
recaudan: la redistribución y la equidad son propósitos distintos de las finanzas
públicas que este artículo no evalúa (§8).

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
de agencia del cumplimiento auto-supervisado (Jensen y Meckling 1976); el
dinero solo se mueve sobre hitos revisados, con retención y garantías
materializadas externamente; y toda transición de estado relevante queda
registrada en un rastro legible por la ciudadanía y auditable por expertos.

El *ejecutor* —quien realiza el proyecto, sea una obra, un servicio de cuidado
de personas o un programa educativo— puede ser un organismo público, un
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
somete, bajo una disciplina transversal: evaluamos cada objeción comparativamente
—el Core v0 factible contra la institución que hoy cumple la misma función, nunca
contra un ideal omnisciente y benevolente. Esto bloquea la falacia del nirvana en
ambas direcciones (Demsetz 1969; Sección 2). Nuestras contribuciones son:

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
   entregado por unidad de presupuesto —un criterio relevante para esta porción
   acotada del gasto público (junto a las restricciones distributivas y de derechos
   que el modelo no representa). En el modelo, la selección y la entrega
   verificada se componen multiplicativamente (una identidad contable, no un
   hallazgo independiente); una extensión pareada de selección y entrega gana
   ≈ +58.6 puntos de una referencia voraz en el mundo declarado [intervalo
   Monte Carlo condicional al 95% +58.0, +59.2]; una atribución
   condicional de tres capas mantiene positiva la diagonal completa de Core v0
   en todos los mundos nombrados mientras deja sin cuantificar la magnitud independiente de la
   planificación; y la contabilidad de presupuesto neto deja el costo
   administrativo aproximadamente neutro bajo un piso conservador de baja dispersión, con una ventaja declarada para Core v0 bajo un escenario de costos asimétrico. Estos son
   contrastes condicionales del modelo, separados por canal, no un multiplicador calibrado
   del desempeño institucional completo. Bajo la regla prerregistrada congelada, un contraste
   limitado a la selección que otorgó al central una tasación competente y consciente del
   daño, con entrega en paridad, dejó positivo el contraste distribuido, pero por debajo del
   umbral de reconstrucción de 0.05; por tanto, se retira el multiplicador anterior (§6;
   Apéndice E4). Como ese contraste apaga la ceguera al daño modelada del central y no pone
   a prueba la entrega ni la construcción de agenda, la decisión rige la calibración bajo la
   construcción ensayada, no el valor de Core v0 como arquitectura completa. La contribución
   fundamental es la arquitectura, el mecanismo cualitativo de crédito versus cobertura y la
   separación de la selección, la entrega y el costo.

4. **La revisión adversarial como método** (Sección 7). La arquitectura fue
   atacada sistemáticamente: cuarenta y tres resúmenes de ataque anclados en las
   literaturas de ciencia política, economía y derecho, cada uno respondido
   por una defensa emparejada y resuelto bajo una regla explícita de
   integrar-o-acotar, con las resoluciones propagadas a través del corpus (todas
   salvo las D037–D040 de la ronda de revisión del manuscrito, cuya propagación al
   corpus está rastreada) y el registro completo de revisión
   público por construcción. El bucle es una
   autocrítica estructurada, no validación externa, y así lo decimos; lo proponemos, junto con su regla de terminación y a la espera de validación externa independiente, como una propuesta metodológica preliminar para la investigación en diseño institucional.

El estudio complementario mide tres efectos que amplían esta arquitectura: la
ablación de la pila de disuasión (sus términos son individualmente redundantes
pero conjuntamente indispensables), la factibilidad de la fiscalización por
IA, y el efecto de separar la planificación macro de la asignación (robustez
frente a una mala planificación central —un contraste condicional, interno al
modelo, no un efecto calibrado).

La Sección 8 enuncia las limitaciones con el mismo cuidado que los resultados,
porque bajo nuestro método ellas son resultados: cada una es un riesgo
residual nombrado y acotado.

