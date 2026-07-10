# El paper de arquitectura, contado en simple

Versión de lectura fácil del working paper (`paper.md` / `paper.es.md`). Mismas ideas, sin jerga. Es el paper que *propone* la arquitectura; el paper complementario la *pone a prueba* con simulaciones (ese tiene su propia lectura simple).

## La idea de fondo

Los Estados no recaudan impuestos para *gastar presupuestos*; los recaudan para mejorar la vida de la gente. Pero el sistema presupuestario que usamos —de doscientos años— se mide por cuán fielmente ejecuta un plan, no por cuánto valor efectivamente *llega*. Entre el peso que se asigna y la plaza que se construye hay una brecha donde viven la corrupción, la obra mala y la mala elección de prioridades. Este trabajo propone una arquitectura —*Core v0*— que cambia la vara: mide y optimiza el **valor entregado y verificado por cada peso público**. El aporte central es la arquitectura misma; y cuando pusimos su mecanismo de selección distribuida a una prueba dura y justa, la ventaja resultó real pero pequeña —y lo decimos con todas sus letras.

## Cómo funciona, en tres piezas

1. **Los ciudadanos deciden hacia dónde va el dinero, sin tener que estar pendientes.** Cada persona puede dirigir su parte del presupuesto discrecional a proyectos concretos, delegar en alguien de confianza (revocable), o dejar que su parte fluya según una **regla de asignación** que ella misma define ("proyectos cerca de mí", "por financiarse", "escuelas rurales"). No es un porcentaje fijo dictado por la autoridad: es un perfil personal y privado. Incluso quien no hace nada participa a través de una regla por omisión sensata.

2. **El dinero se paga contra resultados verificados, no contra promesas.** Se libera por tramos a medida que un tercero verifica cada hito. Retenciones, garantías y una memoria reputacional hacen que desviar fondos sea un mal negocio: se arriesga más de lo que se podría robar.

3. **Todo queda a la vista.** Cada decisión, demora e incumplimiento es público por construcción. Lo que hoy es invisible —la brecha entre lo declarado y lo entregado— se vuelve un hecho medible y corregible.

## Una distinción clave: dos capas, no una

Conviene separar dos cosas que suenan parecido pero son distintas:

- **La planificación macro** = qué *categorías* de proyecto son elegibles ("salud", "educación rural"). Define las casillas; no reparte plata. La puede trazar la autoridad (central) o la sociedad (distribuida).
- **Las reglas de asignación** = a qué *proyectos concretos* dentro de esas casillas va la plata de cada ciudadano. Esto es lo que gobierna la entrega día a día, y es distribuido por diseño.

Por qué importa: si la planificación macro central está mal trazada (casillas que la sociedad no valora), el sistema **distribuido re-categoriza hacia el valor y no se cae**, mientras el central queda atrapado. Es robusto a una mala planificación; el central es frágil a ella.

## Los hallazgos que importan

- **El aporte es la arquitectura; la ventaja medida es real pero modesta:** en una prueba pre-registrada y *simétrica* (igualando la información de ambos lados), la ventaja de selección distribuida fue positiva en todas las celdas pero pequeña, por debajo del umbral que fijamos de antemano. Por eso retiramos el multiplicador grande que reportó una versión anterior y nos quedamos con el diseño y la *dirección* del mecanismo, no con un número.
- **La pieza aburrida es la existencial:** sin una regla por defecto que absorba a quien no participa, el sistema no entrega *nada* (con 3–5% de participación real, ningún proyecto junta fondos). Lo que hace institución a la participación es el default, no el entusiasmo.
- **Protege el valor aunque el planificador se equivoque:** por la distinción de dos capas, si la planificación central está mal trazada el brazo distribuido todavía encuentra valor donde el central queda atrapado. En el modelo esa ventaja relativa es mayor cuanto peor es la planificación central —una dirección del mecanismo, no un multiplicador calibrado.
- **Las protecciones anti-corrupción funcionan juntas o no funcionan:** quitar cualquiera cuesta casi nada; quitarlas todas hunde el sistema por debajo del status quo. Son complementos, no sustitutos.
- **La adopción es una perilla, no un salto:** se puede migrar el 10% del presupuesto y subir gradualmente; en el modelo, cada incremento paga.
- **La tecnología abarata el control, con límites:** la IA multiplica la capacidad de fiscalización (con humanos auditando a las máquinas y evidencia ciudadana contrapuesta), pero hay fraudes —colusión previa al contrato, obra mala que "fotografía bien"— que ningún papel ni máquina detecta y siguen necesitando al ojo humano.

## Lo que este trabajo NO afirma

No es prueba institucional, ni autorización legal, ni un piloto real: es una arquitectura concreta, contrastada dentro de un mundo simulado estilizado y no calibrado, no medida contra el sistema real. El objeto que gobierna es la porción *discrecional y con forma de proyecto* del presupuesto (obras, subsidios, programas locales), no el gasto recurrente. La capa legal (compras públicas, anualidad, contraloría) vive *debajo* del modelo. Y la validación independiente —revisores externos, un piloto humano— es el paso siguiente, no este paper.
