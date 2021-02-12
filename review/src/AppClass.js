import React from "react";

const Message = (props) => {
  return(<div>
    <p>
      <p>In Message</p>
      {props.name} is an unbelievable name. Stunning! Never change,{" "}
      {props.name}.
    </p>
  </div>);
}


class Person extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}.</h1>
        <Message name={"Warren"}/>
      </div>
    );
  }
} 


class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };


  render() {
    return (
      <div>
        <Person name={this.state.name} />
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
