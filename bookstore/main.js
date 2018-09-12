// let createElement = (element, props, children) => {
//     return { element, children, props }
//     };
// }

let h = React.createElement;

let books = [
    'Book 1', 
    'The Color Purple',
    'Where the Sidewalk Ends',
    'A Tale of Two Cities',
    'Book 7',
    '1984'
];

let storeTitleIndex = 0;

let titles = [
    'Bookstore',
    'Emporium',
    'Hall of Death by Papercuts'
];

let changeStoreTitle = () => 
    storeTitleIndex = (storeTitleIndex + 1) % titles.length;

let removeBook = (bookToRemove) => {
    books = books.filter(book => book !== bookToRemove);
};

let snakifyBook = (bookToSnakify) => {
    let newBooks = books.map(book => 
        (book === bookToSnakify) ? book + '🐍' : book
    );
    books = newBooks;
};

let PageHeader = (props) =>
    h('h1', { className: 'big-header' }, titles[storeTitleIndex])

let BookRow = (props) => 
    h('li', {}, [
        h('h2', {}, props.title),
        h('button', {
            onClick: () => {
                removeBook(props.title);
                rerender();
            },
        }, 'Delete Me!'),
        h('button', {
            onClick: () => {
                snakifyBook(props.title);
                rerender();
            },
        }, 'Snakify Me!'),
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
        h(PageHeader),
        h('button', {
            onClick: () => {
                changeStoreTitle();
                rerender();
            },
        }, 'Change store name'),
        h(BookList, { books: books }),
        h(PageFooter)
    ])

let rerender = () => {
    ReactDOM.render(
        h(Homepage), 
        document.querySelector('.react-root')
    );
};

rerender();