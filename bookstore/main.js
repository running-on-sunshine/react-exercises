let h = React.createElement;

const initialBookList = [
    {
        "id": 1,
        "title": "A Tale of Two Cities"
    },
    {
        "id": 2,
        "title": "The Color Purple"
    },
    {
         "id": 3,
         "title": "Where the Sidewalk Ends"
    }
 ];

const titles = [
    'Bookstore',
    'Emporium',
    'Hall of Death by Papercuts'
];

let BookRow = (props) => 
    h('li', {}, [
        h('h2', {}, props.book.title),
        h('button', {
            onClick: () => {
                props.removeBook(props.book);
            },
        }, 'Delete Me!'),
        h('button', {
            onClick: () => {
                props.snakifyBook(props.book);
            },
        }, 'Snakify Me!'),
        h('p', {}, 'Lorem ipsum!')
    ])

let BookList = (props) => 
    h('ul', {}, 
        props.books.map(book => 
            h(BookRow, {
                book: book,
                removeBook: props.removeBook,
                snakifyBook: props.snakifyBook
            })
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
            books: initialBookList,
            storeTitleIndex: 0 
        }
    }

    render() {
        let removeBook = (bookToRemove) => {
            this.setState({
                books: this.state.books.filter(book =>
                    book.id !== bookToRemove.id)
            })
        };
        let snakifyBook = (bookToSnakify) => {
            this.setState({
                books: this.state.books.map(book =>
                    (book.id === bookToSnakify.id) ?
                        Object.assign({}, book, { title: book.title + '🐍' })
                    :
                        book
                )
            });
        };
        return h('div', {}, [
            h('h1', { className: 'big-header' }, titles[this.state.storeTitleIndex]),
            h('button', {
                onClick: () => {
                    this.setState({
                        storeTitleIndex: (this.state.storeTitleIndex + 1) % titles.length
                    })
                }
            }, 'Change store name'),
            h(BookList, { 
                books: this.state.books,
                removeBook: removeBook,
                snakifyBook: snakifyBook
            }),
            h(PageFooter)
        ])
    }
}

let homepage = new Homepage();
homepage.render()

ReactDOM.render(
    h(Homepage), 
    document.querySelector('.react-root')
);