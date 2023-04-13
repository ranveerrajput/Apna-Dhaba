import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

const About1 = () => {
  return (
    <div>
      <h1>This is the About page of APna Dhaba</h1>
      <ProfileFunctionalComponent />
      <Profile name="Ranveer" />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent -> Constructor");
  }

  componentDidMount() {
    //This is the best place to make as API call as it get call after the component is render
    console.log("Parent -> component did amount");
  }
  render() {
    console.log("parent - render()");
    return (
      <div>
        <h1>This is the About page of APna Dhaba</h1>
        <ProfileFunctionalComponent />
        <Profile name="Ranveer" />
      </div>
    );
  }
}

export default About;
