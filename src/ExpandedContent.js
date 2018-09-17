import React from 'react'

class ExpandedContent extends React.Component {
    render () {
        const { content, image, time, siteRef } = this.props
        return (
            <div className="expanded-content">
                <div>
                    <div className="site-time-container">
                        <div className="site-ref">{siteRef}</div><div className="time">{time}</div>
                    </div>
                    {content && <div className="collapsible-content">{content}</div>}
                </div>
                {image && <div className="collapsible-img">{image}</div>}
            </div>
        )
    }
}

export default ExpandedContent