
import cardEcommerceImg from "../assets/Banner/bannermiranda.png";
import cardSoftwareImg from "../assets/BannerMovil/software.webp";
import cardInfluencerImg from "../assets/BannerMovil/web.webp";
import cardGiftCardImg from "../assets/BannerMovil/pedidos.webp";
import cardTiktokImg from "../assets/BannerMovil/movil.webp";
import cardTasksImg from "../assets/BannerMovil/hosting.webp";

import mirandaLogin from "../assets/Banner/loginmiranda.png";
import mirandaDashboard from "../assets/Banner/dashoardmiranda.png";
import mirandaVenta from "../assets/Banner/ventamiranda.png";
import shopMain from "../assets/Banner/shop.png";
import shopCatalogo from "../assets/Banner/shopcatalogo.png";
import admusMain from "../assets/Banner/admus.png";
import admusDashboard from "../assets/Banner/admusdashoard.png";
import admusLogin from "../assets/Banner/admuslogin.png";

export interface ShowcaseItem {
    title: string;
    description: string;
    image: any;
}

export interface Demo {
    title: string;
    description: string;
    company: string;
    items: ShowcaseItem[];
}

export interface Service {
    id: string;
    index: number;
    titleTop: string;
    titleBottom: string;
    img: any;
    heroImg: any;
    alt: string;
    brief: string;
    description: string;
    features: string[];
    demos?: Demo[];
}

const mirandaDemo: Demo = {
    company: "Importadora Miranda",
    title: "Sistema de Ventas y Gestión Miranda",
    description: "Una solución robusta para la gestión mayorista y minorista, integrando inventario en tiempo real con puntos de venta físicos y virtuales.",
    items: [
        {
            title: "Módulo de Ventas Pro",
            description: "Interfaz optimizada para transacciones rápidas, manejo de múltiples métodos de pago y generación automática de recibos.",
            image: mirandaVenta
        },
        {
            title: "Panel de Inteligencia de Negocios",
            description: "Dashboard completo con métricas clave, visualización de ventas diarias y estado crítico de inventario.",
            image: mirandaDashboard
        },
        {
            title: "Acceso Seguro y Roles",
            description: "Sistema de autenticación robusto con control de accesos por jerarquía para proteger la información sensible.",
            image: mirandaLogin
        }
    ]
};

const shopDemo: Demo = {
    company: "Shop Pro",
    title: "Plataforma de E-commerce Minorista",
    description: "Diseñada para ofrecer una experiencia de compra fluida con un enfoque en la conversión y la facilidad de navegación.",
    items: [
        {
            title: "Escaparate Digital Moderno",
            description: "Diseño visual impactante que resalta los productos y facilita la navegación del cliente.",
            image: shopMain
        },
        {
            title: "Catálogo Dinámico",
            description: "Búsqueda avanzada y filtros intuitivos que permiten a los usuarios encontrar lo que buscan en segundos.",
            image: shopCatalogo
        }
    ]
};

const admusDemo: Demo = {
    company: "Admus Producción",
    title: "Gestión Integral de Contenido",
    description: "Plataforma centralizada para coordinar campañas masivas de marketing de influencers con precisión logística.",
    items: [
        {
            title: "Centro de Comando Admus",
            description: "Vista general de campañas activas y métricas de rendimiento de los talentos.",
            image: admusMain
        },
        {
            title: "Cronograma Maestro",
            description: "Calendario dinámico para la asignación de grabaciones y visitas a locaciones en tiempo real.",
            image: admusDashboard
        },
        {
            title: "Portal de Talento",
            description: "Acceso personalizado para influencers donde pueden gestionar su disponibilidad y ver sus próximas tareas.",
            image: admusLogin
        }
    ]
};

export const services: Service[] = [
    {
        id: "sistema-miranda",
        index: 1,
        titleTop: "Sistema de",
        titleBottom: "Ventas Miranda",
        img: cardEcommerceImg,
        heroImg: mirandaLogin,
        alt: "Sistema de Ventas Importadora Miranda",
        brief: "Gestión integral de ventas e inventario para distribuidoras.",
        description: "Sistema desarrollado para Importadora Miranda que centraliza todas las operaciones comerciales, desde el ingreso de mercadería hasta la facturación final, garantizando un control total sobre el stock y las finanzas.",
        features: ["Control de Inventario", "Punto de Venta (POS)", "Sincronización en la Nube", "Reportes Financieros"],
        demos: [mirandaDemo]
    },
    {
        id: "sistema-shop",
        index: 2,
        titleTop: "E-commerce",
        titleBottom: "Shop Pro",
        img: cardSoftwareImg,
        heroImg: shopMain,
        alt: "Plataforma E-commerce Shop Pro",
        brief: "Tienda online de alto rendimiento y catálogo dinámico.",
        description: "Plataforma de comercio electrónico diseñada para maximizar las ventas online. Incluye un catálogo interactivo, gestión de pedidos simplificada y una interfaz de usuario premiun diseñada para la conversión.",
        features: ["Carrito de Compras", "Catálogo Interactivo", "Pagos Digitales", "Gestión de Clientes"],
        demos: [shopDemo]
    },
    {
        id: "sistema-admus",
        index: 3,
        titleTop: "Gestión Admus",
        titleBottom: "Producciones",
        img: cardInfluencerImg,
        heroImg: admusLogin,
        alt: "Sistema Admus Producciones",
        brief: "Coordinación logística para influencers y marcas.",
        description: "Software especializado para Admus Producción que optimiza la relación entre marcas y creadores de contenido, manejando cronogramas complejos de grabación y visitas técnicas.",
        features: ["Calendario Logístico", "Gestión de Talentos", "Control de Campañas", "Seguimiento de Resultados"],
        demos: [admusDemo]
    },
    // Repetición para placeholders
    {
        id: "sistema-miranda-2",
        index: 4,
        titleTop: "Sistema Ventas",
        titleBottom: "Miranda v2",
        img: cardGiftCardImg,
        heroImg: mirandaLogin,
        alt: "Copia de Sistema Miranda",
        brief: "Gestión avanzada de ventas.",
        description: "Una versión extendida del sistema de gestión comercial líder en el mercado.",
        features: ["Multi-sucursal", "Módulo de Gastos", "Contabilidad Básica", "Alertas de Stock"],
        demos: [mirandaDemo]
    },
    {
        id: "sistema-shop-2",
        index: 5,
        titleTop: "E-commerce",
        titleBottom: "Industrial",
        img: cardTiktokImg,
        heroImg: shopMain,
        alt: "Copia de Sistema Shop",
        brief: "Escalabilidad para ventas masivas.",
        description: "Solución de comercio electrónico preparada para manejar grandes volúmenes de tráfico y pedidos.",
        features: ["API de Integración", "Optimización SEO", "Diseño Responsive", "Velocidad de Carga"],
        demos: [shopDemo]
    },
    {
        id: "sistema-admus-2",
        index: 6,
        titleTop: "Calendario",
        titleBottom: "Logístico",
        img: cardTasksImg,
        heroImg: admusLogin,
        alt: "Copia de Sistema Admus",
        brief: "Gestión de tareas y cronogramas.",
        description: "Sistema de organización por tiempos diseñado para la coordinación de equipos creativos.",
        features: ["Timeline Interactivo", "Asignación de Tareas", "Notificaciones Push", "Reportes de Avance"],
        demos: [admusDemo]
    }
];

