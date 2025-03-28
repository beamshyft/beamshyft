"use client";

import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import InfoCard from "@/components/info-card";

import { FileDownload } from "@/components/file-download";
import PageHeader from "@/components/page-header";

const Catalog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const download = (file: string) => {
    if (typeof window !== "undefined") {
      window.open(file);
    }
  };
  return (
    <div className="flex flex-col bg-primary-foreground mt-[70px]">
      <PageHeader
        title="Our Catalog"
        description="Browse our catalogs for our diverse selection of cabinets, vanities, and doors. All fully customizable."
        imageSrc="/Imágenes Alta Catálogo ID/Cocina.jpg"
      >
        <FileDownload />
      </PageHeader>
      <div className="bg-primary-foreground flex flex-col items-center">
        <div className="flex items-start flex-row justify-center gap-4 p-8 flex-wrap max-w-[1200px]">
          <InfoCard
            title="Cabinets"
            description="Check out our collection of cabinets."
            imageSrc="/Imágenes Alta Catálogo ID/Vestidor-2.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/cabinets_and_vanities.pdf")}
                variant="outline"
              >
                Browse Cabinets
              </Button>
            }
          />
          <InfoCard
            title="Vanities"
            description="View our variety of bathroom vanities."
            imageSrc="/Imágenes Alta Catálogo ID/Baño.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/cabinets_and_vanities.pdf")}
                variant="outline"
              >
                Browse Vanities
              </Button>
            }
          />
          <InfoCard
            title="Doors"
            description="Design with our diverse selection of doors."
            imageSrc="/Imágenes Alta Catálogo ID/Magic.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/doors.pdf")}
                variant="outline"
              >
                Browse Doors
              </Button>
            }
          />
          {/* <div className="opacity-[30%]">
            <InfoCard
              title="Decking, flooring, and more."
              description="Come back soon for our new selection."
              imageSrc="/coming_soon.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
