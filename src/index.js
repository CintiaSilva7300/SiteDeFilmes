import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
