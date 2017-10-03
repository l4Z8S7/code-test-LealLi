import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Question from './components/Question';
import Review from './components/Review';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      currentIndex: -1,
      answers: []
    }

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => this.setState({data: [...data]}));
  }

  handlePrev() {
    this.setState({currentIndex: this.state.currentIndex - 1});
  }

  handleNext(index, option = {}) {
    const newAnswers = [...this.state.answers.slice(0, index), option, ...this.state.answers.slice(index + 1)];
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      answers: newAnswers
    });
  }

  _getScore() {
    return this.state.answers.reduce((sum, answer) => sum + answer.score, 0);
  }

  renderComponent(index) {
    if (-1 < index < this.state.data.length) {
      return (
        <Question 
        index={this.state.currentIndex}
        totalIndex={this.state.data.length}
        question={this.state.data[index]}
        answer={this.state.answers[index]} 
        prev={this.handlePrev} 
        next={this.handleNext} 
        />
      );
    }
    if (index === this.state.data.length) {
      return (
        <Review
          answers={this.state.answers} 
          prev={this.handlePrev} 
          next={() => this.setState({currentIndex: this.state.currentIndex + 1})} 
        />);
    }
    if (index === this.state.data.length + 1) {
      return <Result score={this._getScore()} />
    }
    return (
      <Start 
      next={() => this.setState({currentIndex: this.state.currentIndex + 1})} 
      />
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderComponent(this.state.currentIndex)}
      </div>
    );
  }
}

export default App;
