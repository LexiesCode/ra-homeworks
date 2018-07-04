'use strict';

function Stars({count}) {
  
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<li><Star/></li>)
  }

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
}

Stars.defaultProps = { 
  count: 0
}
