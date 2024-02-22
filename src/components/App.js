import React from "react";
import blogData from "../data/blog";
import Header from "./header"
import About from "./about"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts= {blogData.posts} title={blogData.posts.title} date= {blogData.posts.date} preview={blogData.posts.preview}  />
      
    </div>
  );
}

export default App;
