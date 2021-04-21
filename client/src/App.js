import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import NoteState from "./context/note/NoteState";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <AuthState>
      <NoteState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </NoteState>
    </AuthState>
  );
}

export default App;
