import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import SingleRoom from "./pages/SingleRoom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/${slug}" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
