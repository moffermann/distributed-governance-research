# Gobernanza Distribuida de Recursos Públicos — Resumen Ejecutivo

### Una arquitectura para que el gasto público entregue valor verificado, y la evidencia de que funciona mejor que el sistema actual

**Mauricio Offermann — julio de 2026.** Resumen ejecutivo del working paper *Distributed Resource Governance: An Architecture for Transparent Public Resource Allocation with Adversarial Validation* (v1.10, doi:10.5281/zenodo.21193846) y de su paper computacional complementario (v0.5, doi:10.5281/zenodo.21246089). Este documento es una invitación a leer los papers largos, no un sustituto.

## Resumen

Los Estados no recaudan impuestos para *ejecutar presupuestos*; los recaudan para mejorar la vida de la sociedad que los financió (Musgrave, 1959). El criterio correcto para juzgar una institución de asignación no es, entonces, cuán fielmente ejecuta un plan, sino cuánto **valor entregado y verificado** produce por cada unidad de recurso público — porque una redistribución cuya agua nunca llega no logró nada (Okun, 1975). Este trabajo propone una arquitectura concreta —*Core v0*— en la que los ciudadanos dirigen porciones del presupuesto discrecional hacia proyectos específicos, los pagos se liberan contra hitos verificados de forma independiente, y una "regla por defecto" pública absorbe el dinero de quienes no participan. La arquitectura se somete a una batería de simulaciones adversariales, de calibración conductual y de un panel de cinco modelos de inteligencia artificial reales que juzgan evidencia de obra. El resultado central: bajo un status quo *calibrado con hallazgos reales de contralorías* (no un espantapájaros), la arquitectura entrega entre 2.0 y 2.7 veces más valor verificado por unidad de presupuesto, y ese resultado sobrevive a poblaciones ciudadanas realistas, a atacantes que coluden, y a la sustitución de fiscalizadores humanos por máquinas. Igual de importante es la *forma* del argumento: cada afirmación se pre-registra antes de medirse, las predicciones refutadas se publican como hallazgos, y una segunda ronda de crítica interna encontró y corrigió un error de este propio trabajo —reportado aquí, error incluido.

## 1. El problema: medimos lo que se ejecuta, no lo que llega

La institución presupuestaria moderna tiene doscientos años y evalúa su desempeño por conformidad con el plan: ¿se gastó lo asignado, según las reglas? Pero el ciudadano no recibe reglas cumplidas; recibe —o no recibe— la plaza, la vereda, el techo. Entre el peso asignado y el valor entregado se abre una brecha que el sistema actual no mide y que la corrupción, la baja calidad de obra y la mala selección de proyectos habitan cómodamente. La pregunta de investigación es si la tecnología de hoy permite una arquitectura que cierre esa brecha mejor que el diseño bicentenario — y **cuánto** mejor.

## 2. La propuesta, en palabras simples

*Core v0* combina tres piezas. **Selección distribuida**: los ciudadanos —directamente, por delegación revocable, o por una regla por defecto pública— dirigen el gasto hacia proyectos concretos, en vez de que un planificador central defina un vector de prioridades de baja información. **Desembolso condicionado**: el dinero se libera por tramos contra hitos cuya entrega verifica un tercero, con retenciones, garantías y memoria reputacional que hacen que desviar fondos sea, para el ejecutor, un mal negocio. **Transparencia por construcción**: toda decisión, demora y brecha de cumplimiento queda pública. Una observación conceptual guía el diseño: quien construye el vector de prioridades ejerce la *segunda cara del poder* (Bachrach y Baratz, 1962; Lukes, 1974) —decide qué entra siquiera en la agenda— y por eso la arquitectura hace esa construcción observable y, en su forma plena, distribuida.

## 3. Qué es nuevo (los hallazgos que motivan leer el paper largo)

