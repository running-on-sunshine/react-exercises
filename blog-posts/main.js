const initialPostList = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      }
];

const h = React.createElement;

let BlogHeader = (props) =>
    h('h1', { className: 'main-header' }, ['Blog Posts'])

let RemoveButton = (props) =>
    h('button', {
        onClick: () => {
            props.removePost(props.post);
        },
        type: 'button',
        className: 'button'
    }, 'Delete Me!')

let SnakifyButton = (props) =>
    h('button', {
        onClick: () => {
            props.snakifyPost(props.post);
        },
        type: 'button',
        className: 'button'
    }, 'Snakify Me!')

let BlogPostRow = (props) =>
    h('li', { className: 'blog-post' }, [
        h('h2', { className: 'blog-post-title' }, props.post.title),
        h('p', { className: 'blog-post-body' }, props.post.body),
        h(RemoveButton, props),
        h(SnakifyButton, props)
    ])

let BlogPostList = (props) =>
    h('ul', { className: 'blog-post-list' }, [ 
        props.posts.map(post => 
            h(BlogPostRow, {
                post: post,
                removePost: props.removePost,
                snakifyPost: props.snakifyPost
            })
        )]
    )

let BlogFooter = (props) =>
    h('div', { className: 'footer' }, [
        h('footer', { className: 'blog-copyright' }, ['Copyright 2018']),  
        h('a', { className: 'blog-url', href: 'mypage.com' }, ['My Website'])
    ])

class BlogHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: initialPostList
        }
    }

    render() {
        let removePost = (postToRemove) => {
            this.setState({
                posts: this.state.posts.filter(post => 
                    post.id !== postToRemove.id)
            })
        };
        let snakifyPost = (postToSnakify) => {
            this.setState({
                posts: this.state.posts.map(post => 
                    (post.id === postToSnakify.id) ? 
                        Object.assign({}, post, { title: post.title + '🐍' }) 
                    : 
                        post
                )
            });
        };
        return h('div', { className: 'homepage' }, [
            h(BlogHeader),
            h(BlogPostList, {
                posts: this.state.posts,
                removePost: removePost,
                snakifyPost: snakifyPost 
            }),
            h(BlogFooter)
        ])
    }
}

ReactDOM.render(
    h(BlogHomepage), 
    document.querySelector('.react-root')
);