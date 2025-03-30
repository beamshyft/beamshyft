"use client";

import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import InfoCard from "@/components/info-card";

import { FileDownload } from "@/components/file-download";
import PageHeader from "@/components/page-header";
import InfoSection from "@/components/info-section";

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
      </PageHeader>
      <div className="bg-primary-foreground flex flex-col items-center">
        <div className="flex items-start flex-row justify-center gap-4 p-8 flex-wrap max-w-[1200px]">
          <InfoCard
            title="Cabinets"
            description="Check out our collection of cabinets."
            imageSrc="/Imágenes Alta Catálogo ID/Vestidor-2.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/beamshyft_cabinets.pdf")}
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
                onClick={() => download("/catalogs/beamshyft_vanities.pdf")}
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
          {/* lead time section */}
          <InfoSection
            title="Lead Time"
            titleClassName="text-5xl font-bold"
            description={
              <span>
                Uncustomized cabinets and vanities ship within 72 hours. Doors, customized cabinets, and vanities may require additional production time to meet your exact specifications.
              </span>
            }
            rightChild={
              <div className="flex flex-col">
                <div className="h-[400px] max-w-[400px] w-full relative rounded-2xl overflow-hidden">
                  <img
                    src="\Imágenes Alta Catálogo ID\Acústica.jpg"
                    alt="American Warehouse Cabinets"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[400px] max-w-[400px] w-full relative rounded-2xl overflow-hidden mt-14">
                  <img
                    src="\Imágenes Alta Catálogo ID\Rejilla-Toquilla.jpg"
                    alt="American Warehouse Cabinets"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            }
            leftChild={
              <div className="h-[400px] w-full relative rounded-2xl overflow-hidden mt-14">
                <img
                  src="\Imágenes Alta Catálogo ID\Vestidor-1.jpg"
                  alt="American Warehouse Cabinets"
                  className="object-cover w-full h-full"
                />
              </div>
            }
          />
          {/* download all section */}
          <InfoSection
          reverse
          height="200px"
            title="Download All"
            titleClassName="text-5xl font-bold"
            description={
              <span>
                Download all catalogs in one file.
              </span>
            }
            leftChild={
              <FileDownload />
            }
          />

        </div>
      </div>
    </div>
  );
};

export default Catalog;
