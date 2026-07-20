import lastmile0 from "../../../assets/images/projects/lastmile/lastmile-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Last Mile",
  theme: "light",
  tags: ["python", "streamlit", "pandas"],
  videoBorder: false,
  live: "https://www.tiktok.com/@jeanapazam/video/7301187386426412294",
  description:
    "Last-mile delivery route optimization app built with Python and Streamlit.<br/><br/>Upload your orders and locations, and the app clusters deliveries, calculates optimized routes for each driver, and measures total time, fuel savings, and emission reductions — faster, cheaper deliveries and happier customers.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: lastmile0,
        alt: "Optimized last-mile routes on a city map",
        caption: "Optimized routes: 98 deliveries across 5 routes",
      },
    },
  ],
} as const satisfies ProjectContent;
