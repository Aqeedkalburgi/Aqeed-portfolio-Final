import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET() {
  try {
    const projects = await db.project.findMany({
      orderBy: { createdAt: 'desc' }
    })

    // Parse technologies from JSON string
    const formattedProjects = projects.map(project => ({
      ...project,
      technologies: JSON.parse(project.technologies)
    }))

    return NextResponse.json({
      success: true,
      projects: formattedProjects
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const project = await request.json()
    
    // Validate required fields
    if (!project.title || !project.description || !project.technologies) {
      return NextResponse.json(
        { error: 'Title, description, and technologies are required' },
        { status: 400 }
      )
    }

    // Convert technologies array to JSON string
    const technologiesJson = JSON.stringify(project.technologies)

    const newProject = await db.project.create({
      data: {
        title: project.title,
        description: project.description,
        technologies: technologiesJson,
        icon: project.icon || null,
        gradient: project.gradient || null,
        githubUrl: project.githubUrl || null,
        liveUrl: project.liveUrl || null,
        featured: project.featured || false
      }
    })

    // Parse technologies for response
    const responseProject = {
      ...newProject,
      technologies: JSON.parse(newProject.technologies)
    }

    return NextResponse.json({
      success: true,
      project: responseProject
    })

  } catch (error) {
    console.error('Project creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}