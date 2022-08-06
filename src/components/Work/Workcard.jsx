import React from 'react'

export default function Workcard(props) {
  return (
    <div className='parent--div'>
    <div className="job--title">
        <h3>{props.position} - <span>{props.company} ({props.startDate} - {props.endDate})</span></h3>
    </div>
    <div className="details">
        {props.details}
        {props.extra &&  <p> <br />{props.extra}</p>}
    </div>
    <div className="tech--used">
    Technology used: {props.technology} 
    </div>
    </div>

  )
}
