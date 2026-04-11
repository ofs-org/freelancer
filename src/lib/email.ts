import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

export const resend = new Resend(apiKey);

export const fromEmail =
  process.env.NODE_ENV === 'production'
    ? 'OFS Freelancer <contato@ofsfreelancer.com>'
    : 'onboarding@resend.dev';

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to,
      subject,
      html,
      text,
      replyTo,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    console.log(`Email sent successfully: ${data?.id}`);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Failed to send email:', message);
    return { success: false, error: message };
  }
}
