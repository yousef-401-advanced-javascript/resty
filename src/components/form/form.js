import React from 'react';
import './form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: '',
            request: {},
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.url && this.state.method) {
            let request = {
                url: this.state.url,
                method: this.state.method,
            };
            let url = '';
            let method = '';
            this.setState({ request, url, method });
            e.target.reset();//try to remove it

        }else{
            alert('missing info');
        }
    }
    handleChangeUrl = (e)=>{
        let url = e.target.value;
        this.setState({url});
    }
    handleChangeMethod = (e)=>{
        let method = e.target.id;
        this.setState({method});
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>URL: </span>
                        <input name='url' id='urll' type='text' onChange={this.handleChangeUrl} />
                        <button>GO!</button>
                    </label>
                    <label>
                        <span id = "get"    className={this.state.method === 'get' ? 'active' : ''}onClick={this.handleChangeMethod}>GET</span>
                        <span id = "post"   className={this.state.method === 'post' ? 'active' : ''} onClick={this.handleChangeMethod}>POST</span>
                        <span id = "put"    className={this.state.method === 'put' ? 'active' : ''} onClick={this.handleChangeMethod}>PUT</span>
                        <span id = "delete" className={this.state.method === 'delete' ? 'active' : ''}onClick={this.handleChangeMethod}>DELETE</span>
                    </label>
                </form>
                <section className = "results">
                    <span className="method">{this.state.request.method}</span>
                    <span className="url">{this.state.request.url}</span>

                </section>
            </React.Fragment>
        )
    }

}

export default Form;
