import React from "react";

class List extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col">
          {this.props.renderList}
        </div>
      </div>
    )
  }
}

export default List;