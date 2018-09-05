import React from 'react'
import _ from 'lodash'

import Icon from 'react-ionicons'
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
            state = { selectedCancerName: CancerTypes[0].name, selectedPeopleType: PeopleTypes[0], isPatient: true, }
            render () {

        const { changeValue, isPatient, selectedCancerType, toggleShareCard, contrastColor } = this.props
        const { selectedCancerName, selectedPeopleType } = this.state
        return (
            <div style={{ height: '100vh'}} className="home-page-container">
                <div className="border-grey-bottom "></div>
                <div className="home-page">
                    <div className="hp-grid">
                        <div className="hp-headline-container">
                                I’m looking for answers on survival rates for:&nbsp;
                         </div>    
                                
                        <Dropdown
                                    className="second-dropdown"
                                    list={CancerTypes.map(type => type.name)}
                                    onSelect={name => this.setState({ selectedCancerName: name })}
                                    selectedItem={selectedCancerName}
                                /> 

                                 <div className="header2"> Heathcare professional?

                                    <div className="toggle-container-hp">
                                        <div className="toggle" >
                                            <Switch className="patient-switch" 
                                            onClick={() => changeValue('isPatient', !isPatient)} 
                                            on={isPatient === true} />
                                            <div style={{ color: contrastColor }} className={isPatient === true ? 'role patient' : 'role'}>{isPatient === true ? 'Yes' : 'No'} </div>
                                        </div> 
                                    </div>




                                  </div> 
                                  <div className="go-button">Go</div> 


                                  <div className="home-page-blurb-container">
                        <div className="blurb-copy">
                            Personalized cancer survival rates from the experts at <a href="http://courage.health">Courage Health</a>
                        </div>
                        <div className="links">
                            <a className="about-link">About</a> <a className="blog-link">Blog</a>
                        </div>
                    </div>
                        </div>
                      

                    
                </div>
            </div>
        )
    }
}

export default HomePage
