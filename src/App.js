import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Hero, Recipes, Welcome, Works, Meals, Footer} from './components';
import {Home} from './pages/Home/Home';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Works/>
      <Welcome/>
      <Recipes/>
      <Meals/>
      <Footer/>
    </Router>
  );
}

export default App;
