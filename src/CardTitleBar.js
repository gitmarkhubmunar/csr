import React from 'react'
import Icon from 'react-ionicons'

class CardTitleBar extends React.Component {
	render () {
		const { title } = this.props;
        return (
            <div className="title-bar bg-purple flex-row padding-2">
        		<div style={{ flex: '0 1 10%' }}>
        			Patient
        		</div>
        		<div className="text-center" style={{ flex: '1 auto' }}>
        			{title}
        		</div>
        		<div style={{ flex: '0 1 10%' }}>
        			<Icon icon="ios-share-alt" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar
