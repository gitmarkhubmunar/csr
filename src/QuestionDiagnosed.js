import React from 'react'
import ReactSlider from 'react-slider'

class QuestionDiagnosed extends React.Component {
    componentWillMount () {
        this.setState({
            nextDiagnosed: this.props.diagnosed,
        })
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            nextDiagnosed: nextProps.diagnosed,
        })
    }

    render () {
        const { diagnosed, changeValue, className, color } = this.props
        const { nextDiagnosed } = this.state
        return (
            <div className={className}>
                <div className="icon-label">
                    <div>
                        <object
                            className={diagnosed === 0 ? 'variable-icon' : 'variable-icon answered'}
                            data="/assets/diagnosed.svg"
                            style={{ paddingLeft: 5 }}
                            type="image/svg+xml"
                        />
                    </div>
                    <div className={diagnosed === 0 ? 'variable-name' : 'variable-name answered'}>diagnosed</div>
                </div>
                <div className="input-area diagnosis">
                    <ReactSlider
                        className="horizontal-slider bar"
                        value={nextDiagnosed}
                        max={24}
                        onAfterChange={(value) => changeValue('diagnosed', value)}
                        onChange={(value) => this.setState({ nextDiagnosed: value })}
                    >
                        <div className="label">
                            {nextDiagnosed >= 1 && nextDiagnosed}
                            {nextDiagnosed && nextDiagnosed >= 1 &&
                                <span style={{ fontSize: '.8em' }}><br />{nextDiagnosed >= 2 ? 'months' : 'month'} ago</span>
                            }
                        </div>
                    </ReactSlider>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <div className="slider-tick-button marker-start slider-mobile-l" style={{ left: '4%' }} onClick={() => changeValue('diagnosed', 0)}>Within past month</div>
                        <div className="slider-tick-button marker-end-diagnosed slider-mobile-r" style={{ left: '104%' }} onClick={() => changeValue('diagnosed', 24)}>3 years ago</div>
                    </div>
                </div>
            </div>
        )
    }
}

QuestionDiagnosed.defaultProps = {
    color: 'black',
}

export default QuestionDiagnosed
