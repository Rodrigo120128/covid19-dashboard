import React from "react"
import './App.css';
import DashBoardHome from "./pages/DashboardHome"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashBoardHome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
