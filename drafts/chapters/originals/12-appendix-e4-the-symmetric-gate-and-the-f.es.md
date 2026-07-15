## Apéndice E4: la prueba de decisión simétrica y el mapa de robustez de cuatro escenarios

Este apéndice ofrece el diseño completo de la prueba de decisión simétrica prerregistrada (resumida
como "Estado cuantitativo" en §6) y el mapa de robustez de cuatro escenarios v1.14
completo (destacado en §6): la tabla de escenarios, la descomposición de la miopía al
daño, la frontera, el teorema de paridad y los cuatro límites.

### La prueba de decisión simétrica de crédito versus cobertura (métodos completos)

Como esta es la prueba prerregistrada del artículo, su diseño se enuncia aquí
por completo y no solo por referencia. Cada mundo contiene K = 500 proyectos
candidatos; para cada uno se consideran N = 5000 participantes potenciales, y
cada participante tiene una probabilidad, específica de cada proyecto, de estar interesado, de modo que el alcance
de interesados es a lo sumo N y endógeno. Ambos brazos ven entonces el mismo conjunto de candidatos, los
mismos costos exactos, la misma verdad net[j] = S[j] − h·cost[j], la entrega en
**paridad**, y el mismo ruido de reporte report = v + Normal(0, τ); cada uno
financia un conjunto **voraz** bajo un presupuesto de un tercio del costo total de
los proyectos, es elegible para financiar un proyecto solo cuando *su propia*
estimación ruidosa del valor neto es positiva (sin compuerta de oráculo), y su valor entregado se
puntúa sobre el net *verdadero* de los proyectos. Los brazos son simétricos salvo
por el mecanismo de cobertura y sus contrapartes igualadas. *Distribuido (cobertura
endógena):* cada ciudadano interesado reporta de forma independiente con
probabilidad p si su valor v ≥ 0 y p·(1 − β) si v < 0 (sesgo de voz adverso), dando
ĥS_D = Σreportes / p, ordenado por net estimado por costo. *Central (lector de valor
competente):* un presupuesto de tasación ajustado al total *esperado* de reportes del
brazo distribuido en ese mundo, repartido **de manera uniforme** entre proyectos
como un ancho de banda fijo por proyecto redondeado m_C = round(reportes esperados /
K) (de modo que los totales de tasación de ambos brazos son iguales en esperanza
salvo ese redondeo); por proyecto muestrea m_C ciudadanos
interesados, observa v + Normal(0, τ), y forma su propio ĥNet_C ruidoso =
alcance·media(observado) − h·cost. Ordena por puntaje = (1 − λ)·z(ĥNet_C/cost) +
λ·z(P/cost) —su **propia estimación ruidosa**, nunca el net verdadero— donde P es el
crédito político reclamable (la lógica electoral de reclamo de crédito y
trazabilidad por la cual se favorecen los beneficios visibles y atribuibles sobre
los difusos; Mayhew 1974; Arnold 1990) y λ es la presión de crédito acotada (una
presión *postulada* cuya magnitud en el mundo real debe medirse, no suponerse). El
crédito mueve el *orden*, nunca la elegibilidad (sin planificador que destruya valor
a sabiendas). Las asimetrías legítimas son por tanto solo estas: los reportes
distribuidos se auto-enrutan hacia los proyectos que a los ciudadanos les importan
mientras las personas afectadas negativamente participan menos, y la tasación central se
reparte de manera uniforme mientras su orden carga presión de crédito —todo lo demás
es compartido. El estimando es **Δ = (D − C)/O** por mundo, donde D, C, O son el net
verdadero entregado por los brazos distribuido, central y voraz de información
completa, y O es un nivel de referencia, no un óptimo. La grilla congelada
barre λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 un control negativo), un parámetro de
correlación latente ρ ∈ {0, 0.5, 1} (corr(S, P) realizada ≈ 0.00, 0.30, 0.82),
y h ∈ {1.5, 2.5, 4} sobre 100 mundos sembrados, en un régimen de
observación base (p = .35, β = .30, τ = .5) y un régimen de estrés de baja
información con presupuesto igualado (p = .15, β = .60, τ = 1.0). La **regla de
decisión prerregistrada** —congelada antes de correr y diseñada por el auditor
independiente para ser adversarial— exigía, para autorizar la reconstrucción del motor
cuantitativo, al menos 15 de las 18 celdas primarias con Δ medio > 0, una **mediana
agrupada Δ ≥ 0.05**, un límite inferior de bootstrap > 0, y mediana Δ ≥ 0 bajo el
régimen de estrés, más un criterio de pausa si el propio control λ = 0 excedía
0.05. El resultado fue **negativo (no continuar)**: la ventaja fue positiva en las 18
celdas primarias, pero la **mediana agrupada Δ = 0.025** prerregistrada quedó por
debajo del umbral de reconstrucción de 0.05; el control negativo λ = 0 se ubicó en
≈ 0.016, dentro del criterio de pausa (ninguna asimetría oculta señalada).
Una estimación **post hoc** de cociente de sumas agrupado por mundos fue
Δ = 0.026 [0.023, 0.029] (incertidumbre Monte Carlo sobre el proceso generador
simulado, reportada por separado de la mediana). La ventaja crece con la presión de
crédito λ y cae a medida que el crédito se alinea con el valor —el mecanismo de
crédito versus cobertura—. Es pequeña para este estimando, y la mediana agrupada no superó
el umbral registrado de 0.05; conforme a la regla congelada, el multiplicador calibrado se
retira y la simulación se trata como una frontera ilustrativa, y el artículo
se apoya en la arquitectura y la dirección del
mecanismo, ahora afinada por el mapa de robustez a continuación.

