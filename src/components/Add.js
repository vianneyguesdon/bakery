import React from "react";
import Slider from"rc-slider";

class Add extends React.Component {

  render() {
    console.log("Add#render props", this.props);
    console.log("Add#render state", this.state);
    return(
      <div className = "row">
        <div className = "col-6">
          <input 
            placeholder = "enter a new product"
            value = {this.props.value}
            onChange={(evt) => this.props.handleChange(evt.target.value)}
            // onChange={(evt) => console.log(evt.target.value)}
          />
          <Slider
            min = {1}
            max = {10}
            value = {this.props.price}
            onChange={(val) => this.props.onChangePrice(val)}
          />
          <p>{this.props.price} €</p>
          <button onClick={() => this.props.handleSubmit(this.props.value)}>Validate</button>
        </div>
      </div>
    );
  }
}


export default Add;