import './css/profile.css'
import ProfileImg from '../../assets/images/profile.jpg'
import { AiFillLinkedin, AiFillGithub ,AiFillTwitterCircle,} from 'react-icons/ai'

export const Profile = (props) => {

  return (
    <header className="header">               
        <img className="profile-image" src={ProfileImg} alt="Momoh Taiwo" />
        <div className="profile-content">
            <h1 className="fullname">{props[0].Fullname}</h1>
            <h2 className="desc">{props[0].occupation}</h2>   
            <ul className="social-list-inline">
                <li><a href={props[0].github} target='_blank'><AiFillGithub/> </a></li>                   
                <li><a href={props[0].twitter} target='_blank'><AiFillTwitterCircle/> </a></li>
                <li><a href={props[0].linkedIn} target='_blank'><AiFillLinkedin/> </a></li>                  
            </ul> 
        </div>
</header>
  )
}
