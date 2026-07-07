// ============================================================
// 1. TIPOS E INTERFACES (sin cambios)
// ============================================================

export type Role = "admin" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  registeredAt: string;
  lastAccess: string;
  status: "active" | "inactive";
}

export interface Lesson {
  id: string;
  title: string;
  duration: string; // "12:30"
  youtubeId: string;
}

export interface Course {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  date: string;
  category: string;
  published: boolean;
  lessons: Lesson[];
}

export interface Purchase {
  id: string;
  userId: string;
  courseId: string;
  date: string;
  amount: number;
  progress: number; // 0-100
  completedLessons: string[]; // lesson ids
}

export interface Faq {
  q: string;
  a: string;
}

// ============================================================
// 2. THUMBNAILS – 12 imágenes únicas (cada curso tiene la suya)
// ============================================================

const THUMBS = [
  // c1 - Contabilidad
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  // c2 - Excel
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  // c3 - Marketing Digital
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  // c4 - UX/UI
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  // c5 - React
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  // c6 - Inglés
  "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?w=800&q=80",
  // c7 - Ventas WhatsApp
  "https://images.unsplash.com/photo-1611162616475-46b635cb6867?w=800&q=80",
  // c8 - Branding Personal
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  // c9 - Copywriting
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  // c10 - Emprendimiento
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
  // c11 - YouTube Marketing
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  // c12 - Producción Audiovisual
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
];

// ============================================================
// 3. USUARIOS (sin cambios, exactamente los originales)
// ============================================================

export const initialUsers: User[] = [
  {
    id: "a1",
    name: "Judith Pilco",
    email: "judith@impulsa.pe",
    password: "Impulsa2026",
    role: "admin",
    registeredAt: "2024-01-01",
    lastAccess: "2026-06-27",
    status: "active",
  },
  {
    id: "a2",
    name: "Gladys Samo",
    email: "gladys@impulsa.pe",
    password: "Impulsa2026",
    role: "admin",
    registeredAt: "2024-01-01",
    lastAccess: "2026-06-26",
    status: "active",
  },
  {
    id: "s1",
    name: "Ana Ticahuanca",
    email: "ana@impulsa.pe",
    password: "Impulsa2026",
    role: "student",
    registeredAt: "2025-03-12",
    lastAccess: "2026-06-25",
    status: "active",
  },
  {
    id: "s2",
    name: "Luz López",
    email: "luz@impulsa.pe",
    password: "Impulsa2026",
    role: "student",
    registeredAt: "2025-05-20",
    lastAccess: "2026-06-27",
    status: "active",
  },
];

// ============================================================
// 4. FUNCIÓN AUXILIAR PARA LECCIONES (con URLs completas de YouTube)
// ============================================================

const sampleLessons = (prefix: string, baseUrl: string): Lesson[] => [
  { id: `${prefix}-l1`, title: "Introducción al curso", duration: "08:15", youtubeId: baseUrl },
  { id: `${prefix}-l2`, title: "Conceptos fundamentales", duration: "14:42", youtubeId: baseUrl },
  { id: `${prefix}-l3`, title: "Aplicación práctica", duration: "21:10", youtubeId: baseUrl },
  { id: `${prefix}-l4`, title: "Casos de estudio", duration: "17:55", youtubeId: baseUrl },
  { id: `${prefix}-l5`, title: "Proyecto final", duration: "26:30", youtubeId: baseUrl },
];

// ============================================================
// 5. CURSOS – 12 en total con URLs reales de YouTube (únicas por curso)
// ============================================================