- **La ventaja es real y robusta, no un artefacto del comparador.** Contra un status quo calibrado con evidencia de auditoría de nueve jurisdicciones, la arquitectura entrega 2.0–2.7× más valor verificado por presupuesto, con intervalos de confianza que excluyen el empate por amplio margen, y el ranking no cambia bajo poblaciones ciudadanas generadas por un modelo de adopción realista.
- **La pieza aburrida es la existencial.** La versión "participativa pura" —sólo cuenta quien participa activamente— no entrega *nada*: con 3–5% de participación real, ningún proyecto junta fondos. Es la humilde *regla por defecto* la que convierte la participación en institución. (El 3–5% de participación activa, dicho sea de paso, coincide con tres décadas de datos de presupuestos participativos reales; Wampler, 2007.)
- **Las protecciones anti-corrupción funcionan juntas o no funcionan.** Quitar cualquier salvaguarda individual casi no cuesta; quitarlas todas hunde el sistema *por debajo* del status quo. Son complementos, no sustitutos —un resultado con consecuencia práctica: un despliegue que recorta salvaguardas "una defendible a la vez" puede terminar peor que no hacer nada.
- **La transición es una perilla, no un salto.** Se puede migrar el 10% del presupuesto y subir gradualmente; cada incremento paga, sin valle intermedio. Esto responde la objeción política más común: no exige un salto de fe.
- **La inteligencia artificial puede abaratar la fiscalización, con límites honestos.** Un panel de cinco familias de modelos reales juzgando evidencia de obra muestra que los modelos frontera detectan bien el fraude *documentalmente legible*; pero el fraude que más sangra un presupuesto —colusión previa al contrato, calidad de obra inferior que fotografía bien— no está en el expediente y sigue requiriendo al humano. Y el ataque que rompe la historia es la **colusión**: un anillo que controla ejecutor, verificador y evidencia ciudadana a la vez multiplica la fuga por veinticinco. La IA es un seguro de capacidad, no un reemplazo del control humano ni de la resistencia a la captura.

## 4. Cómo lo sabemos: validación adversarial como método

El aporte metodológico es tan relevante como los hallazgos. En vez de defender la arquitectura, el programa la *ataca*: cada mecanismo se ancla a un documento de diseño publicado, cada experimento pre-registra sus predicciones antes de correr, y las predicciones que fallan se reportan como hallazgos (de más de cuarenta predicciones registradas, cerca de un tercio fueron refutadas o nulas — y varias son los resultados más informativos). Una simulación no *validó* la arquitectura; *discutió* con ella, y ambas salieron cambiadas: dos hallazgos de la simulación entraron al cuerpo de diseño como reglas nuevas. Como señal de credibilidad, este resumen reporta que una segunda ronda de crítica interna encontró un error de constructo en el propio panel de IA —una etiqueta mal puesta que invertía un resultado— y que fue corregido y publicado, error incluido. La replicación cruzada entre un motor en JavaScript y una reimplementación independiente en Python (alineación de modelos al estilo de Axtell et al., 1996) respalda los resultados de arquitectura.

## 5. Lo que este trabajo no afirma

Es evidencia de simulación sobre un *modelo* de la arquitectura: no es prueba institucional, ni autorización legal, ni un piloto real. Los datos conductuales provienen de modelos de lenguaje como sustituto declarado de encuestas humanas que aún no se hacen. El objeto gobernado es la porción *discrecional y con forma de proyecto* del presupuesto (obras, subsidios, programas locales), no el gasto recurrente. La capa legal —compras públicas, anualidad, independencia de la contraloría— vive *debajo* del modelo. Y, sobre todo: todo el circuito de crítica es del mismo autor; la independencia real —un revisor externo del lado adversario, un piloto humano— es el paso siguiente, no éste.

## Invitación

Si el criterio correcto para juzgar el gasto público es el valor que efectivamente llega, entonces vale la pena preguntarse si la arquitectura bicentenaria puede mejorarse con la tecnología de hoy. Este trabajo ofrece una respuesta afirmativa, cuantificada y sometida a ataque —incluido el propio. Los papers largos (arquitectura y evidencia computacional) desarrollan cada hallazgo, con sus intervalos de confianza, sus refutaciones y sus límites declarados.

## Referencias

- Bachrach, P., y M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Axtell, R., R. Axelrod, J. M. Epstein, y M. D. Cohen (1996). "Aligning Simulation Models: A Case Study and Results." *Computational and Mathematical Organization Theory* 1(2).
- Lukes, S. (1974). *Power: A Radical View*. Macmillan.
- Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
- Offermann, M. (2026a). *Distributed Resource Governance: An Architecture for Transparent Public Resource Allocation with Adversarial Validation*. Working paper, doi:10.5281/zenodo.21193846.
- Offermann, M. (2026b). *Stress-Testing a Distributed Public-Resource Governance Architecture: Adversarial and Behavioral Agent-Based Evidence*. Paper computacional complementario, doi:10.5281/zenodo.21246089.
- Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
