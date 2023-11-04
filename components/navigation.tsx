import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.svg";

const Logo = ({ alt }: string) => {
  return <Image src={logo.src} width={119} height={35} alt={alt} priority />;
};

export default function Navigation({ dictionary }: any) {
  return (
    <nav>
      <div className="container">
        <Link href="/" className="nav-logo">
          <Logo alt={dictionary.navigation.logo} />
        </Link>

        <Link href="/">{dictionary.navigation.home}</Link>

        <Link href="/about">About</Link>

        <Link className="cta-button" href="/contact-us">
          CTA
        </Link>
      </div>

      <Link href="/" className="nav-logo mobile">
        <Logo alt={dictionary.navigation.logo} />
      </Link>

      <div className="menu-button-wrapper">
        <div className="menu-button"></div>
      </div>
    </nav>
  );
}
