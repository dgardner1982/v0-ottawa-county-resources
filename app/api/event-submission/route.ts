import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const eventSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  eventTitle: z.string().trim().min(1).max(200),
  dateTime: z.string().trim().min(1).max(200),
  location: z.string().trim().min(1).max(300),
  description: z.string().trim().min(1).max(4000),
  connection: z.string().trim().min(1).max(4000),
})

export async function POST(request: Request) {
  try {
    const result = eventSchema.safeParse(await request.json())
    if (!result.success) return NextResponse.json({ error: 'Please complete every event field with valid information.' }, { status: 400 })

    const { name, email, eventTitle, dateTime, location, description, connection } = result.data
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: 'Ottawa County Resources <onboarding@resend.dev>',
      to: ['dgardnerjr36@outlook.com'],
      replyTo: email,
      subject: `Community calendar event submission: ${eventTitle}`,
      text: `Submitted by: ${name} <${email}>\n\nEvent: ${eventTitle}\nDate and time: ${dateTime}\nLocation or online link: ${location}\n\nDetails:\n${description}\n\nRecovery or mental health connection:\n${connection}`,
    })

    if (error) {
      console.error('[v0] Event submission failed:', error)
      return NextResponse.json({ error: 'We could not send your event. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[v0] Event submission failed:', error)
    return NextResponse.json({ error: 'We could not send your event. Please try again.' }, { status: 500 })
  }
}
