# Gobernanza Distribuida de Recursos Públicos

### Una arquitectura para que el gasto público entregue valor real, verificable y difícil de corromper

**Mauricio Offermann — julio de 2026.** Resumen de dos papers de trabajo: la *arquitectura* (doi:10.5281/zenodo.21193846) y la *evidencia* que la somete a prueba (doi:10.5281/zenodo.21246089).

## La idea en una frase

Los Estados no recaudan impuestos para *gastar presupuestos*; los recaudan para mejorar la vida de la sociedad que los financió (Musgrave, 1959). Sin embargo, la institución presupuestaria que usamos —de doscientos años— se juzga a sí misma por cuán fielmente ejecuta un plan, no por cuánto valor efectivamente *llega* a la gente. Entre el peso que se asigna y la plaza que se construye se abre una brecha silenciosa donde viven la corrupción, la obra de mala calidad y la mala elección de prioridades. Este trabajo propone —y pone a prueba con dureza— una arquitectura que cambia la vara: mide, y optimiza, el **valor entregado y verificado por cada peso público**. Bajo esa vara, entrega entre dos y tres veces más que el sistema actual.

## Cómo funciona

La arquitectura, llamada *Core v0*, se apoya en tres ideas simples que se refuerzan entre sí.

**Los ciudadanos deciden hacia dónde va el dinero, sin que nadie tenga que estar pendiente.** Cada persona puede dirigir su parte del presupuesto discrecional hacia proyectos concretos —una vereda, una plaza, un techo—; o delegar esa decisión en alguien de su confianza, revocable en cualquier momento; o dejar que su parte fluya según una **categorización de asignación** que ella misma configura. Aquí conviene deshacer un malentendido: esto *no* es un vector fijo de porcentajes dictado por la autoridad (el clásico "tanto para Cultura, tanto para Salud"). Es un perfil de criterios, tan simple o tan rico como el ciudadano quiera, elegido entre miles de categorías posibles: personales y contextuales —"proyectos cerca de mi hogar", "proyectos rurales", "de zonas extremas", "los que están por financiarse"— o temáticas —"escuelas rurales", "salud para adultos mayores"—. Incluso quien no hace nada participa a través de una categorización sensata por omisión, y su perfil es privado, no un plan público impuesto a todos. Esta pieza —que la asignación pasiva se canalice por criterios distribuidos y personales, en vez de perderse o ser capturada por un planificador central— es la más humilde y a la vez la más importante: hace que el sistema funcione aunque la gran mayoría no participe activamente, que es lo que siempre ocurre en la vida real.

**El dinero se paga contra resultados verificados, no contra promesas.** En vez de entregar los fondos por adelantado, se liberan por tramos a medida que un tercero verifica que cada hito se cumplió. Retenciones, garantías y una memoria reputacional que acompaña al ejecutor hacen que desviar fondos sea, para quien lo intente, un mal negocio: se arriesga a perder más de lo que podría robar.

**Todo queda a la vista.** Cada decisión, cada demora, cada incumplimiento es público por construcción. Lo que hoy es invisible —la brecha entre lo que se declaró entregar y lo que realmente se entregó— se vuelve un hecho medible, atribuible y corregible.

Una observación conceptual guía el diseño: quien construye la lista de prioridades ejerce una forma sutil pero decisiva de poder —decide qué entra siquiera en la conversación (Bachrach y Baratz, 1962)—, y por eso la arquitectura hace que esa construcción sea observable y, en su forma plena, distribuida entre los ciudadanos en lugar de concentrada.

## Los hallazgos que importan

- **La ventaja es grande y sólida.** Comparada con el sistema actual —modelado con datos reales de auditoría de nueve países, no con una caricatura—, la arquitectura entrega entre 2 y 2.7 veces más valor verificado por unidad de presupuesto. El resultado se mantiene cuando se simulan poblaciones ciudadanas realistas, que se aburren, desconfían y delegan.

- **Funciona mejor, no peor, cuando participa poca gente.** Contra la intuición, la arquitectura rinde *más* con baja participación: la asignación pasiva, canalizada por las categorías que los propios ciudadanos eligen y afinada por la información de la minoría atenta, dirige el dinero hacia mejores proyectos que un planificador central de baja información. No exige movilizar a las masas —exige que la vía por omisión sea una categorización distribuida y personalizable, no un vector fijo impuesto desde arriba.

- **El control es robusto porque sus piezas se refuerzan.** El conjunto de salvaguardas —verificación, retención, garantías, reputación— disuade el desvío incluso cuando cada pieza individual es modesta, porque actúan juntas. Y su ventaja *crece* a medida que el entorno se ensucia: mientras más oportunistas hay entre los ejecutores, más valioso se vuelve el control. Es una arquitectura pensada para operar en el mundo real, no en uno idealizado.

- **La adopción es una perilla, no un salto.** Se puede empezar migrando una fracción pequeña del presupuesto y subir gradualmente; cada incremento paga, sin valles ni umbrales. Esto responde la objeción política más común: no pide un salto de fe, sino un piloto que se amplía si —y solo si— sus resultados lo justifican.

- **La tecnología permite abaratar y escalar el control.** La verificación asistida por inteligencia artificial puede multiplicar la capacidad de fiscalización a costo casi nulo, liberando a los fiscalizadores humanos para el rol más valioso: auditar al sistema en vez de revisar rutina. Y la evidencia aportada por ciudadanos comunes —con intereses opuestos a los del contratista— se vuelve un control vivo y distribuido: el vecino que quiere su plaza terminada vigila mejor, y gratis, que cualquier inspector. El límite honesto: hay fraudes —la colusión previa al contrato, la obra de calidad inferior que "fotografía bien"— que ninguna máquina ni evidencia documental detecta, y que seguirán requiriendo al ojo humano experto. La IA es un multiplicador de capacidad, no un reemplazo del juicio.

## Por qué merece atención

Si aceptamos que el gasto público debe juzgarse por el valor que efectivamente llega, entonces la pregunta —¿puede mejorarse la arquitectura bicentenaria con la tecnología de hoy?— deja de ser retórica. Este trabajo responde que sí, y lo cuantifica: más valor entregado por peso, corrupción disuadida por diseño y no por vigilancia heroica, adopción gradual de bajo riesgo, y ciudadanos con injerencia real sin necesidad de que todos participen. No es una utopía participativa ni una promesa de transparencia; es una arquitectura concreta, medida contra el sistema real, cuyos beneficios y cuyos límites se declaran con la misma franqueza.

Los papers largos desarrollan cada afirmación con su evidencia. Este resumen es una invitación a leerlos.

## Referencias

- Bachrach, P., y M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
- Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
- Ostrom, E. (1990). *Governing the Commons*. Cambridge University Press.
- Wampler, B. (2007). *Participatory Budgeting in Brazil*. Penn State University Press.
- Offermann, M. (2026a). *Distributed Resource Governance: An Architecture for Transparent Public Resource Allocation with Adversarial Validation*. doi:10.5281/zenodo.21193846.
- Offermann, M. (2026b). *Stress-Testing a Distributed Public-Resource Governance Architecture*. doi:10.5281/zenodo.21246089.
