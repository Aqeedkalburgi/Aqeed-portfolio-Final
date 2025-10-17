import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const contactMessage = await db.contactMessage.create({
      data: {
        name,
        email,
        message
      }
    })

    // Generate acknowledgment using AI
    const zai = await ZAI.create()
    
    const response = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a professional assistant for a portfolio website. Generate a brief, professional acknowledgment message for a contact form submission.'
        },
        {
          role: 'user',
          content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nGenerate a professional acknowledgment message.`
        }
      ],
      max_tokens: 100,
      temperature: 0.7
    })

    const acknowledgment = response.choices[0]?.message?.content || 'Thank you for your message! I\'ll get back to you soon.'

    console.log('Contact submission saved:', contactMessage)

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      acknowledgment,
      id: contactMessage.id
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10 // Return only last 10 messages for privacy
    })

    return NextResponse.json({
      success: true,
      messages
    })
  } catch (error) {
    console.error('Error fetching contact messages:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}