import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./counter/CounterPage";
import UserList from "./UserList/UserList";
import TodoList from "./TodoList/TodoList";
import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to='counter'>Go to counter component</Link></li>
        <li><Link to='users'>Go to UserList component</Link></li>
        <li><Link to='todo'>Go to TodoList component</Link></li>
        <li><Link to='aloha'>Go to Aloha component</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element = {<Home />} />
          <Route path="/counter" element = {<Counter />} />
          <Route path="/users" element = {<UserList />} />
          <Route path="/todo" element = {<TodoList />} />
          <Route path="/aloha" element = {<AlohaDashboard />} />
          <Route path="/*" element = {<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
