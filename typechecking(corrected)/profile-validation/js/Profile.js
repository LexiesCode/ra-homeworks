'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const bthDayPropType = (props, propName, componentName) => {
  const bthDay = props[propName];
  const isBthDay = (typeof bthDay === 'string') && /\d{4}\-\d{2}\-\d{2}/.test(bthDay);
  const checkBthDay = new Date(bthDay) > new Date;
    
  if (!isBthDay) {
    return new Error(`Неверный формат параметра ${propName} в компоненте ${componentName}: необходимо указать дату рождения в формате YYYY-MM-DD`);
  } else if (checkBthDay) {
    return new Error(`Неверно указан параметр ${propName} в компоненте ${componentName}: некорректно указана дата рождения`);
  }
  return null;
}

const createChainableTypeChecker = (validate) => {
  const checkType = (isRequired, props, propName, componentName, ...rest) => {
    if (!props[propName]) {
      if (isRequired) {
        return new Error(`Обязательный атрибут ${propName} не был передан компоненту ${componentName}`)
      }
      return null;
    } else {
      return validate(props, propName, componentName);
    }
  };
  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
};

const bthDayPropTypeChecker = createChainableTypeChecker(bthDayPropType);


const urlPropType = (props, propName, componentName) => {
  const url = props[propName];
  const isUrl = (typeof url === 'string') && /https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(url);
  if (!isUrl) {
    return new Error(`Неверный формат параметра ${propName} в компоненте ${componentName}: необходимо указать корректный url`);
  }
  return null;
};

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: bthDayPropTypeChecker.isRequired,
  img: PropTypes.string,
  url: urlPropType
}

Profile.defaultProps = {
  img: './images/profile.jpg',
  birthday: '1988-03-21'
}

