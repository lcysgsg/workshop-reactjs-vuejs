import React from 'react';
import './TeslaWheels.css';

const LabelLists = (props) => {
  const value = props.wheels.value;
  const changeHandler = props.wheels.handleChangeWheels;
  const sizes = [19, 21];
  // Exersise 1: FIXME
  // and ERROR 7 ---> solution: sizes.map() 
  const LabelItems = sizes.some(size => (
    <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
      <input
        type="radio"
        name="wheelsize"
        value={size}
        checked={value === size} 
        change={() => {changeHandler(size)}} />
      <p>
        {size}"
      </p>
    </label> 
    )
  );
  return (
    <div>
      {LabelItems}
    </div>
  );
}
const TeslaWheels = (props) => (
  <div className="tesla-wheels__component">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container cf">
      <LabelLists wheels={props}/>
    </div>
  </div>
);
TeslaWheels.propTypes = {
  value: React.PropTypes.number,
  handleChangeWheels: React.PropTypes.func
}
export default TeslaWheels;