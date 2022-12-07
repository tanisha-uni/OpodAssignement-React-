import { useContext, useState } from "react";
import InputNumberOfSentences from "./InputNumberOfSentences";
import InputArticleLink from "./InputArticleLink";
import ArticleDataContext from "../store/articleData-context";
import "../styles/articleDetails.styles.css";
import apiAuthToken from "../authToken";

const ArticleDetails = () => {
  const [articleLink, setArticleLink] = useState("");
  const [numOfSentences, setNumOfSentences] = useState("");
  const { setArticleSummarizedText } = useContext(ArticleDataContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const form = new FormData();
    const apiPath = "https://staging.opod.in/api/pods/tldr-text/";
    form.append("article_link", articleLink);
    form.append("sentences", numOfSentences);

    fetch(apiPath, {
      method: "POST",
      redirect: "follow",
      headers: {
        Authorization: apiAuthToken,
      },
      body: form,
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        const articleText = json["article_text"].reduce(
          (prevSentence, currentSentence) => {
            return prevSentence + currentSentence;
          }
        );
        setArticleSummarizedText(articleText);
        // console.log(articleText);
      });
  };

  const onSubmitNumberHandler = (inputNumOfSentences) => {
    setNumOfSentences(inputNumOfSentences);
  };
  const onInputChangeHandler = (enteredArticleLink) => {
    setArticleLink(enteredArticleLink);
  };

  return (
    <div className="article-details-wrapper">
      <div className="article-details-text">Article Details</div>
      <hr className="horizontal-solid-line" />
      <form onSubmit={onSubmitHandler} className="form">
        <InputNumberOfSentences onSubmitNumber={onSubmitNumberHandler} />
        <InputArticleLink onInputChange={onInputChangeHandler} />
        <button className="summarize-button">Summarize</button>
      </form>
    </div>
  );
};

export default ArticleDetails;
