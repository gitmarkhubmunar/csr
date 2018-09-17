import _ from 'lodash'
import Mobile from 'is-mobile'
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
        const { className, list, selectedItem } = this.props
        const { isOpen } = this.state
        const combinedClassName = 'dropdown ' + className
        const isMobile = Mobile()

        if (isMobile) {
            return (
                <select
                    className={combinedClassName}
                    defaultValue={selectedItem}
                    onChange={event => this.selectItem(event.target.value)}
                >
                    {list.map((item, i) => {
                        return <option key={i} value={item}>{item}</option>
                    })}
                </select>
            )
        }
        return (
            <div className={combinedClassName} onClick={this.toggleMenu}>
                {isOpen &&
                    <ul className={isOpen ? 'dropdown open' : 'dropdown closed'}>
                        {list.map((item, i) => {
                            return (
                                <li key={i} onClick={() => this.selectItem(item)}>
                                    <nobr>{item}</nobr>
                                </li>
                            )
                        })}
                    </ul>
                }
                <span className="selected">{selectedItem}</span>
                <object
                    className="caret-hp"
                    data="/assets/dropdown.svg"
                    type="image/svg+xml"
                />
            </div>        
        )
    }
}

export default Dropdown
