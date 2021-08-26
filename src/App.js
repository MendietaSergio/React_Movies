import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header  from './components/Header'
import  {useState } from 'react'
import Home from './pages/Home'
import Edit from './pages/Edit'
import Create from './pages/Create'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import AuthProvider from './components/AuthProvider'
import './App.css';

//PARA PODER LIMITAR EL PAGINADO DE INVITADOS Y USUARIOS.
const { PrivateRoute, PublicRoute } = AuthProvider;//destructurar componentes


function App() {
  //estado para que este de manera global y este de manera nulo.
  const [ token, setToken ] = useState(null);
  return (
    <BrowserRouter>
    <Header />
      <div className="container main-container"><Switch>
        <Route path="/" exact>
          <PrivateRoute token={token} setToken={setToken}>
          <Home/>
          </PrivateRoute>
        </Route>
        <Route path="/signin" exact>
          <PublicRoute token={token} setToken={setToken}>
          <Signin setToken={setToken}/>{/*paso el valor actualizado*/}
          </PublicRoute>
        </Route>
        <Route path="/create" exact>
          <PrivateRoute token={token} setToken={setToken}>
          <Create/>
          </PrivateRoute>
        </Route>
        <Route path="/edit/:id" exact>
          <PrivateRoute token={token} setToken={setToken}>
          <Edit/>
          </PrivateRoute>
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
