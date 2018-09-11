// let createElement = (element, props, children) => {
//     return { element, children, props }
//     };
// }

let h = React.createElement;

let PageHeader = (props) =>
    h('h1', { className: 'big-header' }, ['Bookstore'])

let BookRow = (props) => 
    h('li', {}, [
        h('h2', {}, props.title),
        h('p', {}, 'Lorem ipsum!')
    ])

let BookList = (props) => 
    h('ul', {}, 
        props.books.map(bookTitle => 
            h(BookRow, { title: bookTitle })
        )
    )

let PageFooter = (props) =>
    h('div', {}, [
        h('footer', {}, ['Copyright 2018']),
        h('a', { href: 'mypage.com' }, ['My Website'])
    ])

let Homepage = (props) =>
    h('div', {}, [
        h(PageHeader, {}),
        h(BookList, { books: ['Book 1', 'Book 2', 'Book 3'] }),
        h(BookList, { books: ['A Tale of Two Cities', 'Book 7', 'Book 12'] }),
        h(PageFooter, {})
    ])

ReactDOM.render(h(Homepage), document.querySelector('.react-root'));