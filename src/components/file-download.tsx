'use client';

import React, { useState } from 'react';
import { Loader2 } from "lucide-react"
import { Button } from './ui/button';

export const FileDownload = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleDownload() {
    setIsLoading(true);
    const response = await fetch('/api/zip');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Beamshyft Catalogs.zip';
    link.click();
    window.URL.revokeObjectURL(url);
    setTimeout(()=>setIsLoading(false), 1000);
  }

  return <Button onClick={handleDownload} disabled={isLoading}>{isLoading && <Loader2 className="animate-spin"/>}{isLoading ? "Downloading..." : "Download All"}</Button>;
};