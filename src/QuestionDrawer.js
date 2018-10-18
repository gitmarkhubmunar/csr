import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import ReactSlider from 'react-slider'

import ButtonSurvey from './ButtonSurvey'
import CancerTypes from './data/CancerTypes'
import QuestionAge from './QuestionAge'
import QuestionDiagnosed from './QuestionDiagnosed'
import QuestionGrade from './QuestionGrade'
import QuestionSex from './QuestionSex'
import QuestionStage from './QuestionStage'

class QuestionDrawer extends React.Component {
    render () {
        const { age, changeValue, diagnosed, grade, selectedCancerType, sex, stage } = this.props
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = selectedCancer.colors[0]
        return (
            <div className="question-drawer variables">
                <QuestionSex
                    changeValue={changeValue}
                    className="variable-row"
                    color={color}
                    sex={sex}
                />
                <QuestionAge
                    age={age}
                    changeValue={changeValue}
                    className="variable-row"
                    color={color}
                />
                <QuestionStage
                    changeValue={changeValue}
                    className="variable-row"
                    color={color}
                    stage={stage}
                />
                <QuestionGrade
                    changeValue={changeValue}
                    className="variable-row"
                    color={color}
                    grade={grade}
                />
                <QuestionDiagnosed
                    changeValue={changeValue}
                    className="variable-row"
                    color={color}
                    diagnosed={diagnosed}
                />
            </div>
        )
    }
}

export default QuestionDrawer
