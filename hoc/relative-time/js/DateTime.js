'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

const DateTimePrettifier = (Component) => {
    
    return class extends React.Component {
        
        constructor(props) {
            super(props);
        }
        
        PrettifyDate(date) {
            const passedTime = (Date.now() - new Date(date).getTime());
            if (passedTime < (1000 * 60 * 60)) {
                return `${Math.round(passedTime / (1000 * 60 * 60))} минут назад`;
            } else if (passedTime > (1000 * 60 * 60) && passedTime < (1000 * 60 * 60 * 24)) {
                return `${Math.round(passedTime / (1000 * 60 * 60))} часов назад`;
            } else if (passedTime > (1000 * 60 * 60 * 24)) {
                return `${Math.round(passedTime / (1000 * 60 * 60 * 24))} дней назад`;
            }
        }
        
        render() {
            const prettifiedDate = this.PrettifyDate(this.props.date);
            return <Component {...this.props} date={prettifiedDate}/>;
        }
    }
}

const DateTimePretty = DateTimePrettifier(DateTime);

