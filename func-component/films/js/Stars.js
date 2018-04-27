'use strict';

function Stars(props) {
  const {count} = props;
  
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return
  }

  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push( < Star / > )
  }

  return <ul className="card-body-stars u-clearfix"><li>{stars}</li></ul>;
}

