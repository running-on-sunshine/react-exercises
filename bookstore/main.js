// let createElement = (element, props, children) => {
//     return { element, children, props }
//     };
// }

let h = React.createElement;

let vdom = h('div', {}, [
    h('h1', { className: 'big-header' }, ['Bookstore']),
    h('ul', {}, [
        h('li', {}, ['Book 1']),
        h('li', {}, ['Book 2']),
        h('li', {}, ['Book 3'])
        ]),
    h('footer', {}, ['Copyright 2018']),
    h('a', { href: 'mypage.com' }, ['My Website']),
    ]
);

ReactDOM.render(vdom, document.querySelector('.react-root'));