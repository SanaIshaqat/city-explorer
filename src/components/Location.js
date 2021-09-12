import React, { Component } from 'react'

class Location extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.display_name}</h2>
                {/* <h2>{this.type}</h2> */}
                <h3>{this.props.lat}/{this.props.lon}</h3>
            </div>
        )
    }
}

export default Location
