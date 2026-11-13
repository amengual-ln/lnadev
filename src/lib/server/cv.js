import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const PAGE = [595.28, 841.89];
const MARGIN = 48;
const INK = rgb(0.12, 0.16, 0.19);
const MUTED = rgb(0.36, 0.41, 0.44);
const ACCENT = rgb(0.13, 0.36, 0.43);

// The built-in PDF fonts use WinAnsi. Normalize punctuation before measuring or drawing.
const printable = (value) => String(value)
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/[–—−]/g, '-')
  .replace(/[^\x20-\x7e\u00a0-\u00ff]/g, '');

function wrap(text, font, size, width) {
  const lines = [];
  let line = '';
  for (const word of printable(text).split(/\s+/).filter(Boolean)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && font.widthOfTextAtSize(candidate, size) > width) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export async function createCvPdf(profile) {
  const document = await PDFDocument.create();
  const regular = await document.embedFont(StandardFonts.Helvetica);
  const bold = await document.embedFont(StandardFonts.HelveticaBold);
  const [width, height] = PAGE;
  const contentWidth = width - MARGIN * 2;
  let page;
  let y;

  function newPage() {
    page = document.addPage(PAGE);
    y = height - MARGIN;
  }

  function ensureSpace(points) {
    if (y - points < MARGIN + 30) newPage();
  }

  function drawLine(text, x, size, font = regular, color = INK) {
    page.drawText(printable(text), { x, y, size, font, color });
  }

  function drawParagraph(text, size = 10, leading = 14, color = MUTED) {
    const lines = wrap(text, regular, size, contentWidth);
    ensureSpace(lines.length * leading);
    for (const line of lines) {
      drawLine(line, MARGIN, size, regular, color);
      y -= leading;
    }
  }

  newPage();
  drawLine(profile.name, MARGIN, 25, bold);
  y -= 25;
  drawLine(profile.title, MARGIN, 11, bold, ACCENT);
  y -= 19;
  drawParagraph([profile.location, profile.email, profile.linkedin].join('  |  '), 9, 13);
  y -= 15;
  page.drawLine({ start: { x: MARGIN, y }, end: { x: width - MARGIN, y }, thickness: 1, color: ACCENT });
  y -= 27;

  drawParagraph(profile.summary, 11, 16, INK);
  y -= 22;
  drawLine('EXPERIENCE', MARGIN, 9, bold, ACCENT);
  y -= 23;

  for (const job of profile.jobs) {
    const description = wrap(job.description.trim(), regular, 10, contentWidth);
    const required = 20 + 17 + description.length * 14 + 21;
    ensureSpace(required);
    drawLine(job.company, MARGIN, 13, bold);
    const dates = `${job.from} - ${job.to}`;
    drawLine(dates, width - MARGIN - regular.widthOfTextAtSize(dates, 9), 9, regular, MUTED);
    y -= 17;
    drawLine(job.position, MARGIN, 10, bold, ACCENT);
    y -= 17;
    for (const line of description) {
      drawLine(line, MARGIN, 10, regular, MUTED);
      y -= 14;
    }
    drawLine(job.skills.join('  /  ').toUpperCase(), MARGIN, 8, bold, MUTED);
    y -= 29;
  }

  document.getPages().forEach((sheet, index, pages) => {
    sheet.drawLine({ start: { x: MARGIN, y: 43 }, end: { x: width - MARGIN, y: 43 }, thickness: 0.5, color: MUTED });
    sheet.drawText(`${profile.name}  /  ${index + 1} of ${pages.length}`, {
      x: MARGIN, y: 28, size: 8, font: regular, color: MUTED
    });
  });
  document.setTitle(`${profile.name} - CV`);
  document.setAuthor(profile.name);
  document.setSubject('Professional experience');
  return document.save();
}
