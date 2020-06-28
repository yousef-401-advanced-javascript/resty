import React from 'react';

import './form.scss';
const root = document.getElementById('root');
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method:'',
            api:''
        };
    }
    handleChange =(e)=>{
        const words = e.target.value;
        // console.log(e.target.value)
        this.setState({api:words});

    }
    handleMethod =(e)=>{
        const words = e.target.value;
        console.log(this)
        this.setState({method:words});
    }
    handleClick = (e)=>{
        const method = this.state.method;
        const api = this.state.api;
        // console.log(words)
        e.preventDefault();
        const div = document.createElement('div');
        div.textContent = `${method} \xa0\xa0\xa0 ${api}`;
        root.appendChild(div); 
        // this.setState({method,api});
    }
    render() {
        return (
            <main className = "theMain">
                <form className = "form">
                    <label>URL:</label>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="radio"  name="method" value="GET" onClick={this.handleMethod}/><label>GET</label>
                    <input type="radio"  name="method" value="POST"  onClick={this.handleMethod}/><label>POST</label>
                    <input type="radio"  name="method" value="UPDATE"  onClick={this.handleMethod}/><label>UPDATE</label>
                    <input type="radio"  name="method" value="DELETE"  onClick={this.handleMethod}/><label>DELETE</label>
                    <button onClick = {this.handleClick}>Go</button>
                </form>
                {/* <div>{this.state.method}            {this.state.api}</div> */}

            </main>
            
        )

    }
  
}


export default Form;