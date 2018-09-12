let h = React.createElement;

const books = [
    'Book 1', 
    'The Color Purple',
    'Where the Sidewalk Ends',
    'A Tale of Two Cities',
    'Book 7',
    '1984'
];

const titles = [
    'Bookstore',
    'Emporium',
    'Hall of Death by Papercuts'
];

let removeBook = (bookToRemove) => {
    books = books.filter(book => book !== bookToRemove);
};

let snakifyBook = (bookToSnakify) => {
    let newBooks = books.map(book => 
        (book === bookToSnakify) ? book + '🐍' : book
    );
    books = newBooks;
};

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

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeTitleIndex: 0 
        }
    };
    render() {
        return h('div', {}, [
            h('h1', { className: 'big-header' }, titles[this.state.storeTitleIndex]),
            h('button', {
                onClick: () => {
                    this.setState({
                        storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
                    })
                }
            }, 'Change store name'),
            h(BookList, { books: books }),
            h(PageFooter)
        ])
    }
}

let homepage = new Homepage();
homepage.render()

let rerender = () => {
    ReactDOM.render(
        h(Homepage), 
        document.querySelector('.react-root')
    );
};

rerender();