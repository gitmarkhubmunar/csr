import React from 'react'

class Dropdown extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedItem: this.props.list[0],
        }
    }

    selectItem = (item: string) => {
        this.setState({ selectedItem: item })
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render () {
        const { className, list } = this.props
        const { isOpen, selectedItem } = this.state
        const combinedClassName = 'dropdown-container ' + className
        return (
            <div className={combinedClassName} onClick={this.toggleMenu}>
                {isOpen &&
                    <ul className={isOpen ? 'dropdown open' : 'dropdown closed'}>
                        <div>
                            {list.map((item, i) => {
                                return (
                                    <li key={i} onClick={() => this.selectItem(item)}>
                                        {item}
                                    </li>
                                )
                            })}
                        </div>
                    </ul>
                }
                <span className="selected">{selectedItem}</span>
                <object className="caret" data="/assets/dropdown.svg" type="image/svg+xml" />
            </div>        
        )
    }
}

export default Dropdown