### El mapa de robustez de cuatro escenarios (v1.14)

La prueba prerregistrada anterior dota al brazo central de una tasación competente y
*consciente del daño*. Una extensión v1.14 hace la pregunta empíricamente fundada: qué
ocurre cuando el central se modela como lo describe la evidencia — **casi ciego al daño
difuso en la cola larga de baja visibilidad**. Esa ceguera está sobre-determinada por la
literatura: el problema del conocimiento (Hayek 1945), la legibilidad estatal (Scott
1998), los costos difusos políticamente infraponderados (Olson 1965; Schattschneider 1960;
Wilson 1973), el 83% del desperdicio público que es *pasivo* y no elegido (Bandiera, Prat
y Valletti 2009), lo visible-versus-lo-no-visto (Bastiat 1850) y el control de agenda
(Bachrach y Baratz 1962). El modelo lo realiza como un término de daño gobernado por
saliencia, M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, cuya detección de daño s(V)
crece con la visibilidad del proyecto, mientras el brazo distribuido registra el daño en
toda la distribución. **La participación de asignación neta es universal por arquitectura
(p = 1)** —en Core v0 los perfiles y delegados asignan en nombre de los pasivos, así que
es un *hecho*, no una tasa de participación baja en presupuestos participativos. Su *calidad de señal* es
una composición anclada: ~5% reportes activos directos (la cifra de participación de un
dígito), ~35% microdelegación (señal individual, revocable — Kling et al. 2015) y ~60%
reglas de perfil (un default de categoría de alta alineación, ya que la gente
mayoritariamente conserva los defaults — Samuelson y Zeckhauser 1988). El anclaje
literario completo de cada parámetro está en `research/e4-calibration-literature-anchors.md`.
Puntuando la entrega sobre el valor real, cuatro escenarios declarados (más un contraste
diagnóstico) mapean dónde queda cada institución, como la fracción con signo de la referencia
voraz de información completa, paridad en cero (`npm run e4:scenarios`):

