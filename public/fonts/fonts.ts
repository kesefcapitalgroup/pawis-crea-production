import { Playfair_Display, Raleway } from 'next/font/google';

export const primaryFont = Playfair_Display({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const secondaryFont = Raleway({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
