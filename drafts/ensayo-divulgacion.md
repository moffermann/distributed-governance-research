# El balde y el medidor: una arquitectura para que el gasto público entregue valor verificable

*Versión ensayo del working paper "A Functional Architecture for Distributed Governance" (v1.5) — el argumento completo, sin las demostraciones técnicas. La versión académica, con las pruebas formales, las tablas de simulación y el registro adversarial íntegro, está disponible en el mismo repositorio.*

*© 2026 Mauricio Offermann. Licencia CC BY-NC-ND 4.0 — ver LICENSE.md.*

---

## I. La pregunta correcta

Los Estados modernos concentran tres cosas que no necesitan estar concentradas juntas: la autoridad para decidir en qué se gasta el dinero público, la capacidad operativa para ejecutar ese gasto, y la autoridad epistémica para certificar que el gasto logró algo. Donde las tres viven dentro de una misma jerarquía institucional, la rendición de cuentas depende de que la jerarquía se audite a sí misma (Bovens 2007). Las consecuencias son predecibles y están documentadas en todas las tradiciones de la economía política: asignación discrecional, cumplimiento auto-reportado, captura por intereses concentrados y desconfianza ciudadana — desde la captura regulatoria (Stigler 1971; Laffont y Tirole 1991) hasta el cumplimiento ritualizado de la sociedad de la auditoría (Power 1997) y las coaliciones distributivas que se atrincheran en las democracias estables (Olson 1982).

El debate habitual responde con cantidad: achicar el Estado o agrandarlo. Ambas posiciones tratan al Estado como un objeto único. Este trabajo sostiene que la pregunta tratable es arquitectónica, no volumétrica: ¿qué capas funcionales de la actividad estatal siguen requiriendo monopolio central, y cuáles pueden hoy distribuirse — con mejor rendición de cuentas que el statu quo — dado que la coordinación digital derrumbó los costos de transacción que alguna vez justificaron la jerarquía? (Coase 1937; Hayek 1945; Williamson 1985). Es un linaje intelectual que corre desde el debate del cálculo económico (Mises 1920), pasa por el conocimiento disperso de Hayek y llega a su tratamiento institucional en Sowell (1980): las decisiones deben situarse donde está el conocimiento, disciplinadas por retroalimentación antes que por autoridad articulada.

Las garantías de derechos, la fuerza legítima, la estabilidad macrofiscal y la adjudicación exigible plausiblemente permanecen centrales. El procesamiento de información, la asignación de recursos a nivel de proyecto, la ejecución de servicios, la producción de evidencia y la auditoría, plausiblemente no.

El trabajo hace el argumento concreto en vez de programático: Core v0 es una arquitectura de referencia completa para distribuir una capa acotada — la asignación, ejecución y verificación de una porción legalmente establecida de un presupuesto público existente — desarrollada hasta el nivel de objetos nombrados, máquinas de estado y reglas de decisión, en un corpus público de más de cien documentos de arquitectura, cincuenta y nueve hipótesis y treinta y cinco revisiones adversariales.

## II. Para qué existe la redistribución

Antes de describir la arquitectura conviene fijar el criterio con que debe juzgarse — porque es el criterio lo que este trabajo termina midiendo. Los Estados no recaudan impuestos para asignar presupuestos; asignan presupuestos para mejorar la vida de la sociedad que los financió (Musgrave 1959). Si, después de una redistribución, la sociedad no está mejor, la redistribución no logró nada: el balde agujereado de Okun (1975) transportó agua que nunca llegó. El criterio correcto para cualquier institución de asignación no es, por tanto, cuán fielmente ejecuta un plan, sino cuánto valor entregado y verificado produce por unidad de recurso público.

Y el problema de fondo tiene nombre desde hace décadas: una administración central gasta dinero ajeno en personas ajenas — la categoría de gasto con menos cuidado tanto por el costo como por el valor (Friedman y Friedman 1980). La evidencia empírica de cuánto se pierde en ese trayecto es brutal donde ha podido medirse: 87% de fuga en las transferencias educativas de Uganda (Reinikka y Svensson 2004), un cuarto del gasto desaparecido en caminos rurales de Indonesia (Olken 2007). Lo que casi nunca puede medirse es la fuga propia — porque el sistema que gotea es el mismo que reporta.

## III. El principio, y las dos disciplinas

