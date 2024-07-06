import s from "./Options.module.css";

const Options = ({ onFeedback, total, reset }) => {
  return (
    <div className={s.buttonContainer}>
      <button className={s.button} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={s.button} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
