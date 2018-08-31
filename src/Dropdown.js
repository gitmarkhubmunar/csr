import _ from 'lodash'
import React from 'react'

class Dropdown extends React.Component {
    state = { isOpen: false }

    selectItem = (item: string) => {
        // this.setState({ selectedItem: item })
        this.props.onSelect(item)
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render () {
        const { className, list, selectedItem } = this.props
        const { isOpen } = this.state
        const combinedClassName = 'dropdown-container ' + className
        return (
            <div className={combinedClassName} onClick={this.toggleMenu}>
                {isOpen &&
                    <ul className={isOpen ? 'dropdown open' : 'dropdown closed'}>
                        <div>
                            {list.map((item, i) => {
                                return (
                                    <li key={i} onClick={() => this.selectItem(item)}>
                                        <nobr >{item}</nobr>
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                }
                <span className="selected">{selectedItem}</span>
                <object className="caret-hp" data="/assets/dropdown.svg" type="image/svg+xml" />
            </div>        
        )
    }
}

export default Dropdown
