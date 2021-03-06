import _ from 'lodash'
import Icon from 'react-ionicons'
import CheckMobile from 'is-mobile'
import React from 'react'

class Dropdown extends React.Component {
    state = { isOpen: false }

    selectItem = (item: string) => {
        this.props.onSelect(item)
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render () {
        const { className, list, selectedItem, backgroundColor } = this.props
        const { isOpen } = this.state
        const combinedClassName = 'dropdown ' + className
        const isMobile = CheckMobile()

        if (isMobile) {
            return (
                <div className="mobile-dropdown-container relative">
                    <br />
                    <div className="mobile-dropdown">{selectedItem}
                    <Icon icon="ios-arrow-down" fontSize="1em" style={{ fill: this.props.bgColor }}/></div>
                    <select
                        className={combinedClassName}
                        defaultValue={selectedItem}
                        onChange={event => this.selectItem(event.target.value)}
                    >
                        {_.orderBy(list, 'name').map((item, i) => {
                            return <option key={i} value={item}>{item}</option>
                        })}
                    </select>
                </div>
            )
        }
        return (
            <div className={combinedClassName + ' center'} onClick={this.toggleMenu}>
                {isOpen &&
                    <ul className={isOpen ? 'open' : 'closed'}>
                        {_.orderBy(list, 'name').map((item, i) => {
                            return (
                                <li key={i} onClick={() => this.selectItem(item)}>
                                    <nobr>{item}</nobr>
                                </li>
                            )
                        })}
                    </ul>
                }
                <div className="selected">{selectedItem}
                <Icon icon="ios-arrow-down" fontSize="1em" style={{ fill: this.props.bgColor }}/></div>

            </div>        
        )
    }
}

export default Dropdown