export const initialCourses: Course[] = [
  // ----- Cursos originales (c1 - c6) -----
  {
    id: "c1",
    title: "Contabilidad para Emprendedores",
    author: "Lucía Pérez",
    description: "Aprende los fundamentos de la contabilidad aplicada a tu negocio.",
    price: 120,
    rating: 4.7,
    thumbnail: THUMBS[0],
    date: "2025-02-10",
    category: "Finanzas",
    published: true,
    lessons: sampleLessons("c1", "LQ5E8jxQRb4"),
  },
  {
    id: "c2",
    title: "Excel Avanzado para Profesionales",
    author: "Jorge Ramírez",
    description: "Domina fórmulas, tablas dinámicas y automatización con macros.",
    price: 95,
    rating: 4.9,
    thumbnail: THUMBS[1],
    date: "2025-04-02",
    category: "Productividad",
    published: true,
    lessons: sampleLessons("c2", "5J9kMpH_xNk"),
  },
  {
    id: "c3",
    title: "Marketing Digital desde Cero",
    author: "Andrea Soto",
    description: "Estrategias de redes, SEO y campañas pagadas paso a paso.",
    price: 150,
    rating: 4.6,
    thumbnail: THUMBS[2],
    date: "2025-05-18",
    category: "Marketing",
    published: true,
    lessons: sampleLessons("c3", "Jqt2qUfrEso"),
  },
  {
    id: "c4",
    title: "Diseño UX/UI Profesional",
    author: "Diego Vargas",
    description: "Crea interfaces atractivas y funcionales con principios sólidos.",
    price: 180,
    rating: 4.8,
    thumbnail: THUMBS[3],
    date: "2025-06-01",
    category: "Diseño",
    published: true,
    lessons: sampleLessons("c4", "7rL6Tz3gK5E"),
  },
  {
    id: "c5",
    title: "Programación Web con React",
    author: "Sofía Ortega",
    description: "Construye aplicaciones modernas con React y TypeScript.",
    price: 200,
    rating: 4.9,
    thumbnail: THUMBS[4],
    date: "2025-06-20",
    category: "Tecnología",
    published: true,
    lessons: sampleLessons("c5", "GMnWXlJnbNo"),
  },
  {
    id: "c6",
    title: "Inglés de Negocios",
    author: "Patricia Mendoza",
    description: "Comunícate con confianza en entornos profesionales internacionales.",
    price: 110,
    rating: 4.5,
    thumbnail: THUMBS[5],
    date: "2025-03-15",
    category: "Idiomas",
    published: true,
    lessons: sampleLessons("c6", "7m9u9F9z9Zg"),
  },

  // ----- Nuevos cursos (c7 - c12) -----
  {
    id: "c7",
    title: "Ventas con WhatsApp Business",
    author: "Ricardo Flores",
    description: "Aprende a automatizar, escalar y medir ventas por WhatsApp. Estrategias probadas con más de una década de experiencia.",
    price: 180,
    rating: 4.8,
    thumbnail: THUMBS[6],
    date: "2025-07-15",
    category: "Ventas",
    published: true,
    lessons: sampleLessons("c7", "2g2r7n5b_0I"),
  },
  {
    id: "c8",
    title: "Branding Personal: Construye tu Marca",
    author: "Valeria Ríos",
    description: "Domina los 4 pilares esenciales para construir una marca personal sólida: autoconocimiento, audiencia, canales y mensaje claro. Diferénciate de la competencia.",
    price: 160,
    rating: 4.7,
    thumbnail: THUMBS[7],
    date: "2025-07-20",
    category: "Branding",
    published: true,
    lessons: sampleLessons("c8", "Tucw-tzm28E"),
  },
  {
    id: "c9",
    title: "Copywriting Persuasivo para Ventas",
    author: "Carmen Vega",
    description: "Escribe textos que venden: emails, anuncios, redes sociales y páginas de aterrizaje. Incluye ejercicios prácticos y ejemplos reales.",
    price: 140,
    rating: 4.9,
    thumbnail: THUMBS[8],
    date: "2025-07-25",
    category: "Copywriting",
    published: true,
    lessons: sampleLessons("c9", "le-3dOqYjDg"),
  },
  {
    id: "c10",
    title: "Emprendimiento: De la Idea al Negocio",
    author: "Andrés Gutiérrez",
    description: "Convierte tu idea en un negocio rentable: define misión, visión, productos, precios, socios y financiamiento. Menos de 10 minutos por tema.",
    price: 130,
    rating: 4.6,
    thumbnail: THUMBS[9],
    date: "2025-08-01",
    category: "Emprendimiento",
    published: true,
    lessons: sampleLessons("c10", "9z4wZqI0z9w"),
  },
  {
    id: "c11",
    title: "YouTube Marketing para Creadores",
    author: "Laura Méndez",
    description: "Optimiza tu canal, aplica SEO, crea miniaturas que atraen clics y monetiza con Adsense, sponsors y membresías. Curso completo para creadores.",
    price: 220,
    rating: 4.8,
    thumbnail: THUMBS[10],
    date: "2025-08-05",
    category: "Marketing",
    published: true,
    lessons: sampleLessons("c11", "tZgx0hlBq7g"),
  },
  {
    id: "c12",
    title: "Producción Audiovisual para YouTube",
    author: "Carlos Herrera",
    description: "Aprende a estructurar contenido, grabar y editar video, usar iluminación y audio profesional. 14 horas de práctica intensiva.",
    price: 190,
    rating: 4.7,
    thumbnail: THUMBS[11],
    date: "2025-08-10",
    category: "Producción",
    published: true,
    lessons: sampleLessons("c12", "-4xp5t_ejRk"),
  },
];

// ============================================================
// 6. COMPRAS – Ampliadas (8 compras, usando solo s1 y s2)
// ============================================================

