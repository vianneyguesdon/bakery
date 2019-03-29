import React from 'react';
import Add from "./components/Add";
import Button from "./components/core/Button";
import List from "./components/List";
import Pay from "./components/Pay";


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
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
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
    // Fonction qui push les éléments de l'input dans le tableau
    const newItem = this.state.items;
    newItem.push(value);
    this.setState({items: newItem});
    console.log("Items :", newItem)
  }

  onClickTabAdd() {
    this.setState({activeTab: "add"})
  }
  onClickTabList() {
    this.setState({activeTab: "list"})
  }
  onClickTabPay() {
    this.setState({activeTab: "pay"})
  }

  // Fonction qui affiche une liste d'éléments d'un tableau
  renderList() {
    return (
      <ul>
        {this.state.items.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log("value", this.state.product)
    console.log("activeTab", this.state.activeTab)
    return (
      <div className = "container">
        <Button onClick={this.onClickTabAdd}>Add</Button>
        <Button onClick={this.onClickTabList}>List</Button>
        <Button onClick={this.onClickTabPay}>Pay</Button>
        {/* // && et la ternaire sont équivalent (null est implicite)  */}
        {this.state.activeTab === "list" && <List
          renderList={this.renderList()}
        />}
        {this.state.activeTab === "pay" ? <Pay/> : null}
        {this.state.activeTab === "add" ? <Add 
          price = {this.state.price}
          value = {this.state.product}
          onChangePrice = {this.onChangePrice}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        /> : null}
      </div>
    );
  }
}

export default App;
