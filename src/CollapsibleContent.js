import React from 'react'

class ExpandedContent extends React.Component {
    state = { isOpen: false }

    render () {
        const { content, number, title, contentImage } = this.props
        const { isOpen } = this.state
        return (
            <div>
                <div className="collapsible-container border-bottom-white" >
                    <div className="content-margin"></div>
                        {isOpen === true && <div className="collapsible-content">{content}</div>}
                        {isOpen === true && <div className="collapsible-img">{contentImage}</div>}
                        

                        <div className="collapsible-content-container">
                </div>
                    <div className="content-margin"></div>

                </div>
            </div>
        )
    }
}



export default ExpandedContent