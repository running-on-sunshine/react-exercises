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

class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        };
    }
    
    render() {
        return <form 
            className='wassup-form'
            onSubmit={ (event) => {
                event.preventDefault();
                this.props.addWassup(this.state.newWassup);
                } 
            }>
            <input
                type='text'
                className='wassup-form-input'
                placeholder='Share Wassup!'
                value={this.state.newWassup}
                onChange={ (event)  => {
                    this.setState({ newWassup: event.target.value })
                    } }
            />
            <button 
                className='wassup-form-submit' 
                type='submit'>Post!
            </button>
        </form>;
    };
};

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
        return <div className='homepage'>
            <PageHeader />
            <WassupForm addWassup={addWassup} />
            <WassupList wassups={this.state.wassups} />
        </div>;
    };
};

ReactDOM.render(<Homepage />, document.querySelector('.react-root'));