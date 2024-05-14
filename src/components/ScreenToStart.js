import { type } from "@testing-library/user-event/dist/type";

function ScreenToStart({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} Question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default ScreenToStart;