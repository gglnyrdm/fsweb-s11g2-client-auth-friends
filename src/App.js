import React from "react";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendList";
import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute path="/friends-list/:id">
              <Friend />
            </PrivateRoute>
            <PrivateRoute path="/friends-list">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/add-friend">
              <AddFriend />
            </PrivateRoute>
            <PrivateRoute path="/">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/friends-add">{/* // TODO */}</PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
