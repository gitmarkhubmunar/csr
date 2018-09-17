import React from 'react'

class Footer extends React.Component {

// <div className="courage-logo">
//                 <img src="../assets/ch.logo.svg"/>
//             </div>

// <div className="footer-button"> Select Cancer 
//                 <object className="footer-caret" data="/assets/dropdown.svg" 
//                 type="image/svg+xml" /></div>
    render () {
        return (
            <div className="footer-container">   
                <div className="footer-links-container">
                    <div className="box-1">© 2018 Courage Health.
                        <div className="footer-links">
                            <div className="links-container">
                                <div className="box-3">Privacy Policy</div>
                                <div className="box-4">Terms of Use</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
