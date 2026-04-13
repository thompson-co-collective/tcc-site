import { sendEmail, trackEvent } from '../utils';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  needHelp: boolean;
  message: string;
}

export const onRequestPost: Handlers['post'] = async ({ request }) => {
  const formData: ContactFormData = await request.json();

  // Send email notification
  await sendEmail('hello@thompsoncollective.co', 'New Contact Form Submission', JSON.stringify(formData));

  // Track event in GA
  await trackEvent('contact_form_submitted', formData);

  return new Response('Success', { status: 200 });
};
