const h = React.createElement;

let wassups = [
    {   
        "userId": 1,
        "id": 1,
        "message": "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    },
    {   
        "userId": 1,
        "id": 2,
        "message": "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."
    },
    {   
        "userId": 2,
        "id": 3,
        "message": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
    },
    {   
        "userId": 2,
        "id": 4,
        "message": "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    },
    {   
        "userId": 3,
        "id": 5,
        "message": "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
    },
    {   
        "userId": 3,
        "id": 6,
        "message": "I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
    }
];

let PageHeader = (props) => 
    h('h1', { className: 'main-header' }, ['Wassup!'])

let TextArea = (props) => 
    h('textarea', { 
        className: 'wassup-form-input',
        rows: '2',
        cols: '50',
        maxlength: '180',
        wrap: 'hard',
        required: 'required',
        placeholder: 'Share Wassup!'
    })

let SubmitButton = (props) => 
    h('button', { 
        className: 'wassup-form-submit',
        type: 'submit'
    }, 'Post!')

let WassupForm = (props) => 
    h('form', { className: 'wassup-form' }, 
        h(TextArea, props),
        h(SubmitButton, props)
    )

let WassupRow = (props) => 
    h('li', { className: 'wassup-row' }, 
        h('h3', { className: 'wassup-user' }, props.wassup.userId),
        h('p', { className: 'wassup-message' }, props.wassup.message)
    )

let WassupList = (props) => 
    h('ul', { className: 'wassup-list' }, [
        props.wassups.map(wassup => 
            h(WassupRow, {
                wassup: wassup,
                key: wassup.id
            })
        )
    ])

let Homepage = (props) =>
    h('div', { className: 'homepage' }, 
        h(PageHeader),
        h(WassupForm, { props }),
        h(WassupList, { wassups })
    )

ReactDOM.render(
    h(Homepage), 
    document.querySelector('.react-root')
);