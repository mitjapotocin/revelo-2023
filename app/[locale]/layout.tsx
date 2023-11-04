import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/i18n/get-dictionary";
import hero from "@images/Property 1=Mobile, Property 2=Hero.png";
import "../../scss/main.scss";
import Navigation from "@/components/navigation";

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

  return {
    title: "Revelo.ai",
    description: dictionary.metadata.description,
    robots: "index, follow",

    // TODO
    openGraph: {
      type: "website",
      url: "https://example.com",
      title: "My Website",
      description: "My Website Description",
      siteName: "My Website",
      images: [
        {
          url: process.env.NEXT_DOMAIN_URL + hero.src,
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
