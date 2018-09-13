const h = React.createElement;

let generateId = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

let PageHeader = (props) => 
    h('h1', { className: 'main-header' }, ['Wassup!'])

let WassupRow = (props) => 
    h('li', { className: 'wassup-row' }, 
        h('p', { className: 'wassup-message' }, props.wassup.content)
    )

let WassupList = (props) => 
    h('ul', { className: 'wassup-list' }, [
        props.wassups.map(wassup => 
            h(WassupRow, {
                wassup: wassup,
                key: wassup.id
            })
        ).reverse()
    ])

class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        };
    }
    
    render() {
        return h('form', { 
            onSubmit: (event) => {
                event.preventDefault();
                this.props.addWassup(this.state.newWassup);
            },
            className: 'wassup-form' 
        }, 
            h('input', { 
                onChange: (event) => {
                    let value = event.target.value;
                    this.setState({ newWassup: value })
                },
                value: this.state.newWassup,
                className: 'wassup-form-input',
                type: 'text',
                placeholder: 'Share Wassup!'
            }),
            h('button', { 
                className: 'wassup-form-submit',
                type: 'submit',
            }, 'Post!')
        )
    }
}

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        };
    }

    render() {
        let addWassup = (newWassup) => {
            this.setState({
               wassups: this.state.wassups.concat([
                   {
                    id: generateId(),
                    content: newWassup
                   }
                ])
            });
        }
        return h('div', { className: 'homepage' },
            h(PageHeader),
            h(WassupForm, {
                addWassup: addWassup
            }),
            h(WassupList, { wassups: this.state.wassups })
        )
    }
}

ReactDOM.render(
    h(Homepage), 
    document.querySelector('.react-root')
);