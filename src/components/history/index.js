import React from 'react';

export default History = (props) => {
    let theQueries = [];
    let getting = localStorage.getItem('history');
    if (getting) {
        // console.log('get item', getting);
        theQueries = JSON.parse(getting);

    }
    return (
        <>
            <section className="results">
                <ul>{
                    theQueries.map(val => {
                        return (<li key={val.id}>
                            <span className="method">{val.method}</span>
                            <span className="url">{val.url}</span>
                        </li>)
                    })}
                </ul>
            </section>
        </>
    )

}