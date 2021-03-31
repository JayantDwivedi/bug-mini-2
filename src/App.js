import "./App.css";
// import Notfound from "./Compoments/Notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header
import Header from "./Compoments/Header";
import Home from "./Compoments/Home";
import Signin from "./Compoments/Signin";
import Signup from "./Compoments/Signup";

// importing side panel
// import Sidepanel from "./Pages/Sidepanel";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="*" component={Notfound} /> */}
        </Switch>

        {/* <Sidepanel /> */}
      </div>
    </Router>
  );
}

export default App;
