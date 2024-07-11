"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Links from "./Links";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav>
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href={"/"}>
              <h1 className="text-5xl font-bold">
                Joris Loit<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <Links />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
