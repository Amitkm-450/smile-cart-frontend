import Product from "components/Product/index";
import ProductList from "components/ProductList/index";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import PageNotFound from "./components/common/PageNotFound";

const App = () => (
  <Switch>
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
