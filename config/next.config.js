const production = process.env.NODE_ENV === "production";

export const url = production
  ? "https://wwww.yoursite.com"
  : "http://localhost:1337";
