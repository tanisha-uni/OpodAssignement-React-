import { useState, useEffect } from "react";
import { useContext } from "react";
import ArticleDataContext from "../store/articleData-context";
import "../styles/summarizer.styles.css";
import ArticleText from "./ArticleText";
import AudioArticle from "./AudioArticle";
import AudioUrlContext from "../store/audioUrl-context";

function Summarizer() {
  const [audioUrl, setAudioUrl] = useState("");
  return (
    <AudioUrlContext.Provider
      value={{
        audioUrl,
        setAudioUrl,
      }}
    >
      <div className="summarizer-wrapper">
        <ArticleText />
        <AudioArticle />
      </div>
    </AudioUrlContext.Provider>
  );
}

export default Summarizer;
