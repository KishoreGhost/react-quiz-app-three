import React, { Component } from "react";
import "./QuizCompo.css";
import { Link } from "react-router-dom";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNo: 0,
      score: 0,
      attempted: 0,
    };
  }

  handleOptionClick = (selectedOption) => {
    const { questions } = this.props;
    const { questionNo } = this.state;
    const { score } = this.state;
    const { attempted } = this.state;

    if (selectedOption === questions[questionNo].answer) {
      alert("You are Right!");
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    } else {
      alert("You are Wrong!");
    }
    this.next();
    this.setState((prevState) => ({ attempted: prevState.attempted + 1 }));
  };

  next = () => {
    const questionNo = this.state.questionNo + 1;
    if (questionNo < 15) {
      this.setState({ questionNo: questionNo });
    }
  };

  previous = () => {
    const questionNo = this.state.questionNo - 1;
    if (questionNo >= 0) {
      this.setState({ questionNo: questionNo });
    }
  };

  quit = () => {
    const confirmQuit = window.confirm("Are you sure you want to quit?");
    if (confirmQuit) {
      alert("You quit the quiz.");
    }
  };

  render() {
    const { questionNo } = this.state;
    const { questions } = this.props;

    return (
      <div className="quiz">
        <div className="border">
          <h1>Question</h1>

          <p>{questionNo + 1} of 15</p>
          <h4>{questions[questionNo].question}</h4>
          <div className="options-div">
            <button
              className="buttons"
              onClick={() =>
                this.handleOptionClick(questions[questionNo].optionA)
              }
            >
              {questions[questionNo].optionA}
            </button>
            <button
              className="buttons"
              onClick={() =>
                this.handleOptionClick(questions[questionNo].optionB)
              }
            >
              {questions[questionNo].optionB}
            </button>
            <button
              className="buttons"
              onClick={() =>
                this.handleOptionClick(questions[questionNo].optionC)
              }
            >
              {questions[questionNo].optionC}
            </button>
            <button
              className="buttons"
              onClick={() =>
                this.handleOptionClick(questions[questionNo].optionD)
              }
            >
              {questions[questionNo].optionD}
            </button>
          </div>
        </div>
        <div className="fun">
          <button className="buttons" onClick={this.previous}>
            Previous
          </button>
          <button className="buttons" onClick={this.next}>
            Next
          </button>
          <button className="buttons" onClick={this.quit}>
            Quit
          </button>
          <Link to="/result">
            <button className="buttons">Finish</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Quiz;
