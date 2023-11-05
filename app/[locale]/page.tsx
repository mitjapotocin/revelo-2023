import { getDictionary } from "@i18n/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import Cover from "@/components/Cover";
import Services from "@/components/Services";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = getDictionary(locale);

  return (
    <main>
      <Cover dictionary={dictionary} />
      <Services dictionary={dictionary} />
    </main>
  );
}
