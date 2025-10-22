import { Cormorant_Garamond, Playfair_Display } from "next/font/google";

export const primaryFont = Cormorant_Garamond({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const secondaryFont = Playfair_Display({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
