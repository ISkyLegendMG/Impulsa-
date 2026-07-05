export interface EmprenderItem {
    id: string;
    imageUrl: string;
    nombre: string;
    descripcion: string;
    precio: string;
    whatsapp: string;
    categoria: string;
    tipo: string;
    subtitulo: string;
}

export const emprenderData: EmprenderItem[] = [
    {
        id: "e1",
        imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=80",
        nombre: "Lanzamiento Express",
        subtitulo: "Producto listo para venta",
        descripcion: "¡Lanza tu producto con impacto! Estrategia y plan de lanzamiento para tu producto digital o servicio, con mensajes que venden y convierten desde el primer día. ¡No dejes tu éxito al azar!",
        precio: "S/ 1,200",
        categoria: "Lanzamiento",
        tipo: "Servicio",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Lanzamiento%20Express",
    },
    {
        id: "e2",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
        nombre: "Kit Marca Personal",
        subtitulo: "Identidad que conecta",
        descripcion: "¡Haz que tu marca sea inolvidable! Posiciona tu nombre o tu negocio con una identidad visual clara, tono único y propuesta irresistible que enamora a tus clientes. ¡Diferénciate ya!",
        precio: "S/ 980",
        categoria: "Branding",
        tipo: "Producto",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Kit%20Marca%20Personal",
    },
    {
        id: "e3",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
        nombre: "Plan Ventas WhatsApp",
        subtitulo: "Conversaciones que venden",
        descripcion: "¡Convierte chats en ventas! Mapa de mensajes, automatizaciones y flujo de atención para convertir clientes desde WhatsApp, sin perder ni una oportunidad. ¡Empieza a vender hoy!",
        precio: "S/ 800",
        categoria: "Ventas",
        tipo: "Servicio",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Plan%20Ventas%20WhatsApp",
    },
    {
        id: "e4",
        imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&q=80",
        nombre: "Lanzador de Servicios",
        subtitulo: "Publica tu servicio hoy",
        descripcion: "¡Publica y vende hoy! Estructura completa para presentar, precios y oferta de servicio que genere confianza inmediata y cierre ventas en tiempo récord. ¡Activa tu negocio ahora!",
        precio: "S/ 680",
        categoria: "Publicación",
        tipo: "Producto",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Lanzador%20de%20Servicios",
    },
    {
        id: "e5",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
        nombre: "Propuesta de Valor",
        subtitulo: "Diferénciate en el mercado",
        descripcion: "¡Destácate entre la multitud! Encuentra tu ventaja competitiva y transforma tu oferta en una propuesta clara, simple y memorable que todos quieran comprar. ¡Hazte imparable!",
        precio: "S/ 570",
        categoria: "Estrategia",
        tipo: "Servicio",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Propuesta%20de%20Valor",
    },
    {
        id: "e6",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
        nombre: "Launchpad Digital",
        subtitulo: "Haz despegar tu negocio",
        descripcion: "¡Despega tu negocio al éxito! Pack de posicionamiento online, página de aterrizaje y estrategia de captación ideal para emprendedores que quieren crecer rápido. ¡El cielo es el límite!",
        precio: "S/ 1,480",
        categoria: "Digital",
        tipo: "Producto",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Launchpad%20Digital",
    },
    {
        id: "e7",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80",
        nombre: "Copywriter Pro",
        subtitulo: "Palabras que venden",
        descripcion: "¡Convierte a tus clientes en fanáticos! Aprende a escribir anuncios, correos y guiones que generan ventas con un copy persuasivo y emocional. ¡El poder de las palabras en tus manos!",
        precio: "S/ 550",
        categoria: "Copywriting",
        tipo: "Servicio",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Copywriter%20Pro",
    },

    {
        id: "e9",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
        nombre: "Curso Negocio Digital",
        subtitulo: "Acelera tu emprendimiento",
        descripcion: "¡Aprende de los mejores! Programa en vivo + grabación. Domina las claves para vender online, atraer clientes y escalar tu negocio desde cero. ¡Invierte en tu conocimiento y triunfa!",
        precio: "S/ 890",
        categoria: "Capacitación",
        tipo: "Producto",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Curso%20Negocio%20Digital",
    },
    {
        id: "e10",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
        nombre: "Asesoría Estratégica",
        subtitulo: "Enfócate en crecer",
        descripcion: "¡Desbloquea todo tu potencial! Sesión privada de 90 min para revisar tu modelo de negocio, identificar oportunidades y crear un plan de acción a la medida. ¡Tu éxito empieza aquí!",
        precio: "S/ 1,050",
        categoria: "Consultoría",
        tipo: "Servicio",
        whatsapp: "https://wa.me/5215512345678?text=Hola%20quiero%20mas%20info%20sobre%20Asesoría%20Estratégica",
    },
];

export default emprenderData;