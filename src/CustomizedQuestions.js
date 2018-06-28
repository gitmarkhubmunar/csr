import Icon from 'react-ionicons'
import React from 'react'

class CustomizedQuestions extends React.Component {
    render () {
        const {
            switchQuestion,
            age,
            diagnosed,
            grade,
            sex,
            stage,
        } = this.props;
        return (

            <div className="variables flex-row">
    		    
                
                
                
                

                   <div onClick={() => switchQuestion('sex')} className="variable-switch-unanswered">


        <div className="input-unanswered">
            <div className="unanswered-row">

                    <div className="unanswered-button"><object className="variable-icon-unanswered" data="/assets/sex.svg" type="image/svg+xml" /></div>
                    <div className="topic-unanswered">sex</div>
            </div>
             <div className="input-area">
                            <div>male</div><div>female</div>
                        </div>
        </div>

        <div className="unanswered-row">

                <div className="unanswered-button"><object className="variable-icon-unanswered" data="/assets/age.svg" type="image/svg+xml" /></div>
                <div className="topic-unanswered">age</div>
                    </div>

        <div className="unanswered-row">

                <div className="unanswered-button"><object className="variable-icon-unanswered" data="/assets/stage.svg" type="image/svg+xml" /></div>
                <div className="topic-unanswered">stage</div>
                    </div> 

         <div className="unanswered-row">

                <div className="unanswered-button"><object className="variable-icon-unanswered" data="/assets/grade.svg" type="image/svg+xml" /></div>
                <div className="topic-unanswered">grade</div>
                    </div>            

          <div className="unanswered-row">

                <div className="unanswered-button"><object className="variable-icon-unanswered" data="/assets/diagnosed.svg" type="image/svg+xml" /></div>
                <div className="topic-unanswered">diagnosed</div>
                    </div> 




        </div>



    		</div>

        )
    }
}

export default CustomizedQuestions
