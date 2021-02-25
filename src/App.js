import './App.css';
import React from "react";
import Header from './Header.js';
import operators from './Operators.js';
import Modal from './Modal.js';

const baseUrl = "https://gamepress.gg"

class App extends React.Component {
  state = {
    show: false,
    operator: null
  };
  handleClick = op => {
    this.setState({
      show: !this.state.show,
      operator: op
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">

          <ul className="operator-list">

            {operators.map((operator) => {

              return (
                <li className="list-element" key={operator.name} onClick={() => { this.handleClick(operator); }}>
                  <img src={baseUrl + operator.icon} alt={operator.name} className={`icon rarity-${operator.stats.rarity}`} />
                  <div className="overlay"></div>
                </li>
              )
            })}
          </ul>

          <Modal
            onClose={this.handleClick}
            show={this.state.show}
            op={this.state.operator} />
        </main>
      </div>
    );
  }

}

export default App;
