const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <span>Hello, World!</span>
        <span>I get transformed to Preact!</span>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.body
);
