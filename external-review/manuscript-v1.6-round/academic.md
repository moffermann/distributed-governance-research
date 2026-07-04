# Manuscript v1.6 review — Academic / political economy profile (raw, verbatim, 2026-07-04)

## Revisión externa del paper v1.6 (DOI 10.5281/zenodo.21193847)

Leí completo `drafts/paper.md`, `research/simulation-results.md` y las pre-registraciones E5/E6. Verifiqué que las cifras titulares reproducen las tablas (2.19× = 0.859/0.393; +43% = 0.168/0.393; +53-54% en selección; brecha 29 pts = 0.286; interacción +0.085; +11% de E6 = 0.059/0.541). No hay errores aritméticos texto↔tablas.

**Perfil del revisor:** Economista político / diseñador de mecanismos con trabajo empírico en rendición de cuentas y descentralización fiscal; lee ABMs con escepticismo metodológico.

**Comprensión del paper.** Reencuadra el debate sobre el Estado desde su *tamaño* hacia su *arquitectura*: descompone la actividad estatal en capas funcionales y distribuye aquellas cuyas fallas son de información/incentivos (asignación, ejecución, verificación, evaluación) manteniendo centrales las de coerción/adjudicación/macro-fiscal. Instancia el principio en "Core v0" (asignación de una fracción mandatada de presupuesto, separación de roles, desembolso por hitos, fiscalización protocolizada, rastro de auditoría). Aporta tres proposiciones de incentivos, una simulación de 10.000 agentes en seis experimentos (E1-E6) y un método de "validación adversarial" con 35 ataques auto-generados. Lo nuevo de v1.6 es E5 (valor entregado por unidad de presupuesto, 2×2 selección×entrega) y E6 (calidad de ejecución endógena).

**Contribución más fuerte.** El diseño de E5: descomponer *selección* de *entrega* sobre portafolios idénticos apareados por semilla, e introducir la **brecha de visibilidad** (completitud reportada menos entrega real) como métrica de déficit de accountability. Como encuadre conceptual es genuinamente clarificador. El mérito es el marco, no los números que produce.

**Afirmación más débil.** Que "la arquitectura completa entrega 2.19× el statu quo por unidad de presupuesto" (abstract; Finding 5; conclusión líneas 808-809). Ese factor descansa sobre dos supuestos que lo predeterminan: (i) el planificador central de E4 es near-random a escala (sel θ=0.14 con N=200), lo que infla el margen de selección; y (ii) el régimen opaco tiene la fuga parametrizada de entrada (p=0.10, sin recuperación, sin memoria reputacional). El 2.19× es en gran medida la aritmética de esos supuestos, no un hallazgo sobre el mundo.

### Objeciones principales (las más duras primero)

**1. Toda la "evidencia computacional" es in-model y no calibrada; abstract y conclusión la presentan con autoridad de medición.** Los autores admiten (§8, simulation-results.md) que los parámetros son "plausibles, no calibrados" y que "direcciones y órdenes, no valores puntuales, son los hallazgos". Pero el abstract (líneas 38-46) y la conclusión (797-811) enuncian +43%, +53-54%, 2.19× y "29 puntos porcentuales" sin el calificador "en el modelo" adyacente. Regla mínima: ninguna cifra de la simulación debe aparecer en abstract/conclusión sin "en simulación / bajo estos parámetros" pegada a ella.

**2. El resultado central de E5 (+43% de entrega) es cuasi-tautológico.** La Prop. 1 dice que la entrega se sostiene cuando c ≤ p·[...]. E5 fija los parámetros del brazo verificado (p=0.75, retención, recuperación, R>0) para que la condición IC se cumpla para *todos* los ejecutores, y los del opaco (p=0.10, anticipos ~1.0, r=0) para que se viole. El propio paper lo reconoce: "Prediction 3 failed... the IC threshold exceeds every opportunist's gain, so no one ever diverts" (592-596). Se supuso la fuga y luego se midió la fuga supuesta. Igual la "brecha de 29 puntos": el opaco registra el desvío como completado *por construcción* y el verificado tiene brecha cero *por construcción* (línea 306). Es una definición, no una medición.

**3. "Las capas multiplican" reproduce la forma funcional, no la descubre.** V = Σ θⱼ·fracción_entregadaⱼ·presupuestoⱼ (E5 diseño, línea 17) es literalmente un producto de selección (θ) por entrega. Que la interacción sea positiva (+0.085 [0.053, 0.117]) es una propiedad casi mecánica de haber escrito una función multiplicativa. Enunciarlo como "Prediction 2 HELD: the layers multiply" confunde la estructura del estimando con un descubrimiento.

