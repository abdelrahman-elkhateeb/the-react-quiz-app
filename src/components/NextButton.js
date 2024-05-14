function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          next
        </button>
      </div>
    );
  if (index === numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          finish
        </button>
      </div>
    );
}

export default NextButton;
