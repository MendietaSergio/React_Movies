import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header  from './components/Header'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Create from './pages/Create'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="container main-container"><Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/signin" exact>
          <Signin/>
        </Route>
        <Route path="/create" exact>
          <Create/>
        </Route>
        <Route path="/edit/:id" exact>
          <Edit/>
        </Route>
        <Route path="/*" exact>
          <NotFound/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
