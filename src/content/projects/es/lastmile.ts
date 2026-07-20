import lastmile0 from "../../../assets/images/projects/lastmile/lastmile-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Last Mile",
  theme: "light",
  tags: ["python", "streamlit", "pandas"],
  videoBorder: false,
  live: "https://www.tiktok.com/@jeanapazam/video/7301187386426412294",
  description:
    "App de optimización de rutas de entrega de última milla construida con Python y Streamlit.<br/><br/>Sube tus pedidos y ubicaciones: la app agrupa las entregas, calcula rutas optimizadas para cada conductor y mide el tiempo total, el ahorro de combustible y la reducción de emisiones — entregas más rápidas, económicas y clientes más felices.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: lastmile0,
        alt: "Rutas de última milla optimizadas sobre un mapa de la ciudad",
        caption: "Rutas optimizadas: 98 entregas en 5 rutas",
      },
    },
  ],
} as const satisfies ProjectContent;
