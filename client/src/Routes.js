import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import "./styles.css";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import ContactUs from "./core/ContactForm";
import Cart from "./core/Cart";
const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute
            exact
            path="/user/dashboard"
            component={UserDashboard}
          />
          <PrivateRoute exact path="/user/contactus" component={ContactUs} />
          <PrivateRoute
            exact
            path="/user/user/contactus"
            component={ContactUs}
          />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute
            exact
            path="/admin/create/category"
            component={AddCategory}
          />
          <AdminRoute
            exact
            path="/admin/categories"
            component={ManageCategories}
          />
          <AdminRoute
            exact
            path="/admin/create/product"
            component={AddProduct}
          />
          <AdminRoute exact path="/admin/products" component={ManageProducts} />
          <AdminRoute
            exact
            path="/admin/product/update/:productId"
            component={UpdateProduct}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;
