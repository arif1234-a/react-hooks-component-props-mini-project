import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.image} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
