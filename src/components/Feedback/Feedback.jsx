import s from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <ul className={s.feedbackList}>
      <li className={s.feedbackItem}> Good: {feedback.good}</li>
      <li className={s.feedbackItem}> Neutral: {feedback.neutral}</li>
      <li className={s.feedbackItem}>Bad: {feedback.bad}</li>
      <li className={s.feedbackItem}> Total: {total} </li>
      <li className={s.feedbackItem}> Positive: {positive} </li>
    </ul>
  );
};

export default Feedback;
