import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
})

export async function POST(request: Request) {
  try {
    const payload = contactSchema.parse(await request.json())
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ottawa County Resources <onboarding@resend.dev>',
        to: ['dgardner@ottawacmh.org'],
        reply_to: payload.email,
        subject: `New resource message from ${payload.name}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Unable to deliver email.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 })
  }
}
