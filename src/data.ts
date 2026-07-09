/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CopyBlueprint, Testimonial } from "./types";

export const BRAND_INFO = {
  name: "Brillo de Luna Homeschool",
  city: "Popayán, Colombia",
  department: "Cauca",
  tagline: "Educación alternativa, respetuosa y feliz en Popayán",
  description: "Un espacio de aprendizaje libre y apoyado donde tus hijos crecen a su propio ritmo en un entorno amoroso y consciente.",
};

export const LANDING_SECTIONS: CopyBlueprint[] = [
  {
    id: "hero",
    sectionTitle: "1. Hero Section (Sección Principal)",
    objective: "Capturar el interés del padre en menos de 5 segundos. Filtrar al público calificado (familias en Popayán interesadas en educación alternativa) y transmitir calma, felicidad y profesionalismo inmediato, prometiendo un alivio real frente al estrés del sistema escolar tradicional.",
    wireframeGuide: "Cabecera minimalista y elegante con logo orgánico y la etiqueta 'Popayán'. Distribución de pantalla dividida o centrada con gran peso tipográfico (Playfair Display para el título emotivo). CTA principal en color ocre/mostaza cálido y contrastante. Un elemento visual que evoque naturaleza, paz y la luna. Debajo del botón, microcopy que reduce la fricción y un testimonio relámpago de confianza.",
    copyFormula: "Promesa de Valor Directa + Mitigación de Fricción",
    copywriterTips: [
      "Usa la palabra 'Estrés' en contraste con 'Brillar' o 'Paz' para crear un gancho emocional rápido.",
      "Mencionar explícitamente 'Popayán' posiciona el servicio localmente, generando cercanía y confianza geográfica.",
      "El CTA debe enfocarse en una conversación ('asesoría o charla sin costo') en lugar de una venta agresiva."
    ],
    content: {
      kicker: "Educación Alternativa & Homeschooling en Popayán",
      headline: "El aprendizaje de tus hijos no tiene por qué ser una fuente de estrés diario.",
      subheadline: "Acompañamos a las familias de Popayán en el hermoso camino de educar en casa. Creamos un ambiente amoroso, experiencial y respetuoso que despierta la curiosidad natural de tu hijo, cuidando su bienestar emocional en cada paso.",
      ctaText: "Agendar una Asesoría Pedagógica Sin Costo",
      microcopy: "✓ Charla gratuita de 30 minutos vía WhatsApp o Presencial • Cupos limitados de acompañamiento."
    }
  },
  {
    id: "pain",
    sectionTitle: "2. Sección de Dolor / Empatía (El Problema)",
    objective: "Activar el dolor latente de los padres, logrando que se sientan profundamente identificados y comprendidos. Al leer esto, el padre debe sentir un alivio psicológico de que alguien entiende el desgaste familiar que sufren.",
    wireframeGuide: "Contraste sutil con fondo neutro más sobrio. Título grande con pregunta retórica empática. Un diseño en cuadrícula de tres columnas de baja densidad, con iconos suaves de advertencia o tristeza, mostrando los dolores cotidianos. Tipografía legible que guía la lectura de las frustraciones comunes.",
    copyFormula: "Fórmula PAS (Problema & Agitación)",
    copywriterTips: [
      "No juzgues a los padres. La culpa debe recaer en el 'sistema rígido' y la 'falta de tiempo/atención' del entorno tradicional.",
      "Usa verbos sensoriales como 'apagar la luz', 'batalla diaria', 'desgastar la paz'.",
      "Termina la sección con una frase de transición que prometa esperanza y alivio."
    ],
    content: {
      kicker: "Comprendemos tu sentir",
      headline: "¿Sientes que el sistema escolar tradicional apaga la curiosidad natural de tu hijo?",
      subheadline: "La educación convencional fue diseñada para otra época. Hoy en día, muchas familias en Popayán sienten que la escuela genera más tensiones familiares que alegrías de aprendizaje.",
      ctaText: "Sí, quiero un cambio para mi hijo",
      items: [
        {
          title: "Batalla diaria con tareas y prisas",
          description: "Las tardes en casa se convirtieron en un campo de batalla de tareas interminables, llanto y frustración, agotando el valioso tiempo de calidad en familia.",
          iconName: "Frown",
          tag: "Estrés Familiar"
        },
        {
          title: "Evaluados por notas, no por talentos",
          description: "Un sistema rígido que mide el valor de tu hijo mediante un número frío, ignorando sus ritmos naturales de desarrollo, su creatividad y su inteligencia emocional.",
          iconName: "FileText",
          tag: "Rigidez Educativa"
        },
        {
          title: "Ambientes saturados e impersonales",
          description: "Aulas de clase con demasiados niños donde es imposible brindar atención personalizada. Su bienestar emocional y sus preguntas genuinas quedan en el olvido.",
          iconName: "Users",
          tag: "Falta de Empatía"
        }
      ],
      extraNote: "Ver a tu hijo desmotivado o estresado es sumamente doloroso. Pero queremos que sepas algo: No estás solo, y la educación de tu hijo sí puede ser diferente."
    }
  },
  {
    id: "solution",
    sectionTitle: "3. La Solución (Presentación)",
    objective: "Presentar a Brillo de Luna Homeschool como el oasis de paz, la alternativa estructurada y amorosa que resuelve los problemas planteados. Generar alivio, curiosidad y seguridad técnica de que el homeschooling asistido sí funciona.",
    wireframeGuide: "Transición a un fondo cálido, luminoso y natural (colores crema, verde suave, ocre). Dos columnas balanceadas: a la izquierda, una hermosa composición visual de un niño concentrado, feliz y relajado pintando o sembrando; a la derecha, el copy de solución estructurado con viñetas orgánicas que transmiten paz.",
    copyFormula: "PAS (Solución) + Alivio Emocional",
    copywriterTips: [
      "Presenta la solución no como una desescolarización caótica, sino como un 'acompañamiento estructurado y amoroso'. Esto calma el miedo a la falta de orden.",
      "Destaca el enfoque vivencial y en la naturaleza, que contrasta fuertemente con el encierro del aula.",
      "Usa palabras clave: 'respeto', 'ritmo natural', 'experiencial'."
    ],
    content: {
      kicker: "Te presentamos Brillo de Luna",
      headline: "Donde el aprendizaje vuelve a ser una aventura amorosa y con sentido.",
      subheadline: "Brillo de Luna Homeschool nace en Popayán como una propuesta alternativa y guiada para familias que eligen educar en casa de manera respetuosa. No imponemos un molde único; brindamos un entorno de aprendizaje libre y apoyado que se adapta a quién es tu hijo hoy.",
      ctaText: "Descubrir nuestro método",
      items: [
        {
          title: "Aprendizaje libre pero acompañado",
          description: "Fusionamos la libertad del homeschooling con el respaldo de pedagogos expertos que guían tu planeación y brindan tutorías afectuosas."
        },
        {
          title: "Espacios vivenciales y experienciales",
          description: "El mundo real es nuestro salón de clases. Aprendemos matemáticas cocinando, ciencias cultivando la tierra y arte experimentando."
        },
        {
          title: "El respeto por cada niño es nuestra prioridad",
          description: "Si tu hijo necesita más tiempo para comprender un concepto, se lo damos. Si brilla en una habilidad artística o científica, la potenciamos sin límites."
        }
      ]
    }
  },
  {
    id: "pillars",
    sectionTitle: "4. Pilares Metodológicos (Beneficios)",
    objective: "Justificar racionalmente la decisión emocional de los padres. Proveer argumentos metodológicos sólidos que demuestren que el desarrollo académico e integral del niño está completamente asegurado.",
    wireframeGuide: "Un diseño moderno de Bento Grid o cuadrícula interactiva de 4 bloques. Cada bloque tiene un icono de Lucide en color verde bosque o dorado, un título en tipografía Space Grotesk bien definida y una descripción cálida. Bordes redondeados suaves y sombras sutiles que transmiten calidad de diseño.",
    copyFormula: "Regla de Tres / Cuatro Pilares + Beneficio Tangible",
    copywriterTips: [
      "Conecta cada pilar con un beneficio directo para la vida adulta del niño (independencia, seguridad, socialización).",
      "Aborda el gran temor de los padres: la socialización. Explica de forma asertiva cómo se maneja la socialización sana en comunidad.",
      "Utiliza un tono de autoridad pedagógica pero accesible."
    ],
    content: {
      kicker: "Nuestra metodología",
      headline: "Un modelo educativo centrado en el ser, no en los estándares de fábrica.",
      subheadline: "Nos basamos en corrientes de pedagogía activa (Montessori, Waldorf y Aprendizaje Basado en Proyectos) para nutrir la mente, las manos y el corazón de tu hijo.",
      ctaText: "Quiero conocer los cupos disponibles",
      items: [
        {
          title: "Ritmo Propio e Individualizado",
          description: "Sin la presión de comparaciones ni la prisa de currículos masivos. Tu hijo avanza dominando profundamente cada tema a su propio compás.",
          iconName: "Clock",
          tag: "Respeto"
        },
        {
          title: "Aprendizaje Basado en Proyectos",
          description: "El conocimiento no se memoriza, se aplica. Diseñamos retos interactivos donde la geografía, el lenguaje y la lógica se entrelazan con sus intereses reales.",
          iconName: "Compass",
          tag: "Práctica"
        },
        {
          title: "Socialización Sana y Consciente",
          description: "Desmitificamos el aislamiento del homeschooling. Fomentamos encuentros, salidas de campo en Popayán y talleres grupales enfocados en empatía y resolución pacífica de conflictos.",
          iconName: "HeartHandshake",
          tag: "Comunidad"
        },
        {
          title: "Soporte Afectuoso para Padres",
          description: "Te guiamos paso a paso. Recibes mallas de aprendizaje adaptadas, sugerencias de actividades y asesorías continuas para que disfrutes del proceso sin abrumarte.",
          iconName: "Smile",
          tag: "Alianza"
        }
      ]
    }
  },
  {
    id: "how-it-works",
    sectionTitle: "5. Cómo Funciona (El Proceso)",
    objective: "Reducir la fricción y el miedo al cambio ('¿Será muy difícil?', '¿Cómo hago la transición desde el colegio tradicional?'). Mostrar un camino de 3 pasos sencillos y claros que den sensación de orden y control inmediato.",
    wireframeGuide: "Fondo color crema limpio. Línea conectora visual de pasos (1 -> 2 -> 3). Tarjetas flotantes con números gigantes y sutiles animaciones al pasar el cursor. El último paso incluye un micro-estímulo visual que dirige la atención al botón de acción.",
    copyFormula: "El Camino Simple en 3 Pasos (Estructura de Fricción Cero)",
    copywriterTips: [
      "Evita procesos burocráticos complicados. Usa palabras que impliquen facilidad y diálogo ('charla', 'hoja de ruta', 'bienvenida').",
      "Haz énfasis en que el primer paso es 100% gratuito y sin ningún compromiso de compra."
    ],
    content: {
      kicker: "Es muy sencillo iniciar",
      headline: "Tu transición hacia la paz educativa en solo 3 pasos",
      subheadline: "Te acompañamos de la mano para que el cambio de la escuela tradicional al homeschooling asistido sea un proceso armónico, feliz y sin temores para toda tu familia.",
      ctaText: "Comenzar el paso 1 hoy mismo",
      items: [
        {
          title: "Paso 1: Diagnóstico Familiar Sin Costo",
          description: "Agendamos una charla de 30 minutos (café virtual o presencial en Popayán) para conocer la historia de tu hijo, sus talentos únicos, sus necesidades específicas y tus inquietudes como padre."
        },
        {
          title: "Paso 2: Diseño de la Ruta de Luz",
          description: "Creamos un plan de aprendizaje a la medida de tu hijo y te entregamos la planeación inicial, los recursos pedagógicos interactivos y la asignación del tutor pedagógico idóneo."
        },
        {
          title: "Paso 3: Clase de cortesía (1 día)",
          description: "Los niños podrán vivir durante un día la experiencia del Homeschool Brillo de Luna, participando en las actividades cotidianas y conociendo nuestro ambiente antes de iniciar su proceso."
        }
      ]
    }
  },
  {
    id: "testimonials",
    sectionTitle: "6. Prueba Social / Testimonios",
    objective: "Derribar las últimas barreras de desconfianza mediante testimonios auténticos de otros padres en Popayán que ya han dado el paso y viven la tranquilidad del homeschooling asistido.",
    wireframeGuide: "Sección elegante con fondo verde bosque profundo (contrasta hermosamente y evoca profesionalismo y ecología). Tarjetas de testimonios amplias con avatares, calificación de 5 estrellas brillantes y notas de ubicación local de Popayán para reforzar la veracidad comunitaria.",
    copyFormula: "Fórmula de Testimonio de Transformación (Antes vs. Después)",
    copywriterTips: [
      "Los mejores testimonios abordan un miedo inicial del cliente ('yo tenía miedo de la socialización' o 'me preocupaban las matemáticas') y muestran cómo se resolvió.",
      "Agrega detalles locales específicos como nombres de sectores de Popayán (ej: Sector Belén, Sector Caldas, Centro) para aumentar la credibilidad.",
      "Muestra la edad del niño para que el lector se identifique con el caso de su propio hijo."
    ],
    content: {
      kicker: "Voces de nuestra comunidad",
      headline: "Familias que recuperaron la felicidad de sus hijos y la paz en su hogar",
      subheadline: "Conoce las historias reales de padres de Popayán que se atrevieron a cuestionar lo tradicional y hoy viven una realidad de aprendizaje llena de armonía.",
      ctaText: "Quiero escribir una historia feliz para mi hijo",
    }
  },
  {
    id: "closing",
    sectionTitle: "7. Cierre & CTA Final",
    objective: "Generar una suave urgencia emocional recordando al padre que la infancia es corta y que el bienestar emocional de su hijo no puede esperar a 'otro año escolar'. Motivar la acción inmediata sin sonar agresivo.",
    wireframeGuide: "Banner final de alto impacto con un fondo degradado de noche estrellada y luna brillante (colores azul medianoche, verde bosque y ocre). Título emotivo en gran tamaño y de alta legibilidad. Caja de conversión interactiva de alta visibilidad para agendar asesoría.",
    copyFormula: "La Infancia es una Sola + Llamado de Urgencia Suave",
    copywriterTips: [
      "Apela al factor tiempo. Recordar que los años de desarrollo de un niño pasan volando es un motivador de acción sumamente honesto y potente.",
      "Ofrece una salida de bajo riesgo: una simple asesoría para resolver dudas."
    ],
    content: {
      kicker: "El momento de brillar es ahora",
      headline: "La infancia de tu hijo pasa rápido. No permitas que el estrés escolar apague sus mejores años.",
      subheadline: "¿Damos el primer paso juntos? Conversemos de manera amigable y sin compromisos sobre cómo Brillo de Luna puede transformar el bienestar de tu hijo.",
      ctaText: "Sí, quiero agendar mi asesoría gratuita ahora",
      microcopy: "Asesoría libre de presiones • Respuestas claras a todas tus dudas sobre validez legal, socialización y mallas pedagógicas."
    }
  }
];

