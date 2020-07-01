import React from 'react';
import './form.scss';
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
    let theBigObj = {};
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (props.url && props.method) {
                const fetching = await fetch(props.url);
                const data = await fetching.json();
                
                props.resultsHandler(data);
                // let stringData = JSON.stringify(data);
                let id = uuidv4();
                getItem();
                console.log(id)
                let inLocal = {
                    method:props.method,
                    url:props.url,
                    results:data
                };

                theBigObj[id] = inLocal;
                console.log('theBigObj',theBigObj[id])
                let hi = JSON.stringify(theBigObj)
                localStorage.setItem('history',hi );
                console.log('finish event')
                // e.target.reset();
            } else {
                alert('missing info');
            }
            
        }catch(e){console.log(e)}
    }
    
    
    function getItem(){
        let getting = localStorage.getItem('history');
        if (getting){
            console.log('get item',getting);
            theBigObj = JSON.parse(getting);
        }
    }
    // console.log('results')
    // getItem();

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
