import React, {Component} from 'react';
import './App.css';
import WheatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';


const cities = [
  "Pamplona,es",
  "Tarazona,es",
  "Medellin,col",
  "Medellin,col",
];
class App extends Component {
  handleSelectedLocation = city => {
    return console.log(`handleSelectedLocation ${city}`);
  };
  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectedLocation}
        />
      </div>
    );
  }
}

export default App;
