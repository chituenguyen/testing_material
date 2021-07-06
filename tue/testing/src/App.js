import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import competitions from "./Total";
import Login from "./Login";
import Signin from "./Signin";
function App() {
  return (
    <Router>
      <Route path="/" component={competitions} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/signin" component={Signin} exact></Route>
    </Router>
  );
}

export default App;