**4. El planificador central de E4 es un hombre de paja, y sostiene el compuesto.** Es un agente único con 30 inspecciones fijas independientes del tamaño del mundo, prior 0.5 en el resto, sin muestreo adaptativo, sin jerarquía, sin expertise sectorial, sin aprendizaje iterativo. Contra eso, 12.000 señales se promedian a un vector casi perfecto. La comparación "30 inspecciones vs 12.000 señales" está decidida por *fijar el ancho de banda central* mientras crece el mundo. Ninguna burocracia real es un solo agente con 30 draws (cf. Gailmard & Patty sobre expertise burocrática). El sel(θ)=0.14 resultante es lo que hace grande el 2.19×.

**5. E4/E5 asumen señales ciudadanas *insesgadas*, es decir, suponen resuelto el problema que importa.** Las señales son θ + ruido de media cero (E4, 235-236); los autores conceden "aggregation defeats noise, not bias" (544). Pero todo el problema real de agregar preferencias ciudadanas es el sesgo, no el ruido: desinformación, razonamiento motivado, clientelismo, voto expresivo/identitario, NIMBYismo. Al asumir insesgadez, E4 reproduce el Teorema del Jurado de Condorcet (señales independientes insesgadas → agregado casi perfecto con N grande) —resultado de 1785— y lo presenta como "primera comparación de conocimiento simétrico" que "gana a toda escala". Las condiciones bajo las que el CJT *falla* (voto correlacionado, estratégico, sesgado — Austen-Smith & Banks 1996; Ladha 1992) son exactamente el régimen de despliegue real, y quedan fuera del modelo.

**6. La "validación adversarial" es auto-administrada y estructuralmente no falsable.** Los 35 ataques y sus defensas los produjo "el mismo esfuerzo de investigación que atacan, con asistencia de IA" (762), y los dos últimos una "revisión externa simulada" que el propio equipo generó. Un adversario que uno controla no valida. Peor: la regla integrar-o-acotar (P007) hace que *toda* objeción o bien añade un mecanismo (feature) o bien se documenta como límite acotado (663-667): ninguna objeción puede jamás contar en contra. Es un lazo cerrado. Rebajar "validation" → "structured self-critique / internal red-teaming".

**7. Falsabilidad: ¿qué observación del mundo refutaría la tesis?** Sin piloto, con proposiciones que son "álgebra de un paso" (342) y una simulación cuyos resultados son consecuencia de sus formas funcionales, no hay predicción arriesgada sobre el mundo. El patrón "failed in the informative direction" aparece para 2 de 5 predicciones en E5 y 2-3 de 4 en E6: cada falla se reconvierte en confirmación de algo más profundo. Que se reporten es honesto; que *siempre* haya una historia por la que la falla es buena noticia erosiona el poder falsador del pre-registro.

**8. Los IC de 20 corridas miden varianza Monte Carlo, no incertidumbre del mundo.** [0.143, 0.193], [0.053, 0.117] describen dispersión entre semillas bajo parámetros fijos; leídos junto a las cifras del abstract transmiten una precisión que no corresponde a ninguna afirmación empírica. Debe decirse explícitamente.

**9. El pre-registro es una aserción, no un hecho verificable.** "Committed before any run" está afirmado en `.md` dentro del mismo repo controlado por el autor, sin registro con timestamp de tercero (OSF, AsPredicted). Para reclamar disciplina pre-registrada en revista, hace falta el depósito externo.

**10. E6 hereda el problema de construcción.** El colapso del esfuerzo bajo opacidad y su sostenimiento bajo visibilidad están incorporados en la regla conductual (imitación atada a visibilidad; decaimiento donde no hay estándar visible — E6 diseño línea 16), como los autores conceden (618-620). El +11% es en parte la regla que se escribió.

