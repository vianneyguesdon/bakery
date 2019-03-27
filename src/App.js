import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class App extends React.Component {

  // Etape 1
  constructor(props) {
    super(props);
      this.state = {
        price: 1,
        product: ""
    };
    this.onChangePrice = this.onChangePrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // Etape 2
  onChangePrice(value) {
    console.log("price", value)
    this.setState({price: value})
  }

  handleChange(value) {
    console.log(value);
    this.setState({value: value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log("value", this.state.value)
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-6">
            <input 
              placeholder = "enter a new product"
              // value = {this.state.value}
              onChange={(evt) => this.handleChange(evt.target.value)}
              // onChange={(evt) => console.log(evt.target.value)}
            />
            <Slider
              min = {1}
              max = {10}
              value = {this.state.price}
              onChange={(val) => this.onChangePrice(val)}
            />
            <p>{this.state.price} €</p>
            <input type="submit" value="Validate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
