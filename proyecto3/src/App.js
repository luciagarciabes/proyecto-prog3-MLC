import react from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Home from "./screens/Home/Home.js"
import NotFound from "./screens/NotFound/NotFound.js"

function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound}/>
      




    </Switch>


    <Footer/>
    </>

  );
}

export default App;
