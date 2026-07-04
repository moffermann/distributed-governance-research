# Manuscript v1.6 review — Public-sector practitioner profile (raw, verbatim, 2026-07-04)

## Reseña — Revisor externo del sector público (paper v1.6)

**Perfil del revisor:** Ex director de presupuesto y planificación municipal; implementé presupuesto participativo y sobreviví a licitaciones desiertas, reparos de contraloría, boletas de garantía ejecutadas y a un concejo municipal que vota con la billetera de sus donantes.

**Comprensión del paper:** Propone descomponer el Estado en capas funcionales y distribuir las de asignación-ejecución-verificación de una porción acotada del presupuesto hacia una arquitectura (Core v0) donde ciudadanos asignan capacidad desde billeteras cívicas, los roles (proponente, modelador, ejecutor, fiscalizador, productor de evidencia, custodio) están separados por diseño, el dinero se libera por hitos contra evidencia revisada con retención y garantías, y todo acto deja traza pública. Sobre eso monta tres aportes: formalización de incentivos (Prop 1-4), evidencia computacional (seis experimentos, 10.000 agentes) y un método de validación adversarial de 35 ataques. Las Findings 5-6 son el corazón nuevo: el régimen verificado entrega +43% sobre carteras idénticas, la arquitectura completa rinde 2,19× la línea base "opaca", y el statu quo sobredeclara su entrega real en 29 puntos. Respeto la ambición y la honestidad del capítulo de limitaciones. Pero el paper discute una administración pública que no es la que yo administré.

---

### Lo que el paper entiende bien de la administración real

1. **La separación de roles es la reforma correcta.** "El ejecutor nunca elige ni paga a sus fiscalizadores" (Sec. 4) es donde vive la corrupción real: el ITO amigo, el laboratorio de ensayos que factura al contratista, la recepción de obra firmada por quien la construyó.
2. **El gating por hitos con retención y garantías es buena práctica, no invención.** Coincide con los estados de pago con retención y las boletas de garantía de fiel cumplimiento.
3. **Tratar la baja participación como insumo de diseño, no como falla a exhortar** (Finding 3). Todo PB decae; diseñar para el ciudadano inatento es realista.
4. **El Fiscal Commitment Profile.** Hacer atribuible la estrangulación presupuestaria del tesoro es de lo más fino del paper: la tesorería central efectivamente ahoga en silencio los presupuestos transferidos.
5. **Absorbió la lección de Olken:** fiscalización profesional por sobre monitoreo de la multitud como capa que libera el pago.
6. **Las categorías de descubrimiento como palanca distributiva** (Finding 5: "near-me concentra 71% en el quintil más denso"). El default *es* política distributiva, y hacerlo visible y configurable es correcto.
7. **La candidez sobre el agenda-setting** como restricción vinculante (Sec. 8). Es raro y meritorio que un autor señale su propio talón de Aquiles con esa nitidez.

---

### Lo que el paper NO entiende de la administración real (lo más duro primero)

**1. La línea base "opaca" es un espantapájaros, y de él cuelga el 2,19×.** El paper modela el statu quo como "baja detección, anticipos desprotegidos, sin recuperación, sin memoria reputacional" (Finding 5). Esa no es una municipalidad que funciona. Hoy existen contraloría con toma de razón y juicio de cuentas, rendiciones con responsabilidad administrativa personal, retenciones en estados de pago, boletas de garantía de fiel cumplimiento y buena ejecución, ITO, y una ley de compras públicas con plataforma transaccional pública. El "régimen verificado" que el paper presenta como innovación —hitos, retención, recuperación, garantías— es, en obra pública, *aproximadamente el régimen contractual que ya existe*. El 2,19× mide la distancia entre "una arquitectura de control" y "cero control", y casi ninguna municipalidad opera en cero control.

**2. Los 29 puntos de "brecha de visibilidad" son un parámetro, no un hallazgo.** No hay medición: es lo que producen los supuestos de fuga elegidos, y la elección está sesgada al alza. Anclar en Uganda 87% (Reinikka-Svensson) es tomar la fuga de *transferencias de capitación* (efectivo, la categoría más filtrable) para calibrar un régimen de *contratos de construcción*. El propio paper cita a Olken con 24% para caminos, mucho más pertinente y un tercio del ancla ugandesa. "Parámetros dentro de la banda documentada" suena riguroso, pero la banda va de 24% a 87% y la elección dentro de ella *es* el titular.

**3. Los números dramáticos vienen de escalas que no existen en un municipio.** El +53-54% de "priorización social" y buena parte del multiplicador dependen de que la selección central sea "casi aleatoria a 200 proyectos" (E4/E5, N=200-1000). Un municipio no tiene 200-1000 proyectos deportivos candidatos: tiene 10-20. En el régimen honesto de escala pequeña (N=40) el planificador central correlaciona 0,81 y lo hace *bien*. El paper mismo lo admite pero no ajusta el titular. La ventaja de selección se derrumba a la escala municipal real, que es la del piloto propuesto.

