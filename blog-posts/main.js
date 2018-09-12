let initialPostList = [
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

let h = React.createElement;

let snakifyPost = (postToSnakify) => {
    let newPosts = posts.map(post => 
        (post.id === postToSnakify.id) ? 
            Object.assign({}, post, { title: post.title + '🐍' }) 
            // {...post, title: post.title + '🐍'}
        : 
            post
    );
    posts = newPosts;
};

let BlogHeader = (props) =>
    h('h1', { className: 'main-header', }, ['Blog Posts'])

let BlogPostRow = (props) =>
    h('li', { className: 'blog-post' }, [
        h('h2', { className: 'blog-post-title' }, props.post.title),
        h('button', {
            onClick: () => {
                props.removePost(props.post);
            },
        }, 'Delete Me!'),
        h('button', {
            onClick: () => {
                snakifyPost(props);
                rerender();
            },
        }, 'Snakify Me!'),
        h('p', { className: 'blog-post-body' }, props.post.body)
    ])

let BlogPostList = (props) =>
    h('ul', {}, 
        props.posts.map(post => 
            h(BlogPostRow, {
                post: post,
                removePost: props.removePost
            })
        )
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
        return h('div', { className: 'homepage' }, [
            h(BlogHeader),
            h(BlogPostList, {
                posts: this.state.posts,
                removePost: removePost, 
            }),
            h(BlogFooter)
        ])
    }
}

let blogHomepage = new BlogHomepage();
blogHomepage.render();

ReactDOM.render(
    h(BlogHomepage), 
    document.querySelector('.react-root')
);