import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_EMAIL, email } from "@/consts/baseConstants";
import { NewContactRequest } from "@/components/emails/NewContactRequest";
import { NewContactReceipt } from "@/components/emails/NewContactReceipt";
import { ContactFormType } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendContactRequestEmail(
    contactFormData: ContactFormType
) {
    try {
        console.log(`Sending email to ${email}...`);
        const { error } = await resend.emails.send({
            from: `We-Coffeing <${DEFAULT_EMAIL}>`,
            to: [email],
            subject: `Nova Mensagem${" de " + contactFormData.fullName}`,
            react: NewContactRequest({ contactFormData })
        });

        if (error) {
            console.log(`Error sending email to ${email}...`, error);
            throw new Error(`Failed to send email to ${email}...`);
        }

        console.log(
            `Email sent successfully to ${email}...`
        );
    } catch (error) {
        console.log(`Error sending email to ${email}:`, error);
        throw error;
    }
}

async function sendContactReceiptEmail(
    contactFormData: ContactFormType
) {
    try {
        console.log(`Sending receipt email to ${contactFormData.email}...`);
        const { error } = await resend.emails.send({
            from: `We-Coffeing <${DEFAULT_EMAIL}>`,
            to: [contactFormData.email],
            subject: `Thank you for your message`,
            react: NewContactReceipt({ contactFormData })
        });

        if (error) {
            console.log(`Error sending receipt email to ${contactFormData.email}...`, error);
            throw new Error(`Failed to send receipt email to ${contactFormData.email}...`);
        }

        console.log(
            `Receipt email sent successfully to ${contactFormData.email}...`
        );
    } catch (error) {
        console.log(`Error sending receipt email to ${contactFormData.email}:`, error);
        throw error;
    }
}

export async function POST(req: NextRequest) {
    const emailData = await req.json() as ContactFormType;
    
    try {
        await sendContactRequestEmail(emailData);
        await sendContactReceiptEmail(emailData);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        console.log("error sending email", err);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}