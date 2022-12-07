import "../styles/audioArticle.styles.css";
import { useContext } from "react";
import ArticleDataContext from "../store/articleData-context";
import AudioUrlContext from "../store/audioUrl-context";

const AudioArticle = () => {
  const { articleSummarizedText, setArticleSummarizedText } =
    useContext(ArticleDataContext);

  const onChangeHandler = (event) => {
    setArticleSummarizedText(event.target.value);
  };

  const { audioUrl } = useContext(AudioUrlContext);

  return (
    <div className="audio-article-wrapper">
      <div className="title-text">Audio Article</div>
      <textarea
        value={articleSummarizedText}
        onChange={onChangeHandler}
        placeholder="Text for audio here"
        className="audio-text-area"
      />
      <audio controls="controls" src={audioUrl} autoplay></audio>
    </div>
  );
};

export default AudioArticle;
