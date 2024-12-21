function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const per = (points / maxPossiblePoints) * 100;

  let emoji = "🤷‍♂️"; // Default emoji if no conditions match
  if (per === 100) emoji = "🥇";
  if (per >= 80 && per < 100) emoji = "🎉";
  if (per >= 50 && per < 80) emoji = "🙃";
  if (per >= 0 && per < 50) emoji = "🤨";
  if (per === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        {emoji}
        you scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(per)}%)
      </p>
      <p className="highscore">{`highscore: ${highscore} points`}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        restart quiz
      </button>
    </>
  );
}
export default FinishScreen;
