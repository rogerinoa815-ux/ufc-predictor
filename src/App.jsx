import Navbar from "./Navbar";
import { fighters } from "./data";
import Hero from "./Hero";
import FightCard from "./FightCards";
import Prediction from "./Prediction";

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero f= {fighters.topuria}/>
      <FightCard />
      <Prediction />
      
    </div>
  )
}