### Literatura faltante (concreta y por qué importa)
- **Federalismo fiscal / descentralización — la ausencia más grave.** El "principio de distribución funcional" *es* esa literatura relabelada: **Oates (1972)** y el teorema de la descentralización; **Tiebout (1956)**; **Besley & Coate (2003)** (centralizado vs descentralizado con política explícita); **Seabright (1996)** (accountability y descentralización). Reclamar como novedad lo que el federalismo formaliza hace 50 años es el flanco de originalidad más atacable.
- **Teorema del Jurado de Condorcet y sus fallas:** **Condorcet (1785); Ladha (1992); Austen-Smith & Banks (1996); Feddersen & Pesendorfer (1996)**. E4 es una instancia del CJT.
- **Landemore, *Open Democracy* (2020) / *Democratic Reason* (2013)** — la competidora viva más cercana a la tesis de "construcción abierta a partir de conocimiento disperso".
- **Fung & Wright, *Deepening Democracy / Empowered Participatory Governance* (2003)** — ancestro directo; también **Fishkin** (deliberative polling) y **Mansbridge et al.** (deliberative systems).
- **Ferraz & Finan (2008)** (auditorías y accountability electoral en Brasil) — omisión grave dada la tesis de auditoría/visibilidad; complemento natural de Olken.
- **Career concerns / crowding para E6:** **Holmström (1999)** (E6 es literalmente un modelo de career concerns y no cita el canónico); **Bénabou & Tirole (2003/2006)**; **Frey & Jegen** (motivation crowding).
- **Tirole (1986), "Hierarchies and Bureaucracies"** — fundacional para la Prop. 4 (se cita Laffont-Tirole 1991 pero no este).
- **Lukes (1974), *Power: A Radical View*** — el canónico sobre agenda-setting como poder (citan Bachrach-Baratz y Schattschneider, no Lukes).
- **Ostrom tardía (2010 AER) y Aligica & Tarko** sobre policentricidad.

### Riesgo de overclaiming (frases exactas que un referee atacaría)
- Abstract 40-41: *"the full architecture delivers 2.19× the opaque status-quo baseline"* — sin "in-model"; el blanco más fácil.
- Abstract 41-42 / conclusión 801-802: *"the status quo's officially reported completion overstates real delivery by twenty-nine percentage points"* — brecha definida por construcción, no medida.
- §2 226-229: *"the first symmetric-knowledge comparison in which open construction... wins at every tested scale"* — es el CJT bajo insesgadez asumida.
- §6 584: *"the layers multiply"* como hallazgo, cuando es la forma funcional de V.
- §7/título: *"Adversarial validation as method"* — "validation" para un ejercicio auto-adversarial.

### Qué recortar o acotar antes de enviar a revista
1. Reponer todas las cifras del abstract/conclusión con su calificador in-model, o sacar los valores puntuales del abstract y dejar solo direcciones.
2. Reformular E4/E5 como "condicional a señales insesgadas" desde el titular, no en un caveat final.
3. Rebajar "validation" → "structured self-critique" en §7, abstract y contribución 4.
4. Fortalecer o desestimar el planificador central de E4; declarar que sel(θ)=0.14 es un límite inferior adversarial y que el 2.19× hereda esa elección.
5. Considerar dividir el paper: tres contribuciones a medio desarrollar para un solo artículo. Un paper mecanismo+ABM (E4-E6 + Prop 1-4) es publicable; el manifiesto de capas funcionales es otro.
6. Depositar el pre-registro con timestamp externo antes de reclamar disciplina pre-registrada.

### Puntajes (/5)
- **Claridad: 4** — bien organizado y conceptualmente nítido, pero prosa densísima y sobre-nominalizada; el abstract es una sola respiración de ~600 palabras.
- **Originalidad: 3** — novedad de conjunción; el principio de capas es federalismo fiscal relabelado; E4 es el CJT.
- **Contribución teórica: 2** — proposiciones "álgebra de un paso" por admisión propia; el principio funcional no está formalizado.
- **Solidez empírica: 2** — todo in-model y no calibrado; resultados clave cuasi-tautológicos o dependientes de un hombre de paja; se rescata por la honestidad del reporte y el pre-registro.
- **Ajuste bibliográfico: 3** — núcleo sólido y bien usado (Ostrom, Olken, Reinikka-Svensson, Holmström, Becker, Buterin-Hitzig-Weyl), pero huecos graves (federalismo, CJT, Landemore, Fung-Wright, Ferraz-Finan, career concerns).
- **Preparación para publicación (revista): 2** — como working paper es sólido; como artículo de revista está sobre-empacado y con overclaiming corregible.

### Veredicto final
Es un **working paper sólido y honesto** —inusualmente explícito sobre sus propios límites— pero **todavía no un artículo de revista** en su forma actual. Su valor real es el encuadre (selección×entrega, brecha de visibilidad, capas distribuibles) y su disciplina de límites; su talón de Aquiles es que las cifras titulares son propiedades de una simulación auto-parametrizada presentadas con autoridad empírica, sobre un planificador central de paja y bajo insesgadez asumida. Un referee escéptico escribiría "major revision" en el mejor caso: exigiría sacar los números del abstract, reencuadrar E4/E5 como condicionales, calibrar o acotar el central de E4, rebajar "validation", y llenar los huecos de federalismo y CJT —y probablemente sugeriría partir el manuscrito. Como está, encaja mejor en un venue de gobernanza/deliberación o design-science (o como working paper citable, que ya es) que en una revista de primer cuartil de economía política o diseño de mecanismos.