**4. La economía del mercado de control está agitada al aire.** El corolario de la Prop 4 —"la corroboración sustituye al capital reputacional, a costo de control lineal"— trata como dial lo que en una comuna pobre es imposible: no hay mercado de fiscalizadores profesionales independientes; el ITO suele ser *un* ingeniero municipal sobrecargado. ¿k-corroboración por hito para una multicancha de $40 millones? El costo de control se come el proyecto. Y la resolución A035 tarifica al *revisor de la autoridad* (aprobar presupuestos/proyectos), pero **no tarifica el mercado de fiscalización**, que es la parte cara y verdaderamente nueva. El "ya existe, solo re-plataformamos" no aplica a la corroboración-k: hoy hay un ITO, no k inspectores independientes por hito.

**5. El flujo de caja mata al proveedor pequeño, y el paper lo trata como parámetro.** El Estado ya paga tarde. Cada compuerta de verificación es más demora, y la demora es letal para la pyme sin capital de trabajo. La Prop 3 reconoce que las garantías excluyen ejecutores de bajo margen, pero lo lee como desigualdad a calibrar. En terreno es sentencia para la ferretería del barrio. El "+43% de valor entregado" ignora la supervivencia: si el gating deja fuera a todos menos a las tres firmas grandes con espalda financiera, ¿quién ejecuta? Se optimiza la entrega concentrando el mercado — justo lo que la Finding 6 mide con alarma (Gini 0,84).

**6. El sistema legal y sindical no aparece.** "Migrar una porción del presupuesto a billeteras cívicas" no ocurre en el vacío: los proyectos igual deben licitarse bajo la ley de compras o adjudicarse por trato directo con límites estrictos. La billetera se monta *sobre*, no *en lugar de*, el derecho de compras públicas. Y los roles de fiscalizador/ITO no se "asignan por protocolo" a terceros sin contrato, honorarios y responsabilidad — los funcionarios están bajo Estatuto Administrativo. El "Duty-of-Care Anchor / persona jurídica solvente" ya existe: es el contratista, sus boletas y la responsabilidad del propio municipio.

---

### Objeciones principales

**Objeción 1 — El régimen "opaco" no es el statu quo; es su caricatura (Finding 5, Sec. 10).** Reconstruya la línea base con los controles reales (toma de razón, rendiciones con responsabilidad personal, retenciones, boletas, ITO, plataforma de compras) y reporte cuánto del 2,19× sobrevive. Sospecho que la mayor parte de la "ganancia de entrega" ya está internalizada por el régimen contractual vigente, y que el aporte real está en *transparencia*, no en un multiplicador de *entrega*.

**Objeción 2 — El 29 y el 2,19× son artefactos de calibración (Finding 5).** Reemplace el ancla de capitación ugandesa por el caso de construcción comparable (Olken, ~24%) y publique la sensibilidad del titular a esa sola elección. Un resultado central que se mueve con un parámetro no medido no es un resultado; es un supuesto con decimales.

**Objeción 3 — La ventaja de selección depende de una escala irreal (Finding 4/5, Sec. 6).** El municipio del piloto opera en N≈10-20, donde el planificador central rinde bien. Reporte el multiplicador a escala municipal real, no a N=200-1000. A esa escala, el caso a favor de la distribución se apoya en verificación y transparencia, no en selección — dígalo así.

**Objeción 4 — La capa de fiscalización no está costeada (Prop 4, A035, Sec. 8 thin markets).** A035 tarifica al revisor de admisibilidad, no el mercado de k-corroboración. Extienda la Declaración de Capacidad Administrativa para incluir el costo del control por hito y muestre un caso realista: una comuna con un ingeniero municipal, tres oferentes y una multicancha. Si k=1 en la práctica, la Prop 4 no se cumple y hay que decirlo.

**Objeción 5 — El gating verificado concentra el mercado de proveedores (Prop 3, Finding 6).** El diseño que maximiza entrega verificada expulsa a los pequeños por flujo de caja y garantías. Sin pago-puente / factoring / anticipo protegido para pymes, el sistema entrega más *porque* dejó afuera a los pequeños. Modele la supervivencia de proveedores como variable de resultado, no solo el valor entregado.

**Objeción 6 — La atribución nominal de cada demora hace inempleable el rol de fiscalizador/revisor (A035, "Review Timeout Resolution").** Nombrar públicamente al funcionario responsable de cada plazo vencido, en una municipalidad real, es un generador de reclamos gremiales y un imán de responsabilidad personal. Nadie querrá ser el revisor nombrado; y quien lo sea sobre-declarará capacidad defensiva. La transparencia individualizada, sin protección proporcional del funcionario de buena fe, se auto-sabotea la dotación.

**Objeción 7 — El "share legalmente mandatado" no tiene mandato (Sec. 4, Sec. 9).** El Allocation Mandate "registra autorización externa, no la fabrica" — correcto, pero ninguna ley existente la otorga. El piloto requiere o un cambio legal nacional o una ordenanza municipal de dudosa legalidad para desviar presupuesto a billeteras. Esa precondición legal es enorme y la Sección 9 la pasa por encima. El financiamiento deportivo, además, suele fluir por IND/FNDR/Subdere con reglas propias, no por presupuesto municipal puro.

