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
    document.title = "Beamshyft | Catalog";
    return () => {
      document.title = "Beamshyft";
    }
  }, []);
  const download = (file: string) => {
    if (typeof window !== "undefined") {
      window.open(file);
    }
  };
  return (
    <div className="flex flex-col bg-primary-foreground mt-[70px] z-[6]">
      <PageHeader
        title="Our Catalog"
        description="Stock cabinets and vanities ship within 72 hours. Doors, customized cabinets, and vanities may require additional production time to meet your exact specifications."
        imageSrc="/Imágenes Alta Catálogo ID/Cocina.jpg"
      >
      </PageHeader>
      <div className="bg-primary-foreground flex flex-col items-center">
        <div className="flex items-start flex-row justify-center gap-4 flex-wrap max-w-[1200px]">
          <div className="flex items-start flex-row justify-center gap-4 mb-10 flex-wrap pt-8">
            <InfoCard
              title="Cabinets"
              description="Check out our collection of cabinets."
              imageSrc="/graphite_shaker_kitchen_cropped_from_cabinet_4.jpg"
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
              imageSrc="/white_vanity_cropped_from_vanity_2.jpg"
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
              imageSrc="/white door.webp"
              bottomChild={
                <Button
                  onClick={() => download("/catalogs/beamshyft_doors.pdf")}
                  variant="outline"
                >
                  Browse Doors
                </Button>
              }
            />
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
    </div>
  );
};

export default Catalog;
