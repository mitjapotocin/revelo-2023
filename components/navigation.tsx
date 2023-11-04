import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.svg";

export default function Navigation() {
  console.log(logo);
  return (
    <nav>
      <div className="container">
        <Link href="/" className="nav-logo">
          <Image src={logo.src} width={119} height={35} alt="" />
        </Link>

        <Link href="/">Home</Link>

        <Link href="/about">About</Link>

        <Link className="cta-button" href="/contact-us">
          CTA
        </Link>
      </div>

      <Link href="/" className="nav-logo mobile">
        <Image src={logo.src} width={119} height={35} alt="" />
      </Link>

      <div className="menu-button-wrapper">
        <div className="menu-button"></div>
      </div>
    </nav>
  );
}
