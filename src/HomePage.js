import React from 'react'

import Dropdown from './Dropdown'

class HomePage extends React.Component {
    render () {
        return (
            <div style={{ height: '100vh '}} className="bg-purple">
                <div className="home-page">
                    <div className="home-page-intro">
                        I am a&nbsp;
                        <Dropdown
                            className="first-dropdown"
                            list={[
                                'warrior',
                                'patient',
                                'doctor',
                                'caregiver',
                                'family member',
                                'friend',
                            ]}
                        />

                        &nbsp;<span className="break2">searching for</span> answers on&nbsp;
                        <Dropdown
                            className="second-dropdown"
                            list={[
                                'uterine',
                                'bladder',
                                'brain',
                                'breast',
                                'colon',
                                'liver',
                                'lung',
                                'melanoma',
                                'ovarian',
                                'pancreatic',
                                'prostate',
                                'rectal',
                                'lymphoma',
                                'stomach',
                                'thyroid',
                                

                            ]}
                        />          
                        &nbsp;<span className="break">cancer</span> survival rates.
                    </div>
                    <div className="home-page-blurb">
                        Personalized Cancer Survival Rates from the experts of <strong>Courage Health</strong>
                        <div className="links">
                            <a>About</a> <a>Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
