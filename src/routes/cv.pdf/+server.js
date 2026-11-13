import { JOBS } from '../../jobs.js';
import { createCvPdf } from '$lib/server/cv.js';

export async function GET() {
  const pdf = await createCvPdf({
    name: 'Lautaro Amengual',
    title: 'Software Engineer / Product Builder',
    location: 'Argentina',
    email: 'amengual.ln@gmail.com',
    linkedin: 'linkedin.com/in/lautaroamengual',
    summary: 'I build shared frontend foundations and product experiences, working with teams from architecture through the user interface.',
    jobs: JOBS
  });

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="lautaro-amengual-cv.pdf"',
      'Cache-Control': 'no-store'
    }
  });
}
