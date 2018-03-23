import React from 'react'

class HomePage extends React.Component {
    render () {
        return (
            <div style={{ height: '100vh '}} className="bg-purple">
                <div className="bg-white">
                    <div className="home-page-intro">
                        I am a patient searching for answers on ovarian cancer survival rates.
                    </div>
                    <div className="home-page-blurb">
                        Personalized Cancer Survival Rates from the experts of Courage Health
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
