'use strict'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
    this.selectFilter = this.selectFilter.bind(this);
    this.getSelectedProjects = this.getSelectedProjects.bind(this);
  }

  selectFilter(filter) {
    this.setState({
      selected: filter
    });
  }

  getSelectedProjects() {
    if(this.state.selected !== 'All') {
      const selectedProjects = this.props.projects.filter(project => project.category === this.state.selected);
      return selectedProjects;
    } else {
      return this.props.projects;
    }
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.selectFilter(filter)} />
        <Portfolio projects={this.getSelectedProjects()} />
      </div>
    );
  } 
}