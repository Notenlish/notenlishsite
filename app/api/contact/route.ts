import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
        const { name, email, title, message } = await req.json();
        if (!name || !email || !title || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }
        
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
        }

        const content = `**Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Title:** ${title}\n**Message:**\n${message}`;
        const discordRes = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content }),
        });
        if (!discordRes.ok) {
            return NextResponse.json({ error: 'Failed to send to Discord' }, { status: 500 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in contact form submission:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
} 