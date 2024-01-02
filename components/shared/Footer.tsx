import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex justify-between items-center max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Evently. Todos Los Derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
