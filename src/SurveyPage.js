 import React from 'react'

import Card from './Card'
import CourageVoice from './CourageVoice'
import QuestionDrawer from './QuestionDrawer'
import Faq from './Faq'

const questions = {
    0: 'sex',
    1: 'age',
    2: 'stage',
    3: 'grade',
    4: 'diagnosed',
}

class SurveyPage extends React.Component {
    state = { activeQuestion: 'sex' }

    switchQuestion = (nextQuestion: string) => {
        this.setState({ activeQuestion: nextQuestion })
    }

    render () {
        const { activeQuestion } = this.state
        return (
            <div className="survey-page">
                <Card switchQuestion={this.switchQuestion} />
                <QuestionDrawer
                    age={77}
                    diagnosed="Jan 2016"
                    grade="differentiated"
                    sex="female"
                    stage="3"
                    switchQuestion={this.switchQuestion}
                />
                <Faq />
                <CourageVoice />
            </div>
        )
    }
}

export default SurveyPage
