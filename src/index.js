import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './home'
import Todo from "./projects/todo-app/Todo"
import Accordion from "./projects/accordion/Accordion"
import Carousel from "./projects/carousel/Carousel"
import Calculator from './projects/calculator/Calculator';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="todo-app" element={<Todo />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);