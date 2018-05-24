'use strict';

const TableWrapper = (dataToState) => (Component) => class extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(dataToState(newProps));
    }

    render() {
        return <Component {...this.props} {...this.state} />;
    }
}

function getMonthFromData(props) {
    const monthsTable = [];
    props.list.forEach(
        item => {
        const month = new Date(item.date).getMonth();
        const monthName = new Date(item.date).toLocaleString('en', {month: 'short'});
        let monthItem = monthsTable[month];
        if(!monthItem) {
            monthItem = {month: monthName, amount: 0}
            monthsTable[month] = monthItem;
        }
        monthItem.amount += item.amount;
    });
    return {list: monthsTable}
}

function getYearFromData(props) {
    const yearTable = [];
    props.list.forEach(
        item => {
            const year = new Date(item.date).getFullYear();
            let yearItem = yearTable.find(item => item.year === year);
            if (!yearItem) {
                yearItem = {year: year, amount: 0};
                yearTable.push(yearItem);
            }
            yearItem.amount += item.amount;
    });
    return {list: yearTable}
}

function getDataSorted(props) {
    const sortTable = props.list.sort((item1, item2) => (item1.date < item2.date) ? 1 : -1);
    return {list: sortTable}
}

const MonthTableWrapped = TableWrapper(getMonthFromData)(MonthTable);
const YearTableWrapped = TableWrapper(getYearFromData)(YearTable);
const SortTableWrapped = TableWrapper(getDataSorted)(SortTable);