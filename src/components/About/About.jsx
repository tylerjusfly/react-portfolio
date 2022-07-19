import './css/about.css'

export const About = (props) => {
  
  return (
    <section className='about--section'>
        <h2 className="heading">About Me</h2>
        <div className="content">
            <p> <span className='bold--text'>Languages: </span> {props.Languages} </p>  
            <p> <span className='bold--text'>Frameworks : </span> {props.FrameWorks} </p>  
            <p> <span className='bold--text'>Tools:</span> {props.Tools}  </p>  
            <p> <span className='bold--text'>Operating System:</span> {props.OperatingSystem}  </p>  
            <p> <span className='bold--text'>Database:</span> {props.DataBase}  </p>  
            <br />

            <p> <span className="bold--text">Total Exp.</span> : 1 Years </p>             
        </div>
    </section>
  )
}
