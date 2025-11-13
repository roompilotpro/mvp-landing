import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    const filePath = path.join(dataDir, 'leads.json');

    // Read existing leads or create empty array
    let leads: Array<{ email: string; timestamp: string; userAgent?: string }> = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      leads = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet
    }

    // Check if email already exists
    const emailExists = leads.some(lead => lead.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 200 }
      );
    }

    // Add new lead
    leads.push({
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
    });

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json(
      { message: 'Email successfully registered' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
