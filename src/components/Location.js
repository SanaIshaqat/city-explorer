import React, { Component } from 'react';

import { Card } from 'react-bootstrap';


class Location extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={this.props.map} alt={this.props.display_name} width="800" height="400" />
                    <Card.Body>
                        <Card.Title>{this.props.display_name}</Card.Title>
                        
                        <Card.Text>
                        Lat,Long:{this.props.lat},{this.props.lon}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
                

            </div>
        )
    }
}

export default Location
