import React from "react";
import Yazılar from "./components/Yazılar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CommentDetail from "./components/YazıDetay";
import YazıEkle from "./components/YazıEkle";
import YazıDüzenle from "./components/YazıDüzenle";


function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="container justify-content-center mt-5">
          <div className="d-flex justify-content-center flex-direction: column">
            <Route path="/" exact component={Yazılar} />
            <Route path="/posts/:id" exact component={CommentDetail} />
            <Route path="/yazıekle" component={YazıEkle}></Route>
            <Route path="/posts/:id/edit" exact component={YazıDüzenle}></Route>
          
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
