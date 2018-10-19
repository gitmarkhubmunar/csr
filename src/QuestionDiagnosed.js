import React from 'react'
import ReactSlider from 'react-slider'

const diagnosedLabels = {
    '0': 'Within the past month',
    '1': '1 month ago',
    '2': '2 months ago',
    '3': '3 months ago',
    '4': '4 months ago',
    '5': '5 months ago',
    '6': '6 months ago',
    '7': '7 months ago',
    '8': '8 months ago',
    '9': '9 months ago',
    '10':  '10 months ago',
    '11':  '11 months ago',
    '12':  '1 year ago?',
    '13':  '1 year 1 month ago',
    '14':  '1 year 2 months ago',
    '15':  '1 year 3 months ago',
    '16':  '1 year 4 months ago',
    '17':  '1 year 5 months ago',
    '18':  '1 year 6 months ago',
    '19':  '1 year 7 months ago',
    '20':  '1 year 8 months ago',
    '21':  '1 year 9 months ago',
    '22':  '1 year 10 months ago',
    '23':  '1 year 11 months ago',
    '24':  '2 years ago'
}

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
        const { changeValue, className, color, diagnosed } = this.props
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
                <div className="input-area">
                    <div className="slider-container">
                        <ReactSlider
                            className="horizontal-slider bar"
                            value={nextDiagnosed}
                            max={24}
                            onAfterChange={(value) => changeValue('diagnosed', value)}
                            onChange={(value) => this.setState({ nextDiagnosed: value })}
                        >
                            <div
                                className="label"
                                style={{
                                    left: -30,
                                    position: 'absolute',
                                    right: -30,
                                    bottom: 40,
                                    textAlign: 'center',
                                }}
                            >
                                {diagnosedLabels[nextDiagnosed.toString()]}
                            </div>
                        </ReactSlider>
                        <div className="slider-ticks">
                            <div className="slider-tick-button" style={{ left: 0 }} onClick={() => changeValue('diagnosed', 0)}>Within past month</div>
                            <div className="slider-tick-button" style={{ right: 0 }} onClick={() => changeValue('diagnosed', 24)}>3 years ago</div>
                        </div>
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
