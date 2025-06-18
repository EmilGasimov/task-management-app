import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import './styles/App.css';
// import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Task Management Application</h1>
        <Switch>
          <Route path="/" exact component={TaskList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;