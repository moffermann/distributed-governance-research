# Gobernanza Distribuida de Recursos Públicos

### Una arquitectura para que el gasto público entregue valor real, verificable y difícil de corromper

**Mauricio Offermann — julio de 2026.** Resumen de dos papers de trabajo: la *arquitectura* (doi:10.5281/zenodo.21193846) y la *evidencia* que la somete a prueba (doi:10.5281/zenodo.21246088).

## La idea en una frase

Los Estados no recaudan impuestos para *gastar presupuestos*; los recaudan para mejorar la vida de la sociedad que los financió (Musgrave, 1959). Sin embargo, la institución presupuestaria que usamos —de doscientos años— se juzga a sí misma por cuán fielmente ejecuta un plan, no por cuánto valor efectivamente *llega* a la gente. Entre el peso que se asigna y la plaza que se construye se abre una brecha silenciosa donde viven la corrupción, la obra de mala calidad y la mala elección de prioridades. Este trabajo propone —y pone a prueba con dureza— una arquitectura que cambia la vara: mide, y optimiza, el **valor entregado y verificado por cada peso público**. El aporte central es la arquitectura misma; y cuando sometimos su mecanismo de selección distribuida a una prueba pre-registrada y simétrica, la ventaja resultó real pero pequeña —un resultado que reportamos con la misma franqueza con que proponemos el diseño.

## Cómo funciona

La arquitectura, llamada *Core v0*, se apoya en tres ideas simples que se refuerzan entre sí.

**Los ciudadanos deciden hacia dónde va el dinero, sin que nadie tenga que estar pendiente.** Cada persona puede dirigir su parte del presupuesto discrecional hacia proyectos concretos —una vereda, una plaza, un techo—; o delegar esa decisión en alguien de su confianza, revocable en cualquier momento; o dejar que su parte fluya según una **regla de asignación** que ella misma define. Conviene deshacer un malentendido: no hablamos de un *vector de planificación* —el clásico reparto fijo por grandes categorías, "tanto para Cultura, tanto para Salud"—, ni de una regla estática dictada por la autoridad. Hablamos de las *reglas* con que el propio ciudadano asigna su parte, construidas con los criterios que quiera entre miles posibles: personales y contextuales —"proyectos cerca de mi hogar", "proyectos rurales", "de zonas extremas", "los que están por financiarse"— o temáticos —"escuelas rurales", "salud para adultos mayores"—. Quien no define nada usa una regla por omisión sensata, y esa regla es privada, no un plan impuesto a todos. Lo esencial es que la asignación de quienes no participan activamente se rige por reglas distribuidas y personales, en vez de perderse o ser capturada por un planificador central; esta pieza, la más humilde, es a la vez la más importante: hace que el sistema funcione aunque la gran mayoría no participe activamente, que es lo que siempre ocurre en la vida real.

**El dinero se paga contra resultados verificados, no contra promesas.** En vez de entregar los fondos por adelantado, se liberan por tramos a medida que un tercero verifica que cada hito se cumplió. Retenciones, garantías y una memoria reputacional que acompaña al ejecutor hacen que desviar fondos sea, para quien lo intente, un mal negocio: se arriesga a perder más de lo que podría robar.

**Todo queda a la vista.** Cada decisión, cada demora, cada incumplimiento es público por construcción. Lo que hoy es invisible —la brecha entre lo que se declaró entregar y lo que realmente se entregó— se vuelve un hecho medible, atribuible y corregible.

Una observación conceptual guía el diseño: quien construye la lista de prioridades ejerce una forma sutil pero decisiva de poder —decide qué entra siquiera en la conversación (Bachrach y Baratz, 1962)—, y por eso la arquitectura hace que esa construcción sea observable y, en su forma plena, distribuida entre los ciudadanos en lugar de concentrada.

## Los hallazgos que importan

- **La arquitectura es el aporte; la ventaja medida es real pero modesta.** Cuando sometimos el mecanismo de selección distribuida a una prueba pre-registrada y simétrica —igualando el presupuesto de información de ambos lados, sin ventajas de partida—, la ventaja fue positiva en todas las celdas pero pequeña, por debajo del umbral de materialidad que nos habíamos fijado *de antemano*. Por eso retiramos el multiplicador grande que una versión anterior había reportado y nos apoyamos en el diseño y en la *dirección* del mecanismo, no en un número. La honestidad sobre ese límite es parte del aporte, no una nota al pie.

