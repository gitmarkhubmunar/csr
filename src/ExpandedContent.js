import React from 'react'

class ExpandedContent extends React.Component {
    render () {
        const { content, image } = this.props
        return (
            <div className="expanded-content">
                <div>
                    <div>link</div>
                    {content && <div className="collapsible-content">{content}</div>}
                </div>
                {image && <div className="collapsible-img">{image}</div>}
            </div>
        )
    }
}

export default ExpandedContent