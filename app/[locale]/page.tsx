import Image from "next/image";
import styles from "./page.module.css";
import { getDictionary } from "@i18n/get-dictionary";
import { Locale } from "@/i18n-config";

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
      <Image src={"/404-hero.webp"} width={200} height={200} alt="" />
    </main>
  );
}
