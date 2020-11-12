import React from 'react';
import carsContext from './carsContext';

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      // moveCar: this.moveCar,
    };

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      }
    });
  }

  render() {
    const contextInfo = {
      ...this.state,
      moveCar: this.moveCar,
    }
    const { children } = this.props;
    return (
      <carsContext.Provider value={ contextInfo }>
        { children }
      </carsContext.Provider>
    )
  }

}

export default Provider;
