
import Homepage from "./pages/homepage/Homepage";

import Settings from "./pages/settings/Settings";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
