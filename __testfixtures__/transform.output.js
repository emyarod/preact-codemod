import {h, Component, render} from "preact";

const App = function() {
  return (
    <div>
      <span>Hello, World!</span>
      <span>I get transformed to Preact!</span>
    </div>
  );
};

render(
  <App />,
  document.body
);
