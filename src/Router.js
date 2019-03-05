import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TForm from './TForm';
import EditForm from './EditForm';
import Users from './Users';

const AppRouter = () => (
  <Router basename="/mosin/react">
  <div>
    <Route path='/' exact component={TForm} />
    <Route path='/users' exact component={Users} />
    <Route path='/users/edit/:id' component={EditForm} />
  </div>
</Router>
);

export default AppRouter;

