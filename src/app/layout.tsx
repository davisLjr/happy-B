import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "./providers";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agradecimiento desarrollo Neitrys Barrera",
  description: "Gracias a Neitrys Barrera inicie en el mundo de la programación.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
        <meta name="description" content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web." />
        <meta property="og:title" content="Neitrys Barrera - Practicas de programación" />
        <meta property="og:description" content="Esto es una practica de desarrollo guiada por Neitrys Barrera." />
      </Head>
      <html lang="es" className="light">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