- **Está diseñada para funcionar aunque participe poca gente.** No exige movilizar a las masas: quien no participa activamente cae en reglas de asignación distribuidas y personales —o una por omisión sensata—, no en manos de un planificador central. Es una propiedad del *diseño*; no afirmamos que el sistema rinda *más* cuando baja la participación —nuestra prueba actual no puede sostener eso (al bajar la participación también cae la información disponible para ambos brazos).

- **Es un resguardo contra el error de planificación.** El sistema separa dos cosas que suelen confundirse: qué *categorías* de proyecto son elegibles (la planificación macro) y a qué *proyectos concretos* va la plata (las reglas de asignación de cada ciudadano). Si la autoridad traza buenas categorías, da igual quién lo haga; pero si las traza mal, el brazo distribuido todavía encuentra valor, mientras el central queda atrapado en sus malas categorías. En el modelo, esa ventaja relativa es mayor cuanto peor es la planificación central —una dirección del mecanismo, no un multiplicador calibrado.

- **El control es robusto porque sus piezas se refuerzan.** El conjunto de salvaguardas —verificación, retención, garantías, reputación— disuade el desvío incluso cuando cada pieza individual es modesta, porque actúan juntas. Y en el modelo su valor *crece* a medida que el entorno se ensucia: mientras más oportunistas hay entre los ejecutores, más rinde el control. Es una arquitectura pensada para operar en el mundo real, no en uno idealizado.

- **La adopción es una perilla, no un salto.** Se puede empezar migrando una fracción pequeña del presupuesto y subir gradualmente; en el modelo, cada incremento paga, sin valles ni umbrales. Esto responde la objeción política más común: no pide un salto de fe, sino un piloto que se amplía si —y solo si— sus resultados lo justifican.

- **La tecnología permite abaratar y escalar el control.** La verificación asistida por inteligencia artificial puede multiplicar la capacidad de fiscalización a costo casi nulo, liberando a los fiscalizadores humanos para el rol más valioso: auditar al sistema en vez de revisar rutina. Y la evidencia aportada por ciudadanos comunes —con intereses opuestos a los del contratista— puede volverse un control vivo y distribuido: el vecino que quiere su plaza terminada puede vigilar, sin costo, lo que un inspector no alcanza a cubrir. El límite honesto: hay fraudes —la colusión previa al contrato, la obra de calidad inferior que "fotografía bien"— que ninguna máquina ni evidencia documental detecta, y que seguirán requiriendo al ojo humano experto. La IA es un multiplicador de capacidad, no un reemplazo del juicio.

## Por qué merece atención

Si aceptamos que el gasto público debe juzgarse por el valor que efectivamente llega, entonces la pregunta —¿puede mejorarse la arquitectura bicentenaria con la tecnología de hoy?— deja de ser retórica. Este trabajo responde con un diseño concreto: corrupción disuadida por diseño y no por vigilancia heroica, adopción gradual de bajo riesgo, ciudadanos con injerencia real sin necesidad de que todos participen, y una ventaja de selección que —puesta a prueba con dureza— resultó real pero pequeña, reportada como tal. No es una utopía participativa ni una promesa de transparencia; es una arquitectura concreta, contrastada dentro de un mundo simulado estilizado (parametrizado por auditorías, no medida contra el sistema real), cuyos beneficios y cuyos límites se declaran con la misma franqueza.

Los papers largos desarrollan cada afirmación con su evidencia. Este resumen es una invitación a leerlos.

## Referencias

- Bachrach, P., y M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
- Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
- Ostrom, E. (1990). *Governing the Commons*. Cambridge University Press.
- Wampler, B. (2007). *Participatory Budgeting in Brazil*. Penn State University Press.
- Offermann, M. (2026a). *A Functional Architecture for Distributed Governance: Mechanism Design, Adversarial Stress-Testing, and a Symmetric Computational Test of Selective Institutional Distribution*. doi:10.5281/zenodo.21193846.
- Offermann, M. (2026b). *Stress-Testing a Distributed Public-Resource Governance Architecture*. doi:10.5281/zenodo.21246088.
