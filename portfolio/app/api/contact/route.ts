import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/EmailTemplate";

export async function POST(request: NextRequest) {
    try {
      // Seperate action from the rest of the body
      const { action, ...body } = await request.json();
      // Choose function based on action
      switch (action) {
        case "sendEmail":
          return sendEmail(body);
        default:
          return NextResponse.json(
            { success: false, message: "Invalid action parameter" },
            { status: 400 }
          );
      }
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid request data", error: error  },
        { status: 400 }
      );
    }
}

interface Email {
  name: string
  email: string
  message: string
}

const sendEmail = async ({name, email, message}: Email) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    
    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Resend <onboarding@resend.dev>',
      to: ['cooper.j.rachow@gmail.com'],
      subject: 'Portfolio Contact',
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send email", error: error });
  }
}