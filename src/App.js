import React from 'react';
import blog from './blog';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title={blog.title} author={blog.author} />
      <main>
        <About about={blog.about} />
        <ArticleList articles={blog.articles} />
      </main>
    </div>
  );
}

export default App;
