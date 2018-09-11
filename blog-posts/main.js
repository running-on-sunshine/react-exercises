let posts = [
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

let footer = {
        "copyright": "Copyright 2018",
        "href": "mypage.com",
        "url": "My Website"
};

let h = React.createElement;

let BlogHeader = (props) =>
    h('h1', { className: 'main-header', }, [props.title])

let BlogPostRow = (props) =>
    h('li', { className: 'blog-post' }, [
        h('h2', { className: 'blog-post-title' }, props.title),
        h('p', { className: 'blog-post-body' }, props.body)
    ])

let BlogPostList = (props) =>
    h('ul', {}, 
        props.posts.map(post => 
            h(BlogPostRow, post)
        )
    );

let BlogFooter = (props) =>
    h('div', { className: 'footer' }, [
        h('footer', { className: 'blog-copyright' }, props.copyright),  
        h('a', { className: 'blog-url', href: props.href }, props.url)
    ])

let BlogHomepage = (props) =>
    h('div', { className: 'homepage' }, [
        h(BlogHeader, { title: ['Blog Posts'] }),
        h(BlogPostList, { posts: props.posts }),
        h(BlogFooter, props.footer)
    ])

ReactDOM.render(h(BlogHomepage, { posts, footer }), document.querySelector('.react-root'));