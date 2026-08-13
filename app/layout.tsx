import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garagem estética automotiva | Estética especializada em veiculos em Araçuaí",
  description: "Lavagem detalhada, polimento, vitrificação, higienização interna e revitalização de plásticos em Araçuaí, MG.",
  openGraph: {
    title: "Garagem estética automotiva | Seu veículo bem cuidado até onde quase ninguém olha",
    description: "Estética automotiva especializada em Araçuaí, MG.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
