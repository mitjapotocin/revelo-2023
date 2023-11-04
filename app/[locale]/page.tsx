import Image from "next/image";
import styles from "./page.module.css";
import { getDictionary } from "@i18n/get-dictionary";
import { Locale } from "@/i18n-config";
import hero from "@images/Property 1=Mobile, Property 2=Hero.png";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <main className={styles.main}>
      Home
      {dictionary.common.ok}
      <Image src={hero} alt="" />
    </main>
  );
}
