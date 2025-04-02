import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import BeamshyftLogo from "@/components/logos/beamshyft";
import { Button, ButtonProps } from "./ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const QuoteButton = (props: React.JSX.IntrinsicAttributes & ButtonProps & React.RefAttributes<HTMLButtonElement>) => {
  return (
    <Button {...props} variant="outline" size="default" asChild>
      <Link to="/contact" className="text-secondary-foreground font-bold">
        Get a Quote
      </Link>
    </Button>
  );
}


export const BeamshyftHeader = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [open, setOpen] = React.useState(false);

  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY < 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return (
    <div
      id="header"
      className="fixed w-full flex flex-row justify-between items-center px-4 md:px-20 py-4 bg-primary-foreground z-20 mh-36"
      style={{
        boxShadow: isTransparent ? "" : "#888 0px 0px 20px",
        transition: "background-color 0.3s, box-shadow 0.3s",
        backgroundColor: isTransparent && pathname === "/" ? "transparent" : "hsl(var(--primary-foreground))",}}
    >
      <NavigationMenu>
        <NavigationMenuList className={isTransparent && pathname === "/" ? "invert" : ""}>
          <NavigationMenuItem>
            <Link to="/">
              <BeamshyftLogo width={180} style={{paddingRight: "18px"}}/>
            </Link>
          </NavigationMenuItem>
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index} className="hidden sm:block">
              <Link
                key={index}
                to={item.path}
                className={navigationMenuTriggerStyle()}
              >
                <span className="font-bold">{item.name}</span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="self-center">
        <QuoteButton className="hidden sm:block"/>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <div className="sm:hidden cursor-pointer">
              <Menu className="h-8 w-8" color={isTransparent && pathname === "/" ? "white" : "black"} />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] flex flex-col gap-4"
          >
            <SheetTitle className="pt-10">
              <Link
                to="/"
                className={navigationMenuTriggerStyle()}
                onClick={() => setOpen(false)}
              >
                <BeamshyftLogo />
              </Link>
            </SheetTitle>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={navigationMenuTriggerStyle()}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <QuoteButton onClick={() => setOpen(false)}/>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
