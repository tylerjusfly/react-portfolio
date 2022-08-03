import React from 'react'
import './css/project.css'
import {projects} from '../../data'
import ProjectCard from './projectCard'

export const Projects = () => {
  const projectcard = projects.map(project => {
    return(
      <ProjectCard
      key={project.id}
      summary={project.summary}
      href={project.href}
      live={project.livesite}
      image={project.image}
      stack={project.technologyStack}
      teamSize={project.teamSize}
      desc={project.desc}
      />
    )
  })

  return (
    <section className="projects--section">
        <h2>Latest Projects</h2>
        {projectcard}
    </section>
  )
}
