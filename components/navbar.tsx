import Link from "next/link";
import Image from "next/image";
import MainHeader from "./main-header";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[999] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MainHeader>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* <div className="flex flex-1 items-center justify-between space-x-2"> */}
          <Link href="/" className="z-40">
            <Image
              src="/logo.svg"
              width={120}
              height={30}
              alt="honeycomb logo"
            />
          </Link>
          <div className="h-full flex items-center space-x-2">
            {user ? (
              <>
                <Button variant="ghost" size="sm">
                  <Link href="/api/auth/logout">Sign out</Link>
                </Button>
                {isAdmin ? (
                  <Button variant="ghost" size="sm">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                ) : null}
                <Button size="sm" className="hidden sm:flex">
                  <Link href="configure/upload">Create case</Link>
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" variant="ghost">
                  <Link href="/api/auth/register">Sign up</Link>
                </Button>
                <Button size="sm" variant="ghost">
                  <Link href="/api/auth/login">Login</Link>
                </Button>

                <div className="h-8 w-px bg-zinc-300 hidden sm:block" />

                <Button size="sm" className="hidden sm:flex">
                  <Link href="/configure/upload">Create case</Link>
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Button>
              </>
            )}
          </div>
          {/* </div> */}
        </div>
      </MainHeader>
    </nav>
  );
};

export default Navbar;
