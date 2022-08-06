import React from 'react'
import './css/work.css'
import Workcard from './Workcard'
import {experience} from '../../data'

export default function Work() {
    const workCard = experience.map(exp => {
        return (
            <Workcard
            key = {exp.id}
            position = {exp.title}
            company = {exp.company}
            startDate = {exp.start}
            endDate = {exp.end}
            technology = {exp.Technology}
            details = {exp.details}
            extra = {exp.extra}
            />
        )
    })
  return (
    <section className="work--experience">
        <h2>Work Experience</h2>
        {workCard}
    </section>
  )
}
