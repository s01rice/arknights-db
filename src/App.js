import './App.css';
import React from "react";
import Header from './Header.js';
import operators from './Operators.js';
import Modal from './Modal.js';

const baseUrl = "https://gamepress.gg"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedOp: null,
      filterTags: {
        class: {
          Vanguard: false,
          Guard: false,
          Defender: false,
          Medic: false,
          Caster: false,
          Supporter: false,
          Sniper: false,
          Specialist: false
        },
        rarity: {
          6: false,
          5: false,
          4: false,
          3: false,
          2: false,
          1: false
        }
      }
    }
  };

  opClick = op => {
    this.setState(prevState => ({
      show: !prevState.show,
      selectedOp: op
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main className="wrapper">

          { // types of filters
            Object.entries(this.state.filterTags).map((filters) => {
              // console.log(filters[1]);
              return (
                <ul className="filter-list" key={filters[0]}>
                  { // individual filters
                    Object.entries(filters[1]).map(([key, value]) => {
                      // console.log(key, value);
                      return (
                        <li className="filter-element" key={key} data-selected={value}>{key + (filters[0] === 'rarity' ? "\u2606" : "")}<div className="overlay"></div></li>
                      );
                    })}
                </ul>
              );
            })}

          <ul className="operator-list">

            {operators.map((operator) => {

              return (
                <li className="op-list-element" key={operator.name} onClick={() => { this.opClick(operator); }}>
                  <img src={baseUrl + operator.icon} alt={operator.name} className={`icon rarity-${operator.stats.rarity}`} />
                  <div className="overlay"></div>
                </li>
              )
            })}
          </ul>

          <Modal
            onClose={this.opClick}
            show={this.state.show}
            op={this.state.selectedOp} />
        </main>
      </div>
    );
  }

}

export default App;
