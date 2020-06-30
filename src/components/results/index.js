import React from 'react';


function Results(props) {
    // console.log('results in results', props.results)
    return (
        <>
            <h3>hello</h3>
            <div className='apiResults'>
            
            <pre>{JSON.stringify({Headers:props.headers, Response:props.results}, null, '\t')}</pre>


            </div>
        </>
    )
}

export default Results;