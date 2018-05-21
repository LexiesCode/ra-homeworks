class Cart extends React.Component {

  constructor(props) {
    super(props);

  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen || (nextProps.isOpen && this.props.items.length !== nextProps.items.length);
  }

  componentWillUpdate() {
    console.log('fail');
  }
  
  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
