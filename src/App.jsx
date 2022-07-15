import { Profile } from "./components/Profile/Profile";
import {profile} from './data'


export default function App() {

  return (
    <Profile  {...profile}/>
  )
}
