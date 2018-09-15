import _ from 'lodash'
import React from 'react'

class Dropdown extends React.Component {
    state = { isOpen: false }

    selectItem = (item: string) => {
        // this.setState({ selectedItem: item })
        this.props.onSelect(item)
        // this.props.setState({ // something about the ribbon? })
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render () {
        const { className, list, selectedItem } = this.props
        const { isOpen } = this.state
        const combinedClassName = 'dropdown ' + className
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
}

export default Dropdown
