// let createElement = (element, props, children) => {
//     return { element, children, props }
//     };
// }

let h = React.createElement;

let BookRow = (bookTitle) => 
    h('li', {}, [bookTitle])

let vdom = h('div', {}, [
    h('h1', { className: 'big-header' }, ['Bookstore']),
    h('ul', {}, [
        BookRow('Book 1'),
        BookRow('Book 2'),
        BookRow('Book 3')
        ]),
    h('footer', {}, ['Copyright 2018']),
    h('a', { href: 'mypage.com' }, ['My Website']),
    ]
);

ReactDOM.render(vdom, document.querySelector('.react-root'));