import Options from "./Options";
function Question({ question, dispatch, answer }) {
  if (!question) {
    return null; // or display a loading spinner if data isn't ready
  }
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
