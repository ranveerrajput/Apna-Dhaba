import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 2"
);

const div = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const heading = (
  <h1 id="title" key="h2">
    Welocme to React
  </h1>
);

const HeadingComponent = () => {
  return <h1>This is the functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
