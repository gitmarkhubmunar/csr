import Icon from 'react-ionicons'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withRouter } from 'react-router-dom'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'

class ShareCard extends React.Component {
    state = { copied: false }

    render () {
        const { location, onClose } = this.props
        const { copied } = this.state
        const domain = 'http://cancersurivalrates.org'
        const shareableUrl = `${domain}${location.pathname}${location.search}`
        return ( 
            <div className="blackout">
                <div className="share-card center-all">
                    <div className="share-card center-all content-container">
                        <div className="share-card-close-button" onClick={() => onClose()}>
                            <Icon icon="ios-close" fontSize="4em" style={{ fill: '#999' }} />
                        </div>
                        <div className="content-container share-card-content-container relative">
                            <h2>Share this information with others.</h2>
                            <p>Click copy and paste in an email, SMS, etc.</p>
                            <div className="flex-row">
                                <div className="share-link-box flex-auto center-all">{shareableUrl}</div>
                                <CopyToClipboard
                                    text={shareableUrl}
                                    onCopy={() => this.setState({ copied: true })}>
                                    <div className="share-link-copy-button center-all">Copy</div>
                                </CopyToClipboard>
                            </div>
                            <div className="relative">
                                {copied &&
                                    <div className="share-card-copied-message">
                                        Link copied to clipboard
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ShareCard)
