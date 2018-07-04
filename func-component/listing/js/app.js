'use strict';

const Listing = (props) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
    xhr.send();
    if (xhr.status === 200) {
        const listing = xhr.responseText;
        console.log(listing);
    }
    
    if (xhr.status != 200) {
        alert('err');
    }
}