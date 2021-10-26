import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";

import "./App.scss";
import Layout from "./components/Layout/Layout";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Layout>
					<Route exact path="/" component={Home} />
					<Route path="/country/:code" component={Detail} />
				</Layout>

				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
