import React from "react";
import CommentList from "./components/Comments";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="container justify-content-center mt-5">
          <div className="d-flex justify-content-center flex-direction: column">
            <Route path="/" exact component={CommentList} />
            <Route path="/posts/:id" component={CommentDetail} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