**Objeción 8 — El mercado de ejecutores de la Finding 6 no es el mercado local.** El modelo asume un pool profundo donde la reputación excluye a los diversores (opportunist share 0,28→0,21). En la comuna real, excluir a la firma mala puede dejarte con cero oferentes y la licitación desierta. La concentración (Gini 0,84) no es patología a corregir con pisos de entrada; es la estructura del mercado cuando hay una sola empresa con grúa en la región.

---

### La pregunta del alcalde: ¿por qué adoptaría esto quien pierde con la transparencia?

Es la objeción que hunde o salva el proyecto, y el paper no la enfrenta: **asume la adopción.** El hallazgo estelar de la v1.6 es que "la entrega oficial del statu quo sobredeclara la entrega real en 29 puntos". Traducido a la política municipal: usted le propone al alcalde instalar, con su presupuesto, una máquina que cada trimestre publica un tablero probando que su administración miente o falla — y la Finding 6 expone además a sus contratistas aliados. Los "incumbent-resistance indicators" están redactados como virtud; desde el sillón del alcalde son munición armada para la oposición y la prensa. Ningún incumbente con algo que ocultar instala eso.

¿Quién sí lo adopta? Solo tres figuras, y el paper no construye el caso para ninguna:
- **El alcalde retador entrante tras un escándalo del antecesor**, que gana por contraste y usa la máquina como señal de compromiso creíble — pero exige enmarcar la brecha de visibilidad *prospectivamente* (esta es mi línea base, mídanme desde aquí), no como acta de acusación retroactiva.
- **Un gobierno nacional reformista que lo mandata** como condición de transferencia (así se adoptó la plataforma de compras).
- **Un piloto financiado por multilateral/ONG** donde la transparencia es condición del dinero.

Y aun estos tres enfrentan al concejo, al gremio de funcionarios y a los contratistas-donantes. El paper necesita una *teoría de la adopción* — quién gana políticamente, en qué coyuntura y cómo se enmarca la brecha para que sea señal y no autoacusación. Sin ella, la Sección 9 describe un actor que no existe.

---

### Qué piloto acotado sí firmaría yo

Sí firmaría uno — el instinto de acotar es correcto. Condiciones:
- **Dominio:** infraestructura comunitaria/deportiva de baja complejidad técnica (multicanchas, iluminación, juegos, mejoramiento de sedes) — obras donde la evidencia de hito es visible y el ciudadano puede confirmar entrega.
- **Municipio:** de capacidad *media*, no el más pobre. El piloto no puede ser también un test de capacidad inexistente.
- **Tamaño:** 3-5% del presupuesto municipal de inversión (o una línea FNDR delimitada), 10-20 proyectos candidatos, uno o dos ciclos anuales. No pretender la escala N=200.
- **Como overlay, no como reemplazo:** los ciudadanos asignan *pesos de prioridad*; la licitación sigue corriendo por la ley de compras.
- **Fiscalización realista:** ITO existente + *un* corroborador externo (k=2 máximo), presupuestado explícitamente. Nada de mercados de fiscalizadores fantasma.
- **Protección del flujo de caja de la pyme:** verificación de hito en 72h y una línea de pago-puente/factoring, o el gating concentra a las tres firmas grandes y el "+43%" será supervivencia disfrazada de calidad.
- **Cobertura legal explícita declarada al inicio:** ordenanza + autorización de piloto nacional.
- **Cobertura política:** adoptado por administración retadora o en transición limpia, con la brecha de visibilidad enmarcada como línea base prospectiva.
- **Primeros entregables medidos:** horas-por-resolución (como pide A035), costo-de-control por hito (lo que A035 omite) y supervivencia de proveedores pequeños. Esos tres números, no el 2,19×, dirán si el sistema es viable.

---

### Puntajes
- **Realismo administrativo: 2,5 / 5.** Lógica interna sofisticada, pero la línea base es un espantapájaros y la economía del mercado de control está agitada al aire.
- **Viabilidad política: 2 / 5.** El hallazgo estrella es políticamente autodestructivo para el adoptante natural, y no hay teoría de la adopción.
- **Diseño de piloto: 3 / 5.** La forma es sensata y acotada; naïf en lo legal y en el mercado de proveedores, pero rescatable con las condiciones de arriba.
- **Utilidad práctica: 3 / 5.** La separación de roles, la atribución de estrangulación fiscal y el default como palanca distributiva son genuinamente útiles aunque el sistema completo nunca se adopte.

---

### Veredicto final
Es un trabajo de diseño serio y desacostumbradamente honesto sobre sus propios bordes, pero mide su premio contra una administración pública que no existe: un statu quo sin controles, a una escala de proyectos que ningún municipio tiene, con un mercado de fiscalización y de proveedores que el terreno no ofrece. Reescriba la línea base con los controles reales, reporte los números a escala municipal, costee la capa de fiscalización y construya una teoría de por qué un alcalde adoptaría una máquina que lo expone — y tendrá un piloto que yo firmaría; sin eso, el 2,19× es una victoria contra un adversario de paja.
