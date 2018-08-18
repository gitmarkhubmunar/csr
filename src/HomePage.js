import React from 'react'

import Dropdown from './Dropdown'
import CancerTypes from './data/CancerTypes'

const PeopleTypes = [
    'patient',
    'doctor',
    'caregiver',
    'cousin',
    'warrior',
    'friend',
    'brother',
    'sister',
    'mother',
    'father',
    'lover',

]

class HomePage extends React.Component {
    state = { selectedCancerName: CancerTypes[0].name, selectedPeopleType: PeopleTypes[0] }

    render () {
        const { selectedCancerName, selectedPeopleType } = this.state
        return (
            <div style={{ height: '100vh '}} className="bg-purple">
                <div className="home-page">
                    <div className="hp-intro-container">
                     <div className="home-page-intro">
                            I am a&nbsp;
                            <Dropdown
                                className="first-dropdown"
                                list={PeopleTypes}
                                onSelect={name => this.setState({ selectedPeopleType: name })}
                                selectedItem={selectedPeopleType}
                            />

                            &nbsp;<span className="break2">searching for</span> answers on&nbsp;
                            <Dropdown
                                className="second-dropdown"
                                list={CancerTypes.map(type => type.name)}
                                onSelect={name => this.setState({ selectedCancerName: name })}
                                selectedItem={selectedCancerName}
                            />     
                        &nbsp;<span className="break">cancer</span> survival rates.
                    </div>
                    </div>
                    
                    <div className="home-page-blurb-container">
                        <div className="blurb-copy">
                            Personalized Cancer Survival Rates from the experts of Courage Health
                        </div>
                        <div className="links">
                            <a className="about-link">About</a> <a className="blog-link">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
