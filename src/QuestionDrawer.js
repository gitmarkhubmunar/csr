import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'

import ButtonSurvey from './ButtonSurvey'
import CancerTypes from './data/CancerTypes'
import QuestionAge from './QuestionAge'
import QuestionCustom from './QuestionCustom'
import QuestionDiagnosed from './QuestionDiagnosed'
import QuestionGrade from './QuestionGrade'
import QuestionSex from './QuestionSex'
import QuestionStage from './QuestionStage'

class QuestionDrawer extends React.Component {
    render () {
        const { changeValue, selectedCancerType, userData } = this.props
        const { age, diagnosed, grade, sex, stage } = userData
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = _.get(selectedCancer, 'colors.[0]', 'black')
        const extraVariables = _.get(selectedCancer, 'extraVariables', null)

        // Customize standard questions based on each cancer type’s 'showStandardVariables' key;
        // if unavailable, show the default set.
        const defaultStandardVariables = {
            age: true,
            diagnosis: true,
            grade: true,
            sex: true,
            stage: true,
        }
        const shouldShow = _.get(selectedCancer, 'showStandardVariables', defaultStandardVariables)

        return (
            <div className="question-drawer variables content-container">
                {shouldShow['sex'] &&
                    <QuestionSex
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                        sex={sex}
                    />
                }
                {shouldShow['age'] &&
                    <QuestionAge
                        age={age}
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                    />
                }
                {shouldShow['stage'] &&
                    <QuestionStage
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                        stage={stage}
                    />
                }
                {shouldShow['grade'] &&
                    <QuestionGrade
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                        grade={grade}
                    />
                }
                {shouldShow['diagnosed'] &&
                    <QuestionDiagnosed
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                        diagnosed={diagnosed}
                    />
                }
                {extraVariables && extraVariables.map((extraVariable, e) => (
                    <QuestionCustom
                        changeValue={changeValue}
                        className="variable-row"
                        color={color}
                        key={e}
                        userData={userData}
                        variable={extraVariable}
                    />
                ))}
            </div>
        )
    }
}

export default QuestionDrawer
