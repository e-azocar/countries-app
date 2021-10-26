import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
