"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Links from "./Links";
import { useState } from "react";
const MobileNav = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const handleChangeSheetState = (open: boolean) => {
    setSheetOpen(open);
  };
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetTitle aria-description="navigation menu">
        <SheetContent className="flex flex-col" aria-description="Liste de lien">
          <nav>
            <div className="mt-32 mb-40 text-center text-2xl">
              <Link href={"/"}>
                <h1 className="text-5xl font-bold">
                  Joris Loit<span className="text-accent">.</span>
                </h1>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <Links setOpen={handleChangeSheetState} />
            </div>
          </nav>
        </SheetContent>
      </SheetTitle>
    </Sheet>
  );
};

export default MobileNav;
