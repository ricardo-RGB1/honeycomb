import Link from "next/link";
import MainHeader from "./main-header";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MainHeader>
        <div className="border-t border-gray-100" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0 text-muted-foreground text-sm">
            <p>&copy;{new Date().getFullYear()} All rights reserved </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms of Service
              </Link>

              <div className="h-5 w-px bg-zinc-300 hidden sm:block" />

              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>

              <div className="h-5 w-px bg-zinc-300 hidden sm:block" />
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Sales and Refunds
              </Link>
            </div>
          </div>
        </div>
      </MainHeader>
    </footer>
  );
};

export default Footer;
