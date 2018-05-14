'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};



const datePropType = (props, propName, componentName) => {
  let date = props[propName];
  let isDate = (typeof date === 'string') && /\d{4}\-\d{2}\-\d{2}/.test(date);

  if(!isDate) {
    return new Error(`Неверный параметр ${propName} в компоненте ${componentName}: параметр должен быть в формате YYYY-MM-DD`);
  }
  return null;
}

const getCurrentDate = ()  => {
  const currentDate = new Date();
  const curMonth = currentDate.getMonth() +1;
  const curDate = currentDate.getDate();
  const date = [
    currentDate.getFullYear(),
    (curMonth > 9 ? '' : '0') + curMonth,
    (curDate > 9 ? '' : '0') + curDate
    ].join(',').replace(/,/g, '-');
  
  return date;
}

DateInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  value: datePropType,
  required:PropTypes.bool
}

DateInput.defaultProps = {
  value: getCurrentDate()
}  