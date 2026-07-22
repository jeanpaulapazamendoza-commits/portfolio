import webscraping0 from "../../../assets/images/projects/webscraping/webscraping-0.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Web Scraping",
  theme: "dark",
  tags: ["python", "beautifulsoup", "selenium", "pandas"],
  videoBorder: false,
  live: "https://www.tiktok.com/@jeanapazam/video/7665183587565669639",
  description:
    "Web scraping tool that extracts product data from supermarket websites — names, prices, categories, ratings, and availability.<br/><br/>Built with Python, it automates data collection at scale and exports clean, structured datasets to CSV, Excel, and SQL, turning raw web pages into usable business data.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: webscraping0,
        alt: "Supermarket web scraping tool extracting product data",
        caption: "Extract product data and export to CSV, Excel, and SQL",
      },
    },
  ],
} as const satisfies ProjectContent;
