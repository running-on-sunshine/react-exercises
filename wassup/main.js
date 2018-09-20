let generateId = () =>
    Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();

let PageHeader = (props) => 
    <h1 className='main-header'>Wassup!</h1>

let WassupRow = (props) => 
    <li className='wassup-row'>
        <p>{props.wassup.content}</p>
    </li>

let WassupList = (props) => 
    <ul className='wassup-list'>
        { props.wassups.map(wassup => 
            <WassupRow wassup={wassup} key={wassup.id} />
        ).reverse() }
    </ul>

class WassupFormWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            newWassup: ''
        }
    }

    render() {
        let updateWassup = (message) => {
            this.setState({ newWassup: message })
        }

        return <WassupForm {...this.props}
            newWassup={this.state.newWassup}
            updateWassup={updateWassup}
        />
    }
}

let WassupForm = (props) =>
    <form 
        className='wassup-form'
        onSubmit={ (event) => {
            event.preventDefault();
            props.addWassup(props.newWassup);
            } 
        }>
        <input
            type='text'
            className='wassup-form-input'
            placeholder='Share Wassup!'
            value={props.newWassup}
            onChange={ (event)  => {
                props.updateWassup(event.target.value)
                } }
        />
        <button 
            className='wassup-form-submit' 
            type='submit'>Post!
        </button>
    </form>

class HomepageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        };
    }
    
    getWassups() {
        fetch('http://0.tcp.ngrok.io:10766/wassups.json')
            .then(res => res.json())
            .then(wassups => {
                this.setState({ wassups: wassups });
            });
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
        return <Homepage {...this.props}
            addWassup={addWassup}
            wassups={this.state.wassups}
        />
    };

    componentDidMount() {
        this.getWassups();
    }
};

let Homepage = (props) => 
    <div className='homepage'>
        <PageHeader />
        <button className='get-wassups' onClick={() => props.getWassups()}>Get Wassups</button>
        <WassupFormWrapper addWassup={props.addWassup} />
        <WassupList wassups={props.wassups} />
    </div>

ReactDOM.render(<HomepageContainer />, document.querySelector('.react-root'));