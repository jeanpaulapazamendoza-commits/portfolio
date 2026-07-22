import webscraping0 from "../../../assets/images/projects/webscraping/webscraping-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Web Scraping",
  theme: "dark",
  tags: ["python", "beautifulsoup", "selenium", "pandas"],
  videoBorder: false,
  live: "https://www.tiktok.com/@jeanapazam/video/7665183587565669639",
  description:
    "Herramienta de web scraping que extrae datos de productos desde sitios de supermercados — nombres, precios, categorías, valoraciones y disponibilidad.<br/><br/>Construida con Python, automatiza la recolección de datos a gran escala y los exporta limpios y estructurados a CSV, Excel y SQL, convirtiendo páginas web en información útil para el negocio.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: webscraping0,
        alt: "Herramienta de web scraping de supermercados extrayendo datos de productos",
        caption: "Extrae datos de productos y expórtalos a CSV, Excel y SQL",
      },
    },
  ],
} as const satisfies ProjectContent;
