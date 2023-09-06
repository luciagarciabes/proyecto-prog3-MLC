import react from "react"
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Home from "./screens/Home/index.js"
import NotFound from "./screens/NotFound/index.js"
import Popular from "./screens/Popular/index.js";

function App() {
  return (
    <>
    <Header/>

    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Popular" component={Popular} />
      <Route component={NotFound}/>
      


    </Switch>


    <Footer/>
    </>

  );
}

export default App;
