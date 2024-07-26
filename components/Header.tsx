"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { Switch } from "./ui/switch";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Header");
  const handleChangeChecked = (checked: boolean) => {
    const newLocale = checked ? "en" : "fr";
    router.push("/" + newLocale + pathname.substring(3));
  };
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-5xl font-bold">
            Joris<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>{t("contactMe")}</Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-accent">FR</span>
            <Switch
              defaultChecked={locale === "en"}
              onCheckedChange={(checked) => handleChangeChecked(checked)}
            />
            <span className="text-accent">EN</span>
          </div>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
