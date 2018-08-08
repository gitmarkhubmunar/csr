import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'
import Dropdown from './Dropdown'



class CardTitleBar extends React.Component {
    state = { isPatient: true }

	render () {
		const { title } = this.props;
        const { isPatient } = this.state;
        return (
            <div className="title-bar title-cancer-color flex-row padding-2">
            	<div className="toggle" style={{ flex: '0 0 20%' }}>
            		<Switch className="patient-switch" onClick={() => this.setState({ isPatient: !isPatient })} on={isPatient === true} />
                    <div className={isPatient === true ? 'role patient' : 'role'}>{isPatient === true ? 'Patient' : 'Doctor'}</div>
            	</div> 
                <div className="title-dropdown">

                   
                    <Dropdown
                                className="third-dropdown text-center cancer-title"
                                list={[
                                    'Uterine Cancer',
                                    'Bladder Cancer',
                                    'Brain Cancer',
                                    'Breast Cancer',
                                    'Colon Cancer',
                                    'Liver Cancer',
                                    'Lung Cancer',
                                    'Melanoma Cancer',
                                    'Ovarian Cancer',
                                    'Pancreatic Cancer',
                                    'Prostate Cancer',
                                    'Rectal Cancer',
                                    'Lymphoma Cancer',
                                    'Stomach Cancer',
                                    'Thyroid Cancer',
                                    ]}
                            />   
                </div>

        		<div style={{ flex: '0 0 20%', textAlign: 'right' }}>
        		  <object className="share-button" data="/assets/share.svg" type="image/svg+xml" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar



