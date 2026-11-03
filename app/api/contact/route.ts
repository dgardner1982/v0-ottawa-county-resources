import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(4000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Please complete all fields with valid information." }, { status: 400 })
    }

    const { name, email, message } = result.data
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: "Ottawa County Resources <dgardner@ottawacmh.org>",
      to: ["dgardner@ottawacmh.org"],
      replyTo: email,
      subject: `Recovery Alliance inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      console.error("[v0] Resend submission failed:", error)
      const isDomainVerificationError = error.statusCode === 403
      return NextResponse.json(
        {
          error: isDomainVerificationError
            ? "Email delivery is not active yet. Please verify the ottawacmh.org domain in Resend, then try again."
            : "We could not send your message. Please try again.",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact submission failed:", error)
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 500 })
  }
}