| escenario (supuestos) | m ± IC 95% | Core v0 | central | ganador |
|---|---|---|---|---|
| **Probable — el escenario de referencia declarado** (central miope al daño difuso, proyectando, sesgado al crédito; distribuido en su composición de cobertura anclada) | **+54,0%** [+53,2, +54,8] | 98,2% | 44,2% | **Core v0 (decisivo)** |
| **Solo la miopía al daño desactivada** (`MYOPIA_OFF`; contraste diagnóstico: probable, cambiando SOLO las dos coordenadas del umbral de daño) | **+37,6%** [+37,0, +38,2] | 98,2% | 60,6% | Core v0 |
| **Paquete sin miopía** — probable, pero al central se le otorga visión del daño + ausencia de sesgo + precisión + sin crédito | **+13,8%** [+13,5, +14,1] | 98,6% | 84,8% | Core v0 |
| **Caso favorable al distribuido** | **+205,2%** [+202,9, +208,1] | 95,6% | −109,6% | Core v0 |
| **Extremo declarado favorable al central** (un lector residualmente imperfecto en un mundo casi sin daño) | **−2,3%** [−2,5, −2,2] | 95,3% | 97,6% | central (ventaja estrecha interna al modelo) |

**El resultado anclado es grande y robusto en todo el espacio declarado (exploratorio).** Bajo el escenario de **referencia
declarado** el brazo distribuido entrega ≈ 98,2% de la referencia y el central
≈ 44,2% —una brecha de +54 puntos— y la cobertura gana en esencialmente todo el espacio
de parámetros anclado. Desactivar únicamente la miopía al daño (las dos coordenadas del umbral de daño)
recupera cerca del **41%** de la brecha (16,4 de un declive de 40,2 puntos); otorgar al
central el paquete *completo* competente-y-consciente-del-daño recupera el resto y aun
así deja a la cobertura adelante (**≈ +13,8%**) —de modo que hasta un central idealizado
en todo, **incluida la visión del daño**, aun así pierde. El central
se pone apenas adelante solo **abandonando los supuestos declarados**: un lector corregido
(sin miopía — contra Hayek/Scott/Olson/Bandiera; sin proyección — contra Broockman y
Skovron 2018) en un mundo casi sin daño alcanza apenas ≈ −3%, un caso extremo, marginal y contrario a la evidencia. Ese rincón se reporta **simétricamente** con el rincón *igualmente
idealizado* del brazo distribuido —construido para reflejar la misma receta: señal
distribuida perfecta en un mundo con daño con el central en su miopía *anclada*—, que
alcanza **≈ +118%** (el escenario más amplio `PRO_DIST` de la tabla, +205%, es aún más
favorable porque *además* degrada al central por debajo de su nivel anclado). La
idealización es marcadamente asimétrica, y ninguno de los dos rincones está empíricamente
fundado. La única sensibilidad que reduce materialmente la
brecha anclada es el **error correlacionado o de modo común** en la proporción asignada mediante
perfiles y delegación (una plataforma/recomendador compartido, o delegación concentrada en
super-delegados — Kling et al. 2015): reduce la brecha de aproximadamente +54% a +44% (modesto) y ≈ +26% (fuerte),
cruzando la paridad solo a un nivel grande de error compartido (σ_cm ≈ 2,1). Ninguna
rebanada de un-solo-factor voltea al ganador sobre su rango plausible; el sendero
ceteris-paribus combinado desde la referencia declarada hacia el extremo del central
plenamente idealizado cruza la paridad solo en **t ≈ 0,92 del segmento declarado**. Esto
es evidencia de curva local, ceteris-paribus —seis rebanadas de un-solo-factor más un
sendero combinado declarado— no una frontera global exhaustiva; un barrido conjunto
Sobol / hipercubo latino de todo el espacio de parámetros queda diferido a trabajo
futuro. Estas
magnitudes son **puntos de referencia declarados y motivados por fuentes, de un modelo
estilizado de instituciones comparadas —un contraste de modelo condicional, no efectos
de campo calibrados al dominio objetivo**. Los límites vigentes son: (i) la *magnitud*
exacta del umbral de daño es una forma funcional estilizada —su *dirección* está
fuertemente anclada, y el resultado es robusto en la banda s_exp ∈ [1, 2,5] (≈ +48% a
≈ +54%); (ii) los insumos del central cargan una brecha de transporte no propagada —la
evidencia de opinión política identifica error de *percepción* élite–constituyente, y
mapearlo a error de bienestar a nivel de proyecto requiere tres enlaces no estimados
(percepción → puntaje del proyecto → elección de cartera → valor realizado del afectado),
así que esos insumos están basados en indicadores indirectos, no calibrados; (iii) los intervalos
reportados son intervalos de bootstrap por mundo condicionales al 95% con insumos de
escenario *fijos* —solo incertidumbre de simulación de mundos finitos, excluyendo la
incertidumbre en valores de parámetros, transporte literario, forma funcional e
implementación de campo; el error independiente-más-modo-común del brazo distribuido es su
única sensibilidad estructural (arriba); y (iv) la entrega y el costo administrativo se
tratan en experimentos separados —E5 añade la entrega (fuga) a *presupuesto igualado*, y
E10 añade el costo administrativo como una reducción de *presupuesto neto* antes de la
selección— no incorporados en este mapa de selección. Los
escenarios, la frontera, la evidencia, el teorema y el anclaje literario completo
reproducibles están en `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md` y
`research/e4-calibration-literature-anchors.md`.

