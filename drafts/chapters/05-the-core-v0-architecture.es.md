## 4. La arquitectura Core v0

Resumimos la arquitectura de referencia al nivel necesario para el análisis; el
modelo completo de objetos, las máquinas de estado y las capas de interfaz
ciudadana están especificados en el corpus público.

**Financiamiento.** Una autoridad implementadora migra una cuota, con mandato
legal, de un presupuesto existente hacia billeteras cívicas individuales:
capacidad de asignación periódica, no retirable, de propósito público, igual
por ciudadano por defecto. Todo ámbito de planificación activo porta un
registro de *Allocation Mandate* (mandato de asignación) que nombra el
estatuto o instrumento que autorizó la migración, su rango legal, el órgano al
que se imputan las asignaciones y la fórmula de asignación. La plataforma
registra esa autorización externa; no la fabrica. La operación en modo
vinculante está supeditada a que se haya registrado una norma habilitante de
rango suficiente; en caso contrario, la opción predeterminada legal y expresamente declarada es la
operación consultiva o tutelada. El acto de asignación se diseña para replicar
dos garantías propias del sufragio: el secreto de la preferencia y la
resistencia a la coacción (receipt-freeness). En la medida en que una norma
habilitante lo reconozca, podrá ampararse con protecciones equivalentes a las
del voto; hasta entonces, son garantías técnicas de la plataforma, no un
estatus jurídico. Las asignaciones individuales son seudónimas en la capa
pública y se reconcilian criptográficamente contra los totales públicos por
ámbito —cada peso trazable como dinero, ningún ciudadano trazable como
asignador, y no existe recibo ni prueba exportable de ninguna asignación
individual, ni siquiera voluntariamente, de modo que un patrón que exija
prueba nunca pueda obtenerla (la defensa propia del voto secreto, aplicada a
la billetera). Un *Fiscal Commitment Profile* (perfil de compromiso fiscal)
por ámbito hace públicos y versionados el porcentaje migrado, la indexación y
la plazo de entrega, de modo que el estrangulamiento fiscal por parte de la
tesorería en funciones sea medible y atribuible antes que silencioso. Los
servicios esenciales con obligaciones de continuidad quedan protegidos por
pisos no asignables, fuera de la popularidad ciudadano-por-ciudadano.

**Proyectos y roles.** Los proyectos financiables declaran una tesis de valor
con afirmaciones verificables, partes afectadas, riesgos y antivalores, un plan
de fases e hitos, y un *contrato probatorio* (evidential contract): qué debe
probarse, por qué clase de productor calificado, con qué método, para qué efecto
formal. Seis roles están estructuralmente separados —proponente, modelador/
diseñador, ejecutor, fiscalizador, productor de evidencia, custodio— con las
relaciones de partes vinculadas declaradas en un grafo clasificado por
severidad. La regla fundamental es que el ejecutor nunca elige ni paga
a sus propios fiscalizadores o productores de evidencia: el trabajo de control se
financia desde un presupuesto de control separado y se asigna por protocolo.

**Cierre paralelo y desembolso condicional.** Un proyecto publicado reúne
compromisos de financiamiento, asignaciones de fiscalizadores, compromisos de
evidencia y confirmaciones de beneficiarios de manera concurrente; la ejecución
se vuelve posible solo cuando todas las condiciones requeridas por su *política
de umbrales* (threshold policy) proporcional cierran. Los fondos comprometidos
quedan en custodia, no transferidos: la liberación ocurre por hito, contra
evidencia de cumplimiento revisada, con retención, comprobaciones de impedimentos
y garantías materializadas por custodios externos antes de cualquier liberación.
Un *Duty-of-Care Anchor* (ancla de deber de diligencia) nombra, antes del desembolso, a la persona jurídica solvente que responde civilmente frente a terceros por los daños derivados de la ejecución, en particular los daños a la integridad física.

**Infraestructura de atención.** La ciudadanía actúa a través de una interfaz
estratificada: descubrimiento con ordenamiento controlado por el usuario y con
razón visible; tarjetas de proyecto compactas; y superficies de auditoría
progresivamente más profundas hasta el rastro completo. Los ciudadanos que no
prestan atención son servidos por perfiles automáticos de asignación
configurables —o un perfil por defecto sensato cuando no se define ninguno—
y por delegación acotada y revocable con
visibilidad de la concentración. La arquitectura no supone ciudadanos atentos;
supone que en su mayoría son desatentos y enruta su peso a través de una
intermediación inspeccionable (Lupia y McCubbins 1998). Esta es una respuesta
de diseño a la objeción de competencia ciudadana en su forma contemporánea más
aguda (Brennan 2016): antes que restringir el derecho de nadie a participar,
la arquitectura hace que la intermediación que la desatención produce sea
visible, revocable y auditable.

Un aparente reproche —que participar por aplicación, billetera y tutor de IA
excluya a la población no digitalizada— se disuelve bajo la disciplina
comparativa: el ciudadano no digital ya delega hoy, entregando su decisión,
vía el voto, a un representante lejano que asigna el presupuesto por él. Core
v0 no agrega una barrera: elimina un nivel de intermediación. Quien nunca participa
cae en el valor por defecto del sistema —igual por ciudadano, acotado por
mandato—, no en la preferencia de la minoría atenta; y quien participa aunque
sea mínimamente, incluso por vías no digitales o delegación asistida, acerca
la decisión a sus intereses directos mediante la microdelegación y reglas como
«cerca de mí», que financian lo que puede tocar. Lo que aparenta excluir,
incluye más —con la construcción del ámbito de planificación como la única
indirección restante (Sección 8).

**Transición.** El despliegue procede a través de modos de operación —cerrado,
tutelado, semiabierto, abierto— en los que una autoridad pública puede retener la revisión de elegibilidad (admisibilidad de proyectos), pero toda decisión tutelada de importancia, y todo
silencio tutelado más allá de su plazo, se convierte en un objeto público de
resolución de gobernanza. Los indicadores de resistencia del sistema
establecido (cuota de ámbito abierta, tasas de rechazo y de vencimiento de
plazos, privilegio del operador) hacen distinguible la adopción simbólica de
la transferencia real.

