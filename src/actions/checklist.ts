'use server';

import { resolve } from 'node:path';
import { readAttachmentFromPath, sendEmail } from '@/lib/email';

const CHECKLIST_PDF_PATH = resolve(
  './public/emails/ofs-checklist-interativo.pdf'
);

export async function sendChecklistEmail({
  to,
}: {
  to: string;
}): Promise<{ success: boolean; error?: string }> {
  const pdfBuffer = readAttachmentFromPath(CHECKLIST_PDF_PATH);

  const html = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h1>Obrigado por baixar o checklist!</h1>
      <p>Em anexo você encontrará o checklist com os 10 erros que fazem seu site perder clientes.</p>
      <p>Qualquer dúvida, é só responder este email.</p>
    </div>
  `;

  return sendEmail({
    to,
    subject:
      'Seu Checklist Gratuito - 10 Erros que fazem seu site perder clientes',
    html,
    attachments: [
      {
        filename: 'checklist-10-erros-site.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  });
}
