import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index'; 
import Houses from './pages/Houses'; 
// import Characters from './pages/Characters'; 

export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/casas/:house" component={Houses}/>
          {/* <Route exact path="/casas/personagens" component={Characters}/> */}
          <Route path="*" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}