La arquitectura descansa sobre un principio de distribución funcional: analizar el Estado como una pila de capas y preguntar, capa por capa, dónde el monopolio institucional sigue siendo necesario y dónde la tecnología de coordinación lo supera. Y sobre dos disciplinas metodológicas que gobiernan todo el corpus.

La primera es la crítica comparativa: toda objeción a la arquitectura debe evaluarse contra cómo el modelo institucional vigente resuelve el mismo problema — no contra un ideal. Esto bloquea la falacia del nirvana en ambas direcciones: ni la arquitectura puede defenderse contra una utopía, ni puede exigírsele resolver lo que el sistema actual tampoco resuelve.

La segunda es la regla de integrar-o-acotar: una vez completa la arquitectura central, una objeción fundada produce un mecanismo nuevo solo si el modo de falla derrotaría una afirmación central y no puede controlarse con los objetos existentes; toda otra objeción fundada se responde con una frontera explícita, un riesgo residual visible y una declaración de limitación registrada. La primera regla disciplina a los críticos; la segunda, a los diseñadores — un sesgo hacia pocas reglas simples y generales en el espíritu de Epstein (1995).

## IV. La arquitectura

En Core v0, un proyecto público no es una descripción ni una solicitud de fondos: es una promesa pública estructurada. Antes de ser financiable debe declarar qué valor producirá y para quién, cómo se probará cada promesa, quién lo inspeccionará y bajo qué reglas se liberará cada pago.

Los ciudadanos reciben periódicamente capacidad de asignación no retirable en una billetera cívica: su porción de la parte del presupuesto que la ley migró al esquema. Los proyectos atraviesan un ciclo de cierre paralelo en el que el financiamiento, la fiscalización independiente, los compromisos de evidencia y la confirmación de beneficiarios deben cerrar todos antes de la ejecución. El ejecutor nunca selecciona ni paga a sus propios auditores — eliminando el costo de agencia del cumplimiento auto-supervisado (Jensen y Meckling 1976). El dinero se mueve únicamente contra hitos revisados, con retención y garantías materializadas externamente. Y cada transición de estado consecuente queda registrada en un rastro legible para el ciudadano y auditable por el experto.

La arquitectura no supone ciudadanos atentos; supone ciudadanos mayormente desatentos, y canaliza su peso a través de intermediación inspeccionable (Lupia y McCubbins 1998). Quien quiere decidir proyecto por proyecto, puede; quien prefiere configurar una regla una vez, delegar en alguien de confianza revocablemente, o no hacer nada y quedar bajo la regla pública por defecto, también. Es una respuesta de diseño a la objeción de competencia ciudadana en su forma contemporánea más filosa (Brennan 2016): en lugar de restringir la ciudadanía de nadie, vuelve visible, revocable y auditable la intermediación que la desatención produce de todos modos.

El despliegue procede por modos de operación — cerrado, tutelado, semi-abierto, abierto — configurados por el país, no por la plataforma. En los pilotos tutelados la autoridad conserva la revisión de admisibilidad, con dos condiciones que convierten la tutela en gobernanza visible: toda decisión material produce una resolución pública razonada dentro de una ventana declarada, y el silencio de la autoridad genera automáticamente una resolución pública de vencimiento que nombra a quien no decidió. La tutela puede ser indefinida; lo que no puede ser es opaca.

## V. Lo que se probó formalmente, dicho sin álgebra

La sección formal del paper demuestra cuatro proposiciones; sus contenidos pueden decirse en castellano.

Primera: la entrega honesta de un hito es la decisión racional del ejecutor exactamente cuando la probabilidad de detección multiplicada por todo lo que está en juego — el saldo no liberado, la garantía, la reputación futura — supera lo que ganaría desviando. Cada palanca del diseño (anticipos protegidos, retención, garantías, calidad de revisión) es un término de esa desigualdad: el marco es el de Becker (1968) para la disuasión, con cada parámetro convertido en un objeto configurable de la arquitectura.

Segunda: donde la verificación es débil — mercados delgados de fiscalización, evidencia pobre — la honestidad debe comprarse con términos financieros más duros: anticipos menores, garantías mayores. La verificación débil no es gratis; tiene precio, y la arquitectura lo cobra explícitamente en vez de fingir que no existe.

Tercera: apilar garantías no siempre ayuda — cuando la calidad de detección cae por debajo del costo local del capital, más garantía expulsa a los ejecutores honestos de bajo margen sin disuadir a los deshonestos. La proporcionalidad no es una cortesía; es una condición de funcionamiento.

