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
                    Vivamus varius imperdiet ante, eu accumsan lectus suscipit non. Pellentesque eu sapien a diam viverra tincidunt et eu felis. Sed laoreet mattis quam at mattis. 
                </div>    
            <div className="cta-container">
                    <div className="ch-cta">
                         <div>VISIT OUR SITE AT: <a> Courage.Health </a></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CourageHealthPanel