export const initialPurchases: Purchase[] = [
  // Compras de Carlos (s1)
  {
    id: "p1",
    userId: "s1",
    courseId: "c1",
    date: "2025-04-01",
    amount: 120,
    progress: 80,
    completedLessons: ["c1-l1", "c1-l2", "c1-l3", "c1-l4"],
  },
  {
    id: "p2",
    userId: "s1",
    courseId: "c2",
    date: "2025-05-10",
    amount: 95,
    progress: 100,
    completedLessons: ["c2-l1", "c2-l2", "c2-l3", "c2-l4", "c2-l5"],
  },
  {
    id: "p5",
    userId: "s1",
    courseId: "c6",
    date: "2025-06-20",
    amount: 110,
    progress: 30,
    completedLessons: ["c6-l1"],
  },
  {
    id: "p7",
    userId: "s1",
    courseId: "c4",
    date: "2025-07-10",
    amount: 180,
    progress: 55,
    completedLessons: ["c4-l1", "c4-l2", "c4-l3"],
  },

  // Compras de María (s2)
  {
    id: "p3",
    userId: "s2",
    courseId: "c3",
    date: "2025-06-02",
    amount: 150,
    progress: 40,
    completedLessons: ["c3-l1", "c3-l2"],
  },
  {
    id: "p4",
    userId: "s2",
    courseId: "c5",
    date: "2025-06-15",
    amount: 200,
    progress: 20,
    completedLessons: ["c5-l1"],
  },
  {
    id: "p6",
    userId: "s2",
    courseId: "c4",
    date: "2025-07-01",
    amount: 180,
    progress: 0,
    completedLessons: [],
  },
  {
    id: "p8",
    userId: "s2",
    courseId: "c2",
    date: "2025-07-12",
    amount: 95,
    progress: 10,
    completedLessons: ["c2-l1"],
  },
];

// ============================================================
// 7. PREGUNTAS FRECUENTES – Mejoradas y ampliadas (16 preguntas)
// ============================================================

export const faqs: Faq[] = [
  // ---- Registro y cuenta ----
  { q: "¿Cómo me registro en la plataforma?", a: "Ve a la página principal, haz clic en 'Registrarse' y completa el formulario con tus datos. Recibirás un correo de confirmación." },
  { q: "¿Puedo cambiar mi correo electrónico?", a: "Sí, desde tu perfil puedes actualizar tu correo. Te pediremos verificar la nueva dirección." },
  { q: "¿Qué hago si olvidé mi contraseña?", a: "Haz clic en '¿Olvidaste tu contraseña?' en el inicio de sesión. Te enviaremos un enlace para restablecerla." },
  { q: "¿Mi cuenta es gratuita?", a: "Registrarse es gratuito. Luego puedes comprar cursos individuales o suscribirte a planes premium." },

  // ---- Compras y pagos ----
  { q: "¿Cómo compro un curso?", a: "Navega por el catálogo, selecciona el curso de tu interés y haz clic en 'Comprar'. Elige tu método de pago (tarjeta, transferencia o billetera digital) y confirma." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard), Yape, Plin, y transferencias bancarias a nuestras cuentas." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí, para compras superiores a S/ 200 ofrecemos pago en hasta 3 cuotas sin interés con tarjetas seleccionadas." },
  { q: "¿Los precios incluyen impuestos?", a: "Todos los precios incluyen IGV. El total que ves es el monto final a pagar." },
  { q: "¿Puedo solicitar factura?", a: "Por supuesto. Al momento de comprar, marca la opción 'Solicitar factura' y completa tus datos fiscales." },

  // ---- Acceso y progreso ----
  { q: "¿Cómo accedo a los cursos que compré?", a: "Inicia sesión y ve a tu 'Dashboard'. Allí verás todos tus cursos activos. Haz clic en 'Continuar' para ir a las lecciones." },
  { q: "¿Puedo ver los cursos desde mi celular?", a: "Sí, la plataforma es responsive y se adapta a móviles. También tenemos una app en desarrollo." },
  { q: "¿Cómo sé mi progreso en un curso?", a: "En tu dashboard verás una barra de progreso por cada curso. Además, al entrar a un curso, cada lección se marca como completada." },
  { q: "¿Puedo adelantar lecciones?", a: "Sí, el curso no está bloqueado por orden rígido, pero recomendamos seguir el orden para un mejor aprendizaje." },
  { q: "¿Puedo descargar los videos?", a: "Los videos se reproducen en línea para garantizar la calidad y evitar descargas no autorizadas. Pero tendrás acceso ilimitado mientras estés suscrito." },

  // ---- Certificados y finalización ----

  // ---- Políticas y soporte ----
  { q: "¿Puedo cancelar mi compra?", a: "Tienes 7 días desde la compra para solicitar un reembolso si no has avanzado más del 20% del curso. Consulta nuestra política de reembolso." },
  { q: "¿Cómo contacto a soporte?", a: "Puedes escribirnos a soporte@campus.edu o usar el chat en vivo de lunes a viernes de 9 a 6 PM." },
  { q: "¿Hay planes de suscripción mensual?", a: "Sí, próximamente lanzaremos un plan de suscripción con acceso a todos los cursos por un pago mensual." },
];