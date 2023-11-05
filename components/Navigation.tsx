import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.svg";

const Logo = ({ alt }: { alt: string }) => {
  return <Image src={logo.src} width={119} height={35} alt={alt} priority />;
};

export default function Navigation({ dictionary, locale }: any) {
  return (
    <nav>
      <div className="container">
        <Link href={`/${locale}`} className="nav-logo">
          <Logo alt={dictionary.navigation.logo} />
        </Link>

        <Link href={`/${locale}`}>{dictionary.navigation.home}</Link>

        <Link href={`/${locale}/about`}>{dictionary.navigation.about}</Link>

        <Link className="cta-button" href={`/${locale}/contact-us`}>
          {dictionary.navigation.cta}
        </Link>
      </div>

      <Link href={`/${locale}`} className="nav-logo mobile">
        <Logo alt={dictionary.navigation.logo} />
      </Link>

      <div className="menu-button-wrapper">
        <div className="menu-button"></div>
      </div>
    </nav>
  );
}
