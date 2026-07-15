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
que la metagobernanza es la superficie de ataque de mayor apalancamiento
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

**Qué es nuevo.** No hemos realizado la revisión sistemática de literatura previa
que establecería prioridad a nivel de campo (nuestro mapa de literatura es
preliminar), así que reclamamos una **síntesis integradora a nivel de objetos** más
que novedad frente a todo trabajo adyacente. Con esa salvedad, no tenemos
conocimiento de trabajo previo que combine:

- **(i)** una descomposición funcional de la actividad estatal en capas
  distribuibles y no distribuibles;

- **(ii)** una arquitectura completa a nivel de objetos para la capa de
  asignación;

- **(iii)** un análisis formal de incentivos de los mecanismos específicos de
  esa arquitectura;

- **(iv)** simulación conductual de sus supuestos de cara a la ciudadanía
  —incluido lo que creemos es una comparación temprana de conocimiento simétrico,
  en simulación, de la construcción abierta de las prioridades de asignación a
  partir de señales ciudadanas agregadas contra la construcción central de ancho
  de banda finito (véase la Sección 6);

- **(v)** un método documentado de revisión adversarial con una regla de
  detención explícita.

Y dos contribuciones adicionales conciernen a la medición y al método:

- **(vi)** una comparación institucional de extremo a extremo, dentro de una
  porción acotada de inversión pública, sobre el valor social entregado por unidad
  de presupuesto, descomponiendo la selección de la entrega sobre carteras
  apareadas: en el modelo, la selección y la entrega verificada se componen
  multiplicativamente (una identidad contable, no un hallazgo independiente);
  una extensión pareada de selección y entrega gana ≈ +58.6 puntos de una
  referencia voraz en el mundo declarado [intervalo Monte Carlo condicional al
  95% +58.0, +59.2]; una atribución condicional de tres
  capas mantiene la diagonal completa de Core v0 positiva en todos los mundos
  nombrados mientras la magnitud independiente de la planificación queda sin cuantificar; y una
  contabilidad de presupuesto neto deja el costo administrativo
  aproximadamente neutro bajo un piso conservador de baja dispersión, con una ventaja declarada para Core v0 bajo un escenario de costos asimétrico (el canal de
  selección se examina por separado bajo una prueba prerregistrada; §6). Este trabajo también introduce la brecha de
  visibilidad (entrega oficialmente reportada menos entrega real) como un déficit
  de rendición de cuentas medible del statu quo;

- **(vii)** esa comparación contra una línea base parametrizada por auditorías,
  construida a partir de los hallazgos publicados de instituciones
  supremas de auditoría de nueve jurisdicciones y la Unión Europea (un escenario
  informado por prácticas documentadas cuya verificación de fuentes primarias aún
  se está completando), bajo una condición prerregistrada de retiro del resultado principal.

Las evaluaciones de presupuestos participativos miden participación y
asignación; los estudios de auditoría miden fugas después del hecho; no
conocemos ninguno que mida, dentro de un mismo marco, cuánto valor entregado
produce una institución de asignación a partir de los mismos recursos.

