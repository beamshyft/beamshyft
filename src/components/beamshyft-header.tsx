import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import BeamshyftLogo from "@/components/logos/beamshyft";
import { Link } from "react-router-dom";

export const BeamshyftHeader = () => {
  return (
    <div id="header" className="fixed w-full justify-between items-center px-4 py-4 bg-primary-foreground z-20 mh-36">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <BeamshyftLogo />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/catalog" className={navigationMenuTriggerStyle()}>
              Catalog
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about" className={navigationMenuTriggerStyle()}>
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className={navigationMenuTriggerStyle()}>
              Contact
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/getaquote" className={navigationMenuTriggerStyle()}>
              Get a Quote
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
