// --- BASE DE DATOS DE PREGUNTAS (LAS 100 MÁS PROBABLES) ---
const preguntasDB = [
    { id: 1, video: "Charla paramédica 20-08", pregunta: "¿Cómo se calcula el Índice de Masa Corporal (IMC)?", respuestas: ["Dividiendo el peso entre la talla al cuadrado.", "Multiplicando la talla por el peso.", "Sumando el peso y la talla.", "Dividiendo la talla por el peso."], correcta: "Dividiendo el peso entre la talla al cuadrado." },
    { id: 2, video: "Charla paramédica 20-08", pregunta: "¿Cuál es el objetivo principal de la inmovilización de una fractura?", respuestas: ["Acelerar la curación del hueso.", "Permitir el movimiento controlado.", "Evitar causar más daño y dolor al paciente.", "Realinear el hueso en su posición original."], correcta: "Evitar causar más daño y dolor al paciente." },
    { id: 3, video: "Charla paramédica 20-08", pregunta: "¿Cuánta sangre puede sangrar un fémur fracturado?", respuestas: ["Aproximadamente 500 ml.", "Hasta 1.5 litros.", "Entre 300 ml y 2 litros.", "Hasta 4 litros."], correcta: "Hasta 1.5 litros." },
    { id: 4, video: "Charla paramédica 20-08", pregunta: "¿Qué se debe aplicar para tratar una contusión o esguince?", respuestas: ["Calor.", "Compresión y calor.", "Hielo.", "Ungüentos antiinflamatorios solamente."], correcta: "Hielo." },
    { id: 5, video: "Charla paramédica 20-08", pregunta: "¿Qué indica la falta de simetría en el tórax de un paciente?", respuestas: ["Una lesión abdominal.", "Una posible fractura de costillas.", "Un desgarro muscular.", "Una contusión menor."], correcta: "Una posible fractura de costillas." },
    { id: 6, video: "Charla Paramédica 22-08", pregunta: "¿Qué significa la 'P' en la nemotecnia SAMPLE?", respuestas: ["Patologías previas.", "Pulso.", "Presión arterial.", "Perdida de conciencia."], correcta: "Patologías previas." },
    { id: 7, video: "Charla Paramédica 22-08", pregunta: "¿Cuál es la función principal de la circulación mayor?", respuestas: ["Oxigenar la sangre en los pulmones.", "Llevar sangre rica en oxígeno a todo el cuerpo.", "Recoger desechos del cuerpo.", "Solo transportar sangre a las extremidades."], correcta: "Llevar sangre rica en oxígeno a todo el cuerpo." },
    { id: 8, video: "Charla Paramédica 22-08", pregunta: "¿Qué se debe hacer si un paciente no responde?", respuestas: ["Llamar a un familiar.", "Moverlo inmediatamente.", "Valorar la respiración y el pulso.", "Darle agua."], correcta: "Valorar la respiración y el pulso." },
    { id: 9, video: "Charla Paramédica 22-08", pregunta: "¿Qué sistema es conocido como el 'motor' del cuerpo?", respuestas: ["Sistema nervioso.", "Sistema circulatorio.", "Sistema esquelético.", "Sistema digestivo."], correcta: "Sistema circulatorio." },
    { id: 10, video: "Hemorragias y Perfusión", pregunta: "¿Por qué no se debe realizar RCP en un paciente con trauma y arresto circulatorio?", respuestas: ["Porque el paro cardiaco es por una hemorragia.", "Porque el paciente ya tiene un problema respiratorio.", "Porque el paciente podría despertar y moverse.", "Porque es una medida exclusiva para bomberos."], correcta: "Porque el paro cardiaco es por una hemorragia." },
    { id: 11, video: "Hemorragias y Perfusión", pregunta: "¿Cuál es la principal causa de muertes prevenibles en traumas a nivel prehospitalario?", respuestas: ["Lesiones en la cabeza.", "Paros respiratorios.", "Hemorragias descontroladas.", "Fracturas múltiples."], correcta: "Hemorragias descontroladas." },
    { id: 12, video: "Hemorragias y Perfusión", pregunta: "¿Cuánto tiempo se tiene para salvar a un paciente con una hemorragia arterial grave?", respuestas: ["Una hora.", "Diez minutos.", "Tres minutos.", "Treinta minutos."], correcta: "Tres minutos." },
    { id: 13, video: "Hemorragias y Perfusión", pregunta: "¿Cuál es la prueba para detectar la perfusión deficiente?", respuestas: ["La prueba de tiempo de perfusión de la uña.", "El pulso del paciente.", "La frecuencia respiratoria.", "El color de la piel."], correcta: "La prueba de tiempo de perfusión de la uña." },
    { id: 14, video: "Hemorragias y Perfusión", pregunta: "¿Qué tipo de hemorragia es la más peligrosa por la rapidez de la pérdida de sangre?", respuestas: ["Hemorragia venosa.", "Hemorragia capilar.", "Hemorragia arterial.", "Hemorragia interna."], correcta: "Hemorragia arterial." },
    { id: 15, video: "Hemorragias y Perfusión", pregunta: "¿Cuáles son los órganos nobles del cuerpo humano?", respuestas: ["Estómago, intestinos, bazo.", "Hígado, riñones, cerebro, corazón y pulmones.", "Timo, páncreas, tiroides.", "Vesícula, apéndice, bazo."], correcta: "Hígado, riñones, cerebro, corazón y pulmones." },
    { id: 16, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cuál es el rango normal de frecuencia respiratoria en un adulto?", respuestas: ["De 5 a 10 respiraciones por minuto.", "De 12 a 20 respiraciones por minuto.", "De 20 a 30 respiraciones por minuto.", "Más de 30 respiraciones por minuto."], correcta: "De 12 a 20 respiraciones por minuto." },
    { id: 17, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué ocurre con el diafragma durante la inhalación?", respuestas: ["Se relaja.", "Se contrae y los pulmones se expanden.", "Se detiene.", "Se mueve hacia arriba."], correcta: "Se contrae y los pulmones se expanden." },
    { id: 18, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué llevan las venas y en qué dirección?", respuestas: ["Sangre oxigenada desde el corazón.", "Sangre desoxigenada hacia el corazón.", "Sangre oxigenada hacia el corazón.", "Sangre desoxigenada desde el corazón."], correcta: "Sangre desoxigenada hacia el corazón." },
    { id: 19, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué se debe hacer como primer auxilio en un problema respiratorio?", respuestas: ["Dar agua al paciente.", "Darle de comer.", "Administrar oxígeno.", "Hacerle una incisión."], correcta: "Administrar oxígeno." },
    { id: 20, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cuáles son las cuatro cavidades principales del corazón?", respuestas: ["Arterias y venas.", "Aurículas y ventrículos.", "Válvulas y atrios.", "Mitral y tricúspide."], correcta: "Aurículas y ventrículos." },
    { id: 21, video: "Charla Paramédica 22-08", pregunta: "¿Cuál es la función principal de los alvéolos?", respuestas: ["Calentar el aire que entra a los pulmones.", "Producir moco para atrapar partículas.", "Realizar el intercambio de gases.", "Conectar la tráquea con los bronquios."], correcta: "Realizar el intercambio de gases." },
    { id: 22, video: "Charla Paramédica 22-08", pregunta: "¿Qué tipo de músculo compone las paredes del corazón?", respuestas: ["Músculo esquelético.", "Músculo liso.", "Músculo estriado.", "Músculo cardíaco."], correcta: "Músculo cardíaco." },
    { id: 23, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué es la cianosis?", respuestas: ["Una coloración rojiza en la piel.", "Una coloración amarillenta en la piel.", "Una coloración azulada en la piel por falta de oxígeno.", "Una inflamación de los tejidos."], correcta: "Una coloración azulada en la piel por falta de oxígeno." },
    { id: 24, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cómo se llama la capa muscular del corazón?", respuestas: ["Epicardio.", "Miocardio.", "Endocardio.", "Pericardio."], correcta: "Miocardio." },
    { id: 25, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cuál es la función de la arteria aorta?", respuestas: ["Llevar sangre sin oxígeno a los pulmones.", "Llevar sangre oxigenada a todo el cuerpo.", "Recoger sangre de las venas.", "Bombear sangre al corazón."], correcta: "Llevar sangre oxigenada a todo el cuerpo." },
    { id: 26, video: "Hemorragias y Perfusión", pregunta: "¿Qué se debe hacer en caso de una hemorragia capilar?", respuestas: ["Aplicar presión firme y directa.", "Aplicar un torniquete.", "Limpiar la herida y cubrirla.", "Llamar a emergencia inmediatamente."], correcta: "Limpiar la herida y cubrirla." },
    { id: 27, video: "Hemorragias y Perfusión", pregunta: "¿Qué son los órganos nobles?", respuestas: ["Órganos que se dañan con el alcohol.", "Órganos que se pueden regenerar.", "Órganos vitales que necesitan más flujo sanguíneo.", "Órganos que controlan el sistema nervioso."], correcta: "Órganos vitales que necesitan más flujo sanguíneo." },
    { id: 28, video: "Hemorragias y Perfusión", pregunta: "¿Qué es el choque hipovolémico?", respuestas: ["Una reacción alérgica.", "Una infección sanguínea.", "Una condición causada por la pérdida masiva de sangre.", "Un problema en el corazón."], correcta: "Una condición causada por la pérdida masiva de sangre." },
    { id: 29, video: "Charla Paramédica 22-08", pregunta: "¿Qué es la homeostasis?", respuestas: ["Un desequilibrio en el cuerpo.", "La capacidad del cuerpo para mantener el equilibrio interno.", "El proceso de curación de heridas.", "La respuesta del cuerpo al estrés."], correcta: "La capacidad del cuerpo para mantener el equilibrio interno." },
    { id: 30, video: "Hemorragias y Perfusión", pregunta: "¿Cuál es la causa más común de muerte prevenible en el entorno prehospitalario según el video?", respuestas: ["Traumatismo craneoencefálico.", "Obstrucción de la vía aérea.", "Hemorragias descontroladas.", "Paro cardíaco."], correcta: "Hemorragias descontroladas." },
    { id: 31, video: "Charla Paramédica 22-08", pregunta: "¿Qué es la circulación menor (pulmonar)?", respuestas: ["El circuito de sangre que va al cerebro.", "El circuito que transporta sangre oxigenada al corazón.", "El circuito que lleva sangre sin oxígeno a los pulmones para oxigenarla.", "El circuito que va a las extremidades."], correcta: "El circuito que lleva sangre sin oxígeno a los pulmones para oxigenarla." },
    { id: 32, video: "Charla Paramédica 22-08", pregunta: "¿Por qué es importante tener una buena perfusión en el cuerpo?", respuestas: ["Para tener buena memoria.", "Para que el cuerpo se vea bien.", "Para que los órganos reciban suficiente oxígeno y nutrientes.", "Para mantener la temperatura corporal."], correcta: "Para que los órganos reciban suficiente oxígeno y nutrientes." },
    { id: 33, video: "Charla paramédica 20-08", pregunta: "¿Qué es una luxación?", respuestas: ["Una fractura en el hueso.", "La separación de dos huesos en una articulación.", "Una inflamación muscular.", "Un desgarro del ligamento."], correcta: "La separación de dos huesos en una articulación." },
    { id: 34, video: "Charla paramédica 20-08", pregunta: "¿Qué se debe hacer si se sospecha de una fractura de cadera?", respuestas: ["Mover al paciente a un lugar seguro.", "Levantar la pierna del paciente.", "Inmovilizar al paciente sin moverlo.", "Aplicar una pomada."], correcta: "Inmovilizar al paciente sin moverlo." },
    { id: 35, video: "Charla paramédica 20-08", pregunta: "¿Qué significa el término 'esguince'?", respuestas: ["Una fractura de hueso.", "Un desgarro muscular.", "Una lesión de ligamentos por un estiramiento excesivo.", "Una contusión grave."], correcta: "Una lesión de ligamentos por un estiramiento excesivo." },
    { id: 36, video: "Hemorragias y Perfusión", pregunta: "¿Cuál es el principal signo de una hemorragia arterial?", respuestas: ["Sangre de color rojo oscuro.", "Sangre que sale a borbotones.", "Sangre que gotea lentamente.", "Sangre que se detiene por sí sola."], correcta: "Sangre que sale a borbotones." },
    { id: 37, video: "Hemorragias y Perfusión", pregunta: "¿Qué se debe hacer si no se puede controlar una hemorragia con presión directa?", respuestas: ["Usar un vendaje compresivo.", "Aplicar un torniquete como último recurso.", "Ignorar la herida y buscar ayuda profesional.", "Aplicar calor en la zona."], correcta: "Aplicar un torniquete como último recurso." },
    { id: 38, video: "Hemorragias y Perfusión", pregunta: "¿Qué es un taponamiento cardíaco?", respuestas: ["Un coágulo en el corazón.", "Acumulación de líquido alrededor del corazón que impide que bombee.", "Un paro cardíaco por una infección.", "Un problema en las válvulas del corazón."], correcta: "Acumulación de líquido alrededor del corazón que impide que bombee." },
    { id: 39, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cómo se llama el proceso de respiración en el que se toma oxígeno del aire?", respuestas: ["Exhalación.", "Inhalación.", "Perfusión.", "Circulación."], correcta: "Inhalación." },
    { id: 40, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cuál es la función del dióxido de carbono en el cuerpo?", respuestas: ["Oxigenar la sangre.", "Llevar nutrientes a las células.", "Es un producto de desecho que se elimina del cuerpo.", "Ayuda en la digestión."], correcta: "Es un producto de desecho que se elimina del cuerpo." },
    { id: 41, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué son los capilares?", respuestas: ["Grandes vasos sanguíneos.", "Pequeños vasos sanguíneos donde ocurre el intercambio de gases y nutrientes.", "Vasos que llevan sangre oxigenada.", "Vasos que llevan sangre desoxigenada."], correcta: "Pequeños vasos sanguíneos donde ocurre el intercambio de gases y nutrientes." },
    { id: 42, video: "Hemorragias y Perfusión", pregunta: "¿Qué es el sangrado venoso?", respuestas: ["Sangre que sale a borbotones.", "Sangre que gotea lentamente y es de color rojo claro.", "Sangre que sale de manera constante y oscura.", "Sangre que se coagula rápidamente."], correcta: "Sangre que sale de manera constante y oscura." },
    { id: 43, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué parte del corazón recibe sangre oxigenada de los pulmones?", respuestas: ["Ventrículo derecho.", "Aurícula izquierda.", "Ventrículo izquierdo.", "Aurícula derecha."], correcta: "Aurícula izquierda." },
    { id: 44, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué arteria principal lleva sangre oxigenada al cuerpo?", respuestas: ["Arteria pulmonar.", "Aorta.", "Arteria carótida.", "Arteria femoral."], correcta: "Aorta." },
    { id: 45, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué vena principal lleva sangre desoxigenada al corazón?", respuestas: ["Vena pulmonar.", "Vena cava.", "Vena yugular.", "Vena safena."], correcta: "Vena cava." },
    { id: 46, video: "Charla paramédica 20-08", pregunta: "¿Qué se debe hacer ante una fractura expuesta?", respuestas: ["Tratar de meter el hueso de vuelta.", "Cubrir la herida para evitar infecciones.", "Lavar la herida con jabón.", "Aplicar presión directa sobre el hueso expuesto."], correcta: "Cubrir la herida para evitar infecciones." },
    { id: 47, video: "Charla paramédica 20-08", pregunta: "¿Por qué no se debe aplicar calor en una contusión?", respuestas: ["Porque aumenta la inflamación y el sangrado interno.", "Porque puede causar quemaduras.", "Porque no alivia el dolor.", "Porque no es un tratamiento efectivo."], correcta: "Porque aumenta la inflamación y el sangrado interno." },
    { id: 48, video: "Hemorragias y Perfusión", pregunta: "¿Cuál es la principal causa de un shock hipovolémico?", respuestas: ["Un susto.", "Una hemorragia masiva.", "Un paro cardíaco.", "Una infección."], correcta: "Una hemorragia masiva." },
    { id: 49, video: "Hemorragias y Perfusión", pregunta: "¿Qué es la perfusión?", respuestas: ["El proceso de coagulación de la sangre.", "El flujo de sangre a través de los vasos hacia los órganos y tejidos.", "La presión arterial del cuerpo.", "El bombeo del corazón."], correcta: "El flujo de sangre a través de los vasos hacia los órganos y tejidos." },
    { id: 50, video: "Charla paramédica 20-08", pregunta: "¿Qué se debe evaluar en un paciente traumatizado según la secuencia 'ABC'?", respuestas: ["Alergias, medicamentos, patologías.", "Vía aérea, respiración, circulación.", "Dolor, inflamación, movilidad.", "Pulso, presión, temperatura."], correcta: "Vía aérea, respiración, circulación." },
    { id: 51, video: "El sistema musculoesquelético", pregunta: "¿Cuántos huesos tiene el cuerpo de un adulto?", respuestas: ["Más de 300.", "150.", "206.", "250."], correcta: "206." },
    { id: 52, video: "El sistema musculoesquelético", pregunta: "¿Qué tipo de músculo se encuentra en las paredes del estómago y los intestinos?", respuestas: ["Esquelético.", "Cardíaco.", "Estriado.", "Liso."], correcta: "Liso." },
    { id: 53, video: "El sistema musculoesquelético", pregunta: "¿Qué son los ligamentos?", respuestas: ["Tejido que une músculo a hueso.", "Tejido que une hueso a hueso.", "Capa protectora de los huesos.", "Capa protectora de las articulaciones."], correcta: "Tejido que une hueso a hueso." },
    { id: 54, video: "El sistema musculoesquelético", pregunta: "¿Cuál es la función principal del sistema musculoesquelético?", respuestas: ["Regular la temperatura corporal.", "Proteger órganos vitales y dar soporte al cuerpo.", "Producir hormonas.", "Transportar nutrientes."], correcta: "Proteger órganos vitales y dar soporte al cuerpo." },
    { id: 55, video: "El sistema musculoesquelético", pregunta: "¿Qué tipo de músculo es voluntario y se une a los huesos?", respuestas: ["Liso.", "Cardíaco.", "Esquelético.", "Estriado involuntario."], correcta: "Esquelético." },
    { id: 56, video: "El sistema musculoesquelético", pregunta: "¿Qué es una contractura muscular?", respuestas: ["Un desgarro en el músculo.", "Un estiramiento excesivo del músculo.", "Una lesión del tendón.", "Una contracción involuntaria y persistente de un músculo."], correcta: "Una contracción involuntaria y persistente de un músculo." },
    { id: 57, video: "El sistema musculoesquelético", pregunta: "¿Qué se debe aplicar para relajar una contractura muscular?", respuestas: ["Hielo.", "Presión.", "Calor.", "Inmovilización."], correcta: "Calor." },
    { id: 58, video: "El sistema musculoesquelético", pregunta: "¿Qué es una fractura abierta (o expuesta)?", respuestas: ["Una fractura en la que el hueso no rompe la piel.", "Una fractura con un gran hematoma.", "Una fractura en la que el hueso ha perforado la piel.", "Una fractura que no causa dolor."], correcta: "Una fractura en la que el hueso ha perforado la piel." },
    { id: 59, video: "El sistema musculoesquelético", pregunta: "¿Por qué los recién nacidos tienen más huesos que los adultos?", respuestas: ["Porque sus huesos son más pequeños.", "Porque sus huesos no están completamente formados.", "Porque tienen cartílagos que aún no se han fusionado.", "Porque sus huesos son más frágiles."], correcta: "Porque tienen cartílagos que aún no se han fusionado." },
    { id: 60, video: "El sistema musculoesquelético", pregunta: "¿Qué es una hemorragia?", respuestas: ["El endurecimiento de los huesos.", "La salida de sangre de los vasos sanguíneos.", "El proceso de curación de heridas.", "El sangrado interno."], correcta: "La salida de sangre de los vasos sanguíneos." },
    { id: 61, video: "El sistema musculoesquelético", pregunta: "¿Qué tipo de fractura es la más grave?", respuestas: ["Simple.", "Exposición.", "Compuesta.", "Cerrada."], correcta: "Exposición." },
    { id: 62, video: "El sistema musculoesquelético", pregunta: "¿Qué se debe hacer si se encuentra a una persona con una fractura?", respuestas: ["Moverla para ver la lesión.", "Aplicar un torniquete.", "Inmovilizar la parte afectada.", "Cubrir la herida con un vendaje."], correcta: "Inmovilizar la parte afectada." },
    { id: 63, video: "El sistema musculoesquelético", pregunta: "¿Cuál es la función del cartílago en una articulación?", respuestas: ["Dar estabilidad a la articulación.", "Producir líquido sinovial.", "Reducir la fricción entre los huesos.", "Conectar los músculos a los huesos."], correcta: "Reducir la fricción entre los huesos." },
    { id: 64, video: "El sistema musculoesquelético", pregunta: "¿Qué es una amputación?", respuestas: ["La pérdida completa de un órgano.", "La separación de una extremidad del cuerpo.", "La rotura de un hueso.", "Una herida profunda."], correcta: "La separación de una extremidad del cuerpo." },
    { id: 65, video: "El sistema musculoesquelético", pregunta: "¿Qué se debe hacer con una extremidad amputada?", respuestas: ["Tirarla a la basura.", "Llevarla directamente al hospital en una bolsa.", "Envolverla en una gasa húmeda y colocarla en una bolsa con hielo.", "Dejarla en el lugar del accidente."], correcta: "Envolverla en una gasa húmeda y colocarla en una bolsa con hielo." },
    { id: 66, video: "El sistema digestivo y urinario", pregunta: "¿Cuál es la función principal del sistema digestivo?", respuestas: ["Transportar el oxígeno.", "Procesar los alimentos para obtener nutrientes y energía.", "Bombear la sangre.", "Eliminar los residuos del cuerpo."], correcta: "Procesar los alimentos para obtener nutrientes y energía." },
    { id: 67, video: "El sistema digestivo y urinario", pregunta: "¿Qué órgano produce la insulina para regular el azúcar en la sangre?", respuestas: ["Hígado.", "Estómago.", "Riñón.", "Páncreas."], correcta: "Páncreas." },
    { id: 68, video: "El sistema digestivo y urinario", pregunta: "¿Qué es la hipoglucemia?", respuestas: ["Nivel alto de azúcar en la sangre.", "Nivel bajo de azúcar en la sangre.", "Nivel normal de azúcar en la sangre.", "Azúcar en la orina."], correcta: "Nivel bajo de azúcar en la sangre." },
    { id: 69, video: "El sistema digestivo y urinario", pregunta: "¿Cuál es la función del hígado en el sistema digestivo?", respuestas: ["Almacenar la bilis.", "Producir hormonas.", "Filtrar la sangre.", "Producir la bilis y procesar los nutrientes."], correcta: "Producir la bilis y procesar los nutrientes." },
    { id: 70, video: "El sistema digestivo y urinario", pregunta: "¿Qué es el bolo alimenticio?", respuestas: ["El alimento ya procesado en el estómago.", "Una mezcla de alimento y saliva que se forma en la boca.", "El alimento que se encuentra en el intestino.", "El alimento digerido."], correcta: "Una mezcla de alimento y saliva que se forma en la boca." },
    { id: 71, video: "El sistema digestivo y urinario", pregunta: "¿Qué se debe hacer si un paciente diabético inconsciente tiene aliento a manzana?", respuestas: ["Administrar insulina.", "Darle comida con mucha grasa.", "Sospechar de hiperglucemia.", "Darle agua para hidratarse."], correcta: "Sospechar de hiperglucemia." },
    { id: 72, video: "El sistema digestivo y urinario", pregunta: "¿Cuál es la función de los riñones?", respuestas: ["Filtrar el aire.", "Regular la temperatura corporal.", "Filtrar la sangre y producir orina.", "Bombear la sangre."], correcta: "Filtrar la sangre y producir orina." },
    { id: 73, video: "El sistema digestivo y urinario", pregunta: "¿Por qué las infecciones urinarias son más comunes en mujeres que en hombres?", respuestas: ["Por la dieta.", "Por la longitud de la uretra.", "Por el tipo de sangre.", "Por el color de la piel."], correcta: "Por la longitud de la uretra." },
    { id: 74, video: "El sistema digestivo y urinario", pregunta: "¿Qué se debe hacer para mantener los riñones saludables?", respuestas: ["Comer mucha sal.", "Beber alcohol frecuentemente.", "Evitar el agua.", "Mantener una buena hidratación."], correcta: "Mantener una buena hidratación." },
    { id: 75, video: "El sistema digestivo y urinario", pregunta: "¿Qué es la nefritis?", respuestas: ["Inflamación de los intestinos.", "Inflamación del hígado.", "Inflamación de los riñones.", "Inflamación de la vejiga."], correcta: "Inflamación de los riñones." },
    { id: 76, video: "El sistema digestivo y urinario", pregunta: "¿Qué es un cólico nefrítico?", respuestas: ["Dolor en el estómago.", "Dolor intenso en la espalda causado por una piedra en el riñón.", "Un tipo de dolor de cabeza.", "Dolor muscular en la pierna."], correcta: "Dolor intenso en la espalda causado por una piedra en el riñón." },
    { id: 77, video: "El sistema digestivo y urinario", pregunta: "¿Qué significan las siglas SAMPLE en la evaluación de pacientes?", respuestas: ["Síntomas, Alimentos, Medicamentos, Padecimientos, Localización, Eventos.", "Signos, Alergias, Medicamentos, Patologías, Última comida, Eventos.", "Síntomas, Actividad, Medicamentos, Posición, Comida, Entorno.", "Signos, Alergias, Medicamentos, Pruebas, Comida, Eventos."], correcta: "Signos, Alergias, Medicamentos, Patologías, Última comida, Eventos." },
    { id: 78, video: "El sistema musculoesquelético", pregunta: "¿Qué son los tendones?", respuestas: ["Bandas de tejido que unen hueso a hueso.", "Tejido que recubre las articulaciones.", "Bandas de tejido que unen músculo a hueso.", "Un tipo de músculo."], correcta: "Bandas de tejido que unen músculo a hueso." },
    { id: 79, video: "El sistema musculoesquelético", pregunta: "¿Qué se debe hacer ante una hemorragia activa en una extremidad?", respuestas: ["Aplicar un torniquete directamente.", "Aplicar presión directa sobre la herida.", "Lavar la herida con agua.", "Dejar que sangre para que limpie la herida."], correcta: "Aplicar presión directa sobre la herida." },
    { id: 80, video: "El sistema musculoesquelético", pregunta: "¿Cómo se llama la contracción de un músculo que puede causar un calambre?", respuestas: ["Relajación.", "Contractura.", "Distensión.", "Contusión."], correcta: "Contractura." },
    { id: 81, video: "El sistema musculoesquelético", pregunta: "¿Cuál es la forma correcta de inmovilizar una fractura?", respuestas: ["Usando vendas elásticas.", "Moviendo la extremidad para colocarla en su lugar.", "Aplicando una férula o tablilla que inmovilice la articulación superior e inferior.", "Sujetando solo la zona de la lesión."], correcta: "Aplicando una férula o tablilla que inmovilice la articulación superior e inferior." },
    { id: 82, video: "El sistema musculoesquelético", pregunta: "¿Qué es una quemadura de segundo grado?", respuestas: ["Una quemadura que solo afecta la capa superior de la piel.", "Una quemadura que produce ampollas.", "Una quemadura profunda que destruye la piel.", "Una quemadura que no causa dolor."], correcta: "Una quemadura que produce ampollas." },
    { id: 83, video: "El sistema digestivo y urinario", pregunta: "¿Qué sucede con la comida en el estómago?", respuestas: ["Se absorben los nutrientes.", "Se almacena y se descompone con jugos gástricos.", "Se convierte en orina.", "Pasa directamente al intestino."], correcta: "Se almacena y se descompone con jugos gástricos." },
    { id: 84, video: "El sistema digestivo y urinario", pregunta: "¿Qué órgano ayuda a descomponer las grasas?", respuestas: ["Riñón.", "Páncreas.", "Hígado.", "Estómago."], correcta: "Hígado." },
    { id: 85, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué es la taquipnea?", respuestas: ["Respiración lenta.", "Respiración rápida.", "Respiración normal.", "Ausencia de respiración."], correcta: "Respiración rápida." },
    { id: 86, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué transportan las arterias pulmonares?", respuestas: ["Sangre oxigenada a los pulmones.", "Sangre desoxigenada a los pulmones.", "Sangre oxigenada al corazón.", "Sangre desoxigenada al cuerpo."], correcta: "Sangre desoxigenada a los pulmones." },
    { id: 87, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué es la bradicardia?", respuestas: ["Ritmo cardíaco rápido.", "Ritmo cardíaco normal.", "Ritmo cardíaco lento.", "Ausencia de latido."], correcta: "Ritmo cardíaco lento." },
    { id: 88, video: "El sistema digestivo y urinario", pregunta: "¿Qué glándula produce la saliva para iniciar la digestión?", respuestas: ["Glándulas salivales.", "Páncreas.", "Hígado.", "Riñones."], correcta: "Glándulas salivales." },
    { id: 89, video: "El sistema digestivo y urinario", pregunta: "¿Qué es la ictericia?", respuestas: ["Coloración azulada de la piel.", "Coloración amarillenta de la piel por un problema en el hígado.", "Erupción en la piel.", "Inflamación de las articulaciones."], correcta: "Coloración amarillenta de la piel por un problema en el hígado." },
    { id: 90, video: "El sistema digestivo y urinario", pregunta: "¿Cuál es la función del esfínter?", respuestas: ["Permitir la entrada de alimento al estómago.", "Regular el paso de sustancias de un órgano a otro.", "Filtrar el alimento.", "Producir jugos gástricos."], correcta: "Regular el paso de sustancias de un órgano a otro." },
    { id: 91, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué es una arritmia?", respuestas: ["Un pulso normal.", "Un ritmo cardíaco irregular.", "Un pulso muy rápido.", "Un pulso muy lento."], correcta: "Un ritmo cardíaco irregular." },
    { id: 92, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué se debe hacer si se detecta un pulso muy débil?", respuestas: ["Dar un masaje en el pecho.", "Llamar a emergencia inmediatamente.", "Mover al paciente.", "Darle comida."], correcta: "Llamar a emergencia inmediatamente." },
    { id: 93, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué son los vasos sanguíneos?", respuestas: ["Conductos que transportan aire.", "Conductos que transportan sangre por todo el cuerpo.", "Órganos que producen sangre.", "Órganos que filtran la sangre."], correcta: "Conductos que transportan sangre por todo el cuerpo." },
    { id: 94, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cómo se llama la pared que divide el corazón en dos lados?", respuestas: ["Tabique.", "Aurícula.", "Ventrículo.", "Válvula."], correcta: "Tabique." },
    { id: 95, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Qué es la fibrilación ventricular?", respuestas: ["Un ritmo cardíaco normal.", "Una contracción desorganizada de los ventrículos.", "Un ritmo cardíaco lento.", "Un paro cardíaco."], correcta: "Una contracción desorganizada de los ventrículos." },
    { id: 96, video: "El sistema musculoesquelético", pregunta: "¿Qué se debe hacer con una quemadura de primer grado?", respuestas: ["Cubrirla con un vendaje compresivo.", "Aplicar mantequilla.", "Enfriarla con agua a temperatura ambiente y protegerla.", "Romper las ampollas."], correcta: "Enfriarla con agua a temperatura ambiente y protegerla." },
    { id: 97, video: "El sistema musculoesquelético", pregunta: "¿Qué se considera una herida punzante?", respuestas: ["Una herida causada por un objeto afilado.", "Una herida causada por una aguja o clavo.", "Una herida con bordes irregulares.", "Una herida que sangra mucho."], correcta: "Una herida causada por una aguja o clavo." },
    { id: 98, video: "El sistema digestivo y urinario", pregunta: "¿Qué es un trauma abdominal?", respuestas: ["Una lesión en el sistema digestivo.", "Una lesión en el páncreas.", "Una lesión por golpe en la zona del abdomen.", "Una infección en el abdomen."], correcta: "Una lesión por golpe en la zona del abdomen." },
    { id: 99, video: "Sistemas Respiratorio y Cardiovascular", pregunta: "¿Cuál es la función del oxígeno en el cuerpo?", respuestas: ["Oxida la sangre.", "Ayuda a la digestión.", "Produce energía para las células.", "Desintegra las células."], correcta: "Produce energía para las células." },
    { id: 100, video: "El sistema digestivo y urinario", pregunta: "¿Qué es la diabetes tipo 2?", respuestas: ["Una enfermedad autoinmune.", "Un problema en el que el cuerpo no produce suficiente insulina o la usa ineficazmente.", "Una enfermedad que causa pérdida de peso.", "Un problema en los riñones."], correcta: "Un problema en el que el cuerpo no produce suficiente insulina o la usa ineficazmente." }
];

// --- VARIABLES GLOBALES ---
const PREGUNTAS_POR_PAGINA = 5;
let paginaActual = 0;
let respuestasUsuario = {};
let nombreEstudiante = "";
let resultadosFinales = {};

// Variables para el temporizador
let horaInicio;
let horaFin;
let timerInterval;

// --- LÓGICA DE NAVEGACIÓN DE PÁGINAS ---

function mostrarPagina(id) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.add('oculta'));
    document.getElementById(id).classList.remove('oculta');
}

function iniciarEvaluacion() {
    nombreEstudiante = document.getElementById('nombre-estudiante').value.trim();
    if (nombreEstudiante === "") {
        alert("Por favor, introduce tus Nombres y Apellidos para comenzar.");
        return;
    }
    respuestasUsuario = {};
    paginaActual = 0;
    cargarPaginaPreguntas(paginaActual);
    mostrarPagina('pagina-evaluacion');
    document.getElementById('btn-imprimir-resultados').disabled = true;
    document.getElementById('btn-guardar-pdf').disabled = true;
    iniciarTemporizador();
}

function cerrarEvaluacion() {
    // Detiene el temporizador si está activo
    clearInterval(timerInterval);
    // Limpia el campo de nombre para el próximo inicio
    document.getElementById('nombre-estudiante').value = ""; 
    mostrarPagina('pagina-inicio');
}

function guardarRespuesta(preguntaId, respuesta) {
    respuestasUsuario[preguntaId] = respuesta;
}

function cargarPaginaPreguntas(pageIndex) {
    const inicio = pageIndex * PREGUNTAS_POR_PAGINA;
    const fin = inicio + PREGUNTAS_POR_PAGINA;
    const preguntasPagina = preguntasDB.slice(inicio, fin);
    const container = document.getElementById('preguntas-container');
    container.innerHTML = '';
    
    // Guarda las respuestas actuales antes de cargar la siguiente página
    guardarRespuestasActuales();

    preguntasPagina.forEach(p => {
        const div = document.createElement('div');
        div.className = 'pregunta-item';
        
        // Título del video
        const tituloVideo = document.createElement('h3');
        tituloVideo.textContent = p.video;
        div.appendChild(tituloVideo);

        // Pregunta
        const preguntaTexto = document.createElement('p');
        preguntaTexto.innerHTML = `${p.id}. ${p.pregunta}`;
        div.appendChild(preguntaTexto);

        // Opciones de respuesta
        p.respuestas.forEach(r => {
            const radioContainer = document.createElement('div');
            radioContainer.className = 'respuesta-opcion';
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `pregunta-${p.id}`;
            radio.id = `q${p.id}-r${r.length}`;
            radio.value = r;
            radio.onclick = () => guardarRespuesta(p.id, r);

            const label = document.createElement('label');
            label.htmlFor = radio.id;
            label.textContent = r;
            
            // Si el usuario ya respondió, marca la opción
            if (respuestasUsuario[p.id] === r) {
                radio.checked = true;
            }

            radioContainer.appendChild(radio);
            radioContainer.appendChild(label);
            div.appendChild(radioContainer);
        });

        container.appendChild(div);
    });

    // Actualiza botones de navegación
    const totalPaginas = Math.ceil(preguntasDB.length / PREGUNTAS_POR_PAGINA);
    document.getElementById('btn-anterior').disabled = paginaActual === 0;
    
    if (paginaActual >= totalPaginas - 1) {
        document.getElementById('btn-siguiente').classList.add('oculta');
        document.getElementById('btn-finalizar').classList.remove('oculta');
    } else {
        document.getElementById('btn-siguiente').classList.remove('oculta');
        document.getElementById('btn-finalizar').classList.add('oculta');
    }
}

function guardarRespuestasActuales() {
    // Guarda las respuestas de la página actual antes de cambiar
    const radios = document.querySelectorAll('#preguntas-container input[type="radio"]:checked');
    radios.forEach(radio => {
        const id = parseInt(radio.name.split('-')[1]);
        respuestasUsuario[id] = radio.value;
    });
}

function siguientePagina() {
    guardarRespuestasActuales();
    const totalPaginas = Math.ceil(preguntasDB.length / PREGUNTAS_POR_PAGINA);
    if (paginaActual < totalPaginas - 1) {
        paginaActual++;
        cargarPaginaPreguntas(paginaActual);
    }
}

function anteriorPagina() {
    guardarRespuestasActuales();
    if (paginaActual > 0) {
        paginaActual--;
        cargarPaginaPreguntas(paginaActual);
    }
}

// --- LÓGICA DE TEMPORIZADOR ---
function iniciarTemporizador() {
    horaInicio = new Date();
    timerInterval = setInterval(actualizarTemporizador, 1000);
}

function actualizarTemporizador() {
    const ahora = new Date();
    const tiempoTranscurrido = ahora.getTime() - horaInicio.getTime();
    const segundos = Math.floor(tiempoTranscurrido / 1000) % 60;
    const minutos = Math.floor(tiempoTranscurrido / 1000 / 60) % 60;
    const horas = Math.floor(tiempoTranscurrido / 1000 / 60 / 60);

    const formatoTiempo = 
        `${String(horas).padStart(2, '0')}:` +
        `${String(minutos).padStart(2, '0')}:` +
        `${String(segundos).padStart(2, '0')}`;
    
    document.getElementById('reloj-digital').textContent = formatoTiempo;
}

function detenerTemporizador() {
    clearInterval(timerInterval);
    horaFin = new Date();
    const tiempoTotalMs = horaFin.getTime() - horaInicio.getTime();
    
    const segundos = Math.floor(tiempoTotalMs / 1000) % 60;
    const minutos = Math.floor(tiempoTotalMs / 1000 / 60) % 60;
    const horas = Math.floor(tiempoTotalMs / 1000 / 60 / 60);

    return {
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        totalMs: tiempoTotalMs
    };
}


// --- LÓGICA DE RESULTADOS Y FINALIZACIÓN ---

function finalizarEvaluacion() {
    guardarRespuestasActuales();
    const tiempoEmpleado = detenerTemporizador();

    let correctas = 0;
    preguntasDB.forEach(p => {
        const respuesta = respuestasUsuario[p.id];
        if (respuesta && respuesta === p.correcta) {
            correctas++;
        }
    });

    const total = preguntasDB.length;
    const incorrectas = total - correctas;
    const porcentajeCorrectas = ((correctas / total) * 100).toFixed(2);
    const porcentajeIncorrectas = ((incorrectas / total) * 100).toFixed(2);

    resultadosFinales = {
        total: total,
        correctas: correctas,
        incorrectas: incorrectas,
        porcentajeCorrectas: porcentajeCorrectas,
        porcentajeIncorrectas: porcentajeIncorrectas,
        fechaEvaluacion: new Date().toLocaleDateString('es-PE'),
        horaInicio: horaInicio.toLocaleTimeString('es-PE'),
        horaFin: horaFin.toLocaleTimeString('es-PE'),
        tiempoEmpleado: `${tiempoEmpleado.horas}h ${tiempoEmpleado.minutos}m ${tiempoEmpleado.segundos}s`
    };

    // Inyecta los resultados en la página de resultados
    const resultadosHTML = `
        <p>Total de Preguntas: <strong>${resultadosFinales.total}</strong></p>
        <p class="correctas">Preguntas Correctas: <strong>${resultadosFinales.correctas}</strong> (${resultadosFinales.porcentajeCorrectas}%)</p>
        <p class="incorrectas">Preguntas Incorrectas: <strong>${resultadosFinales.incorrectas}</strong> (${resultadosFinales.porcentajeIncorrectas}%)</p>
    `;
    
    document.getElementById('resultado-cuadro').innerHTML = resultadosHTML;
    document.getElementById('nombre-resultado').textContent = nombreEstudiante;

    // Habilita botones de impresión y descarga
    document.getElementById('btn-imprimir-resultados').disabled = false;
    document.getElementById('btn-guardar-pdf').disabled = false;

    mostrarPagina('pagina-resultados');
}

// --- LÓGICA DE IMPRESIÓN Y DESCARGA (PDF) ---

function imprimirResultados() {
    const contenidoResultados = `
        <h1 style="text-align: center;">Resultados de la Evaluación</h1>
        <p style="text-align: center;">Estudiante: ${nombreEstudiante}</p>
        <div style="text-align: center; border: 2px solid #004d99; padding: 15px; margin-top: 20px; border-radius: 10px;">
            <p>Total de Preguntas: <strong>${resultadosFinales.total}</strong></p>
            <p style="color: green; font-weight: bold;">Preguntas Correctas: ${resultadosFinales.correctas} (${resultadosFinales.porcentajeCorrectas}%)</p>
            <p style="color: red; font-weight: bold;">Preguntas Incorrectas: ${resultadosFinales.incorrectas} (${resultadosFinales.porcentajeIncorrectas}%)</p>
        </div>
    `;
    
    const ventanaImpresion = window.open('', '_blank');
    ventanaImpresion.document.write(`
        <html>
        <head>
            <title>Resultados de Evaluación</title>
        </head>
        <body>${contenidoResultados}</body>
        </html>
    `);
    ventanaImpresion.document.close();
    ventanaImpresion.print();
}

function guardarTodoPDF() {
    const element = document.createElement('div');
    element.style.padding = '20px';
    element.style.fontFamily = 'Arial, sans-serif';

    const firmaHTML = `
        <div style="margin-top: 50px; text-align: center;">
            <p style="margin: 0;">_________________________________________</p>
            <p style="margin: 5px 0 0 0; font-weight: bold;">Mg. Ricardo Machado Portugal</p>
            <p style="margin: 0; font-size: 0.8em;">Doctor en formación en Psicología</p>
        </div>
    `;

    element.innerHTML += `
        <h1 style="text-align: center; color: #004d99;">EXAMEN DEL CURSO PARAMÉDICO</h1>
        <div style="text-align: center; margin-bottom: 20px;">
            <p style="font-weight: bold; margin: 0;">Mg. Ricardo Machado Portugal</p>
            <p style="font-size: 0.8em; color: #666; margin: 0;">Doctor en formación en Psicología</p>
        </div>
        <div style="border-bottom: 2px solid #ccc; padding-bottom: 10px; margin-bottom: 20px;">
            <p><strong>Estudiante:</strong> ${nombreEstudiante}</p>
            <p><strong>Fecha de Evaluación:</strong> ${resultadosFinales.fechaEvaluacion}</p>
            <p><strong>Hora de Inicio:</strong> ${resultadosFinales.horaInicio}</p>
            <p><strong>Hora de Término:</strong> ${resultadosFinales.horaFin}</p>
            <p><strong>Tiempo Empleado:</strong> ${resultadosFinales.tiempoEmpleado}</p>
        </div>
        
        <h2 style="text-align: center; color: #333;">Resultados de la Evaluación</h2>
        <div style="border: 2px solid #004d99; padding: 20px; margin-top: 10px; border-radius: 10px; text-align: center;">
            <p><strong>Total de Preguntas:</strong> ${resultadosFinales.total}</p>
            <p style="color: green; font-weight: bold;">Aciertos: ${resultadosFinales.correctas} (${resultadosFinales.porcentajeCorrectas}%)</p>
            <p style="color: red; font-weight: bold;">Errores: ${resultadosFinales.incorrectas} (${resultadosFinales.porcentajeIncorrectas}%)</p>
        </div>
        ${firmaHTML}
    `;

    const opt = {
        margin: 10,
        filename: `Resultados_Evaluacion_${nombreEstudiante.replace(/\s/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

// Inicializa la vista en la página de inicio al cargar
document.addEventListener('DOMContentLoaded', () => {
    mostrarPagina('pagina-inicio');
});