import _ from 'lodash'
import React from 'react'
import ReactSlider from 'react-slider'

class QuestionAge extends React.Component {
    componentWillMount () {
        this.setState({
            nextAge: _.toNumber(this.props.age),
        })
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            nextAge: _.toNumber(nextProps.age),
        })
    }

    render () {
        const { age, changeValue, className, color } = this.props
        const { nextAge } = this.state
        return (
            <div className={className}>
                <div className="icon-label">
                    <div>
                        <object className={age === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/age.svg" type="image/svg+xml" />
                    </div>
                    <div className={age === null ? 'variable-name' : 'variable-name answered'}>age</div>
                </div>
                <div className="input-area">
                    <div className="slider-container">
                        <ReactSlider
                            className="horizontal-slider bar"
                            max={92}
                            min={18}
                            onAfterChange={(value) => changeValue('age', value)}
                            onChange={(value) => this.setState({ nextAge: value })}
                            value={nextAge}
                        >
                            <div>{nextAge}</div>
                        </ReactSlider>
                        <div className="slider-ticks">
                            <div className="slider-tick-button" style={{ left: 0 }} onClick={() => changeValue('diagnosed', 0)}>18</div>
                            <div className="slider-tick-button" style={{ right: 0 }} onClick={() => changeValue('diagnosed', 24)}>92</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

QuestionAge.defaultProps = {
    color: 'black',
}

export default QuestionAge
