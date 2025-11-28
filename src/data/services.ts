import webDevImg from "../assets/Banner/Disenoweb.webp";
import softwareImg from "../assets/Banner/software.webp";
import uiUxImg from "../assets/Banner/tienda.webp";
import apiImg from "../assets/Banner/pedidos.webp";
import cloudImg from "../assets/Banner/hosting.webp";
import maintenanceImg from "../assets/Banner/movil.webp";

export const services = [
    {
        id: "diseno-web",
        index: 1,
        titleTop: "Diseño de Sitios",
        titleBottom: "Web",
        img: webDevImg,
        alt: "Diseño Web Profesional",
        brief: "Creamos sitios web modernos, rápidos y optimizados para SEO.",
        description: "Transformamos tu presencia digital con diseños web impactantes y funcionales. Utilizamos las últimas tecnologías para garantizar que tu sitio no solo se vea increíble, sino que también convierta visitantes en clientes. Desde landing pages hasta portales corporativos complejos.",
        features: ["Diseño UI/UX Personalizado", "Optimización para Motores de Búsqueda (SEO)", "Responsive Design (Móvil, Tablet, Desktop)", "Integración con Herramientas de Analítica"]
    },
    {
        id: "software-medida",
        index: 2,
        titleTop: "Software a",
        titleBottom: "Medida",
        img: softwareImg,
        alt: "Desarrollo de Software a Medida",
        brief: "Soluciones de software personalizadas para optimizar tus procesos.",
        description: "Desarrollamos software a medida que se adapta perfectamente a las necesidades específicas de tu empresa. Automatizamos procesos, integramos sistemas y creamos herramientas que impulsan la eficiencia operativa y la productividad de tu equipo.",
        features: ["Análisis de Procesos de Negocio", "Desarrollo Backend y Frontend Robusto", "APIs RESTful y GraphQL", "Mantenimiento y Soporte Evolutivo"]
    },
    {
        id: "ecommerce",
        index: 3,
        titleTop: "Tiendas online",
        titleBottom: "E-commerce",
        img: uiUxImg,
        alt: "Desarrollo de Tiendas Online",
        brief: "Tiendas online que convierten visitantes en clientes.",
        description: "Lanza tu negocio al mundo digital con una tienda online potente y segura. Creamos experiencias de compra fluidas que maximizan las ventas. Expertos en plataformas como Shopify, WooCommerce y desarrollos a medida.",
        features: ["Pasarelas de Pago Seguras", "Gestión de Catálogo e Inventario", "Experiencia de Checkout Optimizada", "Integración con ERP y CRM"]
    },
    {
        id: "pedidos-online",
        index: 4,
        titleTop: "Sistema de pedidos",
        titleBottom: "Online",
        img: apiImg,
        alt: "Sistema de Pedidos Online",
        brief: "Sistemas de pedidos eficientes para restaurantes y comercios.",
        description: "Moderniza tu negocio gastronómico o retail con un sistema de pedidos propio. Elimina comisiones de terceros y fideliza a tus clientes con una plataforma rápida, intuitiva y fácil de gestionar desde cualquier dispositivo.",
        features: ["Menú Digital Interactivo", "Gestión de Pedidos en Tiempo Real", "Integración con Impresoras de Comandas", "Panel de Administración Intuitivo"]
    },
    {
        id: "web-hosting",
        index: 5,
        titleTop: "Servicio de Web",
        titleBottom: "Hosting",
        img: cloudImg,
        alt: "Servicios de Web Hosting",
        brief: "Alojamiento web seguro, rápido y confiable.",
        description: "Tu sitio web merece el mejor hogar. Ofrecemos soluciones de hosting de alto rendimiento, escalables y seguras. Nos encargamos de la infraestructura técnica para que tú puedas concentrarte en hacer crecer tu negocio.",
        features: ["Servidores de Alta Velocidad", "Certificados SSL Gratuitos", "Copias de Seguridad Automáticas", "Soporte Técnico Especializado 24/7"]
    },
    {
        id: "apps-moviles",
        index: 6,
        titleTop: "Desarrollo De Aplicaciones",
        titleBottom: "Moviles",
        img: maintenanceImg,
        alt: "Desarrollo de Apps Móviles",
        brief: "Apps móviles nativas e híbridas para iOS y Android.",
        description: "Lleva tu negocio al bolsillo de tus clientes. Diseñamos y desarrollamos aplicaciones móviles nativas e híbridas que ofrecen experiencias de usuario excepcionales. Desde la conceptualización hasta la publicación en App Store y Google Play.",
        features: ["Desarrollo iOS (Swift) y Android (Kotlin)", "Apps Híbridas (React Native / Flutter)", "Diseño de Interfaces Móviles (Mobile-First)", "Notificaciones Push y Geolocalización"]
    },
];
