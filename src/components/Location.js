import React, { Component } from 'react'
import{Button} from "react-bootstrap";

class Location extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.display_name}</h2>               
                <h3>{this.props.lat},{this.props.lon}</h3>
                <img src={this.props.map} alt="Map" className="img-responsive"/>
                
            </div>
        )
    }
}

export default Location
