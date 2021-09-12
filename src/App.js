import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import Location from './components/Location';
import axios from 'axios';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: "",
      map: "",
      lat: "",
      lon: "",
      showData: false,
    }
  }
  handleLocation = (event) => {
    let display_name = event.target.value;
    this.setState({
      display_name: display_name
    })

  }
  handleSubmit = (event) => {
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    event.preventDefault();
    let config = {
      method: "GET",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`
    }
    axios(config).then(res => {
      let responseData = res.data[0]
      this.setState({
        display_name: responseData.display_name,
        lon: responseData.lon,
        lat: responseData.lat,
        map:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=1-18`,
        
        showData:true,

      })

    })

  }
  render() {
    return (
      <div>
        <h1> WELCOME TO CITY EXPLORER!</h1>
        <br />
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} />
        <br />
        {
          this.state.showData &&
          <Location
          display_name={this.state.display_name}
          lon={this.state.lon}
          lat={this.state.lat}
          map={this.state.map} />
        }

      </div>
    )
  }
}

export default App
