import React from 'react'

class CourageHealthPanel extends React.Component {

    render () {
        return (

        <div className="courage-panel flex-row"> 
                <div className="logo-container">
                    <img src="../assets/ch.logo.stacked.svg"/>
                </div>
                <div className="description-container">
                    <div className="ch-description">
                            Vivamus varius imperdiet ante, eu accumsan lectus suscipit non. Pellentesque eu sapien a diam viverra tincidunt et eu felis. Sed laoreet mattis quam at mattis. Pellentesque et erat pharetra, molestie elit eget, euismod urna. Curabitur maximus volutpat nunc, sed venenatis turpis mattis id. Pellentesque tempor imperdiet quam, at consequat nisl fringilla at.
                </div>    
            </div>
            <div className="cta-container">
                    <div className="ch-cta">
                         <div>VISIT OUR SITE AT :</div>
                         <div> Courage.Health </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default CourageHealthPanel