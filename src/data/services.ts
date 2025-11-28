import heroEcommerceImg from "../assets/Banner/tienda.webp";
import heroSoftwareImg from "../assets/Banner/software.webp";
import heroInfluencerImg from "../assets/Banner/Disenoweb.webp";
import heroGiftCardImg from "../assets/Banner/pedidos.webp";
import heroTiktokImg from "../assets/Banner/movil.webp";
import heroTasksImg from "../assets/Banner/hosting.webp";

import cardEcommerceImg from "../assets/BannerMovil/tienda.png";
import cardSoftwareImg from "../assets/BannerMovil/software.png";
import cardInfluencerImg from "../assets/BannerMovil/web.png";
import cardGiftCardImg from "../assets/BannerMovil/pedidos.png";
import cardTiktokImg from "../assets/BannerMovil/movil.png";
import cardTasksImg from "../assets/BannerMovil/hosting.png";

export const services = [
    {
        id: "tiendas-ecommerce",
        index: 1,
        titleTop: "Tiendas E-commerce",
        titleBottom: "Completas",
        img: cardEcommerceImg,
        heroImg: heroEcommerceImg,
        alt: "Tiendas E-commerce Completas",
        brief: "Sistemas completos de tienda online con gestión integral.",
        description: "Desarrollamos tiendas online completas con todos los módulos necesarios: catálogo de productos, carrito de compras, verificación de pagos, gestión de almacén e inventario, panel administrativo y reportes. Hemos implementado soluciones exitosas para Importadora Miranda, Importadora Afios y otros clientes, optimizando sus ventas y procesos.",
        features: ["Sistema de Pagos Integrado", "Gestión de Inventario y Almacén", "Panel de Administración Completo", "Reportes y Estadísticas de Ventas"]
    },
    {
        id: "software-medida",
        index: 2,
        titleTop: "Software a",
        titleBottom: "Medida",
        img: cardSoftwareImg,
        heroImg: heroSoftwareImg,
        alt: "Desarrollo de Software Personalizado",
        brief: "Soluciones de software diseñadas específicamente para tu negocio.",
        description: "Creamos software personalizado que se adapta perfectamente a las necesidades de tu empresa. Desde sistemas de gestión empresarial hasta aplicaciones especializadas. Nuestro enfoque es entender tu proceso de negocio y crear herramientas que optimicen tu operación y aumenten tu productividad.",
        features: ["Análisis de Procesos de Negocio", "Desarrollo Backend y Frontend", "Integración con Sistemas Existentes", "Soporte y Mantenimiento Continuo"]
    },
    {
        id: "calendario-influencers",
        index: 3,
        titleTop: "Sistema de Calendario",
        titleBottom: "para Influencers",
        img: cardInfluencerImg,
        heroImg: heroInfluencerImg,
        alt: "Sistema de Calendario para Influencers",
        brief: "Gestión de horarios y ubicaciones para influencers y empresas.",
        description: "Sistema especializado desarrollado para Admus Producción que permite a los influencers gestionar sus horarios, ver ubicaciones de empresas, coordinar visitas y mantener organizada su agenda de colaboraciones. Los influencers pueden ver fácilmente dónde ir, a qué hora y con qué empresa trabajar, todo desde una interfaz intuitiva.",
        features: ["Calendario Interactivo de Horarios", "Gestión de Ubicaciones Empresariales", "Notificaciones y Recordatorios", "Vista de Agenda por Influencer"]
    },
    {
        id: "gift-cards",
        index: 4,
        titleTop: "Gift Cards",
        titleBottom: "Digitales",
        img: cardGiftCardImg,
        heroImg: heroGiftCardImg,
        alt: "Sistema de Tarjetas de Regalo",
        brief: "Sistema completo de tarjetas de regalo digitales.",
        description: "Desarrollamos sistemas de Gift Cards (tarjetas de regalo) digitales que permiten a tus clientes comprar, enviar y canjear tarjetas de regalo fácilmente. Incluye generación de códigos únicos, seguimiento de saldos, historial de transacciones y panel administrativo para gestionar todas las tarjetas emitidas.",
        features: ["Generación de Códigos Únicos", "Sistema de Canje y Validación", "Gestión de Saldos y Vencimientos", "Panel Administrativo Completo"]
    },
    {
        id: "pedidos-tiktok",
        index: 5,
        titleTop: "Sistema de Pedidos",
        titleBottom: "TikTok Live",
        img: cardTiktokImg,
        heroImg: heroTiktokImg,
        alt: "Sistema de Pedidos para TikTok Live",
        brief: "Gestión de pedidos en vivo para múltiples ubicaciones.",
        description: "Sistema especializado para gestionar pedidos durante transmisiones en vivo de TikTok. Permite recibir, organizar y distribuir pedidos en tiempo real para diferentes ubicaciones. Ideal para negocios que venden a través de lives y necesitan coordinar entregas en múltiples puntos de venta o ciudades.",
        features: ["Gestión de Pedidos en Tiempo Real", "Múltiples Ubicaciones de Entrega", "Panel de Control de Inventario", "Reportes de Ventas por Live"]
    },
    {
        id: "calendario-tareas",
        index: 6,
        titleTop: "Calendario de",
        titleBottom: "Tareas",
        img: cardTasksImg,
        heroImg: heroTasksImg,
        alt: "Sistema de Calendario de Tareas",
        brief: "Organización y gestión eficiente de tareas y proyectos.",
        description: "Sistema de calendario y gestión de tareas que ayuda a equipos y empresas a organizar sus actividades, establecer prioridades, asignar responsables y dar seguimiento a proyectos. Incluye recordatorios, notificaciones y reportes de productividad para mantener todo bajo control.",
        features: ["Calendario Visual de Tareas", "Asignación de Responsables", "Prioridades y Etiquetas", "Recordatorios Automáticos"]
    },
];
