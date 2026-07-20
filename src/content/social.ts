export const social = [
  { url: "mailto:cuenta.appsheet.01@gmail.com", name: "mail" },
  { url: "https://github.com/jeanpaulapazamendoza-commits", name: "github" },
  { url: "https://www.linkedin.com/in/jean-apaza-4481ba165/", name: "linkedin" },
  { url: "https://www.tiktok.com/@jeanapazam", name: "tiktok" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" | "tiktok" }[];
