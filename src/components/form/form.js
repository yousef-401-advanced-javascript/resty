import React from 'react';
import './form.scss';
import { v4 as uuidv4 } from 'uuid';

// function getItem() {
let locals;
let getting = localStorage.getItem('history');
if (getting) {
    // console.log('get item', getting);
    locals = JSON.parse(getting);
}
// }
// getItem();

let arr = locals ? locals : [];


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theBigObj: locals ? locals : [],
            body: '',
        }
    }

    //get
    getHandler = async (e) => {
        try {
            if (this.props.url && this.props.method) {
                const fetching = await fetch(this.props.url);
                const data = await fetching.json();

                this.props.resultsHandler(data);
                let inLocal = {
                    method: this.props.method,
                    url: this.props.url,
                    results: data,
                    id: uuidv4(),
                };

                arr.unshift(inLocal);
                this.setState({ theBigObj: arr });
                let hi = JSON.stringify(this.state.theBigObj)
                localStorage.setItem('history', hi);

            } else {
                alert('missing info');
            }

        } catch (e) { console.log(e) }
    }
    //post and put
    postHandler = async () => {
        try {
            if (this.props.url && this.props.method) {
                let option = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: this.state.body,
                }
                const fetching = await fetch(this.props.url, option);
                const data = await fetching.json();

                this.props.resultsHandler(data);

                let inLocal = {
                    method: this.props.method,
                    url: this.props.url,
                    results: data,
                    id: uuidv4(),
                };
                
                arr.unshift(inLocal);
                this.setState({ theBigObj: arr });
                let hi = JSON.stringify(this.state.theBigObj)
                localStorage.setItem('history', hi);
                
            } else {
                alert('missing info');
            }

        } catch (e) { console.log(e) }

    }

    //put
    putHandler = async () => {
        try {
            if (this.props.url && this.props.method) {
                let option = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: this.state.body,
                }
                const fetching = await fetch(this.props.url, option);
                const data = await fetching.json();

                this.props.resultsHandler(data);

                let inLocal = {
                    method: this.props.method,
                    url: this.props.url,
                    results: data,
                    id: uuidv4(),
                };
                
                arr.unshift(inLocal);
                this.setState({ theBigObj: arr });
                let hi = JSON.stringify(this.state.theBigObj)
                localStorage.setItem('history', hi);
                
            } else {
                alert('missing info');
            }

        } catch (e) { console.log(e) }

    }
    //delete
    deleteHandler = async (e) => {
        try {
            const option = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const fetching = await fetch(this.props.url, option);
            const data = await fetching.json();
            this.props.resultsHandler(data);
        } catch (err) {
            console.log(err);
        }
    }
    handleSubmit = async (e) => {
        try {
            e.preventDefault();
            e.target.reset();
            switch (this.props.method) {
                case 'post':
                    await this.postHandler(e);
                    break;
                case 'put':
                    await this.putHandler(e);
                    break;
                case 'delete':
                    await this.deleteHandler(e);
                    break;
                default:
                    await this.getHandler(e);
            }
        } catch (err) {
            console.log(err);
        }
    }

    bodyChange = (e) => {
        let body = e.target.value;
        this.setState({ body });
    }



    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>URL: </span>
                        <input name='url' id='urll' type='text' onChange={this.props.handleChangeUrl} />
                        <button>GO!</button>
                    </label>
                    <label>
                        <span id="get" className={this.props.method === 'get' ? 'active' : ''} onClick={this.props.handleChangeMethod}>GET</span>
                        <span id="post" className={this.props.method === 'post' ? 'active' : ''} onClick={this.props.handleChangeMethod}>POST</span>
                        <span id="put" className={this.props.method === 'put' ? 'active' : ''} onClick={this.props.handleChangeMethod}>PUT</span>
                        <span id="delete" className={this.props.method === 'delete' ? 'active' : ''} onClick={this.props.handleChangeMethod}>DELETE</span>
                    </label>
                    <label>the Body</label>
                    <textarea onChange={this.bodyChange}></textarea>
                </form>
                <section className="results">
                    <ul>{
                        this.state.theBigObj.map(val => {
                            return (<li key={val.id}>
                                <span className="method">{val.method}</span>
                                <span className="url">{val.url}</span>
                            </li>)
                        })}
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}
export default Form;
