import "../styles/inputArticleLink.styles.css";

const InputArticleLink = (props) => {
  const onChangeHandler = (event) => {
    props.onInputChange(event.target.value);
  };
  return (
    <div className="article-link-wrapper">
      <label className="article-link-text">Article Link</label>
      <input
        type="text"
        onChange={onChangeHandler}
        className="article-link-input"
        placeholder="Article link here"
      />
    </div>
  );
};

export default InputArticleLink;
