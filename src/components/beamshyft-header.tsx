import React from "react";
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

const navItems = [
  { name: "Catalog", path: "/catalog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Get a Quote", path: "/getaquote" },
];

function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="sm:hidden cursor-pointer">
          <Menu className="h-8 w-8" />
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export const BeamshyftHeader = () => {
  return (
    <div
      id="header"
      className="fixed w-full flex flex-row justify-between items-center px-4 py-4 bg-primary-foreground z-20 mh-36"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <BeamshyftLogo />
            </Link>
          </NavigationMenuItem>
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index} className="hidden sm:block">
              <Link
                key={index}
                to={item.path}
                className={navigationMenuTriggerStyle()}
              >
                {item.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="self-end">
        <HamburgerMenu />
      </div>
    </div>
  );
};
