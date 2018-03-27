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
        		  <object className="share-button" data="/assets/share.svg" type="image/svg+xml" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar
