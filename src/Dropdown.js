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
        const { className, list, selectedItem, } = this.props
        const { isOpen } = this.state
        const combinedClassName = 'dropdown-container ' + className
        return (
            <section className="ribbon-and-dropdown">
                  <div className="select-ribbon-dropdown">
                      <object
                        className="select-ribbon"
                        data="/assets/ribbon.ureterurinary.svg"
                        type="image/svg+xml"
                        />

                        <select className='dropdown-select open'>
                        {list.map((item, i) => {
                            return (
                                <option value={i} key={i} onClick={() => this.selectItem(item)}>
                                    {item}

                                </option>

                            )
                        })}
                    </select>
                </div>   
            </section>     
        )
    }
}

export default Dropdown
