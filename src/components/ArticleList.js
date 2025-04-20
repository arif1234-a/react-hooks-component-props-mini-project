import React from "react";
import Article from "./Article";

function ArticleList({ posts=[] }) {
  return (
    <main>
      {posts.map((article, index) => (
        <Article
          key={index}
          title={posts.title}
          date={posts.date}
          preview={posts.preview}
        />
      ))}
    </main>
  );
}
export default ArticleList;
