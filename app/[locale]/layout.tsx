import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/i18n/get-dictionary";
import hero from "@images/Property 1=Mobile, Property 2=Hero.png";
import "../../scss/main.scss";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
  const dictionary = getDictionary(params.locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    robots: "index, follow",

    openGraph: {
      ...dictionary.metadata.openGraph,
      type: "website",
      images: [
        {
          url: hero.src,
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={(inter.className, montserrat.className)}>
        <div className="main-wrapper">
          <Navigation dictionary={dictionary} locale={locale} />
          {children}
          <Footer dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
