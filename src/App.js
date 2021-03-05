import './App.css';
import React from "react";
import Header from './Header.js';
import FilterList from './FilterList.js';
import OperatorList from './OperatorList.js';
import Modal from './Modal.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedOp: null,
      filterTags: {
        type: {
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

  filterListener = (e, filterType) => {
    console.log("Filter clicked: ", e.currentTarget.dataset.name, filterType);
    const name = e.currentTarget.dataset.name;
    this.setState(prevState => ({
      filterTags: {
        ...prevState.filterTags,
        [filterType]: {
          ...prevState.filterTags[filterType],
          [name]: !prevState.filterTags[filterType][name]
        }
      }
    }))
  }

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

          <FilterList
            filters={this.state.filterTags}
            filterListener={this.filterListener} />

          <OperatorList
            filters={this.state.filterTags}
            opClick={this.opClick} />

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
