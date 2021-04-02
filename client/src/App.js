import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';
import Users from './pages/Users';
import Grades from './pages/Grades';
import Skills from './pages/Skills';
import UserShow from './pages/UserShow';
import SkillShow from './pages/SkillShow';
import Available from './pages/Available';
import Cities from './pages/Cities';
import CityCost from './pages/CityCost';
import FindHomes from './pages/FindHomes';

function App() {

  return (
    <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/available' component={Available} />
        <Route exact path='/cities' component={Cities} />
        <Route exact path='/homes' component={FindHomes} />
        <Route exact path='/cityCost' component={CityCost} />
{/* 
        <Route exact path='/users' component={Users} />
        <Route exact path='/users/:id' component={UserShow} />

        <Route exact path='/grades' component={Grades} />

        <Route exact path='/skills' component={Skills} />
        <Route exact path='/skills/:id' component={SkillShow} /> */}

        <Route exact path='/componentDemo' component={ComponentDemo} />
        
      </Switch>
      </Container>
   </>
  );
}

export default App;
