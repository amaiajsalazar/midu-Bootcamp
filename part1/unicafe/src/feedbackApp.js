import './App.css';
import { useState } from 'react';

const INITIAL_FEEDBACK_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
};
const Title = () => {
  return (
    <h1>Give Feedback</h1>
  );
};


const NotFeedbackYet = () => {
  return (
    <p>No feedback given</p>
  );
};

const GOOD_VAL = 1;
const BAD_VAL = -1;


const App = () => {

  const [feedbackCount, setFeedback] = useState(INITIAL_FEEDBACK_STATE);
  const [clicks, setClicks] = useState([]);

  const handleClick = (action) => () => {
    if (action === 0) {
      const newStateValues = {
        ...feedbackCount,
        good: feedbackCount.good + 1
      };
      setFeedback(newStateValues);
      setClicks((prevClicks) => [...prevClicks, 'G']);

    } else if (action === 1) {
      const newStateValues = {
        ...feedbackCount,
        neutral: feedbackCount.neutral + 1
      };
      setFeedback(newStateValues);
      setClicks((prevClicks) => [...prevClicks, 'N']);

    } else {
      const newStateValues = {
        ...feedbackCount,
        bad: feedbackCount.bad + 1
      };
      setFeedback(newStateValues);
      setClicks((prevClicks) => [...prevClicks, 'B']);

    }
    setClicks(clicks + 1);
  };

  const FeedbackButtons = () => {
    return (
      <div>
        <button onClick={handleClick(0)}>Good</button>
        <button onClick={handleClick(1)}>Neutral</button>
        <button onClick={handleClick(2)}>Bad</button>
      </div>
    );
  };

  const StatisticsLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    );
  };

  const Statistics = () => {
    return (
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' value={feedbackCount.good} />
            <StatisticsLine text='neutral' value={feedbackCount.neutral} />
            <StatisticsLine text='bad' value={feedbackCount.bad} />
            <tr>
              <td>average:</td>
              <td>{((feedbackCount.good * GOOD_VAL) + (feedbackCount.bad * BAD_VAL)) / clicks.length}</td>
            </tr>
            <tr>
              <td>positive:</td>
              <td>{(feedbackCount.good / clicks.length) * 100}%</td>
            </tr>
            <tr>
              <td>Total feedback:</td>
              <td>{clicks.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <Title />
      <FeedbackButtons />
      <h2>Statistics</h2>
      {clicks.length === 0 ? <NotFeedbackYet /> : <Statistics />}
    </div>
  );
};



export default App;
