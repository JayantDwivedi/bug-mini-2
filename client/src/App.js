import "./App.css";
// import Notfound from "./Compoments/Notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header
import Header from "./Compoments/Header";
import Home from "./Compoments/Home";
import Viewissue from "./Compoments/Viewissue";
import Createissue from "./Compoments/Createissue";

// importing side panel
// import Sidepanel from "./Pages/Sidepanel";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewissue" exact component={Viewissue} />
          <Route path="/Createissue" exact component={Createissue} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>
        {/* <Sidepanel /> */}
      </div>
    </Router>
  );
}

export default App;
