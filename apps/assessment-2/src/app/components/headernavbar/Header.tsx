"use-client";

import { Button } from "@repo/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../../../assets/icons/logo.svg";
import { scrollTo } from "../../../shared/helpers/scrollTo";
import MobileNav from "./MobileNav";

const Header = () => {
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 flex w-full items-center justify-between py-4 px-10 lg:static bg-blue-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100 z-10">
      <Link href="/" aria-label="ZXCTech">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          <div className="hidden h-6 text-2xl font-semibold md:block">
            ZXC Tech
          </div>
        </div>
      </Link>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <Link
          href="#about"
          aria-label="About"
          className="hidden font-medium text-gray-900 md:block"
          onClick={scrollTo("about")}
        >
          About
        </Link>

        <Link
          href="#pricing"
          aria-label="Pricing"
          className="hidden font-medium text-gray-900 md:block"
          onClick={scrollTo("pricing")}
        >
          Pricing
        </Link>

        <Link
          href="#contact"
          aria-label="About"
          className="hidden font-medium text-gray-900 md:block"
          onClick={scrollTo("contact")}
        >
          Contact Us
        </Link>

        <Button.Primary
          className="hidden md:block"
          onClick={() => router.push("/login")}
        >
          Masuk
        </Button.Primary>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
