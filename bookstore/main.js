// let createElement = (element, props, children) => {
//     return { element, children, props }
//     };
// }

let h = React.createElement;

let BookRow = (props) => 
    h('li', {}, [
        h('h2', {}, props.title),
        h('p', {}, 'Lorem ipsum!')
    ])

let BookList = (props) => {
    return h('ul', {}, 
        props.books.map(bookTitle => 
            h(BookRow, { title: bookTitle })
        )
    );
};

let vdom = h('div', {}, [
    h('h1', { className: 'big-header' }, ['Bookstore']),
    h(BookList, { books: ['Book 1', 'Book 2', 'Book 3'] }),
    h(BookList, { books: ['A Tale of Two Cities', 'Book 7', 'Book 12'] }),
    h('footer', {}, ['Copyright 2018']),
    h('a', { href: 'mypage.com' }, ['My Website']),
    ]
);

ReactDOM.render(vdom, document.querySelector('.react-root'));