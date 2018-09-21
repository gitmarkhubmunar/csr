import React from 'react'

class ExpandedContent extends React.Component {
    render () {
        const { className, content, image, siteRef, style, time } = this.props
        return (
            <div className={className} style={style}>
                {image && <div className="expanded-image">{image}</div>}
                {siteRef &&
                    <div className="site-reference">
                        {siteRef}{time && <span className="time"> {time}</span>}
                    </div>
                }
                {content &&
                    <div>
                        {content}
                    </div>
                }  
            </div>
        )
    }
}

export default ExpandedContent
