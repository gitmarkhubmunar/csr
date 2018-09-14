import React from 'react'



class CancerRibbon extends React.Component {
    render () {

        const {  selectedCancerType } = this.props
        // const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        // const color = selectedCancer.colors[0]

      return ( 
        <div className="feedback-row">
              
              <object
                        className="cancer-ribbon"
                        data="/assets/ribbon.bladder.svg"
                        type="image/svg+xml"
                    />
             
            </div>
     )
    }
}

export default CancerRibbon
