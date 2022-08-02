import React from 'react'

export default function ProjectCard(props) {

  return (
    <>
           <div className="content">
            <div className="item--featured">
           
            <p className="summary">{props.summary}</p>
            <a className="featured--image" href={props.href} target="_blank">
                <img src={props.image} alt="projectimage" />
            </a>
            </div>
            <div className="description">
                <p><b>Technology Stack : </b> {props.stack} </p>
                <p> <b>Team Size : </b> {props.teamSize}</p>
                 <p className='desc'> {props.desc} </p>
            <button>
            <a className="btn-secondary" href={props.live} target="_blank"> Check Out The project</a> 
            </button>
            </div>
            <hr />
        </div>
    </>
  )
}
