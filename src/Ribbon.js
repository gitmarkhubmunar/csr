import _ from 'lodash'
import React from 'react'

import CancerTypes from './data/CancerTypes'

class Ribbon extends React.Component {
    render () {
        const { selectedCancerType } = this.props
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType }) || {}
        const ribbon = selectedCancer.ribbonFile
        if (!ribbon) {
            return null
        }
        return (
            <object
                className="ribbon"
                data={`/assets/${ribbon}`}
                type="image/svg+xml"
            />
        )
    }
}

Ribbon.defaultProps ={
    selectedCancerType: null,
}

export default Ribbon
