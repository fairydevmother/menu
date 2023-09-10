import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Define a simple React component
class MyComponent extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}
reportWebVitals();

ReactDOM.render(<MyComponent />, document.getElementById('root'));