Cuarta: comprar una aprobación fraudulenta exige sobornar a todos los fiscalizadores asignados por protocolo — extraños sin relación previa con el ejecutor, cada uno arriesgando su reputación y sus ingresos futuros, cada oferta de soborno con probabilidad de ser reportada. La colusión no se vuelve imposible; se vuelve un mal negocio con huellas.

## VI. Lo que mostró la simulación

Las afirmaciones conductuales se pusieron a prueba en una simulación de 10.000 ciudadanos, determinística y reproducible, con cinco experimentos — tres de ellos pre-registrados: diseño y predicciones publicados antes de correr, con las predicciones falladas reportadas como hallazgos. Cinco resultados llevan el peso.

Primero: los topes de financiamiento — cerrar un proyecto cuando alcanza su meta — funcionan como dispositivo anti-concentración, pero no de calidad. El excedente truncado se derrama hacia el proyecto *más visible* siguiente, no hacia el mejor. La calidad debe venir de otra parte.

Segundo: viene del ancla de la propia arquitectura — su capa de reglas por defecto, el piloto automático que gobierna la porción no configurada del presupuesto. La calidad de la asignación la sostiene la calidad informativa del vector de prioridades que esa capa sigue — quintuplicar la atención ciudadana apenas la mueve, porque la atención no sustituye al conocimiento. Y ese vector no pertenece a nadie: es conectable. Puede alimentarlo un planificador en un piloto tutelado, una categoría configurable, o — como muestra el cuarto hallazgo — las señales agregadas de los propios ciudadanos, que es la trayectoria diseñada. El ancla es un mecanismo del sistema, no una autoridad recontratada por la puerta trasera.

Tercero: el decaimiento de la participación — el destino documentado de la tecnología cívica (Hirschman 1970; Peixoto y Fox 2016) — es sobrevivible exactamente donde esa ancla es fuerte. El sistema está diseñado para funcionar con la participación que la evidencia dice que habrá, no con la que el entusiasmo imagina.

Cuarto — un aporte del trabajo que, hasta donde sabemos, no tiene precedente: cuando el conocimiento se modela simétricamente por primera vez para este problema (un planificador con ancho de banda finito contra miles de ciudadanos con señales locales individualmente pobres), la construcción abierta del vector de prioridades a partir de las señales agregadas supera a la construcción central en toda escala probada. Doce mil señales ruidosas promedian mejor que treinta inspecciones profundas. Pero el resultado es institucional, no espontáneo: el mismo conocimiento disperso sin un mecanismo de agregación se desperdicia — el argumento hayekiano correcto siempre fue sobre instituciones de agregación, no sobre su ausencia. Y sus precondiciones quedan nombradas: señales honestas e independientes, con la mecánica de elicitación como el problema abierto que el corpus declara.

Quinto — el experimento que lleva la comparación hasta el criterio de la sección II. Se añadió la etapa de ejecución: ejecutores con tipos ocultos cuya decisión de desviar sigue la desigualdad de la primera proposición, bajo dos regímenes de entrega — el opaco del statu quo (detección baja, anticipos sin protección, sin memoria reputacional, con parámetros dentro de la banda empírica de fugas documentada) y el verificado de la arquitectura. Cruzado con las dos formas de selección, el experimento responde dos preguntas que cualquiera puede formular.

*Con los mismos proyectos, ¿importa cómo se paga y se vigila?* Importa un 43% más de valor entregado — sobre carteras idénticas. Y el régimen opaco no solo pierde: además no se entera. Su completitud oficialmente reportada sobreestima la entrega real en veintinueve puntos porcentuales — la cuantificación de una rendición de cuentas formalmente rica y prácticamente pobre.

*Con la misma vigilancia, ¿importa quién elige los proyectos?* La priorización social entrega entre 53% y 54% más que la planificación central de ancho de banda finito, bajo cualquiera de los dos regímenes de control.

Y las dos capas se multiplican en vez de sumarse: la entrega verificada amplifica las ganancias de la buena selección, porque un proyecto bien elegido que se fuga pierde su ventaja. La arquitectura completa entrega 2.19 veces el valor de la línea base opaca por el mismo presupuesto — robustamente, desde una participación directa del 3% (el piso de los presupuestos participativos reales) hasta el 40% (la banda del voto voluntario).

