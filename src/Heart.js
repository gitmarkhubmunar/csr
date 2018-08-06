import React from 'react'
import Icon from 'react-ionicons'


// import HeartAnimation from '@haiku/thev1sual-heartanimation/react'
// import HeartFull from '@haiku/thev1sual-heartfull/react'

class Heart extends React.Component {
    render () {
        const { kind } = this.props;
        // When using the default Haiku statement: <HeartAnimation sizing="contain" loop={true} />
        // For some reason subsequent elements (e.g. sibling inline-block <div> elements) do not lay out correctly;
        // it seems the Haiku component inlines a height property corresponding to a graphical element in the animation,
        // which is 380px. Some parent component several levels up in the DOM somehow inherits this full height,
        // which is why sibling elements to the Haiku component don't render in the right place.
        // Adding position="absolute" to the Haku component fixes the problem, but shouldn’t be necessary.
        // return (
        //     <div className="heart-container">
        //         {kind === 'full' && <object className="heart-icon" data="/assets/heart.svg" type="image/svg+xml" />}
        //         {kind === 'empty' && <object className="heart-icon" data="/assets/emptyheart.svg" type="image/svg+xml" />}
        //         {kind === 'half' && <object className="heart-icon" data="/assets/hearthalffull.svg" type="image/svg+xml" />}
        //     </div>
        // )

        return (
            <div className="heart-container">
                {kind === 'full' && <Icon icon="ios-man"  fontSize="35px" color="green"/>}
                {kind === 'empty' && <Icon icon="ios-man" fontSize="35px" color="grey"/>}
                {kind === 'half' && <Icon icon="ios-man"  fontSize="35px" color="blue"/>}
            </div>
        )
    }

}

export default Heart