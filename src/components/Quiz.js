import React, { Component } from 'react'
import { QuizData } from './QuizData'
import { QuizContentStyle, QuizWrapper } from '../styled'
export default class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false, // true if it is the last question
            score: 0,
            disabled: true
        }
    }

    loadQuiz = () => {
        const { currentIndex } = this.state;
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        })
    }

    nextQuestionHandler = () => {
        const { userAnswer, answer, score } = this.state
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevState.currentIndex) {
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            })
        }
    }

    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            })
        }
    }

    render() {
        const { question, options, currentIndex, userAnswer, quizEnd } = this.state

        if (quizEnd) {
            return (
                <div>
                    <h1>The final score is {this.state.score} points</h1>
                    <p>The correct answers</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className="options"
                                key={index}
                            >{item.answer}</li>
                        ))}
                    </ul>
                </div>
            )
        }

        return (
            <QuizContentStyle>
                <QuizWrapper>
                    <h2>{question}</h2>

                    {
                        options.map(option =>
                            <p
                                key={option.id}
                                className={`options ${userAnswer === option ? 'selected' : null}`}
                                onClick={() => this.checkAnswer(option)}
                            >
                                {option}
                            </p>
                        )
                    }
                    <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>
                    {currentIndex < QuizData - 1 &&
                        <button
                            disabled={this.state.disabled}
                            onClick={this.nextQuestionHandler}
                        >
                            Next Question
                        </button>}
                    {
                        currentIndex === QuizData.length - 1 &&
                        <button
                            onClick={this.state.finishHandler}
                            disabled={this.state.disabled}
                        >
                            Finish
                        </button>
                    }
                </QuizWrapper>
            </QuizContentStyle>
        )
    }
}
