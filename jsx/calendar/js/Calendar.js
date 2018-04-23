 const Calendar = (props) => {
    
    const date = props.date;
    const weekday = date.toLocaleString('ru', {'weekday': 'long'});
    const month = date.toLocaleString('ru', {'month': 'long'});
    
    const firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 0);
    const firstWeekday = firstMonthDay.getDay();
    firstMonthDay.setDate(firstMonthDay.getDate() - firstWeekday + 1);
    
    const lastMonthDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastWeekday = lastMonthDay.getDay();

    const daysInMonth = date.getDaysInMonth();
    let weeksInMonth = daysInMonth / 7;
    if (daysInMonth % 7 !== 0) {
        weeksInMonth++;
    }  
    
    const calendarTable = [];
    for (let w = 0; w < weeksInMonth; w++) {
        const weekdays = [];
        for (let d = 0; d < 7; d++) {
            if (firstMonthDay.getMonth() === date.getMonth() && firstMonthDay.getDate() === date.getDate()) {
                weekdays.push(<td className="ui-datepicker-today">{firstMonthDay.getDate()}</td>);
            } else if (firstMonthDay.getMonth() !== date.getMonth()) {
                weekdays.push(<td className="ui-datepicker-other-month">{firstMonthDay.getDate()}</td>);
            } else {
                weekdays.push(<td>{firstMonthDay.getDate()}</td>);
            }
            firstMonthDay.setDate(firstMonthDay.getDate() + 1);
        }
        calendarTable.push(<tr>{weekdays}</tr>)
    } 

    const tableHead = weekDaysList.map((day) => <th scope="col" title={Object.keys(day)}>{Object.values(day)}</th>);
        
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{capitalizeFirstLetter(weekday)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{changeToGenitive(month)}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{capitalizeFirstLetter(month)}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <thead>
                    <tr>
                        {tableHead}
                    </tr>
                </thead>
                <tbody>
                    {calendarTable}
                </tbody>
            </table>
        </div>
    );
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeToGenitive(string) {
    return string.match(/[ьй]$/) ? string.replace(/[ьй]/, 'я') : string + 'а';
}

Date.prototype.getDaysInMonth = function () {
    return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate();
};

function getWeekDays(locale, format)
{
    var baseDate = new Date();
    var weekDays = [];
    for(let i = 0; i < 7; i++)
    {       
        weekDays.push(baseDate.toLocaleDateString(locale, {weekday: format}));
        baseDate.setDate(baseDate.getDate() + 1);       
    }
    return weekDays;
}

let weekDaysListLong = getWeekDays('ru', 'long');
let weekDaysShort = getWeekDays('ru', 'short');
let weekDaysListShort = weekDaysShort.map(item => capitalizeFirstLetter(item));

let weekDaysList = [];
let day;

for(let i = 0; i < weekDaysListShort.length; i++) {
    day = {};
    day[weekDaysListLong[i]] = weekDaysListShort[i];
    weekDaysList.push(day);
}


//const tableHead = weekDaysList.map((day) => <th scope="col" title={day.title}>{day.value}</th>);
/* const weekDaysList = [
    {title: 'Понедельник', value: 'Пн'},
    {title: 'Вторник', value: 'Вт'},
    {title: 'Среда', value: 'Ср'},
    {title: 'Четверг', value: 'Чт'},
    {title: 'Пятница', value: 'Пт'},
    {title: 'Суббота', value: 'Сб'},
    {title: 'Воскресенье', value: 'Вс'}
]; */