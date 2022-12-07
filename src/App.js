import "./App.css";
import { useState } from "react";
import ArticleDetails from "./Components/ArticleDetails";
import Summarizer from "./Components/Summarizer";
import ArticleDataContext from "./store/articleData-context";

const App = () => {
  const [articleSummarizedText, setArticleSummarizedText] = useState("");
  return (
    <ArticleDataContext.Provider
      value={{
        articleSummarizedText,
        setArticleSummarizedText,
      }}
    >
      <div>
        <ArticleDetails />
        <Summarizer />
      </div>
    </ArticleDataContext.Provider>
  );
};

export default App;
