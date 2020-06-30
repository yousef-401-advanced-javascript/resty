import React from 'react';
import './form.scss';

function Form(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (props.url && props.method) {
                const fetching = await fetch(props.url);
                const data = await fetching.json();

                props.resultsHandler(data);
                e.target.reset();
            } else {
                alert('missing info');
            }

        }catch(e){console.log(e)}
    }
 

    console.log('results')

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>URL: </span>
                    <input name='url' id='urll' type='text' onChange={props.handleChangeUrl} />
                    <button>GO!</button>
                </label>
                <label>
                    <span id="get" className={props.method === 'get' ? 'active' : ''} onClick={props.handleChangeMethod}>GET</span>
                    <span id="post" className={props.method === 'post' ? 'active' : ''} onClick={props.handleChangeMethod}>POST</span>
                    <span id="put" className={props.method === 'put' ? 'active' : ''} onClick={props.handleChangeMethod}>PUT</span>
                    <span id="delete" className={props.method === 'delete' ? 'active' : ''} onClick={props.handleChangeMethod}>DELETE</span>
                </label>
            </form>
            <section className="results">
                <span className="method">{props.method}</span>
                <span className="url">{props.url}</span>

            </section>
        </React.Fragment>
    )
}
export default Form;
