import react from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Home from "./screens/Home/index.js"
import NotFound from "./screens/NotFound/index.js"
import Popular from "./screens/Popular/index.js";
import TopRated from "./screens/TopRated/index.js"
import Detalle from "./screens/Detalle/index.js";
import Favoritos from "./screens/Favoritos/index.js"

function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Popular" component={Popular} />
      <Route path="/TopRated" component={TopRated} />
      <Route path="/Detalle/:id" component={Detalle}/> 
      <Route path="/Favoritos" component={Favoritos}/>
      <Route component={NotFound}/>
      


    </Switch>


    <Footer/>
    </>

  );
}

export default App;
