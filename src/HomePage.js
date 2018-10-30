import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'

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

// // ffor:&nbsp;
//                                 <Dropdown
//                                     className="first-dropdown"
//                                     list={PeopleTypes}
//                                     onSelect={name => this.setState({ selectedPeopleType: name })}
//                                     selectedItem={selectedPeopleType}
//                                 />

 // nbsp;<span className="break2">searching& for</span> answers on&nbsp;
  // &nbsp;<span className="break">cancer</span> survival rates.

  //<switch className="yes-no-switch"/>
  // selectedPeopleType: PeopleTypes[0]


class HomePage extends React.Component {
    state = {
        isPatient: true,
        selectedCancerType: CancerTypes[_.random(0, CancerTypes.length - 1)].id,
        selectedPeopleType: PeopleTypes[0],
    }

    goToSurvey = () => {
        const { isPatient, selectedCancerType } = this.state
        this.props.history.push({
            pathname: '/card',
            state: {
                isPatient,
                selectedCancerType,
            }
        })
    }
    
    render () {
        const { history, isPatient, selectedCancerType, selectedPeopleType } = this.state
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })

        return (
            <div className="home-page-container">
                <div className="home-page content-container">
                <div className="headline-container"> 
                    <h2 className="headline">I’m looking for answers on survival rates for</h2> 
                         <div className="dropdown-home mobile-dropdown-container-home mobile-dropdown-home">
                        
                                <Dropdown
                                    className="title-dropdown text-center cancer-title"
                                    list={CancerTypes.map(type => type.name)}
                                    onSelect={name => {
                                        const id = _.find(CancerTypes, { name: name }).id
                                        this.setState({ selectedCancerType: id })
                                    }}
                                    selectedItem={selectedCancer.name}
                                />
                                <img className="caret home-page-caret" src="../assets/dropdown.svg" />
                                </div>
                            </div>
                            <h2 className="cancer-word">cancer.</h2>
                    
                        <div className="toggle-copy-container">
                            <h3 className="toggle-copy">Healthcare Professional?</h3>
                            <div className="toggle-container">
                                <Switch
                                    onClick={() => this.setState({ isPatient: !isPatient })} 
                                    on={isPatient === false}
                                />
                                <div className="role yes-no">{isPatient === true ? 'No' : 'Yes'}</div>
                            </div>
                        </div>
                    <div className="home-page-blurb">
                    <div className="go-container">
                        <div className="go-button" onClick={() => this.goToSurvey()}>Go</div>
                    </div>
                         <div className="blurb-copy">
                            Personalized cancer survival rates from the experts at <a className="weight-700" href="http://courage.health" target="_blank">Courage Health</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
