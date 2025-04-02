import path from 'node:path';
import AdmZip from 'adm-zip';

export async function GET() {
  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename=archive.zip');
  headers.append('Content-Type', 'application/zip');

  const zip = new AdmZip();
  zip.addLocalFile(path.join(process.cwd(), 'public/catalogs', 'beamshyft_cabinets.pdf'));
  zip.addLocalFile(path.join(process.cwd(), 'public/catalogs', 'beamshyft_vanities.pdf'));
  zip.addLocalFile(path.join(process.cwd(), 'public/catalogs', 'beamshyft_doors.pdf'));

  const zipBuffer = zip.toBuffer();

  return new Response(zipBuffer, {
    headers,
  });
}