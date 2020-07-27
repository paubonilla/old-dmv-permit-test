import React, { Component } from 'react'
import { QuizData } from './QuizData'
import { QuizContentStyle, QuizWrapper, Result, Buttons } from '../styled'
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
                <Result>
                    <h1>Your final score is {this.state.score} point&#40;s&#41;</h1>
                    <p>Correct Answers</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className="results"
                                key={index}
                            >
                                <p><b>Question: </b>{item.question}</p>
                                <p><b>Your answer: </b>{userAnswer}</p>
                                <p className="correct-answer"><b>Correct answer: </b>{item.answer}</p>
                            </li>
                        ))}
                    </ul>
                </Result>
            )
        }

        return (
            <QuizContentStyle>
                <QuizWrapper>
                    <h2>{question}</h2>
                    <span>{`Question ${currentIndex + 1} of ${QuizData.length}`}</span>

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
                    <Buttons>
                        {
                            currentIndex < QuizData.length - 1 &&
                            <button
                                className="button"
                                disabled={this.state.disabled}
                                onClick={this.nextQuestionHandler}
                            >
                                Next Question
                            </button>
                        }
                        {
                            currentIndex === QuizData.length - 1 &&
                            <button
                                className="button"
                                onClick={this.finishHandler}
                                disabled={this.state.disabled}
                            >
                                Finish
                            </button>
                        }
                    </Buttons>
                </QuizWrapper>
            </QuizContentStyle>
        )
    }
}
