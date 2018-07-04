class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu className="menu__item" activeClass="menu__item-active"/>
          <div className="page">
            <Switch>
              <Route path="/drift" component={DriftPage} />
              <Route path="/timeattack" component={TimeAttackPage} />
              <Route path="/forza" component={ForzaPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}