Un hallazgo final merece mención por lo que enseña sobre el diseño: bajo los parámetros verificados fuertes, nadie desvía nunca — la desigualdad de disuasión se cumple para todos, así que no hay a quién excluir. El mejor guardia es el que nunca tuvo que actuar (la disuasión ex ante de Becker). Con parámetros debilitados, la segunda línea de defensa se activa y se mide: los desvíos ocurren, se detectan, y la exclusión reputacional depura el pool de ejecutores ciclo a ciclo. Disuasión cuando el sistema es fuerte; limpieza progresiva cuando es imperfecto.

## VII. El método como resultado

La razón para tomar en serio un ejercicio de diseño como investigación es lo que se le hizo. La arquitectura fue atacada sistemáticamente: treinta y cinco informes de ataque anclados en la literatura de ciencia política, economía y derecho — legitimidad democrática, captura del establecimiento de agenda, estrangulamiento fiscal, mercados delgados de verificación, ignorancia racional, cascadas informativas, clientelismo, polarización, el problema de las muchas manos — cada uno respondido por una defensa pareada, cada par resuelto bajo la regla de integrar-o-acotar, y cada resolución propagada por el corpus completo. Ninguno fue desestimado. Varios se respondieron con un honesto "acotado, no resuelto". Las dos últimas objeciones las generó el método vuelto sobre sí mismo: una revisión externa simulada de cinco perfiles leyó el material y produjo preguntas que el corpus no podía responder — y se convirtieron en ataques formales, luego resueltos.

La sección de limitaciones del paper no es un gesto de humildad: es la salida acumulada del método. En los modos cerrado y tutelado que la arquitectura especifica para los pilotos, la autoridad implementadora construye el marco de planificación — qué propósitos, qué porción del presupuesto, qué pisos protegidos —, aunque la creación y la priorización de proyectos siguen distribuidas incluso ahí: el poder de agenda es decidir qué puede financiarse, nunca qué se financia. La calidad informativa de ese marco es la restricción vinculante de la calidad de asignación — con la trayectoria diseñada hacia la construcción abierta, cuya viabilidad ya está medida y cuya elicitación honesta sigue abierta. La dependencia fiscal del Estado establecido es medible pero no exigible: ningún software obliga a un soberano a pagar (Kydland y Prescott 1977; North y Weingast 1989). Y ningún piloto empírico se ha realizado todavía: toda la evidencia es formal y computacional, con cada supuesto publicado.

## VIII. Conclusión

El punto más profundo es el de Friedman: una administración central gasta dinero ajeno en personas ajenas, la categoría de gasto con menos cuidado por el costo y por el valor. Esta arquitectura no responde a ese problema con exhortación; reconecta las cañerías del balde. La planificación permanece — como hilo conductor que fija marcos, pisos y mandatos — pero el motor del valor es la capa de conversión: promesas medibles, liberación condicional, verificación independiente, consecuencias que se acumulan en reputación, y un medidor en cada fuga.

La pregunta que este trabajo responde no es si los Estados deben ser más grandes o más chicos, sino si las capas de la actividad estatal que fallan por monopolio de información e incentivos pueden re-arquitecturarse para fallar menos — y para mostrar sus fallas cuando fallan. Para una de esas capas, la respuesta documentada es: sí, en el diseño y en la simulación, 2.19 veces mejor, con los bordes especificados, monitoreados y atados a objetos con nombre. Lo que falta — la revisión de expertos externos, la calibración con datos reales, el piloto acotado — está declarado con la misma precisión. Así se ve, sostiene este trabajo, el diseño institucional tratado como disciplina de ingeniería y no como disciplina ideológica.

---

## Referencias esenciales

Becker (1968) · Bovens (2007) · Brennan (2016) · Coase (1937) · Epstein (1995) · Friedman y Friedman (1980) · Hayek (1945) · Hirschman (1970) · Jensen y Meckling (1976) · Kydland y Prescott (1977) · Laffont y Tirole (1991) · Lupia y McCubbins (1998) · Mises (1920) · Musgrave (1959) · North y Weingast (1989) · Okun (1975) · Olken (2007) · Olson (1982) · Ostrom (1990) · Peixoto y Fox (2016) · Power (1997) · Reinikka y Svensson (2004) · Sowell (1980) · Stigler (1971) · Wampler (2007) · Williamson (1985)

*La lista completa de cincuenta referencias, con las demostraciones formales, las tablas de los cinco experimentos y el registro adversarial de los treinta y cinco ataques, está en el working paper (drafts/paper.md, versión en español drafts/paper.es.md) y en el corpus del repositorio.*
