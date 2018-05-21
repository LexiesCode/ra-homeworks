class Cart extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isOpen !== nextProps.isOpen || (nextProps.isOpen && this.props.items.length !== nextProps.items.length);
  }
  
  render() {
    return (
      <CartView {...this.props} />
    );
  }
}
