import path from 'node:path';
import AdmZip from 'adm-zip';

export async function GET() {
  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename=archive.zip');
  headers.append('Content-Type', 'application/zip');

  const zip = new AdmZip();
  zip.addLocalFile(path.join(process.cwd(), 'public/catalogs', 'cabinets_and_vanities.pdf'));
  zip.addLocalFile(path.join(process.cwd(), 'public/catalogs', 'doors.pdf'));

  const zipBuffer = zip.toBuffer();

  return new Response(zipBuffer, {
    headers,
  });
}