### Objetivos de calibración de E4

Las magnitudes de E4-v4/v5 son internas al modelo; la tabla nombra, para cada
parámetro, el dato real que *podría* informarlo —volviendo la frontera entre lo
interno al modelo y lo anclado empíricamente una línea visible y no una salvedad
enterrado en prosa (detalles en `research/e4-calibration-targets.md`). El
porcentaje de la referencia alcanzado por el central es un *resultado* que el modelo computa, pero mapearlo a los
cocientes entre el valor realizado y el tasado **no es una superposición directa**: son
constructos distintos (§6), así que es un **objetivo de validación candidato que
requiere una correspondencia explícita entre constructos**, no una calibración en un paso.

| Cantidad del modelo | Valor modelo | Indicador indirecto en el mundo real | Conjunto de datos candidato | Estado |
|---|---|---|---|---|
| porcentaje de la referencia alcanzado por el central | 44–85% | valor realizado ÷ tasado | calificaciones IEG del Banco Mundial; base de megaproyectos de Flyvbjerg | objetivo candidato; requiere una correspondencia explícita entre constructos |
| η (ceguera al daño) | 0–0.5 | desperdicio pasivo vs activo | Bandiera-Prat-Valletti 2009 (83% pasivo, específico del contexto: compras de bienes estandarizados en Italia) | dirección anclada |
| β (desigualdad de voz) | 0.2–0.5 | sesgo de participación en PP | NYC / París / Porto Alegre; Decidim / Consul | calibrable |
| q, m (detección) | q ≈ 0.5–1%, m en cientos | tasas de queja / denuncia | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibrable |
| umbral λ | central ≈ 0.10 | rentas de la contratación pública / magnitud de los sobornos | Olken 2007; WB Enterprise Surveys | calibrable |
| pena f | igual en ambos brazos | escala de sanción legal | mantenida igual (conservador) | elección de alcance |

El mapa de cuatro escenarios v1.14 (arriba; destacado en §6) hace explícito el mismo anclaje para su modelo de miopía al daño: la cola
larga de visibilidad está motivada por fuentes en las compras públicas de cola pesada (Skuhrovec et al. 2013), la
participación por la tasa de participación en presupuestos participativos, y el umbral de detección de daño por la literatura de
agenda-setting/saliencia; los anclajes de cada parámetro y su fuerza están registrados en
`research/e4-plausible-anchors.md`, con los escenarios, la frontera y el teorema reproducibles en
`scripts/simulation/e4-v5/` y `research/e4-parity-theorem.md`.

