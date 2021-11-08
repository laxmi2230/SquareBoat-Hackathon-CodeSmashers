import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { NotFound } from "./Components/NotFound";
import { AddProducts } from "./Components/AddProducts";
import { Cart } from "./Components/Cart";
// import {About} from "./Components/About";
const App = () => {
  const [hideFooter, setHideFooter] = useState(1);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/login" component={Login} />
          <Route path="/add-products" component={AddProducts} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <div onClick={() => setHideFooter((prevState) => 1 - prevState)}>
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default App;
