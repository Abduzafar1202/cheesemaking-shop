import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/hero";
import Footer from "./components/Footer"

const App = () => {
  const [state, setState] = useState( 0);
  return(
    <div>
      <Header/>
      <Hero state={state} setState={setState}/>
      <Footer/>
   
    </div>
  )
}
 export default App