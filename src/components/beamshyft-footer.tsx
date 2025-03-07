import React from "react";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import BeamshyftLogo from "@/components/logos/beamshyft";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";
export const BeamshyftFooter = () => (
  <Footer className="w-full px-4 py-8 bg-primary-foreground">
    <FooterContent>
      <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
        <div className="flex items-center gap-2">
          <BeamshyftLogo width={300}/>
        </div>
      </FooterColumn>
      <FooterColumn>
        <h3 className="text-md pt-1 font-semibold">Company</h3>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Careers
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Blog
        </Link>
      </FooterColumn>
      <FooterColumn>
        <h3 className="text-md pt-1 font-semibold">Contact</h3>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Discord
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Twitter
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Github
        </Link>
      </FooterColumn>
    </FooterContent>
    <FooterBottom>
      <div>© 2025 Beamshyft. All rights reserved</div>
      <div className="flex items-center gap-4">
        {/* <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Service</Link> */}
        <ModeToggle />
      </div>
    </FooterBottom>
  </Footer>);