'use server'


import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Missing required fields' }
  }

  try {
    await resend.emails.send({
      from: `Portfolio <${process.env.SENDER_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'Failed to send message' }
  }
}
