import React from 'react'
import Icon from 'react-ionicons'

class CardTitleBar extends React.Component {
	render () {
		const { title } = this.props;
        return (
            <div className="title-bar bg-purple flex-row padding-2">
        		<div className="toggle" style={{ flex: '0 0 20%' }}>
        			patient
        		</div>
        		<div className="text-center" style={{ flex: '1 0 auto' }}>
        			{title}
        		</div>
        		<div style={{ flex: '0 0 20%', textAlign: 'right' }}>
        		  <Icon color="white" icon="ios-share-alt" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar
