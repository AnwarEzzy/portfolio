import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required' },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'anwarezzirani69@gmail.com';

    // 2. Check if the API key is not configured or is still the placeholder
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
      return NextResponse.json(
        { 
          error: 'Resend API Key is not configured. Please add your RESEND_API_KEY to the .env.local file in the root of your project.' 
        },
        { status: 500 }
      );
    }

    // 3. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [receiverEmail],
      subject: `New message from ${name} via Portfolio`,
      replyTo: email, // Directly reply to the sender
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1f2937; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #3b82f6; font-size: 20px; font-weight: 700; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-top: 0; margin-bottom: 20px;">
            New Contact Form Message
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563; width: 100px;">Name:</td>
              <td style="padding: 6px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Email:</td>
              <td style="padding: 6px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
          </table>

          <p style="font-weight: bold; color: #4b5563; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; white-space: pre-wrap; font-style: italic; color: #374151; line-height: 1.6; margin-bottom: 24px;">
            ${message.replace(/\n/g, '<br />')}
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">
            This email was sent automatically from your portfolio website's contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message || error },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
