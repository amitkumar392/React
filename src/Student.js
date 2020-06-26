// import React from 'react';

// // student component using funtion with props
// const Student=(props)=>{
// return <h1>this is student component {props.name}</h1>
// }
// export default Student;

/**
 * javascript expression in JSX
 */
// import React from 'react';
// function show(name){
//     return name;
// }
//object
// let user={
//     firstName:"sdfghj"
// };
// const el=<h1>hello {show("amit")}</h1>
// const el=<h1>hello {user.firstName}</h1>
//  export default el;


/**
 * example of using props with function component
 */
// import React from 'react';
// const Student=(props)=> {
//     return (
//         <div>
//             <h1>my name is {props.name}</h1>
//             <h1>Company Name {props.companyName}</h1>
//         </div>
//     )
// }
// export default Student;


/**
 * example of using props with class component 
 * props is a object 
 */

/**
 * typechecking with Proptype
 */

// import React, { Component } from 'react';
// import PropType from 'prop-types';

// class Student extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>my name is {this.props.name}</h1>
//                 <h1>Company Name {this.props.companyName}</h1>
//             </div>
//         )
//     }
// }
// Student.propTypes={
//     name:PropType.string.isRequired
// };
// Student.defaultProps={
//     name:"amit soni"
// }
// export default Student;

/**
 * children in jsx 
 */
// import React, { Component } from 'react';
//funtion component
//  const Student=props=>{
//  return <h1>hello sumit {props.children}</h1>
//  }
//  export default Student;

//class component
//  class Student extends Component{
//      render(){
//      return <h1>hello sumit {this.props.children}</h1>
//      }
//  }
//  export default Student;





/**
 * State in react js
 */
// import React, { Component } from 'react';

// class Student extends Component {
//     //we are using state property inside the class , without constructor
//     // state={
//     //     name:"amit",
//     //     companyName:"HCL",
//     //     SapId:this.props.SapId
//     // }
//     //with constructor
//     constructor(props){
//         super(props);
//        this.state={
//             name:"amit",
//             companyName:"HCL",
//             SapId:this.props.SapId
//         }
//     }
//     render(){
//     return <h1>i am is {this.state.name}. 
//     I work in {this.state.companyName}. My SapId is {this.state.SapId}</h1>
//     }
// }
// export default Student;





/**
 * event handling in react js
 * event follow camelCase convention 
 * event can be used in both funtional and class component
 */
// import React, { Component } from 'react'

// class Student extends Component {
// es6 method so this method is automatically bind with handleClick funtion.
// state = {
//     name: "amit",
//     companyName: "HCL",
//     SapId: this.props.SapId
// }
// handleClick = () => {
//     //update obj
//     this.setState({name:"sumit"});
//     console.log('button clicked', this);
//     //upadte function
//     this.setState(function(state,props){
//         console.log(state.name);
//         console.log(props);
//     });
// }
// if you use es5 than you have to bind this method to handleClick funtion manually.
// constructor(props){
//     super(props);
//     this.handleClick=this.handleClick.bind(this);
// }
// handleClick(){
//     console.log('buton click', this);
// }
//     render() {
//         return (
//             <div>
//                 <h1>this is event handling example {this.state.name}</h1>
//                 <button onClick={this.handleClick}>click me</button>
//             </div>
//         )
//     }

// }
// export default Student;










/**
 * event handling in react js
 * event follow camelCase convention
 * event can be used in both funtional and class component
 */
// import React from 'react';
//  function Student(){


//  const handleClick=()=>{
//      console.log('button clicked');
//  }

// function handleClick(){
//     console.log('button click');
// }

// function handleClick(e){
// e.preventDefault();
//         console.log('button clicked');
//     }
//      return (
//          <div>
//              <h1>my name amit</h1>
//              <button onClick={handleClick}>click me</button>
//              <a href="http://www.google.com" onClick={handleClick}>click me</a>

//          </div>
//      )
//  }
//  export default Student;



/**
 * passing argument in event handler
 * we can pass argument with two ways 
 * 1. using arrow funtion
 * 2. using bind method
 */
import React, { Component } from 'react'

class Student extends Component {
    state = {
        id: 1,
        name: "amit"
    }
    handleClick = (id, e) => {
        console.log('button clicked');
        console.log(id);
        console.log(e);
    }
    handleClickArg = () => {
        this.handleClick(this.state.id, e);
    }
    render() {
        return (
            <div>
                <h1>my name is {this.state.name}</h1>
                {/* <button onClick={this.handleClick.bind(this,this.state.id)}>Delete</button> */}
                <button onClick={this.handleClickArg}>Delete</button>

{/* 
                <button onClick={e => {
                    this.handleClick(this.state.id, e)
                }}>Delete</button> */}
            </div>
        )
    }
}
export default Student;