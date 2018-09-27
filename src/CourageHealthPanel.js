import React from 'react'

class CourageHealthPanel extends React.Component {
    render () {
        return (
            <div className="courage-panel"> 
                <div className="ch-elements">
                    <div className="logo-container">
                        <img src="../assets/ch.logo.icon.svg"/>
                    </div>
                    <div className="ch-description">
                        More than numbers, <a>Courage Health</a> is about the conversation between patients and their 
                        doctors about living life on their terms. 
                        <div className="cta-container">
                        <div className="ch-cta">
                            <div className="cta-copy">Visit our site at: <a> Courage.Health </a></div>
                        </div>
                    </div>
                    </div> 
                    
                </div>
            </div>
        )
    }
}

export default CourageHealthPanel
