import React from 'react';
import './app.scss';

import Header from './components/header/';
import Footer from './components/footer/';
import Results from './components/results/';

import Form from './components/form/form.js';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method:'get',
            url:'',
            counts:0,
            results:[],
            headers:{},
        };
    }
    handlingTheResults = (results)=>{
        // console.log(results)
        let headers = {
            Accept: 'application/json'
          }
        this.setState({ results, headers });
    }
    handleChangeUrl = (e) => {
        let url = e.target.value;
        this.setState({ url });
    }
    handleChangeMethod = (e) => {
        let method = e.target.id;
        this.setState({ method });
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                 <Form
                  resultsHandler={this.handlingTheResults}
                   handleChangeUrl={this.handleChangeUrl}
                   handleChangeMethod={this.handleChangeMethod}
                   url={this.state.url}
                   method={this.state.method}
                    />
                <Results headers={this.state.headers} results={this.state.results} />
                    
                <Footer />
            </React.Fragment>
            // <h1>hi</h1>
        )
    }
}

export default App;