import React from 'react'

import Card from './Card'
import QuestionPanel from './QuestionPanel'

const questions = {
    0: 'sex',
    1: 'age',
    2: 'stage',
    3: 'grade',
    4: 'diagnosed',
};

class SurveyPage extends React.Component {
    state = { activeQuestion: 'sex' }

    switchQuestion = (nextQuestion: string) => {
        this.setState({ activeQuestion: nextQuestion })
    }

    render () {
        const { activeQuestion } = this.state
        return (
            <div>
                <Card switchQuestion={this.switchQuestion} />
                <QuestionPanel activeQuestion={activeQuestion} />
            </div>
        )
    }
}

export default SurveyPage
