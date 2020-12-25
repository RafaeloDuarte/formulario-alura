import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './containers/Login'
import Cadastro from './containers/Cadastro'
import Home from '../src/containers/Home'
import Produto from "../src/containers/Produto";
import store from "./store";
import base from "../src/containers/HOC/Base";
import './App.css'
import noAuth from './containers/HOC/NoAuth'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={base(Home)} />
            <Route path='/produto' exact={true} component={base(Produto)} />
            
            <Route path='/login' component={noAuth(Login)} />
            <Route path='/cadastro' component={noAuth(Cadastro)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App