export const FAQS = [
  {
    question: "¿Es legal hacer homeschooling en Colombia?",
    answer: "¡Totalmente legal! La Constitución Política de Colombia de 1991 (Artículo 67) establece que la educación es un derecho de la persona y que la familia es el primer responsable de la educación de los hijos. Además, existen colegios de soporte y plataformas internacionales con las que validamos legalmente el año escolar de tu hijo de forma 100% oficial ante el Ministerio de Educación Nacional."
  },
  {
    question: "¿Hasta qué nivel educativo acompañan?",
    answer: "Actualmente acompañamos a los niños durante toda la etapa de Educación Inicial y Preescolar, hasta el grado de Transición."
  },
  {
    question: "¿Cómo se maneja la socialización de los niños?",
    answer: "Este es el temor número uno de los padres, y en Brillo de Luna lo resolvemos de forma prioritaria. Organizamos talleres presenciales en Popayán, clubes de lectura, salidas de campo al aire libre y encuentros vivenciales donde los niños interactúan de forma sana, libre de la competencia tóxica o el acoso escolar que a veces ocurre en aulas masivas."
  },
  {
    question: "¿Los padres debemos ser profesores expertos?",
    answer: "Para nada. Tu rol principal es ser un guía amoroso y facilitador. Nosotros en Brillo de Luna nos encargamos de proveerte las mallas curriculares estructuradas, los planes de actividades detallados y las tutorías de apoyo con pedagogos expertos para resolver las dudas complejas de las asignaturas académicas."
  },
  {
    question: "¿Cómo se evalúa el progreso académico de mi hijo?",
    answer: "No utilizamos exámenes punitivos que generen ansiedad. Evaluamos a través de bitácoras de aprendizaje, proyectos interactivos tangibles, exposiciones creativas y autoevaluación guiada. Esto le permite a tu hijo comprender en qué ha avanzado y qué requiere reforzar, manteniendo una relación positiva y feliz con el conocimiento."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    parentName: "Carolina Rojas M.",
    role: "Mamá de Sofía (9 años)",
    location: "Popayán, Cauca (Sector Belén)",
    stars: 5,
    quote: "Llegamos a Brillo de Luna desgastados por las lágrimas y rabietas diarias con las tareas de matemáticas de la escuela de Sofi. Hoy en día, ella diseña sus propios proyectos de geometría tejiendo y cocinando en casa. Su sonrisa y curiosidad innata volvieron, y con ellas, la paz en nuestra mesa familiar. No tiene precio.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    parentName: "Andrés Felipe Ordóñez",
    role: "Papá de Samuel (12 años)",
    location: "Popayán, Cauca (Norte)",
    stars: 5,
    quote: "Me daba muchísimo miedo que mi hijo se sintiera aislado o que no socializara al retirar de la educación tradicional. En Brillo de Luna encontramos una maravillosa red de familias. Hacen salidas pedagógicas al río Puracé, talleres de arte presenciales y debates fascinantes. Es la socialización más sana que he visto en mi vida.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    parentName: "Dra. Marcela Burbano",
    role: "Mamá de Mateo (6 años)",
    location: "Popayán, Cauca (Sector Centro)",
    stars: 5,
    quote: "Como pediatra, me preocupaba el nivel de estrés que Mateo estaba experimentando por las largas jornadas escolares desde tan pequeño. Con el apoyo metodológico de Brillo de Luna, Mateo aprende jugando y explorando la naturaleza. Su desarrollo motor, su lenguaje y su confianza se han disparado. Es el mejor espacio alternativo de Popayán.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];
