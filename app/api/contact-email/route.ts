import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_EMAIL, email } from "@/consts/baseConstants";
import { NewContactRequest } from "@/components/emails/NewContactRequest";
import { NewContactReceipt } from "@/components/emails/NewContactReceipt";
import { ContactFormType } from "@/lib/types";

// Função helper para obter instância do Resend
function getResend() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        throw new Error("RESEND_API_KEY não está configurada");
    }
    return new Resend(apiKey);
}

async function sendContactRequestEmail(
    contactFormData: ContactFormType
) {
    try {
        const resend = getResend();
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
        const resend = getResend();
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
    try {
        const emailData = await req.json() as ContactFormType;
        
        // Validação dos dados recebidos
        if (!emailData.fullName || !emailData.email || !emailData.message) {
            return NextResponse.json(
                { error: "Campos obrigatórios faltando: fullName, email e message são necessários" },
                { status: 400 }
            );
        }

        // Validação básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailData.email)) {
            return NextResponse.json(
                { error: "Email inválido" },
                { status: 400 }
            );
        }

        // Enviar emails
        await sendContactRequestEmail(emailData);
        await sendContactReceiptEmail(emailData);

        return NextResponse.json({ 
            status: 200,
            message: "Email enviado com sucesso"
        });
    } catch (err) {
        console.error("Error sending email:", err);
        return NextResponse.json(
            { error: err instanceof Error ? err.message : "Internal Server Error" },
            { status: 500 }
        );
    }
}