import "../styles/articleText.styles.css";
import { useContext } from "react";
import ArticleDataContext from "../store/articleData-context";
import AudioUrlContext from "../store/audioUrl-context";
import apiAuthToken from "../apiAuthToken";

const ArticleText = () => {
  const { articleSummarizedText, setArticleSummarizedText } =
    useContext(ArticleDataContext);

  const { setAudioUrl } = useContext(AudioUrlContext);

  const onChangeHandler = (event) => {
    setArticleSummarizedText(event.target.value);
  };

  const fetchAudioHandler = () => {
    // console.log("fetch audio handler executed");
    const form = new FormData();
    form.append("article_text", '["' + articleSummarizedText + '"]');
    form.append("language", "english");
    form.append("container_id", "1");

    fetch("https://staging.opod.in/api/pods/preview/audio/", {
      method: "POST",
      headers: {
        Authorization: apiAuthToken,
      },
      body: form,
    })
      .then((res) => res.json())
      .then((json) => setAudioUrl(json["s3_audio_url"]));
  };

  return (
    <div className="article-text-wrapper">
      <div className="title-text">Summarized Article Text</div>
      <textarea
        value={articleSummarizedText}
        onChange={onChangeHandler}
        placeholder="Article Text Here"
        className="article-text-area"
      />
      <div className="button-wrapper">
        <button
          className="fetch-audio-button"
          type="button"
          onClick={fetchAudioHandler}
        >
          Fetch Audio
        </button>
      </div>
    </div>
  );
};

export default ArticleText;
