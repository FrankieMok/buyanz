
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";


function App() {

  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
