import React from "react";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import BeamshyftLogo from "@/components/logos/beamshyft";
import { Link } from "react-router-dom";
export const BeamshyftFooter = () => (
  <Footer className="w-full px-4 py-8 pt-[6rem] bg-primary-foreground z-[5]">
    <FooterContent>
      <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
        <div className="flex items-center gap-2">
          <BeamshyftLogo width={300}/>
        </div>
      </FooterColumn>
      <FooterColumn>
        <h3 className="text-md pt-1 font-semibold">Contact</h3>
        <Link
          to="mailto:start@beamshyft.com"
          className="text-sm text-muted-foreground"
        >
          start@beamshyft.com
        </Link>
        <Link
          to="tel:+18574887898"
          className="text-sm text-muted-foreground"
        >
          +1(857)-488-7898
        </Link>
      </FooterColumn>
      <FooterColumn>
        <h3 className="text-md pt-1 font-semibold">Company</h3>
        <Link
          to="/"
          className="text-sm text-muted-foreground"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-sm text-muted-foreground"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-sm text-muted-foreground"
        >
          Contact
        </Link>
        <Link
          to="/catalog"
          className="text-sm text-muted-foreground"
        >
          Catalog
        </Link>
        <Link
          to="/contact"
          className="text-sm text-muted-foreground"
        >
          Get a quote
        </Link>
      </FooterColumn>
      <FooterColumn>
        <h3 className="text-md pt-1 font-semibold">Social</h3>
        <Link
          to="https://instagram.com/beamshyft"
          className="text-sm text-muted-foreground"
        >
          Instagram
        </Link>
        <Link
          to="https://facebook.com/beamshyft"
          className="text-sm text-muted-foreground"
        >
          Facebook
        </Link>
        <Link
          to="https://twitter.com/beamshyft"
          className="text-sm text-muted-foreground"
        >
          Twitter
        </Link>
        <Link
          to="https://linkedin.com/company/beamshyft"
          className="text-sm text-muted-foreground"
        >
          LinkedIn
        </Link>
      </FooterColumn>
    </FooterContent>
    <FooterBottom>
      <div>© 2025 Beamshyft. All rights reserved</div>
      <div className="flex items-center gap-4">
        {/* <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms of Service</Link> */}
        <a href="https://lordicon.com/">Icons by Lordicon.com</a>
      </div>
    </FooterBottom>
  </Footer>);