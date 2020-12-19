import React from "react"
import './App.css';
import DashBoardHome from "./pages/DashboardHome"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import {ThemeProvider} from "./context/theme"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <Route path="/" component={DashBoardHome}/>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
