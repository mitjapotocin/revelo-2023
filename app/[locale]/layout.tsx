import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/i18n/get-dictionary";
import hero from "@images/Property 1=Mobile, Property 2=Hero.png";

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
});
const inter = Inter({ subsets: ["latin-ext"], weight: ["300"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.locale);
  console.log(hero.src);
  console.log(hero.src);
  console.log(hero.src);
  return {
    title: "Revelo.ai",
    description: dictionary.metadata.description,
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://example.com",
      title: "My Website",
      description: "My Website Description",
      siteName: "My Website",
      images: [
        {
          url: "https://myherbaltea.org" + hero.src,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body className={(inter.className, montserrat.className)}>
        {children}
      </body>
    </html>
  );
}
