import assert from 'node:assert/strict';
import { PDFDocument } from 'pdf-lib';
import { JOBS } from '../src/jobs.js';
import { createCvPdf } from '../src/lib/server/cv.js';

const bytes = await createCvPdf({
  name: 'Lautaro Amengual',
  title: 'Software Engineer / Product Builder',
  location: 'Argentina',
  email: 'amengual.ln@gmail.com',
  linkedin: 'linkedin.com/in/lautaroamengual',
  summary: 'Frontend engineering and product building.',
  jobs: JOBS
});
const document = await PDFDocument.load(bytes);
assert.ok(document.getPageCount() >= 1);
assert.equal(document.getTitle(), 'Lautaro Amengual - CV');
assert.ok(bytes.byteLength > 1000);
console.log(`CV PDF valid: ${document.getPageCount()} page(s)`);
