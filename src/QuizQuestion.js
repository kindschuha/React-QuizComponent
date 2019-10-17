import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText){
        let incorrectAnswer = buttonText !== this.props.quiz_question.answer
        this.setState((state) => ({incorrectAnswer}))

        if(!incorrectAnswer){
            this.props.showNextQuestionHandler();
            
        }
    }

    render(){
        return(
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer_options.map((option, index) => 
                    <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={option} />)}
                    
                </ul>
                </section>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
            </main>
        );
    }
}

export default QuizQuestion;