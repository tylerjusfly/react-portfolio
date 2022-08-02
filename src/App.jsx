import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import {profile, about} from './data'


export default function App() {

  return (
    <>
    <Profile  {...profile}/>
    <About {...about}/>
    <Projects/>
    </>
  )
}
