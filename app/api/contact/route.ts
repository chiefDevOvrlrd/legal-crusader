import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, inquiryType, message } = body;

        if (!name || !email || !inquiryType || !message) {
            return Response.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        const submittedAt = new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' });

        // 1. Confirmation to client
        await sgMail.send({
        to: email,
        from: 'info@legalcrusaderslaw.com',   
        subject: 'Confirmation of Your Inquiry With Legal Crusaders',
        templateId: process.env.SENDGRID_CLIENT_TEMPLATE_ID!,
        dynamicTemplateData: {
            name,
            email,
            phone: phone || 'Not provided',
            inquiryType,
            message,
        },
        });

        // 2. Notification to the firm
        await sgMail.send({
        to: 'ogbanchimaoduko@gmail.com',
        from: {
            email:'info@legalcrusaderslaw.com',
            name: 'Legal Crusaders',
        },   
        subject: `New Inquiry from ${name} (${inquiryType})`,
        replyTo: email,
        templateId: process.env.SENDGRID_FIRM_TEMPLATE_ID!,
            dynamicTemplateData: {
                name,
                email,
                phone: phone || 'Not provided',
                inquiryType,
                message,
                submittedAt,
            },
        });

        return Response.json({ success: true });

    } catch (err) {
        console.error('Contact route error:', err);
        return Response.json(
            { error: 'Failed to send your message. Please try again or call us directly.' },
            { status: 500 }
        );
    }
}