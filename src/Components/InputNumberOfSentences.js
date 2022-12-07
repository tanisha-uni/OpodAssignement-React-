import "../styles/inputNumberOfSentences.styles.css";
import { useState } from "react";

const InputNumberOfSentences = (props) => {
  const possibleNumberOfSentences = [4, 6, 8];
  const [selectedNum, setSelectedNum] = useState(0);
  const btnClass4 = selectedNum == 4 ? "selected-button" : "unselected-button";
  const btnClass6 = selectedNum == 6 ? "selected-button" : "unselected-button";
  const btnClass8 = selectedNum == 8 ? "selected-button" : "unselected-button";

  return (
    <div>
      <p className="title">
        Number of sentences
        <span className="select-option-text"> (Please select one option)</span>
      </p>
      <div className="button-wrapper">
        <button
          type="button"
          d
          class="unselected-button"
          onClick={() => {
            props.onSubmitNumber(4);
            setSelectedNum(4);
          }}
          className={btnClass4}
        >
          4 sentences
        </button>
        <button
          type="button"
          class="unselected-button"
          onClick={() => {
            props.onSubmitNumber(6);
            setSelectedNum(6);
          }}
          className={btnClass6}
        >
          6 sentences
        </button>
        <button
          type="button"
          class="unselected-button"
          onClick={() => {
            props.onSubmitNumber(8);
            setSelectedNum(8);
          }}
          className={btnClass8}
        >
          8 sentences
        </button>

        {/* {possibleNumberOfSentences.map((num) => (
          <button
            type="button"
            class="unselected-button"
            key={num}
            onClick={() => {
              props.onSubmitNumber(num);
            }}
          >
            {num} sentences
          </button>
        ))} */}
      </div>
    </div>
  );
};

export default InputNumberOfSentences;
