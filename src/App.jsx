import { About } from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import {profile, about} from './data'


export default function App() {

  return (
    <>
    <Profile  {...profile}/>
    <About {...about}/>
    </>
  )
}
