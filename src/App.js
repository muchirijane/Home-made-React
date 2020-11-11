import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Hero, Footer} from './components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipe from './pages/Recipe/Recipe';
import Order from './pages/Order/Order';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Switch>
        <Route exact path="/" exact component={Home}/>
        <Route exact path="/about" exact component={About}/>
        <Route exact path="/recipe" exact component={Recipe}/>
        <Route exact path="/order-now" exact component={Order}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
