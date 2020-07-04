import React from 'react';
import './app.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/';
import Footer from './components/footer/';
import Results from './components/results/';
import History from './components/history/';
import Form from './components/form/form.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method: 'get',
            url: '',
            counts: 0,
            results: {},
            headers: {},
        };
    }
    handlingTheResults = (results) => {
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
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header />
                    <Route exact path='/'>
                        <main>
                            <Form
                                resultsHandler={this.handlingTheResults}
                                handleChangeUrl={this.handleChangeUrl}
                                handleChangeMethod={this.handleChangeMethod}
                                url={this.state.url}
                                method={this.state.method}
                            />
                            <Results headers={this.state.headers} results={this.state.results} />

                        </main>
                    </Route>

                    <Route exact path='/history'>
                        <main>
                            <History />
                        </main>
                    </Route>

                    <Footer />
                </Router>
            </React.Fragment >

        )
    }
}

export default App;