import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    //to defibe stsate
    this.state = {
      count: 0,
      count1: 0,
    };
    console.log("Child -> Constructor");
  }

  componentDidMount() {
    console.log("Child -> component did mount");
  }
  render() {
    console.log("Child render");
    return (
      <div>
        <h2>This is the class component</h2>
        <h1>Welcome to react : {this.props.name}</h1>
        <h1>Count value is : {this.state.count}</h1>
        <h2>Count1 value is : {this.state.count1}</h2>
        <button
          onClick={() =>
            this.setState({
              count: 1,
              count1: 2,
            })
          }
        ></button>
      </div>
    );
  }
}

export default Profile;
