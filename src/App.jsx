import Product from "components/Product/index";
import ProductList from "components/ProductList/index";
import { Route, Switch, Redirect } from "react-router-dom";

import PageNotFound from "./components/common/PageNotFound";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/products/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
