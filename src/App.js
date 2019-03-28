import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Add from "./components/Add";
import Button from "./components/core/Button";
import List from "./components/List";
import Pay from "./components/Pay"

class App extends React.Component {

  // Etape 1
  constructor(props) {
    super(props);
      this.state = {
        price: 1,
        product: "",
        items: [],
        activeTab: "add",

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
    this.setState({product: value});
  }

  handleSubmit(value) {
    // On fait cette étape car le state attend un tableau
    const newItem = this.state.items;
    newItem.push(value);
    this.setState({items: newItem});
    console.log("Items :", newItem)
  }

  onClickTabAdd() {
    this.setState({activeTabe: "add"})
  }
  onClickTabList() {
    this.setState({activeTabe: "list"})
  }
  onClickTabPay() {
    this.setState({activeTabe: "pay"})
  }

  // Fonction qui affiche une liste d'éléments dans un tableau
  renderList() {
    return (
      <ul>
        {this.state.items.map((item) => {
          return (
            <li>{item}</li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log("value", this.state.product)
    return (
      <div className = "container">
        <Button>Add</Button>
        <Button>List</Button>
        <Button>Pay</Button>
        <Add 
          price = {this.state.price}
          value = {this.state.product}
          onChangePrice = {this.onChangePrice}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <List/>
        {this.renderList()}
        <Pay/>
      </div>
    );
  }
}

export default App;
