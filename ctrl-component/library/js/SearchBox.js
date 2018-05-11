class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.searchBooks = this.searchBooks.bind(this);
    }

    render() {
        return (
            <input 
                type="text" 
                placeholder="Поиск по названию или автору"
                value={this.props.value}
                onChange={this.searchBooks}
                />
        );
    }
    
    searchBooks(e) {
        this.props.filterBooks(e.currentTarget.value);
    }
}