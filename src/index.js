import React from 'react';
import ReactDOM from 'react-dom/client';
import AlohaDashboard from './components/AlohaDashboard/AlohaDashboard';
import TodoList from './components/TodoList/TodoList';
import Scene from './components/Scene/Scene';
import UserList from './components/UserList/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserList />
);