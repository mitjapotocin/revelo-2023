"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@images/logo.svg";
import React from "react";

const Logo = ({ alt }: { alt: string }) => {
  return <Image src={logo.src} width={119} height={35} alt={alt} priority />;
};

const NavLink = ({
  children,
  href,
  setNavOpened,
  className,
}: {
  children: any;
  href: string;
  setNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        setNavOpened(false);
      }}
    >
      {children}
    </Link>
  );
};

export default function Navigation({ dictionary, locale }: any) {
  const [navOpened, setNavOpened] = React.useState(false);

  return (
    <nav className={navOpened ? "opened" : ""}>
      <div className="container">
        <NavLink
          href={`/${locale}`}
          className="nav-logo"
          setNavOpened={setNavOpened}
        >
          <Logo alt={dictionary.navigation.logo} />
        </NavLink>

        <NavLink href={`/${locale}`} setNavOpened={setNavOpened}>
          {dictionary.navigation.home}
        </NavLink>

        <NavLink href={`/${locale}/about`} setNavOpened={setNavOpened}>
          {dictionary.navigation.aboutUs}
        </NavLink>

        <NavLink
          className="cta-button"
          href={`/${locale}/contact-us`}
          setNavOpened={setNavOpened}
        >
          {dictionary.navigation.cta}
        </NavLink>
      </div>

      <NavLink
        href={`/${locale}`}
        className="nav-logo mobile"
        setNavOpened={setNavOpened}
      >
        <Logo alt={dictionary.navigation.logo} />
      </NavLink>

      <div
        onClick={() => setNavOpened((v) => !v)}
        className="menu-button-wrapper"
      >
        <div className="menu-button"></div>
      </div>
    </nav>
  );
}
