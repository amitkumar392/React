// import React from 'react';
// Employee component using funtion with props
// function Employee(){
//     return <h1>this is employee component</h1>



// }

// export default Employee;


/**
 * this is parent class for Car Component
 * to perform static getDerivedStateFromProps method
 */
import React, { Component } from 'react'
import Car from './Car'

export default class Employee extends Component {
    constructor() {
        super()
        this.state = {
            roll: 102
        }
    }
    handleClick=()=>{
        console.log('button clicked');
        this.setState({roll:105});
    }
    render() {
        return (
            <div>
                <h1>this is Employee Parent Component</h1>
                <button onClick={this.handleClick}>Change</button>
                <Car mroll={this.state.roll}/>
            </div>
        )
    }
}
